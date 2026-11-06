import React from 'react';

/**
 * Small line-art glyphs used by the annotation UI. All icons are inline SVG
 * with `currentColor` strokes so they follow the reader theme without any
 * external asset.
 */

export function HighlightGlyph({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M9.4 2.6 5.1 6.9l-.7 2.7 2.7-.7 4.4-4.3-2.1-2Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="m4.4 9.6-2.1 2.1c-.5.5-.5 1.2 0 1.7s1.2.5 1.7 0l2.1-2.1" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M3 13.5h7.4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" opacity=".55" />
    </svg>
  );
}

export function UnderlineGlyph({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M4.2 3v4.6a3.8 3.8 0 0 0 7.6 0V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.4 13.3c2-.7 4.2-.8 9.2-.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function NoteGlyph({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M3.5 2.7h9v6.2l-3.2 3.4H3.5z"
        fill="currentColor"
        fillOpacity=".9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M9.3 12.3V9h3.1" stroke="var(--dshr-anno-paper, #ffffff)" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M5.4 5.5h5.1M5.4 7.4h3.4" stroke="var(--dshr-anno-paper, #ffffff)" strokeWidth="1" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

export function EmptyAnnotationIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true" focusable="false">
      <rect x="8.5" y="9" width="33" height="38" rx="4" stroke="currentColor" strokeWidth="1.8" opacity=".55" />
      <path d="M15 18h20M15 24h20M15 30h13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity=".42" />
      <path
        d="M34 28.5h11.5v9.2l-4.6 5H34z"
        fill="currentColor"
        fillOpacity=".16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M40.9 42.7v-5h4.6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M36.8 33.6h5.6M36.8 36.4h3.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

export function CloseGlyph({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
      <path d="m3.4 3.4 7.2 7.2M10.6 3.4 3.4 10.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
