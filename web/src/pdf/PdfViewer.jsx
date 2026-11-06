/**
 * PdfViewer — dsh-reader PDF engine.
 *
 * Rendered by the plugin client bundle. React is external (`import React from
 * 'react'`); pdfjs-dist must never be imported statically here, otherwise the
 * startup client bundle would grow by ~450 KB. The engine is fetched on demand
 * from /dsh-reader-assets/pdf.bundle.js (built by scripts/build-pdf.mjs).
 *
 * Contract (see dsh-reader/CONTRACTS.md):
 *   props: data, fileName, initialPage, autoTranslate, pageTranslations,
 *          onReady, onPageChange, onPageText, onSelection, onRetryTranslation
 *   exports: default PdfViewer, pdfStyles, groupPdfText
 *
 * Behaviour notes:
 *   - onPageText is emitted once per page while it is visible and
 *     autoTranslate is true. A retry click deliberately clears that latch for
 *     the page and re-emits it once, so hosts that remove the translation entry
 *     in onRetryTranslation can immediately request the page again.
 *   - onSelection(null) is emitted when a selection that started inside the
 *     viewer collapses; selection rects are in viewport coordinates.
 */

import React from "react";
import { openPdfDocument } from "./engine.js";
import { PageBitmapCache, PageLayoutIndex } from "./performance.js";

import { groupPdfText, extractPdfParagraphs } from "./text.js";
import { pdfStyles as basePdfStyles, translationPanelStyles } from "./styles.js";
import { TranslationPanel } from "./TranslationPanel.jsx";
import { usePdfTranslation } from "./usePdfTranslation.js";
import { PdfAnnotationLayer } from "../annotations/PdfAnnotationLayer.jsx";
import { normalizedRectsForSelection } from "../annotations/model.js";

const pdfStyles = basePdfStyles + translationPanelStyles;
export { groupPdfText, pdfStyles };

const { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } =
  React;

/* ------------------------------------------------------------------------- *
 * Constants
 * ------------------------------------------------------------------------- */

const FALLBACK_PAGE_WIDTH = 612;
const FALLBACK_PAGE_HEIGHT = 792;

const MIN_SCALE = 0.1;
const MAX_SCALE = 5;
const ZOOM_FACTOR = 1.2;

const FALLBACK_CONTENT_PADDING_X = 32;
const RENDER_ROOT_MARGIN = "1000px 0px";

const MAX_CANVAS_PIXELS = 10_000_000;
const MAX_CANVAS_DIMENSION = 8192;
const MAX_CONCURRENT_RENDERS = 2;
const REFRESH_DELAY_MS = 160;

const SELECTION_CONTEXT_CHARS = 600;

/* ------------------------------------------------------------------------- *
 * Pure helpers
 * ------------------------------------------------------------------------- */

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function computePageBox(dim, mode, scale, viewportWidth, viewportHeight = 0) {
  const baseWidth =
    dim && Number.isFinite(dim.width) && dim.width > 0
      ? dim.width
      : FALLBACK_PAGE_WIDTH;
  const baseHeight =
    dim && Number.isFinite(dim.height) && dim.height > 0
      ? dim.height
      : FALLBACK_PAGE_HEIGHT;

  let width;
  if ((mode === "fit" || mode === "page") && viewportWidth > 0) {
    width = Math.max(1, Math.floor(viewportWidth));
    if (mode === "page" && viewportHeight > 0) {
      // Whole-page mode: fit the complete page inside both the width and the
      // height of the reading viewport.
      const heightLimitedWidth = Math.floor(
        (baseWidth / baseHeight) * Math.max(1, viewportHeight - 36)
      );
      width = Math.max(1, Math.min(width, heightLimitedWidth));
    }
  } else {
    width = Math.max(
      1,
      Math.floor(baseWidth * clamp(scale, MIN_SCALE, MAX_SCALE))
    );
  }
  const pageScale = width / baseWidth;
  const height = Math.max(1, Math.floor(baseHeight * pageScale));
  return { width, height, pageScale };
}

function computeRenderScale(pageScale, dim, pixelBudget = MAX_CANVAS_PIXELS) {
  const baseWidth =
    dim && Number.isFinite(dim.width) && dim.width > 0
      ? dim.width
      : FALLBACK_PAGE_WIDTH;
  const baseHeight =
    dim && Number.isFinite(dim.height) && dim.height > 0
      ? dim.height
      : FALLBACK_PAGE_HEIGHT;

  const dpr = Math.min(Math.max(globalThis.devicePixelRatio || 1, 1), 2);
  let renderScale = pageScale * dpr;

  const area = baseWidth * baseHeight * renderScale * renderScale;
  if (area > pixelBudget) {
    renderScale *= Math.sqrt(pixelBudget / area);
  }
  const longestSide = Math.max(baseWidth, baseHeight) * renderScale;
  if (longestSide > MAX_CANVAS_DIMENSION) {
    renderScale *= MAX_CANVAS_DIMENSION / longestSide;
  }
  // A minimum relative to CSS scale would override the memory/dimension caps
  // on huge engineering drawings. Those caps must remain hard limits.
  return Math.max(Number.EPSILON, renderScale);
}

function isCancellationError(error) {
  const name = error && error.name;
  return (
    name === "RenderingCancelledException" ||
    name === "AbortException" || name === "AbortError" ||
    name === "WorkerTaskCancelled"
  );
}

function describePdfError(error) {
  const name = error && error.name;
  const message =
    error && error.message ? String(error.message) : String(error || "");
  if (name === "PasswordException") {
    return "该 PDF 已加密，需要密码才能打开。";
  }
  if (name === "InvalidPDFException") {
    return "文件不是有效的 PDF，或者已经损坏。";
  }
  if (name === "MissingPDFException") {
    return "没有找到 PDF 数据。";
  }
  if (name === "UnexpectedResponseException") {
    return `PDF 数据读取失败${message ? `：${message}` : "。"} `;
  }
  if (
    /dynamically imported module|Importing a module script failed|Failed to fetch|error loading|Cannot find module/i.test(
      message
    )
  ) {
    return "PDF 引擎加载失败（/dsh-reader-assets/pdf.bundle.js）。请确认 Host 已正确提供静态资源后重试。";
  }
  return message ? `PDF 加载失败：${message}` : "PDF 加载失败。";
}

function selectionNodePage(node) {
  if (!node) {
    return null;
  }
  const element = node.nodeType === 1 ? node : node.parentElement;
  if (!element || typeof element.closest !== "function") {
    return null;
  }
  const pageElement = element.closest("[data-page]");
  if (!pageElement) {
    return null;
  }
  const page = Number(pageElement.getAttribute("data-page"));
  return Number.isFinite(page) ? page : null;
}

function unionSelectionRect(selection) {
  if (!selection || selection.rangeCount === 0) {
    return null;
  }
  const range = selection.getRangeAt(0);
  const rects = typeof range.getClientRects === "function" ? range.getClientRects() : null;
  if (!rects || rects.length === 0) {
    const rect = range.getBoundingClientRect();
    return rect && (rect.width || rect.height) ? rect : null;
  }
  if (rects.length === 1) {
    return rects[0];
  }
  let left = Infinity;
  let top = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  for (let i = 0; i < rects.length; i += 1) {
    const rect = rects[i];
    if (!rect || (!rect.width && !rect.height)) {
      continue;
    }
    left = Math.min(left, rect.left);
    top = Math.min(top, rect.top);
    right = Math.max(right, rect.right);
    bottom = Math.max(bottom, rect.bottom);
  }
  if (!Number.isFinite(left)) {
    return range.getBoundingClientRect();
  }
  try {
    return new DOMRect(left, top, Math.max(0, right - left), Math.max(0, bottom - top));
  } catch {
    return range.getBoundingClientRect();
  }
}

/**
 * Width available to a page in fit-width mode. Reads the real content padding
 * so the responsive CSS (narrow panes) stays in sync with the canvas sizing.
 */
function availablePageWidth(scrollElement) {
  let padding = FALLBACK_CONTENT_PADDING_X;
  const content = scrollElement.querySelector(".dshr-pdf-content");
  if (content) {
    const computed = getComputedStyle(content);
    const left = Number.parseFloat(computed.paddingLeft) || 0;
    const right = Number.parseFloat(computed.paddingRight) || 0;
    padding = left + right;
  }
  return Math.max(120, scrollElement.clientWidth - padding);
}

/* ------------------------------------------------------------------------- *
 * Presentational page row
 * ------------------------------------------------------------------------- */

