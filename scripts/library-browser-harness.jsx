import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReaderPage } from '../web/src/app.jsx';
import { styles } from '../web/src/styles.js';
import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { annotationStyles } from '../web/src/annotations/styles.js';
import {
  clearLibrary, getBook, listAnnotations, listBookCollections, listBooks, saveAnnotation,
  saveBook, saveBookCollection, updateBook,
} from '../web/src/storage.js';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const assert = (value, message) => { if (!value) throw new Error(message); };
const results = [];
const errors = [];
window.addEventListener('error', event => errors.push(event.message));
window.addEventListener('unhandledrejection', event => errors.push(String(event.reason)));
window.__pdfCheck = { state: 'running' };
const mount = document.getElementById('app');
const root = createRoot(mount);
const style = document.createElement('style');
style.textContent = styles + appearanceStyles + annotationStyles;
document.head.append(style);
document.documentElement.setAttribute('data-ds-dark-theme', '');

async function until(predicate, message) {
  for (let i = 0; i < 150; i += 1) {
    const found = await predicate();
    if (found) return found;
    await sleep(20);
  }
  throw new Error(message);
}

const dialog = () => document.querySelector('dialog[open]');
const named = (label, within = document) => [...within.querySelectorAll('button')].find(button => button.textContent.trim() === label || button.getAttribute('aria-label') === label);
const click = async (label, within = document) => {
  const button = named(label, within);
  assert(button && !button.disabled, `unavailable button ${label}`);
  button.click();
  await sleep(0);
};
const cards = () => [...document.querySelectorAll('.dshr-book')];
const folder = name => named(`打开书单 ${name}`)?.closest('.dshr-collection');
const setInput = async (element, value) => {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(element, value);
  element.dispatchEvent(new Event('input', { bubbles: true }));
  await sleep(0);
};
const row = name => listBookCollections().then(rows => rows.find(item => item.name === name));
const submit = async label => {
  await click(label, dialog());
  await until(() => !dialog(), `${label} did not finish: ${dialog()?.textContent || ''}`);
};
const capture = async name => {
  window.__flowCapture = { name };
  await until(() => !window.__flowCapture, `screenshot ${name} was not captured`);
};

