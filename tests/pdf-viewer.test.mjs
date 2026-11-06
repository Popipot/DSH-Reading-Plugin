import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

// Exercise the actual component/effects with an asynchronous PDF engine. Only
// PDF decoding and browser geometry are replaced; navigation is production code.
const source = await readFile(new URL('../web/src/pdf/PdfViewer.jsx', import.meta.url), 'utf8');
const bundle = await build({
  stdin: {
    contents: source,
    resolveDir: fileURLToPath(new URL('../web/src/pdf/', import.meta.url)),
    loader: 'jsx',
  },
  bundle: true, write: false, platform: 'node', format: 'cjs',
  external: ['react'], jsx: 'automatic',
  plugins: [{ name: 'mock-pdf-engine', setup(builder) {
    builder.onLoad({ filter: /pdf[\\/]engine\.js$/ }, async ({ path }) => ({
      contents: (await readFile(path, 'utf8')).replace('import(engineModuleUrl())', 'Promise.resolve(globalThis.__pdfTestEngine)'), loader: 'js',
    }));
  } }],
});
const module = { exports: {} };
new Function('require', 'module', 'exports', bundle.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { PdfViewer } = module.exports;
const dom = new JSDOM('<!doctype html><div id="mount"></div>', { pretendToBeVisual: true, url: 'http://localhost/' });
for (const key of ['window', 'document', 'HTMLElement', 'Element', 'Node', 'CustomEvent', 'DOMRect']) globalThis[key] = dom.window[key];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.getComputedStyle = dom.window.getComputedStyle;
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
globalThis.Worker = class Worker {};
const observers = [];
globalThis.ResizeObserver = class {
  constructor(callback) { this.callback = callback; }
  observe() {}
  disconnect() {}
};
globalThis.IntersectionObserver = class {
  constructor(callback) { this.callback = callback; this.targets = new Set(); observers.push(this); }
  observe(target) { this.targets.add(target); }
  unobserve(target) { this.targets.delete(target); }
  disconnect() { this.targets.clear(); }
};
Object.defineProperties(dom.window.HTMLElement.prototype, {
  clientWidth: { get: () => 800 },
  clientHeight: { get: () => 600 },
});
dom.window.HTMLElement.prototype.scrollTo = function ({ top }) {
  this.scrollTop = top;
  this.dispatchEvent(new CustomEvent('scroll'));
};
dom.window.HTMLElement.prototype.getBoundingClientRect = function () {
  const row = this.closest('[data-page]');
  if (row?.style.display === 'none') return new DOMRect(0, 0, 0, 0);
  const page = Number(row?.dataset.page || 1);
  const scrollTop = row?.closest('.dshr-pdf-scroll')?.scrollTop || 0;
  return new DOMRect(0, row ? (page - 1) * 812 - scrollTop : 0, 800, row ? 792 : 600);
};
dom.window.HTMLCanvasElement.prototype.getContext = () => ({
  save() {}, restore() {}, fillRect() {}, drawImage() {},
});

let metrics;
let renderDelay = 25;
let blockedWorker = false;
let pageWidth = 612, pageHeight = 792;
globalThis.__pdfTestEngine = {
  GlobalWorkerOptions: {},
  PDFDataRangeTransport: class { constructor(length, initialData) { this.length = length; this.initialData = initialData; } },
  PDFWorker: class {
    constructor() { this.port = blockedWorker ? {} : new Worker(); this.promise = Promise.resolve(); }
    destroy() { metrics.workersDestroyed += 1; }
  },
  TextLayer: class {
    constructor({ container }) { this.container = container; }
    render() { this.container.textContent = 'selectable PDF text'; return Promise.resolve(); }
    cancel() {}
  },
  getDocument(options) {
    metrics.sources.push(options);
    const doc = {
      numPages: 1029,
      async getPage(pageNumber) {
        return {
          getViewport: ({ scale }) => ({ width: pageWidth * scale, height: pageHeight * scale }),
          cleanup() { metrics.cleaned.add(pageNumber); },
          async getTextContent() { return { items: [] }; },
          render() {
            metrics.renders.push(pageNumber);
            metrics.active.set(pageNumber, (metrics.active.get(pageNumber) || 0) + 1);
            assert.equal(metrics.active.get(pageNumber), 1, 'a canvas must have only one render');
            let finish;
            let settled = false;
            const promise = new Promise((resolve) => { finish = resolve; });
            const settle = () => {
              if (settled) return;
              settled = true;
              metrics.active.set(pageNumber, metrics.active.get(pageNumber) - 1);
              finish();
            };
            const timer = setTimeout(settle, renderDelay);
            return { promise, cancel() { clearTimeout(timer); metrics.cancelled += 1; settle(); } };
          },
        };
      },
      destroy() { return Promise.resolve(); },
    };
    return { promise: Promise.resolve(doc), destroy() { return Promise.resolve(); } };
  },
};

const pause = (ms = 45) => act(() => new Promise((resolve) => setTimeout(resolve, ms)));
async function mount(props = {}) {
  metrics = { sources: [], renders: [], active: new Map(), cleaned: new Set(), cancelled: 0, workersDestroyed: 0 };
  observers.length = 0;
  const changes = [];
  const data = new Uint8Array([1, 2, 3]);
  const root = createRoot(document.getElementById('mount'));
  let options = { data, initialPage: 50, paged: true, onPageChange: (page) => changes.push(page), ...props };
  const update = async (patch) => {
    options = { ...options, ...patch };
    await act(() => root.render(React.createElement(PdfViewer, options)));
    await pause();
  };
  await update({});
  await pause();
  return {
    changes, update,
    page: () => Number(document.querySelector('.dshr-pdf-page-input')?.value),
    async turn(direction = 1) {
      await act(() => document.querySelector('.dshr-pdf-scroll').dispatchEvent(new CustomEvent('dshr-pdf-page-turn', { detail: direction })));
    },
    async close() { await act(() => root.unmount()); await pause(30); },
  };
}

test('book page stays authoritative after scroll, resize and changing initialPage prop', async () => {
  const view = await mount();
  try {
    assert.equal(view.page(), 50);
    await view.turn();
    await pause();
    assert.equal(view.page(), 51);
    await act(() => document.querySelector('.dshr-pdf-scroll').dispatchEvent(new CustomEvent('scroll')));
    await view.update({ initialPage: 2 });
    await pause(220);
    assert.equal(view.page(), 51);
    assert.deepEqual(view.changes, [51]);
  } finally { await view.close(); }
});

test('rapid page turns are not overwritten and both layouts bound expensive page DOM', async () => {
  const view = await mount();
  try {
    await act(() => {
      for (let i = 0; i < 20; i += 1) document.querySelector('.dshr-pdf-scroll').dispatchEvent(new CustomEvent('dshr-pdf-page-turn', { detail: 1 }));
    });
    await pause(250);
    assert.equal(view.page(), 70);
    assert.ok(document.querySelectorAll('canvas').length <= 5);
    await view.update({ paged: false });
    assert.equal(view.page(), 70);
    assert.ok(document.querySelectorAll('canvas').length <= 7);
    assert.equal(document.querySelectorAll('.dshr-pdf-slot').length, 0);
    assert.equal(document.querySelectorAll('.dshr-pdf-spacer').length, 2);
    await view.update({ paged: true });
    assert.equal(view.page(), 70);
    assert.ok(metrics.cleaned.has(50), 'departed page resources are cleaned');
    assert.ok([...metrics.active.values()].every((count) => count <= 1));
  } finally { await view.close(); }
});

test('repeated scheduling never cancels an in-flight page render', async () => {
  renderDelay = 260;
  const view = await mount();
  try {
    await view.update({ paged: false });
    const frame = document.querySelector('.dshr-pdf-frame[data-page="50"]');
    await act(() => {
      for (let i = 0; i < 12; i += 1) {
        for (const observer of observers) observer.callback([{ target: frame, isIntersecting: true }]);
      }
    });
    await pause(350);
    assert.equal(metrics.cancelled, 0);
    assert.equal(metrics.renders.filter((page) => page === 50).length, 1);
  } finally { await view.close(); renderDelay = 25; }
});

test('Blob source uses random-access transport and aborts it on close', async () => {
  const blob = new Blob(['a large PDF source']);
  const view = await mount({ data: blob });
  const range = metrics.sources[0].range;
  try {
    assert.equal(range.length, blob.size);
    assert.equal(metrics.sources[0].url, undefined);
    assert.equal(metrics.sources[0].data, undefined);
    assert.equal(blob.size, 18);
  } finally { await view.close(); }
  assert.equal(range.aborted, true);
});

test('leaving and revisiting a page during rendering paints the new canvas', async () => {
  renderDelay = 180;
  const view = await mount();
  try {
    await act(() => {
      for (let i = 0; i < 8; i += 1) document.querySelector('.dshr-pdf-scroll').dispatchEvent(new CustomEvent('dshr-pdf-page-turn', { detail: 1 }));
    });
    await pause(20);
    await act(() => {
      for (let i = 0; i < 8; i += 1) document.querySelector('.dshr-pdf-scroll').dispatchEvent(new CustomEvent('dshr-pdf-page-turn', { detail: -1 }));
    });
    await pause(450);
    assert.equal(view.page(), 50);
    assert.equal(document.querySelector('.dshr-pdf-frame[data-page="50"]').dataset.rendered, 'true');
  } finally { await view.close(); renderDelay = 25; }
});

test('byte input is copied without transferring/detaching the caller buffer', async () => {
  const bytes = new Uint8Array([1, 2, 3, 4]);
  const view = await mount({ data: bytes });
  try {
    assert.notEqual(metrics.sources[0].data.buffer, bytes.buffer);
    assert.deepEqual(metrics.sources[0].data, bytes);
    assert.equal(bytes.byteLength, 4);
  } finally { await view.close(); }
});

test('blocked worker shows an error before starting PDF parsing', async () => {
  blockedWorker = true;
  const view = await mount();
  try {
    assert.match(document.querySelector('[role="alert"]').textContent, /后台线程不可用/);
    assert.equal(metrics.sources.length, 0);
  } finally { await view.close(); blockedWorker = false; }
});

test('snapshot allocation failure leaves the PDF readable and selectable', async () => {
  globalThis.createImageBitmap = async () => { throw new DOMException('Out of memory', 'QuotaExceededError'); };
  const view = await mount();
  try {
    await pause(100);
    const frame = document.querySelector('.dshr-pdf-frame[data-page="50"]');
    assert.equal(frame.dataset.rendered, 'true');
    assert.equal(frame.querySelector('.dshr-pdf-text-layer').textContent, 'selectable PDF text');
  } finally { await view.close(); delete globalThis.createImageBitmap; }
});

test('a rendering neighbour promoted to current page upgrades from preview to HiDPI', async () => {
  globalThis.devicePixelRatio = 2;
  renderDelay = 180;
  const view = await mount();
  try {
    await pause(430);
    await view.turn();
    await pause(600);
    const frame = document.querySelector('.dshr-pdf-frame[data-page="51"]');
    assert.equal(frame.dataset.pdfQuality, 'full');
    assert.ok(metrics.renders.filter(page => page === 51).length >= 2);
  } finally { await view.close(); renderDelay = 25; delete globalThis.devicePixelRatio; }
});

test('extreme page dimensions cannot override canvas memory caps when zooming', async () => {
  pageWidth = pageHeight = 500000;
  const view = await mount();
  try {
    await act(() => document.querySelector('[aria-label="放大"]').click());
    await pause(300);
    const canvas = document.querySelector('.dshr-pdf-frame[data-page="50"] canvas');
    assert.ok(canvas.width <= 8192 && canvas.height <= 8192);
    assert.ok(canvas.width * canvas.height <= 10000000);
    assert.equal(view.page(), 50);
  } finally { await view.close(); pageWidth = 612; pageHeight = 792; }
});

after(() => dom.window.close());
