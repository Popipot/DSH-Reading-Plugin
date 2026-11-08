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
import { annotationStyles } from '../web/src/annotations/styles.js';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const raf = () => new Promise(requestAnimationFrame);
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const results = [];
const errors = [];
window.addEventListener('error', e => errors.push(e.message));
window.addEventListener('unhandledrejection', e => errors.push(String(e.reason)));
window.__pdfCheck = { state: 'running' };
const nativeAnimate = Element.prototype.animate;
const turnDurations = { slide: 250, cover: 300, flip: 500 };
let pauseAnimations = true;
Element.prototype.animate = function (frames, options) {
  const effect = nativeAnimate.call(this, frames, options);
  if (pauseAnimations) effect.pause();
  return effect;
};
const text = 'Reading should remain calm and continuous. Each page keeps its lines, illustrations and translation together while the next page becomes visible. '.repeat(5);
const html = `<h1>Continuous reading</h1>${Array.from({ length: 35 }, (_, i) => `<p><b>Passage ${i + 1}.</b> ${text}</p>`).join('')}`;
const epubFiles = {
  mimetype: 'application/epub+zip',
  'META-INF/container.xml': '<container><rootfiles><rootfile full-path="book.opf"/></rootfiles></container>',
  'book.opf': '<package version="3.0"><metadata><title>Animation checks</title></metadata><manifest><item id="a" href="a.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="a"/></spine></package>',
  'a.xhtml': `<html xmlns="http://www.w3.org/1999/xhtml"><body>${html}</body></html>`,
};
const root = createRoot(document.getElementById('app'));
let book, chapterIndex = 0, animation = 'slide', enabled = true, decorated = false;
let settings = { ...DEFAULT_SETTINGS, readingMode: 'book' };
function render() {
  root.render(<div className="dshr-root" data-reading-mode="book" style={{ ...appearanceVars(settings), '--dshr-font-size': `${settings.fontSize}px`, '--dshr-line-height': settings.lineHeight }}>
    <style>{styles + appearanceStyles + annotationStyles}</style><div className="dshr-reader">
    {decorated && <div className="dshr-topbar">Reading workspace</div>}<div className="dshr-body">
      {decorated && <aside style={{ width: 180, flex: 'none' }}>Contents</aside>}
      <FlowReader book={book} chapterIndex={chapterIndex} settings={settings} onChapterChange={() => {}} />
    </div><PagedReader enabled={enabled} animation={animation} bookMode bookFrame frameTop={0} readerKey={`${book.format}:${chapterIndex}`} /></div>
  </div>);
}
const scroll = () => document.querySelector('.dshr-content');
async function settled() {
  for (let i = 0; i < 120; i++) {
    if (scroll()?.dataset.readerPage && !scroll().dataset.readerTurning) return;
    await sleep(20);
  }
  throw new Error('Animation did not release navigation');
}
async function capture(name) {
  window.__flowCapture = { name };
  for (let i = 0; i < 200 && window.__flowCapture; i++) await sleep(10);
  assert(!window.__flowCapture, 'Screenshot acknowledgement timed out');
}
function startFrameInspection(mode, direction) {
  // A frozen animation can outlive its production watchdog while CDP takes
  // screenshots. Only stretch the timer of this deliberately paused turn.
  const schedule = window.setTimeout;
  const watchdog = turnDurations[mode] + 300;
  window.setTimeout = (callback, delay, ...args) => schedule.call(window, callback, delay === watchdog ? 6000 : delay, ...args);
  try {
    document.querySelector(direction > 0 ? '.dshr-paged-next' : '.dshr-paged-prev').click();
  } finally {
    window.setTimeout = schedule;
  }
}
async function examine(mode, direction, screenshots, mixed = false) {
  animation = mode; render(); await sleep(25);
  const before = Number(scroll().dataset.readerPage);
  startFrameInspection(mode, direction);
  const overlay = document.querySelector('.dshr-flow-transition');
  assert(overlay, `${book.format}/${mode}: no presentation layer`);
  assert(overlay.inert && overlay.getAttribute('aria-hidden') === 'true', 'snapshots must not capture selection, focus or accessibility');
  const effects = overlay.getAnimations({ subtree: true });
  assert(effects.length === (mode === 'slide' ? 2 : 1), 'paired slide / single cover / finite fold clock');
  const duration = turnDurations[mode];
  assert(effects.every(effect => effect.effect.getTiming().duration === duration), `${mode}: incorrect animation duration`);
  assert(Number(scroll().dataset.readerPage) === before + direction, 'cursor must commit exactly once');
  assert(Math.abs(scroll().scrollTop - Number(scroll().dataset.readerTarget)) < 1, 'live document must be at the accepted target');
  assert(overlay.querySelectorAll('[data-seg-id],[data-anno-block]').length === 0, 'snapshots duplicated live identities');
  assert([...overlay.querySelectorAll('[id]')].every(node => node.id.startsWith('dshr-snapshot-')), 'snapshot reused a live SVG/HTML ID');
  const bound = overlay.getBoundingClientRect();
  const viewport = scroll().getBoundingClientRect();
  assert(Math.abs(bound.top - viewport.top) < 1 && Math.abs(bound.left - viewport.left) < 1
    && Math.abs(bound.width - scroll().clientWidth) < 1, 'animation escaped the reading viewport');
  if (mixed) {
    const clonedImage = overlay.querySelector('img');
    assert(clonedImage?.complete && clonedImage.naturalWidth, 'snapshot lost its decoded illustration');
    assert(overlay.querySelector('.dshr-translation'), 'snapshot lost its translation card');
    assert(overlay.querySelector('.dshr-anno-band'), 'snapshot lost its highlight');
    const paint = overlay.querySelector('svg rect[fill^="url"]');
    const id = paint?.getAttribute('fill').slice(5, -1);
    assert(id && overlay.querySelector(`[id="${id}"]`), 'snapshot lost an SVG paint resource');
  }
  const stationary = overlay.querySelector('[data-turn-role="stationary"]');
  const base = stationary?.getBoundingClientRect();
  for (const progress of [0.02, 0.25, 0.5, 0.75, 0.98]) {
    for (const effect of effects) effect.currentTime = effect.effect.getTiming().duration * progress;
    await raf(); await raf();
    assert(overlay.isConnected, `${mode}: paused transition ended while inspecting a frame`);
    for (const page of overlay.querySelectorAll('.dshr-turn-page')) {
      assert(getComputedStyle(page).opacity === '1', `${mode}: a page faded to blank`);
      assert(page.querySelector('.dshr-block,.dshr-chapter__nav'), `${mode}: snapshot lost visible content`);
    }
    assert(getComputedStyle(scroll().querySelector('.dshr-content__inner')).transform === 'none', 'live chapter was transformed');
    if (mode === 'slide') {
      const pages = [...overlay.querySelectorAll('.dshr-turn-page')].map(page => page.getBoundingClientRect()).sort((a, b) => a.left - b.left);
      assert(pages[0].left <= bound.left + 1 && pages[1].right >= bound.right - 1 && Math.abs(pages[0].right - pages[1].left) < 1, 'slide exposed an empty gap');
    } else if (mode === 'cover') {
      const now = stationary.getBoundingClientRect();
      assert(now.left === base.left && now.top === base.top && getComputedStyle(stationary).transform === 'none', 'cover moved its bottom page');
    } else {
      const folded = overlay.querySelector('.dshr-turn-fold');
      const style = getComputedStyle(folded);
      assert(style.clipPath.startsWith('polygon(') && !style.clipPath.includes('NaN'), 'soft page lacks valid corner geometry');
      assert(style.transformOrigin === '0px 0px' && style.transform !== 'none', 'soft page must fold around the corner');
    }
    if (screenshots && [0.02, 0.5, 0.98].includes(progress)) await capture(`${mode}-${direction > 0 ? 'next' : 'prev'}-${Math.round(progress * 100)}`);
  }
  for (const effect of effects) effect.finish();
  await settled();
  assert(!document.querySelector('.dshr-flow-transition'), 'finished transition left a snapshot behind');
  assert(Number(scroll().dataset.readerPage) === before + direction, 'completion changed the accepted page');
  results.push({ format: book.format, mode, direction, frames: 5, check: 'opaque-continuous-corner-correct' });
}

