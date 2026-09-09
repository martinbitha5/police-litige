import type { CSSProperties } from 'react';

// Primitives de style partagées, registre Uber (voir apps/web/DESIGN.md).
// Noir et blanc pour la structure, un seul accent bleu qui signale. Rayon 8
// ou pilule. Une carte est portée par une ombre douce et un filet clair.

export const card: CSSProperties = {
  background: 'var(--bg-elevated)',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'var(--divider)',
  borderRadius: 8,
  boxShadow: 'var(--shadow-card)',
  padding: 20,
};

// Carte teintée (mise en avant, encart) : aplat gris, sans bordure ni ombre.
export const cardTinted: CSSProperties = {
  background: 'var(--bg-neutral)',
  border: 'none',
  borderRadius: 8,
  padding: 20,
};

// Anciens noms conservés : les pages existantes composent encore dessus. Ils
// rendent la même surface blanche que `card`, sans padding ni rayon.
export const glass: CSSProperties = {
  background: 'var(--bg-elevated)',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'var(--divider)',
  boxShadow: 'var(--shadow-card)',
};

export const glassStrong: CSSProperties = { ...glass };

// Bouton primaire : pilule noire, texte blanc. Un seul par écran.
export const btnPrimary: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  height: 44,
  background: 'var(--interactive-accent)',
  color: 'var(--interactive-control)',
  border: 'none',
  borderRadius: 9999,
  padding: '0 20px',
  fontWeight: 500,
  fontSize: 15,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

// Bouton secondaire : aplat gris, texte noir, même pilule. Plus de bordure.
export const btnSecondary: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  height: 44,
  background: 'var(--bg-neutral-hover)',
  color: 'var(--content-primary)',
  border: 'none',
  borderRadius: 9999,
  padding: '0 20px',
  fontWeight: 500,
  fontSize: 15,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

// Alias conservé pour les pages qui importent encore `btnGhost` : c'est le
// même bouton secondaire.
export const btnGhost: CSSProperties = { ...btnSecondary };

// Lien-bouton : transparent, texte noir souligné. Pour les actions tertiaires.
export const btnText: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  height: 44,
  background: 'transparent',
  color: 'var(--content-primary)',
  border: 'none',
  borderRadius: 9999,
  padding: '0 8px',
  fontWeight: 500,
  fontSize: 15,
  textDecoration: 'underline',
  textUnderlineOffset: '0.3em',
  whiteSpace: 'nowrap',
};

// Modales : voile sombre, panneau blanc rayon 8 porté par l'ombre de popover.
export const modalOverlay: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.45)',
  zIndex: 50,
  display: 'grid',
  placeItems: 'center',
  padding: 16,
};

export const modalPanel: CSSProperties = {
  background: 'var(--bg-elevated)',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'var(--divider)',
  borderRadius: 8,
  boxShadow: 'var(--shadow-pop)',
};

// Champ : gris au repos, bordure transparente (le filet noir du focus,
// posé par globals.css, ne décale alors rien).
export const input: CSSProperties = {
  background: 'var(--bg-neutral)',
  border: '1px solid transparent',
  borderRadius: 8,
  padding: '10px 14px',
  minHeight: 44,
  color: 'var(--content-primary)',
  fontSize: 14,
  colorScheme: 'light',
  width: '100%',
};

export const label: CSSProperties = { fontSize: 14, color: 'var(--content-secondary)', fontWeight: 500 };

// Titre de section : Figtree 700, casse normale.
export const sectionHeading: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 20,
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.2,
  color: 'var(--content-primary)',
  margin: '8px 0 14px',
};

// Petit libellé en capitales, gris : quand un vrai titre serait trop lourd
// (au-dessus d'un groupe de champs, d'une colonne de chiffres).
export const eyebrow: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  color: 'var(--content-tertiary)',
  margin: '8px 0 10px',
};

// Pastille pilule neutre, casse normale. Les appelants peuvent surcharger
// background/color avec les paires sémantiques (--positive-bg/--positive...).
export const badge: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  background: 'var(--bg-neutral)',
  color: 'var(--content-secondary)',
  border: 'none',
  borderRadius: 9999,
  padding: '3px 10px',
  fontSize: 12,
  fontWeight: 600,
  whiteSpace: 'nowrap',
};

// Tons de pastilles (fond + texte) : un statut, jamais une décoration.
export const badgeTone = {
  positive: { background: 'var(--positive-bg)', color: 'var(--positive)' } as CSSProperties,
  warning: { background: 'var(--warning-bg)', color: 'var(--warning-content)' } as CSSProperties,
  negative: { background: 'var(--negative-bg)', color: 'var(--negative)' } as CSSProperties,
  neutral: { background: 'var(--bg-neutral)', color: 'var(--content-secondary)' } as CSSProperties,
};

// Pastilles par statut de litige : ouvert = en attente, en cours = neutre,
// résolu = réussi.
export const DISPUTE_BADGE: Record<string, CSSProperties> = {
  open: badgeTone.warning,
  investigating: badgeTone.neutral,
  resolved: badgeTone.positive,
};

// Couleurs par statut de litige (texte seul), conservé pour compatibilité.
export const DISPUTE_COLOR: Record<string, string> = {
  open: 'var(--warning-content)',
  investigating: 'var(--content-secondary)',
  resolved: 'var(--positive)',
};
