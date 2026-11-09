import { clickPageGutter } from './page-gutter-input.mjs';
import React from 'react';
import { createRoot } from 'react-dom/client';
import PdfViewer, { pdfStyles } from '../web/src/pdf/PdfViewer.jsx';
import { PagedReader } from '../web/src/components/PagedReader.jsx';
import { styles } from '../web/src/styles.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
async function until(check, label, timeout = 20000) {
  const start = performance.now();
  while (!check()) {
    const error = document.querySelector('[role="alert"]');
    if (error) throw new Error(error.textContent);
    if (performance.now() - start > timeout) throw new Error(`timeout: ${label}`);
    await sleep(20);
  }
}
const root = createRoot(document.getElementById('app'));
const results = [];
let options;
function render(patch = {}) {
  options = { ...options, ...patch };
  root.render(<div className="dshr-root" data-reading-mode={options.paged ? 'book' : 'scroll'}>
    <style>{styles + pdfStyles}</style>
    <div className="dshr-reader"><div className="dshr-body">
      <PdfViewer {...options} />
    </div><PagedReader enabled={options.paged} bookMode readerKey="browser-regression" /></div>
  </div>);
}
const input = () => document.querySelector('.dshr-pdf-page-input');
const scroller = () => document.querySelector('.dshr-pdf-scroll');
const page = () => Number(input()?.value);
const activeFrame = () => document.querySelector(`.dshr-pdf-frame[data-page="${page()}"]`);
const ready = () => activeFrame()?.dataset.rendered === 'true';
async function go(target) {
  const descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  input().focus();
  descriptor.set.call(input(), String(target));
  input().dispatchEvent(new Event('input', { bubbles: true }));
  await sleep(25);
  input().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
  await until(() => page() === target && ready(), `go to ${target}`);
}

