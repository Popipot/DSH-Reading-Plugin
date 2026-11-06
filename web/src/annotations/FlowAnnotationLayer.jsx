import React from 'react';
import { resolveFlowRanges } from './model.js';
import { NoteGlyph } from './glyphs.jsx';
import {
  annotationLabel,
  bandOffset,
  bandRatio,
  hashSeed,
  handDrawnUnderline,
} from './marks.js';

/**
 * Overlay that renders flow-document annotations inside `.dshr-content`.
 *
 * Integration contract (Lead):
 *   - Mount as a child of `.dshr-content` (or of an element inside it, as long
 *     as no `.dshr-block` positioned ancestor wraps it): positions are measured
 *     against the layer's own box, which lives in the scroller's content space.
 *   - `containerRef` must be the same ref used by FlowReader for `.dshr-content`.
 *   - `annotations` may contain the whole book; the layer filters by chapter and
 *     resolves only what is visible in the current DOM.
 *
 * The layer is pointer-transparent. Only sticky-note buttons receive pointer
 * events; every other mark lets mouse drags fall through to the native text
 * selection underneath.
 */

function rectOverlapRatio(left, right) {
  const overlapWidth = Math.min(left.left + left.width, right.left + right.width) - Math.max(left.left, right.left);
  const overlapHeight = Math.min(left.top + left.height, right.top + right.height) - Math.max(left.top, right.top);
  if (overlapWidth <= 0 || overlapHeight <= 0) return 0;
  const overlap = overlapWidth * overlapHeight;
  const smaller = Math.min(left.width * left.height, right.width * right.height);
  return smaller > 0 ? overlap / smaller : 0;
}

function readRectList(range) {
  const rects = [];
  if (!range) return rects;
  try {
    const list = typeof range.getClientRects === 'function' ? range.getClientRects() : null;
    if (list && typeof list.length === 'number') {
      for (let index = 0; index < list.length; index += 1) {
        const rect = list[index];
        if (!rect) continue;
        const width = Number(rect.width) || 0;
        const height = Number(rect.height) || 0;
        if (width <= 0 || height <= 0) continue;
        rects.push({
          left: Number(rect.left) || 0,
          top: Number(rect.top) || 0,
          width,
          height,
        });
      }
    }
  } catch {
    /* Selection ranges should always be readable; a detached range is fine. */
  }
  if (rects.length === 0) {
    try {
      const rect = typeof range.getBoundingClientRect === 'function' ? range.getBoundingClientRect() : null;
      if (rect && (Number(rect.width) || 0) > 0 && (Number(rect.height) || 0) > 0) {
        rects.push({
          left: Number(rect.left) || 0,
          top: Number(rect.top) || 0,
          width: Number(rect.width) || 0,
          height: Number(rect.height) || 0,
        });
      }
    } catch {
      /* ignore: an unlayouted range just produces no marks */
    }
  }
  if (rects.length <= 1) return rects;
  // Some engines return one rect per inline element as well as per line; keep
  // only the first of each strongly overlapping pair so a mark is painted once.
  const deduped = [];
  for (let index = 0; index < rects.length; index += 1) {
    const candidate = rects[index];
    let duplicate = false;
    for (let existingIndex = 0; existingIndex < deduped.length; existingIndex += 1) {
      if (rectOverlapRatio(candidate, deduped[existingIndex]) > 0.55) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) deduped.push(candidate);
  }
  return deduped;
}

function belongsToChapter(annotation, chapterId) {
  if (!annotation) return false;
  if (annotation.kind && annotation.kind !== 'flow') return false;
  if (!chapterId) return true;
  if (annotation.chapterId == null) return true;
  return annotation.chapterId === chapterId;
}

function sameMarks(left, right) {
  if (left === right) return true;
  if (!left || !right || left.length !== right.length) return false;
  for (let index = 0; index < left.length; index += 1) {
    const a = left[index];
    const b = right[index];
    if (
      a.type !== b.type ||
      a.key !== b.key ||
      a.annotationId !== b.annotationId ||
      a.x !== b.x ||
      a.y !== b.y ||
      a.width !== b.width ||
      a.height !== b.height ||
      a.color !== b.color ||
      a.path !== b.path ||
      a.isNote !== b.isNote ||
      a.label !== b.label
    ) {
      return false;
    }
  }
  return true;
}

