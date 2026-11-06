/**
 * dsh-reader appearance engine.
 *
 * Pure, DOM-free helpers shared by the appearance panel and the reader shell.
 * The Lead persists the settings object and resolves the background image Blob
 * to an object URL; this module only maps those settings to CSS custom
 * properties. Keeping it framework-free makes every rule unit-testable in Node.
 *
 * Vocabulary:
 *  - a "preset" owns a background/ink palette;
 *  - `autoInk(bg)` picks the dark or light ink scheme that wins on contrast, so
 *    arbitrary `#rrggbb` custom backgrounds stay readable;
 *  - `resolveAppearance(settings)` normalizes every value and returns concrete
 *    colors/metrics with contract defaults applied;
 *  - `appearanceVars(settings, url)` is the only thing the shell has to spread
 *    onto `.dshr-root` as an inline style.
 */

/* ------------------------------------------------------------------ constants */

/**
 * Font families offered in the panel. `stack` is a complete CSS font stack and
 * is applied to the reading surface through `--dshr-reader-font`.
 * The first four ids are the v2 contract; labels stay Chinese-first because the
 * reader UI is Chinese.
 */
export const FONT_FAMILIES = Object.freeze([
  Object.freeze({
    id: 'serif',
    label: '宋体 / Serif',
    stack: '"Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "宋体", Georgia, "Times New Roman", serif',
  }),
  Object.freeze({
    id: 'sans',
    label: '黑体 / Sans',
    stack: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Segoe UI", system-ui, -apple-system, sans-serif',
  }),
  Object.freeze({
    id: 'kai',
    label: '楷体 / Kai',
    stack: '"Kaiti SC", "STKaiti", "KaiTi", "楷体", "Noto Serif SC", "Songti SC", "SimSun", serif',
  }),
  Object.freeze({
    id: 'system',
    label: '系统默认',
    stack: 'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
  }),
]);

export const FONT_WEIGHTS = Object.freeze([
  Object.freeze({ value: 400, label: '常规' }),
  Object.freeze({ value: 500, label: '中等' }),
  Object.freeze({ value: 600, label: '加粗' }),
]);

export const READING_MODES = Object.freeze([
  Object.freeze({ id: 'scroll', label: '滚动' }),
  Object.freeze({ id: 'book', label: '横版' }),
]);

export const BOOK_ANIMATIONS = Object.freeze([
  Object.freeze({ id: 'slide', label: '横向滑页', hint: '前后两页连续平移衔接，不淡出正文' }),
  Object.freeze({ id: 'cover', label: '书页覆盖', hint: '新页从右侧覆盖静止底页，回翻时揭开当前页' }),
  Object.freeze({ id: 'flip', label: '3D 书页', hint: '从右下页角向书脊折叠，带纸背与动态阴影' }),
]);

/**
 * Background presets. `custom` deliberately carries no palette: its colors are
 * derived from `settings.customBackground` and `autoInk`. `border` is a subtle
 * hairline color matching the preset's ink.
 */
export const BACKGROUND_PRESETS = Object.freeze([
  Object.freeze({
    id: 'paper',
    label: '纸张',
    bg: '#fbf7ee',
    ink: '#2b2a26',
    muted: '#736f64',
    border: 'rgba(43, 42, 38, 0.15)',
    accent: '#9a6b2f',
  }),
  Object.freeze({
    id: 'white',
    label: '白色',
    bg: '#ffffff',
    ink: '#1f2328',
    muted: '#5c6370',
    border: 'rgba(31, 35, 40, 0.13)',
    accent: '#3f5ce0',
  }),
  Object.freeze({
    id: 'sepia',
    label: '羊皮纸',
    bg: '#f2e6cf',
    ink: '#453322',
    muted: '#715f47',
    border: 'rgba(69, 51, 34, 0.18)',
    accent: '#8f5a24',
  }),
  Object.freeze({
    id: 'green',
    label: '护眼绿',
    bg: '#e3efe4',
    ink: '#263a2b',
    muted: '#556b5a',
    border: 'rgba(38, 58, 43, 0.17)',
    accent: '#3d6a47',
  }),
  Object.freeze({
    id: 'night',
    label: '夜间',
    bg: '#1c1e22',
    ink: '#e9e6dd',
    muted: '#a6a29a',
    border: 'rgba(233, 230, 221, 0.16)',
    accent: '#d2a76b',
  }),
  Object.freeze({ id: 'custom', label: '自定义' }),
]);

/**
 * Settings written by the panel's reset control. These mirror the v2 contract
 * defaults and intentionally exclude non-appearance v1 settings so reset never
 * silently flips translation/toc/AI preferences.
 */
