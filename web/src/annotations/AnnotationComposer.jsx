import React from 'react';
import {
  ANNOTATION_STYLES,
  HIGHLIGHT_COLORS,
  HIGHLIGHT_WIDTHS,
  STYLE_LABELS,
  UNDERLINE_COLORS,
} from './model.js';
import {
  CloseGlyph,
  HighlightGlyph,
  NoteGlyph,
  UnderlineGlyph,
} from './glyphs.jsx';

/**
 * Create/edit dialog for a single annotation.
 *
 * Props (contract):
 *   open: boolean
 *   draft: annotation draft (persisted annotation fields + quote)
 *   mode: 'create' | 'edit'
 *   onClose(): void
 *   onSave(draft): void   — receives a copy of `draft` with the edited fields
 *   onDelete(draft): void — only rendered in edit mode
 *
 * The composer never persists anything and never touches ranges/rects; it only
 * edits presentation fields (`style`, `color`, `width`, `note`) and hands the
 * merged draft back to the Lead.
 */

const STYLE_ICONS = {
  highlight: HighlightGlyph,
  underline: UnderlineGlyph,
  note: NoteGlyph,
};

const STYLE_HINTS = {
  highlight: '用半透明的色带覆盖选中文字，可调笔触粗细。',
  underline: '在选中文字下方画一条手写式下划线。',
  note: '在选中文字旁放一枚便签，记录此刻的想法。',
};

const NOTE_LIMIT = 2000;
const DEFAULT_WIDTH = HIGHLIGHT_WIDTHS[1].value;

function paletteFor(style) {
  return style === 'underline' ? UNDERLINE_COLORS : HIGHLIGHT_COLORS;
}

function styleOf(value) {
  return Object.prototype.hasOwnProperty.call(STYLE_LABELS, value) ? value : 'highlight';
}

function nearestWidth(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return DEFAULT_WIDTH;
  let best = DEFAULT_WIDTH;
  let distance = Infinity;
  for (let index = 0; index < HIGHLIGHT_WIDTHS.length; index += 1) {
    const candidate = HIGHLIGHT_WIDTHS[index].value;
    const next = Math.abs(candidate - numeric);
    if (next < distance) {
      best = candidate;
      distance = next;
    }
  }
  return best;
}

function initialValueFromDraft(draft) {
  const source = draft && typeof draft === 'object' ? draft : {};
  const style = styleOf(source.style);
  const palette = paletteFor(style);
  const paletteMatch = palette.find((entry) => entry.value === source.color);
  return {
    style,
    color: paletteMatch ? paletteMatch.value : (typeof source.color === 'string' && source.color ? source.color : palette[0].value),
    width: nearestWidth(source.width),
    note: typeof source.note === 'string' ? source.note : '',
    quote: typeof source.quote === 'string' ? source.quote : '',
  };
}

function draftSignature(draft, mode) {
  if (!draft || typeof draft !== 'object') return `${mode}:empty`;
  const quote = typeof draft.quote === 'string' ? draft.quote : '';
  return [
    mode,
    draft.id || '',
    quote,
    Array.isArray(draft.ranges) ? draft.ranges.length : 0,
    draft.page == null ? '' : draft.page,
    draft.chapterId == null ? '' : draft.chapterId,
  ].join('|');
}

function widthBarHeight(width) {
  return `${Math.round(2 + (Number(width) || DEFAULT_WIDTH) * 0.34)}px`;
}

