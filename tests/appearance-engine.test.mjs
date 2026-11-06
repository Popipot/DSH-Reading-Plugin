import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  APPEARANCE_DEFAULTS,
  APPEARANCE_LIMITS,
  BACKGROUND_PRESETS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  appearanceVars,
  autoInk,
  clampNumber,
  contrastRatio,
  normalizeHexColor,
  relativeLuminance,
  resolveAppearance,
} from '../web/src/appearance/appearance.js';

const VARS = [
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
];

/* ------------------------------------------------------------------ constants */

test('font families expose the four contracted ids with usable stacks', () => {
  assert.deepEqual(FONT_FAMILIES.map((family) => family.id), ['serif', 'sans', 'kai', 'system']);
  for (const family of FONT_FAMILIES) {
    assert.equal(typeof family.label, 'string');
    assert.ok(family.label.length > 0);
    assert.match(family.stack, /serif|sans-serif|system-ui/u);
  }
  assert.match(FONT_FAMILIES[0].label, /宋体/u);
  assert.match(FONT_FAMILIES[1].label, /黑体/u);
  assert.match(FONT_FAMILIES[2].label, /楷体/u);
  assert.match(FONT_FAMILIES[3].label, /系统/u);
});

test('font weights expose 400/500/600 in order', () => {
  assert.deepEqual(FONT_WEIGHTS.map((weight) => weight.value), [400, 500, 600]);
  assert.deepEqual(FONT_WEIGHTS.map((weight) => weight.label), ['常规', '中等', '加粗']);
});

test('background presets cover the contracted palette ids', () => {
  assert.deepEqual(BACKGROUND_PRESETS.map((preset) => preset.id), ['paper', 'white', 'sepia', 'green', 'night', 'custom']);
  const paper = BACKGROUND_PRESETS.find((preset) => preset.id === 'paper');
  assert.equal(paper.bg, '#fbf7ee');
  assert.equal(paper.ink, '#2b2a26');
  assert.equal(paper.muted, '#736f64');
  assert.equal(paper.accent, '#9a6b2f');

  const custom = BACKGROUND_PRESETS.find((preset) => preset.id === 'custom');
  assert.equal(custom.bg, undefined);
});

