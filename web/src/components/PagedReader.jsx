import React from 'react';
import { IconChevronLeft, IconChevronRight } from './icons.jsx';
import {
  BOOK_PADDING_TOP, BOOK_PADDING_BOTTOM, buildFlowPageStarts, createPageCursor,
  collectFlowLines, captureFlowAnchor, resolveFlowAnchor,
} from './flow-pagination.js';

const FORM_SELECTOR = 'input, textarea, select, [contenteditable="true"]';
const PANEL_SELECTOR = '.dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel';
const UI_SELECTOR = '.dshr-topbar,.dshr-toc,.dshr-paged-controls,' + PANEL_SELECTOR + ',' + FORM_SELECTOR;
const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
let activeReader = null;

export function PagedReader({
  enabled, animation, bookMode = false, bookFrame = false, pdfMode = false,
  frameTop = 52, frameLeft = 0, leftOffset, readerKey,
  canPrevChapter, canNextChapter, onPrevChapter, onNextChapter,
}) {
  const [pageState, setPageState] = React.useState({ page: 1, pages: 1 });
  const [edgeHint, setEdgeHint] = React.useState(false);
  const [frameCovers, setFrameCovers] = React.useState({ top: BOOK_PADDING_TOP, bottom: BOOK_PADDING_BOTTOM });
  const [controlBounds, setControlBounds] = React.useState(null);
  const controlsRef = React.useRef(null);
  const turnRef = React.useRef(null);
  const callbacks = React.useRef({});
  callbacks.current = { canPrevChapter, canNextChapter, onPrevChapter, onNextChapter, animation };

  React.useEffect(() => {
    if (!enabled) return undefined;
    const reader = controlsRef.current?.closest('.dshr-reader');
    const scroll = reader?.querySelector('.dshr-content,.dshr-pdf-scroll');
    if (!scroll) return undefined;
    const isPdf = scroll.classList.contains('dshr-pdf-scroll');
    const stage = scroll.querySelector('.dshr-content__inner');
    const cursor = createPageCursor();
    const originalStyle = { scrollBehavior: scroll.style.scrollBehavior, overflowAnchor: scroll.style.overflowAnchor };
    scroll.style.scrollBehavior = 'auto';
    scroll.style.overflowAnchor = 'none';
    scroll.classList.add('dshr-paged-scroll');
    let disposed = false;
    let dirty = true;
    let busy = false;
    let revision = 0;
    let layoutFrame = 0;
    let scrollFrame = 0;
    let chapterTimer = 0;
    let chapterArmAt = 0;
    let lastWheelAt = -Infinity;
    let lines = [];
    let anchor = null;
    const pendingTurns = [];
    const animations = new Set();
    const tail = !isPdf && stage ? document.createElement('div') : null;
    if (tail) {
      tail.className = 'dshr-page-tail';
      tail.setAttribute('aria-hidden', 'true');
      scroll.append(tail);
    }
    scroll.dataset.readerNavigation = '0';
    setEdgeHint(false);
    setFrameCovers({ top: BOOK_PADDING_TOP, bottom: BOOK_PADDING_BOTTOM });

    const publish = () => {
      if (disposed) return;
      scroll.dataset.readerPage = String(cursor.page);
      scroll.dataset.readerPages = String(cursor.pages);
      scroll.dataset.readerTarget = String(cursor.top);
      setPageState(previous => previous.page === cursor.page && previous.pages === cursor.pages
        ? previous : { page: cursor.page, pages: cursor.pages });
      const bottom = cursor.top + scroll.clientHeight - BOOK_PADDING_BOTTOM;
      const crossing = lines.find(line => line.top < bottom - 0.5 && line.bottom > bottom + 0.5
        && line.bottom - line.top <= scroll.clientHeight - BOOK_PADDING_TOP - BOOK_PADDING_BOTTOM
        && line.top > cursor.top + BOOK_PADDING_TOP);
      const cover = crossing ? Math.max(BOOK_PADDING_BOTTOM, scroll.clientHeight - (crossing.top - cursor.top)) : BOOK_PADDING_BOTTOM;
      setFrameCovers(previous => previous.bottom === cover ? previous : { top: BOOK_PADDING_TOP, bottom: cover });
    };
    const position = () => {
      if (Math.abs(scroll.scrollTop - cursor.top) > 0.5) scroll.scrollTop = cursor.top;
    };
    const rebuild = (requestedTop) => {
      if (disposed || isPdf || !stage || !scroll.clientHeight || !scroll.clientWidth) return;
      // Never read transformed getClientRects while a page animation is active.
      if (busy) { dirty = true; return; }
      const top = requestedTop ?? resolveFlowAnchor(anchor, scroll, scroll.scrollTop);
      lines = collectFlowLines(scroll, stage);
      const starts = buildFlowPageStarts(lines, scroll.clientHeight);
      if (tail) {
        const naturalHeight = scroll.scrollHeight - tail.offsetHeight;
        const extra = Math.max(0, Math.ceil(starts.at(-1) + scroll.clientHeight - naturalHeight));
        tail.style.height = extra + 'px';
      }
      cursor.replace(starts, top);
      dirty = false;
      position();
      anchor = captureFlowAnchor(lines, cursor.top, scroll);
      publish();
    };
    const invalidate = () => {
      if (disposed || isPdf) return;
      dirty = true;
      if (layoutFrame) return;
      layoutFrame = requestAnimationFrame(() => {
        layoutFrame = 0;
        if (!busy) rebuild();
      });
    };
    const cancelAnimations = () => {
      revision += 1;
      for (const active of animations) active.cancel();
      animations.clear();
      busy = false;
      pendingTurns.length = 0;
    };
    const clearChapterArm = () => {
      chapterArmAt = 0;
      clearTimeout(chapterTimer);
      setEdgeHint(false);
    };
    const edge = direction => {
      if (direction < 0) {
        clearChapterArm();
        if (callbacks.current.canPrevChapter) callbacks.current.onPrevChapter?.();
      } else if (callbacks.current.canNextChapter) {
        const now = Date.now();
        if (chapterArmAt && now - chapterArmAt <= 700) {
          clearChapterArm();
          callbacks.current.onNextChapter?.();
        } else {
          chapterArmAt = now;
          setEdgeHint(true);
          clearTimeout(chapterTimer);
          chapterTimer = setTimeout(clearChapterArm, 850);
        }
      }
    };
    const play = async (keyframes, duration, run) => {
      if (disposed || run !== revision) return false;
      const effect = stage.animate(keyframes, { duration, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });
      animations.add(effect);
      let timeout;
      try {
        // Host throttling or a broken animation completion must never hold the
        // navigation lock indefinitely. Commit the accepted page after a bound.
        await Promise.race([effect.finished, new Promise(resolve => { timeout = setTimeout(resolve, duration + 300); })]);
      }
      catch { return false; }
      finally { clearTimeout(timeout); animations.delete(effect); effect.cancel(); }
      return !disposed && run === revision;
    };
    const turn = async direction => {
      if (disposed) return;
      activeReader = reader;
      direction = direction > 0 ? 1 : -1;
      if (isPdf) {
        scroll.dispatchEvent(new CustomEvent('dshr-pdf-page-turn', { detail: direction }));
        return;
      }
      if (busy) { if (pendingTurns.length < 32) pendingTurns.push(direction); return; }
      if (dirty) rebuild();
      if (!cursor.turn(direction)) { edge(direction); return; }
      clearChapterArm();
      anchor = captureFlowAnchor(lines, cursor.top, scroll);
      scroll.dataset.readerNavigation = String(Number(scroll.dataset.readerNavigation || 0) + 1);
      publish();
      busy = true;
      const run = ++revision;
      try {
        if (stage?.animate && !reducedMotion()) {
          const style = callbacks.current.animation;
          const distance = direction > 0 ? -92 : 92;
          const outgoing = style === 'flip'
            ? [{ transform: 'perspective(1500px) rotateY(0deg)', opacity: 1 }, { transform: 'perspective(1500px) rotateY(' + (direction * -60) + 'deg)', opacity: 0.03 }]
            : [{ transform: 'translateX(0)', opacity: 1 }, { transform: 'translateX(' + (style === 'cover' ? distance * 0.63 : distance) + '%)', opacity: 0.03 }];
          if (!await play(outgoing, 180, run)) return;
          position();
          const incoming = style === 'flip'
            ? [{ transform: 'perspective(1500px) rotateY(' + (direction * 60) + 'deg)', opacity: 0.03 }, { transform: 'perspective(1500px) rotateY(0deg)', opacity: 1 }]
            : [{ transform: 'translateX(' + -distance + '%)', opacity: 0.03 }, { transform: 'translateX(0)', opacity: 1 }];
          await play(incoming, 260, run);
        } else position();
      } catch {
        // Animation is presentation only. A failed/cancelled effect cannot undo
        // an accepted turn or leave navigation permanently locked.
      } finally {
        if (!disposed && run === revision) {
          busy = false;
          if (dirty) rebuild();
          else { position(); publish(); }
          if (pendingTurns.length) void turn(pendingTurns.shift());
        }
      }
    };
    turnRef.current = turn;
    const onScroll = () => {
      if (isPdf || busy || scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        if (!disposed && !busy) position();
      });
    };
    const onNavigate = event => {
      if (isPdf || !stage) return;
      event.preventDefault();
      cancelAnimations();
      const detail = event.detail || {};
      let top = Number(detail.top) || 0;
      if (detail.ratio != null) top = Number(detail.ratio) * Math.max(0, scroll.scrollHeight - scroll.clientHeight);
      if (detail.element && stage.contains(detail.element)) top = detail.element.getBoundingClientRect().top
        - scroll.getBoundingClientRect().top + scroll.scrollTop - BOOK_PADDING_TOP;
      scroll.dataset.readerNavigation = String(Number(scroll.dataset.readerNavigation || 0) + 1);
      anchor = null;
      rebuild(Math.max(0, top));
    };
    const onWheel = event => {
      if (event.target instanceof Element && event.target.closest(UI_SELECTOR) || event.ctrlKey || event.metaKey) return;
      if (Math.abs(event.deltaY) < 8 && Math.abs(event.deltaX) < 8) return;
      event.preventDefault();
      const now = performance.now();
      const elapsed = now - lastWheelAt;
      lastWheelAt = now;
      if (elapsed >= 220) void turn(event.deltaY > 0 || event.deltaX > 0 ? 1 : -1);
    };
    const onKey = event => {
      if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || !scroll.isConnected) return;
      if (event.target instanceof Element && event.target.closest(FORM_SELECTOR + ',' + PANEL_SELECTOR)) return;
      const targetRoot = event.target instanceof Element && event.target.closest('.dshr-root');
      const targetReader = event.target instanceof Element && event.target.closest('.dshr-reader');
      if (targetReader && targetReader !== reader) return;
      if (targetRoot && !targetRoot.contains(reader)) return;
      if (!targetRoot && (activeReader?.isConnected ? activeReader !== reader
        : [...document.querySelectorAll('.dshr-reader')].find(element => element.getBoundingClientRect().height > 0) !== reader)) return;
      const selection = window.getSelection?.();
      if (selection && !selection.isCollapsed) return;
      const forward = ['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key);
      const backward = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key);
      if (!forward && !backward) return;
      event.preventDefault();
      void turn(forward ? 1 : -1);
    };
    const onPdfState = event => {
      const { page, pages } = event.detail || {};
      if (Number.isFinite(page) && page >= 1 && Number.isFinite(pages) && pages >= 1) setPageState({ page, pages });
    };
    const onPageTurn = event => { void turn(Number(event.detail) > 0 ? 1 : -1); };
    const activate = () => { activeReader = reader; };
    reader.addEventListener('pointerdown', activate);
    scroll.addEventListener('wheel', onWheel, { passive: false });
    scroll.addEventListener('scroll', onScroll, { passive: true });
    scroll.addEventListener('dshr-flow-navigate', onNavigate);
    scroll.addEventListener('dshr-page-turn', onPageTurn);
    scroll.addEventListener('dshr-pdf-page-state', onPdfState);
    window.addEventListener('keydown', onKey);
    let resizeObserver;
    let mutationObserver;
    let boundsObserver;
    const measureBounds = () => {
      if (disposed) return;
      const rect = scroll.getBoundingClientRect();
      const parent = reader.getBoundingClientRect();
      const next = { right: Math.max(0, parent.right - rect.right), center: rect.left - parent.left + rect.width / 2,
        top: rect.top - parent.top + rect.height / 2, bottom: Math.max(0, parent.bottom - rect.bottom) };
      setControlBounds(previous => previous && Object.keys(next).every(key => Math.abs(previous[key] - next[key]) < 0.5) ? previous : next);
    };
    measureBounds();
    if (typeof ResizeObserver === 'function') {
      boundsObserver = new ResizeObserver(measureBounds);
      boundsObserver.observe(scroll);
      boundsObserver.observe(reader);
    }
    if (isPdf) {
      const page = Number(scroll.dataset.pdfPage);
      const pages = Number(scroll.dataset.pdfPages);
      if (page > 0 && pages > 0) setPageState({ page, pages });
    } else {
      rebuild(scroll.scrollTop);
      if (typeof ResizeObserver === 'function') {
        resizeObserver = new ResizeObserver(invalidate);
        resizeObserver.observe(scroll);
        resizeObserver.observe(stage);
      }
      if (typeof MutationObserver === 'function') {
        mutationObserver = new MutationObserver(invalidate);
        mutationObserver.observe(stage, { subtree: true, childList: true, characterData: true });
      }
      stage.addEventListener('load', invalidate, true);
      document.fonts?.addEventListener('loadingdone', invalidate);
      document.fonts?.ready.then(invalidate);
    }
    return () => {
      disposed = true;
      cancelAnimations();
      clearTimeout(chapterTimer);
      cancelAnimationFrame(layoutFrame);
      cancelAnimationFrame(scrollFrame);
      resizeObserver?.disconnect();
      boundsObserver?.disconnect();
      mutationObserver?.disconnect();
      stage?.removeEventListener('load', invalidate, true);
      document.fonts?.removeEventListener('loadingdone', invalidate);
      scroll.removeEventListener('wheel', onWheel);
      scroll.removeEventListener('scroll', onScroll);
      scroll.removeEventListener('dshr-flow-navigate', onNavigate);
      scroll.removeEventListener('dshr-page-turn', onPageTurn);
      scroll.removeEventListener('dshr-pdf-page-state', onPdfState);
      window.removeEventListener('keydown', onKey);
      reader.removeEventListener('pointerdown', activate);
      if (activeReader === reader) activeReader = null;
      scroll.classList.remove('dshr-paged-scroll');
      Object.assign(scroll.style, originalStyle);
      for (const name of ['readerPage', 'readerPages', 'readerTarget', 'readerNavigation']) delete scroll.dataset[name];
      tail?.remove();
      turnRef.current = null;
    };
  }, [enabled, bookMode, readerKey]);

  if (!enabled) return null;
  const { page, pages } = pageState;
  const atStart = page <= 1 && !canPrevChapter;
  // When a PDF viewer is still delivering its page rows, keep the arrow usable
  // so the first click can rebuild the real page list instead of being stuck.
  const atEnd = page >= pages && !canNextChapter && !(pdfMode && pages <= 1);
  return (
    <div
      ref={controlsRef}
      className={`dshr-paged-controls${bookMode ? ' is-book' : ''}${bookFrame ? ' has-book-frame' : ''}`}
      style={{
        '--dshr-paged-left': `${Math.max(10, Number(leftOffset) || 10)}px`,
        ...(controlBounds ? {
          '--dshr-paged-right': `${controlBounds.right + 12}px`,
          '--dshr-paged-center': `${controlBounds.center}px`,
          '--dshr-paged-top': `${controlBounds.top}px`,
          '--dshr-paged-bottom': `${controlBounds.bottom + 14}px`,
        } : {}),
        '--dshr-book-frame-top': `${Math.max(0, Number(frameTop) || 0)}px`,
        '--dshr-book-frame-left': `${Math.max(0, Number(frameLeft) || 0)}px`,
        '--dshr-book-top-cover': `${frameCovers.top}px`,
        '--dshr-book-bottom-cover': `${frameCovers.bottom}px`,
      }}
      aria-live="polite"
    >
      {bookFrame ? (
        <>
          <div className="dshr-book-mask dshr-book-mask--top" aria-hidden="true" />
          <div className="dshr-book-mask dshr-book-mask--bottom" aria-hidden="true" />
        </>
      ) : null}
      <button
        type="button"
        className="dshr-paged-btn dshr-paged-prev"
        onClick={() => { if (!atStart) turnRef.current?.(-1); }}
        disabled={atStart}
        title="上一页（← / ↑ / PageUp）"
        aria-label="上一页"
      >
        <IconChevronLeft size={20} />
      </button>
      <button
        type="button"
        className="dshr-paged-btn dshr-paged-next"
        onClick={() => { if (!atEnd) turnRef.current?.(1); }}
        disabled={atEnd}
        title="下一页（→ / ↓ / PageDown / 空格）"
        aria-label="下一页"
      >
        <IconChevronRight size={20} />
      </button>
      {edgeHint ? (
        <div className="dshr-paged-hint" role="status">再按一次进入下一章</div>
      ) : null}
      <div className="dshr-paged-status" title="翻页进度">
        <b>{page}</b><span>/</span><em>{pages}</em>
      </div>
    </div>
  );
}