// The reader paper can be light even while DSH itself uses a dark skin. Chapter
// controls must retain the paper's palette when moved into a transition view.
async function examineChapterControls(mode, direction, scenario) {
  animation = mode; render(); await sleep(25);
  const originals = [...scroll().querySelectorAll('.dshr-chapter__nav button')];
  const properties = ['backgroundColor', 'color', 'borderTopColor', 'borderTopWidth', 'borderRadius',
    'fontFamily', 'fontSize', 'lineHeight', 'opacity', 'boxShadow'];
  const expected = originals.map(button => {
    const style = getComputedStyle(button);
    return Object.fromEntries(properties.map(name => [name, style[name]]));
  });
  const before = Number(scroll().dataset.readerPage);
  startFrameInspection(mode, direction);
  const overlay = document.querySelector('.dshr-flow-transition');
  assert(overlay, 'chapter control transition did not start');
  const copies = [...overlay.querySelectorAll('.dshr-chapter__nav button')];
  assert(copies.length === 3, `wanted all three chapter controls, got ${copies.length}`);
  const effects = overlay.getAnimations({ subtree: true });
  for (const progress of [0, 0.5, 0.98]) {
    for (const effect of effects) effect.currentTime = effect.effect.getTiming().duration * progress;
    await raf(); await raf();
    if (mode === 'flip' && direction > 0 && progress === 0.98) await capture(`chapter-controls-${scenario}`);
    copies.forEach((button, i) => {
      const actual = getComputedStyle(button);
      for (const name of properties) assert(actual[name] === expected[i][name],
        `${mode}/${direction}: chapter control ${i} ${name} changed from ${expected[i][name]} to ${actual[name]}`);
      assert(button.disabled === originals[i].disabled, 'chapter control disabled state changed');
      const icon = getComputedStyle(button.querySelector('svg'));
      const originalIcon = getComputedStyle(originals[i].querySelector('svg'));
      assert(icon.fill === originalIcon.fill && icon.stroke === originalIcon.stroke, 'chapter icon paint changed');
    });
  }
  for (const effect of effects) effect.finish();
  await settled();
  assert(Number(scroll().dataset.readerPage) === before + direction, 'chapter controls changed pagination');
  originals.forEach((button, i) => {
    assert(button.isConnected, 'live chapter control was replaced');
    const actual = getComputedStyle(button);
    for (const name of properties) assert(actual[name] === expected[i][name], 'live control palette changed after animation');
  });
  results.push({ check: 'chapter-controls-retain-paper-palette', scenario, mode, direction });
}

