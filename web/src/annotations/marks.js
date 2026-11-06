/**
 * Pure geometry helpers shared by the flow and PDF annotation layers.
 *
 * Kept JSX-free (plain .js) so it can be imported from esbuild's automatic
 * JSX entry points without a loader override, and so the formulas stay easy to
 * reason about and test.
 */

export function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.min(max, Math.max(min, number));
}

/**
 * Fraction of a text-line box covered by a highlighter band for the three
 * contracted widths (4 / 9 / 16). Thin ~36%, medium ~50%, wide ~70%.
 * Unknown widths fall back to the medium band.
 */
export function bandRatio(width) {
  const numeric = Number(width);
  const clamped = clampNumber(Number.isFinite(numeric) ? numeric : 9, 4, 16);
  return 0.36 + ((clamped - 4) / 12) * 0.34;
}

/** Vertical placement of the band inside the line box (paper-ish: low). */
export function bandOffset(ratio) {
  const safe = clampNumber(ratio, 0.1, 0.95);
  return (1 - safe) * 0.82;
}

/** Stable 32-bit hash for annotation ids (used to vary hand-drawn strokes). */
export function hashSeed(value) {
  const text = String(value == null ? '' : value);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/** Deterministic pseudo-random unit value in [0, 1). */
export function hashUnit(seed, salt = 0) {
  let value = (Number(seed) ^ Math.imul((Number(salt) || 0) + 1, 0x9e3779b9)) >>> 0;
  value ^= value << 13;
  value >>>= 0;
  value ^= value >>> 17;
  value ^= value << 5;
  value >>>= 0;
  return value / 4294967296;
}

/**
 * A slightly irregular cubic path that looks hand-drawn rather than ruled.
 * Rendered inside an SVG with `preserveAspectRatio="none"` so it stretches to
 * the full line width at any zoom.
 */
export function handDrawnUnderline(seed, width) {
  const lineWidth = Math.max(4, Number(width) || 4);
  const jitter = (salt) => (hashUnit(seed, salt) * 2 - 1);
  const startY = 3.7 + jitter(1) * 0.5;
  const firstY = 3.1 + jitter(2) * 0.45;
  const midY = 3.7 + jitter(3) * 0.45;
  const endY = 3.3 + jitter(4) * 0.55;
  const midX = lineWidth * 0.54;
  const endX = Math.max(1, lineWidth - 0.6);
  return [
    `M0.6 ${startY.toFixed(2)}`,
    `C${(lineWidth * 0.18).toFixed(2)} ${firstY.toFixed(2)}`,
    `${(lineWidth * 0.34).toFixed(2)} ${firstY.toFixed(2)}`,
    `${midX.toFixed(2)} ${midY.toFixed(2)}`,
    `S${(lineWidth * 0.82).toFixed(2)} ${endY.toFixed(2)}`,
    `${endX.toFixed(2)} ${(endY - 0.25).toFixed(2)}`,
  ].join(' ');
}

/** Compact label used for tooltips on note buttons. */
export function annotationLabel(annotation) {
  if (!annotation) return '批注';
  const note = typeof annotation.note === 'string' ? annotation.note.trim() : '';
  if (note) return note.length > 34 ? `${note.slice(0, 34)}…` : note;
  const quote = typeof annotation.quote === 'string' ? annotation.quote.trim() : '';
  if (quote) return quote.length > 34 ? `${quote.slice(0, 34)}…` : quote;
  return '批注';
}
