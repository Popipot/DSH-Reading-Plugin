/*
 * dsh-reader local library.
 *
 * Books, annotations and a custom background image live in IndexedDB so a
 * refresh or a DSH restart does not lose the user's library. Reading progress
 * and small UI settings stay in localStorage. Nothing leaves the browser except
 * text explicitly sent to the translation/AI routes by the reader.
 */

const DB_NAME = 'dsh-reader';
const DB_VERSION = 3;
const BOOKS = 'books';
const ANNOTATIONS = 'annotations';
const ASSETS = 'assets';
const TRANSLATIONS = 'pdfTranslations';
const BACKGROUND_KEY = 'reader-background';
const SETTINGS_KEY = 'dsh-reader:settings:v1';
const MAX_BYTES = 320 * 1024 * 1024;
const MAX_BACKGROUND_BYTES = 16 * 1024 * 1024;

export const DEFAULT_SETTINGS = Object.freeze({
  settingsVersion: 2,
  autoTranslate: false,
  hideTranslations: false,
  fontSize: 18,
  lineHeight: 1.85,
  tocWidth: 260,
  readingMode: 'scroll',
  pageAnimation: 'slide',
  bookAnimation: 'slide',
  showToc: true,
  aiOpen: false,
  theme: 'auto',
  // Appearance (v2). Kept as a flat object so old settings migrate naturally.
  fontFamily: 'serif',
  fontWeight: 400,
  contentWidth: 760,
  brightness: 1,
  backgroundPreset: 'paper',
  customBackground: '#fbf7ee',
  textTone: 'auto',
  backgroundImageKey: '',
  backgroundImageOpacity: 0.26,
  backgroundImageBlur: 0,
  annotationPanelOpen: false,
});

export const CATEGORIES = Object.freeze([
  { id: 'book', label: '书籍', hint: 'EPUB / MOBI / TXT 与书籍型 PDF' },
  { id: 'paper', label: '文献', hint: '论文、报告、学术 PDF' },
  { id: 'document', label: '文档', hint: 'Markdown / HTML 等短文档' },
]);

const CATEGORY_IDS = new Set(CATEGORIES.map((category) => category.id));
const BACKGROUND_PRESETS = new Set(['paper', 'white', 'sepia', 'green', 'night', 'custom']);
const FONT_FAMILIES = new Set(['serif', 'sans', 'kai', 'system']);
const READING_MODES = new Set(['scroll', 'book']);
const PAGE_ANIMATIONS = new Set(['slide', 'fade', 'push', 'flip']);
const BOOK_ANIMATIONS = new Set(['slide', 'cover', 'flip']);
const FONT_WEIGHTS = new Set([400, 500, 600]);
const TEXT_TONES = new Set(['auto', 'dark', 'light']);

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('当前环境不支持 IndexedDB，无法保存书架。'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(BOOKS)) {
        const store = db.createObjectStore(BOOKS, { keyPath: 'id' });
        store.createIndex('lastOpenedAt', 'lastOpenedAt');
      }
      if (!db.objectStoreNames.contains(ANNOTATIONS)) {
        const store = db.createObjectStore(ANNOTATIONS, { keyPath: 'id' });
        store.createIndex('bookId', 'bookId');
      }
      if (!db.objectStoreNames.contains(ASSETS)) {
        db.createObjectStore(ASSETS, { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains(TRANSLATIONS)) {
        const store = db.createObjectStore(TRANSLATIONS, { keyPath: 'key' });
        store.createIndex('bookId', 'bookId');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('打开书架数据库失败。'));
    request.onblocked = () => reject(new Error('书架数据库被另一个页面占用，请关闭其它 DSH 页面后重试。'));
  });
}

function txDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error('书架写入失败。'));
    transaction.onabort = () => reject(transaction.error ?? new Error('书架写入已取消。'));
  });
}

export function extensionOf(fileName) {
  const match = /\.([^./\\]+)$/u.exec(String(fileName ?? ''));
  return match ? match[1].toLowerCase() : '';
}