export const APPEARANCE_DEFAULTS = Object.freeze({
  fontSize: 18,
  lineHeight: 1.85,
  fontFamily: 'serif',
  fontWeight: 400,
  contentWidth: 760,
  tocWidth: 260,
  readingMode: 'scroll',
  pageAnimation: 'slide',
  bookAnimation: 'slide',
  brightness: 1,
  backgroundPreset: 'paper',
  customBackground: '#fbf7ee',
  textTone: 'auto',
  backgroundImageKey: '',
  backgroundImageOpacity: 0.26,
  backgroundImageBlur: 0,
});

/** Slider bounds shared by the panel and the resolver (single source of truth). */
export const APPEARANCE_LIMITS = Object.freeze({
  fontSize: Object.freeze({ min: 13, max: 34, step: 1 }),
  lineHeight: Object.freeze({ min: 1.35, max: 2.4, step: 0.05 }),
  contentWidth: Object.freeze({ min: 520, max: 1600, step: 20 }),
  tocWidth: Object.freeze({ min: 180, max: 520, step: 10 }),
  brightness: Object.freeze({ min: 0.6, max: 1.2, step: 0.01 }),
  backgroundImageOpacity: Object.freeze({ min: 0, max: 0.8, step: 0.01 }),
  backgroundImageBlur: Object.freeze({ min: 0, max: 12, step: 1 }),
});

const FONT_WEIGHT_VALUES = Object.freeze(FONT_WEIGHTS.map((weight) => weight.value));
const PRESET_IDS = Object.freeze(BACKGROUND_PRESETS.map((preset) => preset.id));
const PRESET_BY_ID = new Map(BACKGROUND_PRESETS.map((preset) => [preset.id, preset]));
const FAMILY_BY_ID = new Map(FONT_FAMILIES.map((family) => [family.id, family]));
const TEXT_TONES = Object.freeze(['auto', 'dark', 'light']);

const DARK_INK_SCHEME = Object.freeze({
  ink: '#181511',
  muted: '#6b6559',
  border: 'rgba(32, 29, 24, 0.15)',
  tone: 'dark',
});
const LIGHT_INK_SCHEME = Object.freeze({
  ink: '#f8f5ec',
  muted: '#b3ada0',
  border: 'rgba(245, 242, 233, 0.18)',
  tone: 'light',
});

/** Warm accents derived from the chosen ink tone for custom backgrounds. */
const CUSTOM_ACCENT_DARK = '#8a5a24';
const CUSTOM_ACCENT_LIGHT = '#d8b06a';

/* -------------------------------------------------------------------- colors */

const NAMED_COLORS = Object.freeze({
  white: '#ffffff',
  black: '#000000',
  red: '#ff0000',
  lime: '#00ff00',
  blue: '#0000ff',
  yellow: '#ffff00',
  aqua: '#00ffff',
  cyan: '#00ffff',
  fuchsia: '#ff00ff',
  magenta: '#ff00ff',
  silver: '#c0c0c0',
  gray: '#808080',
  grey: '#808080',
  maroon: '#800000',
  olive: '#808000',
  green: '#008000',
  purple: '#800080',
  teal: '#008080',
  navy: '#000080',
  orange: '#ffa500',
  pink: '#ffc0cb',
  brown: '#a52a2a',
  gold: '#ffd700',
  beige: '#f5f5dc',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  turquoise: '#40e0d0',
  salmon: '#fa8072',
  coral: '#ff7f50',
  indigo: '#4b0082',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  tan: '#d2b48c',
  snow: '#fffafa',
  linen: '#faf0e6',
});

function clampChannel(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function parseHexColor(input) {
  const hex = input.slice(1);
  if (!/^[0-9a-f]+$/iu.test(hex)) return null;
  if (hex.length === 3 || hex.length === 4) {
    const [r, g, b] = hex.slice(0, 3).split('').map((char) => Number.parseInt(`${char}${char}`, 16));
    return { r, g, b };
  }
  if (hex.length === 6 || hex.length === 8) {
    return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16),
    };
  }
  return null;
}

function parseChannelToken(token) {
  const match = /^([+-]?(?:\d+\.?\d*|\.\d+))(%?)$/u.exec(token);
  if (!match) return null;
  let value = Number(match[1]);
  if (!Number.isFinite(value)) return null;
  if (match[2] === '%') value = (value / 100) * 255;
  return clampChannel(value);
}

