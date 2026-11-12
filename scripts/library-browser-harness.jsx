import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReaderPage } from '../web/src/app.jsx';
import { styles } from '../web/src/styles.js';
import { appearanceStyles } from '../web/src/appearance/appearance.css.js';
import { resolveAppearance } from '../web/src/appearance/appearance.js';
import { annotationStyles } from '../web/src/annotations/styles.js';
import {
  clearLibrary, deleteBook, deleteReaderBackground, getBook, getReaderBackground,
  listAnnotations, listBookCollections, listBooks, loadSettings, saveAnnotation, saveBook,
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

async function until(predicate, message, timeoutMs = 3000) {
  const deadline = performance.now() + timeoutMs;
  while (performance.now() < deadline) {
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
  await click('取消', dialog());
  document.documentElement.removeAttribute('data-ds-dark-theme');
  const shelfTheme = () => document.querySelector('.dshr-library-shell')?.dataset.libraryTheme;
  const picker = () => document.querySelector('.dshr-theme-picker:popover-open');
  const artUrl = '/dsh-reader-assets/mascot/welcome-background.webp';
  const backdropPane = () => document.querySelector('.dshr-library-pane');
  const backdrop = () => getComputedStyle(backdropPane(), '::before');
  const savedKey = 'dsh-reader:settings:v1';
  const bodyAnchors = { welcome:[0.489,0.486], search:[0.49,0.479], reading:[0.499,0.547], note:[0.505,0.55] };
  const measureBackdrop = (pose, width) => {
    const pane = backdropPane().getBoundingClientRect();
    const art = backdrop();
    const side = parseFloat(art.width);
    const transform = new DOMMatrix(art.transform);
    const [bodyX, bodyY] = bodyAnchors[pose];
    const x = parseFloat(art.left) + transform.m41 + side * bodyX;
    const y = parseFloat(art.top) + transform.m42 + side * bodyY;
    const previousSide = width === 540 ? Math.min(680, pane.width * 1.32) : Math.min(1180, pane.width * 1.11);
    const anchorError = Math.max(Math.abs(x - pane.width / 2), Math.abs(y - pane.height / 2));
    const scale = side / previousSide * 100;
    assert(anchorError <= 1 && scale >= 112, `mascot artwork composition ${pose}: offset ${anchorError}px, scale ${scale}%`);
    return { artSideCssPx:side, previousSideCssPx:previousSide, anchorErrorCssPx:anchorError, backdropScalePercent:scale };
  };
  assert(shelfTheme() === 'paper' && !performance.getEntriesByName(location.origin + artUrl).length,
    'paper loaded the optional theme asset');
  const before = localStorage.getItem(savedKey);
  const bookIds = (await listBooks()).map(book => book.id).sort().join(',');
  const collectionsBefore = JSON.stringify(await listBookCollections());
  const themeButton = named('主题');
  assert(themeButton === document.querySelector('.dshr-library-nav__actions > button:last-of-type'), 'theme entry is not last in the sidebar');
  themeButton.focus();
  await click('主题');
  await until(picker, 'theme picker did not open');
  assert(picker().querySelectorAll('.dshr-theme-option').length === 3 && picker().querySelectorAll('.dshr-theme-apply:disabled').length === 1, 'unexpected theme count or applied label');
  await click('预览鲸海蓝', picker());
  await until(() => shelfTheme() === 'whale-blue', 'theme preview did not update the current shelf');
  assert(localStorage.getItem(savedKey) === before, 'preview wrote the theme to storage');
  assert(backdrop().backgroundImage.includes(artUrl) && backdrop().opacity === '0.29' && backdrop().pointerEvents === 'none',
    'blue background did not use the approved visual treatment');
  assert(!document.querySelector('[data-mascot="welcome"]'), 'blue home duplicated the welcome mascot');
  const asset = new Image();
  asset.src = artUrl;
  await asset.decode();
  assert(asset.naturalWidth === 960 && asset.naturalHeight === 960, 'incorrect background asset size');
  await until(() => !document.querySelector('.dshr-toast'), 'previous reader toast did not close', 6000);
  await capture('whale-blue-preview');
  picker().dispatchEvent(new KeyboardEvent('keydown', { key:'Escape', bubbles:true, cancelable:true }));
  await until(() => shelfTheme() === 'paper' && !picker(), 'cancel did not restore paper');
  assert(document.activeElement === themeButton && localStorage.getItem(savedKey) === before,
    'cancel did not restore focus or wrote to storage');

  await click('主题');
  await click('应用鲸海蓝', picker());
  await until(() => shelfTheme() === 'whale-blue' && loadSettings().libraryTheme === 'whale-blue' && !picker(),
    'one-click apply did not save whale blue');
  root.render(null);
  await sleep(30);
  root.render(<ReaderPage />);
  await until(() => shelfTheme() === 'whale-blue' && cards().length > 0, 'saved blue theme did not survive remount');
  assert((await listBooks()).map(book => book.id).sort().join(',') === bookIds
    && JSON.stringify(await listBookCollections()) === collectionsBefore, 'theme apply changed library data');
  await capture('whale-blue-home');
  let blueLayoutCases = 0;
  for (const width of [540,1280]) {
    mount.style.width = width + 'px';
    for (const dark of [false,true]) {
      document.documentElement.toggleAttribute('data-ds-dark-theme', dark);
      await sleep(55);
      await click('主题');
      const rect = picker().getBoundingClientRect();
      const library = document.querySelector('.dshr-library');
      const bounds = library.closest('.dshr-library-shell').getBoundingClientRect();
      assert(rect.x >= bounds.x && rect.y >= bounds.y && rect.right <= bounds.right && rect.bottom <= bounds.bottom
        && library.scrollWidth === library.clientWidth, 'theme chooser overflowed the viewport');
      assert(backdrop().opacity === (dark ? '0.22' : '0.29'), 'wrong theme opacity for host mode');
      if (width === 540 && !dark) await capture('whale-blue-narrow');
      if (width === 1280 && dark) await capture('whale-blue-dark');
      await click('关闭主题选择', picker());
      blueLayoutCases++;
    }
  }
  mount.style.width = '';
  document.documentElement.removeAttribute('data-ds-dark-theme');
  const missing = document.createElement('style');
  missing.textContent = '.dshr-library-pane[data-library-backdrop]::before { background-image:url("/dsh-reader-assets/mascot/theme-missing-fixture.webp") }';
  document.head.append(missing);
  const missingStatus = await fetch('/dsh-reader-assets/mascot/theme-missing-fixture.webp').then(response=>response.status);
  assert(missingStatus === 404 && named('导入文档') && cards().length && !document.querySelector('.dshr-library img[src*="theme-missing"]'),
    'missing background disabled the book list or controls');
  missing.remove();
  await click('打开书单 待精读');
  assert(backdrop().backgroundImage === 'none' && shelfTheme() === 'whale-blue', 'background leaked into a custom book list');
  await click('返回书架');
  cards()[0].click();
  await until(() => document.querySelector('.dshr-reader'), 'unable to open reader with whale blue applied');
  assert(!document.querySelector('[data-library-theme]') && !document.querySelector('.dshr-theme-picker'),
    'library theme leaked into document reading');
  await click('返回书架');
  await until(() => shelfTheme() === 'whale-blue', 'returning from reader lost the theme');
  await click('主题');
  await click('预览纸本', picker());
  await until(() => shelfTheme() === 'paper', 'paper preview failed from blue');
  assert(loadSettings().libraryTheme === 'whale-blue', 'paper preview persisted unexpectedly');
  document.querySelector('h1').dispatchEvent(new PointerEvent('pointerdown',{ bubbles:true }));
  await until(() => shelfTheme() === 'whale-blue' && !picker(), 'outside pointer did not restore the applied theme');
  await click('主题');
  await click('应用纸本', picker());
  await until(() => shelfTheme() === 'paper' && loadSettings().libraryTheme === 'paper', 'paper apply failed');
  root.render(null);
  await sleep(30);
  const stable = localStorage.getItem(savedKey);
  let compatibilityCases = 0;
  for (const legacy of [{ settingsVersion:2, fontSize:22 }, { settingsVersion:2, libraryTheme:'unsupported', fontSize:22 }]) {
    localStorage.setItem(savedKey, JSON.stringify(legacy));
    const loaded = loadSettings();
    assert(loaded.libraryTheme === 'paper' && loaded.fontSize === 22, 'legacy or unknown theme did not fall back safely');
    compatibilityCases++;
  }
  localStorage.setItem(savedKey, stable);
  root.render(<ReaderPage />);
  await until(() => shelfTheme() === 'paper', 'saved paper theme did not survive remount');
  results.push({ check:'b8-library-themes', choices:3, previewWrites:0, cancelPaths:2, persistedSwitches:2, blueLayoutCases,
    compatibilityCases, backgroundWidth:asset.naturalWidth, backgroundOnCustomCollection:0, backgroundInReader:0, defaultBackgroundRequests:0, missingStatus });
  const categories = [['文献','paper','search'],['书籍','book','reading'],['文档','document','note']];
  const categoryUrl = pose => '/dsh-reader-assets/mascot/' + pose + '-background.webp';
  const requestCount = pose => performance.getEntriesByName(location.origin + categoryUrl(pose)).length;
  const totalRequests = () => ['welcome',...categories.map(([, ,pose]) => pose)].reduce((total,pose) => total + requestCount(pose),0);
  assert(categories.every(([, ,pose]) => requestCount(pose) === 0), 'category backgrounds were loaded early or in paper mode');
  for (const [label, category] of categories) {
    for (let number = 1; number <= 24; number++) {
      const title = label + '样本 ' + number;
      const doc = await saveBook(new File([title], title + '.txt', { type:'text/plain' }));
      await updateBook(doc.id, { category, categoryManual:true });
    }
  }
  root.render(null);
  await sleep(30);
  root.render(<ReaderPage />);
  await until(() => cards().length >= 72, 'category scrolling fixtures did not load');
  const showCategory = label => click(label, document.querySelector('.dshr-library-nav'));
  for (const [label] of categories) {
    await showCategory(label);
    assert(!backdropPane().hasAttribute('data-library-backdrop'), 'paper mode used a background');
  }
  assert(categories.every(([, ,pose]) => requestCount(pose) === 0), 'paper mode requested a category backdrop');
  await showCategory('我的书架');
  await click('主题');
  await click('应用鲸海蓝', picker());
  for (const [label, ,pose] of categories) {
    const beforeRequests = totalRequests();
    await showCategory(label);
    await until(() => requestCount(pose) === 1, 'active category did not request its own backdrop');
    assert(totalRequests() === beforeRequests + 1, 'entering one category requested multiple backdrops');
    assert(backdropPane().dataset.libraryBackdrop === pose && backdrop().backgroundImage.includes(categoryUrl(pose))
      && backdrop().backgroundImage.includes(location.origin) && !document.querySelector('.dshr-library-title .dshr-library-mascot'),
      'category backdrop did not match or duplicated its sticker');
    const asset = new Image();
    asset.src = categoryUrl(pose);
    await asset.decode();
    assert(asset.naturalWidth === 960 && asset.naturalHeight === 960, 'wrong category backdrop dimensions');
    await capture('category-backdrop-' + pose);
  }
  await showCategory('我的书架');
  assert(backdropPane().dataset.libraryBackdrop === 'welcome' && backdrop().backgroundImage.includes(artUrl), 'home did not restore welcome artwork');

  const scrollCases = [];
  for (const width of [540,1280]) {
    mount.style.width = width + 'px';
    for (const dark of [false,true]) {
      document.documentElement.toggleAttribute('data-ds-dark-theme', dark);
      for (const [label, pose] of [['我的书架','welcome'],...categories.map(([name, ,key]) => [name,key])]) {
        await showCategory(label);
        const pane = backdropPane();
        const shelf = pane.querySelector('.dshr-library');
        const content = shelf.querySelector('.dshr-library__inner');
        shelf.scrollTop = 0;
        const start = pane.getBoundingClientRect();
        const contentStart = content.getBoundingClientRect().top;
        const beforeRequests = totalRequests();
        const art = backdrop();
        assert(pane.dataset.libraryBackdrop === pose && art.position === 'absolute'
          && art.pointerEvents === 'none' && art.opacity === (dark ? '0.22' : '0.29'), 'backdrop layering or opacity changed');
        shelf.scrollTop = 360;
        await until(() => shelf.scrollTop >= 300, 'category fixture cannot scroll 300 CSS px');
        const end = pane.getBoundingClientRect();
        const shift = Math.max(Math.abs(start.x - end.x), Math.abs(start.y - end.y));
        assert(shift <= 1 && contentStart - content.getBoundingClientRect().top >= 300 && pane.scrollTop === 0
          && shelf.scrollWidth === shelf.clientWidth, 'background moved, content did not scroll, or shelf overflowed');
        assert(totalRequests() === beforeRequests, 'scrolling requested a background again');
        scrollCases.push({ width, dark, pose, ...measureBackdrop(pose, width), scrollDistanceCssPx:shelf.scrollTop, backdropShiftCssPx:shift });
        if (width === 1280 && dark && pose === 'search') await capture('category-backdrop-search-scrolled');
      }
    }
  }
  mount.style.width = '';
  document.documentElement.removeAttribute('data-ds-dark-theme');
  const categoryMissing = document.createElement('style');
  categoryMissing.textContent = '.dshr-library-pane[data-library-backdrop="note"]::before { background-image:url("/dsh-reader-assets/mascot/category-missing-fixture.webp") }';
  document.head.append(categoryMissing);
  const missingCategoryStatus = await fetch('/dsh-reader-assets/mascot/category-missing-fixture.webp').then(response=>response.status);
  assert(missingCategoryStatus === 404 && cards().length >= 24 && named('导入文档')
    && !document.querySelector('img[src*="category-missing"]'), 'missing category artwork disabled the shelf');
  categoryMissing.remove();
  await showCategory('我的书架');
  await click('主题');
  await click('应用纸本', picker());
  await until(() => shelfTheme() === 'paper', 'category test did not restore paper');
  results.push({ check:'b9-category-backdrops', matchedCategories:3, layersPerCategory:1, duplicateCategoryStickers:0,
    layoutCombinations:4, scrollCases, firstCategoryArtRequests:1, paperCategoryArtRequests:0, scrollArtRequests:0, missingCategoryStatus });

  const navyBefore = localStorage.getItem(savedKey);
  await click('主题');
  await click('预览藏青像素', picker());
  await until(() => shelfTheme() === 'whale-navy', 'navy preview did not update the shelf');
  assert(localStorage.getItem(savedKey) === navyBefore, 'navy preview wrote the theme to storage');
  document.dispatchEvent(new KeyboardEvent('keydown', { key:'Escape', bubbles:true, cancelable:true }));
  await until(() => shelfTheme() === 'paper' && !picker(), 'Escape did not restore paper from the navy preview');
  await click('主题');
  await click('应用藏青像素', picker());
  await until(() => shelfTheme() === 'whale-navy' && loadSettings().libraryTheme === 'whale-navy' && !picker(), 'navy theme was not saved');
  root.render(null);
  await sleep(30);
  root.render(<ReaderPage />);
  await until(() => shelfTheme() === 'whale-navy' && cards().length >= 72, 'saved navy theme did not survive remount');
  assert(!document.querySelector('.dshr-library .dshr-library-mascot'), 'navy theme duplicated a sticker over its backdrop');
  const navyRail = getComputedStyle(document.querySelector('.dshr-library-nav')).backgroundColor;
  assert(navyRail === 'rgb(27, 42, 107)', 'navy rail colour is ' + navyRail);
  await capture('whale-navy-home');
  const navyCases = [];
  for (const width of [540,1280]) {
    mount.style.width = width + 'px';
    for (const dark of [false,true]) {
      document.documentElement.toggleAttribute('data-ds-dark-theme', dark);
      for (const [label, pose] of [['我的书架','welcome'],...categories.map(([name, ,key]) => [name,key])]) {
        await showCategory(label);
        const pane = backdropPane();
        const shelf = pane.querySelector('.dshr-library');
        const content = shelf.querySelector('.dshr-library__inner');
        shelf.scrollTop = 0;
        const start = pane.getBoundingClientRect();
        const contentStart = content.getBoundingClientRect().top;
        const beforeRequests = totalRequests();
        const art = backdrop();
        assert(pane.dataset.libraryBackdrop === pose && art.backgroundImage.includes(pose + '-background.webp') && art.position === 'absolute'
          && art.pointerEvents === 'none' && art.opacity === (dark ? '0.22' : '0.3'), 'navy backdrop did not match ' + pose);
        assert(!document.querySelector('.dshr-library-title .dshr-library-mascot'), 'navy category duplicated its sticker');
        shelf.scrollTop = 360;
        await until(() => shelf.scrollTop >= 300, 'navy fixture cannot scroll 300 CSS px');
        const end = pane.getBoundingClientRect();
        const shift = Math.max(Math.abs(start.x - end.x), Math.abs(start.y - end.y));
        assert(shift <= 1 && contentStart - content.getBoundingClientRect().top >= 300 && shelf.scrollWidth === shelf.clientWidth,
          'navy background moved, content did not scroll, or shelf overflowed');
        assert(totalRequests() === beforeRequests, 'navy scrolling requested a background again');
        navyCases.push({ width, dark, pose, ...measureBackdrop(pose, width), scrollDistanceCssPx:shelf.scrollTop, backdropShiftCssPx:shift });
        if (width === 1280 && !dark && pose !== 'welcome') await capture('whale-navy-' + pose);
        if (width === 1280 && dark && pose === 'welcome') await capture('whale-navy-dark-scrolled');
        if (width === 540 && !dark && pose === 'welcome') { shelf.scrollTop = 0; await capture('whale-navy-narrow'); }
      }
    }
  }
  mount.style.width = '';
  document.documentElement.removeAttribute('data-ds-dark-theme');
  await showCategory('我的书架');
  await click('主题');
  assert(picker().querySelectorAll('.dshr-theme-apply:disabled').length === 1 && named('应用藏青像素', picker()).disabled, 'navy was not marked as applied');
  await click('应用纸本', picker());
  await until(() => shelfTheme() === 'paper' && loadSettings().libraryTheme === 'paper', 'navy test did not restore paper');
  results.push({ check:'b10-whale-navy-theme', choices:3, previewWrites:0, persistedSwitches:2, backdropPoses:4, layoutCombinations:4, navyCases,
    lightOpacity:0.3, darkOpacity:0.22, duplicateStickers:0, railColour:navyRail });

  const paperTitle = 'Card footer PDF';
  for (const title of [paperTitle, 'Card layout sample']) {
    const pdf = await saveBook(new File(['%PDF-1.4\n%' + title + '\n%%EOF'], title + '.pdf', { type:'application/pdf' }));
    await updateBook(pdf.id, { category:'paper', categoryManual:true });
  }
  root.render(null);
  await sleep(30);
  root.render(<ReaderPage />);
  await until(() => named('编辑论文出处 ' + paperTitle), 'PDF action fixture is missing');
  const paperFooter = () => named('编辑论文出处 ' + paperTitle)?.parentElement;
  const nav = () => document.querySelector('.dshr-library-nav');
  let footerCases = 0;
  let wrappedFooterCases = 0;
  for (const theme of ['whale-blue','paper']) {
    await click('主题');
    await click(theme === 'whale-blue' ? '应用鲸海蓝' : '应用纸本', picker());
    await until(() => shelfTheme() === theme, 'footer theme did not apply');
    for (const dark of [true,false]) {
      document.documentElement.toggleAttribute('data-ds-dark-theme', dark);
      for (const width of [1020,540,1280]) {
        mount.style.width = width + 'px';
        for (const category of [true,false]) {
          if (category) await click('文献', nav());
          else await click('返回书架');
          const footer = paperFooter();
          assert(footer?.children.length === 4, 'PDF footer is missing actions');
          if (theme === 'whale-blue' && dark && width === 1020 && category) {
            assert(footer.closest('article').getBoundingClientRect().width <= 280, 'card footer fixture did not use three columns');
            await capture('paper-card-footer');
          }
          assert(footer.scrollWidth === footer.clientWidth, 'card footer scrolled horizontally');
          const bounds = footer.getBoundingClientRect();
          const firstRow = footer.firstElementChild.getBoundingClientRect().top;
          if ([...footer.children].some(button => button.getBoundingClientRect().top > firstRow + 14)) wrappedFooterCases++;
          for (const button of footer.children) {
            const rect = button.getBoundingClientRect();
            const label = [...button.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
            if (label) {
              const range = document.createRange();
              range.selectNode(label);
              const lines = [...range.getClientRects()].filter(line => line.width > 0);
              assert(lines.length && lines.every(line => Math.abs(line.top - lines[0].top) < 1
                && line.left >= rect.left - 1 && line.right <= rect.right + 1
                && line.top >= rect.top - 1 && line.bottom <= rect.bottom + 1),
                'card footer label wrapped or overflowed: ' + label.textContent.trim());
            }
            assert(rect.left >= bounds.left - 1 && rect.right <= bounds.right + 1
              && rect.top >= bounds.top - 1 && rect.bottom <= bounds.bottom + 1, 'card footer action overflowed');
            button.focus({ preventScroll:true });
            assert(document.activeElement === button, 'card footer action could not receive keyboard focus');
          }
          footerCases++;
        }
      }
    }
  }
  mount.style.width = '';
  document.documentElement.removeAttribute('data-ds-dark-theme');
  await click('出处', paperFooter());
  const citationDialog = document.querySelector('[role="dialog"][aria-label="论文出处"]');
  assert(citationDialog, 'card footer citation action did not open');
  await click('取消', citationDialog);
  await click('加入书单', paperFooter());
  assert(dialog(), 'card footer collection action did not open');
  await click('取消', dialog());
  assert(wrappedFooterCases > 0, 'no footer exercised whole-button wrapping');
  results.push({ check:'paper-card-footer-layout', footerCases, wrappedFooterCases, actionsPerPdf:4, labelLines:1, overflowCssPx:0 });
  const composition = [...scrollCases,...navyCases];
  results.push({ check:'b11-mascot-composition', windowCases:composition.length,
    minBackdropScalePercent:Math.min(...composition.map(entry => entry.backdropScalePercent)),
    maxAnchorErrorCssPx:Math.max(...composition.map(entry => entry.anchorErrorCssPx)) });
  await clearLibrary();
  assert(!(await listBookCollections()).length && !(await listBooks()).length, 'clear library left stale folders');
  assert(errors.length === 0, errors.join('; '));
  window.__pdfCheck = { state: 'passed', results };
} catch (error) {
  window.__pdfCheck = { state: 'failed', error: error.stack || String(error), results };
}