export function formatLabel(format) {
  switch (format) {
    case 'pdf': return 'PDF';
    case 'epub': return 'EPUB';
    case 'mobi': return 'MOBI';
    case 'azw': return 'AZW';
    case 'azw3': return 'AZW3';
    case 'txt': return 'TXT';
    case 'md': return 'Markdown';
    case 'html': return 'HTML';
    default: return String(format ?? '文件').toUpperCase();
  }
}

export function categoryLabel(category) {
  return CATEGORIES.find((item) => item.id === category)?.label ?? '未分类';
}

export function isSupportedFile(fileName) {
  return ['pdf', 'epub', 'mobi', 'azw', 'azw3', 'txt', 'md', 'markdown', 'html', 'htm'].includes(extensionOf(fileName));
}

export function countCjk(text) {
  const value = String(text ?? '');
  if (value.length === 0) return 0;
  const cjk = (value.match(/[\u3400-\u9fff\uf900-\ufaff]/gu) ?? []).length;
  return cjk / value.length;
}

/**
 * A lightweight, explainable classifier. PDFs default to papers because that is
 * what readers usually put in a research library; books are recognised by
 * format or by an explicit book signal in their name/size. Users can always
 * override a category from the library card.
 */
export function inferCategory(book = {}) {
  const format = String(book.format || extensionOf(book.title) || '').toLowerCase();
  const name = `${book.title || ''} ${book.author || ''}`;
  if (format === 'pdf') {
    if (/(?:^|\b)(book|novel|textbook|edition|volume|monograph|文集|全集|教材|小说|专著|丛书)(?:\b|$)/iu.test(name)) return 'book';
    if (Number(book.size) > 45 * 1024 * 1024) return 'book';
    return 'paper';
  }
  if (['epub', 'mobi', 'azw', 'azw3', 'txt'].includes(format)) return 'book';
  return 'document';
}

async function sha256Hex(buffer) {
  if (!globalThis.crypto?.subtle) {
    let hash = 2166136261;
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i += 1) {
      hash ^= bytes[i];
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
  }
  const digest = await globalThis.crypto.subtle.digest('SHA-256', buffer);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Identity for a picked file (content prefix + size + name), cheap for big PDFs. */
export async function fileIdentity(file) {
  const sample = await file.slice(0, Math.min(file.size, 1024 * 1024)).arrayBuffer();
  const digest = await sha256Hex(sample);
  return `${digest.slice(0, 20)}-${file.size}-${String(file.name).replace(/[^\w.-]+/gu, '_').slice(-48)}`;
}

export async function listBooks() {
  const db = await openDatabase();
  try {
    const tx = db.transaction(BOOKS, 'readonly');
    const index = tx.objectStore(BOOKS).index('lastOpenedAt');
    const request = index.openCursor(null, 'prev');
    const out = [];
    await new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) { resolve(); return; }
        const row = cursor.value;
        out.push({
          id: row.id,
          title: row.title,
          author: row.author,
          format: row.format,
          size: row.size,
          addedAt: row.addedAt,
          lastOpenedAt: row.lastOpenedAt,
          progress: row.progress ?? null,
          language: row.language ?? '',
          cover: typeof row.cover === 'string' ? row.cover : '',
          category: CATEGORY_IDS.has(row.category) ? row.category : inferCategory(row),
          categoryManual: Boolean(row.categoryManual),
        });
        cursor.continue();
      };
      request.onerror = () => reject(request.error);
    });
    return out;
  } finally {
    db.close();
  }
}

export async function getBook(id) {
  const db = await openDatabase();
  try {
    const tx = db.transaction(BOOKS, 'readonly');
    const request = tx.objectStore(BOOKS).get(id);
    return await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => reject(request.error);
    });
  } finally {
    db.close();
  }
}

/**
 * Persist one picked file. Re-importing the same file updates metadata and
 * keeps its existing progress and manual category.
 */