export function AnnotationComposer({ open, draft, mode, onClose, onSave, onDelete }) {
  const isEdit = mode === 'edit';
  const [value, setValue] = React.useState(() => initialValueFromDraft(draft));
  const openedKeyRef = React.useRef('');
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      openedKeyRef.current = '';
      return;
    }
    const key = draftSignature(draft, mode);
    if (openedKeyRef.current === key) return;
    openedKeyRef.current = key;
    setValue(initialValueFromDraft(draft));
  }, [draft, mode, open]);

  React.useEffect(() => {
    if (!open || typeof window === 'undefined') return undefined;
    const timer = window.setTimeout(() => {
      const area = textareaRef.current;
      if (!area) return;
      try {
        area.focus({ preventScroll: true });
        area.setSelectionRange(area.value.length, area.value.length);
      } catch {
        /* ignore focus quirks in embedded webviews */
      }
    }, 30);
    return () => window.clearTimeout(timer);
  }, [open]);

  const handleChange = React.useCallback((patch) => {
    setValue((previous) => ({ ...previous, ...patch }));
  }, []);

  const handleStyle = React.useCallback((nextStyle) => {
    const style = styleOf(nextStyle);
    setValue((previous) => {
      const palette = paletteFor(style);
      const keepColor = palette.some((entry) => entry.value === previous.color);
      return {
        ...previous,
        style,
        color: keepColor ? previous.color : palette[0].value,
      };
    });
  }, []);

  const handleSave = React.useCallback(() => {
    if (!value.note.trim() && !value.quote.trim() && value.style === 'note') return;
    const base = draft && typeof draft === 'object' ? draft : {};
    const payload = {
      ...base,
      style: value.style,
      color: value.color,
      width: value.width,
      note: value.note,
      quote: value.quote,
    };
    if (typeof onSave === 'function') onSave(payload);
  }, [draft, onSave, value]);

  React.useEffect(() => {
    if (!open || typeof document === 'undefined') return undefined;
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (typeof onClose === 'function') onClose();
        return;
      }
      if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        handleSave();
      }
    };
    document.addEventListener('keydown', handleKey, true);
    return () => document.removeEventListener('keydown', handleKey, true);
  }, [handleSave, onClose, open]);

  if (!open) return null;

  const palette = paletteFor(value.style);
  const StyleIcon = STYLE_ICONS[value.style] || HighlightGlyph;
  const quote = value.quote.trim();
  const canSave = Boolean(value.note.trim() || quote || value.style !== 'note');
  const noteLabel = value.style === 'note' ? '便签内容' : '备注';
  const notePlaceholder = value.style === 'note'
    ? '写下这段文字给你的想法…'
    : '可选：为这条标注写一条备注…';
  const colorLabel = value.style === 'underline'
    ? '下划线颜色'
    : value.style === 'note'
      ? '便签颜色'
      : '荧光笔颜色';

  return (
    <div
      className="dshr-anno-composer-mask"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && typeof onClose === 'function') onClose();
      }}
    >
      <div
        className="dshr-anno-composer"
        role="dialog"
        aria-modal="true"
        aria-label={isEdit ? '编辑标注' : '添加标注'}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="dshr-anno-composer__head">
          <div className="dshr-anno-composer__titles">
            <h3 className="dshr-anno-composer__title">{isEdit ? '编辑标注' : '添加标注'}</h3>
            <span className="dshr-anno-composer__sub">{STYLE_HINTS[value.style]}</span>
          </div>
          <button
            type="button"
            className="dshr-anno-composer__close"
            aria-label="关闭标注编辑器"
            onClick={() => { if (typeof onClose === 'function') onClose(); }}
          >
            <CloseGlyph size={13} />
          </button>
        </header>

        <div className="dshr-anno-composer__body">
          <div className="dshr-anno-composer__tabs" role="tablist" aria-label="标注样式">
            {ANNOTATION_STYLES.map((style) => {
              const Icon = STYLE_ICONS[style.id] || HighlightGlyph;
              const active = value.style === style.id;
              return (
                <button
                  key={style.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`dshr-anno-composer__tab${active ? ' is-active' : ''}`}
                  onClick={() => handleStyle(style.id)}
                >
                  <Icon size={14} /> {style.label}
                </button>
              );
            })}
          </div>

          <div className="dshr-anno-composer__field">
            <div className="dshr-anno-composer__label">
              <span>{colorLabel}</span>
              <em>{value.style === 'underline' ? '纸上的墨色' : '半透明笔触'}</em>
            </div>
            <div className="dshr-anno-composer__swatches" role="radiogroup" aria-label={colorLabel}>
              {palette.map((color) => {
                const active = value.color === color.value;
                return (
                  <button
                    key={color.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    aria-label={`${color.label}色`}
                    title={`${color.label}色`}
                    className={`dshr-anno-swatch${active ? ' is-active' : ''}`}
                    style={{ '--swatch': color.value }}
                    onClick={() => handleChange({ color: color.value })}
                  >
                    {color.label}
                  </button>
                );
              })}
            </div>
          </div>

          {value.style === 'highlight' ? (
            <div className="dshr-anno-composer__field">
              <div className="dshr-anno-composer__label">
                <span>笔触粗细</span>
                <em>细 / 中 / 宽</em>
              </div>
              <div className="dshr-anno-composer__widths" role="radiogroup" aria-label="笔触粗细">
                {HIGHLIGHT_WIDTHS.map((width) => {
                  const active = value.width === width.value;
                  return (
                    <button
                      key={width.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      className={`dshr-anno-width${active ? ' is-active' : ''}`}
                      onClick={() => handleChange({ width: width.value })}
                    >
                      <span
                        className="dshr-anno-width__bar"
                        style={{ height: widthBarHeight(width.value), background: value.color }}
                      />
                      {width.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="dshr-anno-composer__field">
            <div className="dshr-anno-composer__label">
              <span>{noteLabel}</span>
              <em>{value.style === 'note' ? '可留空，仅标记位置' : '可选'}</em>
            </div>
            <textarea
              ref={textareaRef}
              className="dshr-anno-composer__textarea"
              value={value.note}
              maxLength={NOTE_LIMIT}
              placeholder={notePlaceholder}
              aria-label={noteLabel}
              onChange={(event) => handleChange({ note: event.target.value })}
            />
            <div className="dshr-anno-composer__counter">{value.note.length} / {NOTE_LIMIT}</div>
          </div>

          {quote ? (
            <div className="dshr-anno-composer__quote" style={{ '--dshr-anno-color': value.color }}>
              <span className="dshr-anno-composer__quote-label">选中文字</span>
              <p className="dshr-anno-composer__quote-text">{quote}</p>
            </div>
          ) : null}

          <div
            className={`dshr-anno-composer__preview is-${value.style}`}
            style={{ '--dshr-anno-color': value.color }}
          >
            <span className="dshr-anno-composer__preview-label">效果预览</span>
            <span className="dshr-anno-composer__preview-text">
              {quote || '选中的文字会这样显示'}
            </span>
          </div>
        </div>

        <footer className="dshr-anno-composer__foot">
          {isEdit ? (
            <button
              type="button"
              className="dshr-anno-btn dshr-anno-btn--danger"
              onClick={() => { if (typeof onDelete === 'function') onDelete(draft || {}); }}
            >
              删除
            </button>
          ) : null}
          <span className="dshr-anno-composer__spacer" />
          <button
            type="button"
            className="dshr-anno-btn"
            onClick={() => { if (typeof onClose === 'function') onClose(); }}
          >
            取消
          </button>
          <button
            type="button"
            className="dshr-anno-btn dshr-anno-btn--primary"
            disabled={!canSave}
            onClick={handleSave}
            title="Ctrl / ⌘ + Enter 保存"
          >
            {isEdit ? '保存修改' : '保存标注'}
          </button>
        </footer>
      </div>
    </div>
  );
}
