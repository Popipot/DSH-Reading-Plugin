import React from 'react';
import { IconPalette, IconX } from './icons.jsx';

const themes = [
  { id: 'paper', label: '纸本', detail: '暖色纸面与欢迎插画' },
  { id: 'whale-blue', label: '鲸海蓝', detail: '蓝色书架与半透明鲸鱼娘' },
  { id: 'whale-navy', label: '藏青像素', detail: '藏青描边、奶白卡片与半透明鲸鱼娘' },
];

export function LibraryThemePicker({ theme, preview, onPreview, onApply }) {
  const id = React.useId();
  const trigger = React.useRef(null);
  const panel = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const place = React.useCallback(() => {
    const button = trigger.current.getBoundingClientRect();
    const bounds = trigger.current.closest('.dshr-library-shell').getBoundingClientRect();
    const menu = panel.current;
    const left = Math.max(8, bounds.left + 8);
    const right = Math.min(window.innerWidth - 8, bounds.right - 8);
    const top = Math.max(8, bounds.top + 8);
    const bottom = Math.min(window.innerHeight - 8, bounds.bottom - 8);
    const width = Math.min(304, right - left);
    menu.style.width = width + 'px';
    menu.style.maxHeight = (bottom - top) + 'px';
    menu.style.left = Math.max(left, Math.min(button.left, right - width)) + 'px';
    const height = menu.offsetHeight;
    const above = button.top - top >= height + 6 || button.top - top > bottom - button.bottom;
    const preferredTop = above ? button.top - height - 6 : button.bottom + 6;
    menu.style.top = Math.max(top, Math.min(preferredTop, bottom - height)) + 'px';
  }, []);

  const close = React.useCallback((restoreFocus = true) => {
    onPreview(null);
    panel.current.hidePopover();
    setOpen(false);
    if (restoreFocus) trigger.current.focus({ preventScroll: true });
  }, [onPreview]);

  React.useLayoutEffect(() => {
    if (open) place();
  }, [open, place, preview]);

  React.useEffect(() => {
    if (!open) return;
    function dismissOutside(event) {
      if (!panel.current.contains(event.target) && !trigger.current.contains(event.target)) close(false);
    }
    function dismissWithEscape(event) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      close();
    }
    document.addEventListener('pointerdown', dismissOutside, true);
    document.addEventListener('keydown', dismissWithEscape, true);
    window.addEventListener('resize', place);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside, true);
      document.removeEventListener('keydown', dismissWithEscape, true);
      window.removeEventListener('resize', place);
    };
  }, [close, open, place]);

  return (
    <>
      <button type="button" ref={trigger} aria-label="主题" aria-expanded={open} aria-controls={id}
        onClick={() => {
          if (panel.current.matches(':popover-open')) { close(); return; }
          panel.current.showPopover();
          setOpen(true);
          place();
          panel.current.querySelector('[data-theme-preview]')?.focus({ preventScroll: true });
        }}>
        <IconPalette size={19} /> 主题 <span className="dshr-theme-trigger__current">{themes.find(item => item.id === theme)?.label}</span>
      </button>
      <section ref={panel} id={id} popover="manual" role="dialog" aria-label="书架主题" className="dshr-theme-picker">
        <header>
          <strong>书架主题</strong>
          <button type="button" aria-label="关闭主题选择" onClick={() => close()}><IconX size={16} /></button>
        </header>
        {themes.map(item => (
          <div className="dshr-theme-option" key={item.id} data-option={item.id}>
            <div className="dshr-theme-option__identity">
              <span className="dshr-theme-option__swatch" aria-hidden="true" />
              <span><strong>{item.label}</strong><small>{item.detail}</small></span>
            </div>
            <div className="dshr-theme-option__actions">
              <button type="button" data-theme-preview aria-label={'预览' + item.label}
                aria-pressed={preview === item.id} onClick={() => onPreview(item.id)}>预览</button>
              <button type="button" className="dshr-theme-apply" aria-label={'应用' + item.label} disabled={theme === item.id}
                onClick={() => { onApply(item.id); close(); }}>{theme === item.id ? '已应用' : '应用'}</button>
            </div>
          </div>
        ))}
        {preview && <p role="status" className="dshr-theme-picker__status">正在预览 {themes.find(item => item.id === preview)?.label}。关闭即还原。</p>}
      </section>
    </>
  );
}