window.__pdfCheck = { state: 'running' };
const runtimeErrors = [];
window.addEventListener('error', (event) => runtimeErrors.push(event.message));
window.addEventListener('unhandledrejection', (event) => runtimeErrors.push(String(event.reason)));
try {
  const blob = await (await fetch('/fixture.pdf')).blob();
  const started = performance.now();
  let longestTask = 0;
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) longestTask = Math.max(longestTask, entry.duration);
  });
  observer.observe({ type: 'longtask', buffered: true });
  options = { data: blob, initialPage: 500, paged: true, fileName: '1029-page regression PDF' };
  render();
  await until(() => page() === 500 && ready(), 'first canvas');
  results.push({ check: 'open', page: page(), milliseconds: Math.round(performance.now() - started), sourceBytes: blob.size });
  const reader = document.querySelector('.dshr-pdf-root');
  assert(reader.dataset.pdfRenderer === 'worker', 'rasterization fell back to the UI thread');
  assert(Number(reader.dataset.pdfReadBytes) < blob.size / 4, 'opening read the entire large file');
  results.push({ check: 'renderer-and-range', renderer: reader.dataset.pdfRenderer,
    bytesRead: Number(reader.dataset.pdfReadBytes), rangeReads: Number(reader.dataset.pdfRangeReads) });
  const timings = [];
  for (let i = 0; i < 12; i += 1) {
    const target = page() + 1;
    const start = performance.now();
    clickPageGutter(scroller(), 1);
    await until(() => page() === target && ready(), `turn to ${target}`);
    timings.push(Math.round(performance.now() - start));
    // Browser-generated layout and delayed scroll events must not roll it back.
    scroller().dispatchEvent(new Event('scroll'));
    await sleep(40);
    assert(page() === target, 'page rolled back after scroll');
    assert(document.querySelectorAll('.dshr-pdf-canvas').length <= 5, 'too many book canvases');
  }
  await sleep(400);
  assert(page() === 512, 'page rolled back after render settled');
  results.push({ check: 'page-gutter-turns', page: page(), timings });
  document.querySelector('.dshr-pdf-root').focus();
  document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'PageDown', bubbles: true }));
  await until(() => page() === 513 && ready(), 'keyboard PageDown');
  results.push({ check: 'keyboard', page: page() });
  for (let i = 0; i < 10; i += 1) scroller().dispatchEvent(new WheelEvent('wheel', { deltaY: 60, bubbles: true, cancelable: true }));
  await until(() => page() === 514 && ready(), 'trackpad gesture');
  await sleep(250);
  assert(page() === 514, 'one gesture advanced multiple pages');
  results.push({ check: 'wheel-burst', page: page() });
  const visited = new Set();
  let maxResidentPages = 0;
  let maxCacheBytes = 0;
  for (let index = 0; index < 100; index += 1) {
    const direction = index % 60 < 30 ? 1 : -1;
    const target = page() + direction;
    if (index % 3 === 1) {
      scroller().dispatchEvent(new KeyboardEvent('keydown', { key: direction > 0 ? 'PageDown' : 'PageUp', bubbles: true, cancelable: true }));
    } else if (index % 3 === 2) {
      await sleep(230);
      scroller().dispatchEvent(new WheelEvent('wheel', { deltaY: direction * 60, bubbles: true, cancelable: true }));
    } else {
      clickPageGutter(scroller(), direction);
    }
    await until(() => page() === target && ready(), `mixed PDF turn to ${target}`);
    scroller().dispatchEvent(new Event('scroll'));
    await sleep(35);
    assert(page() === target && ready(), `PDF lost readable page ${target} after mixed input`);
    visited.add(target);
    maxResidentPages = Math.max(maxResidentPages, document.querySelectorAll('.dshr-pdf-page').length);
    maxCacheBytes = Math.max(maxCacheBytes, Number(reader.dataset.pdfCacheBytes));
  }
  assert(visited.size >= 30 && maxResidentPages <= 5 && maxCacheBytes <= 48 * 1024 * 1024, 'PDF cache or window budget exceeded');
  results.push({ check: 'b1-navigation-stability', format: 'pdf', acceptedTurns: 100, errors: 0 });
  results.push({ check: 'b1-pdf-residency', distinctPages: visited.size, maxResidentPages, maxCacheBytes });
  await go(1000);
  await until(() => activeFrame().querySelector('.dshr-pdf-text-layer').textContent.length > 0, 'selection text');
  results.push({ check: 'jump-and-text', page: page() });
  document.getElementById('app').style.width = '900px';
  document.getElementById('app').style.height = '650px';
  await sleep(400);
  assert(page() === 1000 && ready(), 'resize changed the active page');
  const previousWidth = activeFrame().querySelector('canvas').width;
  document.querySelector('.dshr-pdf-toolbar button[aria-label="放大"]').click();
  await sleep(400);
  assert(page() === 1000 && ready(), 'zoom changed the active page');
  assert(activeFrame().querySelector('canvas').width !== previousWidth, 'zoom did not rasterize at a new scale');
  document.querySelector('.dshr-pdf-toolbar button[title*="适合宽度"]').click();
  await sleep(300);
  results.push({ check: 'resize-and-zoom', page: page() });
  document.getElementById('app').style.width = '1280px';
  document.getElementById('app').style.height = '800px';
  const translated = [];
  render({ autoTranslate: true, onPageText: (page) => translated.push(page) });
  await sleep(100);
  assert(translated.length === 1 && translated[0] === 1000, 'translation should report the visible page once');
  results.push({ check: 'visible-page-translation', pages: translated.slice() });
  render({ autoTranslate: false });
  render({ paged: false });
  await sleep(400);
  assert(page() === 1000, `continuous mode lost position: ${page()}`);
  assert(document.querySelectorAll('.dshr-pdf-canvas').length <= 7, 'too many continuous canvases');
  assert(document.querySelectorAll('.dshr-pdf-page').length <= 7 && document.querySelectorAll('.dshr-pdf-spacer').length <= 2, 'long document DOM is not virtualized');
  await go(400);
  await sleep(400);
  assert(page() === 400, 'continuous jump rolled back');
  const assertInView = label => {
    const rect = activeFrame().getBoundingClientRect(), viewport = scroller().getBoundingClientRect();
    assert(rect.bottom > viewport.top && rect.top < viewport.bottom, `${label}: active page disappeared into a virtual spacer`);
  };
  document.querySelector('.dshr-pdf-toolbar button[title*="适合宽度"]').click();
  await sleep(400);
  assertInView('fit whole page');
  assert(page() === 400, 'fit whole page lost the current page');
  document.querySelector('.dshr-pdf-toolbar button[title*="适合宽度"]').click();
  await sleep(400);
  assertInView('fit width');
  assert(page() === 400, 'fit width lost the current page');
  results.push({ check: 'continuous-fit-width-whole-page-anchor', page: page() });
  results.push({ check: 'continuous-jump', page: page(), canvases: document.querySelectorAll('.dshr-pdf-canvas').length });
  render({ paged: true });
  await until(() => page() === 400 && ready(), 'book mode restore');
  await sleep(300);
  assert(page() === 400, 'mode switch rolled back');
  results.push({ check: 'mode-switch', page: page(), canvases: document.querySelectorAll('.dshr-pdf-canvas').length });
  root.render(null);
  await sleep(300);
  render();
  await until(() => page() === 500 && ready(), 'reopen after teardown');
  results.push({ check: 'close-and-reopen', page: page() });
  await sleep(200);
  observer.disconnect();
  assert(runtimeErrors.length === 0, `browser errors: ${runtimeErrors.join('; ')}`);
  results.push({ check: 'main-thread', longestTaskMs: Math.round(longestTask) });
  window.__pdfCheck = { state: 'passed', results };
} catch (error) {
  window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results };
}
