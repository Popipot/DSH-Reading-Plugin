import React from 'react';
import { captureDepartingPage, createFlowTransition, indexFlowSnapshots } from './flow-transition.js';
import { IconChevronLeft, IconChevronRight } from './icons.jsx';
import {
  BOOK_PADDING_TOP, BOOK_PADDING_BOTTOM, buildFlowPageStarts, createPageCursor,
  collectFlowLines, captureFlowAnchor, resolveFlowAnchor, flowScrollRatio,
} from './flow-pagination.js';

const FORM_SELECTOR = 'input, textarea, select, [contenteditable="true"]';
const PANEL_SELECTOR = '.dshr-modal-mask,.dshr-modal,.dshr-appearance-panel,.dshr-anno-panel,.dshr-ai,.dshr-selection,.dshr-online-modal,.dshr-anno-composer,.dshr-pdf-translation-panel';
const UI_SELECTOR = '.dshr-topbar,.dshr-toc,.dshr-paged-controls,' + PANEL_SELECTOR + ',' + FORM_SELECTOR;
const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const TURN_BURST_MS = 220;
let activeReader = null;

export function PagedReader({
  enabled, animation, bookMode = false, bookFrame = false, pdfMode = false,
  frameTop = 52, frameLeft = 0, leftOffset, readerKey,
  canPrevChapter, canNextChapter, chapterEntry, onChapterTurn, onChapterEntered,
}) {
  const [pageState, setPageState] = React.useState({ page: 1, pages: 1 });
  const [frameCovers, setFrameCovers] = React.useState({ top: BOOK_PADDING_TOP, bottom: BOOK_PADDING_BOTTOM });
  const [controlBounds, setControlBounds] = React.useState(null);
  const controlsRef = React.useRef(null);
  const turnRef = React.useRef(null);
  const departureRef = React.useRef(null);
  const navigationId = React.useRef(0);
  const lastWheelAt = React.useRef(-Infinity);
  const callbacks = React.useRef({});

  React.useLayoutEffect(() => {
    // Input handlers must see the chapter that actually committed to the DOM.
    callbacks.current = { canPrevChapter, canNextChapter, chapterEntry, onChapterTurn, onChapterEntered, animation };
  });

  React.useLayoutEffect(() => {
    const departure = departureRef.current;
    departureRef.current = null;
    if (!enabled) return undefined;
    const reader = controlsRef.current?.closest('.dshr-reader');
    const scroll = reader?.querySelector('.dshr-content,.dshr-pdf-scroll');
    if (!scroll) return undefined;
    const isPdf = scroll.classList.contains('dshr-pdf-scroll');
    const stage = scroll.querySelector('.dshr-content__inner');
    let pendingEntry = isPdf ? null : callbacks.current.chapterEntry;
    let departing = pendingEntry && departure?.entry === pendingEntry ? departure.snapshot : null;
    let landingEdge = pendingEntry?.edge;
    let enteringDirection = pendingEntry?.direction;
    let enteredAt = -Infinity;
    let chapterPending = false;
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
    let lines = [];
    let anchor = null;
    const pendingTurns = [];
    let transition = null;
    let snapshotRecords = [];
    const tail = !isPdf && stage ? document.createElement('div') : null;
    if (tail) {
      tail.className = 'dshr-page-tail';
      tail.setAttribute('aria-hidden', 'true');
      scroll.append(tail);
    }
    const markNavigation = () => { scroll.dataset.readerNavigation = String(++navigationId.current); };
    markNavigation();
    setFrameCovers({ top: BOOK_PADDING_TOP, bottom: BOOK_PADDING_BOTTOM });

    const publish = () => {
      if (disposed) return;
      scroll.dataset.readerPage = String(cursor.page);
      scroll.dataset.readerPages = String(cursor.pages);
      scroll.dataset.readerTarget = String(cursor.top);
      setPageState(previous => previous.page === cursor.page && previous.pages === cursor.pages
        ? previous : { page: cursor.page, pages: cursor.pages });
      const cover = bottomCover(cursor.top);
      setFrameCovers(previous => previous.bottom === cover ? previous : { top: BOOK_PADDING_TOP, bottom: cover });
    };
    const bottomCover = top => {
      const bottom = top + scroll.clientHeight - BOOK_PADDING_BOTTOM;
      const crossing = lines.find(line => line.top < bottom - 0.5 && line.bottom > bottom + 0.5
        && line.bottom - line.top <= scroll.clientHeight - BOOK_PADDING_TOP - BOOK_PADDING_BOTTOM
        && line.top > top + BOOK_PADDING_TOP);
      return crossing ? Math.max(BOOK_PADDING_BOTTOM, scroll.clientHeight - (crossing.top - top)) : BOOK_PADDING_BOTTOM;
    };
    const position = () => {
      if (Math.abs(scroll.scrollTop - cursor.top) > 0.5) scroll.scrollTop = cursor.top;
    };
    const rebuild = (requestedTop) => {
      if (disposed || isPdf || chapterPending || !stage || !scroll.clientHeight || !scroll.clientWidth) return;
      // Keep the accepted page stable until the presentation is finished.
      if (busy) { dirty = true; return; }
      lines = collectFlowLines(scroll, stage);
      snapshotRecords = indexFlowSnapshots(scroll, stage);
      const starts = buildFlowPageStarts(lines, scroll.clientHeight);
      if (tail) {
        const naturalHeight = scroll.scrollHeight - tail.offsetHeight;
        const extra = Math.max(0, Math.ceil(starts.at(-1) + scroll.clientHeight - naturalHeight));
        tail.style.height = extra + 'px';
      }
      let top = requestedTop;
      if (top == null) {
        if (landingEdge === 'start') top = starts[0];
        else if (landingEdge === 'end') top = starts.at(-1);
        else if (pendingEntry) {
          const ratio = Math.max(0, Math.min(1, Number(pendingEntry.scrollRatio) || 0));
          top = ratio * Math.max(0, scroll.scrollHeight - scroll.clientHeight);
        } else top = resolveFlowAnchor(anchor, scroll, scroll.scrollTop);
      }
      cursor.replace(starts, top);
      dirty = false;
      position();
      anchor = captureFlowAnchor(lines, cursor.top, scroll);
      publish();
      if (pendingEntry) {
        const entry = pendingEntry;
        pendingEntry = null;
        enteredAt = performance.now();
        const snapshot = departing;
        departing = null;
        if (snapshot && snapshot.width === scroll.clientWidth && snapshot.height === scroll.clientHeight) {
          void animateTurn(cursor.top, entry.direction, snapshot);
        }
        callbacks.current.onChapterEntered?.(entry, flowScrollRatio(scroll));
      }
    };
    const invalidate = event => {
      if (disposed || isPdf || chapterPending) return;
      dirty = true;
      // A frozen page can survive incoming translation/image content. A new
      // viewport or newly loaded font changes its own geometry: finish the
      // presentation now, then rebuild around the already accepted text anchor.
      if (busy && transition && (transition.width !== scroll.clientWidth
        || transition.height !== scroll.clientHeight || event?.type === 'loadingdone')) transition.cancel();
      if (layoutFrame) return;
      layoutFrame = requestAnimationFrame(() => {
        layoutFrame = 0;
        if (!busy) rebuild();
      });
    };
    const cancelAnimations = () => {
      revision += 1;
      transition?.cancel();
      transition = null;
      delete scroll.dataset.readerTurning;
      reader.classList.remove('dshr-is-turning');
      busy = false;
      pendingTurns.length = 0;
    };
    const canAnimate = () => stage?.animate && !reducedMotion();
    const animateTurn = async (from, direction, departingPage) => {
      busy = true;
      const run = ++revision;
      scroll.dataset.readerTurning = 'true';
      try {
        if (canAnimate()) {
          transition = createFlowTransition({ reader, scroll, stage, records: snapshotRecords,
            from, to: cursor.top, fromBottom: bottomCover(from), toBottom: bottomCover(cursor.top),
            mode: callbacks.current.animation, direction, departing: departingPage });
          reader.classList.add('dshr-is-turning');
        }
        // The real, selectable document advances once underneath the opaque
        // presentation layer. Its position never depends on animation progress.
        position();
        if (transition) await transition.play();
      } catch {
        // Animation is presentation only. A failed/cancelled effect cannot undo
        // an accepted turn or leave navigation permanently locked.
      } finally {
        if (!disposed && run === revision) {
          transition?.cancel();
          transition = null;
          delete scroll.dataset.readerTurning;
          reader.classList.remove('dshr-is-turning');
          busy = false;
          if (dirty) rebuild();
          else { position(); publish(); }
          if (pendingTurns.length) void turn(pendingTurns.shift());
        }
      }
    };
    const crossChapter = direction => {
      const { canPrevChapter, canNextChapter, onChapterTurn } = callbacks.current;
      if (!onChapterTurn || !(direction < 0 ? canPrevChapter : canNextChapter)) return;
      chapterPending = true;
      pendingTurns.length = 0;
      markNavigation();
      const entry = { edge: direction > 0 ? 'start' : 'end', direction };
      if (canAnimate()) {
        try {
          departureRef.current = { entry, snapshot: captureDepartingPage(scroll, stage, snapshotRecords, cursor.top, bottomCover(cursor.top)) };
        } catch { /* An oversized or unsupported snapshot still allows navigation. */ }
      }
      onChapterTurn(direction, entry);
    };
    const turn = (direction, repeatedClick = false) => {
      if (disposed || chapterPending) return;
      activeReader = reader;
      direction = direction > 0 ? 1 : -1;
      if (isPdf) {
        scroll.dispatchEvent(new CustomEvent('dshr-pdf-page-turn', { detail: direction }));
        return;
      }
      if (pendingEntry) { rebuild(); return; }
      // A click burst at the seam must not consume the first page it just opened.
      if (direction === enteringDirection && (repeatedClick || busy || performance.now() - enteredAt < TURN_BURST_MS)) return;
      enteringDirection = null;
      if (busy) { if (pendingTurns.length < 32) pendingTurns.push(direction); return; }
      if (dirty) rebuild();
      if (dirty || busy) return;
      const from = cursor.top;
      if (!cursor.turn(direction)) { crossChapter(direction); return; }
      landingEdge = null;
      anchor = captureFlowAnchor(lines, cursor.top, scroll);
      markNavigation();
      publish();
      void animateTurn(from, direction);
    };
    turnRef.current = turn;
    const onScroll = () => {
      if (isPdf || busy || chapterPending || dirty || scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        if (!disposed && !busy && !chapterPending && !dirty) position();
      });
    };
    const onNavigate = event => {
      if (isPdf || !stage) return;
      event.preventDefault();
      if (chapterPending) return;
      cancelAnimations();
      enteringDirection = null;
      landingEdge = null;
      departing = null;
      const detail = event.detail || {};
      let top = Number(detail.top) || 0;
      if (detail.ratio != null) top = Number(detail.ratio) * Math.max(0, scroll.scrollHeight - scroll.clientHeight);
      if (detail.element && stage.contains(detail.element)) top = detail.element.getBoundingClientRect().top
        - scroll.getBoundingClientRect().top + scroll.scrollTop - BOOK_PADDING_TOP;
      markNavigation();
      anchor = null;
      rebuild(Math.max(0, top));
    };
    const onWheel = event => {
      if (event.target instanceof Element && event.target.closest(UI_SELECTOR) || event.ctrlKey || event.metaKey) return;
      if (Math.abs(event.deltaY) < 8 && Math.abs(event.deltaX) < 8) return;
      event.preventDefault();
      const now = performance.now();
      const elapsed = now - lastWheelAt.current;
      lastWheelAt.current = now;
      if (elapsed >= TURN_BURST_MS) turn(event.deltaY > 0 || event.deltaX > 0 ? 1 : -1);
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
      rebuild();
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
      for (const name of ['readerPage', 'readerPages', 'readerTarget', 'readerNavigation', 'readerTurning']) delete scroll.dataset[name];
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
        onClick={event => { if (!atStart) turnRef.current?.(-1, event.detail > 1); }}
        disabled={atStart}
        title="上一页（← / ↑ / PageUp）"
        aria-label="上一页"
      >
        <IconChevronLeft size={20} />
      </button>
      <button
        type="button"
        className="dshr-paged-btn dshr-paged-next"
        onClick={event => { if (!atEnd) turnRef.current?.(1, event.detail > 1); }}
        disabled={atEnd}
        title="下一页（→ / ↓ / PageDown / 空格）"
        aria-label="下一页"
      >
        <IconChevronRight size={20} />
      </button>
      <div className="dshr-paged-status" title="翻页进度">
        <b>{page}</b><span>/</span><em>{pages}</em>
      </div>
    </div>
  );
}
