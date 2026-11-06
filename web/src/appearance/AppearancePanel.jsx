import React from 'react';
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
  resolveAppearance,
} from './appearance.js';

export { appearanceStyles } from './appearance.css.js';

/* ------------------------------------------------------------------ glyphs */

function Glyph({ size = 15, children, viewBox = '0 0 24 24' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function IconClose(props) {
  return <Glyph {...props}><path d="m6 6 12 12M18 6 6 18" /></Glyph>;
}

function IconImage(props) {
  return (
    <Glyph {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.4" />
      <circle cx="8.4" cy="9.6" r="1.5" />
      <path d="m4 17 4.6-4.4a1.6 1.6 0 0 1 2.2 0l2.5 2.4 2.1-2a1.6 1.6 0 0 1 2.2 0L20 15.6" />
    </Glyph>
  );
}

function IconUpload(props) {
  return (
    <Glyph {...props}>
      <path d="M12 16V4" /><path d="m7 9 5-5 5 5" />
      <path d="M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15" />
    </Glyph>
  );
}

function IconTrash(props) {
  return (
    <Glyph {...props}>
      <path d="M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7" />
      <path d="M10 11v6M14 11v6" />
    </Glyph>
  );
}

function IconReset(props) {
  return (
    <Glyph {...props}>
      <path d="M20 11a8 8 0 1 0-2.3 6.3" /><path d="M20 4v7h-7" />
    </Glyph>
  );
}

function IconCheck(props) {
  return <Glyph {...props}><path d="m5 12 4.5 4.5L19 7" /></Glyph>;
}

/* --------------------------------------------------------------- fragments */

const TONE_OPTIONS = Object.freeze([
  { id: 'auto', label: '自动' },
  { id: 'dark', label: '深色字' },
  { id: 'light', label: '浅色字' },
]);

const RESET_KEYS = Object.freeze([
  'fontSize',
  'lineHeight',
  'fontFamily',
  'fontWeight',
  'contentWidth',
  'tocWidth',
  'brightness',
  'backgroundPreset',
  'customBackground',
  'textTone',
  'backgroundImageOpacity',
  'backgroundImageBlur',
]);

const FOCUSABLE_SELECTOR = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

function Segmented({ label, value, options, onChange }) {
  return (
    <div className="dshr-appearance-segmented" role="group" aria-label={label}>
      {options.map((option) => {
        const optionValue = option.value !== undefined ? option.value : option.id;
        return (
          <button
            key={String(optionValue)}
            type="button"
            className="dshr-appearance-segmented__item"
            aria-pressed={value === optionValue}
            onClick={() => onChange(optionValue)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function SliderField({ label, valueText, min, max, step, value, onChange, disabled, hint }) {
  return (
    <label className={`dshr-appearance-slider${disabled ? ' is-disabled' : ''}`}>
      <span className="dshr-appearance-slider__head">
        <span>{label}</span>
        <span className="dshr-appearance-slider__value">{valueText}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
      />
      {hint ? <span className="dshr-appearance-slider__hint">{hint}</span> : null}
    </label>
  );
}

/* ------------------------------------------------------------------- panel */

/**
 * Reader appearance drawer.
 *
 * Fully controlled: every change is a full settings replacement handed to
 * `onChange` so the shell can persist it. Background image storage, object URL
 * lifecycle and IndexedDB access stay outside this component by contract.
 */
export function AppearancePanel({
  open,
  settings,
  backgroundImageUrl,
  onChange,
  onPickBackgroundImage,
  onClearBackgroundImage,
  onClose,
}) {
  const panelRef = React.useRef(null);
  const titleId = React.useId();
  const [resetArmed, setResetArmed] = React.useState(false);

  const resolved = resolveAppearance(settings);
  const hasImage = Boolean(backgroundImageUrl);
  const customHex = normalizeHexColor(settings.customBackground, APPEARANCE_DEFAULTS.customBackground);
  const customInk = autoInk(customHex).ink;
  const contrast = contrastRatio(resolved.ink, resolved.bg);
  const fontSize = clampNumber(settings.fontSize, APPEARANCE_LIMITS.fontSize.min, APPEARANCE_LIMITS.fontSize.max, APPEARANCE_DEFAULTS.fontSize);
  const lineHeight = clampNumber(settings.lineHeight, APPEARANCE_LIMITS.lineHeight.min, APPEARANCE_LIMITS.lineHeight.max, APPEARANCE_DEFAULTS.lineHeight);
  const isDefault = !hasImage
    && RESET_KEYS.every((key) => settings[key] === APPEARANCE_DEFAULTS[key]);

  const update = React.useCallback((patch) => {
    if (typeof onChange !== 'function') return;
    onChange({ ...settings, ...patch });
  }, [onChange, settings]);

  // Escape closes the drawer, matching the other reader dialogs.
  React.useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Move focus into the drawer and give it back to the opener when it closes.
  React.useEffect(() => {
    if (!open) return undefined;
    const previous = typeof document !== 'undefined' ? document.activeElement : null;
    const frame = window.requestAnimationFrame(() => {
      panelRef.current?.focus({ preventScroll: true });
    });
    return () => {
      window.cancelAnimationFrame(frame);
      if (previous instanceof HTMLElement && previous.isConnected) {
        previous.focus({ preventScroll: true });
      }
    };
  }, [open]);

  // Disarm the reset confirmation when the drawer closes or after a pause.
  React.useEffect(() => {
    if (!open) {
      setResetArmed(false);
      return undefined;
    }
    return undefined;
  }, [open]);

  React.useEffect(() => {
    if (!resetArmed) return undefined;
    const timer = window.setTimeout(() => setResetArmed(false), 3200);
    return () => window.clearTimeout(timer);
  }, [resetArmed]);

  if (!open) return null;

  const handleMaskMouseDown = (event) => {
    if (event.target === event.currentTarget) onClose?.();
  };

  const handlePanelKeyDown = (event) => {
    if (event.key !== 'Tab' || !panelRef.current) return;
    const nodes = [...panelRef.current.querySelectorAll(FOCUSABLE_SELECTOR)]
      .filter((node) => node.offsetParent !== null || node === document.activeElement);
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || !panelRef.current.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleReset = () => {
    if (!resetArmed) {
      setResetArmed(true);
      return;
    }
    setResetArmed(false);
    if (hasImage) onClearBackgroundImage?.();
    onChange?.({ ...settings, ...APPEARANCE_DEFAULTS });
  };

  const previewVars = appearanceVars(settings, backgroundImageUrl);
  const previewStyle = {
    ...previewVars,
    fontSize: `${Math.min(16, Math.max(12, Math.round(fontSize * 0.8)))}px`,
    lineHeight: String(lineHeight),
  };
  const contrastOk = contrast >= 4.5;

  return (
    <div className="dshr-appearance-mask" onMouseDown={handleMaskMouseDown}>
      <aside
        className="dshr-appearance-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={panelRef}
        onKeyDown={handlePanelKeyDown}
      >
        <header className="dshr-appearance-head">
          <div className="dshr-appearance-head__text">
            <strong id={titleId}>阅读外观</strong>
            <span>调整排版、字体与背景 · 仅保存在本机</span>
          </div>
          <button type="button" className="dshr-appearance-close" onClick={onClose} aria-label="关闭外观设置">
            <IconClose size={16} />
          </button>
        </header>

        <div className="dshr-appearance-body">
          <div className="dshr-appearance-preview" style={previewStyle} aria-hidden="true">
            <span className="dshr-appearance-preview__badge">实时预览</span>
            <div className="dshr-appearance-preview__inner">
              <span className="dshr-appearance-preview__kicker">第 1 章</span>
              <p className="dshr-appearance-preview__title">山居秋暝</p>
              <p className="dshr-appearance-preview__text">空山新雨后，天气晚来秋。明月松间照，清泉石上流。</p>
              <p className="dshr-appearance-preview__quote">竹喧归浣女，莲动下渔舟。</p>
            </div>
          </div>

          <section className="dshr-appearance-section" aria-labelledby={`${titleId}-bg`}>
            <h4 className="dshr-appearance-section__title" id={`${titleId}-bg`}>背景</h4>
            <div className="dshr-appearance-swatches" role="group" aria-label="背景预设">
              {BACKGROUND_PRESETS.map((preset) => {
                const swatchBg = preset.id === 'custom' ? customHex : preset.bg;
                const swatchInk = preset.id === 'custom' ? customInk : preset.ink;
                const active = resolved.preset === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    className={`dshr-appearance-swatch${active ? ' is-active' : ''}`}
                    aria-pressed={active}
                    onClick={() => update({ backgroundPreset: preset.id })}
                  >
                    <span
                      className="dshr-appearance-swatch__chip"
                      style={{ background: swatchBg, color: swatchInk }}
                    >
                      文
                    </span>
                    <span className="dshr-appearance-swatch__label">{preset.label}</span>
                  </button>
                );
              })}
            </div>

            <label className="dshr-appearance-colorrow">
              <span>自定义颜色</span>
              <span className="dshr-appearance-colorrow__control">
                <input
                  type="color"
                  className="dshr-appearance-color"
                  value={customHex}
                  aria-label="自定义背景颜色"
                  onChange={(event) => update({ backgroundPreset: 'custom', customBackground: event.target.value })}
                />
                <code className="dshr-appearance-colorrow__hex">{customHex.toUpperCase()}</code>
              </span>
            </label>

            <div className="dshr-appearance-field">
              <div className="dshr-appearance-field__head">
                <span>文字色调</span>
                <span className={`dshr-appearance-field__value${contrastOk ? '' : ' is-warning'}`}>
                  对比度 {contrast.toFixed(1)}:1
                </span>
              </div>
              <Segmented
                label="文字色调"
                value={settings.textTone === 'dark' || settings.textTone === 'light' ? settings.textTone : 'auto'}
                options={TONE_OPTIONS}
                onChange={(tone) => update({ textTone: tone })}
              />
              <p className="dshr-appearance-hint">
                {contrastOk ? '自动模式会按背景亮度选择深色或浅色文字。' : '当前文字与背景对比度偏低，建议改选其它背景或文字色调。'}
                {hasImage ? ' 背景图片会进一步影响实际可读性。' : ''}
              </p>
            </div>
          </section>

          <section className="dshr-appearance-section" aria-labelledby={`${titleId}-image`}>
            <h4 className="dshr-appearance-section__title" id={`${titleId}-image`}>背景图片</h4>
            <div className="dshr-appearance-image">
              <span className={`dshr-appearance-image__thumb${hasImage ? ' has-image' : ''}`}>
                {hasImage ? <img src={backgroundImageUrl} alt="" /> : <IconImage size={20} />}
              </span>
              <div className="dshr-appearance-image__meta">
                <strong>{hasImage ? '已选择背景图片' : '未选择背景图片'}</strong>
                <span>作为文字下方的衬底，仅保存在本机。</span>
              </div>
              <div className="dshr-appearance-image__actions">
                <button
                  type="button"
                  className="dshr-appearance-btn dshr-appearance-btn--soft dshr-appearance-btn--sm"
                  onClick={onPickBackgroundImage}
                >
                  {hasImage ? <IconCheck size={13} /> : <IconUpload size={13} />}
                  {hasImage ? '更换' : '选择图片'}
                </button>
                {hasImage ? (
                  <button
                    type="button"
                    className="dshr-appearance-btn dshr-appearance-btn--ghost dshr-appearance-btn--sm"
                    onClick={onClearBackgroundImage}
                  >
                    <IconTrash size={13} /> 移除
                  </button>
                ) : null}
              </div>
            </div>
            <SliderField
              label="图片不透明度"
              valueText={`${Math.round(clampNumber(settings.backgroundImageOpacity, APPEARANCE_LIMITS.backgroundImageOpacity.min, APPEARANCE_LIMITS.backgroundImageOpacity.max, APPEARANCE_DEFAULTS.backgroundImageOpacity) * 100)}%`}
              min={APPEARANCE_LIMITS.backgroundImageOpacity.min}
              max={APPEARANCE_LIMITS.backgroundImageOpacity.max}
              step={APPEARANCE_LIMITS.backgroundImageOpacity.step}
              value={clampNumber(settings.backgroundImageOpacity, APPEARANCE_LIMITS.backgroundImageOpacity.min, APPEARANCE_LIMITS.backgroundImageOpacity.max, APPEARANCE_DEFAULTS.backgroundImageOpacity)}
              disabled={!hasImage}
              onChange={(value) => update({ backgroundImageOpacity: value })}
            />
            <SliderField
              label="图片模糊"
              valueText={`${Math.round(resolved.imageBlur)}px`}
              min={APPEARANCE_LIMITS.backgroundImageBlur.min}
              max={APPEARANCE_LIMITS.backgroundImageBlur.max}
              step={APPEARANCE_LIMITS.backgroundImageBlur.step}
              value={resolved.imageBlur}
              disabled={!hasImage}
              onChange={(value) => update({ backgroundImageBlur: value })}
            />
            <SliderField
              label="阅读亮度"
              valueText={`${Math.round(resolved.brightness * 100)}%`}
              min={APPEARANCE_LIMITS.brightness.min}
              max={APPEARANCE_LIMITS.brightness.max}
              step={APPEARANCE_LIMITS.brightness.step}
              value={resolved.brightness}
              onChange={(value) => update({ brightness: value })}
            />
            <p className="dshr-appearance-hint">调低亮度可减少夜间屏幕刺激；只影响正文/PDF 阅读区，不影响工具栏与批注面板。</p>
          </section>

          <section className="dshr-appearance-section" aria-labelledby={`${titleId}-type`}>
            <h4 className="dshr-appearance-section__title" id={`${titleId}-type`}>字体</h4>
            <div className="dshr-appearance-families" role="group" aria-label="字体">
              {FONT_FAMILIES.map((family) => (
                <button
                  key={family.id}
                  type="button"
                  className="dshr-appearance-family"
                  style={{ fontFamily: family.stack }}
                  aria-pressed={resolved.fontFamily === family.stack}
                  onClick={() => update({ fontFamily: family.id })}
                  title={family.label}
                >
                  {family.label}
                </button>
              ))}
            </div>
            <div className="dshr-appearance-field">
              <div className="dshr-appearance-field__head"><span>字重</span></div>
              <Segmented
                label="字重"
                value={resolved.fontWeight}
                options={FONT_WEIGHTS.map((weight) => ({ value: weight.value, label: weight.label }))}
                onChange={(value) => update({ fontWeight: value })}
              />
            </div>
            <SliderField
              label="字号"
              valueText={`${fontSize}px`}
              min={APPEARANCE_LIMITS.fontSize.min}
              max={APPEARANCE_LIMITS.fontSize.max}
              step={APPEARANCE_LIMITS.fontSize.step}
              value={fontSize}
              onChange={(value) => update({ fontSize: value })}
            />
            <SliderField
              label="行高"
              valueText={lineHeight.toFixed(2)}
              min={APPEARANCE_LIMITS.lineHeight.min}
              max={APPEARANCE_LIMITS.lineHeight.max}
              step={APPEARANCE_LIMITS.lineHeight.step}
              value={lineHeight}
              onChange={(value) => update({ lineHeight: Math.round(value * 100) / 100 })}
            />
          </section>

          <section className="dshr-appearance-section" aria-labelledby={`${titleId}-layout`}>
            <h4 className="dshr-appearance-section__title" id={`${titleId}-layout`}>版式</h4>
            <SliderField
              label="阅读宽度"
              valueText={`${Math.round(resolved.width)}px`}
              min={APPEARANCE_LIMITS.contentWidth.min}
              max={APPEARANCE_LIMITS.contentWidth.max}
              step={APPEARANCE_LIMITS.contentWidth.step}
              value={resolved.width}
              onChange={(value) => update({ contentWidth: value })}
            />
            <SliderField
              label="目录宽度"
              valueText={`${Math.round(clampNumber(settings.tocWidth, APPEARANCE_LIMITS.tocWidth.min, APPEARANCE_LIMITS.tocWidth.max, APPEARANCE_DEFAULTS.tocWidth))}px`}
              min={APPEARANCE_LIMITS.tocWidth.min}
              max={APPEARANCE_LIMITS.tocWidth.max}
              step={APPEARANCE_LIMITS.tocWidth.step}
              value={clampNumber(settings.tocWidth, APPEARANCE_LIMITS.tocWidth.min, APPEARANCE_LIMITS.tocWidth.max, APPEARANCE_DEFAULTS.tocWidth)}
              onChange={(value) => update({ tocWidth: value })}
            />
            <p className="dshr-appearance-hint">控制正文最大宽度；目录宽度可在这里调，也可以拖动目录右边缘。目录标题会完整换行显示。</p>
          </section>
        </div>

        <footer className="dshr-appearance-foot">
          <button
            type="button"
            className={`dshr-appearance-btn dshr-appearance-btn--ghost${resetArmed ? ' dshr-appearance-btn--danger' : ''}`}
            onClick={handleReset}
            disabled={isDefault && !resetArmed}
            title={isDefault ? '当前已是默认外观' : '恢复默认外观'}
          >
            {resetArmed ? <IconCheck size={14} /> : <IconReset size={14} />}
            {resetArmed ? '确认恢复？' : '恢复默认'}
          </button>
          <button type="button" className="dshr-appearance-btn dshr-appearance-btn--primary" onClick={onClose}>
            完成
          </button>
        </footer>
      </aside>
    </div>
  );
}

export default AppearancePanel;
