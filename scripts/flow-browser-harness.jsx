import React from 'react';
import { createRoot } from 'react-dom/client';
import { zipSync, strToU8 } from 'fflate';
import { parseBook } from '../web/src/formats/index.js';
import { FlowReader } from '../web/src/components/FlowReader.jsx';
import { PagedReader } from '../web/src/components/PagedReader.jsx';
import { styles } from '../web/src/styles.js';
import { DEFAULT_SETTINGS, getBook, saveBook, saveSettings, touchBook } from '../web/src/storage.js';
import { ReaderPage } from '../web/src/app.jsx';
import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { appearanceVars } from '../web/src/appearance/appearance.js';
import { collectFlowLines, captureFlowAnchor } from '../web/src/components/flow-pagination.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const assert = (value, message) => { if (!value) throw new Error(message); };
const nativeAnimate = Element.prototype.animate;
let animationScale = 0.08;
Element.prototype.animate = function (frames, options) {
  return nativeAnimate.call(this, frames, { ...options, duration: options.duration * animationScale });
};
const paragraph = 'A stable page must advance through every line of the book. This paragraph contains enough text to wrap at different widths. '.repeat(8);
const paragraphs = Array.from({ length: 70 }, (_, index) => `<p>Paragraph ${index + 1}. ${paragraph}</p>`);
const table = `<table>${Array.from({ length: 55 }, (_, index) => `<tr><td>Table row ${index + 1}</td><td>${paragraph.slice(0, 100)}</td></tr>`).join('')}</table>`;
const content = paragraphs.slice(0, 3).join('') + table + paragraphs.slice(3).join('');
function epub(chapters = [content]) {
  const sections = chapters.map((_, index) => `chapter-${index + 1}`);
  const files = {
    mimetype: 'application/epub+zip',
    'META-INF/container.xml': '<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="book.opf" media-type="application/oebps-package+xml"/></rootfiles></container>',
    'book.opf': `<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="id"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>Pagination regression</dc:title><dc:identifier id="id">test</dc:identifier></metadata><manifest>${sections.map(id => `<item id="${id}" href="${id}.xhtml" media-type="application/xhtml+xml"/>`).join('')}</manifest><spine>${sections.map(id => `<itemref idref="${id}"/>`).join('')}</spine></package>`,
  };
  for (const [index, id] of sections.entries()) {
    files[`${id}.xhtml`] = `<html xmlns="http://www.w3.org/1999/xhtml"><body><h1>Chapter ${index + 1}</h1>${chapters[index]}</body></html>`;
  }
  return new Blob([zipSync(Object.fromEntries(Object.entries(files).map(([key, value]) => [key, strToU8(value)])))]);
}
const root = createRoot(document.getElementById('app'));
let book;
let settings = { ...DEFAULT_SETTINGS, readingMode: 'book' };
let chapterIndex = 0;
let animation = 'slide';
let focusAnnotation;
let chapterEntry;
let strict = false;
const results = [];
const errors = [];
window.addEventListener('error', event => errors.push(event.message));
window.addEventListener('unhandledrejection', event => errors.push(String(event.reason)));
function render() {
  const entered = entry => { if (entry === chapterEntry) { chapterEntry = null; render(); } };
  const view = <div className="dshr-root" data-reading-mode={settings.readingMode} style={{ ...appearanceVars(settings), '--dshr-font-size': `${settings.fontSize}px`, '--dshr-line-height': settings.lineHeight }}>
    <style>{styles + appearanceStyles}</style><div className="dshr-reader"><div className="dshr-body">
      <FlowReader key={book.format} book={book} chapterIndex={chapterIndex} settings={settings} chapterEntry={chapterEntry} onChapterEntered={entered} focusAnnotation={focusAnnotation} onChapterChange={index => { chapterIndex = index; chapterEntry = { edge: 'start' }; render(); }} />
    </div><PagedReader enabled={settings.readingMode === 'book'} animation={animation} bookMode bookFrame frameTop={0} readerKey={`${book.format}:${chapterIndex}`} chapterEntry={chapterEntry} onChapterEntered={entered} /></div>
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
async function turn(direction = 1, input = 'button') {
  const before = scroll().scrollTop;
  const expected = page() + direction;
  if (input === 'keyboard') {
    scroll().dispatchEvent(new KeyboardEvent('keydown', { key: direction > 0 ? 'PageDown' : 'PageUp', bubbles: true, cancelable: true }));
  } else if (input === 'wheel') {
    await sleep(230);
    scroll().dispatchEvent(new WheelEvent('wheel', { deltaY: direction * 60, bubbles: true, cancelable: true }));
  } else {
    document.querySelector(direction > 0 ? '.dshr-paged-next' : '.dshr-paged-prev').click();
  }
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
    const extraTurns = Math.max(18, 100 - turns - 24);
    const inputs = ['button', 'keyboard', 'wheel'];
    for (let index = 0; index < extraTurns; index += 1) {
      await turn(index % 12 < 6 ? 1 : -1, inputs[index % inputs.length]);
      const view = scroll().getBoundingClientRect();
      const hasContent = [...stage().querySelectorAll('.dshr-block__body')].some(node => {
        const rect = node.getBoundingClientRect();
        return rect.height > 0 && rect.top < view.bottom - 56 && rect.bottom > view.top + 48;
      });
      assert(hasContent, `${format} displayed an empty page after a mixed input`);
    }
    results.push({ check: 'b1-navigation-stability', format, acceptedTurns: turns + 24 + extraTurns, mixedTurns: extraTurns, errors: 0 });
  }
  const payload = 'window.b1PayloadCount += 1';
  const safeUrl = 'https://example.org/b1-safe';
  const hostile = `<p>Readable fixture</p><script>${payload}</script>
    <img src="data:image/png;base64,AAAA" onerror="${payload}" />
    <iframe srcdoc="&lt;script&gt;parent.b1PayloadCount += 1&lt;/script&gt;"></iframe>`;
  const links = `<p><a href="javascript:${payload}" onclick="${payload}">unsafe link</a>
    <a href="${safeUrl}">safe link</a></p>`;
  window.b1PayloadCount = 0;
  const securityFixtures = [
    ['security.epub', epub([hostile + links])],
    ['security.html', new Blob([hostile + links], { type: 'text/html' })],
    ['security.md', new Blob([`Readable fixture\n\n${hostile}\n\n[unsafe link](javascript:window.b1PayloadCount%2B%3D1)\n\n[safe link](${safeUrl})`])],
  ];
  for (const [fileName, blob] of securityFixtures) {
    root.render(null);
    await sleep(25);
    book = await parseBook(blob, { fileName });
    chapterIndex = 0;
    render();
    await sleep(100);
    assert(stage().textContent.includes('Readable fixture'), `${fileName} lost harmless text`);
    const safe = stage().querySelector(`a[href="${safeUrl}"]`);
    assert(safe, `${fileName} removed a safe link`);
    const opened = [];
    const openWindow = window.open;
    try {
      window.open = url => { opened.push(url); };
      safe.click();
      for (const link of stage().querySelectorAll('a[href^="javascript:"],a[onclick]')) link.click();
    } finally {
      window.open = openWindow;
    }
    await sleep(30);
    assert(opened.length === 1 && opened[0] === safeUrl, `${fileName} produced an unsafe external action`);
    assert(!stage().querySelector('script,iframe,[onerror],[onclick],a[href^="javascript:"]'), `${fileName} allowed executable markup`);
    assert(window.b1PayloadCount === 0, `${fileName} ran an embedded payload`);
  }
  results.push({ check: 'b1-document-payload-isolation', formats: securityFixtures.length, successfulPayloads: 0 });
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
  chapterEntry = { scrollRatio: 0.4 };
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
  chapterEntry = { edge: 'start' };
  render();
  await sleep(200);
  await settled();
  assert(page() === 1 && scroll().scrollTop === 0, 'old chapter work changed the new chapter');
  await turn();
  results.push({ check: 'restore-parent-render-late-jump-chapter-change', page: page() });

  // Exercise the actual library, EPUB parser, navigation wiring and persisted
  // reading position with adjacent long chapters and a one-page chapter.
  root.render(null); await sleep(30);
  const sheet = document.createElement('style');
  sheet.textContent = styles + appearanceStyles;
  document.head.append(sheet);
  saveSettings({ ...DEFAULT_SETTINGS, readingMode: 'book', autoTranslate: false });
  const longChapter = (marker, count) => paragraphs.slice(0, count).join('') + `<p>${marker}</p>`;
  const blob = epub([longChapter('End of chapter one.', 18), longChapter('End of chapter two.', 13), '<p>Short chapter.</p>', longChapter('End of chapter four.', 10)]);
  const savedBook = await saveBook(new File([blob], 'seams.epub', { type: 'application/epub+zip' }));
  await touchBook(savedBook.id, { chapter: 0, scrollRatio: 1 });
  root.render(<React.StrictMode><ReaderPage /></React.StrictMode>);
  const until = async (predicate, message) => {
    const deadline = performance.now() + 5000;
    do {
      if (await predicate()) return;
      await sleep(10);
    } while (performance.now() < deadline);
    throw new Error(message);
  };
  const currentChapter = () => Number(scroll()?.querySelector('.dshr-chapter__kicker')?.textContent.match(/第\s*(\d+)/)?.[1]);
  const pages = () => Number(scroll().dataset.readerPages);
  const at = async (chapter, edge) => {
    await until(() => currentChapter() === chapter && scroll()?.dataset.readerPage, `did not enter chapter ${chapter}`);
    await settled(edge === 'end' ? pages() : 1);
    assert(currentChapter() === chapter, 'a queued gesture skipped the destination chapter');
  };
  const open = async () => {
    await until(() => document.querySelector('.dshr-book'), 'EPUB library did not load');
    document.querySelector('.dshr-book').click();
  };
  const prev = () => document.querySelector('.dshr-paged-prev');
  const key = value => scroll().dispatchEvent(new KeyboardEvent('keydown', { key: value, bubbles: true, cancelable: true }));
  const wheel = deltaY => scroll().dispatchEvent(new WheelEvent('wheel', { deltaY, bubbles: true, cancelable: true }));
  const jump = ratio => scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { ratio } }));
  await open();
  await at(1, 'end');
  const originalEnd = page();
  assert(originalEnd > 1 && scroll().scrollTop > 0, 'saved legacy ratio did not land at a multi-page chapter end');
  animationScale = 0.55;
  for (const mode of ['slide', 'cover', 'flip']) {
    const select = document.querySelector('.dshr-topbar__animation');
    select.value = mode;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    await sleep(25);
    next().click();
    await until(() => currentChapter() === 2 && document.querySelector(`.dshr-flow-transition.is-${mode}`), `cross-chapter ${mode} did not start`);
    const transition = document.querySelector('.dshr-flow-transition');
    assert(transition.querySelector('[data-turn-page="old"]').textContent.includes('End of chapter one.'), 'outgoing page did not come from the old chapter');
    assert(transition.querySelector('[data-turn-page="new"]').textContent.includes('Chapter 2'), 'incoming page did not start the new chapter');
    next().click();
    await at(2, 'start');
    assert(pages() > 1 && scroll().scrollTop === 0, 'double input skipped the next chapter first page');
    key('PageUp');
    await at(1, 'end');
    assert(page() === originalEnd, 'backward turn did not restore the original last page');
    results.push({ check: 'real-epub-reversible-seam-animation', mode });
  }
  animationScale = 0.08;
  wheel(100);
  await until(() => currentChapter() === 2, 'wheel did not cross to chapter two');
  wheel(100);
  await at(2, 'start');
  await sleep(230);
  wheel(-100);
  await at(1, 'end');
  results.push({ check: 'wheel-burst-crosses-once-and-reverses' });

  // A burst queued before the seam may reach the seam once. Its remainder
  // must not continue through the destination chapter after the handoff.
  jump(1);
  prev().click(); await settled(originalEnd - 1);
  for (let i = 0; i < 8; i += 1) next().click();
  await at(2, 'start');
  jump(1); await settled(pages());
  key('PageDown'); await at(3, 'start');
  assert(pages() === 1, 'short EPUB chapter was not a single page');
  await sleep(230);
  next().click(); await at(4, 'start');
  assert(next().disabled === false, 'a long final chapter disabled navigation at its first page');
  prev().click(); await at(3, 'end');
  await sleep(230);
  prev().click(); await at(2, 'end');
  const oldCount = pages();
  const lastBlock = [...stage().querySelectorAll('[data-anno-block]')].at(-1);
  const lateImage = new Image();
  lateImage.style.cssText = 'display:block;width:300px;height:1450px;max-height:none';
  lastBlock.append(lateImage);
  lateImage.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="1450"><rect width="300" height="1450" fill="#456"/></svg>');
  await lateImage.decode();
  const lateTranslation = document.createElement('div');
  lateTranslation.className = 'dshr-translation';
  lateTranslation.innerHTML = paragraphs.slice(0, 4).join('');
  lastBlock.append(lateTranslation);
  await until(() => pages() > oldCount, 'late content did not repaginate');
  await at(2, 'end');
  assert(page() === pages(), 'late image/translation displaced the explicit chapter-end landing');
  results.push({ check: 'queued-input-single-page-chapters-and-late-layout' });

  // Directory jumps still open at the chapter start. Reopen immediately after
  // a cross-chapter turn to verify that its progress was committed even at top 0.
  document.querySelectorAll('.dshr-toc__item')[0].click(); await at(1, 'start');
  assert(prev().disabled, 'previous is enabled at the start of the book');
  jump(1); await settled(originalEnd);
  next().click(); await until(() => currentChapter() === 2 && page() === 1, 'first page was not committed');
  document.querySelector('button[aria-label="返回书架"]').click();
  await until(async () => {
    const progress = (await getBook(savedBook.id))?.progress;
    return progress?.chapter === 1 && progress.scrollRatio === 0;
  }, 'cross-chapter progress was not saved');
  await open(); await at(2, 'start');
  document.querySelectorAll('.dshr-toc__item')[3].click(); await at(4, 'start');
  jump(1); await settled(pages());
  assert(next().disabled, 'next is enabled at the end of the book');
  results.push({ check: 'directory-book-ends-and-persisted-cross-chapter-progress' });

  const originalMatchMedia = window.matchMedia;
  window.matchMedia = query => query.includes('prefers-reduced-motion') ? { matches: true } : originalMatchMedia.call(window, query);
  document.querySelectorAll('.dshr-toc__item')[0].click(); await at(1, 'start');
  jump(1); await settled(originalEnd);
  next().dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
  await at(2, 'start');
  await sleep(250);
  next().dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 2 }));
  await at(2, 'start');
  assert(!document.querySelector('.dshr-flow-transition'), 'reduced motion still ran a seam animation');
  next().dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
  await settled(2);
  window.matchMedia = originalMatchMedia;
  document.querySelector('button[title="连续滚动阅读"]').click();
  await until(() => !document.querySelector('.dshr-paged-controls'), 'scroll mode did not activate');
  document.querySelectorAll('.dshr-toc__item')[3].click();
  await until(() => currentChapter() === 4 && scroll().scrollTop === 0, 'scroll-mode chapter jump did not open at the top');
  document.querySelector('button[title="横版纸质书翻页"]').click();
  await at(4, 'start');
  results.push({ check: 'reduced-motion-double-click-and-scroll-mode-chapter-jump' });
  assert(errors.length === 0, errors.join('; '));
  window.__pdfCheck = { state: 'passed', results };
} catch (error) {
  window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results };
}