try {
  const titles = ['Semiconductor Physics', 'Power Devices', 'Control Systems', 'Lecture 01', 'Lecture 02', 'Research Notes'];
  const colors = ['#224c67', '#a14b33', '#345d49', '#574c88', '#6e4c35'];
  const books = [];
  for (const [index, title] of titles.entries()) {
    const book = await saveBook(new File([`${title}\n\nExample reading material. ${'A paragraph for the reader. '.repeat(30)}`], `${title}.txt`, { type: 'text/plain' }));
    const cover = index < colors.length ? 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150"><rect width="100" height="150" fill="${colors[index]}"/><path d="M14 22h72M14 103h72" stroke="#f2e9cf"/><text x="14" y="54" fill="#f2e9cf" font-family="sans-serif" font-size="11">${title.split(' ')[0]}</text><text x="14" y="70" fill="#f2e9cf" font-family="sans-serif" font-size="11">${title.split(' ').slice(1).join(' ')}</text></svg>`) : '';
    books.push(await updateBook(book.id, {
      cover, category: index < 2 ? 'paper' : index < 5 ? 'book' : 'document', categoryManual: true,
      progress: index === 0 ? { chapter: 0, scrollRatio: 0.25, percent: 25 } : null,
    }));
  }
  const annotation = await saveAnnotation({ bookId: books[0].id, kind: 'flow', style: 'highlight', note: 'Preserve with original book' });
  root.render(<React.StrictMode><ReaderPage /></React.StrictMode>);
  await until(() => cards().length === titles.length && folder('文献'), 'initial library was not rendered');
  assert(folder('文献').textContent.includes('2 本') && folder('书籍').textContent.includes('3 本'), 'legacy classifications did not populate the default folders');

  await click('新建书单');
  await setInput(dialog().querySelector('input[required]'), '芯片与器件');
  for (const choice of [...dialog().querySelectorAll('input[type="checkbox"]')].slice(0, 5)) choice.click();
  await sleep(0);
  await submit('保存书单');
  const first = await row('芯片与器件');
  assert(first.bookIds.length === 5 && folder('芯片与器件').querySelectorAll('.dshr-collection__sample').length === 4, 'folder cover must show up to four members');
  await click('预览全部 5 本', folder('芯片与器件'));
  assert(folder('芯片与器件').querySelectorAll('ul li').length === 5, 'preview omitted members beyond the cover');
  await click('收起书名', folder('芯片与器件'));
  results.push({ check: 'default-folders-and-custom-preview', visibleCovers: 4, previewTitles: 5 });

  await click('新建书单');
  await setInput(dialog().querySelector('input[required]'), '待读论文');
  await submit('保存书单');
  const second = await row('待读论文');
  const addOne = title => click('加入书单', cards().find(card => card.textContent.includes(title)).closest('article'));
  const chooseDestination = async id => {
    dialog().querySelector('select').value = id;
    dialog().querySelector('select').dispatchEvent(new Event('change', { bubbles: true }));
    await sleep(0);
  };
  await addOne(titles[0]); await chooseDestination(second.id); await submit('加入');
  await setInput(document.querySelector('input[aria-label="搜索书架"]'), 'Lecture');
  await click('多选');
  await click('全选当前结果');
  await click('加入书单'); await chooseDestination(second.id); await submit('加入');
  assert((await row('待读论文')).bookIds.length === 3, 'bulk add did not retain the existing member');
  assert((await listBooks()).length === titles.length, 'collection membership duplicated a book');
  results.push({ check: 'single-and-batch-add-with-search' });

  await click('打开书单 芯片与器件');
  await capture('collection');
  await click('编辑书单');
  await capture('edit');
  await setInput(dialog().querySelector('input[required]'), '半导体与器件');
  await submit('保存书单');
  assert(document.querySelector('[aria-current="page"]').textContent.includes('半导体与器件'), 'rename did not update the active folder');
  await click(`从此书单移出 ${(await getBook(first.bookIds[0])).title}`);
  await until(() => cards().length === 4, 'single removal did not update the folder');
  await click('多选');
  cards()[0].click(); cards()[1].click();
  await sleep(0);
  await click('从此书单移出');
  await until(() => cards().length === 2, 'bulk removal did not update the folder');
  assert((await row('半导体与器件')).bookIds.length === 2, 'removed books remained in the stored folder');
  assert((await getBook(books[0].id)).progress.percent === 25, 'collection operation overwrote progress');
  assert((await listAnnotations(books[0].id)).some(item => item.id === annotation.id), 'collection operation removed an annotation');
  await click('返回书架');
  await until(() => folder('待读论文'), 'breadcrumb did not return to the shelf');

  // Two writes to the same collection must merge, including a simultaneous
  // rename. A failed member check must leave the existing row intact.
  await Promise.all([
    saveBookCollection({ id: second.id, add: [books[1].id] }),
    saveBookCollection({ id: second.id, name: '待精读', add: [books[2].id, books[0].id] }),
  ]);
  const edited = await row('待精读');
  assert(edited.bookIds.length === 5, 'concurrent membership writes lost or duplicated a book');
  const failed = await saveBookCollection({ id: edited.id, name: 'Bad update', add: ['missing-book'] }).then(() => false, () => true);
  assert(failed && (await row('待精读')).bookIds.length === 5, 'failed add partially changed the collection');
  root.render(null); await sleep(40);
  root.render(<ReaderPage />);
  await until(() => folder('待精读') && folder('半导体与器件'), 'folders did not persist across remount');
  results.push({ check: 'rename-remove-persist-and-concurrent-writes' });

  await click('预览全部 5 本', folder('待精读'));
  await capture('home');
  mount.style.width = '400px';
  await sleep(100);
  assert(document.querySelector('.dshr-library').scrollWidth <= mount.clientWidth, 'narrow library overflowed horizontally');
  await capture('narrow');
  mount.style.width = '';
  await click('打开书单 半导体与器件');
  await click('删除书单');
  await submit('删除书单');
  assert(!(await row('半导体与器件')) && (await listBooks()).length === titles.length, 'deleting a folder removed books or did not remove the folder');
  const toDelete = cards().find(card => card.textContent.includes(titles[1])).closest('article');
  await click(`从书架删除 ${titles[1]}`, toDelete);
  await click('删除', document.querySelector('[aria-label="删除文档"]'));
  await until(async () => (await getBook(books[1].id)) == null && cards().length === titles.length - 1, 'book deletion did not complete');
  assert(!(await row('待精读')).bookIds.includes(books[1].id), 'a deleted book left a stale membership');
  assert((await listAnnotations(books[0].id)).length === 1, 'deleting another book damaged annotations');
  results.push({ check: 'narrow-layout-and-safe-folder-or-book-deletion' });
  await clearLibrary();
  assert(!(await listBookCollections()).length && !(await listBooks()).length, 'clear library left stale folders');
  assert(errors.length === 0, errors.join('; '));
  window.__pdfCheck = { state: 'passed', results };
} catch (error) {
  window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results };
}