export async function saveBook(file, { title, author, language } = {}) {
  if (!isSupportedFile(file.name)) {
    throw new Error(`暂不支持 .${extensionOf(file.name) || '未知'} 文件。请选择 PDF / EPUB / MOBI / TXT / Markdown / HTML。`);
  }
  if (file.size > MAX_BYTES) {
    throw new Error(`文件超过 ${Math.round(MAX_BYTES / 1024 / 1024)} MB，浏览器书架无法容纳。`);
  }
  const identity = await fileIdentity(file);
  const existing = await getBook(identity);
  const now = Date.now();
  const id = existing?.id ?? identity;
  const format = extensionOf(file.name) === 'markdown' ? 'md' : extensionOf(file.name);
  const candidate = {
    title: String(title ?? existing?.title ?? file.name.replace(/\.[^.]+$/u, '')).trim() || '未命名文档',
    author: String(author ?? existing?.author ?? '').trim(),
    language: String(language ?? existing?.language ?? ''),
    format,
    size: file.size,
  };
  const row = {
    id,
    ...candidate,
    category: existing?.category && CATEGORY_IDS.has(existing.category)
      ? existing.category
      : inferCategory(candidate),
    categoryManual: Boolean(existing?.categoryManual),
    cover: typeof existing?.cover === 'string' ? existing.cover : '',
    addedAt: existing?.addedAt ?? now,
    lastOpenedAt: now,
    progress: existing?.progress ?? null,
    blob: file,
  };
  const db = await openDatabase();
  try {
    const tx = db.transaction(BOOKS, 'readwrite');
    tx.objectStore(BOOKS).put(row);
    await txDone(tx);
    return row;
  } catch (error) {
    if (error?.name === 'QuotaExceededError') {
      throw new Error('浏览器存储空间已满，无法加入书架。请删除一些书后重试。');
    }
    throw error;
  } finally {
    db.close();
  }
}

export async function updateBook(id, patch) {
  const existing = await getBook(id);
  if (!existing) return null;
  const next = { ...existing, ...patch };
  const db = await openDatabase();
  try {
    const tx = db.transaction(BOOKS, 'readwrite');
    tx.objectStore(BOOKS).put(next);
    await txDone(tx);
    return next;
  } finally {
    db.close();
  }
}

export async function setBookCategory(id, category, { manual = true } = {}) {
  if (!CATEGORY_IDS.has(category)) throw new Error('未知的书籍分类。');
  return updateBook(id, { category, categoryManual: manual });
}

/**
 * Classify every book whose category has not been set manually.
 * @returns {Promise<{changed:number, counts:Record<string,number>}>}
 */
export async function autoOrganizeLibrary() {
  const books = await listBooks();
  const counts = { book: 0, paper: 0, document: 0 };
  let changed = 0;
  for (const book of books) {
    if (book.categoryManual) {
      counts[book.category] = (counts[book.category] || 0) + 1;
      continue;
    }
    const inferred = inferCategory(book);
    counts[inferred] = (counts[inferred] || 0) + 1;
    if (inferred !== book.category) {
      await updateBook(book.id, { category: inferred, categoryManual: false });
      changed += 1;
    }
  }
  return { changed, counts };
}

export async function touchBook(id, progress) {
  return updateBook(id, {
    lastOpenedAt: Date.now(),
    ...(progress !== undefined ? { progress } : {}),
  });
}

export async function deleteBook(id) {
  const db = await openDatabase();
  try {
    const tx = db.transaction([BOOKS, ANNOTATIONS, TRANSLATIONS, ASSETS], 'readwrite');
    tx.objectStore(BOOKS).delete(id);
    tx.objectStore(ASSETS).delete(`pdf-translation:${id}`);
    const cached = tx.objectStore(TRANSLATIONS).index('bookId').openKeyCursor(IDBKeyRange.only(id));
    cached.onsuccess = () => {
      const cursor = cached.result;
      if (cursor) { tx.objectStore(TRANSLATIONS).delete(cursor.primaryKey); cursor.continue(); }
    };
    const index = tx.objectStore(ANNOTATIONS).index('bookId');
    const cursorRequest = index.openKeyCursor(IDBKeyRange.only(id));
    cursorRequest.onsuccess = () => {
      const cursor = cursorRequest.result;
      if (cursor) {
        tx.objectStore(ANNOTATIONS).delete(cursor.primaryKey);
        cursor.continue();
      }
    };
    await txDone(tx);
  } finally {
    db.close();
  }
}

