import React from 'react';
import { IconTranslate, IconSparkles, IconGoogle, IconGoogleScholar, IconCopy, IconX, IconHighlighter } from './icons.jsx';

/**
 * Floating actions for a text selection. It is positioned from the DOMRect the
 * reader captured, clamped so it never leaves the viewport.
 */
export function SelectionToolbar({ selection, translation, onTranslate, onAnnotate, onExplain, onGoogle, onCopy, onClose, onRetry }) {
  if (!selection?.text?.trim()) return null;
  const rect = selection.rect;
  const width = 476;
  const half = width / 2;
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const center = rect ? rect.left + rect.width / 2 : viewportWidth / 2;
  const left = Math.max(half + 10, Math.min(viewportWidth - half - 10, center));
  const top = rect && rect.top > 70 ? rect.top - 46 : Math.min(viewportHeight - 190, (rect?.bottom ?? 0) + 10);
  const popTop = Math.min(viewportHeight - 180, top + 42);

  return (
    <>
      <div
        className="dshr-selection"
        style={{ left, top: Math.max(8, top) }}
        role="toolbar"
        aria-label="选中文字操作"
        onMouseDown={(event) => event.preventDefault()}
      >
        <button type="button" className="dshr-selection__btn dshr-selection__btn--accent" onClick={() => onTranslate(selection)}>
          <IconTranslate size={14} /> 翻译
        </button>
        <button type="button" className="dshr-selection__btn dshr-selection__btn--mark" onClick={() => onAnnotate(selection)} title="荧光笔、下划线、便签或备注">
          <IconHighlighter size={14} /> 标记
        </button>
        <button type="button" className="dshr-selection__btn" onClick={() => onExplain(selection)}>
          <IconSparkles size={14} /> AI 解释
        </button>
        <span className="dshr-selection__sep" />
        <button type="button" className="dshr-selection__btn" onClick={() => onGoogle(selection.text, 'web')} title="用 Google 搜索">
          <IconGoogle size={14} /> Google
        </button>
        <button type="button" className="dshr-selection__btn" onClick={() => onGoogle(selection.text, 'scholar')} title="用 Google 学术搜索">
          <IconGoogleScholar size={14} /> 学术
        </button>
        <span className="dshr-selection__sep" />
        <button type="button" className="dshr-selection__btn" onClick={() => onCopy(selection.text)} title="复制选中文字">
          <IconCopy size={14} />
        </button>
        <button type="button" className="dshr-selection__btn" onClick={onClose} title="关闭" aria-label="关闭选中文字工具栏">
          <IconX size={13} />
        </button>
      </div>
      {translation ? (
        <div className="dshr-selection__pop" style={{ left, top: popTop }} onMouseDown={(event) => event.preventDefault()}>
          <div className="dshr-selection__pop-head">
            <span>中文译文</span>
            <button type="button" onClick={onClose} aria-label="关闭译文"><IconX size={12} /></button>
          </div>
          {translation.status === 'loading' ? (
            <span className="dshr-translation__loading"><span className="dshr-spinner" /> 正在翻译选中内容…</span>
          ) : translation.status === 'error' ? (
            <span style={{ color: 'var(--dshr-error)' }}>
              {translation.error || '翻译失败。'}{' '}
              <button type="button" className="dshr-translation__retry" onClick={onRetry}>重试</button>
            </span>
          ) : (
            String(translation.zh || '').split(/\n+/u).filter(Boolean).map((line, index) => (
              <p key={index} style={{ margin: index === 0 ? 0 : '8px 0 0' }}>{line}</p>
            ))
          )}
        </div>
      ) : null}
    </>
  );
}