const PdfPageRow = React.memo(function PdfPageRow({
  pageNumber,
  dim,
  mode,
  scale,
  viewportWidth,
  viewportHeight,
  rendered,
  active = true,
  registerPageElement,
  registerFrameElement,
  annotations,
  onOpenAnnotation,
}) {
  const box = computePageBox(dim, mode, scale, viewportWidth, viewportHeight);
  // Stable callback identities are essential here: an inline ref callback is
  // replaced on every render, making React detach/reattach the canvas and
  // invalidating the cached page bitmap.
  const pageRef = React.useCallback(
    (element) => registerPageElement(pageNumber, element),
    [pageNumber, registerPageElement],
  );
  const frameRef = React.useCallback(
    (element) => registerFrameElement(pageNumber, element),
    [pageNumber, registerFrameElement],
  );

  return (
    <div
      className="dshr-pdf-page"
      data-page={pageNumber}
      data-active={active ? "true" : "false"}
      style={active ? undefined : { display: "none" }}
      ref={pageRef}
    >
      <div
        className="dshr-pdf-page-col"
        style={{ width: `${box.width}px` }}
      >
        <div
          className="dshr-pdf-frame"
          data-page={pageNumber}
          data-rendered={rendered ? "true" : "false"}
          style={{
            width: `${box.width}px`,
            height: `${box.height}px`,
            "--total-scale-factor": String(box.pageScale),
          }}
          ref={frameRef}
        >
          <div className="dshr-pdf-placeholder" aria-hidden="true">
            {pageNumber}
          </div>
          {/* Keep unrendered page canvases at 1×1. A 1029-page PDF otherwise
              allocates ~1029 default 300×150 backing stores before any page is
              visible, which freezes the reader right after opening. */}
          <canvas className="dshr-pdf-canvas" width={1} height={1} />
          <div className="dshr-pdf-text-layer" />
          <PdfAnnotationLayer annotations={annotations} onOpenAnnotation={onOpenAnnotation} />
          <div className="dshr-pdf-page-loading" aria-hidden="true">
            <span className="dshr-pdf-spinner" />
          </div>
        </div>


      </div>
    </div>
  );
});

/* ------------------------------------------------------------------------- *
 * PdfViewer
 * ------------------------------------------------------------------------- */