export async function clearLibrary() {
  const db = await openDatabase();
  try {
    const tx = db.transaction([BOOKS, ANNOTATIONS, TRANSLATIONS, ASSETS], 'readwrite');
    tx.objectStore(BOOKS).clear();
    tx.objectStore(ANNOTATIONS).clear();
    tx.objectStore(TRANSLATIONS).clear();
    const preferences = tx.objectStore(ASSETS).openKeyCursor();
    preferences.onsuccess = () => {
      const cursor = preferences.result;
      if (cursor) {
        if (String(cursor.key).startsWith('pdf-translation:')) tx.objectStore(ASSETS).delete(cursor.primaryKey);
        cursor.continue();
      }
    };
    await txDone(tx);
  } finally {
    db.close();
  }
}

/* ------------------------------------------------------------------ annotations */

export async function getPdfTranslation(key) {
  const db = await openDatabase();
  try {
    const request = db.transaction(TRANSLATIONS, 'readonly').objectStore(TRANSLATIONS).get(key);
    return await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } finally { db.close(); }
}

export async function putPdfTranslation(row) {
  const db = await openDatabase();
  try {
    // The file may have been deleted while its final translation was arriving.
    const tx = db.transaction([BOOKS, TRANSLATIONS], 'readwrite');
    const request = tx.objectStore(BOOKS).get(row.bookId);
    request.onsuccess = () => {
      if (request.result) tx.objectStore(TRANSLATIONS).put({ ...row, updatedAt: Date.now() });
    };
    await txDone(tx);
  } finally { db.close(); }
}

export async function getPdfTranslationPreferences(bookId) {
  const db = await openDatabase();
  try {
    const request = db.transaction(ASSETS, 'readonly').objectStore(ASSETS).get(`pdf-translation:${bookId}`);
    return await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result?.value || {});
      request.onerror = () => reject(request.error);
    });
  } finally { db.close(); }
}

export async function savePdfTranslationPreferences(bookId, value) {
  const db = await openDatabase();
  try {
    const tx = db.transaction([BOOKS, ASSETS], 'readwrite');
    const request = tx.objectStore(BOOKS).get(bookId);
    request.onsuccess = () => {
      if (request.result) tx.objectStore(ASSETS).put({ key: `pdf-translation:${bookId}`, value });
    };
    await txDone(tx);
  } finally { db.close(); }
}

function newId(prefix = 'a') {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export async function listAnnotations(bookId) {
  const db = await openDatabase();
  try {
    const tx = db.transaction(ANNOTATIONS, 'readonly');
    const index = tx.objectStore(ANNOTATIONS).index('bookId');
    const request = index.getAll(bookId);
    const rows = await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result ?? []);
      request.onerror = () => reject(request.error);
    });
    return rows.sort((a, b) => {
      const pageA = Number.isFinite(a.page) ? a.page : Number.MAX_SAFE_INTEGER;
      const pageB = Number.isFinite(b.page) ? b.page : Number.MAX_SAFE_INTEGER;
      if (pageA !== pageB) return pageA - pageB;
      const chapterA = Number.isFinite(a.chapterIndex) ? a.chapterIndex : Number.MAX_SAFE_INTEGER;
      const chapterB = Number.isFinite(b.chapterIndex) ? b.chapterIndex : Number.MAX_SAFE_INTEGER;
      if (chapterA !== chapterB) return chapterA - chapterB;
      return (a.createdAt || 0) - (b.createdAt || 0);
    });
  } finally {
    db.close();
  }
}

