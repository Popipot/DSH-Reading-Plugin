import React from 'react';
import { NoteGlyph } from './glyphs.jsx';
import {
  annotationLabel,
  bandOffset,
  bandRatio,
  hashSeed,
  handDrawnUnderline,
} from './marks.js';

/**
 * Overlay for PDF annotations. Rendered inside `.dshr-pdf-frame`, which is
 * already `position: relative; overflow: hidden` in the PDF stylesheet.
 *
 * Rects are stored normalized to the page frame (`{x,y,w,h}` in 0..1), so the
 * marks redraw automatically when the viewer reflows or zooms; no measuring or
 * ResizeObserver is needed here.
 *
 * The optional `page` prop (additive to the contract) filters annotations when
 * the host does not pre-group them per page. The layer is pointer-transparent
 * except for sticky-note buttons.
 */

function clampUnit(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.min(1, Math.max(0, number));
}

function openFrom(handler, annotationId) {
  if (typeof handler === 'function') handler(annotationId);
}

export function PdfAnnotationLayer({ annotations, onOpenAnnotation, page }) {
  const openRef = React.useRef(onOpenAnnotation);
  openRef.current = onOpenAnnotation;
  const list = Array.isArray(annotations) ? annotations : [];
  const nodes = [];

  for (let index = 0; index < list.length; index += 1) {
    const annotation = list[index];
    if (!annotation || !Array.isArray(annotation.rects) || annotation.rects.length === 0) continue;
    if (annotation.kind && annotation.kind !== 'pdf') continue;
    if (page != null && annotation.page != null && Number(annotation.page) !== Number(page)) continue;

    const style = annotation.style === 'underline' || annotation.style === 'note'
      ? annotation.style
      : 'highlight';
    const color = annotation.color || '#f5d76e';
    const annotationId = annotation.id == null ? '' : String(annotation.id);
    const seed = hashSeed(`${annotationId}|${annotation.createdAt || 0}`);
    const ratio = bandRatio(annotation.width);
    const label = annotationLabel(annotation);
    const showNoteButton = style === 'note'
      || (typeof annotation.note === 'string' && annotation.note.trim().length > 0);
    let lastRect = null;

    for (let rectIndex = 0; rectIndex < annotation.rects.length; rectIndex += 1) {
      const rect = annotation.rects[rectIndex];
      if (!rect || typeof rect !== 'object') continue;
      const x = clampUnit(rect.x);
      const y = clampUnit(rect.y);
      const width = Math.min(clampUnit(rect.w), 1 - x);
      const height = Math.min(clampUnit(rect.h), 1 - y);
      if (!(width > 0.002) || !(height > 0.001)) continue;
      lastRect = { x, y, width, height };
      const key = `${annotationId}:${rectIndex}`;

      if (style === 'underline') {
        const underlineHeight = 5;
        nodes.push(
          <svg
            key={`u:${key}`}
            className="dshr-anno-pdf-underline"
            style={{
              left: `${x * 100}%`,
              top: `calc(${(y + height) * 100}% - ${underlineHeight - 1}px)`,
              width: `${width * 100}%`,
              height: `${underlineHeight}px`,
              '--dshr-anno-color': color,
            }}
            viewBox="0 0 100 6"
            preserveAspectRatio="none"
            data-anno-id={annotationId}
            aria-hidden="true"
            focusable="false"
          >
            <path d={handDrawnUnderline(seed, 100)} />
          </svg>,
        );
      } else {
        const bandHeight = Math.max(height * ratio, 0.004);
        const top = y + height * bandOffset(ratio);
        nodes.push(
          <span
            key={`b:${key}`}
            className="dshr-anno-pdf-band"
            style={{
              left: `${x * 100}%`,
              top: `${top * 100}%`,
              width: `${width * 100}%`,
              height: `${bandHeight * 100}%`,
              '--dshr-anno-color': color,
            }}
            data-anno-id={annotationId}
            aria-hidden="true"
          />,
        );
      }
    }

    if (showNoteButton && lastRect) {
      const right = lastRect.x + lastRect.width;
      const left = Math.min(Math.max(0.005, right + 0.004), 0.972);
      const top = Math.max(0.004, lastRect.y);
      nodes.push(
        <button
          key={`n:${annotationId}`}
          type="button"
          className="dshr-anno-note-btn"
          style={{
            left: `${left * 100}%`,
            top: `${top * 100}%`,
            '--dshr-anno-color': color,
          }}
          data-anno-id={annotationId}
          title={label ? `查看批注：${label}` : '查看批注'}
          aria-label={label ? `查看批注：${label}` : '查看批注'}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => openFrom(openRef.current, annotationId)}
        >
          <NoteGlyph size={12} />
        </button>,
      );
    }
  }

  return (
    <div className="dshr-anno-pdf-layer" data-anno-layer="pdf">
      {nodes}
    </div>
  );
}
