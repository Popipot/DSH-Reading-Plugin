import React from 'react';
import { createRoot } from 'react-dom/client';
import PdfViewer, { pdfStyles } from '../web/src/pdf/PdfViewer.jsx';
import { saveBook, getBook } from '../web/src/storage.js';
import { generateCover } from '../web/src/cover.js';
import { openPdfDocument } from '../web/src/pdf/engine.js';
import { annotationStyles } from '../web/src/annotations/styles.js';

const root = createRoot(document.getElementById('app'));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const results = [], errors = [], longTasks = [];
const workers = new Set();
const workerUrls = new Set();
const NativeWorker = window.Worker;
window.Worker = class extends NativeWorker {
  constructor(...args) { super(...args); workers.add(this); workerUrls.add(String(args[0])); }
  terminate() { workers.delete(this); return super.terminate(); }
};
const assert = (value, message) => { if (!value) throw Error(message); };
window.__pdfCheck = { state: 'running', results };
window.addEventListener('error', e => errors.push(e.message));
window.addEventListener('unhandledrejection', e => errors.push(String(e.reason)));
const reader = () => document.querySelector('.dshr-pdf-root');
const scroll = () => document.querySelector('.dshr-pdf-scroll');
const input = () => document.querySelector('.dshr-pdf-page-input');
const page = () => Number(input()?.value);
const frame = () => document.querySelector(`.dshr-pdf-frame[data-page="${page()}"]`);
async function until(check, label, timeout = 30000) {
  const start = performance.now();
  while (!check()) {
    if (document.querySelector('[role="alert"]')) throw Error(document.querySelector('[role="alert"]').textContent);
    if (performance.now() - start > timeout) throw Error(`timeout: ${label}`);
    await sleep(10);
  }
}
let options, pageCount;
function render(patch) {
  options = { ...options, ...patch };
  root.render(<><style>{pdfStyles + annotationStyles}</style><PdfViewer {...options} onReady={value => { pageCount = value.pageCount; }} /></>);
}
async function go(target) {
  input().focus();
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input(), String(target));
  input().dispatchEvent(new Event('input', { bubbles: true }));
  await sleep(15);
  input().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
  await until(() => page() === target && frame()?.dataset.rendered === 'true', `readable page ${target}`);
}
try {
  const blob = await (await fetch('/fixture.pdf')).blob();
  const book = await saveBook(new File([blob], 'performance.pdf', { type: 'application/pdf' }));
  const start = performance.now();
  const record = await getBook(book.id);
  const acquisition = performance.now() - start;
  const observer = new PerformanceObserver(list => { for (const task of list.getEntries()) longTasks.push(task.duration); });
  observer.observe({ type: 'longtask' });
  render({ data: record.blob, initialPage: 1, paged: true });
  await until(() => frame()?.dataset.rendered === 'true', 'first readable page');
  results.push({ check: 'open-from-indexeddb', bytes: blob.size, pages: pageCount, dpr: devicePixelRatio, indexeddbMs: Math.round(acquisition), firstReadableMs: Math.round(performance.now() - start), bytesRead: Number(reader().dataset.pdfReadBytes), renderer: reader().dataset.pdfRenderer });
  assert(reader().dataset.pdfRenderer === 'worker', 'rendering was not isolated');
  await until(() => frame()?.dataset.pdfQuality === 'full', 'full quality');
  await until(() => frame()?.querySelector('.dshr-pdf-text-layer span[data-pdf-segment]'), 'selectable text on the first page');
  const firstSpan = frame().querySelector('.dshr-pdf-text-layer span[data-pdf-segment]');
  const firstRange = document.createRange();
  firstRange.selectNodeContents(firstSpan);
  const selected = firstRange.getBoundingClientRect(), painted = frame().querySelector('canvas').getBoundingClientRect();
  assert(firstRange.toString().trim() && selected.width > 0 && selected.left >= painted.left && selected.right <= painted.right + 1
    && selected.top >= painted.top && selected.bottom <= painted.bottom + 1, 'native selection drifted outside the painted page');
  if (pageCount > 1) {
    const rect = { x: (selected.left - painted.left) / painted.width, y: (selected.top - painted.top) / painted.height,
      w: selected.width / painted.width, h: selected.height / painted.height };
    const mark = { id: 'a-selection-anchor', kind: 'pdf', style: 'underline', page: 1, rects: [rect] };
    await go(2);
    render({ annotations: [mark], focusAnnotation: mark });
    await until(() => page() === 1 && frame()?.dataset.rendered === 'true' && frame().querySelector('[data-anno-id="a-selection-anchor"]'),
      'annotation reopens the selected page');
    const overlay = frame().querySelector('[data-anno-id="a-selection-anchor"]').getBoundingClientRect();
    const surface = frame().querySelector('canvas').getBoundingClientRect();
    assert(Math.abs(overlay.left - surface.left - rect.x * surface.width) < 1
      && Math.abs(overlay.width - rect.w * surface.width) < 1, 'annotation no longer lines up with the selected text');
    results.push({ check: 'native-selection-and-annotation-anchor', page: page(), dpr: devicePixelRatio });
  }
  const timings = [];
  for (let target = 2; target <= Math.min(8, pageCount); target++) {
    const t = performance.now(); await go(target); timings.push(Math.round(performance.now() - t));
    await until(() => frame()?.dataset.pdfQuality === 'full', `full quality after turn ${target}`);
    assert(page() === target, 'page rolled back');
  }
  // A row outside the DOM window must reuse its independently owned snapshot.
  const before = Number(reader().dataset.pdfCacheHits || 0);
  const recentPage = page();
  const awayPage = recentPage + 3 <= pageCount ? recentPage + 3 : Math.max(1, recentPage - 3);
  await go(awayPage);
  const revisit = performance.now(); await go(recentPage);
  if (pageCount > 3) assert(Number(reader().dataset.pdfCacheHits || 0) > before, 'departed-page cache was not reused');
  results.push({ check: 'complex-page-turns-and-cache', timings, cachedRevisitMs: Math.round(performance.now() - revisit), cacheBytes: Number(reader().dataset.pdfCacheBytes), cacheHits: Number(reader().dataset.pdfCacheHits) });
  if (pageCount > 1) {
    const other = recentPage > 1 ? recentPage - 1 : 2;
    await until(() => frame()?.dataset.pdfQuality === 'full', 'warm first page');
    await go(other); await until(() => frame()?.dataset.pdfQuality === 'full', 'warm second page');
    await go(recentPage);
    const samples = [];
    for (let index = 0; index < 20; index++) {
      const started = performance.now(); await go(index % 2 ? recentPage : other);
      samples.push(Math.round(performance.now() - started));
    }
    results.push({ check: 'cached-turn-latency', samples, p95Ms: samples.toSorted((a, b) => a - b)[18], note: 'includes 15ms input settling and 10ms readiness polling' });
  }
  document.querySelector('[aria-label="放大"]').click();
  assert(frame().dataset.rendered === 'true', 'zoom discarded the readable image');
  await sleep(500);
  render({ paged: false }); await sleep(250);
  await go(Math.max(1, Math.floor(pageCount / 2)));
  await sleep(350);
  assert(page() === Math.max(1, Math.floor(pageCount / 2)), 'mixed-size jump rolled back');
  const anchor = page(); const topBefore = scroll().scrollTop;
  document.getElementById('app').style.width = '800px';
  await sleep(600);
  assert(page() === anchor, 'mixed-size resize lost the current page');
  results.push({ check: 'mixed-size-scroll-zoom-resize', page: page(), scrollBefore: Math.round(topBefore), scrollAfter: Math.round(scroll().scrollTop), rows: document.querySelectorAll('.dshr-pdf-page').length });
  await sleep(100);
  observer.disconnect();
  assert(errors.length === 0, errors.join('; '));
  results.push({ check: 'ui-thread', longestTaskMs: Math.round(Math.max(0, ...longTasks)), longTaskCount: longTasks.length, mainRenders: Number(reader().dataset.pdfMainRenders || 0), workerRenders: Number(reader().dataset.pdfWorkerRenders || 0) });
  assert([...workerUrls].some(url => url.includes('pdf.worker.mjs')) && [...workerUrls].some(url => url.includes('pdf.renderer.mjs')), 'independent parsing and rendering workers were not used');
  root.render(null);
  await until(() => workers.size === 0, 'document worker cleanup', 5000);
  const calibration = await openPdfDocument(blob);
  try {
    const pdfPage = await calibration.pdf.getPage(1);
    for (const [text, lang, rotation] of [
      ['Maße und Länge', 'de', 0],
      ['中文段落和數學', 'zh-CN', 90],
      ['日本語の数式', 'ja', 180],
      ['𝑂(𝑁²𝑑²𝑀⁻¹) 9×', 'en', 270],
    ]) {
      const container = document.createElement('div');
      const reference = document.createElement('canvas');
      reference.lang = lang;
      reference.style.cssText = 'display:none;letter-spacing:normal;word-spacing:normal';
      document.body.append(reference);
      const ctx = reference.getContext('2d');
      ctx.font = `${12 * devicePixelRatio}px sans-serif`;
      const expectedScale = 140 * devicePixelRatio / ctx.measureText(text).width;
      reference.remove();
      const layer = new calibration.engine.TextLayer({
        container,
        viewport: pdfPage.getViewport({ scale: 1, rotation }),
        textContentSource: {
          lang, styles: { sample: { fontFamily: 'sans-serif', ascent: 0.8, descent: -0.2, vertical: false } },
          items: [{ str: text, fontName: 'sample', dir: 'ltr', width: 140, height: 12, transform: [12, 0, 0, 12, 60, 660] }],
        },
      });
      await layer.render();
      const span = layer.textDivs[0];
      assert(span.textContent === text && Math.abs(Number(span.style.getPropertyValue('--scale-x')) - expectedScale) < 0.015,
        `detached measurement changed text geometry for ${lang}`);
      assert(container.dataset.mainRotation === String(rotation), `text rotation changed for ${lang}`);
    }
    assert(![...document.body.querySelectorAll('canvas')].some(canvas => canvas.style.display === 'none'
      && canvas.style.letterSpacing === 'normal' && canvas.style.wordSpacing === 'normal'), 'PDF.js attached a measurement canvas');
    results.push({ check: 'detached-text-measurement', languages: ['de', 'zh-CN', 'ja', 'en'], rotations: [0, 90, 180, 270], dpr: devicePixelRatio });
  } finally {
    await calibration.close();
  }
  const controller = new AbortController();
  const cover = generateCover({ blob, format: 'pdf', title: 'performance cover' }, { signal: controller.signal });
  await until(() => workers.size > 0, 'cover starts in background');
  const cancelStarted = performance.now();
  controller.abort();
  await cover.then(() => { throw Error('cover ignored cancellation'); }, error => assert(error.name === 'AbortError', 'cover failed with unexpected error'));
  await until(() => workers.size === 0, 'cover worker cleanup', 5000);
  const releasedMs = Math.round(performance.now() - cancelStarted);
  assert(releasedMs <= 5000, 'cover worker cleanup exceeded five seconds');
  results.push({ check: 'close-and-cover-cancel-release-workers', liveWorkers: workers.size, releasedMs,
    workers: [...workerUrls].map(url => url.split('/').at(-1)) });
  // Leave the screenshot on a readable page after teardown assertions.
  render({ paged: true, initialPage: 1 });
  await until(() => frame()?.dataset.rendered === 'true', 'reopen after cover cancellation');
  assert(errors.length === 0, errors.join('; '));
  window.__pdfCheck = { state: 'passed', results };
} catch (error) { window.__pdfCheck = { state: 'failed', error: error.stack, results }; }
