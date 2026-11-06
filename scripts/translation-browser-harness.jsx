import React from 'react';
import { createRoot } from 'react-dom/client';
import PdfViewer, { pdfStyles } from '../web/src/pdf/PdfViewer.jsx';
import { PagedReader } from '../web/src/components/PagedReader.jsx';
import { styles } from '../web/src/styles.js';
import { saveBook, getBook, deleteBook, clearLibrary, getPdfTranslationPreferences } from '../web/src/storage.js';
import { ReaderPage } from '../web/src/app.jsx';
import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { annotationStyles } from '../web/src/annotations/styles.js';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const assert = (value, message) => { if (!value) throw new Error(message); };
async function until(check, message, timeout = 12000) {
  const deadline = performance.now() + timeout;
  while (!check()) {
    if (performance.now() > deadline) throw new Error(`timeout: ${message}`);
    await sleep(20);
  }
}
const results = [];
const errors = [];
window.__pdfCheck = { state: 'running' };
window.addEventListener('error', event => errors.push(event.message));
window.addEventListener('unhandledrejection', event => errors.push(String(event.reason)));
const root = createRoot(document.getElementById('app'));
let options;
function render(patch = {}) {
  options = { ...options, ...patch };
  root.render(<div className="dshr-root" data-reading-mode={options.paged ? 'book' : 'scroll'}>
    <style>{styles + pdfStyles}</style><div className="dshr-reader"><div className="dshr-body">
      <PdfViewer {...options} onHideTranslations={() => render({ hideTranslations: true })} />
    </div><PagedReader enabled={options.paged} bookMode pdfMode readerKey={options.documentId} /></div>
  </div>);
}
const page = () => Number(document.querySelector('.dshr-pdf-page-input')?.value);
const list = () => document.querySelector('.dshr-pdf-translation-list');
const cards = () => [...document.querySelectorAll('[data-translation-segment]')];
const done = () => cards().filter(card => card.dataset.status === 'done');
const frame = () => document.querySelector(`.dshr-pdf-frame[data-page="${page()}"]`);
const sourceScroll = () => document.querySelector('.dshr-pdf-scroll');
const stats = async () => (await fetch('/translation-stats')).json();
const button = label => [...document.querySelectorAll('.dshr-pdf-translation-panel button')].find(element => element.textContent === label);
async function go(number) {
  const input = document.querySelector('.dshr-pdf-page-input');
  input.focus();
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, String(number));
  input.dispatchEvent(new Event('input', { bubbles: true }));
  await sleep(20);
  input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
  await until(() => page() === number && frame()?.dataset.rendered === 'true', `navigate ${number}`);
}
async function countRows(store, index, key) {
  const db = await new Promise((resolve, reject) => { const request = indexedDB.open('dsh-reader', 3); request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); });
  try {
    const objectStore = db.transaction(store).objectStore(store);
    const request = index ? objectStore.index(index).count(key) : objectStore.count();
    return await new Promise(resolve => { request.onsuccess = () => resolve(request.result); });
  } finally { db.close(); }
}
try {
  // Migrate an existing v2 book library without destroying its progress.
  await new Promise((resolve, reject) => {
    const request = indexedDB.open('dsh-reader', 2);
    request.onupgradeneeded = () => {
      const books = request.result.createObjectStore('books', { keyPath: 'id' }); books.createIndex('lastOpenedAt', 'lastOpenedAt');
      const annotations = request.result.createObjectStore('annotations', { keyPath: 'id' }); annotations.createIndex('bookId', 'bookId');
      request.result.createObjectStore('assets', { keyPath: 'key' });
      books.put({ id: 'legacy-book', progress: { page: 7 }, lastOpenedAt: 1 });
    };
    request.onsuccess = () => { request.result.close(); resolve(); }; request.onerror = () => reject(request.error);
  });
  const blob = await (await fetch('/fixture.pdf')).blob();
  const bookA = await saveBook(new File([blob], 'translation-a.pdf', { type: 'application/pdf' }), { title: 'Library A' });
  const bookB = await saveBook(new File([blob], 'translation-b.pdf', { type: 'application/pdf' }), { title: 'Library B' });
  assert((await getBook('legacy-book')).progress.page === 7, 'v2 migration lost reading progress');
  results.push({ check: 'indexeddb-v2-migration', retainedPage: 7 });
  options = { documentId: bookA.id, fileName: 'Library A', data: blob, paged: true, initialPage: 2, autoTranslate: true };
  render();
  await until(() => cards().length === 8 && done().length > 0, 'incremental translations');
  assert(done().length < 8, 'page results should become readable incrementally');
  const originalHeight = frame().getBoundingClientRect().height;
  const prefetch = [...document.querySelectorAll('.dshr-pdf-translation-options label')].find(label => label.textContent.includes('预译')).querySelector('input');
  if (prefetch.checked) prefetch.click();
  await until(() => cards().some(card => card.dataset.status === 'error'), 'missing paragraph error');
  const successful = done().map(card => card.dataset.translationSegment);
  button('重试本段').click();
  await until(() => done().length === 8, 'retry only missing segment');
  assert(successful.every(id => done().some(card => card.dataset.translationSegment === id)), 'retry removed completed translations');
  assert(frame().getBoundingClientRect().height === originalHeight, 'translated text changed original page height');
  assert(!document.querySelector('.dshr-pdf-page .dshr-pdf-translation'), 'inline translation card remains in PDF layout');
  assert(!list().textContent.includes('⟦KEEP_'), 'protected citation placeholders leaked into the reader');
  assert(document.querySelector('.dshr-paged-next').getBoundingClientRect().right <= sourceScroll().getBoundingClientRect().right, 'page arrow overlaps translation pane');
  results.push({ check: 'incremental-single-paragraph-retry-independent-layout', paragraphs: done().length });
  const span = frame().querySelector('[data-pdf-segment="p2-s3"]');
  span.dispatchEvent(new PointerEvent('pointerover', { bubbles: true }));
  await sleep(40);
  assert(document.querySelector('[data-translation-segment="p2-s3"]').classList.contains('is-linked'), 'source did not link to translation');
  const last = document.querySelector('[data-translation-segment="p2-s7"]');
  last.dispatchEvent(new PointerEvent('pointerover', { bubbles: true }));
  await sleep(40);
  assert(frame().querySelector('[data-pdf-segment="p2-s7"]').dataset.pdfLinked === 'true', 'translation did not highlight source');
  last.querySelector('button').click();
  await sleep(40);
  assert(page() === 2, 'paragraph locator changed PDF page');
  const beforePane = sourceScroll().scrollTop;
  list().scrollTop = 250;
  list().dispatchEvent(new WheelEvent('wheel', { deltaY: 180, bubbles: true }));
  list().dispatchEvent(new KeyboardEvent('keydown', { key: 'PageDown', bubbles: true }));
  await sleep(80);
  assert(page() === 2 && sourceScroll().scrollTop === beforePane, 'translation pane keyboard/wheel turned the original PDF');
  const beforeFont = (await stats()).requests.length;
  document.querySelector('button[aria-label="放大译文字号"]').click(); await sleep(120);
  assert((await stats()).requests.length === beforeFont && frame().getBoundingClientRect().height === originalHeight, 'font setting affected PDF or triggered translation');
  results.push({ check: 'bidirectional-link-pane-input-font-isolation' });
  const details = document.querySelector('.dshr-pdf-glossary'); details.open = true;
  const input = details.querySelector('textarea');
  Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(input, 'gate = 栅极\nband gap = 带隙');
  input.dispatchEvent(new Event('input', { bubbles: true })); await sleep(30);
  button('应用并更新译文').click();
  await until(() => done().length === 8 && done().every(card => card.textContent.includes('术语表已应用')), 'document glossary');
  assert((await stats()).requests.some(request => request.glossary.includes('gate = 栅极')), 'glossary was not sent');
  details.open = false;
  await sleep(150);
  const callsBeforeReopen = (await stats()).requests.length;
  root.render(null); await sleep(120); render();
  await until(() => done().length === 8 && done().every(card => card.textContent.includes('缓存')), 'persistent cached translations');
  await sleep(150);
  assert((await stats()).requests.length === callsBeforeReopen, 'reopening retransmitted cached paragraphs');
  results.push({ check: 'glossary-and-persistent-cache', cachedParagraphs: 8 });
  await go(3);
  await until(() => cards().some(card => card.dataset.status === 'loading'), 'active request before pause');
  button('暂停翻译').click(); await sleep(120);
  const pausedCount = (await stats()).requests.length;
  await sleep(600);
  assert((await stats()).requests.length === pausedCount, 'pause continued queued translation work');
  button('继续翻译').click(); await until(() => done().length === 8, 'resume translation');
  results.push({ check: 'pause-resume', abortedRequests: (await stats()).aborted });
  await go(4);
  await until(() => cards().some(card => card.dataset.status === 'loading'), 'inflight before document change');
  render({ documentId: bookB.id, fileName: 'Library B' });
  await until(() => done().length === 8 && done().every(card => card.textContent.includes('Library B')), 'new document results');
  await sleep(600);
  assert(done().every(card => !card.textContent.includes('Library A')), 'late previous-book results polluted the new book');
  results.push({ check: 'document-race-isolation' });
  await fetch('/translation-model-v2', { method: 'POST' });
  await go(8);
  await until(() => done().length === 8 && done().every(card => card.textContent.includes('v2')), 'model change refresh');
  results.push({ check: 'model-change-invalidates-cache' });
  const deadline = Date.now() + 6000;
  while (!(await stats()).completed.some(call => call.model === 'v2' && call.ids.includes('p9-s7'))) {
    assert(Date.now() < deadline, 'next-page prefetch never completed');
    await sleep(40);
  }
  await sleep(100);
  const prefetchedCount = (await stats()).requests.length;
  await go(9);
  await until(() => done().length === 8, 'prefetched next page');
  assert((await stats()).requests.length === prefetchedCount, 'prefetched page translated twice');
  results.push({ check: 'next-page-prefetch-reused' });
  render({ paged: false }); await sleep(250);
  assert(page() === 9, 'scroll mode lost current page');
  await go(10); await until(() => done().length === 8, 'continuous mode translation');
  render({ paged: true }); await sleep(250); assert(page() === 10, 'book mode lost current page');
  results.push({ check: 'translation-with-mode-switches' });
  document.getElementById('app').style.width = '540px';
  await sleep(250);
  const panelRect = document.querySelector('.dshr-pdf-translation-panel').getBoundingClientRect();
  assert(panelRect.top >= sourceScroll().getBoundingClientRect().bottom - 1, 'narrow pane did not stack translation below PDF');
  assert(document.querySelector('.dshr-paged-next').getBoundingClientRect().bottom <= panelRect.top, 'narrow page arrow overlaps translation pane');
  document.getElementById('app').style.width = '';
  await sleep(180);
  document.querySelector('button[aria-label="关闭译文侧栏"]').click();
  await until(() => !document.querySelector('.dshr-pdf-translation-panel'), 'close translation pane');
  assert(page() === 10, 'closing translation pane changed page');
  render({ hideTranslations: false });
  await until(() => document.querySelector('.dshr-pdf-translation-panel') && done().length === 8, 'reopen translation pane');
  results.push({ check: 'narrow-layout-close-reopen' });
  const preferences = await getPdfTranslationPreferences(bookA.id);
  assert(preferences.glossary.includes('gate') && preferences.fontSize === 17, 'document preferences did not persist');
  root.render(null); await sleep(100);
  const sharedStyle = document.createElement('style'); sharedStyle.textContent = styles + pdfStyles + appearanceStyles + annotationStyles; document.head.append(sharedStyle);
  root.render(<ReaderPage />);
  await until(() => document.querySelectorAll('.dshr-book').length >= 2, 'application library');
  [...document.querySelectorAll('.dshr-book')].find(card => card.textContent.includes('Library B')).click();
  await until(() => page() > 0 && frame()?.dataset.rendered === 'true', 'application book open');
  const liveToggle = () => document.querySelector('button[role="switch"]');
  if (liveToggle().getAttribute('aria-checked') === 'false') liveToggle().click();
  await until(() => document.querySelector('.dshr-pdf-translation-panel'), 'application translation toggle');
  await go(2);
  await until(() => done().length === 8, 'application paragraph translation');
  document.querySelector('button[aria-label="关闭译文侧栏"]').click(); await sleep(60);
  liveToggle().click(); await sleep(30); liveToggle().click();
  await until(() => document.querySelector('.dshr-pdf-translation-panel') && done().length === 8, 'application reopen via translation switch');
  await sleep(400); // Allow the source fit-width reraster after reopening to settle.
  const selectParagraph = async index => {
    const span = frame().querySelector(`[data-pdf-segment="p2-s${index}"]`);
    const range = document.createRange(); range.selectNodeContents(span);
    window.getSelection().removeAllRanges(); window.getSelection().addRange(range);
    document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    await until(() => document.querySelector('.dshr-selection__btn--accent'), 'selection toolbar');
    document.querySelector('.dshr-selection__btn--accent').click();
  };
  await selectParagraph(0); await sleep(70);
  await selectParagraph(1);
  await until(() => document.querySelector('.dshr-selection__pop p')?.textContent.includes('paragraph 1'), 'selection translation');
  assert(!document.querySelector('.dshr-selection__pop').textContent.includes('paragraph 0'), 'old selection result replaced the new quote');
  document.querySelector('button[aria-label="关闭选中文字工具栏"]').click();
  window.getSelection().removeAllRanges();
  results.push({ check: 'real-application-toggle-selection-race', currentPage: page() });
  root.render(null); await sleep(100);
  render();
  await until(() => page() === 2 && frame()?.dataset.rendered === 'true', 'final preview');
  await deleteBook(bookA.id);
  assert(await countRows('pdfTranslations', 'bookId', bookA.id) === 0, 'deleted book kept its translation cache');
  await clearLibrary();
  assert(await countRows('pdfTranslations') === 0, 'clear library kept translation cache');
  assert(!Object.keys(await getPdfTranslationPreferences(bookB.id)).length, 'clear library kept document preferences');
  assert(errors.length === 0, errors.join('; '));
  results.push({ check: 'delete-and-clear-cache-cleanup' });
  window.__pdfCheck = { state: 'passed', results };
} catch (error) {
  window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results, browserErrors: errors };
}