function parseRgbFunction(inner) {
  const parts = inner.replace(/\//gu, ' ').split(/[\s,]+/u).filter(Boolean);
  if (parts.length < 3) return null;
  const channels = parts.slice(0, 3).map(parseChannelToken);
  if (channels.some((channel) => channel === null)) return null;
  return { r: channels[0], g: channels[1], b: channels[2] };
}

function hueToRgb(p, q, t) {
  let value = t;
  if (value < 0) value += 1;
  if (value > 1) value -= 1;
  if (value < 1 / 6) return p + (q - p) * 6 * value;
  if (value < 1 / 2) return q;
  if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;
  return p;
}

function parseHslFunction(inner) {
  const parts = inner.replace(/\//gu, ' ').split(/[\s,]+/u).filter(Boolean);
  if (parts.length < 3) return null;
  const hue = Number.parseFloat(parts[0]);
  const saturation = Number.parseFloat(parts[1]);
  const lightness = Number.parseFloat(parts[2]);
  if (![hue, saturation, lightness].every(Number.isFinite)) return null;
  const s = Math.max(0, Math.min(100, saturation)) / 100;
  const l = Math.max(0, Math.min(100, lightness)) / 100;
  const h = ((hue % 360) + 360) % 360 / 360;
  if (s === 0) {
    const channel = clampChannel(l * 255);
    return { r: channel, g: channel, b: channel };
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return {
    r: clampChannel(hueToRgb(p, q, h + 1 / 3) * 255),
    g: clampChannel(hueToRgb(p, q, h) * 255),
    b: clampChannel(hueToRgb(p, q, h - 1 / 3) * 255),
  };
}

/** Parse a CSS color into `{r,g,b}` (0..255) or `null`. Alpha is ignored. */
function parseColor(input) {
  if (typeof input !== 'string') return null;
  const value = input.trim().toLowerCase();
  if (!value) return null;
  if (value.startsWith('#')) return parseHexColor(value);
  if (value in NAMED_COLORS) return parseColor(NAMED_COLORS[value]);
  const functionMatch = /^([a-z]+)\((.*)\)$/u.exec(value);
  if (!functionMatch) return null;
  const name = functionMatch[1];
  const inner = functionMatch[2];
  if (name === 'rgb' || name === 'rgba') return parseRgbFunction(inner);
  if (name === 'hsl' || name === 'hsla') return parseHslFunction(inner);
  return null;
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((channel) => clampChannel(channel).toString(16).padStart(2, '0')).join('')}`;
}

function channelToLinear(channel) {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

/**
 * WCAG relative luminance of a CSS color. Unparseable input is treated as white
 * so that custom colors degrade to the readable dark-ink scheme.
 */
export function relativeLuminance(color) {
  const rgb = parseColor(color);
  if (!rgb) return 1;
  return (0.2126 * channelToLinear(rgb.r))
    + (0.7152 * channelToLinear(rgb.g))
    + (0.0722 * channelToLinear(rgb.b));
}

/** WCAG contrast ratio (1..21) between two CSS colors. */
export function contrastRatio(colorA, colorB) {
  const first = relativeLuminance(colorA);
  const second = relativeLuminance(colorB);
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Normalize any parseable CSS color to a lowercase `#rrggbb` string. Invalid
 * input falls back to `fallback` (itself normalized), making settings migration
 * safe without throwing.
 */
export function normalizeHexColor(value, fallback = '#ffffff') {
  const parsed = parseColor(value);
  if (parsed) return rgbToHex(parsed);
  const safeFallback = parseColor(fallback);
  return safeFallback ? rgbToHex(safeFallback) : '#ffffff';
}

function pickInkScheme(bgColor) {
  const darkContrast = contrastRatio(DARK_INK_SCHEME.ink, bgColor);
  const lightContrast = contrastRatio(LIGHT_INK_SCHEME.ink, bgColor);
  return lightContrast > darkContrast
    ? { ...LIGHT_INK_SCHEME }
    : { ...DARK_INK_SCHEME };
}

/**
 * Pick dark or light ink for an arbitrary background. Returns only the
 * contracted `{ ink, muted, border }` values (never the internal tone marker).
 */
export function autoInk(bgColor) {
  const scheme = pickInkScheme(bgColor);
  return { ink: scheme.ink, muted: scheme.muted, border: scheme.border };
}

/* ------------------------------------------------------------------ settings */

/** Clamp a possibly dirty numeric setting, falling back when it is not a number. */
export function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, number));
}

function normalizePresetId(value) {
  return PRESET_IDS.includes(value) ? value : 'paper';
}

function normalizeTextTone(value) {
  return TEXT_TONES.includes(value) ? value : 'auto';
}

function normalizeWeight(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 400;
  const clamped = Math.max(FONT_WEIGHT_VALUES[0], Math.min(FONT_WEIGHT_VALUES[FONT_WEIGHT_VALUES.length - 1], number));
  let best = FONT_WEIGHT_VALUES[0];
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const candidate of FONT_WEIGHT_VALUES) {
    const distance = Math.abs(candidate - clamped);
    if (distance < bestDistance) {
      best = candidate;
      bestDistance = distance;
    }
  }
  return best;
}

