import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReaderPage } from '../web/src/app.jsx';
import { styles } from '../web/src/styles.js';
import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { resolveAppearance } from '../web/src/appearance/appearance.js';
import { annotationStyles } from '../web/src/annotations/styles.js';
import {
  clearLibrary, deleteBook, deleteReaderBackground, getBook, getReaderBackground,
  listAnnotations, listBookCollections, listBooks, saveAnnotation, saveBook,
  saveBookCollection, saveReaderBackground, updateBook,
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
const mascot = async (pose, within = document) => {
  const matches = within.querySelectorAll('[data-mascot="' + pose + '"]');
  assert(matches.length === 1, 'unexpected count for mascot ' + pose);
  const sprite = matches[0];
  await until(() => sprite.complete && sprite.naturalWidth > 0, 'failed to load mascot ' + pose);
  assert(sprite.getAttribute('alt') === '' && sprite.tabIndex === -1 && !sprite.hidden, 'mascot should be decorative');
  assert(new URL(sprite.src).origin === location.origin, 'mascot was requested outside the host');
  return sprite;
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
  // Use actual IndexedDB with tiny fixtures that report the size under test.
  const sizeStub = (file, size) => Object.defineProperty(file, 'size', { value: size });
  const localLimit = 320 * 1024 * 1024;
  const atLimit = await saveBook(sizeStub(new File(['local boundary'], 'limit.txt'), localLimit));
  assert((await getBook(atLimit.id)).size === localLimit, 'local size boundary was not stored');
  await saveBook(sizeStub(new File(['over limit'], 'over.txt'), localLimit + 1)).then(
    () => { throw Error('oversized document was stored'); },
    error => assert(error.message.includes('超过 320 MB'), 'unexpected local size failure'),
  );
  assert((await listBooks()).length === 1, 'oversized file created a shelf entry');
  await deleteBook(atLimit.id);
  const backgroundLimit = 16 * 1024 * 1024;
  const background = label => new Blob([`<svg xmlns="http://www.w3.org/2000/svg"><title>${label}</title></svg>`], { type: 'image/svg+xml' });
  await saveReaderBackground(sizeStub(background('boundary'), backgroundLimit));
  await saveReaderBackground(sizeStub(background('over'), backgroundLimit + 1)).then(
    () => { throw Error('oversized background was stored'); },
    error => assert(error.message.includes('超过 16 MB'), 'unexpected background size failure'),
  );
  assert((await (await getReaderBackground()).text()).includes('<title>boundary</title>'), 'invalid background replaced the stored boundary fixture');
  await deleteReaderBackground();
  assert(resolveAppearance({ contentWidth: 1601 }).width === 1600, 'body width exceeded the CSS pixel limit');
  results.push({ check: 'b1-local-file-and-background-limits', localLimit, backgroundLimit, maxContentCssPx: 1600 });

  root.render(<ReaderPage />);
  await until(() => document.querySelector('.dshr-empty-books') && named('导入文档'), 'empty shelf did not initialize');
  await mascot('welcome');
  assert(cards().length === 0, 'empty shelf fixture contains documents');
  await capture('mascot-empty-home');
  root.render(null);
  await sleep(35);

  const titles = ['Semiconductor Physics', 'Power Devices', 'Control Systems', 'Lecture 01', 'Lecture 02', 'Research Notes'];
  const colors = ['#224c67', '#a14b33', '#345d49', '#574c88', '#6e4c35'];
  const books = [];
  for (const [index, title] of titles.entries()) {
    const book = await saveBook(new File([`${title}\n\nExample reading material. ${'A paragraph for the reader. '.repeat(30)}`], `${title}.txt`, { type: 'text/plain' }),
      { author: index === 5 ? 'Ada Example' : '' });
    const cover = index < colors.length ? 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150"><rect width="100" height="150" fill="${colors[index]}"/><path d="M14 22h72M14 103h72" stroke="#f2e9cf"/><text x="14" y="54" fill="#f2e9cf" font-family="sans-serif" font-size="11">${title.split(' ')[0]}</text><text x="14" y="70" fill="#f2e9cf" font-family="sans-serif" font-size="11">${title.split(' ').slice(1).join(' ')}</text></svg>`) : '';
    books.push(await updateBook(book.id, {
      cover, lastOpenedAt: 1000 + index, year: index === 0 ? "2024" : "", category: index < 2 ? 'paper' : index < 5 ? 'book' : 'document', categoryManual: true,
      progress: index === 0 ? { chapter: 0, scrollRatio: 0.25, percent: 25 } : null,
    }));
  }
  const annotation = await saveAnnotation({ bookId: books[0].id, kind: 'flow', style: 'highlight', note: 'Preserve with original book' });
  root.render(<React.StrictMode><ReaderPage /></React.StrictMode>);
  await until(() => cards().length === titles.length && folder('文献'), 'initial library was not rendered');
  assert(folder('文献').textContent.includes('2 本') && folder('书籍').textContent.includes('3 本'), 'legacy classifications did not populate the default folders');
  await mascot('welcome');
  await capture("mascot-home");
  await click("导入指南");
  assert(document.querySelector(".dshr-drop") && named("选择文件"), "import guide did not show its controls");
  await click("导入指南");
  assert(document.querySelector(".dshr-resume") && document.querySelector(".dshr-library-rows"), "scheme A library regions are missing");
  assert(document.querySelectorAll(".dshr-library-nav nav button").length === 5, "wrong shelf navigation count");
  const rows = cards();
  assert(rows[0].textContent.includes(titles.at(-1)) && rows.at(-1).textContent.includes("2024"), "recent items or metadata are in the wrong order");
  for (const [category, pose] of [['书籍', 'reading'], ['文献', 'search'], ['文档', 'note']]) {
    await click(category, document.querySelector(".dshr-library-nav"));
    assert(document.querySelector('[aria-current="page"]').textContent.includes(category) && cards().length > 0, `cannot open ${category}`);
    const sprite = await mascot(pose, document.querySelector(".dshr-library-title"));
    assert(sprite.getBoundingClientRect().width === 48, 'category mascot size mismatch');
    await capture('mascot-' + pose);
    await click('返回书架');
  }
  const search = document.querySelector('input[aria-label="搜索书架"]');
  await setInput(search, 'No matching fixture');
  await mascot('search', document.querySelector('.dshr-empty-books'));
  assert(document.querySelector('.dshr-empty-books').textContent.includes('No matching fixture'), 'missing no-results text');
  await capture('mascot-no-results');
  await setInput(search, 'Ada Example');
  assert(!document.querySelector('[data-mascot="search"]'), 'no-results mascot remained after a match');
  assert(cards().length === 1 && cards()[0].textContent.includes('Research Notes'), 'author search selected the wrong documents');
  await click('文档', cards()[0].closest('article'));
  await until(async () => (await getBook(books[5].id)).category === 'book', 'manual category change was not saved');
  await setInput(search, '');
  await click('一键整理');
  await until(() => named('一键整理') && !named('一键整理').disabled, 'automatic categorization did not finish');
  assert((await getBook(books[5].id)).category === 'book', 'automatic categorization overwrote a manual choice');
  results.push({ check: 'b1-default-categories-author-search-and-manual-override' });

  await click('新建书单');
  await setInput(dialog().querySelector('input[required]'), '芯片与器件');
  for (const choice of [...dialog().querySelectorAll('input[type="checkbox"]')].slice(0, 5)) choice.click();
  await sleep(0);
  await submit('保存书单');
  const first = await row('芯片与器件');
  assert(first.bookIds.length === 5 && folder('芯片与器件').querySelectorAll('.dshr-collection__sample').length === 4, 'folder cover must show up to four members');
  await click('预览全部 5 本', folder('芯片与器件'));
  assert(folder('芯片与器件').querySelectorAll('ul li').length === 5, 'preview omitted members beyond the cover');
  const preview = folder('芯片与器件').querySelector('ul li button');
  const previewTitle = preview.querySelector('span').textContent;
  preview.click();
  await until(() => document.querySelector('.dshr-content')?.textContent.includes(previewTitle), 'preview could not open a document');
  assert(!document.querySelector('[data-mascot]'), 'a mascot appeared in the reading view');
  await click('返回书架');
  await until(() => folder('芯片与器件'), 'book did not return to the shelf');
  results.push({ check: 'default-folders-and-custom-preview', visibleCovers: 4, previewTitles: 5 });

  await click('新建书单');
  await setInput(dialog().querySelector('input[required]'), '待读论文');
  await submit('保存书单');
  const second = await row('待读论文');
  await click('打开书单 待读论文');
  await mascot('sleep', document.querySelector('.dshr-empty-books'));
  assert(named('添加书籍'), 'empty collection action missing');
  await capture('mascot-sleep');
  await click('返回书架');
  const addOne = title => click('加入书单', cards().find(card => card.textContent.includes(title)).closest('article'));
  const chooseDestination = async id => {
    dialog().querySelector('select').value = id;
    dialog().querySelector('select').dispatchEvent(new Event('change', { bubbles: true }));
    await sleep(0);
  };
  await addOne(titles[0]); await chooseDestination(second.id); await submit('加入');
  await mascot('celebrate', document.querySelector('.dshr-library__notice'));
  assert(document.querySelector('.dshr-library__notice').textContent.includes('已加入'), 'missing success text');
  await capture('mascot-celebrate');
  await click('打开书单 待读论文');
  assert(!document.querySelector('[data-mascot="sleep"]'), 'non-empty collection showed the empty illustration');
  await click('返回书架');
  await setInput(document.querySelector('input[aria-label="搜索书架"]'), 'Lecture');
  await click('多选');
  await click('全选当前结果');
  await click('加入书单'); await chooseDestination(second.id); await submit('加入');
  await mascot('celebrate', document.querySelector('.dshr-library__notice'));
  assert((await row('待读论文')).bookIds.length === 3, 'bulk add did not retain the existing member');
  assert((await listBooks()).length === titles.length, 'collection membership duplicated a book');
  results.push({ check: 'single-and-batch-add-with-search' });
  await setInput(document.querySelector('input[aria-label="搜索书架"]'), '');

  await click('打开书单 芯片与器件');
  await capture('collection');
  await click('编辑书单');
  await capture('edit');
  await setInput(dialog().querySelector('input[required]'), '半导体与器件');
  await submit('保存书单');
  assert(document.querySelector("h1").textContent === "半导体与器件", 'rename did not update the active folder');
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
  const expectedResume = document.querySelector(".dshr-resume__body strong").textContent;
  document.querySelector(".dshr-resume").click();
  await until(() => document.querySelector(".dshr-topbar__title strong")?.textContent === expectedResume, "continue reading opened the wrong item");
  await click("返回书架");
  await until(() => folder("待精读"), "could not return to the redesigned shelf");


  await saveBookCollection({ name: "待阅专题", add: [books[2].id, books[3].id] });
  root.render(null); await sleep(30);
  root.render(<ReaderPage />);
  await until(() => folder("待阅专题"), "third fixture collection did not load");
  document.documentElement.removeAttribute("data-ds-dark-theme");
  await sleep(230);
  await capture("scheme-a-home");
  document.documentElement.setAttribute("data-ds-dark-theme", "");
  await click("预览全部 5 本", folder("待精读"));
  await capture("home");
  const heroSizes = [];
  let matrixCases = 0;
  for (const [width, expected] of [[540, 144], [900, 160], [1280, 192]]) {
    mount.style.width = width + 'px';
    for (const dark of [true, false]) {
      document.documentElement.toggleAttribute('data-ds-dark-theme', dark);
      await sleep(35);
      const sprite = await mascot('welcome');
      const library = document.querySelector('.dshr-library');
      assert(library.scrollWidth <= library.clientWidth, 'mascot layout overflowed at ' + width);
      assert(sprite.closest('.dshr-library-guide__open'), 'welcome mascot is missing from the guide');
      const size = sprite.getBoundingClientRect();
      assert(size.width === expected && size.height === expected, 'hero mascot size mismatch at ' + width);
      heroSizes.push({ width, dark, size: size.width });
      const importButton = named('导入文档');
      importButton.focus();
      assert(document.activeElement === importButton, 'import control lost keyboard focus');
      const header = importButton.closest('.dshr-hero').getBoundingClientRect();
      assert(header.height < 135, 'search and import took too much height at ' + width);
      const rect = sprite.getBoundingClientRect();
      const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      assert(hit !== sprite, 'mascot intercepted pointer events');
      matrixCases++;
      if (width === 540 && !dark) await capture('mascot-narrow-light');
    }
  }
  document.documentElement.setAttribute('data-ds-dark-theme', '');
  const welcome = await mascot('welcome');
  welcome.src = '/dsh-reader-assets/mascot/unavailable-fixture.webp';
  await until(() => welcome.hidden, 'broken mascot was not hidden');
  assert(named('导入文档') && document.querySelector('h1').textContent === '我的书架', 'asset failure hid library controls');
  results.push({ check: 'b6-mascot-scene-mapping-accessibility-and-fallback', poses: 6, states: 7, matrixCases, heroSizes, readerImages: 0, brokenImagesVisible: 0 });
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
  const fetchOnline = window.fetch;
  const onlineCount = (await listBooks()).length;
  window.fetch = (resource, init) => {
    if (resource !== '/dsh-reader/import/fetch') return fetchOnline(resource, init);
    const { url } = JSON.parse(init.body);
    if (url.endsWith('/blocked.txt')) return Promise.resolve(Response.json({ error: { message: '来源不在允许列表' } }, { status: 403 }));
    if (url.endsWith('/interrupted.txt')) return Promise.resolve(Response.json({ error: { message: '下载连接中断' } }, { status: 502 }));
    return Promise.resolve(new Response('B1 online fixture\n\nThis document must open once.', {
      headers: { 'content-type': 'text/plain', 'x-dsh-reader-filename': 'b1-online.txt' },
    }));
  };
  try {
    await click('公开书库导入');
    for (const [url, message] of [['https://example.org/blocked.txt', '来源不在允许列表'], ['https://arxiv.org/interrupted.txt', '下载连接中断']]) {
      await setInput(document.getElementById('dshr-online-url'), url);
      await click('下载并打开');
      await until(() => document.querySelector('.dshr-toast')?.textContent === message, `missing online import feedback for ${url}`);
      assert((await listBooks()).length === onlineCount, 'failed online import left a shelf entry');
    }
    await setInput(document.getElementById('dshr-online-url'), 'https://arxiv.org/ok.txt');
    await click('下载并打开');
    await until(() => document.querySelector('.dshr-content')?.textContent.includes('B1 online fixture'), 'successful import did not open');
    assert((await listBooks()).length === onlineCount + 1, 'successful online import did not add exactly one document');
    await click('返回书架');
    results.push({ check: 'b1-online-import-success-and-failure', addedDocuments: 1 });
  } finally {
    window.fetch = fetchOnline;
  }
  const imported = (await listBooks()).find(book => book.title.includes('b1-online') || book.file?.name === 'b1-online.txt' || book.fileName === 'b1-online.txt');
  assert(imported, 'missing temporary document for failed-add test');
  await addOne(imported.title);
  await chooseDestination(edited.id);
  await deleteBook(imported.id);
  await click('加入', dialog());
  await until(() => dialog()?.querySelector('[role="alert"]'), 'failed member save did not show an error');
  assert(!document.querySelector('[data-mascot="celebrate"]'), 'failed add showed the success illustration');
  assert(!(await row('待精读')).bookIds.includes(imported.id), 'failed add changed membership');
  results.push({ check: 'b6-collection-success-and-failure', successfulPaths: 2, falseCelebrations: 0 });
  await clearLibrary();
  assert(!(await listBookCollections()).length && !(await listBooks()).length, 'clear library left stale folders');
  assert(errors.length === 0, errors.join('; '));
  window.__pdfCheck = { state: 'passed', results };
} catch (error) {
  window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results };
}
