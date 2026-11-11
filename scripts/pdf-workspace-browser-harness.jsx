import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReaderPage } from '../web/src/app.jsx';
import { styles } from '../web/src/styles.js';
import { pdfStyles } from '../web/src/pdf/PdfViewer.jsx';
import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { annotationStyles } from '../web/src/annotations/styles.js';
import { listEvidence, saveBook } from '../web/src/storage.js';

const mount = document.getElementById('app');
const style = document.createElement('style');
style.textContent = styles + pdfStyles + appearanceStyles + annotationStyles;
document.head.append(style);
document.documentElement.setAttribute('data-ds-light-theme', '');
window.__pdfCheck = { state: 'running' };
const errors = [];
window.addEventListener('error', event => errors.push(event.message));
window.addEventListener('unhandledrejection', event => errors.push(String(event.reason)));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
async function until(check, message) {
  for (let attempt = 0; attempt < 200; attempt++) {
    const value = await check();
    if (value) return value;
    await wait(30);
  }
  throw new Error(message);
}
const findButton = (name, parent = document) => [...parent.querySelectorAll('button')]
  .find(button => button.getAttribute('aria-label') === name || button.textContent.trim() === name);
function press(name, parent = document) {
  const button = findButton(name, parent);
  assert(button && !button.disabled, 'Button unavailable: ' + name);
  button.click();
}
const pageField = () => document.querySelector('input[aria-label="页码"]');
const pageReady = number => pageField()?.value === String(number)
  && document.querySelector('.dshr-pdf-frame[data-page="' + number + '"][data-rendered=true]');
const sidebar = () => document.querySelector('.dshr-pdf-reading-tools');
const outline = () => document.querySelector('.dshr-pdf-outline');
async function capture(name) {
  window.__flowCapture = { name };
  await until(() => !window.__flowCapture, 'Capture timed out');
}