export function FlowAnnotationLayer({
  containerRef,
  annotations,
  chapterId,
  onOpenAnnotation,
  layoutVersion,
}) {
  const layerRef = React.useRef(null);
  const rafRef = React.useRef(0);
  const latestRef = React.useRef({ annotations, chapterId, onOpenAnnotation });
  latestRef.current = { annotations, chapterId, onOpenAnnotation };
  const [renderState, setRenderState] = React.useState({ height: 0, marks: [] });

  const recompute = React.useCallback(() => {
    const layer = layerRef.current;
    const container = containerRef && containerRef.current ? containerRef.current : null;
    if (!layer || !container) return;
    let base;
    try {
      base = layer.getBoundingClientRect();
    } catch {
      return;
    }
    if (!base) return;

    const { annotations: allAnnotations, chapterId: currentChapter } = latestRef.current;
    const list = Array.isArray(allAnnotations) ? allAnnotations : [];
    const containerWidth = container.clientWidth || (base && container.getBoundingClientRect().width) || 0;
    // Never measure `container.scrollHeight`: the overlay is itself absolutely
    // positioned inside the scroller, so using it as a baseline would feed the
    // layer's own height back into the next measurement and grow forever.
    let maxBottom = 0;
    let content = null;
    try {
      content = container.querySelector('.dshr-content__inner');
      if (!content) {
        for (let child = container.firstElementChild; child; child = child.nextElementSibling) {
          if (child === layer || (child.classList && child.classList.contains('dshr-anno-layer'))) continue;
          content = child;
          break;
        }
      }
    } catch {
      content = null;
    }
    if (content) {
      try {
        const contentRect = content.getBoundingClientRect();
        maxBottom = Math.max(0, contentRect.top - base.top + contentRect.height);
      } catch {
        maxBottom = 0;
      }
    }
    const marks = [];

    for (let index = 0; index < list.length; index += 1) {
      const annotation = list[index];
      if (!belongsToChapter(annotation, currentChapter)) continue;
      let resolved;
      try {
        resolved = resolveFlowRanges(container, annotation);
      } catch {
        continue;
      }
      if (!Array.isArray(resolved) || resolved.length === 0) continue;

      const style = annotation.style === 'underline' || annotation.style === 'note'
        ? annotation.style
        : 'highlight';
      const color = annotation.color || '#f5d76e';
      const seed = hashSeed(`${annotation.id || ''}|${annotation.createdAt || 0}`);
      const ratio = bandRatio(annotation.width);
      const annotationId = annotation.id == null ? '' : String(annotation.id);
      const showNoteButton = style === 'note'
        || (typeof annotation.note === 'string' && annotation.note.trim().length > 0);
      const label = annotationLabel(annotation);
      let lastRect = null;

      for (let rangeIndex = 0; rangeIndex < resolved.length; rangeIndex += 1) {
        const item = resolved[rangeIndex];
        const rects = readRectList(item && item.range);
        for (let rectIndex = 0; rectIndex < rects.length; rectIndex += 1) {
          const rect = rects[rectIndex];
          const rectLeft = rect.left - base.left;
          const rectTop = rect.top - base.top;
          const key = `${annotationId}:${rangeIndex}:${rectIndex}`;
          lastRect = { x: rectLeft, y: rectTop, width: rect.width, height: rect.height };
          if (style === 'underline') {
            const width = rect.width + 2;
            marks.push({
              type: 'underline',
              key: `u:${key}`,
              annotationId,
              x: rectLeft - 1,
              y: rectTop + rect.height - 7.2,
              width,
              height: 8,
              color,
              path: handDrawnUnderline(seed, width),
              isNote: false,
              label,
            });
          } else {
            const height = Math.max(3.5, rect.height * ratio);
            marks.push({
              type: 'band',
              key: `b:${key}`,
              annotationId,
              x: rectLeft - 1,
              y: rectTop + rect.height * bandOffset(ratio),
              width: rect.width + 2,
              height,
              color,
              path: '',
              isNote: style === 'note',
              label,
            });
          }
          maxBottom = Math.max(maxBottom, rectTop + rect.height + 8);
        }
      }

      if (showNoteButton && lastRect) {
        const left = Math.min(
          Math.max(2, lastRect.x + lastRect.width + 3),
          Math.max(2, containerWidth - 21),
        );
        marks.push({
          type: 'note',
          key: `n:${annotationId}`,
          annotationId,
          x: left,
          y: Math.max(0, lastRect.y - 1),
          width: 19,
          height: 19,
          color,
          path: '',
          isNote: true,
          label,
        });
      }
    }

    const height = Math.max(0, Math.ceil(maxBottom + 8));
    setRenderState((previous) => (
      previous.height === height && sameMarks(previous.marks, marks)
        ? previous
        : { height, marks }
    ));
  }, [containerRef]);

  const schedule = React.useCallback(() => {
    if (typeof window === 'undefined') return;
    if (rafRef.current) return;
    const run = () => {
      rafRef.current = 0;
      recompute();
    };
    rafRef.current = typeof window.requestAnimationFrame === 'function'
      ? window.requestAnimationFrame(run)
      : window.setTimeout(run, 16);
  }, [recompute]);

  // One-shot wiring: resize, mutations (translations, chapter switches),
  // fonts, late image layout and (only when the layer is not itself inside the
  // scroller) scroll.
  React.useEffect(() => {
    const container = containerRef && containerRef.current ? containerRef.current : null;
    const layer = layerRef.current;
    if (!container || !layer || typeof window === 'undefined') return undefined;

    const timers = [];
    schedule();
    timers.push(window.setTimeout(schedule, 80));

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => schedule());
      try {
        observer.observe(container);
        const parent = layer.parentElement;
        if (parent && parent !== container) observer.observe(parent);
        // Watching the prose column (not just the scroller) catches font size,
        // line-height, width and translation growth even when the outer box
        // does not change and the host forgets to bump layoutVersion.
        const content = container.querySelector('.dshr-content__inner');
        if (content && !content.contains(layer)) observer.observe(content);
      } catch {
        /* observe() can throw for detached nodes during teardown */
      }
      resizeObserver = observer;
    }

    let mutationObserver = null;
    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver((records) => {
        for (let index = 0; index < records.length; index += 1) {
          const target = records[index].target;
          if (layer.contains(target)) continue;
          schedule();
          return;
        }
      });
      try {
        mutationObserver.observe(container, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true,
          attributeFilter: ['class', 'style', 'data-rendered'],
        });
      } catch {
        /* ignore */
      }
    }

    const handleViewport = () => schedule();
    const handleLoad = (event) => {
      if (!layer.contains(event.target)) schedule();
    };
    window.addEventListener('resize', handleViewport);
    container.addEventListener('load', handleLoad, true);
    const anchored = container.contains(layer);
    if (!anchored) container.addEventListener('scroll', handleViewport, { passive: true });

    let fontListener = null;
    const fonts = typeof document !== 'undefined' ? document.fonts : null;
    if (fonts && typeof fonts.ready === 'object' && typeof fonts.ready.then === 'function') {
      fonts.ready.then(() => schedule()).catch(() => {});
    }
    if (fonts && typeof fonts.addEventListener === 'function') {
      fontListener = () => schedule();
      try {
        fonts.addEventListener('loadingdone', fontListener);
      } catch {
        fontListener = null;
      }
    }

    return () => {
      for (let index = 0; index < timers.length; index += 1) window.clearTimeout(timers[index]);
      if (rafRef.current) {
        if (typeof window.cancelAnimationFrame === 'function') window.cancelAnimationFrame(rafRef.current);
        else window.clearTimeout(rafRef.current);
        rafRef.current = 0;
      }
      if (resizeObserver) resizeObserver.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      window.removeEventListener('resize', handleViewport);
      container.removeEventListener('load', handleLoad, true);
      if (!anchored) container.removeEventListener('scroll', handleViewport);
      if (fonts && fontListener) {
        try {
          fonts.removeEventListener('loadingdone', fontListener);
        } catch {
          /* ignore */
        }
      }
    };
  }, [containerRef, schedule]);

  // Recompute whenever the data or the reader layout version changes. The
  // second pass catches the frame in which fonts/images have just settled.
  React.useEffect(() => {
    schedule();
    if (typeof window === 'undefined') return undefined;
    const timer = window.setTimeout(schedule, 40);
    return () => window.clearTimeout(timer);
  }, [annotations, chapterId, layoutVersion, schedule]);

  return (
    <div
      ref={layerRef}
      className="dshr-anno-layer"
      style={renderState.height > 0 ? { height: `${renderState.height}px` } : undefined}
      data-anno-layer="flow"
    >
      {renderState.marks.map((mark) => {
        if (mark.type === 'note') {
          return (
            <button
              key={mark.key}
              type="button"
              className="dshr-anno-note-btn"
              style={{
                left: `${mark.x}px`,
                top: `${mark.y}px`,
                '--dshr-anno-color': mark.color,
              }}
              data-anno-id={mark.annotationId}
              title={mark.label ? `查看批注：${mark.label}` : '查看批注'}
              aria-label={mark.label ? `查看批注：${mark.label}` : '查看批注'}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                const callback = latestRef.current.onOpenAnnotation;
                if (typeof callback === 'function') callback(mark.annotationId);
              }}
            >
              <NoteGlyph size={12} />
            </button>
          );
        }
        if (mark.type === 'underline') {
          const viewWidth = Math.max(2, Math.round(mark.width * 100) / 100);
          return (
            <svg
              key={mark.key}
              className="dshr-anno-underline"
              style={{
                left: `${mark.x}px`,
                top: `${mark.y}px`,
                width: `${mark.width}px`,
                height: `${mark.height}px`,
                '--dshr-anno-color': mark.color,
              }}
              viewBox={`0 0 ${viewWidth} 8`}
              preserveAspectRatio="none"
              data-anno-id={mark.annotationId}
              aria-hidden="true"
              focusable="false"
            >
              <path d={mark.path} />
            </svg>
          );
        }
        return (
          <span
            key={mark.key}
            className={`dshr-anno-band${mark.isNote ? ' dshr-anno-band--note' : ''}`}
            style={{
              left: `${mark.x}px`,
              top: `${mark.y}px`,
              width: `${mark.width}px`,
              height: `${mark.height}px`,
              '--dshr-anno-color': mark.color,
            }}
            data-anno-id={mark.annotationId}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
