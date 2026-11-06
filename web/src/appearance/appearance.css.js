/**
 * dsh-reader appearance CSS (v2).
 *
 * Injected once by the shell *after* `styles` and `pdfStyles`, so these rules
 * can refine the existing reader surface using the custom properties produced
 * by `appearanceVars()`. Everything is scoped under reader class names; no rule
 * here restyles the host application.
 *
 * Background images are rendered as a sticky pseudo layer inside the two scroll
 * surfaces (flow content and PDF scrollport). The layer is sized with container
 * query units, cancels its own layout height with a negative margin, and sits
 * at `z-index: -1` inside an isolated stacking context, so it scrolls with the
 * viewport but paints *below* text, selections, translation cards and any
 * annotation overlay. No opaque overlay is ever placed above the content.
 */

export const appearanceStyles = String.raw`
/* ============================================================ defaults ===== */

.dshr-root {
  --dshr-reader-bg: #fbf7ee;
  --dshr-reader-ink: #2b2a26;
  --dshr-reader-muted: #736f64;
  --dshr-reader-border: rgba(43, 42, 38, 0.15);
  --dshr-reader-accent: #9a6b2f;
  --dshr-reader-font: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "宋体", Georgia, "Times New Roman", serif;
  --dshr-reader-weight: 400;
  --dshr-reader-heading-weight: 600;
  --dshr-reader-width: 760px;
  --dshr-reader-brightness: 1;
  --dshr-reader-image-opacity: 0.26;
  --dshr-reader-image-blur: 0px;
  --dshr-reader-image: none;
}

/* ====================================================== flow reader surface = */

.dshr-content {
  container-type: size;
  position: relative;
  isolation: isolate;
  background-color: var(--dshr-reader-bg, #fbf7ee);
  color: var(--dshr-reader-ink, #2b2a26);
  filter: brightness(var(--dshr-reader-brightness, 1));
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 46%, transparent) transparent;
}

/* Sticky image layer: full scrollport, painted above the page color and below
   the content. A 100cqh height plus the matching negative margin keep it out of
   layout flow while the sticky box stays pinned to the scrollport. */
.dshr-content::before {
  content: "";
  position: sticky;
  top: 0;
  z-index: -1;
  display: block;
  flex: none;
  width: 100%;
  height: 100cqh;
  margin-bottom: -100cqh;
  pointer-events: none;
  background-image: var(--dshr-reader-image, none);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: var(--dshr-reader-image-opacity, 0.26);
  filter: blur(var(--dshr-reader-image-blur, 0px));
}

.dshr-content__inner {
  width: min(var(--dshr-reader-width), calc(100% - 48px));
  overflow-wrap: break-word;
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-content.is-pdf .dshr-content__inner {
  width: 100%;
}

.dshr-content::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.dshr-content::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 6px;
  background: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 40%, transparent);
  background-clip: content-box;
}

.dshr-content::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 58%, transparent);
  background-clip: content-box;
}

.dshr-content ::selection {
  background: color-mix(in srgb, var(--dshr-reader-accent, #9a6b2f) 26%, transparent);
}

/* ------------------------------------------------------------ flow typography */

.dshr-block {
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-weight, 400);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-block[data-kind="heading"] :is(h1, h2, h3, h4, h5, h6) {
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-heading-weight, 600);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-chapter__kicker {
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-block[data-kind="list-item"]::before {
  color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-block[data-kind="quote"] {
  color: var(--dshr-reader-muted, #736f64);
  border-left-color: color-mix(in srgb, var(--dshr-reader-accent, #9a6b2f) 55%, transparent);
}

.dshr-block[data-kind="code"] {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 5%, var(--dshr-reader-bg, #fbf7ee));
  border-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-block[data-kind="table"] :is(td, th) {
  border-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

.dshr-block[data-kind="table"] th {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 5%, var(--dshr-reader-bg, #fbf7ee));
}

.dshr-block[data-kind="image"] figcaption {
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-block[data-kind="rule"] {
  background: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

.dshr-block a {
  color: var(--dshr-reader-accent, #9a6b2f);
  border-bottom-color: color-mix(in srgb, var(--dshr-reader-accent, #9a6b2f) 34%, transparent);
}

.dshr-block a:hover {
  border-bottom-color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-block :is(ruby, rt) {
  color: var(--dshr-reader-muted, #736f64);
}

/* -------------------------------------------------- translation + navigation */

.dshr-translation {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 6%, var(--dshr-reader-bg, #fbf7ee));
  border-color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 13%, transparent);
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-translation::before {
  color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-translation.is-error {
  background: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 88%, #d64545);
  border-color: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 58%, #d64545);
  color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 55%, #d64545);
}

.dshr-translation__retry {
  color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 55%, #d64545);
}

.dshr-translation__loading {
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-content .dshr-spinner {
  border-color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 18%, transparent);
  border-top-color: var(--dshr-reader-accent, #9a6b2f);
}

.dshr-content .dshr-btn {
  color: var(--dshr-reader-muted, #736f64);
}

.dshr-content .dshr-btn:hover {
  background: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 8%, transparent);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-content .dshr-btn--outline {
  background: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 52%, transparent);
  border-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

.dshr-content .dshr-btn--outline:hover {
  border-color: color-mix(in srgb, var(--dshr-reader-ink, #2b2a26) 30%, transparent);
}

.dshr-chapter__nav {
  border-top-color: var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
}

/* ======================================================= PDF reader surface = */

.dshr-pdf-scroll {
  container-type: size;
  position: relative;
  isolation: isolate;
  background-color: var(--dshr-reader-bg, #fbf7ee);
  scrollbar-color: color-mix(in srgb, var(--dshr-reader-muted, #736f64) 44%, transparent) transparent;
}

.dshr-pdf-scroll::before {
  content: "";
  position: sticky;
  top: 0;
  z-index: -1;
  display: block;
  flex: none;
  width: 100%;
  height: 100cqh;
  margin-bottom: -100cqh;
  pointer-events: none;
  background-image: var(--dshr-reader-image, none);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: var(--dshr-reader-image-opacity, 0.26);
  filter: blur(var(--dshr-reader-image-blur, 0px));
}

/* A small fixed gutter keeps fit-width pages away from the scrollbar without
   duplicating the user-facing reading-width control. */
.dshr-pdf-content {
  padding-left: 20px;
  padding-right: 20px;
}

.dshr-pdf-scroll {
  filter: brightness(var(--dshr-reader-brightness, 1));
}

/* ================================================== responsive refinement === */

@container (max-width: 720px) {
  .dshr-content__inner {
    width: min(var(--dshr-reader-width), calc(100% - 28px));
  }

  .dshr-pdf-content {
    padding-left: 12px;
    padding-right: 12px;
  }
}

/* ======================================================= appearance panel == */

.dshr-appearance-mask {
  position: fixed;
  inset: 0;
  z-index: 96;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  background: var(--dsw-alias-bg-mask-1, rgba(15, 23, 42, 0.32));
  animation: dshr-appearance-fade 0.16s ease-out;
}

@keyframes dshr-appearance-fade {
  from { opacity: 0; }
}

@keyframes dshr-appearance-slide {
  from { opacity: 0; transform: translateX(26px); }
}

@keyframes dshr-appearance-sheet {
  from { opacity: 0; transform: translateY(30px); }
}

.dshr-appearance-panel {
  --dshr-appearance-surface: var(--dshr-layer-2, var(--dsw-alias-bg-layer-2, #ffffff));
  --dshr-appearance-surface-2: var(--dshr-layer, var(--dsw-alias-bg-layer-1, #f6f7f8));
  --dshr-appearance-surface-3: var(--dshr-layer-3, var(--dsw-alias-bg-layer-3, #f0f1f3));
  --dshr-appearance-fg: var(--dshr-fg, var(--dsw-alias-label-primary, #1f2328));
  --dshr-appearance-fg-2: var(--dshr-fg-2, var(--dsw-alias-label-secondary, #5c6370));
  --dshr-appearance-fg-3: var(--dshr-fg-3, var(--dsw-alias-label-tertiary, #8a919c));
  --dshr-appearance-border: var(--dshr-border, var(--dsw-alias-border-l2, rgba(31, 35, 40, 0.10)));
  --dshr-appearance-border-strong: var(--dshr-border-strong, var(--dsw-alias-border-l3, rgba(31, 35, 40, 0.16)));
  --dshr-appearance-hover: var(--dshr-hover, var(--dsw-alias-interactive-bg-hover, rgba(31, 35, 40, 0.055)));
  --dshr-appearance-brand: var(--dshr-brand, var(--dsw-alias-state-business-primary, #4d6bfe));
  --dshr-appearance-on-brand: var(--dshr-on-brand, #ffffff);
  --dshr-appearance-brand-soft: color-mix(in srgb, var(--dshr-appearance-brand) 12%, transparent);

  position: relative;
  display: flex;
  flex-direction: column;
  width: min(400px, 100vw);
  max-width: 100vw;
  height: 100%;
  background: var(--dshr-appearance-surface);
  color: var(--dshr-appearance-fg);
  border-left: 1px solid var(--dshr-appearance-border);
  box-shadow: -20px 0 60px rgba(15, 23, 42, 0.22);
  outline: none;
  animation: dshr-appearance-slide 0.2s cubic-bezier(0.2, 0.9, 0.25, 1);
}

.dshr-appearance-panel *,
.dshr-appearance-panel *::before,
.dshr-appearance-panel *::after {
  box-sizing: border-box;
}

.dshr-appearance-head {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 14px 13px 18px;
  border-bottom: 1px solid var(--dshr-appearance-border);
}

.dshr-appearance-head__text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.dshr-appearance-head__text strong {
  font-size: 15px;
  font-weight: 650;
  letter-spacing: 0.01em;
}

.dshr-appearance-head__text span {
  color: var(--dshr-appearance-fg-3);
  font-size: 11.5px;
  line-height: 1.5;
}

.dshr-appearance-close {
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  padding: 0;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dshr-appearance-fg-3);
}

.dshr-appearance-close:hover {
  background: var(--dshr-appearance-hover);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 14px 16px 20px;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--dshr-appearance-fg-3) 38%, transparent) transparent;
}

.dshr-appearance-body::-webkit-scrollbar {
  width: 9px;
}

.dshr-appearance-body::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 6px;
  background: color-mix(in srgb, var(--dshr-appearance-fg-3) 34%, transparent);
  background-clip: content-box;
}

/* ---------------------------------------------------------------- preview */

.dshr-appearance-preview {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  flex: 0 0 auto;
  border: 1px solid var(--dshr-reader-border, rgba(43, 42, 38, 0.15));
  border-radius: 12px;
  background-color: var(--dshr-reader-bg, #fbf7ee);
  color: var(--dshr-reader-ink, #2b2a26);
  min-height: 154px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
}

.dshr-appearance-preview::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: var(--dshr-reader-image, none);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: var(--dshr-reader-image-opacity, 0.26);
  filter: blur(var(--dshr-reader-image-blur, 0px));
}

.dshr-appearance-preview__badge {
  position: absolute;
  top: 9px;
  right: 10px;
  z-index: 1;
  padding: 2px 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--dshr-reader-bg, #fbf7ee) 72%, var(--dshr-reader-ink, #2b2a26));
  color: var(--dshr-reader-ink, #2b2a26);
  font-size: 9.5px;
  letter-spacing: 0.08em;
  opacity: 0.66;
}

.dshr-appearance-preview__inner {
  position: relative;
  padding: 18px 20px 16px;
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-weight, 400);
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-appearance-preview__kicker {
  display: block;
  margin-bottom: 5px;
  color: var(--dshr-reader-muted, #736f64);
  font-size: 0.68em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dshr-appearance-preview__title {
  margin: 0 0 0.3em;
  font-family: var(--dshr-reader-font, serif);
  font-weight: var(--dshr-reader-heading-weight, 600);
  font-size: 1.42em;
  line-height: 1.28;
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-appearance-preview__text {
  margin: 0 0 0.45em;
  color: var(--dshr-reader-ink, #2b2a26);
}

.dshr-appearance-preview__quote {
  margin: 0;
  padding-left: 0.75em;
  border-left: 2px solid var(--dshr-reader-accent, #9a6b2f);
  color: var(--dshr-reader-muted, #736f64);
}

/* --------------------------------------------------------------- sections */

.dshr-appearance-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dshr-appearance-section__title {
  margin: 0;
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.dshr-appearance-hint {
  margin: 0;
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  line-height: 1.6;
}

.dshr-appearance-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.dshr-appearance-field__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
}

.dshr-appearance-field__value {
  color: var(--dshr-appearance-fg-3);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.dshr-appearance-field__value.is-warning {
  color: var(--dsw-alias-state-warn-primary, #b54708);
}

/* --------------------------------------------------------------- swatches */

.dshr-appearance-swatches {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.dshr-appearance-swatch {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  padding: 7px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 10px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  text-align: left;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

.dshr-appearance-swatch:hover {
  border-color: var(--dshr-appearance-border-strong);
  background: var(--dshr-appearance-hover);
}

.dshr-appearance-swatch.is-active {
  border-color: var(--dshr-appearance-brand);
  box-shadow: 0 0 0 2px var(--dshr-appearance-brand-soft);
}

.dshr-appearance-swatch__chip {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  border-radius: 6px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  font-size: 12.5px;
  font-weight: 650;
}

.dshr-appearance-swatch__label {
  overflow: hidden;
  color: var(--dshr-appearance-fg-2);
  font-size: 10.5px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dshr-appearance-swatch.is-active .dshr-appearance-swatch__label {
  color: var(--dshr-appearance-fg);
  font-weight: 600;
}

/* ----------------------------------------------------------- custom color */

.dshr-appearance-colorrow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
}

.dshr-appearance-colorrow__control {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.dshr-appearance-color {
  width: 30px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--dshr-appearance-border-strong);
  border-radius: 8px;
  background: var(--dshr-appearance-surface-2);
  cursor: pointer;
}

.dshr-appearance-color::-webkit-color-swatch-wrapper {
  padding: 3px;
}

.dshr-appearance-color::-webkit-color-swatch {
  border: 0;
  border-radius: 5px;
}

.dshr-appearance-colorrow__hex {
  color: var(--dshr-appearance-fg-3);
  font-family: "Cascadia Code", "SFMono-Regular", Consolas, monospace;
  font-size: 10.5px;
  letter-spacing: 0.02em;
}

/* ------------------------------------------------------------- segmented */

.dshr-appearance-segmented {
  display: flex;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 10px;
  background: var(--dshr-appearance-surface-2);
}

.dshr-appearance-segmented__item {
  flex: 1 1 0;
  min-width: 0;
  height: 28px;
  padding: 0 6px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.dshr-appearance-segmented__item:hover {
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-segmented__item[aria-pressed="true"] {
  background: var(--dshr-appearance-surface);
  color: var(--dshr-appearance-fg);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
}

/* ---------------------------------------------------------------- families */

.dshr-appearance-families {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.dshr-appearance-family {
  height: 38px;
  padding: 0 10px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 9px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.dshr-appearance-family:hover {
  border-color: var(--dshr-appearance-border-strong);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-family[aria-pressed="true"] {
  border-color: var(--dshr-appearance-brand);
  background: var(--dshr-appearance-brand-soft);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-animations {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.dshr-appearance-animation {
  height: 38px;
  padding: 0 8px;
  border: 1px solid var(--dshr-appearance-border);
  border-radius: 9px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
  white-space: nowrap;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.dshr-appearance-animation:hover {
  border-color: var(--dshr-appearance-border-strong);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-animation[aria-pressed="true"] {
  border-color: var(--dshr-appearance-brand);
  background: var(--dshr-appearance-brand-soft);
  color: var(--dshr-appearance-fg);
}

/* ----------------------------------------------------------------- sliders */

.dshr-appearance-slider {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dshr-appearance-slider.is-disabled {
  opacity: 0.45;
}

.dshr-appearance-slider__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  color: var(--dshr-appearance-fg-2);
  font-size: 12.5px;
}

.dshr-appearance-slider__value {
  color: var(--dshr-appearance-fg-3);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.dshr-appearance-slider input[type="range"] {
  width: 100%;
  height: 18px;
  margin: 0;
  accent-color: var(--dshr-appearance-brand);
  cursor: pointer;
}

.dshr-appearance-slider.is-disabled input[type="range"] {
  cursor: not-allowed;
}

.dshr-appearance-slider__hint {
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  line-height: 1.55;
}

/* ------------------------------------------------------------ image block */

.dshr-appearance-image {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dshr-appearance-image__thumb {
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  overflow: hidden;
  border: 1px dashed var(--dshr-appearance-border-strong);
  border-radius: 10px;
  background: var(--dshr-appearance-surface-2);
  color: var(--dshr-appearance-fg-3);
}

.dshr-appearance-image__thumb.has-image {
  border-style: solid;
  border-color: var(--dshr-appearance-border);
}

.dshr-appearance-image__thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dshr-appearance-image__meta {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dshr-appearance-image__meta strong {
  color: var(--dshr-appearance-fg);
  font-size: 12px;
  font-weight: 600;
}

.dshr-appearance-image__meta span {
  color: var(--dshr-appearance-fg-3);
  font-size: 10.5px;
  line-height: 1.5;
}

.dshr-appearance-image__actions {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* ---------------------------------------------------------------- buttons */

.dshr-appearance-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 30px;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--dshr-appearance-fg-2);
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.dshr-appearance-btn:hover {
  background: var(--dshr-appearance-hover);
  color: var(--dshr-appearance-fg);
}

.dshr-appearance-btn[disabled] {
  opacity: 0.42;
  cursor: not-allowed;
}

.dshr-appearance-btn[disabled]:hover {
  background: transparent;
  color: var(--dshr-appearance-fg-2);
}

.dshr-appearance-btn--sm {
  height: 26px;
  padding: 0 9px;
  border-radius: 7px;
  font-size: 11.5px;
}

.dshr-appearance-btn--soft {
  background: var(--dshr-appearance-surface-2);
  border-color: var(--dshr-appearance-border);
}

.dshr-appearance-btn--soft:hover {
  border-color: var(--dshr-appearance-border-strong);
}

.dshr-appearance-btn--ghost {
  color: var(--dshr-appearance-fg-3);
}

.dshr-appearance-btn--danger {
  color: #d64545;
  border-color: color-mix(in srgb, #d64545 30%, transparent);
}

.dshr-appearance-btn--primary {
  background: var(--dshr-appearance-brand);
  color: var(--dshr-appearance-on-brand);
  box-shadow: 0 5px 16px color-mix(in srgb, var(--dshr-appearance-brand) 22%, transparent);
}

.dshr-appearance-btn--primary:hover {
  background: color-mix(in srgb, var(--dshr-appearance-brand) 86%, #000000);
  color: var(--dshr-appearance-on-brand);
}

/* ------------------------------------------------------------------ footer */

.dshr-appearance-foot {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 11px 16px 13px;
  border-top: 1px solid var(--dshr-appearance-border);
  background: var(--dshr-appearance-surface);
}

.dshr-appearance-foot .dshr-appearance-btn {
  height: 33px;
}

/* --------------------------------------------------------------- focus ring */

.dshr-appearance-panel :is(button, input):focus-visible {
  outline: 2px solid var(--dshr-appearance-brand);
  outline-offset: 2px;
}

/* -------------------------------------------------------------- responsive */

@media (max-width: 560px) {
  .dshr-appearance-mask {
    align-items: flex-end;
    background: var(--dsw-alias-bg-mask-1, rgba(15, 23, 42, 0.36));
  }

  .dshr-appearance-panel {
    width: 100%;
    height: min(92vh, 860px);
    border-left: 0;
    border-top: 1px solid var(--dshr-appearance-border);
    border-radius: 18px 18px 0 0;
    box-shadow: 0 -20px 60px rgba(15, 23, 42, 0.26);
    animation: dshr-appearance-sheet 0.22s cubic-bezier(0.2, 0.9, 0.25, 1);
  }

  .dshr-appearance-head {
    padding-top: 14px;
  }
}

@media (max-height: 560px) {
  .dshr-appearance-panel {
    height: 100%;
  }

  .dshr-appearance-preview {
    min-height: 126px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dshr-appearance-mask,
  .dshr-appearance-panel {
    animation-duration: 0.001ms !important;
  }
}
`;

export default appearanceStyles;
