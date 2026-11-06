import React from 'react';
import { IconChevronLeft, IconChevronRight, IconTranslate, IconRotate } from './icons.jsx';
import { translateSegments, isAbortError } from '../ai-client.js';
import { FlowAnnotationLayer } from '../annotations/FlowAnnotationLayer.jsx';
import { collectFlowSelection } from '../annotations/model.js';

const TRANSLATABLE = new Set(['heading', 'paragraph', 'list-item', 'quote']);
const BATCH_SIZE = 6;

function setFlowScrollTop(root, top) {
  // The scroll reader has CSS smooth scrolling. Initializing a chapter before
  // PagedReader attaches must still be immediate, or its first measurement can
  // see the old position and overwrite the restore midway through that scroll.
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  root.scrollTop = top;
  root.style.scrollBehavior = previous;
}

function chapterText(book, chapter) {
  return `${book.title || ''} · ${chapter?.title || ''}`;
}

const BlockContent = React.memo(function BlockContent({ block }) {
  if (block.kind === 'image') {
    return (
      <figure>
        {block.src ? <img src={block.src} alt={block.alt || ''} loading="lazy" decoding="async" /> : <div className="dshr-translation">图片未能载入</div>}
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    );
  }
  if (block.kind === 'table') {
    return <div dangerouslySetInnerHTML={{ __html: block.html || '' }} />;
  }
  if (block.kind === 'code') {
    return <pre className="dshr-block__code">{block.text || ''}</pre>;
  }
  if (block.kind === 'rule') return <hr />;
  if (block.kind === 'heading') {
    const Tag = `h${Math.max(1, Math.min(6, block.level || 2))}`;
    return <Tag dangerouslySetInnerHTML={{ __html: block.html || '' }} />;
  }
  return <p dangerouslySetInnerHTML={{ __html: block.html || '' }} />;
});

function TranslationBlock({ state, onRetry }) {
  if (!state) return null;
  if (state.status === 'loading') {
    return (
      <div className="dshr-translation">
        <span className="dshr-translation__loading"><span className="dshr-spinner" /> 正在翻译…</span>
      </div>
    );
  }
  if (state.status === 'error') {
    return (
      <div className="dshr-translation is-error">
        <p>{state.error || '这段翻译失败了。'}</p>
        <button type="button" className="dshr-translation__retry" onClick={onRetry}>重试</button>
      </div>
    );
  }
  if (!state.zh) return null;
  return (
    <div className="dshr-translation">
      {String(state.zh).split(/\n+/u).filter(Boolean).map((line, index) => <p key={index}>{line}</p>)}
    </div>
  );
}