try {
  const fixtures = [
    ['epub', new Blob([zipSync(Object.fromEntries(Object.entries(epubFiles).map(([k, v]) => [k, strToU8(v)])))])],
    ['html', new Blob([`<html><body>${html}</body></html>`])],
    ['md', new Blob([Array.from({ length: 35 }, (_, i) => `**Passage ${i + 1}.** ${text}`).join('\n\n')])],
    ['txt', new Blob([Array.from({ length: 35 }, (_, i) => `Passage ${i + 1}. ${text}`).join('\n\n')])],
    ['mobi', await (await fetch('/fixture.mobi')).blob()],
  ];
  for (const [format, blob] of fixtures) {
    root.render(null); await sleep(25);
    book = await parseBook(blob, { fileName: `animation.${format}` });
    chapterIndex = format === 'mobi' ? book.chapters.reduce((best, c, i, chapters) => c.blocks.length > chapters[best].blocks.length ? i : best, 0) : 0;
    render(); await sleep(150); await settled();
    scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { top: 1600 } }));
    await settled();
    for (const mode of ['slide', 'cover', 'flip']) {
      await examine(mode, 1, format === 'epub');
      await examine(mode, -1, format === 'epub');
    }
  }
  root.render(null); await sleep(25);
  book = await parseBook(new Blob([`<html><body>${html}</body></html>`]), { fileName: 'chapter-controls.html' });
  const sourceChapter = book.chapters[0];
  book.chapters = ['关于判断与决策的有趣研究', '快思考，慢思考', '主要内容'].map((title, index) => ({
    ...sourceChapter, title, id: `chapter-controls-${index}`,
  }));
  decorated = true;
  for (const scenario of [
    { name: 'dark-host-sepia-middle', dark: true, paper: 'sepia', chapter: 1 },
    { name: 'dark-host-paper-first', dark: true, paper: 'paper', chapter: 0 },
    { name: 'light-host-night-last', dark: false, paper: 'night', chapter: 2 },
  ]) {
    document.documentElement.toggleAttribute('data-ds-dark-theme', scenario.dark);
    chapterIndex = scenario.chapter;
    settings = { ...DEFAULT_SETTINGS, readingMode: 'book', backgroundPreset: scenario.paper };
    // Let the intentional 160 ms control palette transition finish after a
    // theme change; the assertion below isolates changes caused by page turns.
    render(); await sleep(220); await settled();
    const last = Number(scroll().dataset.readerPages);
    for (const mode of ['slide', 'cover', 'flip']) {
      scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { top: scroll().scrollHeight } }));
      await settled();
      assert(Number(scroll().dataset.readerPage) === last, 'could not reach chapter controls');
      await examineChapterControls(mode, -1, scenario.name);
      await examineChapterControls(mode, 1, scenario.name);
    }
  }
  document.documentElement.removeAttribute('data-ds-dark-theme');
  // Real images + translation cards, dark paper, and asynchronous updates while
  // the presentation is frozen. The original node must survive every effect.
  root.render(null); await sleep(25);
  book = await parseBook(new Blob([`<html><body>${html}</body></html>`]), { fileName: 'mixed.html' });
  chapterIndex = 0; decorated = true;
  settings = { ...settings, backgroundPreset: 'night', brightness: 0.85 };
  render(); await sleep(100); await settled();
  const live = scroll().querySelector('.dshr-content__inner');
  const blocks = [...live.querySelectorAll('.dshr-block')];
  const visible = blocks[1];
  const card = document.createElement('div');
  card.className = 'dshr-translation'; card.textContent = '同步译文在动画中保持稳定。A translation card keeps its original styling.';
  visible.prepend(card);
  const image = new Image();
  image.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="460" height="180"><rect width="460" height="180" fill="#567b82"/><path d="M30 140 L140 40 250 120 350 30 430 90" fill="none" stroke="#f5ddab" stroke-width="9"/></svg>');
  image.style.cssText = 'display:block;width:460px;max-width:100%;height:180px';
  visible.prepend(image); await image.decode(); await sleep(80); await settled();
  const diagram = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  diagram.setAttribute('width', '180'); diagram.setAttribute('height', '25');
  diagram.innerHTML = '<defs><linearGradient id="original-diagram-gradient"><stop stop-color="#987"/><stop offset="1" stop-color="#abd"/></linearGradient></defs><rect width="180" height="25" fill="url(#original-diagram-gradient)"/>';
  visible.prepend(diagram); await sleep(60);
  for (const mode of ['slide', 'cover', 'flip']) {
    scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { top: 0 } }));
    await settled();
    const mark = document.createElement('span'); mark.className = 'dshr-anno-band';
    mark.style.cssText = 'left:40px;top:120px;width:140px;height:20px';
    scroll().querySelector('.dshr-anno-layer').append(mark);
    await examine(mode, 1, false, true);
  }
  assert(live.isConnected && card.isConnected && image.isConnected, 'animation replaced the selectable original DOM');
  results.push({ check: 'dark-paper-brightness-image-translation-highlight-and-offset-viewport' });
  // A mode change unmounts an active fold and must release its finite clock.
  animation = 'flip'; render(); await sleep(25);
  document.querySelector('.dshr-paged-next').click();
  assert(document.querySelector('.dshr-flow-transition'), 'fold did not start');
  enabled = false; render(); await sleep(35);
  assert(!document.querySelector('.dshr-flow-transition') && !scroll().dataset.readerTurning, 'mode change leaked active fold');
  enabled = true; render(); await sleep(65); await settled();
  // OS reduced-motion skips every style and keeps the same page semantics.
  const media = window.matchMedia;
  window.matchMedia = query => query.includes('prefers-reduced-motion') ? { matches: true } : media.call(window, query);
  for (const mode of ['slide', 'cover', 'flip']) {
    animation = mode; render(); await sleep(20);
    for (let index = 0; index < 10; index++) {
      const page = Number(scroll().dataset.readerPage);
      const direction = index % 2 === 0 ? 1 : -1;
      document.querySelector(direction === 1 ? '.dshr-paged-next' : '.dshr-paged-prev').click();
      assert(!document.querySelector('.dshr-flow-transition'), 'reduced motion started a transition');
      await settled();
      assert(!document.querySelector('.dshr-flow-transition') && Number(scroll().dataset.readerPage) === page + direction, 'reduced motion blocked navigation');
    }
  }
  window.matchMedia = media;
  results.push({ check: 'active-fold-mode-cleanup-and-reduced-motion-all-styles', turnsPerStyle: 10, decorativeAnimations: 0 });
  // Resize while a soft page is active: its old viewport cannot cover the new
  // surface, so it must finish promptly and retain the accepted text position.
  document.querySelector('.dshr-paged-next').click();
  const accepted = scroll().dataset.readerNavigation;
  document.getElementById('app').style.width = '900px';
  await sleep(120); await settled();
  assert(!document.querySelector('.dshr-flow-transition') && scroll().dataset.readerNavigation === accepted, 'resize replayed/corrupted the accepted turn');
  results.push({ check: 'active-fold-resize-commits-without-replaying-navigation' });
  document.querySelector('.dshr-paged-next').click();
  const frozen = document.querySelector('.dshr-flow-transition');
  const originalSize = getComputedStyle(frozen).getPropertyValue('--dshr-font-size');
  const navigation = scroll().dataset.readerNavigation;
  settings = { ...settings, fontSize: 26, lineHeight: 2.1, backgroundPreset: 'paper' };
  render(); await raf(); await raf();
  assert(getComputedStyle(frozen).getPropertyValue('--dshr-font-size') === originalSize, 'settings reflowed the frozen snapshot');
  assert(getComputedStyle(scroll()).getPropertyValue('--dshr-font-size') === '26px', 'live settings did not update');
  for (const effect of frozen.getAnimations({ subtree: true })) effect.finish();
  await settled();
  assert(scroll().dataset.readerNavigation === navigation, 'settings replayed a turn');
  results.push({ check: 'active-fold-freezes-typography-until-anchor-reflow' });
  // A large DOM block gracefully falls back without cloning the chapter.
  const giant = document.createElement('div');
  giant.className = 'dshr-block'; giant.textContent = 'x'.repeat(70000); giant.style.cssText = 'height:900px;overflow:hidden';
  live.prepend(giant); await sleep(60);
  scroll().dispatchEvent(new CustomEvent('dshr-flow-navigate', { cancelable: true, detail: { top: 0 } }));
  await settled();
  const from = Number(scroll().dataset.readerPage);
  document.querySelector('.dshr-paged-next').click(); await settled();
  assert(Number(scroll().dataset.readerPage) === from + 1 && !document.querySelector('.dshr-flow-transition'), 'large-block fallback stalled navigation');
  results.push({ check: 'bounded-large-block-fallback-and-live-node-preservation' });
  assert(!errors.length, errors.join('; '));
  window.__pdfCheck = { state: 'passed', results };
} catch (error) { window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results }; }