export function PdfViewer({
  data,
  documentId = "",
  fileName = "",
  initialPage = 1,
  autoTranslate = false,
  pageTranslations,
  onReady,
  onPageChange,
  onPageText,
  onSelection,
  onRetryTranslation,
  annotations = [],
  onOpenAnnotation,
  focusAnnotation,
  hideTranslations = false,
  paged = false,
  onHideTranslations,
}) {
  const propsRef = useRef(null);
  propsRef.current = {
    autoTranslate,
    paged,
    onReady,
    onPageChange,
    onPageText,
    onSelection,
    onRetryTranslation,
    onOpenAnnotation,
  };

  const rootRef = useRef(null);
  const scrollRef = useRef(null);

  const pageElementsRef = useRef(new Map());
  const frameElementsRef = useRef(new Map());
  const pageStatesRef = useRef(new Map());
  const dimsRef = useRef(new Map());
  const baseDimRef = useRef({
    width: FALLBACK_PAGE_WIDTH,
    height: FALLBACK_PAGE_HEIGHT,
  });
  const pageTextsRef = useRef(new Map());
  const visiblePagesRef = useRef(new Set());
  const observersRef = useRef([]);
  const reportedPagesRef = useRef(new Set());

  const engineRef = useRef(null);
  const documentRef = useRef(null);
  const sessionRef = useRef(null);
  const bitmapCacheRef = useRef(new PageBitmapCache());
  const generationRef = useRef(0);
  const destroyedRef = useRef(false);

  const modeRef = useRef("fit");
  const scaleRef = useRef(1);
  const viewportWidthRef = useRef(0);
  const viewportHeightRef = useRef(0);
  const fitPageRef = useRef(false);
  const pageCountRef = useRef(0);
  const lastPageRef = useRef(1);
  const autoTranslateRef = useRef(!!autoTranslate);

  const renderQueueRef = useRef([]);
  const queuedPagesRef = useRef(new Set());
  const activeRendersRef = useRef(0);
  const refreshTimerRef = useRef(0);
  const measureRafRef = useRef(0);
  const scrollRafRef = useRef(0);

  const layoutRef = useRef(null);
  const navigationRef = useRef(0);
  const geometryAnchorRef = useRef(null);
  const selectionActiveRef = useRef(false);
  const lastSelectionSignatureRef = useRef("");
  const selectionRafRef = useRef(0);
  const skipPageCommitRef = useRef(false);
  const initialPageAppliedRef = useRef(false);
  const pageChangeReadyRef = useRef(false);

  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [dims, setDims] = useState({});
  const [baseDim, setBaseDim] = useState(null);
  const [mode, setMode] = useState("fit");
  const [scale, setScale] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [fitPage, setFitPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    clamp(Number.parseInt(initialPage, 10) || 1, 1, 999999)
  );
  const [renderedPages, setRenderedPages] = useState({});
  const [pageInput, setPageInput] = useState("");
  const [pageInputFocused, setPageInputFocused] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [pageSources, setPageSources] = useState({});
  const [visibleSegmentIds, setVisibleSegmentIds] = useState([]);
  const [linkedSegment, setLinkedSegment] = useState(null);
  const [panelDismissed, setPanelDismissed] = useState(false);
  const linkedSegmentRef = useRef(null);
  const linkOriginRef = useRef("source");
  const showTranslationPanel = autoTranslate && !hideTranslations && !panelDismissed;
  const translation = usePdfTranslation({ documentId, title: fileName, enabled: showTranslationPanel,
    activePage: currentPage, sources: pageSources, visibleIds: visibleSegmentIds });
  const linkedEnabledRef = useRef(false);
  linkedEnabledRef.current = showTranslationPanel && translation.preferences.linked !== false;
  linkedSegmentRef.current = linkedSegment;

  const layout = useMemo(() => {
    const model = new PageLayoutIndex(pageCount, computePageBox(baseDim, fitPage ? 'page' : mode, scale, viewportWidth, viewportHeight).height);
    for (const [number, dim] of Object.entries(dims)) model.setHeight(Number(number), computePageBox(dim, fitPage ? 'page' : mode, scale, viewportWidth, viewportHeight).height);
    model.paddingTop = layoutRef.current?.paddingTop ?? 18;
    return model;
  }, [pageCount, baseDim, dims, fitPage, mode, scale, viewportWidth, viewportHeight]);
  layoutRef.current = layout;
  useLayoutEffect(() => {
    const pending = geometryAnchorRef.current;
    geometryAnchorRef.current = null;
    if (pending && pending.revision === navigationRef.current && !paged) restoreScrollAnchor(pending.anchor);
  }, [layout, paged]);

  useEffect(() => { if (autoTranslate && !hideTranslations) setPanelDismissed(false); }, [autoTranslate, hideTranslations]);

  function publishPageSource(page, source) {
    pageTextsRef.current.set(page, source);
    setPageSources(previous => {
      if (previous[page] === source) return previous;
      return Object.fromEntries(Object.entries({ ...previous, [page]: source }).filter(([number]) => Math.abs(Number(number) - lastPageRef.current) <= 3));
    });
  }

  function paragraphSpans(frame, id) {
    return [...(frame?.querySelectorAll('[data-pdf-segments]') || [])].filter(span => span.dataset.pdfSegments.split('|').includes(id));
  }

  function activateParagraph(id, { origin = "source", reveal = false } = {}, page = lastPageRef.current) {
    linkOriginRef.current = origin;
    setLinkedSegment(previous => previous?.page === page && previous.id === id ? previous : { page, id });
    if (origin === "source" && page !== lastPageRef.current) updateCurrentPage(page);
    if (!reveal) return;
    const scroll = scrollRef.current;
    const span = paragraphSpans(frameElementsRef.current.get(page), id)[0];
    if (!scroll || !span) return;
    const rect = span.getBoundingClientRect();
    const viewport = scroll.getBoundingClientRect();
    if (rect.top < viewport.top + 12 || rect.bottom > viewport.bottom - 12) {
      scroll.scrollTo({ top: Math.max(0, scroll.scrollTop + rect.top - viewport.top - 28), behavior: "auto" });
    }
  }

  function updateReadingFocus() {
    const scroll = scrollRef.current;
    const frame = frameElementsRef.current.get(lastPageRef.current);
    if (!scroll || !frame) return;
    const viewport = scroll.getBoundingClientRect();
    const ids = new Set();
    for (const span of frame.querySelectorAll('[data-pdf-segments]')) {
      const rect = span.getBoundingClientRect();
      if (rect.bottom > viewport.top + 4 && rect.top < viewport.bottom - 4) for (const id of span.dataset.pdfSegments.split('|')) ids.add(id);
    }
    const values = [...ids];
    setVisibleSegmentIds(previous => previous.join('|') === values.join('|') ? previous : values);
    const current = linkedSegmentRef.current;
    if (values.length && (!current || current.page !== lastPageRef.current || !ids.has(current.id) && linkOriginRef.current === "source")) {
      activateParagraph(values[0]);
    }
  }

  useEffect(() => {
    for (const frame of frameElementsRef.current.values()) {
      for (const span of frame.querySelectorAll('[data-pdf-segments]')) {
        const active = linkedEnabledRef.current && Number(frame.dataset.page) === linkedSegment?.page
          && span.dataset.pdfSegments.split('|').includes(linkedSegment.id);
        if (active) span.dataset.pdfLinked = "true";
        else delete span.dataset.pdfLinked;
      }
    }
  }, [linkedSegment, renderedPages, pageSources, showTranslationPanel, translation.preferences.linked]);

  useEffect(() => {
    if (status !== "ready") return undefined;
    const frame = requestAnimationFrame(updateReadingFocus);
    return () => cancelAnimationFrame(frame);
  }, [currentPage, status, pageSources, showTranslationPanel]);

  // Only extract the next page after the current page is readable. This work
  // creates no page DOM and is cancelled logically on navigation/document change.
  useEffect(() => {
    if (!documentId || !showTranslationPanel || translation.paused || translation.preferences.prefetch === false
      || status !== "ready" || !renderedPages[currentPage] || currentPage >= pageCount) return undefined;
    let cancelled = false;
    const generation = generationRef.current;
    const next = currentPage + 1;
    const timer = setTimeout(async () => {
      if (activeRendersRef.current > 0) return;
      try {
        const page = await documentRef.current?.getPage(next);
        if (!page || cancelled) return;
        const content = await page.getTextContent();
        if (cancelled || generation !== generationRef.current) return;
        publishPageSource(next, extractPdfParagraphs(content.items, next, page.getViewport({ scale: 1 }).width));
      } catch { /* prefetch must never interrupt reading */ }
    }, 850);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [documentId, currentPage, pageCount, status, showTranslationPanel, translation.paused, translation.preferences.prefetch, renderedPages]);

  // Mirror the latest render values into refs used by imperative DOM work.
  autoTranslateRef.current = !!autoTranslate;
  modeRef.current = mode;
  scaleRef.current = scale;
  viewportWidthRef.current = viewportWidth;
  viewportHeightRef.current = viewportHeight;
  fitPageRef.current = fitPage;
  pageCountRef.current = pageCount;
  if (baseDim) {
    baseDimRef.current = baseDim;
  }

  /* ------------------------------------------------------------- utilities */

  function currentDim(pageNumber) {
    const dim = dimsRef.current.get(pageNumber);
    if (dim) {
      return dim;
    }
    return baseDimRef.current;
  }

  function pageBoxFor(pageNumber) {
    return computePageBox(
      currentDim(pageNumber),
      fitPageRef.current ? "page" : modeRef.current,
      scaleRef.current,
      viewportWidthRef.current,
      viewportHeightRef.current
    );
  }

  function effectiveScaleFor(pageNumber) {
    return pageBoxFor(pageNumber).pageScale;
  }

  function ensurePageState(pageNumber) {
    let state = pageStatesRef.current.get(pageNumber);
    if (!state) {
      state = {
        page: null,
        token: 0,
        wantRender: false,
        rendered: false,
        rendering: false,
        renderTask: null,
        textLayer: null,
        textContent: null,
        grouped: null,
        lastRenderScale: null,
        lastRasterScale: 0,
        textLayerReady: false,
      };
      pageStatesRef.current.set(pageNumber, state);
    }
    return state;
  }

  function setPageRendered(pageNumber, rendered) {
    setRenderedPages((previous) => {
      if (rendered) {
        if (previous[pageNumber]) {
          return previous;
        }
        return { ...previous, [pageNumber]: true };
      }
      if (!previous[pageNumber]) {
        return previous;
      }
      const next = { ...previous };
      delete next[pageNumber];
      return next;
    });
  }

  function updateDimsForPage(pageNumber, width, height) {
    if (!(width > 0) || !(height > 0)) {
      return false;
    }
    const previous = dimsRef.current.get(pageNumber);
    if (
      previous &&
      Math.abs(previous.width - width) < 0.05 &&
      Math.abs(previous.height - height) < 0.05
    ) {
      return false;
    }
    if (!geometryAnchorRef.current && !propsRef.current?.paged) geometryAnchorRef.current = { anchor: captureScrollAnchor(), revision: navigationRef.current };
    dimsRef.current.set(pageNumber, { width, height });
    setDims((previousDims) => ({
      ...previousDims,
      [pageNumber]: { width, height },
    }));
    scheduleMeasure();
    return true;
  }

  function measureLayout() {
    if (propsRef.current?.paged) return;
    const scrollElement = scrollRef.current;
    if (!scrollElement) {
      return;
    }
    const content = scrollElement.querySelector('.dshr-pdf-content');
    if (content && layoutRef.current) layoutRef.current.paddingTop = Number.parseFloat(getComputedStyle(content).paddingTop) || 0;
  }

  function scheduleMeasure() {
    if (measureRafRef.current) {
      return;
    }
    measureRafRef.current = requestAnimationFrame(() => {
      measureRafRef.current = 0;
      measureLayout();
    });
  }

  function updateCurrentPage(pageNumber) {
    if (!Number.isFinite(pageNumber) || pageNumber === lastPageRef.current) {
      return;
    }
    lastPageRef.current = pageNumber;
    setCurrentPage(pageNumber);
    linkOriginRef.current = "source";
    if (!pageChangeReadyRef.current) {
      return;
    }
    const callback = propsRef.current && propsRef.current.onPageChange;
    if (callback) {
      callback(pageNumber);
    }
  }

  function updateCurrentPageFromScroll() {
    // Hidden cache rows have zero/non-monotonic offsets. In book mode the
    // explicit page number is authoritative, even for delayed scroll events.
    if (propsRef.current?.paged || !pageChangeReadyRef.current) return;
    const scrollElement = scrollRef.current;
    if (!scrollElement) {
      return;
    }
    const model = layoutRef.current;
    if (!model?.count) return;
    const probe = scrollElement.scrollTop + clamp(scrollElement.clientHeight * 0.28, 48, 240);
    updateCurrentPage(model.pageAt(probe));
  }

  function captureScrollAnchor() {
    if (propsRef.current?.paged || !scrollRef.current || !layoutRef.current?.count) return null;
    const top = scrollRef.current.scrollTop;
    const entry = layoutRef.current.entryAt(top + 1);
    return { page: entry.page, ratio: clamp((top - entry.top) / entry.height, 0, 1) };
  }

  function restoreScrollAnchor(anchor) {
    if (!anchor || propsRef.current?.paged || !scrollRef.current || !layoutRef.current?.count) return;
    scrollRef.current.scrollTop = Math.max(0, layoutRef.current.top(anchor.page) + anchor.ratio * layoutRef.current.height(anchor.page));
  }

  function afterLayout(callback) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!destroyedRef.current) {
          callback();
        }
      });
    });
  }

  /* ---------------------------------------------------------- translation */

  function reportPageText(pageNumber) {
    if (!autoTranslateRef.current) {
      return;
    }
    if (reportedPagesRef.current.has(pageNumber)) {
      return;
    }
    const grouped = pageTextsRef.current.get(pageNumber);
    if (!grouped) {
      // Text not extracted yet; the caller retries after extraction.
      return;
    }
    reportedPagesRef.current.add(pageNumber);
    if (!grouped.text) {
      return;
    }
    const callback = propsRef.current && propsRef.current.onPageText;
    if (!callback) {
      return;
    }
    callback(pageNumber, {
      text: grouped.text,
      segments: grouped.segments.map((segment) => ({ src: segment.src })),
    });
  }

  function reportVisiblePages() {
    visiblePagesRef.current.forEach((pageNumber) => reportPageText(pageNumber));
  }

  /* -------------------------------------------------------------- rendering */

  function isFresh(state, token, generation) {
    return (
      !destroyedRef.current &&
      generation === generationRef.current &&
      token === state.token &&
      state.wantRender
    );
  }

  async function renderPage(pageNumber) {
    const doc = documentRef.current;
    const engine = engineRef.current;
    const frame = frameElementsRef.current.get(pageNumber);
    if (!doc || !engine || !frame) {
      return;
    }
    const generation = generationRef.current;
    const state = ensurePageState(pageNumber);
    const token = (state.token += 1);

    if (state.renderTask) {
      try {
        state.renderTask.cancel();
      } catch {
        /* already settled */
      }
      state.renderTask = null;
    }
    if (state.textLayer) {
      try {
        state.textLayer.cancel();
      } catch {
        /* already settled */
      }
      state.textLayer = null;
    }

    const canvas = frame.querySelector("canvas.dshr-pdf-canvas");
    const textLayerContainer = frame.querySelector(".dshr-pdf-text-layer");
    if (!canvas || !textLayerContainer) {
      return;
    }

    state.rendering = true;
    state.renderFailed = false;
    try {
      let page = state.page;
      if (!page) {
        page = await doc.getPage(pageNumber);
        if (!isFresh(state, token, generation)) {
          return;
        }
        state.page = page;
      }

      const baseViewport = page.getViewport({ scale: 1 });
      const known = currentDim(pageNumber);
      if (
        Math.abs(baseViewport.width - known.width) > 0.05 ||
        Math.abs(baseViewport.height - known.height) > 0.05
      ) {
        updateDimsForPage(pageNumber, baseViewport.width, baseViewport.height);
      }

      const box = pageBoxFor(pageNumber);
      const dim = currentDim(pageNumber);
      const active = () => propsRef.current?.paged ? pageNumber === lastPageRef.current : visiblePagesRef.current.has(pageNumber);
      const targetScale = computeRenderScale(box.pageScale, dim);
      const cached = !state.rendered && bitmapCacheRef.current.get(pageNumber);
      if (cached) {
        canvas.width = cached.bitmap.width;
        canvas.height = cached.bitmap.height;
        canvas.getContext('2d', { alpha: false }).drawImage(cached.bitmap, 0, 0);
        state.rendered = true;
        state.lastRenderScale = cached.scale;
        state.lastRasterScale = cached.rasterScale;
        frame.dataset.pdfQuality = cached.rasterScale >= targetScale - 0.002 ? 'full' : 'preview';
        if (rootRef.current) rootRef.current.dataset.pdfCacheHits = String((Number(rootRef.current.dataset.pdfCacheHits) || 0) + 1);
        setPageRendered(pageNumber, true);
      }
      const geometryChanged = state.lastRenderScale === null || Math.abs(state.lastRenderScale - box.pageScale) >= 0.002;
      const desiredScale = active() ? targetScale : Math.min(computeRenderScale(box.pageScale, dim, 2_000_000), box.pageScale);
      if (!state.rendered || geometryChanged || state.lastRasterScale < desiredScale - 0.002) {
        const previewScale = Math.min(desiredScale, box.pageScale);
        const phases = !state.rendered && previewScale < desiredScale - 0.002 ? [previewScale, desiredScale] : [desiredScale];
        for (let index = 0; index < phases.length; index++) {
          if (index) {
            await new Promise(resolve => setTimeout(resolve, 32));
            if (!isFresh(state, token, generation) || !active()) return;
          }
          const rasterScale = phases[index];
          const renderViewport = page.getViewport({ scale: rasterScale });
          // A canvasContext disables worker rendering. A staging canvas also
          // preserves the old readable image until zoom/refinement completes.
          const staging = document.createElement('canvas');
          staging.width = Math.max(1, Math.floor(renderViewport.width));
          staging.height = Math.max(1, Math.floor(renderViewport.height));
          try {
            const renderTask = page.render({ canvas: staging, viewport: renderViewport, intent: 'display', background: '#ffffff' });
            renderTask.onContinue = resume => setTimeout(() => {
              if (isFresh(state, token, generation)) resume(); else renderTask.cancel();
            }, active() ? 0 : 16);
            state.renderTask = renderTask;
            try { await renderTask.promise; }
            finally { if (state.renderTask === renderTask) state.renderTask = null; }
            if (!isFresh(state, token, generation)) return;
            if (rootRef.current) {
              const key = renderTask.isWorkerRendering ? 'pdfWorkerRenders' : 'pdfMainRenders';
              rootRef.current.dataset[key] = String((Number(rootRef.current.dataset[key]) || 0) + 1);
              rootRef.current.dataset.pdfRenderer = renderTask.isWorkerRendering ? 'worker' : 'main';
            }
            canvas.width = staging.width;
            canvas.height = staging.height;
            const context = canvas.getContext('2d', { alpha: false });
            if (!context) throw new Error('无法创建 PDF 画布上下文');
            context.drawImage(staging, 0, 0);
            state.lastRenderScale = box.pageScale;
            state.lastRasterScale = rasterScale;
            state.rendered = true;
            frame.dataset.pdfQuality = rasterScale >= targetScale - 0.002 ? 'full' : 'preview';
            setPageRendered(pageNumber, true);
            if (typeof createImageBitmap === 'function') {
              try {
                const bitmap = await createImageBitmap(staging);
                if (!isFresh(state, token, generation)) { bitmap.close(); return; }
                bitmapCacheRef.current.set(pageNumber, { bitmap, scale: box.pageScale, rasterScale });
                if (rootRef.current) rootRef.current.dataset.pdfCacheBytes = String(bitmapCacheRef.current.bytes);
              } catch { /* Optional snapshots must not prevent native text/selection. */ }
            }
          } finally { staging.width = 0; staging.height = 0; }
        }
      }

      // Cache the bitmap for neighbours, but do not build hidden text DOM.
      // When that page becomes visible, reuse its bitmap and add selection text.
      if (propsRef.current?.paged
        ? pageNumber !== lastPageRef.current
        : !visiblePagesRef.current.has(pageNumber)) return;

      // ---- text layer (errors here must not hide the page itself) ----------
      try {
        let textContent = state.textContent;
        if (!textContent) {
          textContent = await page.getTextContent();
          if (!isFresh(state, token, generation)) {
            return;
          }
          state.textContent = textContent;
        }
        if (!state.grouped) {
          state.grouped = extractPdfParagraphs(textContent.items, pageNumber, baseViewport.width);
          publishPageSource(pageNumber, state.grouped);
        }

        textLayerContainer.replaceChildren();
        const textViewport = page.getViewport({ scale: box.pageScale });
        const textLayer = new engine.TextLayer({
          textContentSource: textContent,
          container: textLayerContainer,
          viewport: textViewport,
        });
        state.textLayer = textLayer;
        try {
          await textLayer.render();
        } finally {
          if (state.textLayer === textLayer) {
            state.textLayer = null;
          }
        }
        if (!isFresh(state, token, generation)) {
          return;
        }
        state.textLayerReady = true;
        const divs = textLayer.textDivs || [];
        const byItem = new Map();
        let divIndex = 0;
        textContent.items.forEach((item, index) => { if (typeof item.str === "string") byItem.set(index, divs[divIndex++]); });
        for (const segment of state.grouped.segments) for (const index of segment.itemIndices || []) {
          const span = byItem.get(index);
          if (!span) continue;
          const ids = new Set((span.dataset.pdfSegments || '').split('|').filter(Boolean));
          ids.add(segment.id);
          span.dataset.pdfSegments = [...ids].join('|');
          span.dataset.pdfSegment = [...ids][0];
          if (linkedEnabledRef.current && linkedSegmentRef.current?.page === pageNumber && ids.has(linkedSegmentRef.current.id)) span.dataset.pdfLinked = "true";
        }
        updateReadingFocus();
      } catch (textError) {
        if (!isCancellationError(textError)) {
          // eslint-disable-next-line no-console
          console.warn("[dsh-reader] PDF 文本层渲染失败", textError);
        }
      }

      if (!isFresh(state, token, generation)) {
        return;
      }
      if (visiblePagesRef.current.has(pageNumber)) {
        reportPageText(pageNumber);
      }
    } catch (renderError) {
      if (!isCancellationError(renderError)) {
        state.renderFailed = true;
        // eslint-disable-next-line no-console
        console.warn(`[dsh-reader] 第 ${pageNumber} 页渲染失败`, renderError);
      }
    } finally {
      state.rendering = false;
    }
  }

  function pumpRenderQueue() {
    if (destroyedRef.current) {
      return;
    }
    while (
      activeRendersRef.current < MAX_CONCURRENT_RENDERS &&
      renderQueueRef.current.length > 0
    ) {
      renderQueueRef.current.sort((a, b) => Math.abs(a.pageNumber - lastPageRef.current) - Math.abs(b.pageNumber - lastPageRef.current));
      const first = renderQueueRef.current[0];
      const foreground = pageStatesRef.current.get(lastPageRef.current);
      if (first.pageNumber !== lastPageRef.current && (!foreground?.rendered || foreground.rendering)) break;
      const job = renderQueueRef.current.shift();
      queuedPagesRef.current.delete(job.pageNumber);
      const state = pageStatesRef.current.get(job.pageNumber);
      if (!state || !state.wantRender || state.rendering || !frameElementsRef.current.has(job.pageNumber)) {
        continue;
      }
      activeRendersRef.current += 1;
      const generation = generationRef.current;
      const renderToken = state.token + 1;
      renderPage(job.pageNumber)
        .catch(() => {
          /* renderPage handles its own errors */
        })
        .finally(() => {
          if (generation !== generationRef.current) return;
          activeRendersRef.current = Math.max(0, activeRendersRef.current - 1);
          if (state.wantRender && frameElementsRef.current.has(job.pageNumber)) {
            const box = pageBoxFor(job.pageNumber);
            const nowVisible = propsRef.current?.paged ? job.pageNumber === lastPageRef.current : visiblePagesRef.current.has(job.pageNumber);
            // A prefetched preview can become the foreground while its job is
            // still running. Upgrade it after completion; do not leave HiDPI
            // pages permanently at neighbour-preview resolution.
            const needsUpgrade = nowVisible && state.rendered && !state.renderFailed && state.lastRasterScale < computeRenderScale(box.pageScale, currentDim(job.pageNumber)) - 0.002;
            if (state.token !== renderToken || needsUpgrade || (state.rendered && Math.abs((state.lastRenderScale || 0) - box.pageScale) > 0.002)) {
              scheduleRender(job.pageNumber, { front: true });
            }
          }
          pumpRenderQueue();
        });
    }
  }

  function scheduleRender(pageNumber, { front = false } = {}) {
    if (!frameElementsRef.current.has(pageNumber)) return;
    const state = ensurePageState(pageNumber);
    state.wantRender = true;
    if (front && pageNumber === lastPageRef.current && !state.rendered) {
      for (const [otherPage, other] of pageStatesRef.current) {
        if (otherPage !== pageNumber && other.renderTask && !visiblePagesRef.current.has(otherPage)) {
          other.token++;
          other.renderTask.cancel();
        }
      }
    }
    // Repeated observer/resize/prefetch notifications must not start another
    // render against the same canvas and cancel the work already in flight.
    if (state.rendering) return;
    if (queuedPagesRef.current.has(pageNumber)) {
      if (front) {
        renderQueueRef.current.sort((a, b) => (b.pageNumber === pageNumber) - (a.pageNumber === pageNumber));
      }
      return;
    }
    if (state.rendered && state.lastRenderScale !== null) {
      const box = pageBoxFor(pageNumber);
      if (
        (state.textLayerReady || (propsRef.current?.paged
          ? pageNumber !== lastPageRef.current
          : !visiblePagesRef.current.has(pageNumber))) &&
        Math.abs(state.lastRenderScale - box.pageScale) < 0.002 &&
        state.lastRasterScale >= (pageNumber === lastPageRef.current ? computeRenderScale(box.pageScale, currentDim(pageNumber)) : Math.min(computeRenderScale(box.pageScale, currentDim(pageNumber), 2_000_000), box.pageScale)) - 0.002
      ) {
        return;
      }
    }
    queuedPagesRef.current.add(pageNumber);
    const job = { pageNumber };
    if (front) {
      renderQueueRef.current.unshift(job);
    } else {
      renderQueueRef.current.push(job);
    }
    pumpRenderQueue();
  }

  function evictPage(pageNumber) {
    const state = pageStatesRef.current.get(pageNumber);
    if (!state) {
      return;
    }
    state.wantRender = false;
    state.token += 1;
    if (state.renderTask) {
      try {
        state.renderTask.cancel();
      } catch {
        /* noop */
      }
      state.renderTask = null;
    }
    if (state.textLayer) {
      try {
        state.textLayer.cancel();
      } catch {
        /* noop */
      }
      state.textLayer = null;
    }

    const frame = frameElementsRef.current.get(pageNumber);
    if (frame) {
      const canvas = frame.querySelector("canvas.dshr-pdf-canvas");
      if (canvas) {
        canvas.width = 0;
        canvas.height = 0;
      }
      const textLayerContainer = frame.querySelector(".dshr-pdf-text-layer");
      if (textLayerContainer) {
        textLayerContainer.replaceChildren();
      }
    }

    if (state.page) {
      try {
        state.page.cleanup();
      } catch {
        /* noop */
      }
      state.page = null;
    }
    state.textContent = null;
    state.grouped = null;
    pageTextsRef.current.delete(pageNumber);
    state.lastRenderScale = null;
    state.lastRasterScale = 0;
    state.textLayerReady = false;

    if (state.rendered) {
      state.rendered = false;
      setPageRendered(pageNumber, false);
    }

    if (renderQueueRef.current.length > 0) {
      renderQueueRef.current = renderQueueRef.current.filter(
        (job) => job.pageNumber !== pageNumber
      );
    }
    queuedPagesRef.current.delete(pageNumber);
    pageStatesRef.current.delete(pageNumber);
  }

  function refreshRenderedPages() {
    for (const [pageNumber, state] of pageStatesRef.current) {
      if (!state.rendered || !state.wantRender || state.rendering) {
        continue;
      }
      const box = pageBoxFor(pageNumber);
      if (
        !state.textLayerReady ||
        state.lastRenderScale === null ||
        Math.abs(state.lastRenderScale - box.pageScale) > 0.002
      ) {
        scheduleRender(pageNumber);
      }
    }
  }

  function scheduleRefresh(delay = REFRESH_DELAY_MS) {
    if (refreshTimerRef.current) {
      clearTimeout(refreshTimerRef.current);
    }
    refreshTimerRef.current = setTimeout(() => {
      refreshTimerRef.current = 0;
      refreshRenderedPages();
    }, delay);
  }

  /* -------------------------------------------------------------- navigation */

  function jumpToPage(pageNumber) {
    navigationRef.current++;
    geometryAnchorRef.current = null;
    pageNumber = clamp(Math.round(Number(pageNumber) || 1), 1, pageCountRef.current || 1);
    const scrollElement = scrollRef.current;
    if (propsRef.current?.paged) {
      updateCurrentPage(pageNumber);
      return;
    }
    if (!scrollElement || !layoutRef.current?.count) { updateCurrentPage(pageNumber); return; }
    const top = layoutRef.current.top(pageNumber) - 10;
    if (typeof scrollElement.scrollTo === "function") {
      // A page jump is atomic. Animating through virtual spacers would mount
      // and render every intermediate window and compete with the target page.
      scrollElement.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    } else {
      scrollElement.scrollTop = Math.max(0, top);
    }
    updateCurrentPage(pageNumber);
  }

  function scrollByViewport(direction) {
    const scrollElement = scrollRef.current;
    if (!scrollElement) {
      return;
    }
    scrollElement.scrollBy({
      top: direction * scrollElement.clientHeight * 0.92,
      behavior: "auto",
    });
  }

  function scheduleAnchorRestore(anchor) {
    if (!anchor || propsRef.current?.paged) {
      return;
    }
    // Restore in useLayoutEffect, in the same commit as the new spacer sizes.
    // Waiting two animation frames exposes an empty spacer and lets observer
    // callbacks capture a wrong intermediate page before restoration.
    geometryAnchorRef.current = { anchor, revision: navigationRef.current };
  }

  function zoomBy(factor) {
    const anchor = captureScrollAnchor();
    const base =
      modeRef.current === "fit"
        ? effectiveScaleFor(lastPageRef.current)
        : scaleRef.current;
    const next = clamp(base * factor, MIN_SCALE, MAX_SCALE);
    fitPageRef.current = false;
    setFitPage(false);
    modeRef.current = "custom";
    scaleRef.current = next;
    setMode("custom");
    setScale(next);
    scheduleAnchorRestore(anchor);
  }

  function fitToWidth() {
    const anchor = captureScrollAnchor();
    fitPageRef.current = false;
    setFitPage(false);
    modeRef.current = "fit";
    setMode("fit");
    scheduleAnchorRestore(anchor);
  }

  function toggleWholePage() {
    const anchor = captureScrollAnchor();
    const next = !fitPageRef.current;
    fitPageRef.current = next;
    setFitPage(next);
    modeRef.current = "fit";
    setMode("fit");
    scheduleAnchorRestore(anchor);
    scheduleMeasure();
  }

  function goToPreviousPage() {
    jumpToPage(Math.max(1, lastPageRef.current - 1), "smooth");
  }

  // Book-mode page turn fallback owned by the PDF viewer itself. PagedReader
  // normally scrolls to the measured page row; if a PDF remeasure clamps that
  // target, this event guarantees the page still changes.
  useEffect(() => {
    const element = scrollRef.current;
    if (!element || status !== "ready") return undefined;
    const onPagedTurn = (event) => {
      const direction = Number(event.detail) || 1;
      if (direction > 0) goToNextPage();
      else goToPreviousPage();
    };
    element.addEventListener("dshr-pdf-page-turn", onPagedTurn);
    return () => element.removeEventListener("dshr-pdf-page-turn", onPagedTurn);
  }, [status, pageCount, currentPage]);

  function goToNextPage() {
    jumpToPage(
      Math.min(pageCountRef.current || 1, lastPageRef.current + 1),
      "smooth"
    );
  }

  /* --------------------------------------------------------------- selection */

  function buildSelectionContext(pageNumber, selectionText) {
    const grouped = pageTextsRef.current.get(pageNumber);
    if (!grouped || !grouped.text) {
      return undefined;
    }
    const pageText = grouped.text;
    const needle = selectionText.replace(/\s+/g, " ").trim();
    const index = needle ? pageText.indexOf(needle) : -1;
    const budget = SELECTION_CONTEXT_CHARS;
    let start = 0;
    if (index >= 0) {
      const side = Math.max(
        80,
        Math.floor((budget - Math.min(needle.length, budget - 160)) / 2)
      );
      start = Math.max(0, index - side);
    }
    let end = Math.min(pageText.length, start + budget);
    if (end - start < budget) {
      start = Math.max(0, end - budget);
    }
    const context = pageText.slice(start, end).trim();
    return context || undefined;
  }

  function clearSelection() {
    lastSelectionSignatureRef.current = "";
    if (!selectionActiveRef.current) {
      return;
    }
    selectionActiveRef.current = false;
    const callback = propsRef.current && propsRef.current.onSelection;
    if (callback) {
      callback(null);
    }
  }

  function handleSelectionChange() {
    const selection = globalThis.getSelection ? globalThis.getSelection() : null;
    const collapsed = !selection || selection.isCollapsed || selection.rangeCount === 0;
    if (collapsed) {
      clearSelection();
      return;
    }
    const root = rootRef.current;
    if (!root) {
      return;
    }
    const range = selection.getRangeAt(0);
    if (!root.querySelector('.dshr-pdf-content')?.contains(range.commonAncestorContainer)) {
      clearSelection();
      return;
    }
    const text = selection.toString().replace(/\s+/g, " ").trim();
    if (!text) {
      clearSelection();
      return;
    }
    const page =
      selectionNodePage(range.startContainer) ||
      selectionNodePage(range.endContainer) ||
      lastPageRef.current;
    const rect = unionSelectionRect(selection);
    if (!rect) {
      return;
    }
    // Document-level mouseup/keyup listeners fire very often; only report a
    // genuinely new selection, otherwise the host would reset its translation
    // popover on every modifier-key keyup.
    const signature = [
      page,
      text,
      Math.round(rect.left),
      Math.round(rect.top),
      Math.round(rect.width),
      Math.round(rect.height),
    ].join("|");
    if (signature === lastSelectionSignatureRef.current) {
      return;
    }
    lastSelectionSignatureRef.current = signature;
    const payload = { text, page, rect };
    const frame = frameElementsRef.current.get(page);
    if (frame) {
      const pageRects = normalizedRectsForSelection(range, frame);
      if (pageRects.length > 0) payload.pageRects = pageRects;
    }
    const context = buildSelectionContext(page, text);
    if (context) {
      payload.context = context;
    }
    selectionActiveRef.current = true;
    const callback = propsRef.current && propsRef.current.onSelection;
    if (callback) {
      callback(payload);
    }
  }

  /* ---------------------------------------------------------------- helpers */

  const handlePageElement = useCallback((pageNumber, element) => {
    if (element) {
      pageElementsRef.current.set(pageNumber, element);
    } else {
      pageElementsRef.current.delete(pageNumber);
    }
  }, []);

  const handleFrameElement = useCallback((pageNumber, element) => {
    if (element) {
      frameElementsRef.current.set(pageNumber, element);
      for (const observer of observersRef.current) observer.observe(element);
      // A previously rendered page gets a brand-new canvas when it remounts.
      // Keep its page state, but force the bitmap/text layer to be painted into
      // the new canvas instead of being skipped as "already rendered".
      const state = pageStatesRef.current.get(pageNumber);
      if (state) {
        state.rendered = false;
        state.textLayerReady = false;
        state.lastRenderScale = null;
        setPageRendered(pageNumber, false);
      }
    } else {
      // Cancel and release before the detached canvas becomes unreachable.
      const old = frameElementsRef.current.get(pageNumber);
      if (old) for (const observer of observersRef.current) observer.unobserve(old);
      visiblePagesRef.current.delete(pageNumber);
      evictPage(pageNumber);
      frameElementsRef.current.delete(pageNumber);
    }
  }, []);

  function handleScrollMouseDown(event) {
    const target = event.target;
    if (
      target &&
      typeof target.closest === "function" &&
      target.closest('button, a, input, textarea, select, [role="button"]')
    ) {
      return;
    }
    const root = rootRef.current;
    if (root && typeof root.focus === "function") {
      root.focus({ preventScroll: true });
    }
  }

  function handleKeyDown(event) {
    if (event.defaultPrevented || event.altKey) {
      return;
    }
    // In book mode PagedReader owns PageDown/PageUp so every activation goes
    // through the same page-turn animation and page-boundary logic.
    if (propsRef.current?.paged) {
      return;
    }
    const target = event.target;
    if (target?.closest?.('.dshr-pdf-translation-panel')) return;
    const tagName = target && target.tagName ? target.tagName.toLowerCase() : "";
    if (
      tagName === "input" ||
      tagName === "textarea" ||
      tagName === "select" ||
      (target && target.isContentEditable)
    ) {
      return;
    }
    const scrollElement = scrollRef.current;
    if (!scrollElement || status !== "ready") {
      return;
    }
    switch (event.key) {
      case "PageDown":
        event.preventDefault();
        scrollByViewport(1);
        break;
      case "PageUp":
        event.preventDefault();
        scrollByViewport(-1);
        break;
      case "Home":
        event.preventDefault();
        scrollElement.scrollTo({ top: 0, behavior: "auto" });
        updateCurrentPage(1);
        break;
      case "End":
        event.preventDefault();
        scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: "auto",
        });
        updateCurrentPage(pageCountRef.current || 1);
        break;
      default:
        break;
    }
  }

  /* ------------------------------------------------------------- lifecycle */

  function disposePageStates() {
    for (const state of pageStatesRef.current.values()) {
      state.token += 1;
      if (state.renderTask) {
        try {
          state.renderTask.cancel();
        } catch {
          /* noop */
        }
      }
      if (state.textLayer) {
        try {
          state.textLayer.cancel();
        } catch {
          /* noop */
        }
      }
      if (state.page) {
        try {
          state.page.cleanup();
        } catch {
          /* noop */
        }
      }
    }
    pageStatesRef.current.clear();
  }

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    let session;
    generationRef.current += 1;
    destroyedRef.current = false;

    void sessionRef.current?.close();
    sessionRef.current = null;
    documentRef.current = null;
    bitmapCacheRef.current.clear();
    if (rootRef.current) {
      for (const key of ['pdfReadBytes', 'pdfSourceBytes', 'pdfRangeReads', 'pdfCacheHits', 'pdfCacheBytes', 'pdfWorkerRenders', 'pdfMainRenders']) rootRef.current.dataset[key] = '0';
      delete rootRef.current.dataset.pdfRenderer;
    }
    disposePageStates();
    pageElementsRef.current.clear();
    frameElementsRef.current.clear();
    dimsRef.current.clear();
    pageTextsRef.current.clear();
    visiblePagesRef.current.clear();
    reportedPagesRef.current.clear();
    renderQueueRef.current = [];
    queuedPagesRef.current.clear();
    activeRendersRef.current = 0;
    geometryAnchorRef.current = null;
    navigationRef.current++;
    initialPageAppliedRef.current = false;

    setStatus("loading");
    setError(null);
    setProgress(null);
    setPageCount(0);
    setDims({});
    setBaseDim(null);
    setRenderedPages({});
    setPageInput("");
    setPageInputFocused(false);
    setCurrentPage(1);
    setPageSources({});
    setLinkedSegment(null);
    setVisibleSegmentIds([]);
    lastPageRef.current = 0;
    pageChangeReadyRef.current = false;

    const isBlob = typeof Blob !== "undefined" && data instanceof Blob;
    if ((!isBlob && !(data instanceof ArrayBuffer) && !ArrayBuffer.isView(data))
      || (isBlob ? data.size === 0 : data.byteLength === 0)) {
      setStatus("error");
      setError("没有可显示的 PDF 数据。");
      return undefined;
    }

    (async () => {
      try {
        session = await openPdfDocument(data, {
          signal: controller.signal,
          onRead: stats => {
            if (!cancelled && rootRef.current) {
              rootRef.current.dataset.pdfReadBytes = String(stats.bytes);
              rootRef.current.dataset.pdfSourceBytes = String(stats.total);
              rootRef.current.dataset.pdfRangeReads = String(stats.reads);
            }
          },
          onProgress: info => {
            if (!cancelled && info?.total > 0) setProgress(Math.max(1, Math.min(100, Math.round(info.loaded / info.total * 100))));
          },
          onError: failure => {
            if (!cancelled) { setStatus("error"); setError(describePdfError(failure)); }
          },
        });
        if (cancelled) { void session.close(); return; }
        sessionRef.current = session;
        const { engine, pdf } = session;
        engineRef.current = engine;
        documentRef.current = pdf;

        const firstPage = await pdf.getPage(1);
        if (cancelled) {
          return;
        }
        const firstViewport = firstPage.getViewport({ scale: 1 });
        const newBaseDim = {
          width: firstViewport.width,
          height: firstViewport.height,
        };
        baseDimRef.current = newBaseDim;
        try {
          firstPage.cleanup();
        } catch {
          /* noop */
        }

        const requestedPage = clamp(
          Number.parseInt(initialPage, 10) || 1,
          1,
          pdf.numPages
        );
        let initialDim = null;
        if (requestedPage !== 1) {
          try {
            const targetPage = await pdf.getPage(requestedPage);
            const targetViewport = targetPage.getViewport({ scale: 1 });
            initialDim = {
              width: targetViewport.width,
              height: targetViewport.height,
            };
            dimsRef.current.set(requestedPage, initialDim);
            targetPage.cleanup();
          } catch {
            /* estimates are fine */
          }
        }
        if (cancelled) {
          return;
        }

        setBaseDim(newBaseDim);
        setDims(initialDim ? { [requestedPage]: initialDim } : {});
        setPageCount(pdf.numPages);
        pageCountRef.current = pdf.numPages;
        setProgress(null);
        setStatus("ready");
        setCurrentPage(requestedPage);
        lastPageRef.current = requestedPage;

        const readyCallback = propsRef.current && propsRef.current.onReady;
        if (readyCallback) {
          readyCallback({ pageCount: pdf.numPages });
        }
      } catch (loadError) {
        if (cancelled) return;
        void session?.close();
        sessionRef.current = null;
        documentRef.current = null;
        setProgress(null);
        setStatus("error");
        setError(describePdfError(loadError));
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
      destroyedRef.current = true;
      generationRef.current += 1;
      disposePageStates();
      void session?.close();
      sessionRef.current = null;
      documentRef.current = null;
      bitmapCacheRef.current.clear();
      renderQueueRef.current = [];
      queuedPagesRef.current.clear();
      if (refreshTimerRef.current) {
        clearTimeout(refreshTimerRef.current);
        refreshTimerRef.current = 0;
      }
      if (measureRafRef.current) {
        cancelAnimationFrame(measureRafRef.current);
        measureRafRef.current = 0;
      }
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = 0;
      }
      if (selectionActiveRef.current) {
        selectionActiveRef.current = false;
        const callback = propsRef.current && propsRef.current.onSelection;
        if (callback) {
          callback(null);
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loadAttempt]);

  // Keep the keyboard focus handy without stealing it on mount.
  useEffect(() => {
    const handleDocumentMouseUp = () => handleSelectionChange();
    const handleDocumentKeyUp = () => handleSelectionChange();
    const handleSelectionChangeEvent = () => {
      if (selectionRafRef.current) {
        return;
      }
      selectionRafRef.current = requestAnimationFrame(() => {
        selectionRafRef.current = 0;
        const selection = globalThis.getSelection
          ? globalThis.getSelection()
          : null;
        if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
          clearSelection();
        }
      });
    };
    document.addEventListener("mouseup", handleDocumentMouseUp, true);
    document.addEventListener("keyup", handleDocumentKeyUp, true);
    document.addEventListener("selectionchange", handleSelectionChangeEvent);
    return () => {
      document.removeEventListener("mouseup", handleDocumentMouseUp, true);
      document.removeEventListener("keyup", handleDocumentKeyUp, true);
      document.removeEventListener(
        "selectionchange",
        handleSelectionChangeEvent
      );
      if (selectionRafRef.current) {
        cancelAnimationFrame(selectionRafRef.current);
        selectionRafRef.current = 0;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Measure the viewport before first paint so fit-width pages do not flash.
  useLayoutEffect(() => {
    if (status !== "ready") {
      return;
    }
    const scrollElement = scrollRef.current;
    if (!scrollElement) {
      return;
    }
    const measured = availablePageWidth(scrollElement);
    if (measured > 0) {
      viewportWidthRef.current = measured;
      setViewportWidth(measured);
    }
    if (scrollElement.clientHeight > 0) {
      viewportHeightRef.current = scrollElement.clientHeight;
      setViewportHeight(scrollElement.clientHeight);
    }
  }, [status, pageCount]);

  useEffect(() => {
    if (paged) setFitPage(true);
  }, [paged]);

  useEffect(() => {
    if (!paged) return;
    const element = scrollRef.current;
    if (element) element.scrollTop = 0;
  }, [paged]);

  // Render the visible page first, then warm the nearby pages in the background.
  // IntersectionObserver would evict hidden prefetched frames; paged mode keeps
  // them cached (see the observer below).
  useEffect(() => {
    if (!paged || status !== "ready" || pageCount <= 0) return undefined;
    visiblePagesRef.current = new Set([currentPage]);
    reportPageText(currentPage);
    const order = [currentPage];
    for (let offset = 1; offset <= 2; offset += 1) {
      order.push(currentPage + offset, currentPage - offset);
    }
    const pagesToWarm = order.filter((page, index, list) => (
      page >= 1 && page <= pageCount && list.indexOf(page) === index
    ));
    const timers = pagesToWarm.map((page, index) => window.setTimeout(
      () => scheduleRender(page, { front: index === 0 }),
      index === 0 ? 0 : index === 1 ? 30 : 1000 + (index - 2) * 120,
    ));
    return () => {
      for (const timer of timers) window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paged, status, currentPage, pageCount, fitPage, mode, scale, viewportWidth, viewportHeight]);

  // Book mode keeps its page in PdfViewer state instead of DOM scroll offsets.
  // Let PagedReader mirror this state so its counter and buttons stay in sync.
  useEffect(() => {
    if (!paged || status !== "ready") return;
    const element = scrollRef.current;
    if (!element) return;
    element.dispatchEvent(new CustomEvent("dshr-pdf-page-state", {
      detail: { page: currentPage, pages: pageCount },
    }));
  }, [paged, status, currentPage, pageCount]);

  useEffect(() => {
    if (status !== "ready") return undefined;
    scheduleMeasure();
    scheduleRefresh();
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitPage, viewportHeight, status]);

  // Scroll / resize / intersection plumbing for one loaded document.
  useEffect(() => {
    if (status !== "ready") {
      return undefined;
    }
    const scrollElement = scrollRef.current;
    if (!scrollElement) {
      return undefined;
    }
    let disposed = false;
    let visibilityObserver = null;
    let renderObserver = null;

    const measureViewport = () => {
      const width = availablePageWidth(scrollElement);
      const height = scrollElement.clientHeight;
      const widthChanged = width > 0 && Math.abs(width - viewportWidthRef.current) >= 0.5;
      const heightChanged = height > 0 && Math.abs(height - viewportHeightRef.current) >= 0.5;
      if (!widthChanged && !heightChanged) return;
      const anchor = widthChanged || heightChanged && fitPageRef.current ? captureScrollAnchor() : null;
      if (widthChanged) {
        viewportWidthRef.current = width;
        setViewportWidth(width);
      }
      if (heightChanged) {
        viewportHeightRef.current = height;
        setViewportHeight(height);
      }
      if (anchor && !propsRef.current?.paged) scheduleAnchorRestore(anchor);
    };

    const handleScroll = () => {
      if (scrollRafRef.current) {
        return;
      }
      navigationRef.current++;
      geometryAnchorRef.current = null;
      scrollRafRef.current = requestAnimationFrame(() => {
        scrollRafRef.current = 0;
        updateCurrentPageFromScroll();
        updateReadingFocus();
      });
    };

    let resizeObserver = null;
    if (typeof ResizeObserver === "function") {
      resizeObserver = new ResizeObserver(() => {
        if (!disposed) {
          measureViewport();
        }
      });
      resizeObserver.observe(scrollElement);
    }

    scrollElement.addEventListener("scroll", handleScroll, { passive: true });

    if (!paged && typeof IntersectionObserver === "function") {
      visibilityObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const pageNumber = Number(entry.target.getAttribute("data-page"));
            if (!Number.isFinite(pageNumber)) {
              continue;
            }
            if (entry.isIntersecting) {
              visiblePagesRef.current.add(pageNumber);
              scheduleRender(pageNumber, { front: true });
              reportPageText(pageNumber);
            } else {
              visiblePagesRef.current.delete(pageNumber);
            }
          }
        },
        { root: scrollElement, rootMargin: "0px", threshold: 0 }
      );

      renderObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const pageNumber = Number(entry.target.getAttribute("data-page"));
            if (!Number.isFinite(pageNumber)) {
              continue;
            }
            if (entry.isIntersecting) {
              scheduleRender(pageNumber);
            } else if (!propsRef.current?.paged) {
              // Book mode keeps rendered pages cached; evicting turns every
              // revisit into a full PDF page raster again.
              evictPage(pageNumber);
            }
          }
        },
        { root: scrollElement, rootMargin: RENDER_ROOT_MARGIN, threshold: 0 }
      );
      observersRef.current = [visibilityObserver, renderObserver];

      const observeAll = () => {
        if (disposed) {
          return;
        }
        for (const frame of frameElementsRef.current.values()) {
          visibilityObserver.observe(frame);
          renderObserver.observe(frame);
        }
      };
      afterLayout(observeAll);
    }

    const raf = requestAnimationFrame(() => {
      if (disposed) {
        return;
      }
      measureLayout();
      updateCurrentPageFromScroll();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (visibilityObserver) {
        visibilityObserver.disconnect();
      }
      if (renderObserver) {
        renderObserver.disconnect();
      }
      observersRef.current = [];
      scrollElement.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, pageCount, paged]);

  // Jump to the restored reading position once the pages have layout.
  useEffect(() => {
    if (status !== "ready" || pageCount <= 0) {
      return undefined;
    }
    if (initialPageAppliedRef.current) {
      return undefined;
    }
    initialPageAppliedRef.current = true;
    const target = clamp(
      Number.parseInt(initialPage, 10) || 1,
      1,
      pageCount
    );
    const timer = setTimeout(() => {
      pageChangeReadyRef.current = true;
      const scrollElement = scrollRef.current;
      if (!scrollElement) {
        return;
      }
      measureLayout();
      jumpToPage(target, "auto");
    }, 0);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, pageCount]);

  // Changing layout is navigation too. Preserve the explicit current page,
  // and wait for the continuous rows to mount before restoring their position.
  const previousPagedRef = useRef(paged);
  useLayoutEffect(() => {
    if (previousPagedRef.current === paged) return;
    previousPagedRef.current = paged;
    if (status !== "ready") return;
    if (paged) {
      scrollRef.current.scrollTop = 0;
    } else {
      jumpToPage(lastPageRef.current, "auto");
    }
  }, [paged, status]);

  // Re-rasterise visible pages when geometry changes (zoom, resize, page size).
  useEffect(() => {
    if (status !== "ready") {
      return;
    }
    scheduleMeasure();
    scheduleRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, mode, scale, viewportWidth, dims]);

  // Translation-card height changes alter page offsets.
  useEffect(() => {
    if (status === "ready") {
      scheduleMeasure();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, hideTranslations]);

  // When auto-translation is switched on, report pages that are already visible.
  useEffect(() => {
    autoTranslateRef.current = !!autoTranslate;
    if (autoTranslate && status === "ready") {
      reportVisiblePages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoTranslate, status]);

  /* ---------------------------------------------------------------- toolbar */

  const visiblePageNumbers = useMemo(() => {
    if (pageCount <= 0) return [];
    const radius = paged ? 2 : Math.min(16, Math.max(3, Math.ceil(viewportHeight / Math.max(1, Math.min(layout.defaultHeight, ...layout.heights.values()))) + 1));
    const first = Math.max(1, currentPage - radius), last = Math.min(pageCount, currentPage + radius);
    return Array.from({ length: last - first + 1 }, (_, index) => first + index);
  }, [paged, currentPage, pageCount, layout, viewportHeight]);
  const firstMountedPage = visiblePageNumbers[0] || 1;
  const lastMountedPage = visiblePageNumbers.at(-1) || 0;

  const annotationsByPage = useMemo(() => {
    const map = new Map();
    for (const annotation of annotations || []) {
      if (!annotation || annotation.kind !== "pdf" || !Number.isFinite(annotation.page)) continue;
      const list = map.get(annotation.page) || [];
      list.push(annotation);
      map.set(annotation.page, list);
    }
    return map;
  }, [annotations]);

  useEffect(() => {
    if (!focusAnnotation?.page || status !== "ready") return undefined;
    const timer = setTimeout(() => {
      jumpToPage(clamp(Number(focusAnnotation.page) || 1, 1, pageCountRef.current || 1), "smooth");
    }, 80);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusAnnotation, status]);

  const canZoomIn =
    (mode === "fit" ? effectiveScaleFor(currentPage) : scale) <
    MAX_SCALE - 0.001;
  const canZoomOut =
    (mode === "fit" ? effectiveScaleFor(currentPage) : scale) > MIN_SCALE + 0.001;

  function handlePageInputFocus(event) {
    const input = event.currentTarget;
    setPageInput(String(currentPage));
    setPageInputFocused(true);
    requestAnimationFrame(() => {
      if (input && typeof input.select === "function") {
        input.select();
      }
    });
  }

  function handlePageInputChange(event) {
    const value = event.target.value.replace(/[^\d]/g, "").slice(0, 6);
    setPageInput(value);
  }

  function commitPageInput() {
    if (skipPageCommitRef.current) {
      skipPageCommitRef.current = false;
      setPageInputFocused(false);
      return;
    }
    const parsed = Number.parseInt(pageInput, 10);
    if (Number.isFinite(parsed) && pageCountRef.current > 0) {
      jumpToPage(clamp(parsed, 1, pageCountRef.current), "auto");
    }
    setPageInputFocused(false);
  }

  function handlePageInputBlur() {
    if (!pageInputFocused) {
      return;
    }
    commitPageInput();
  }

  function handlePageInputKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.blur();
    } else if (event.key === "Escape") {
      event.preventDefault();
      skipPageCommitRef.current = true;
      setPageInputFocused(false);
      event.currentTarget.blur();
    }
  }

  const pageInputValue = pageInputFocused ? pageInput : String(currentPage);

  /* ------------------------------------------------------------------ view */

  return (
    <div
      className="dshr-pdf-root"
      ref={rootRef}
      tabIndex={0}
      data-dshr-pdf=""
      role="region"
      aria-label={fileName ? `PDF 阅读器：${fileName}` : "PDF 阅读器"}
      onKeyDown={handleKeyDown}
    >
      {status === "ready" ? (
        <div
          className="dshr-pdf-toolbar"
          role="toolbar"
          aria-label="PDF 阅读工具栏"
        >
          {fileName ? (
            <span className="dshr-pdf-title" title={fileName}>
              {fileName}
            </span>
          ) : (
            <span className="dshr-pdf-title" />
          )}
          <span className="dshr-pdf-toolbar-spacer" />

          <button
            type="button"
            className="dshr-pdf-tbtn"
            title="缩小"
            aria-label="缩小"
            disabled={!canZoomOut}
            onClick={() => zoomBy(1 / ZOOM_FACTOR)}
          >
            −
          </button>
          <span
            className="dshr-pdf-zoom-percent"
            data-scale={fitPage ? "page" : mode === "fit" ? "fit" : scale}
            title={fitPage ? "当前为整页显示" : mode === "fit" ? "当前为适合宽度" : "当前缩放比例"}
          >
            {fitPage ? "整页" : mode === "fit" ? "适宽" : `${Math.round(scale * 100)}%`}
          </span>
          <button
            type="button"
            className="dshr-pdf-tbtn"
            title="放大"
            aria-label="放大"
            disabled={!canZoomIn}
            onClick={() => zoomBy(ZOOM_FACTOR)}
          >
            ＋
          </button>
          <button
            type="button"
            className="dshr-pdf-tbtn dshr-pdf-tbtn-wide"
            data-active={fitPage ? "true" : "false"}
            aria-pressed={fitPage}
            title={fitPage ? "当前整页显示；点击回到适合宽度" : "适合宽度；点击切换为整页显示"}
            onClick={toggleWholePage}
          >
            {fitPage ? "整页" : "适宽"}
          </button>

          <span className="dshr-pdf-toolbar-sep" aria-hidden="true" />

          <button
            type="button"
            className="dshr-pdf-tbtn"
            title="上一页（PageUp）"
            aria-label="上一页"
            disabled={currentPage <= 1}
            onClick={goToPreviousPage}
          >
            ‹
          </button>
          <div className="dshr-pdf-pager">
            <input
              className="dshr-pdf-page-input"
              inputMode="numeric"
              aria-label="页码"
              value={pageInputValue}
              onChange={handlePageInputChange}
              onFocus={handlePageInputFocus}
              onBlur={handlePageInputBlur}
              onKeyDown={handlePageInputKeyDown}
            />
            <span aria-hidden="true">/ {pageCount}</span>
          </div>
          <button
            type="button"
            className="dshr-pdf-tbtn"
            title="下一页（PageDown）"
            aria-label="下一页"
            disabled={currentPage >= pageCount}
            onClick={goToNextPage}
          >
            ›
          </button>
        </div>
      ) : null}

      <div className="dshr-pdf-workspace">
      <div
        className="dshr-pdf-scroll"
        ref={scrollRef}
        data-pdf-page={paged ? currentPage : undefined}
        data-pdf-pages={paged ? pageCount : undefined}
        onMouseDown={handleScrollMouseDown}
        onPointerOver={(event) => {
          if (!linkedEnabledRef.current || event.buttons) return;
          const span = event.target.closest?.('[data-pdf-segment]');
          const page = Number(span?.closest('.dshr-pdf-frame')?.dataset.page);
          if (span && page) activateParagraph(span.dataset.pdfSegment, { origin: 'source' }, page);
        }}
      >
        {status === "ready" ? (
          <div className="dshr-pdf-content">
            {!paged && firstMountedPage > 1 ? <div className="dshr-pdf-spacer" aria-hidden="true" style={{ height: layout.top(firstMountedPage) - layout.paddingTop }} /> : null}
            {visiblePageNumbers.map((pageNumber) => (
              <PdfPageRow
                key={pageNumber}
                pageNumber={pageNumber}
                dim={currentDim(pageNumber)}
                mode={fitPage ? "page" : mode}
                scale={scale}
                viewportWidth={viewportWidth}
                viewportHeight={viewportHeight}
                active={!paged || pageNumber === currentPage}
                rendered={!!renderedPages[pageNumber]}
                registerPageElement={handlePageElement}
                registerFrameElement={handleFrameElement}
                annotations={annotationsByPage.get(pageNumber)}
                onOpenAnnotation={onOpenAnnotation}
              />
            ))}
            {!paged && lastMountedPage < pageCount ? <div className="dshr-pdf-spacer" aria-hidden="true" style={{ height: layout.top(pageCount + 1) - layout.top(lastMountedPage + 1) }} /> : null}
          </div>
        ) : (
          <div
            className="dshr-pdf-status"
            role={status === "error" ? "alert" : "status"}
          >
            {status === "error" ? (
              <>
                <p className="dshr-pdf-status-title dshr-pdf-status-error">
                  PDF 加载失败
                </p>
                <p className="dshr-pdf-status-detail">{error}</p>
                <button
                  type="button"
                  className="dshr-pdf-status-retry"
                  onClick={() => setLoadAttempt((value) => value + 1)}
                >
                  重新加载
                </button>
              </>
            ) : (
              <>
                <span className="dshr-pdf-status-spinner" aria-hidden="true" />
                <p className="dshr-pdf-status-title">正在加载 PDF…</p>
                {progress !== null ? (
                  <p className="dshr-pdf-status-progress">{progress}%</p>
                ) : null}
              </>
            )}
          </div>
        )}
      </div>
      {showTranslationPanel ? <TranslationPanel
        page={currentPage}
        source={pageSources[currentPage]}
        rows={documentId ? translation.pages[currentPage] || [] : (pageSources[currentPage]?.segments || []).map((segment, index) => ({
          ...segment, ...(pageTranslations?.[currentPage]?.segments?.[index] || {}), status: pageTranslations?.[currentPage]?.status || 'queued', error: pageTranslations?.[currentPage]?.error,
        }))}
        activeId={linkedSegment?.page === currentPage ? linkedSegment.id : null}
        originRef={linkOriginRef}
        translation={documentId ? translation : { ...translation, retry: page => {
          reportedPagesRef.current.delete(page);
          onRetryTranslation?.(page);
          reportPageText(page);
        } }}
        onActivate={(id, options) => activateParagraph(id, options, currentPage)}
        onClose={() => { setPanelDismissed(true); onHideTranslations?.(); }}
      /> : null}
      </div>
    </div>
  );
}

PdfViewer.displayName = "PdfViewer";

export default PdfViewer;