function fontStackOf(value) {
  const family = FAMILY_BY_ID.get(value) || FAMILY_BY_ID.get('serif');
  return family.stack;
}

function headingWeightFor(weight) {
  return weight >= 600 ? 700 : 600;
}

/* ------------------------------------------------------------------ resolver */

/**
 * Normalize a persisted settings object into concrete appearance values.
 * Unknown values fall back to contract defaults instead of throwing, so a
 * stale localStorage payload can never blank the reader.
 *
 * `preset` is the normalized preset id string ('paper' | ... | 'custom').
 */
export function resolveAppearance(settings) {
  const source = settings && typeof settings === 'object' ? settings : {};
  const presetId = normalizePresetId(source.backgroundPreset);
  const customBackground = normalizeHexColor(source.customBackground, APPEARANCE_DEFAULTS.customBackground);
  const basePreset = presetId === 'custom' ? null : PRESET_BY_ID.get(presetId);

  let bg = basePreset ? basePreset.bg : customBackground;
  let scheme = pickInkScheme(bg);
  if (basePreset) {
    scheme = {
      ink: basePreset.ink,
      muted: basePreset.muted,
      border: basePreset.border,
    };
  }

  // An explicit tone override is always honored: the user may force light text
  // on a dark background or dark text on a light one.
  const tone = normalizeTextTone(source.textTone);
  if (tone === 'dark') scheme = { ...DARK_INK_SCHEME };
  else if (tone === 'light') scheme = { ...LIGHT_INK_SCHEME };

  const accent = basePreset
    ? basePreset.accent
    : (pickInkScheme(bg).tone === 'light' ? CUSTOM_ACCENT_LIGHT : CUSTOM_ACCENT_DARK);

  const weight = normalizeWeight(source.fontWeight);

  return {
    preset: presetId,
    bg,
    ink: scheme.ink,
    muted: scheme.muted,
    border: scheme.border,
    accent,
    fontFamily: fontStackOf(source.fontFamily),
    fontWeight: weight,
    headingWeight: headingWeightFor(weight),
    width: clampNumber(
      source.contentWidth,
      APPEARANCE_LIMITS.contentWidth.min,
      APPEARANCE_LIMITS.contentWidth.max,
      APPEARANCE_DEFAULTS.contentWidth,
    ),
    brightness: clampNumber(
      source.brightness,
      APPEARANCE_LIMITS.brightness.min,
      APPEARANCE_LIMITS.brightness.max,
      APPEARANCE_DEFAULTS.brightness,
    ),
    imageOpacity: clampNumber(
      source.backgroundImageOpacity,
      APPEARANCE_LIMITS.backgroundImageOpacity.min,
      APPEARANCE_LIMITS.backgroundImageOpacity.max,
      APPEARANCE_DEFAULTS.backgroundImageOpacity,
    ),
    imageBlur: clampNumber(
      source.backgroundImageBlur,
      APPEARANCE_LIMITS.backgroundImageBlur.min,
      APPEARANCE_LIMITS.backgroundImageBlur.max,
      APPEARANCE_DEFAULTS.backgroundImageBlur,
    ),
  };
}

/** Escape a URL for use inside a CSS `url("...")` token. */
function cssUrl(url) {
  const clean = String(url)
    .replace(/[\n\r\f]/gu, ' ')
    .replace(/\\/gu, '\\\\')
    .replace(/"/gu, '\\"');
  return `url("${clean}")`;
}

/**
 * CSS custom properties for `.dshr-root`. Every value is a string so the shell
 * can spread the object directly into `style`.
 */
export function appearanceVars(settings, backgroundImageUrl) {
  const appearance = resolveAppearance(settings);
  const image = typeof backgroundImageUrl === 'string' && backgroundImageUrl.trim()
    ? cssUrl(backgroundImageUrl.trim())
    : 'none';
  return {
    '--dshr-reader-bg': appearance.bg,
    '--dshr-reader-ink': appearance.ink,
    '--dshr-reader-muted': appearance.muted,
    '--dshr-reader-border': appearance.border,
    '--dshr-reader-accent': appearance.accent,
    '--dshr-reader-font': appearance.fontFamily,
    '--dshr-reader-weight': String(appearance.fontWeight),
    '--dshr-reader-heading-weight': String(appearance.headingWeight),
    '--dshr-reader-width': `${appearance.width}px`,
    '--dshr-reader-brightness': String(appearance.brightness),
    '--dshr-reader-image-opacity': String(appearance.imageOpacity),
    '--dshr-reader-image-blur': `${appearance.imageBlur}px`,
    '--dshr-reader-image': image,
  };
}

/** Default export is the resolver, mirroring how the panel imports it. */
export default resolveAppearance;
