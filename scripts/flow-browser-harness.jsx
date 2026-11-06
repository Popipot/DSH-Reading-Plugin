import React from 'react';
import { createRoot } from 'react-dom/client';
import { zipSync, strToU8 } from 'fflate';
import { parseBook } from '../web/src/formats/index.js';
import { FlowReader } from '../web/src/components/FlowReader.jsx';
import { PagedReader } from '../web/src/components/PagedReader.jsx';
import { styles } from '../web/src/styles.js';
import { DEFAULT_SETTINGS } from '../web/src/storage.js';
import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { appearanceVars } from '../web/src/appearance/appearance.js';
import { collectFlowLines, captureFlowAnchor } from '../web/src/components/flow-pagination.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const assert = (value, message) => { if (!value) throw new Error(message); };
const nativeAnimate = Element.prototype.animate;
Element.prototype.animate = function (frames, options) {
  return nativeAnimate.call(this, frames, { ...options, duration: options.duration * 0.08 });
};
const paragraph = 'A stable page must advance through every line of the book. This paragraph contains enough text to wrap at different widths. '.repeat(8);
const paragraphs = Array.from({ length: 70 }, (_, index) => `<p>Paragraph ${index + 1}. ${paragraph}</p>`);
const table = `<table>${Array.from({ length: 55 }, (_, index) => `<tr><td>Table row ${index + 1}</td><td>${paragraph.slice(0, 100)}</td></tr>`).join('')}</table>`;
const content = paragraphs.slice(0, 3).join('') + table + paragraphs.slice(3).join('');
function epub() {
  const files = {
    mimetype: 'application/epub+zip',
    'META-INF/container.xml': '<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="book.opf" media-type="application/oebps-package+xml"/></rootfiles></container>',
    'book.opf': '<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="id"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>Pagination regression</dc:title><dc:identifier id="id">test</dc:identifier></metadata><manifest><item id="chapter" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="chapter"/></spine></package>',
    'chapter.xhtml': `<html xmlns="http://www.w3.org/1999/xhtml"><body><h1>Chapter 1</h1>${content}</body></html>`,
  };
  return new Blob([zipSync(Object.fromEntries(Object.entries(files).map(([key, value]) => [key, strToU8(value)])))]);
}
const root = createRoot(document.getElementById('app'));
let book;
let settings = { ...DEFAULT_SETTINGS, readingMode: 'book' };
let chapterIndex = 0;
let animation = 'slide';
let focusAnnotation;
let restore;
let strict = false;
const results = [];
const errors = [];
window.addEventListener('error', event => errors.push(event.message));
window.addEventListener('unhandledrejection', event => errors.push(String(event.reason)));
function render() {
  const view = <div className="dshr-root" data-reading-mode={settings.readingMode} style={{ ...appearanceVars(settings), '--dshr-font-size': `${settings.fontSize}px`, '--dshr-line-height': settings.lineHeight }}>
    <style>{styles + appearanceStyles}</style><div className="dshr-reader"><div className="dshr-body">
      <FlowReader key={book.format} book={book} chapterIndex={chapterIndex} settings={settings} restore={restore} onRestored={() => { restore = null; render(); }} focusAnnotation={focusAnnotation} onChapterChange={index => { chapterIndex = index; render(); }} />
    </div><PagedReader enabled={settings.readingMode === 'book'} animation={animation} bookMode bookFrame frameTop={0} readerKey={`${book.format}:${chapterIndex}`} /></div>
  </div>;
  root.render(strict ? <React.StrictMode>{view}</React.StrictMode> : view);
}
const scroll = () => document.querySelector('.dshr-content');
const next = () => document.querySelector('.dshr-paged-next');
const page = () => Number(scroll().dataset.readerPage);
const stage = () => scroll().querySelector('.dshr-content__inner');
async function settled(expected) {
  const deadline = performance.now() + 5000;
  do {
    await sleep(20);
    if ((!expected || page() === expected) && scroll().dataset.readerTurning !== 'true'
      && Math.abs(scroll().scrollTop - Number(scroll().dataset.readerTarget)) < 1) {
      await sleep(35);
      if ((!expected || page() === expected) && scroll().dataset.readerTurning !== 'true') return;
    }
  } while (performance.now() < deadline);
  throw new Error(`navigation did not settle: wanted ${expected}, got ${page()} at ${scroll().scrollTop}`);
}
async function turn(direction = 1) {
  const before = scroll().scrollTop;
  const expected = page() + direction;
  document.querySelector(direction > 0 ? '.dshr-paged-next' : '.dshr-paged-prev').click();
  await settled(expected);
  assert(direction * (scroll().scrollTop - before) > 1, `${book.format} rolled back/stalled: ${before} -> ${scroll().scrollTop}`);
}
window.__pdfCheck = { state: 'running' };
try {
  const markdownTable = '| Index | Text |\n| --- | --- |\n' + Array.from({ length: 55 }, (_, i) => `| ${i + 1} | A long table must be traversable |`).join('\n');
  const fixtures = [
    ['epub', epub()],
    ['html', new Blob([`<html><body><h1>HTML regression</h1>${content}</body></html>`])],
    ['md', new Blob([`# Markdown regression\n\n${markdownTable}\n\n${Array.from({ length: 70 }, (_, i) => `Paragraph ${i + 1}. ${paragraph}`).join('\n\n')}`])],
    ['txt', new Blob([`Chapter 1\n\n${Array.from({ length: 70 }, (_, i) => `Paragraph ${i + 1}. ${paragraph}`).join('\n\n')}`])],
    ['mobi', await (await fetch('/fixture.mobi')).blob()],
  ];
  for (const [format, blob] of (location.search.includes('dynamic=1') ? [] : fixtures)) {
    root.render(null);
    await sleep(30);
    book = await parseBook(blob, { fileName: `regression.${format}` });
    chapterIndex = format === 'mobi' ? book.chapters.reduce((best, chapter, i, chapters) => chapter.blocks.length > chapters[best].blocks.length ? i : best, 0) : 0;
    if (format === 'mobi') book.chapters[chapterIndex].blocks = book.chapters[chapterIndex].blocks.slice(0, 80);
    render();
    await sleep(200);
    let turns = 0;
    while (!next().disabled && turns < 250) { await turn(); turns += 1; }
    assert(next().disabled, `${format} could not reach the chapter end`);
    assert(turns > 5, `${format} fixture did not exercise enough pages`);
    results.push({ check: 'complete-chapter', format, turns, pages: page() });
    for (let i = 0; i < 8; i += 1) await turn(-1);
    for (const effect of ['cover', 'flip']) {
      animation = effect;
      render();
      await settled();
      const start = page();
      for (let i = 0; i < 4; i += 1) await turn();
      for (let i = 0; i < 4; i += 1) await turn(-1);
      assert(page() === start, `${format}/${effect} lost the current page`);
    }
    results.push({ check: 'all-animations-forward-backward', format });
  }
  // Adversarial changes during a real turn, with reading position pinned to a
  // character rather than a paragraph index or a transient scroll offset.
  root.render(null);
  await sleep(30);
  book = await parseBook(epub(), { fileName: 'dynamic.epub' });
  chapterIndex = 0;
  animation = 'slide';
  render();
  await sleep(200);
  const blocks = [...scroll().querySelectorAll('[data-anno-block]')];
  scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { element: blocks[20] } }));
  await settled();
  let from = page();
  for (let i = 0; i < 6; i += 1) next().click();
  await settled(from + 6);
  results.push({ check: 'queued-rapid-clicks', pagesAdvanced: page() - from });
  const stableTop = scroll().scrollTop;
  scroll().scrollTop = 0;
  scroll().dispatchEvent(new Event('scroll'));
  await settled();
  assert(Math.abs(scroll().scrollTop - stableTop) < 1, 'native scroll overwrote the page cursor');
  next().click();
  await sleep(5);
  const translation = document.createElement('div');
  translation.className = 'dshr-translation';
  translation.innerHTML = Array.from({ length: 35 }, (_, i) => `<p>Translated line ${i}: ${paragraph}</p>`).join('');
  blocks[2].append(translation);
  await settled();
  for (let i = 0; i < 5; i += 1) await turn();
  const saved = captureFlowAnchor(collectFlowLines(scroll(), stage()), scroll().scrollTop, scroll());
  const anchorVisible = () => {
    const range = document.createRange();
    range.setStart(saved.node, saved.offset);
    range.setEnd(saved.node, saved.offset + 1);
    const rect = range.getBoundingClientRect();
    const rootRect = scroll().getBoundingClientRect();
    return rect.top >= rootRect.top + 47 && rect.bottom <= rootRect.bottom - 55;
  };
  document.getElementById('app').style.width = '850px';
  settings = { ...settings, fontSize: 23, lineHeight: 2.05, fontFamily: 'sans' };
  render();
  await sleep(250);
  await settled();
  if (!anchorVisible()) {
    const range = document.createRange();
    range.setStart(saved.node, saved.offset);
    range.setEnd(saved.node, saved.offset + 1);
    results.push({ check: 'anchor-diagnostic', offset: saved.offset, text: saved.node.textContent.slice(saved.offset, saved.offset + 100),
      rect: range.getBoundingClientRect().toJSON(), root: scroll().getBoundingClientRect().toJSON(), page: page(), top: scroll().scrollTop });
  }
  assert(anchorVisible(), 'font/width reflow lost the anchored text');
  const image = document.createElement('img');
  image.alt = 'Delayed image regression';
  image.style.cssText = 'display:block;width:300px;height:2400px;max-height:none';
  blocks[1].append(image);
  image.dispatchEvent(new Event('load'));
  await sleep(150);
  await settled();
  assert(anchorVisible(), 'late image loading lost the anchored text');
  for (let i = 0; i < 5; i += 1) await turn();
  results.push({ check: 'translation-image-font-width-reflow', page: page() });
  const beforeCancel = page();
  next().click();
  await sleep(5);
  for (const effect of document.querySelector('.dshr-flow-transition')?.getAnimations({ subtree: true }) || []) effect.cancel();
  await settled(beforeCancel + 1);
  await turn();
  results.push({ check: 'cancelled-animation-unlocks-navigation', page: page() });
  const beforeMode = scroll().scrollTop;
  settings = { ...settings, readingMode: 'scroll' };
  render();
  await sleep(100);
  settings = { ...settings, readingMode: 'book' };
  render();
  await sleep(200);
  await settled();
  assert(Math.abs(scroll().scrollTop - beforeMode) < 1, 'mode switch changed the content position');
  await turn();
  results.push({ check: 'scroll-book-mode-switch', page: page() });
  root.render(null);
  await sleep(30);
  document.getElementById('app').style.width = '';
  settings = { ...DEFAULT_SETTINGS, readingMode: 'book' };
  strict = true;
  restore = { chapter: 0, scrollRatio: 0.4 };
  render();
  await sleep(250);
  await settled();
  assert(page() > 3 && scroll().scrollTop > 1000, 'saved position was not restored');
  const restoredPage = page();
  render();
  render();
  await sleep(100);
  assert(page() === restoredPage, 'parent renders repeated the saved-position restore');
  await turn();
  focusAnnotation = { id: 'jump-regression', blockId: book.chapters[0].blocks[3].id };
  render();
  await sleep(10);
  const beforeLateJump = page();
  await turn();
  await sleep(150);
  assert(page() === beforeLateJump + 1, 'late annotation jump overwrote a later turn');
  focusAnnotation = undefined;
  // A new chapter must reset once, and old animation promises cannot move it.
  book.chapters.push({ ...book.chapters[0], id: 'chapter-regression-2', title: 'Second chapter' });
  next().click();
  await sleep(5);
  chapterIndex = 1;
  render();
  await sleep(200);
  await settled();
  assert(page() === 1 && scroll().scrollTop === 0, 'old chapter work changed the new chapter');
  await turn();
  results.push({ check: 'restore-parent-render-late-jump-chapter-change', page: page() });
  assert(errors.length === 0, errors.join('; '));
  window.__pdfCheck = { state: 'passed', results };
} catch (error) {
  window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results };
}