try {
  const emptyOutline = await (await fetch("/no-outline.pdf")).blob();
  await saveBook(new File([emptyOutline], "No outline.pdf", {type:"application/pdf"}));
  const blob = await (await fetch('/fixture.pdf')).blob();
  await saveBook(new File([blob], 'Reader Workspace Sample.pdf', { type:'application/pdf' }));
  createRoot(mount).render(<ReaderPage />);
  await until(() => findButton('打开 Reader Workspace Sample'), 'Shelf did not load');
  press('打开 Reader Workspace Sample');
  await until(() => pageReady(1) && sidebar() && outline(), 'Wide reader did not open its three regions');
  const go = await until(() => findButton('Method', outline()), 'PDF outline destinations did not load');
  go.click();
  await until(() => pageReady(2), 'Outline did not jump to physical page 2');
  await wait(180);
  const text = await until(() => document.querySelector('.dshr-pdf-frame[data-page="2"] [data-pdf-segment="p2-s0"]'), 'PDF text layer did not load');
  const range = document.createRange();
  range.selectNodeContents(text);
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(range);
  document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
  await until(() => !findButton('保存证据', sidebar()).disabled, 'Sidebar did not detect the PDF selection');
  press('保存证据', sidebar());
  const composer = await until(() => document.querySelector('[role="dialog"][aria-label="保存证据"]'), 'Save evidence did not open');
  const notes = composer.querySelector('textarea');
  Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set.call(notes, '核对第二页的方法段落。');
  notes.dispatchEvent(new Event('input', { bubbles:true }));
  press('保存证据', composer);
  await until(async () => (await listEvidence()).some(row => row.identity && row.anchor.page === 2), 'Evidence did not persist and verify');
  await until(() => sidebar().querySelector('article.is-current-page'), 'Saved evidence is absent from the sidebar');
  assert(!document.querySelector('[role="dialog"][aria-label="证据库"]'), 'Inline save opened the full library');
  press('Overview', outline());
  await until(() => pageReady(1), 'Outline did not return to page 1');
  press('回到原文', sidebar());
  await until(() => pageReady(2) && document.querySelector('.dshr-toast')?.textContent.includes('已精确定位原文'), 'Evidence did not return to the verified source');
  press('适宽', document.querySelector('.dshr-topbar'));
  await until(() => !findButton('横版')?.disabled, 'Fit page did not enable horizontal mode');
  press('横版');
  await until(() => pageReady(2) && document.querySelector('.dshr-pdf-scroll').dataset.pdfPage === '2', 'Horizontal view lost the current page');
  assert(findButton('Method', outline()).getAttribute('aria-current') === 'location', 'Outline highlighted the wrong page after evidence jump');
  await until(() => !document.querySelector('.dshr-toast'), 'Evidence toast did not dismiss');
  await capture('reader');
  document.documentElement.removeAttribute('data-ds-light-theme');
  document.documentElement.setAttribute('data-ds-dark-theme', '');
  await wait(180);
  assert(getComputedStyle(sidebar()).backgroundColor === 'rgb(34, 38, 48)', 'Dark sidebar does not match the dark palette');
  await capture('reader-dark');
  document.documentElement.removeAttribute('data-ds-dark-theme');
  document.documentElement.setAttribute('data-ds-light-theme', '');
  press('翻译', sidebar());
  await until(() => sidebar().textContent.includes('实时翻译开关'), 'Inactive translation state missing');
  press('实时翻译');
  await until(() => document.querySelector('.dshr-pdf-translation-panel'), 'Translation did not open in its own tab');
  press('实时翻译');
  press('证据', sidebar());
  await until(() => sidebar().querySelector('article'), 'Evidence disappeared when switching tabs');
  press('收起阅读侧栏');
  await until(() => !sidebar() && pageReady(2), 'Closing side panel lost the current page');
  press('阅读侧栏');
  await until(() => sidebar() && pageReady(2), 'Reopening side panel lost the current page');
  mount.style.width = '540px';
  await until(() => {
    const pdf = document.querySelector('.dshr-pdf-workspace');
    return !outline() && pdf?.clientWidth === 540 && pdf.scrollWidth === pdf.clientWidth;
  }, 'Narrow reader overflowed or kept the default outline');
  assert(document.querySelector('.dshr-pdf-scroll').offsetWidth === 540, 'Narrow sidebar stole paper width');
  press('PDF 目录');
  await until(() => outline()?.querySelector('button[title="Method"]'), 'Narrow outline did not open on request');
  press('Method', outline());
  await until(() => !outline() && pageReady(2), 'Narrow outline did not close after page jump');
  await capture('reader-narrow');
  press('进入沉浸模式');
  await until(() => document.querySelector('.dshr-root.is-immersive') && pageReadyOrImmersive(), 'Immersive reading did not hide the workspace panels');
  assert(!sidebar() && !outline() && !document.querySelector('[data-mascot]'), 'Immersive view contains workspace decoration');
  press('退出沉浸');
  await until(() => !document.querySelector('.dshr-root.is-immersive'), 'Immersive exit failed');
  press('返回书架');
  await until(() => findButton('打开 No outline'), 'No-outline sample absent');
  press('打开 No outline');
  await until(() => pageReady(1), 'No-outline PDF did not open');
  press('PDF 目录');
  await until(() => outline()?.textContent.includes('没有目录') && pageField(), 'No-outline PDF did not offer its page-number fallback');
  assert(errors.length === 0, errors.join('; '));
  window.__pdfCheck = { state:'passed', checks:['wide-three-column', 'dark-palette', 'real-outline-navigation', 'missing-outline-fallback', 'inline-evidence-save-and-verified-return', 'translation-tab', 'stable-page-on-pane-toggle', '540px-responsive', 'immersive'] };
} catch (error) {
  window.__pdfCheck = { state:'failed', error:error.stack || String(error) };
}

function pageReadyOrImmersive() {
  return document.querySelector('.dshr-pdf-frame[data-page="2"][data-rendered=true]');
}
