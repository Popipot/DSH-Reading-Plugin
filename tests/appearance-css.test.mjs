import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { BACKGROUND_PRESETS } from '../web/src/appearance/appearance.js';

const APPEARANCE_DIR = new URL('../web/src/appearance/', import.meta.url);
const readAppearanceFile = (name) => readFile(new URL(name, APPEARANCE_DIR), 'utf8');

const panelSource = await readAppearanceFile('AppearancePanel.jsx');
const engineSource = await readAppearanceFile('appearance.js');
const cssSource = await readAppearanceFile('appearance.css.js');

const READER_CLASSES = new Set([
  'dshr-root',
  'dshr-content',
  'dshr-content__inner',
  'dshr-turn-page',
  'dshr-block',
  'dshr-chapter',
  'dshr-chapter__kicker',
  'dshr-chapter__nav',
  'dshr-translation',
  'dshr-translation__retry',
  'dshr-translation__loading',
  'dshr-spinner',
  'dshr-btn',
  'dshr-btn--outline',
  'dshr-pdf-scroll',
  'dshr-pdf-content',
]);

test('appearanceStyles is a substantial CSS string', () => {
  assert.equal(typeof appearanceStyles, 'string');
  assert.ok(appearanceStyles.length > 12000, 'expected a full appearance layer');
  assert.doesNotMatch(appearanceStyles, /@import/u);
  assert.doesNotMatch(appearanceStyles, /url\(\s*["']?https?:/u);
});

test('appearanceStyles styles both reader surfaces', () => {
  for (const selector of [
    '.dshr-content',
    '.dshr-content__inner',
    '.dshr-block',
    '.dshr-block[data-kind="heading"]',
    '.dshr-pdf-scroll',
    '.dshr-pdf-scroll::before',
    '.dshr-pdf-content',
  ]) {
    assert.ok(appearanceStyles.includes(selector), `missing ${selector}`);
  }
});

test('the contracted layout formulas are used verbatim', () => {
  assert.match(
    appearanceStyles,
    /width:\s*min\(var\(--dshr-reader-width\),\s*calc\(100% - 48px\)\)/u,
  );
  assert.match(appearanceStyles, /padding-left:\s*20px/u);
  assert.match(appearanceStyles, /padding-right:\s*20px/u);
});

test('every contracted custom property is consumed by the CSS', () => {
  for (const variable of [
    '--dshr-reader-bg',
    '--dshr-reader-ink',
    '--dshr-reader-muted',
    '--dshr-reader-border',
    '--dshr-reader-accent',
    '--dshr-reader-font',
    '--dshr-reader-weight',
    '--dshr-reader-heading-weight',
    '--dshr-reader-width',
    '--dshr-reader-brightness',
    '--dshr-reader-image-opacity',
    '--dshr-reader-image-blur',
    '--dshr-reader-image',
  ]) {
    assert.ok(appearanceStyles.includes(`var(${variable}`), `unused ${variable}`);
  }
});

test('the flow surface paints ink over a variable background', () => {
  const surfaceRule = /\.dshr-content\s*\{[^}]*\}/u.exec(appearanceStyles);
  assert.ok(surfaceRule, 'expected a .dshr-content rule');
  assert.match(surfaceRule[0], /background-color:\s*var\(--dshr-reader-bg/u);
  assert.match(surfaceRule[0], /color:\s*var\(--dshr-reader-ink/u);

  const blockRule = /\.dshr-block\s*\{[^}]*\}/u.exec(appearanceStyles);
  assert.ok(blockRule);
  assert.match(blockRule[0], /font-family:\s*var\(--dshr-reader-font/u);
  assert.match(blockRule[0], /font-weight:\s*var\(--dshr-reader-weight/u);

  assert.match(
    appearanceStyles,
    /\.dshr-block\[data-kind="heading"\] :is\(h1, h2, h3, h4, h5, h6\)\s*\{[^}]*font-weight:\s*var\(--dshr-reader-heading-weight/u,
  );
});

test('the background image is a low layer, never an overlay above the text', () => {
  const imageRule = /\.dshr-content::before\s*\{[^}]*\}/u.exec(appearanceStyles);
  assert.ok(imageRule, 'expected a .dshr-content::before rule');
  assert.match(imageRule[0], /background-image:\s*var\(--dshr-reader-image/u);
  assert.match(imageRule[0], /opacity:\s*var\(--dshr-reader-image-opacity/u);
  assert.match(imageRule[0], /filter:\s*blur\(var\(--dshr-reader-image-blur/u);
  assert.match(imageRule[0], /z-index:\s*-1/u);
  assert.match(imageRule[0], /pointer-events:\s*none/u);
  assert.doesNotMatch(appearanceStyles, /\.dshr-content__inner::before/u);
  assert.doesNotMatch(appearanceStyles, /\.dshr-content__inner::after/u);
});

test('PDF chrome gets the appearance background but the canvas is untouched', () => {
  const scrollRule = /\.dshr-pdf-scroll\s*\{[^}]*\}/u.exec(appearanceStyles);
  assert.ok(scrollRule);
  assert.match(scrollRule[0], /background-color:\s*var\(--dshr-reader-bg/u);
  assert.doesNotMatch(appearanceStyles, /\.dshr-pdf-canvas\s*\{/u);
  assert.doesNotMatch(appearanceStyles, /\.dshr-pdf-frame\s*\{/u);
  assert.doesNotMatch(appearanceStyles, /\.dshr-pdf-text-layer\s*\{/u);
});

test('the panel uses only dshr-appearance- classes and existing reader classes', () => {
  const classNames = [...appearanceStyles.matchAll(/\.(dshr-[a-z0-9_-]+)/giu)].map((match) => match[1]);
  assert.ok(classNames.length > 40);
  for (const className of classNames) {
    assert.ok(
      className.startsWith('dshr-appearance-') || READER_CLASSES.has(className),
      `unexpected global class .${className}`,
    );
  }
});

test('the panel stylesheet covers the responsive and focus affordances', () => {
  assert.match(appearanceStyles, /\.dshr-appearance-mask\s*\{/u);
  assert.match(appearanceStyles, /\.dshr-appearance-panel\s*\{/u);
  assert.match(appearanceStyles, /@media \(max-width: 560px\)/u);
  assert.match(appearanceStyles, /:focus-visible/u);
  assert.match(appearanceStyles, /\.dshr-appearance-preview\s*\{/u);
  assert.match(appearanceStyles, /\.dshr-appearance-preview::before\s*\{/u);
});

test('AppearancePanel exports the contracted component and re-exports the styles', () => {
  assert.match(panelSource, /export function AppearancePanel\(/u);
  assert.match(panelSource, /export \{ appearanceStyles \} from '\.\/appearance\.css\.js';/u);
  for (const prop of [
    'open',
    'settings',
    'backgroundImageUrl',
    'onChange',
    'onPickBackgroundImage',
    'onClearBackgroundImage',
    'onClose',
  ]) {
    assert.ok(panelSource.includes(prop), `missing prop ${prop}`);
  }
  assert.match(panelSource, /role="dialog"/u);
  assert.match(panelSource, /aria-modal="true"/u);
  assert.match(panelSource, /type="range"/u);
  assert.match(panelSource, /type="color"/u);
  assert.match(panelSource, /aria-pressed/u);
});

test('the panel does not reach for storage, blob URLs or external UI libraries', () => {
  const imports = [...panelSource.matchAll(/from\s+['"]([^'"]+)['"]/gu)].map((match) => match[1]);
  const allowed = new Set(['react', './appearance.js', './appearance.css.js']);
  for (const specifier of imports) {
    assert.ok(allowed.has(specifier), `unexpected import ${specifier}`);
  }
  assert.doesNotMatch(panelSource, /indexedDB|localStorage|URL\.createObjectURL|URL\.revokeObjectURL/u);
  assert.match(panelSource, /阅读外观/u);
  assert.match(panelSource, /背景图片/u);
  assert.match(panelSource, /恢复默认/u);
  assert.match(panelSource, /阅读亮度/u);
  assert.match(panelSource, /阅读宽度/u);
  assert.doesNotMatch(panelSource, /左右留白/u);
});

test('appearance sources are UTF-8 Chinese, not mojibake', () => {
  for (const source of [engineSource, panelSource, cssSource]) {
    assert.doesNotMatch(source, /\uFFFD/u, 'replacement character found');
  }
  for (const label of BACKGROUND_PRESETS.map((preset) => preset.label)) {
    assert.ok(engineSource.includes(label), `missing preset label ${label}`);
  }
  for (const label of ['宋体 / Serif', '黑体 / Sans', '楷体 / Kai', '系统默认']) {
    assert.ok(engineSource.includes(label), `missing font label ${label}`);
  }
  assert.ok(panelSource.includes('阅读外观'));
  assert.ok(panelSource.includes('背景图片'));
  assert.ok(panelSource.includes('恢复默认'));
  assert.ok(panelSource.includes('实时预览'));
});