export async function saveAnnotation(annotation) {
  const now = Date.now();
  const row = {
    ...annotation,
    id: annotation.id || newId(),
    createdAt: annotation.createdAt || now,
    updatedAt: now,
  };
  if (!row.bookId) throw new Error('批注缺少书籍信息。');
  if (!row.kind || !row.style) throw new Error('批注缺少类型。');
  const db = await openDatabase();
  try {
    const tx = db.transaction(ANNOTATIONS, 'readwrite');
    tx.objectStore(ANNOTATIONS).put(row);
    await txDone(tx);
    return row;
  } finally {
    db.close();
  }
}

export async function updateAnnotation(id, patch) {
  const db = await openDatabase();
  try {
    const tx = db.transaction(ANNOTATIONS, 'readwrite');
    const store = tx.objectStore(ANNOTATIONS);
    const existing = await new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => reject(request.error);
    });
    if (!existing) {
      await txDone(tx);
      return null;
    }
    const next = { ...existing, ...patch, id: existing.id, updatedAt: Date.now() };
    store.put(next);
    await txDone(tx);
    return next;
  } finally {
    db.close();
  }
}

export async function deleteAnnotation(id) {
  const db = await openDatabase();
  try {
    const tx = db.transaction(ANNOTATIONS, 'readwrite');
    tx.objectStore(ANNOTATIONS).delete(id);
    await txDone(tx);
  } finally {
    db.close();
  }
}

export async function deleteAnnotationsForBook(bookId) {
  const db = await openDatabase();
  try {
    const tx = db.transaction(ANNOTATIONS, 'readwrite');
    const index = tx.objectStore(ANNOTATIONS).index('bookId');
    const cursorRequest = index.openKeyCursor(IDBKeyRange.only(bookId));
    cursorRequest.onsuccess = () => {
      const cursor = cursorRequest.result;
      if (cursor) {
        tx.objectStore(ANNOTATIONS).delete(cursor.primaryKey);
        cursor.continue();
      }
    };
    await txDone(tx);
  } finally {
    db.close();
  }
}

/* ------------------------------------------------------------------ background asset */

export async function saveReaderBackground(blob) {
  if (!blob || !blob.size) throw new Error('背景图片为空。');
  if (blob.size > MAX_BACKGROUND_BYTES) {
    throw new Error(`背景图片超过 ${Math.round(MAX_BACKGROUND_BYTES / 1024 / 1024)} MB，请选择更小的图片。`);
  }
  const db = await openDatabase();
  try {
    const tx = db.transaction(ASSETS, 'readwrite');
    tx.objectStore(ASSETS).put({
      key: BACKGROUND_KEY,
      blob,
      type: blob.type || 'image/*',
      size: blob.size,
      updatedAt: Date.now(),
    });
    await txDone(tx);
    return BACKGROUND_KEY;
  } finally {
    db.close();
  }
}

export async function getReaderBackground() {
  const db = await openDatabase();
  try {
    const tx = db.transaction(ASSETS, 'readonly');
    const request = tx.objectStore(ASSETS).get(BACKGROUND_KEY);
    const row = await new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => reject(request.error);
    });
    return row?.blob ?? null;
  } finally {
    db.close();
  }
}

export async function deleteReaderBackground() {
  const db = await openDatabase();
  try {
    const tx = db.transaction(ASSETS, 'readwrite');
    tx.objectStore(ASSETS).delete(BACKGROUND_KEY);
    await txDone(tx);
  } finally {
    db.close();
  }
}

/* ------------------------------------------------------------------ settings */

function clamp(value, min, max, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : fallback;
}

function hexColor(value, fallback) {
  return /^#[0-9a-f]{6}$/iu.test(String(value)) ? String(value) : fallback;
}