export function FlowReader({
  book, chapterIndex, onChapterChange, settings, restore, onRestored, onSelection, onProgress,
  annotations = [], onOpenAnnotation, focusAnnotation, layoutVersion = 0,
}) {
  const chapter = book.chapters[chapterIndex];
  const contentRef = React.useRef(null);
  const observerRef = React.useRef(null);
  const appliedChapterRef = React.useRef(null);
  const scrollSaveRef = React.useRef(0);
  const queueRef = React.useRef(new Map());
  const flushingRef = React.useRef(false);
  const abortRef = React.useRef(null);
  const mountedRef = React.useRef(true);
  const blocksById = React.useMemo(() => new Map((chapter?.blocks ?? []).map((block) => [block.id, block])), [chapter]);
  const [translations, setTranslations] = React.useState({});
  const [batchActive, setBatchActive] = React.useState(false);

  React.useEffect(() => {
    mountedRef.current = true;
    const controller = new AbortController();
    abortRef.current = controller;
    return () => {
      mountedRef.current = false;
      controller.abort();
    };
  }, []);

  const keyOf = React.useCallback((block) => `${chapter?.id || 'chapter'}:${block.id}`, [chapter?.id]);

  const updateOne = React.useCallback((key, patch) => {
    if (!mountedRef.current) return;
    setTranslations((prev) => ({ ...prev, [key]: { ...(prev[key] || {}), ...patch } }));
  }, []);

  const flush = React.useCallback(async () => {
    if (flushingRef.current || queueRef.current.size === 0) return;
    flushingRef.current = true;
    setBatchActive(true);
    const batch = [...queueRef.current.entries()].slice(0, BATCH_SIZE);
    for (const [key] of batch) queueRef.current.delete(key);
    const context = chapterText(book, chapter);
    try {
      const result = await translateSegments(
        batch.map(([key, item]) => ({ id: key, text: item.text })),
        { context, title: book.title, signal: abortRef.current?.signal },
      );
      for (const [key] of batch) {
        if (result[key]) updateOne(key, { status: 'done', zh: result[key], error: undefined });
        else updateOne(key, { status: 'error', error: '翻译服务没有返回这一段。' });
      }
    } catch (error) {
      if (!isAbortError(error)) {
        for (const [key] of batch) {
          updateOne(key, { status: 'error', error: error?.message || '翻译失败，请稍后重试。' });
        }
      }
    } finally {
      flushingRef.current = false;
      if (mountedRef.current) {
        setBatchActive(false);
        if (queueRef.current.size > 0) {
          window.setTimeout(() => { void flush(); }, 120);
        }
      }
    }
  }, [book, chapter, updateOne]);

  const enqueue = React.useCallback((block, { force = false } = {}) => {
    if (!block || !TRANSLATABLE.has(block.kind) || !block.text?.trim()) return;
    const key = keyOf(block);
    const existing = translations[key];
    if (!force && (existing?.status === 'loading' || existing?.status === 'done')) return;
    updateOne(key, { status: 'loading', error: undefined });
    queueRef.current.set(key, { text: block.text.slice(0, 4000) });
    void flush();
  }, [flush, keyOf, translations, updateOne]);

  const retryOne = React.useCallback((key) => {
    const blockId = key.slice(key.indexOf(':') + 1);
    const block = blocksById.get(blockId);
    if (block) enqueue(block, { force: true });
  }, [blocksById, enqueue]);

  const translateChapter = React.useCallback(() => {
    for (const block of chapter?.blocks ?? []) {
      if (TRANSLATABLE.has(block.kind) && block.text?.trim()) {
        enqueue(block, { force: translations[`${chapter.id}:${block.id}`]?.status === 'error' });
      }
    }
  }, [chapter, enqueue, translations]);

  // Observe visible blocks and translate as the reader scrolls.
  React.useEffect(() => {
    const root = contentRef.current;
    if (!root || !settings.autoTranslate || typeof IntersectionObserver === 'undefined') return undefined;
    observerRef.current?.disconnect();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.getAttribute('data-seg-id');
        const block = blocksById.get(id);
        if (block) enqueue(block);
      }
    }, { root, rootMargin: '420px 0px 520px 0px', threshold: 0.01 });
    for (const element of root.querySelectorAll('[data-seg-id]')) observer.observe(element);
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [blocksById, chapter?.id, enqueue, settings.autoTranslate]);

  // Restore the saved chapter position once; every later chapter starts at
  // the top. The guard also prevents a restore-clearing state update from
  // scrolling the freshly restored page back to zero.
  React.useLayoutEffect(() => {
    const root = contentRef.current;
    if (!root || (appliedChapterRef.current?.book === book && appliedChapterRef.current?.index === chapterIndex)) return;
    if (restore && restore.chapter === chapterIndex) {
      const ratio = Math.max(0, Math.min(1, Number(restore.scrollRatio) || 0));
      const navigation = root.dataset.readerNavigation || '0';
      const frame = requestAnimationFrame(() => {
        appliedChapterRef.current = { book, index: chapterIndex };
        // An explicit turn/jump supersedes a late saved-position restore.
        if ((root.dataset.readerNavigation || '0') !== navigation) { onRestored?.(); return; }
        const event = new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { ratio } });
        if (root.dispatchEvent(event)) setFlowScrollTop(root, Math.max(0, root.scrollHeight - root.clientHeight) * ratio);
        onRestored?.();
      });
      return () => cancelAnimationFrame(frame);
    } else {
      appliedChapterRef.current = { book, index: chapterIndex };
      setFlowScrollTop(root, 0);
    }
    // Position is initialized once per document/chapter, independently of the
    // parent's progress renders and inline callback identities.
  }, [book, chapterIndex]);

  const handleTextSelection = React.useCallback((event) => {
    const container = contentRef.current;
    if (!container) return;
    const picked = collectFlowSelection(container, window.getSelection());
    if (!picked) {
      onSelection?.(null);
      return;
    }
    onSelection?.({
      ...picked,
      source: 'flow',
      context: chapter?.blocks.map((block) => block.text || '').join('\n').slice(0, 2400) || '',
    });
  }, [chapter, onSelection]);

  // A notes-panel jump targets a block; the overlay itself is pointer-transparent.
  React.useEffect(() => {
    if (!focusAnnotation?.id) return undefined;
    const root = contentRef.current;
    const navigation = root?.dataset.readerNavigation || '0';
    const timer = window.setTimeout(() => {
      if ((root?.dataset.readerNavigation || '0') !== navigation) return;
      const block = focusAnnotation.blockId
        ? contentRef.current?.querySelector(`[data-anno-block="${CSS.escape(focusAnnotation.blockId)}"]`)
        : null;
      if (!block) return;
      const event = new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { element: block } });
      if (contentRef.current.dispatchEvent(event)) block.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [focusAnnotation]);

  const handleScroll = React.useCallback(() => {
    const root = contentRef.current;
    if (!root) return;
    const now = Date.now();
    if (now - scrollSaveRef.current < 600) return;
    scrollSaveRef.current = now;
    const ratio = root.scrollHeight > root.clientHeight ? root.scrollTop / (root.scrollHeight - root.clientHeight) : 0;
    onProgress?.({
      chapter: chapterIndex,
      chapters: book.chapters.length,
      scrollRatio: Math.max(0, Math.min(1, ratio)),
      percent: Math.max(0, Math.min(100, ((chapterIndex + Math.max(0, Math.min(1, ratio))) / book.chapters.length) * 100)),
    });
  }, [book.chapters.length, chapterIndex, onProgress]);

  const handleClick = React.useCallback((event) => {
    const anchor = event.target.closest?.('a');
    if (!anchor) return;
    const chapterTarget = anchor.getAttribute('data-chapter');
    if (chapterTarget) {
      event.preventDefault();
      const index = Number(chapterTarget);
      if (Number.isInteger(index) && index >= 0 && index < book.chapters.length) {
        onChapterChange(index);
      }
      return;
    }
    const href = anchor.getAttribute('href') || '';
    if (href && !href.startsWith('#')) {
      event.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }, [book.chapters.length, onChapterChange]);

  if (!chapter) {
    return <div className="dshr-error-panel"><h3>这一章不存在</h3><p>文档目录可能不完整，请尝试重新导入。</p></div>;
  }

  return (
    <div className="dshr-content" ref={contentRef} onScroll={handleScroll} onMouseUp={handleTextSelection} onKeyUp={handleTextSelection} onClick={handleClick}>
      <div className="dshr-content__inner">
        <article className="dshr-chapter">
          <div className="dshr-chapter__kicker">
            第 {chapterIndex + 1} / {book.chapters.length} 章
            {settings.autoTranslate ? ' · 实时翻译已开启' : ''}
          </div>
          {chapter.blocks.map((block) => {
            const key = keyOf(block);
            const state = translations[key];
            const translatable = TRANSLATABLE.has(block.kind) && block.text?.trim();
            return (
              <div
                key={block.id}
                className={`dshr-block dshr-block--${block.kind}`}
                data-kind={block.kind}
                data-seg-id={translatable ? block.id : undefined}
                data-anno-block={block.id}
              >
                <div className="dshr-block__body">
                  <BlockContent block={block} />
                </div>
                {translatable ? <TranslationBlock state={state} onRetry={() => retryOne(key)} /> : null}
              </div>
            );
          })}
        </article>

        <div className="dshr-chapter__nav">
          <button
            type="button"
            className="dshr-btn dshr-btn--outline"
            disabled={chapterIndex <= 0}
            onClick={() => onChapterChange(chapterIndex - 1)}
          >
            <IconChevronLeft size={15} /> {chapterIndex > 0 ? book.chapters[chapterIndex - 1].title : '已是第一章'}
          </button>
          <button
            type="button"
            className="dshr-btn dshr-btn--primary"
            onClick={translateChapter}
            disabled={batchActive}
            title="翻译本章所有段落"
          >
            {batchActive ? <span className="dshr-spinner" /> : <IconTranslate size={15} />} 翻译本章
          </button>
          <button
            type="button"
            className="dshr-btn dshr-btn--outline"
            disabled={chapterIndex >= book.chapters.length - 1}
            onClick={() => onChapterChange(chapterIndex + 1)}
          >
            {chapterIndex < book.chapters.length - 1 ? book.chapters[chapterIndex + 1].title : '已是最后一章'} <IconChevronRight size={15} />
          </button>
        </div>
      </div>
      <FlowAnnotationLayer
        containerRef={contentRef}
        annotations={annotations}
        chapterId={chapter.id}
        onOpenAnnotation={onOpenAnnotation}
        layoutVersion={layoutVersion}
      />
    </div>
  );
}
