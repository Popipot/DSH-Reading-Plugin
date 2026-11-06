import React from 'react';
import { normalizeGlossary } from './translation-controller.js';

export function TranslationPanel({ page, source, rows = [], activeId, originRef, translation, onActivate, onClose }) {
  const listRef = React.useRef(null);
  const { preferences, updatePreferences, paused, setPaused, modelError, refreshModel, cacheIssue, retry } = translation;
  const [draft, setDraft] = React.useState(preferences.glossary || '');
  React.useEffect(() => setDraft(preferences.glossary || ''), [preferences.glossary]);
  const completed = rows.filter(row => row.status === 'done').length;
  const failed = rows.filter(row => row.status === 'error').length;
  const cached = rows.filter(row => row.cached).length;
  const progress = rows.map(row => row.status).join(',');
  React.useEffect(() => {
    if (!preferences.linked || originRef.current !== 'source') return;
    const list = listRef.current;
    const card = [...(list?.querySelectorAll('[data-translation-segment]') || [])].find(element => element.dataset.translationSegment === activeId);
    if (!list || !card) return;
    const view = list.getBoundingClientRect();
    const rect = card.getBoundingClientRect();
    if (rect.top < view.top + 8 || rect.bottom > view.bottom - 8) {
      // Scroll this pane only; scrollIntoView can move the PDF/host ancestors.
      list.scrollTop += rect.top - view.top - 12;
    }
  }, [page, activeId, progress, preferences.linked, preferences.fontSize]);
  const activate = (id, reveal = false) => onActivate(id, { origin: 'translation', reveal });
  return <aside className="dshr-pdf-translation-panel" aria-label="PDF 中文对照" style={{ '--dshr-translation-font-size': `${preferences.fontSize || 16}px` }}>
    <header className="dshr-pdf-translation-header">
      <div><strong>中文对照</strong><span>第 {page} 页 · {completed}/{rows.length} 段{cached ? ` · 缓存 ${cached} 段` : ''}</span></div>
      <button type="button" aria-label="关闭译文侧栏" title="关闭译文侧栏" onClick={onClose}>×</button>
    </header>
    <div className="dshr-pdf-translation-controls">
      <button type="button" onClick={() => setPaused(!paused)}>{paused ? '继续翻译' : '暂停翻译'}</button>
      <label><input type="checkbox" checked={preferences.linked !== false} onChange={event => updatePreferences({ linked: event.target.checked })} />段落联动</label>
      <button type="button" aria-label="缩小译文字号" disabled={preferences.fontSize <= 12} onClick={() => updatePreferences({ fontSize: Math.max(12, preferences.fontSize - 1) })}>A−</button>
      <span className="dshr-pdf-translation-font">{preferences.fontSize || 16}</span>
      <button type="button" aria-label="放大译文字号" disabled={preferences.fontSize >= 24} onClick={() => updatePreferences({ fontSize: Math.min(24, preferences.fontSize + 1) })}>A＋</button>
    </div>
    <div className="dshr-pdf-translation-options">
      <label><input type="checkbox" checked={Boolean(preferences.showSource)} onChange={event => updatePreferences({ showSource: event.target.checked })} />显示原文</label>
      <label><input type="checkbox" checked={preferences.prefetch !== false} onChange={event => updatePreferences({ prefetch: event.target.checked })} />预译下一页</label>
    </div>
    <details className="dshr-pdf-glossary">
      <summary>文档术语表{preferences.glossary ? ' · 已启用' : ''}</summary>
      <label>每行填写“原词 = 中文译法”
        <textarea aria-label="文档术语表" maxLength={4000} value={draft} placeholder={'band gap = 带隙\ngate = 栅极'} onChange={event => setDraft(event.target.value)} />
      </label>
      <button type="button" disabled={normalizeGlossary(draft) === preferences.glossary} onClick={() => updatePreferences({ glossary: normalizeGlossary(draft) })}>应用并更新译文</button>
    </details>
    {modelError && (!rows.length || rows.some(row => row.status !== 'done')) && source?.segments.length !== 0 ? <div className="dshr-pdf-translation-notice" role="status">{modelError}<button type="button" onClick={refreshModel}>刷新服务</button></div> : null}
    {cacheIssue ? <div className="dshr-pdf-translation-notice" role="status">{cacheIssue}</div> : null}
    {paused ? <div className="dshr-pdf-translation-notice" role="status">已暂停，已完成的译文仍可阅读。</div> : null}
    <div className="dshr-pdf-translation-list" ref={listRef} tabIndex={0} aria-label={`第 ${page} 页译文`} onWheel={() => { originRef.current = 'translation'; }}>
      {!source ? <p className="dshr-pdf-translation-empty">正在提取当前页段落…</p> : source.segments.length === 0 ? <p className="dshr-pdf-translation-empty">此页没有可提取的文字，可能是扫描页或图片页。</p> : null}
      {(source?.segments || []).map(segment => {
        const row = rows.find(item => item.id === segment.id) || { status: 'queued' };
        return <article key={segment.id} data-translation-segment={segment.id} data-status={row.status}
          className={`dshr-pdf-translation-paragraph${activeId === segment.id && preferences.linked !== false ? ' is-linked' : ''}`}
          onPointerEnter={() => { if (preferences.linked !== false) activate(segment.id); }}>
          <div className="dshr-pdf-translation-paragraph-head"><span>段落 {Number(segment.id.split('-s').at(-1)) + 1}{row.cached ? ' · 缓存' : ''}</span>
            <div><button type="button" aria-label={`定位段落 ${segment.id}`} onClick={() => activate(segment.id, true)}>定位原文</button>
              {row.status === 'done' && !row.passthrough ? <button type="button" aria-label={`重新翻译段落 ${segment.id}`} onClick={() => retry(page, segment.id)}>重译本段</button> : null}</div></div>
          {preferences.showSource ? <p className="dshr-pdf-translation-original">{segment.src}</p> : null}
          {row.zh ? <p className="dshr-pdf-translation-result">{row.zh}</p> : null}
          {row.status === 'done' ? null
            : row.status === 'error' ? <div className="dshr-pdf-translation-segment-error"><p>{row.error}</p><button type="button" onClick={() => retry(page, segment.id)}>重试本段</button></div>
              : <p className="dshr-pdf-translation-waiting" role="status">{paused ? '等待继续翻译' : row.status === 'loading' ? '正在翻译本段…' : row.status === 'checking' ? '正在读取已有译文…' : '等待翻译…'}</p>}
        </article>;
      })}
    </div>
    <footer className="dshr-pdf-translation-footer"><span>悬停对照段落，点击“定位原文”返回出处。</span>{failed ? <button type="button" onClick={() => retry(page)}>重试失败段落（{failed}）</button> : null}</footer>
  </aside>;
}
