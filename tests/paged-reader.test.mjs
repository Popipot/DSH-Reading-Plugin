import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

const source = await readFile(new URL('../web/src/components/PagedReader.jsx', import.meta.url), 'utf8');
const bundled = await build({
  stdin: { contents: source.replace('collectFlowLines(scroll, stage)', 'globalThis.__flowLines(scroll)'),
    resolveDir: fileURLToPath(new URL('../web/src/components/', import.meta.url)), loader: 'jsx' },
  write: false, bundle: true, format: 'cjs', platform: 'node', external: ['react'], jsx: 'automatic',
});
const module = { exports: {} };
new Function('require', 'module', 'exports', bundled.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
const { PagedReader } = module.exports;
const dom = new JSDOM('<!doctype html><div id="mount"></div>', { pretendToBeVisual: true, url: 'http://localhost' });
for (const key of ['window', 'document', 'Element', 'HTMLElement', 'CustomEvent', 'DOMRect']) globalThis[key] = dom.window[key];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
let resizeObservers = [];
globalThis.ResizeObserver = class {
  constructor(callback) { this.callback = callback; resizeObservers.push(this); }
  observe() {}
  disconnect() {}
};
globalThis.MutationObserver = class { observe() {} disconnect() {} };
Object.defineProperties(HTMLElement.prototype, {
  clientWidth: { get: () => 800 }, clientHeight: { get: () => 600 },
  offsetHeight: { get() { return Number.parseFloat(this.style.height) || 0; } },
  scrollHeight: { get() { return 5000 + (this.querySelector('.dshr-page-tail')?.offsetHeight || 0); } },
});
HTMLElement.prototype.getBoundingClientRect = function () {
  if (this.classList.contains('paragraph')) return new DOMRect(0, -(this.closest('.dshr-content')?.scrollTop || 0), 800, 4500);
  return new DOMRect(0, 0, 800, 600);
};
const effects = new Set();
let hangNextAnimation = false;
HTMLElement.prototype.animate = function () {
  let resolve;
  let reject;
  const effect = { effect: { getComputedTiming: () => ({ progress: 0.5 }) },
    finished: new Promise((yes, no) => { resolve = yes; reject = no; }),
    cancel() { clearTimeout(timer); effects.delete(effect); reject(new Error('cancelled')); } };
  const timer = hangNextAnimation ? undefined : setTimeout(() => { effects.delete(effect); resolve(); }, 15);
  hangNextAnimation = false;
  effects.add(effect);
  return effect;
};
globalThis.__flowLines = scroll => Array.from({ length: 130 }, (_, i) => ({
  top: 48 + i * 35.25, bottom: 75.5 + i * 35.25, element: scroll.querySelector('.paragraph'),
}));
const pause = (ms = 65) => act(() => new Promise(resolve => setTimeout(resolve, ms)));
async function mount(count = 1) {
  resizeObservers = [];
  const root = createRoot(document.getElementById('mount'));
  let animation = 'slide';
  const render = async () => act(() => root.render(React.createElement(React.Fragment, null,
    ...Array.from({ length: count }, (_, index) => React.createElement('div', { className: 'dshr-root', key: index },
      React.createElement('div', { className: 'dshr-reader' },
        React.createElement('div', { className: 'dshr-content' }, React.createElement('div', { className: 'dshr-content__inner' }, React.createElement('div', { className: 'paragraph' }, 'Content'))),
        React.createElement(PagedReader, { enabled: true, bookMode: true, animation, readerKey: `book-${index}` })))))));
  await render();
  await pause();
  const containers = [...document.querySelectorAll('.dshr-reader')];
  const scroll = (index = 0) => containers[index].querySelector('.dshr-content');
  const page = (index = 0) => Number(scroll(index).dataset.readerPage);
  const next = (index = 0) => containers[index].querySelector('.dshr-paged-next');
  return { page, scroll, next,
    async animation(value) { animation = value; await render(); await pause(); },
    async close() { await act(() => root.unmount()); await pause(30); },
  };
}

test('repeated turns, scroll events and resize notifications cannot roll back an accepted page', async () => {
  const view = await mount();
  try {
    for (let i = 0; i < 6; i += 1) {
      await act(() => view.next().click());
      await pause();
      assert.equal(view.page(), i + 2);
      const target = view.scroll().scrollTop;
      await act(() => {
        view.scroll().scrollTop = 0;
        view.scroll().dispatchEvent(new CustomEvent('scroll'));
        resizeObservers.forEach(observer => observer.callback([]));
      });
      await pause();
      assert.equal(view.page(), i + 2);
      assert.equal(view.scroll().scrollTop, target);
    }
    await view.animation('flip');
    assert.equal(view.page(), 7, 'changing animation must not restart pagination');
  } finally { await view.close(); }
});

test('rapid clicks queue turns and cancelled animations release navigation', async () => {
  const view = await mount();
  try {
    await act(() => { for (let i = 0; i < 5; i += 1) view.next().click(); });
    await pause(260);
    assert.equal(view.page(), 6);
    await act(() => { view.next().click(); for (const effect of effects) effect.cancel(); });
    await pause();
    assert.equal(view.page(), 7);
    await act(() => view.next().click());
    await pause();
    assert.equal(view.page(), 8);
  } finally { await view.close(); }
});

test('accepted navigation advances the live document underneath an isolated opaque transition', async () => {
  const view = await mount();
  try {
    hangNextAnimation = true;
    await act(() => view.next().click());
    const overlay = document.querySelector('.dshr-flow-transition');
    assert.ok(overlay, 'must exercise a real transition rather than the instant fallback');
    assert.equal(overlay.querySelectorAll('.dshr-turn-page').length, 2);
    assert.equal(overlay.getAttribute('aria-hidden'), 'true');
    assert.equal(view.page(), 2);
    assert.equal(view.scroll().scrollTop, Number(view.scroll().dataset.readerTarget));
    assert.equal(view.scroll().querySelector('.dshr-content__inner').style.transform, '');
    await act(() => view.scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { top: 0 } })));
    await pause();
    assert.equal(view.page(), 1);
    assert.equal(document.querySelector('.dshr-flow-transition'), null);
    assert.equal(effects.size, 0, 'explicit navigation must release every paired effect');
  } finally { await view.close(); }
});

test('simultaneous reader instances receive only their own button navigation', async () => {
  const view = await mount(2);
  try {
    await act(() => view.next(1).click());
    await pause();
    assert.equal(view.page(0), 1);
    assert.equal(view.page(1), 2);
  } finally { await view.close(); }
});

test('a host animation that never finishes cannot keep the next-page button locked', async () => {
  const view = await mount();
  try {
    hangNextAnimation = true;
    await act(() => view.next().click());
    await pause(620);
    assert.equal(view.page(), 2);
    assert.equal(view.scroll().scrollTop, Number(view.scroll().dataset.readerTarget));
    await act(() => view.next().click());
    await pause();
    assert.equal(view.page(), 3);
  } finally { await view.close(); }
});

test('an explicit restore/jump supersedes queued animation work', async () => {
  const view = await mount();
  try {
    await act(() => {
      view.next().click();
      view.next().click();
      view.scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { top: 2000 } }));
    });
    const page = view.page();
    await pause(150);
    assert.equal(view.page(), page);
    assert.ok(page > 3);
    await act(() => view.next().click());
    await pause();
    assert.equal(view.page(), page + 1);
  } finally { await view.close(); }
});

after(() => dom.window.close());
