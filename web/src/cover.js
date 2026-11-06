import { openPdfDocument, abortError } from './pdf/engine.js';
/**
 * Cover thumbnails for the library.
 *
 * EPUB/MOBI covers come from their package metadata. PDFs use their first page
 * rendered through the same lazy PDF.js bundle the reader uses. Thumbnails are
 * stored as small JPEG data URLs so a book card needs no object-URL lifecycle.
 */

const COVER_MAX_WIDTH = 360;
const COVER_MAX_HEIGHT = 520;

function canvasToCover(canvas) {
  try {
    return canvas.toDataURL('image/jpeg', 0.84);
  } catch {
    return '';
  }
}

function imageToCover(image) {
  const width = Number(image.naturalWidth || image.width) || 0;
  const height = Number(image.naturalHeight || image.height) || 0;
  if (!width || !height) return '';
  const scale = Math.min(COVER_MAX_WIDTH / width, COVER_MAX_HEIGHT / height, 1);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const context = canvas.getContext('2d');
  // Covers with transparency read better on a paper-coloured backing.
  context.fillStyle = '#fbf7ee';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvasToCover(canvas);
}

function loadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = url;
  });
}

async function blobToCover(blob) {
  if (!blob || !String(blob.type || '').startsWith('image/')) return '';
  const url = URL.createObjectURL(blob);
  try {
    const image = await loadImage(url);
    return image ? imageToCover(image) : '';
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function renderPdfCover(blob, signal) {
  const session = await openPdfDocument(blob, { signal });
  let canvas, renderTask;
  const cancel = () => { renderTask?.cancel(); void session.close(); };
  signal?.addEventListener('abort', cancel, { once: true });
  try {
    if (signal?.aborted) throw abortError();
    const page = await session.pdf.getPage(1);
    if (signal?.aborted) throw abortError();
    const base = page.getViewport({ scale: 1 });
    const scale = Math.min(COVER_MAX_WIDTH / base.width, COVER_MAX_HEIGHT / base.height, 1.5);
    const viewport = page.getViewport({ scale });
    canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(viewport.width));
    canvas.height = Math.max(1, Math.round(viewport.height));
    renderTask = page.render({ canvas, viewport, background: '#ffffff' });
    renderTask.onContinue = resume => setTimeout(() => {
      if (signal?.aborted) renderTask.cancel(); else resume();
    }, 16);
    await renderTask.promise;
    if (signal?.aborted) throw abortError();
    return canvasToCover(canvas);
  } finally {
    signal?.removeEventListener('abort', cancel);
    await session.close();
    if (canvas) { canvas.width = 0; canvas.height = 0; }
  }
}

/**
 * @param {{id:string, title:string, format:string, blob:Blob}} record
 * @returns {Promise<{cover?:string, title?:string, author?:string, language?:string}>}
 */
export async function generateCover(record, { signal } = {}) {
  if (signal?.aborted) throw abortError();
  if (!record?.blob) return {};
  const format = String(record.format || '').toLowerCase();
  try {
    if (format === 'pdf') {
      const cover = await renderPdfCover(record.blob, signal);
      return cover ? { cover } : {};
    }
    if (['epub', 'mobi', 'azw', 'azw3'].includes(format)) {
      const { parseBook } = await import('./formats/index.js');
      const fileName = /\.[a-z0-9]+$/iu.test(record.title || '')
        ? record.title
        : `${record.title || 'book'}.${format}`;
      const parsed = await parseBook(record.blob, { fileName, mime: record.blob.type });
      try {
        let cover = '';
        if (parsed.cover) {
          try {
            const response = await fetch(parsed.cover);
            cover = await blobToCover(await response.blob());
          } catch {
            cover = '';
          }
        }
        return {
          ...(cover ? { cover } : {}),
          ...(parsed.title ? { title: parsed.title } : {}),
          ...(parsed.author ? { author: parsed.author } : {}),
          ...(parsed.language ? { language: parsed.language } : {}),
        };
      } finally {
        parsed.dispose?.();
      }
    }
  } catch (error) {
    if (signal?.aborted) throw abortError();
    console.warn('[dsh-reader] cover generation failed', record.title, error);
  }
  return {};
}