export function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    // v1→v2 migration: real-time translation now starts off. Users explicitly
    // turn it on from the reader switch; existing saved `true` from the old
    // default is reset exactly once.
    const storedVersion = Number(parsed.settingsVersion) || 1;
    const autoTranslate = storedVersion >= 2 && typeof parsed.autoTranslate === 'boolean'
      ? parsed.autoTranslate
      : false;
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      settingsVersion: 2,
      autoTranslate,
      hideTranslations: Boolean(parsed.hideTranslations),
      fontSize: clamp(parsed.fontSize, 13, 34, DEFAULT_SETTINGS.fontSize),
      lineHeight: clamp(parsed.lineHeight, 1.35, 2.4, DEFAULT_SETTINGS.lineHeight),
      tocWidth: clamp(parsed.tocWidth, 180, 520, DEFAULT_SETTINGS.tocWidth),
      readingMode: parsed.readingMode === 'page'
        ? 'book'
        : (READING_MODES.has(parsed.readingMode) ? parsed.readingMode : DEFAULT_SETTINGS.readingMode),
      pageAnimation: PAGE_ANIMATIONS.has(parsed.pageAnimation) ? parsed.pageAnimation : DEFAULT_SETTINGS.pageAnimation,
      bookAnimation: BOOK_ANIMATIONS.has(parsed.bookAnimation) ? parsed.bookAnimation : DEFAULT_SETTINGS.bookAnimation,
      fontFamily: FONT_FAMILIES.has(parsed.fontFamily) ? parsed.fontFamily : DEFAULT_SETTINGS.fontFamily,
      fontWeight: FONT_WEIGHTS.has(Number(parsed.fontWeight)) ? Number(parsed.fontWeight) : DEFAULT_SETTINGS.fontWeight,
      contentWidth: clamp(parsed.contentWidth, 520, 1600, DEFAULT_SETTINGS.contentWidth),
      brightness: clamp(parsed.brightness, 0.6, 1.2, DEFAULT_SETTINGS.brightness),
      backgroundPreset: BACKGROUND_PRESETS.has(parsed.backgroundPreset) ? parsed.backgroundPreset : DEFAULT_SETTINGS.backgroundPreset,
      customBackground: hexColor(parsed.customBackground, DEFAULT_SETTINGS.customBackground),
      textTone: TEXT_TONES.has(parsed.textTone) ? parsed.textTone : DEFAULT_SETTINGS.textTone,
      backgroundImageKey: typeof parsed.backgroundImageKey === 'string' ? parsed.backgroundImageKey : '',
      backgroundImageOpacity: clamp(parsed.backgroundImageOpacity, 0, 0.85, DEFAULT_SETTINGS.backgroundImageOpacity),
      backgroundImageBlur: clamp(parsed.backgroundImageBlur, 0, 12, DEFAULT_SETTINGS.backgroundImageBlur),
      annotationPanelOpen: Boolean(parsed.annotationPanelOpen),
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Settings are a comfort feature; a full storage quota must not break reading.
  }
}

export function formatBytes(bytes) {
  const value = Number(bytes) || 0;
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
  if (value < 1024 * 1024 * 1024) return `${(value / 1024 / 1024).toFixed(1)} MB`;
  return `${(value / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

export function formatRelativeTime(timestamp) {
  if (!timestamp) return '';
  const diff = Date.now() - Number(timestamp);
  if (diff < 60_000) return '刚刚';
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)} 分钟前`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)} 小时前`;
  if (diff < 7 * 86_400_000) return `${Math.floor(diff / 86_400_000)} 天前`;
  return new Date(timestamp).toLocaleDateString('zh-CN');
}

/** True when a document's sample text looks like it is not Chinese. */
export function looksForeign(text) {
  const sample = String(text ?? '').replace(/\s+/gu, '');
  if (sample.length < 40) return false;
  const cjk = countCjk(sample);
  const latin = (sample.match(/[A-Za-zÀ-ÖØ-öø-ÿ\u0400-\u04ff]/gu) ?? []).length / sample.length;
  return cjk < 0.18 && latin > 0.45;
}