test('every fixed preset keeps body text and secondary text readable', () => {
  for (const preset of BACKGROUND_PRESETS) {
    if (!preset.bg) continue;
    assert.ok(contrastRatio(preset.ink, preset.bg) >= 7, `${preset.id} ink contrast`);
    assert.ok(contrastRatio(preset.muted, preset.bg) >= 4.5, `${preset.id} muted contrast`);
    assert.ok(contrastRatio(preset.accent, preset.bg) >= 4, `${preset.id} accent contrast`);
    assert.match(preset.border, /rgba?\(/u);
  }
});

test('the night preset is dark with light text', () => {
  const night = BACKGROUND_PRESETS.find((preset) => preset.id === 'night');
  assert.ok(relativeLuminance(night.bg) < 0.05);
  assert.ok(relativeLuminance(night.ink) > 0.7);
});

/* -------------------------------------------------------------------- colors */

test('autoInk picks dark ink on light backgrounds', () => {
  for (const background of ['#ffffff', '#fff', '#fbf7ee', '#f2e6cf', 'rgb(250, 250, 245)', 'hsl(40, 30%, 96%)']) {
    const ink = autoInk(background);
    assert.ok(contrastRatio(ink.ink, background) >= 7, `${background} -> ${ink.ink}`);
    assert.ok(relativeLuminance(ink.ink) < 0.2);
  }
});

test('autoInk picks light ink on dark backgrounds', () => {
  for (const background of ['#000000', '#1c1e22', '#202020', 'rgb(20, 20, 20)', 'hsl(220, 10%, 12%)']) {
    const ink = autoInk(background);
    assert.ok(contrastRatio(ink.ink, background) >= 7, `${background} -> ${ink.ink}`);
    assert.ok(relativeLuminance(ink.ink) > 0.6);
  }
});

test('autoInk keeps a usable best-effort contrast on mid tones', () => {
  for (const background of ['#777777', '#808080', '#6b6b6b', '#9a9a9a']) {
    const ink = autoInk(background);
    assert.ok(contrastRatio(ink.ink, background) >= 4, `${background} -> ${ink.ink}`);
  }
});

test('autoInk returns exactly the contracted shape', () => {
  const ink = autoInk('#fbf7ee');
  assert.deepEqual(Object.keys(ink).sort(), ['border', 'ink', 'muted']);
  assert.match(ink.ink, /^#[0-9a-f]{6}$/u);
  assert.match(ink.muted, /^#[0-9a-f]{6}$/u);
  assert.match(ink.border, /^rgba?\(/u);
});

test('autoInk normalizes equivalent color notations', () => {
  assert.deepEqual(autoInk('red'), autoInk('#ff0000'));
  assert.deepEqual(autoInk('rgb(255, 0, 0)'), autoInk('#ff0000'));
  assert.deepEqual(autoInk('#11223380'), autoInk('#112233'));
  assert.deepEqual(autoInk('  #ABC  '), autoInk('#aabbcc'));
});

test('autoInk falls back to the dark-ink scheme for invalid colors', () => {
  for (const value of ['not-a-color', '', null, undefined, {}, '#12345', 'rgb(1,2)']) {
    const ink = autoInk(value);
    assert.match(ink.ink, /^#[0-9a-f]{6}$/u);
    assert.ok(contrastRatio(ink.ink, '#ffffff') >= 7);
  }
});

test('normalizeHexColor converts common notations and validates fallbacks', () => {
  assert.equal(normalizeHexColor('#ABC'), '#aabbcc');
  assert.equal(normalizeHexColor('#aabbccdd'), '#aabbcc');
  assert.equal(normalizeHexColor('rgb(255, 0, 0)'), '#ff0000');
  assert.equal(normalizeHexColor('rgba(255, 0, 0, 0.5)'), '#ff0000');
  assert.equal(normalizeHexColor('hsl(0, 0%, 0%)'), '#000000');
  assert.equal(normalizeHexColor('hsl(120, 100%, 25%)'), '#008000');
  assert.equal(normalizeHexColor('white'), '#ffffff');
  assert.equal(normalizeHexColor('nope', '#222222'), '#222222');
  assert.equal(normalizeHexColor('nope', '#123'), '#112233');
  assert.equal(normalizeHexColor('nope', 'also-nope'), '#ffffff');
});

test('contrastRatio is symmetric and matches WCAG anchors', () => {
  assert.equal(contrastRatio('#000000', '#ffffff').toFixed(2), '21.00');
  assert.equal(contrastRatio('#ffffff', '#000000').toFixed(2), '21.00');
  assert.equal(contrastRatio('#ffffff', '#ffffff').toFixed(2), '1.00');
  assert.equal(contrastRatio('#777777', '#ffffff'), contrastRatio('#ffffff', '#777777'));
});

/* ------------------------------------------------------------------ resolver */

test('resolveAppearance applies the contract defaults', () => {
  const resolved = resolveAppearance({});
  assert.equal(resolved.preset, 'paper');
  assert.equal(resolved.bg, '#fbf7ee');
  assert.equal(resolved.ink, '#2b2a26');
  assert.equal(resolved.muted, '#736f64');
  assert.equal(resolved.border, 'rgba(43, 42, 38, 0.15)');
  assert.equal(resolved.accent, '#9a6b2f');
  assert.equal(resolved.fontWeight, 400);
  assert.equal(resolved.headingWeight, 600);
  assert.equal(resolved.width, 760);
  assert.equal(resolved.brightness, 1);
  assert.equal(resolved.imageOpacity, 0.26);
  assert.equal(resolved.imageBlur, 0);
  assert.match(resolved.fontFamily, /Songti SC/u);
});

test('resolveAppearance resolves every font family to its stack', () => {
  assert.match(resolveAppearance({ fontFamily: 'serif' }).fontFamily, /Songti SC/u);
  assert.match(resolveAppearance({ fontFamily: 'sans' }).fontFamily, /PingFang SC|Microsoft YaHei/u);
  assert.match(resolveAppearance({ fontFamily: 'kai' }).fontFamily, /Kaiti|KaiTi/u);
  assert.match(resolveAppearance({ fontFamily: 'system' }).fontFamily, /system-ui/u);
  assert.equal(resolveAppearance({ fontFamily: 'comic' }).fontFamily, resolveAppearance({ fontFamily: 'serif' }).fontFamily);
});

test('resolveAppearance clamps out-of-range metrics', () => {
  const low = resolveAppearance({
    brightness: -40,
    contentWidth: 100,
    backgroundImageOpacity: -1,
    backgroundImageBlur: -3,
  });
  assert.equal(low.brightness, APPEARANCE_LIMITS.brightness.min);
  assert.equal(low.width, APPEARANCE_LIMITS.contentWidth.min);
  assert.equal(low.imageOpacity, APPEARANCE_LIMITS.backgroundImageOpacity.min);
  assert.equal(low.imageBlur, APPEARANCE_LIMITS.backgroundImageBlur.min);

  const high = resolveAppearance({
    brightness: 400,
    contentWidth: 4000,
    backgroundImageOpacity: 2,
    backgroundImageBlur: 99,
  });
  assert.equal(high.brightness, APPEARANCE_LIMITS.brightness.max);
  assert.equal(high.width, APPEARANCE_LIMITS.contentWidth.max);
  assert.equal(high.imageOpacity, APPEARANCE_LIMITS.backgroundImageOpacity.max);
  assert.equal(high.imageBlur, APPEARANCE_LIMITS.backgroundImageBlur.max);
});

test('resolveAppearance falls back for dirty persisted values', () => {
  const resolved = resolveAppearance({
    fontFamily: 'comic-sans',
    fontWeight: 123,
    backgroundPreset: 'halloween',
    brightness: 'abc',
    contentWidth: undefined,
    backgroundImageOpacity: Number.NaN,
    backgroundImageBlur: undefined,
    textTone: 'sepia',
  });
  assert.equal(resolved.preset, 'paper');
  assert.equal(resolved.fontWeight, 400);
  assert.equal(resolved.brightness, APPEARANCE_DEFAULTS.brightness);
  assert.equal(resolved.width, APPEARANCE_DEFAULTS.contentWidth);
  assert.equal(resolved.imageOpacity, APPEARANCE_DEFAULTS.backgroundImageOpacity);
  assert.equal(resolved.imageBlur, APPEARANCE_DEFAULTS.backgroundImageBlur);
  assert.equal(resolved.fontFamily, resolveAppearance({}).fontFamily);
});

test('font weight snaps to the nearest supported value', () => {
  assert.equal(resolveAppearance({ fontWeight: 350 }).fontWeight, 400);
  assert.equal(resolveAppearance({ fontWeight: 449 }).fontWeight, 400);
  assert.equal(resolveAppearance({ fontWeight: 451 }).fontWeight, 500);
  assert.equal(resolveAppearance({ fontWeight: 550 }).fontWeight, 500);
  assert.equal(resolveAppearance({ fontWeight: 575 }).fontWeight, 600);
  assert.equal(resolveAppearance({ fontWeight: 900 }).fontWeight, 600);
});

test('heading weights stay bolder than body weights', () => {
  assert.equal(resolveAppearance({ fontWeight: 400 }).headingWeight, 600);
  assert.equal(resolveAppearance({ fontWeight: 500 }).headingWeight, 600);
  assert.equal(resolveAppearance({ fontWeight: 600 }).headingWeight, 700);
});

test('custom backgrounds choose ink by luminance', () => {
  const light = resolveAppearance({ backgroundPreset: 'custom', customBackground: '#fafafa' });
  assert.equal(light.preset, 'custom');
  assert.equal(light.bg, '#fafafa');
  assert.ok(relativeLuminance(light.ink) < 0.2);
  assert.ok(contrastRatio(light.ink, light.bg) >= 7);

  const dark = resolveAppearance({ backgroundPreset: 'custom', customBackground: '#202020' });
  assert.equal(dark.bg, '#202020');
  assert.ok(relativeLuminance(dark.ink) > 0.6);
  assert.ok(contrastRatio(dark.ink, dark.bg) >= 7);

  const invalid = resolveAppearance({ backgroundPreset: 'custom', customBackground: 'not-a-color' });
  assert.equal(invalid.bg, APPEARANCE_DEFAULTS.customBackground);
});

test('textTone explicitly overrides the preset ink scheme', () => {
  const autoNight = resolveAppearance({ backgroundPreset: 'night' });
  assert.ok(relativeLuminance(autoNight.ink) > 0.6);

  const forcedDark = resolveAppearance({ backgroundPreset: 'night', textTone: 'dark' });
  assert.ok(relativeLuminance(forcedDark.ink) < 0.2);

  const forcedLight = resolveAppearance({ backgroundPreset: 'paper', textTone: 'light' });
  assert.ok(relativeLuminance(forcedLight.ink) > 0.6);
});

test('resolveAppearance does not mutate its input', () => {
  const settings = Object.freeze({ backgroundPreset: 'night', fontFamily: 'kai', fontWeight: 500, brightness: 0.9 });
  const snapshot = JSON.stringify(settings);
  resolveAppearance(settings);
  assert.equal(JSON.stringify(settings), snapshot);
});

/* -------------------------------------------------------------- appearanceVars */

test('appearanceVars returns every contracted custom property as a string', () => {
  const vars = appearanceVars({}, '');
  assert.deepEqual(Object.keys(vars).sort(), [...VARS].sort());
  for (const key of VARS) assert.equal(typeof vars[key], 'string', key);
});

test('appearanceVars converts metrics to CSS units', () => {
  const vars = appearanceVars({ contentWidth: 620, brightness: 0.75, backgroundImageBlur: 6, backgroundImageOpacity: 0.4 });
  assert.equal(vars['--dshr-reader-width'], '620px');
  assert.equal(vars['--dshr-reader-brightness'], '0.75');
  assert.equal(vars['--dshr-reader-image-blur'], '6px');
  assert.equal(vars['--dshr-reader-image-opacity'], '0.4');
  assert.equal(vars['--dshr-reader-weight'], '400');
  assert.equal(vars['--dshr-reader-heading-weight'], '600');
});

test('appearanceVars mirrors resolveAppearance colors', () => {
  const settings = { backgroundPreset: 'night' };
  const resolved = resolveAppearance(settings);
  const vars = appearanceVars(settings);
  assert.equal(vars['--dshr-reader-bg'], '#1c1e22');
  assert.equal(vars['--dshr-reader-ink'], '#e9e6dd');
  assert.equal(vars['--dshr-reader-muted'], '#a6a29a');
  assert.equal(vars['--dshr-reader-border'], 'rgba(233, 230, 221, 0.16)');
  assert.equal(vars['--dshr-reader-accent'], '#d2a76b');
  assert.equal(vars['--dshr-reader-font'], resolved.fontFamily);
});

test('appearanceVars handles the background image URL', () => {
  assert.equal(appearanceVars({}, '')['--dshr-reader-image'], 'none');
  assert.equal(appearanceVars({}, null)['--dshr-reader-image'], 'none');
  assert.equal(appearanceVars({}, '   ')['--dshr-reader-image'], 'none');
  assert.equal(appearanceVars({}, 'blob:http://127.0.0.1/abc-123')['--dshr-reader-image'], 'url("blob:http://127.0.0.1/abc-123")');
});

test('appearanceVars escapes quotes, backslashes and line breaks in the URL', () => {
  const vars = appearanceVars({}, 'https://example.test/a"b\\c\nd');
  assert.equal(vars['--dshr-reader-image'], 'url("https://example.test/a\\"b\\\\c d")');
});

/* ------------------------------------------------------------------- helpers */

test('clampNumber clamps and falls back', () => {
  assert.equal(clampNumber(5, 0, 10, 3), 5);
  assert.equal(clampNumber(-5, 0, 10, 3), 0);
  assert.equal(clampNumber(15, 0, 10, 3), 10);
  assert.equal(clampNumber('7', 0, 10, 3), 7);
  assert.equal(clampNumber('nope', 0, 10, 3), 3);
  assert.equal(clampNumber(Number.POSITIVE_INFINITY, 0, 10, 3), 3);
});

test('relativeLuminance anchors', () => {
  assert.equal(relativeLuminance('#000000'), 0);
  assert.equal(relativeLuminance('#ffffff').toFixed(2), '1.00');
  assert.equal(relativeLuminance('not-a-color'), 1);
});
