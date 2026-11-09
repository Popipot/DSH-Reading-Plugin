import React from 'react';
import { LibraryView } from './components/LibraryView.jsx';
import { FlowReader } from './components/FlowReader.jsx';
import PdfViewer from './pdf/PdfViewer.jsx';
import { AiPanel } from './components/AiPanel.jsx';
import { SelectionToolbar } from './components/SelectionToolbar.jsx';
import { SettingsDialog, ConfirmDeleteDialog, Toast } from './components/Dialogs.jsx';
import { OnlineImportDialog } from './components/OnlineImportDialog.jsx';
import { PagedReader } from './components/PagedReader.jsx';
import { flowProgress } from './components/flow-pagination.js';
import { AppearancePanel } from './appearance/AppearancePanel.jsx';
import { appearanceVars, autoInk, BOOK_ANIMATIONS } from './appearance/appearance.js';
import { AnnotationsPanel } from './annotations/AnnotationsPanel.jsx';
import { AnnotationComposer } from './annotations/AnnotationComposer.jsx';
import {
  IconArrowLeft, IconList, IconSettings, IconSparkles, IconTranslate,
  IconPlus, IconX, IconPalette, IconHighlighter, IconEye, IconEyeOff,
  IconMaximize, IconMinimize,
} from './components/icons.jsx';
import {
  listBooks, listBookCollections, getBook, saveBook, deleteBook, touchBook, updateBook, clearLibrary,
  loadSettings, saveSettings, extensionOf, formatLabel, looksForeign,
  categoryLabel, setBookCategory, autoOrganizeLibrary, listAnnotations, saveAnnotation,
  updateAnnotation, deleteAnnotation, getReaderBackground, saveReaderBackground, deleteReaderBackground,
} from './storage.js';
import { translateSegments, isAbortError, fetchRemoteBook } from './ai-client.js';
import { generateCover } from './cover.js';

const LAST_BOOK_KEY = 'dsh-reader:last-book:v1';
const SESSION_BOOK_KEY = 'dsh-reader:session-book:v1';
const IMMERSIVE_BAR_HEIGHT = 44;

function hexRgb(hex) {
  const match = /^#?([0-9a-f]{6})$/iu.exec(String(hex || '').trim());
  if (!match) return null;
  const value = match[1];
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function mixHex(top, bottom, amount) {
  const a = hexRgb(top);
  const b = hexRgb(bottom);
  if (!a || !b) return bottom;
  const t = Math.max(0, Math.min(1, amount));
  return `#${toHex(a.r * t + b.r * (1 - t)).slice(1)}${toHex(a.g * t + b.g * (1 - t)).slice(1)}${toHex(a.b * t + b.b * (1 - t)).slice(1)}`;
}

function toHex(value) {
  return `#${Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0')}`;
}

/** Quantise a wallpaper down to its largest colour area (with alpha weighting). */
function dominantImageColor(image) {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) return '';
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  let pixels;
  try {
    pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  } catch {
    return '';
  }
  const buckets = new Map();
  for (let index = 0; index < pixels.length; index += 4) {
    const alpha = pixels[index + 3];
    if (alpha < 40) continue;
    const r = pixels[index];
    const g = pixels[index + 1];
    const b = pixels[index + 2];
    const key = `${r >> 5}:${g >> 5}:${b >> 5}`;
    let bucket = buckets.get(key);
    if (!bucket) {
      bucket = { count: 0, r: 0, g: 0, b: 0 };
      buckets.set(key, bucket);
    }
    bucket.count += alpha;
    bucket.r += r * alpha;
    bucket.g += g * alpha;
    bucket.b += b * alpha;
  }
  let best = null;
  for (const bucket of buckets.values()) {
    if (!best || bucket.count > best.count) best = bucket;
  }
  if (!best) return '';
  return toHex(best.r / best.count) + toHex(best.g / best.count).slice(1) + toHex(best.b / best.count).slice(1);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

class ReaderErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('[dsh-reader]', error, info);
  }
  reset = () => this.setState({ error: null });
  render() {
    if (this.state.error) {
      return (
        <div className="dshr-root">
          <div className="dshr-error-panel">
            <h3>阅读器遇到了一个问题</h3>
            <p>{this.state.error?.message || '未知错误'}。这通常是文档格式或浏览器兼容性问题，重新打开文档通常可以恢复。</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <button type="button" className="dshr-btn dshr-btn--primary" onClick={() => { this.reset(); this.props.onReset?.(); }}>返回书架</button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function useToast() {
  const [message, setMessage] = React.useState('');
  const timerRef = React.useRef(0);
  const show = React.useCallback((text, duration = 2800) => {
    window.clearTimeout(timerRef.current);
    setMessage(String(text));
    timerRef.current = window.setTimeout(() => setMessage(''), duration);
  }, []);
  React.useEffect(() => () => window.clearTimeout(timerRef.current), []);
  return [message, show];
}

export function ReaderPage() {
  const [books, setBooks] = React.useState([]);
  const [collections, setCollections] = React.useState([]);
  const collectionRevision = React.useRef(0);
  const [loadingBooks, setLoadingBooks] = React.useState(true);
  const [importing, setImporting] = React.useState(false);
  const [organizing, setOrganizing] = React.useState(false);
  const [categoryFilter, setCategoryFilter] = React.useState('all');
  const [current, setCurrent] = React.useState(null);
  const [opening, setOpening] = React.useState(false);
  const [openingLabel, setOpeningLabel] = React.useState('');
  const [settings, setSettings] = React.useState(loadSettings);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [onlineOpen, setOnlineOpen] = React.useState(false);
  const [onlineBusy, setOnlineBusy] = React.useState(false);
  const [appearanceOpen, setAppearanceOpen] = React.useState(false);
  const [immersive, setImmersive] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);
  const rootRef = React.useRef(null);
  const [deleteTarget, setDeleteTarget] = React.useState(null);
  const [toast, showToast] = useToast();
  const [{ index: chapterIndex, entry: chapterEntry }, setFlowLocation] = React.useState({ index: 0, entry: null });
  const [progress, setProgress] = React.useState({});
  const [tocOpen, setTocOpen] = React.useState(true);
  const [aiOpen, setAiOpen] = React.useState(false);
  const [aiSeed, setAiSeed] = React.useState(null);
  const [selection, setSelection] = React.useState(null);
  const [selectionTranslation, setSelectionTranslation] = React.useState(null);
  const [annotations, setAnnotations] = React.useState([]);
  const [annotationsOpen, setAnnotationsOpen] = React.useState(false);
  const [annotationDraft, setAnnotationDraft] = React.useState(null);
  const [annotationComposerOpen, setAnnotationComposerOpen] = React.useState(false);
  const [editingAnnotation, setEditingAnnotation] = React.useState(null);
  const [focusAnnotation, setFocusAnnotation] = React.useState(null);
  const [focusPdfAnnotation, setFocusPdfAnnotation] = React.useState(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = React.useState('');
  const [backgroundRevision, setBackgroundRevision] = React.useState(0);
  const [wallpaperTone, setWallpaperTone] = React.useState('');
  const [backgroundPicking, setBackgroundPicking] = React.useState(false);
  const [layoutTick, setLayoutTick] = React.useState(0);
  const backgroundInputRef = React.useRef(null);
  const progressSaveRef = React.useRef({ timer: 0, latest: null });
  const selectionRequestRef = React.useRef({ token: 0, controller: null });
  const currentRef = React.useRef(null);
  const settingsRef = React.useRef(settings);
  const booksRef = React.useRef(books);
  const coverRunRef = React.useRef({ running: false, attempted: new Set() });
  const autoReopenRef = React.useRef(false);
  const [lastBookSummary, setLastBookSummary] = React.useState(null);

  currentRef.current = current;
  settingsRef.current = settings;
  booksRef.current = books;

  const cancelSelectionRequest = React.useCallback(() => {
    selectionRequestRef.current.token += 1;
    selectionRequestRef.current.controller?.abort();
  }, []);
  React.useLayoutEffect(() => () => cancelSelectionRequest(), [current?.record?.id, selection, cancelSelectionRequest]);

  const layoutVersion = `${settings.fontSize}:${settings.lineHeight}:${settings.fontFamily}:${settings.fontWeight}:${settings.tocWidth}:${settings.contentWidth}:${backgroundImageUrl ? 'img' : 'plain'}:${layoutTick}`;
  const appearanceStyle = React.useMemo(
    () => appearanceVars(settings, backgroundImageUrl),
    [settings, backgroundImageUrl],
  );

  const immersiveTone = React.useMemo(() => {
    const base = appearanceStyle['--dshr-reader-bg'] || settings.customBackground || '#fbf7ee';
    // The wallpaper is painted at the user's opacity over the page colour; use
    // the blended colour so the icon contrast matches what the eye actually sees.
    const wallpaper = wallpaperTone && backgroundImageUrl
      ? mixHex(wallpaperTone, base, Number(settings.backgroundImageOpacity) || 0)
      : base;
    return {
      '--dshr-immersive-surface': wallpaper,
      '--dshr-immersive-ink': autoInk(wallpaper).ink,
    };
  }, [wallpaperTone, backgroundImageUrl, appearanceStyle, settings.customBackground, settings.backgroundImageOpacity]);

  const refreshBooks = React.useCallback(async () => {
    const revision = ++collectionRevision.current;
    try {
      const [nextBooks, nextCollections] = await Promise.all([listBooks(), listBookCollections()]);
      setBooks(nextBooks);
      if (revision === collectionRevision.current) setCollections(nextCollections);
    } catch (error) {
      showToast(error?.message || '读取书架失败。');
    } finally {
      setLoadingBooks(false);
    }
  }, [showToast]);

  const updateCollections = React.useCallback(update => {
    collectionRevision.current += 1;
    setCollections(update);
  }, []);

  const reloadAnnotations = React.useCallback(async (bookId) => {
    if (!bookId) {
      setAnnotations([]);
      return;
    }
    try {
      setAnnotations(await listAnnotations(bookId));
    } catch (error) {
      console.warn('[dsh-reader] annotations unavailable', error);
      setAnnotations([]);
    }
  }, []);

  React.useEffect(() => { void refreshBooks(); }, [refreshBooks]);

  // Generate missing cover thumbnails while the library is visible. One at a
  // time keeps a large shelf from competing with reading; results are cached in
  // IndexedDB, so this is a first-run-only cost per book.
  React.useEffect(() => {
    if (loadingBooks || current) return;
    const missing = booksRef.current.filter((book) => (
      !book.cover
      && ['pdf', 'epub', 'mobi', 'azw', 'azw3'].includes(book.format)
      && !coverRunRef.current.attempted.has(book.id)
    ));
    if (missing.length === 0) return;
    const runner = coverRunRef.current;
    const controller = new AbortController();
    runner.controller = controller;
    runner.running = true;
    const timer = setTimeout(() => { (async () => {
      for (const summary of missing) {
        if (controller.signal.aborted) break;
        if (runner.attempted.has(summary.id)) continue;
        try {
          const record = await getBook(summary.id);
          if (!record || controller.signal.aborted) continue;
          const result = await generateCover(record, { signal: controller.signal });
          if (controller.signal.aborted) break;
          runner.attempted.add(summary.id);
          if (result.cover || result.title || result.author || result.language) {
            await updateBook(record.id, result);
            setBooks((previous) => previous.map((book) => (
              book.id === record.id ? { ...book, ...result } : book
            )));
          }
        } catch (error) {
          if (controller.signal.aborted) break;
          runner.attempted.add(summary.id);
          console.warn('[dsh-reader] cover generation failed', summary.title, error);
        }
      }
    })().finally(() => {
      if (runner.controller === controller) runner.running = false;
    }); }, 500);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [loadingBooks, current]);

  React.useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  React.useEffect(() => {
    if (!current || settings.readingMode === 'book') return undefined;
    const onKey = (event) => {
      if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
      if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"], .dshr-topbar--pdf, .dshr-immersive-controls, .dshr-modal-mask, .dshr-appearance-panel, .dshr-anno-panel, .dshr-ai, .dshr-selection, .dshr-anno-composer, .dshr-pdf-translation-panel')) return;
      const selection = window.getSelection?.();
      if (selection && !selection.isCollapsed) return;
      const scrollElement = document.querySelector('.dshr-root .dshr-content')
        || document.querySelector('.dshr-root .dshr-pdf-scroll');
      if (!scrollElement) return;
      event.preventDefault();
      const amount = Math.max(160, Math.round(scrollElement.clientHeight * 0.82));
      const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
      scrollElement.scrollBy({ top: forward ? amount : -amount, behavior: 'smooth' });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, settings.readingMode]);

  React.useEffect(() => {
    if (!backgroundImageUrl) {
      setWallpaperTone('');
      return undefined;
    }
    let cancelled = false;
    const image = new Image();
    image.onload = () => {
      if (cancelled) return;
      setWallpaperTone(dominantImageColor(image));
    };
    image.onerror = () => {
      if (!cancelled) setWallpaperTone('');
    };
    image.src = backgroundImageUrl;
    return () => { cancelled = true; };
  }, [backgroundImageUrl]);

  React.useEffect(() => {
    let cancelled = false;
    let url = '';
    if (!settings.backgroundImageKey) {
      setBackgroundImageUrl('');
      return undefined;
    }
    (async () => {
      try {
        const blob = await getReaderBackground();
        if (!blob || cancelled) return;
        url = URL.createObjectURL(blob);
        setBackgroundImageUrl(url);
      } catch {
        if (!cancelled) setBackgroundImageUrl('');
      }
    })();
    return () => {
      cancelled = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, [settings.backgroundImageKey, backgroundRevision]);

  // Hide a stale selection toolbar when the reader scrolls or the window resizes.
  React.useEffect(() => {
    if (!selection) return undefined;
    const clear = (event) => {
      if (event?.type === 'scroll' && event.target instanceof Element && event.target.closest('.dshr-pdf-translation-panel')) return;
      setSelection(null);
    };
    const onKey = (event) => { if (event.key === 'Escape') setSelection(null); };
    window.addEventListener('resize', clear);
    window.addEventListener('keydown', onKey);
    document.addEventListener('scroll', clear, true);
    return () => {
      window.removeEventListener('resize', clear);
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('scroll', clear, true);
    };
  }, [selection]);

  const flushProgress = React.useCallback(async () => {
    const pending = progressSaveRef.current.latest;
    if (!pending) return;
    progressSaveRef.current.latest = null;
    try {
      await touchBook(pending.id, pending.progress);
      setBooks((books) => books.map((book) => book.id === pending.id
        ? { ...book, progress: pending.progress, lastOpenedAt: Date.now() }
        : book));
    } catch {
      // Progress is best-effort; never interrupt reading for a quota/lock error.
    }
  }, [refreshBooks]);

  const scheduleProgress = React.useCallback((recordId, nextProgress) => {
    if (!recordId) return;
    setProgress(nextProgress);
    progressSaveRef.current.latest = { id: recordId, progress: nextProgress };
    if (progressSaveRef.current.timer) return;
    progressSaveRef.current.timer = window.setTimeout(() => {
      progressSaveRef.current.timer = 0;
      void flushProgress();
    }, 700);
  }, [flushProgress]);

  React.useEffect(() => () => {
    window.clearTimeout(progressSaveRef.current.timer);
    void flushProgress();
  }, [flushProgress]);

  const handleAutoOrganize = React.useCallback(async () => {
    setOrganizing(true);
    try {
      const result = await autoOrganizeLibrary();
      await refreshBooks();
      const parts = [`文献 ${result.counts.paper || 0}`, `书籍 ${result.counts.book || 0}`];
      if (result.counts.document) parts.push(`文档 ${result.counts.document}`);
      showToast(result.changed > 0 ? `书单已整理：${parts.join(' · ')}` : `书单已是最新：${parts.join(' · ')}`);
    } catch (error) {
      showToast(error?.message || '自动整理失败。');
    } finally {
      setOrganizing(false);
    }
  }, [refreshBooks, showToast]);

  const handleCycleCategory = React.useCallback(async (book, next) => {
    const order = ['book', 'paper', 'document'];
    const target = next || order[(order.indexOf(book.category || 'document') + 1) % order.length];
    try {
      await setBookCategory(book.id, target);
      await refreshBooks();
      showToast(`《${book.title || '文档'}》已归入「${categoryLabel(target)}」。`);
    } catch (error) {
      showToast(error?.message || '修改分类失败。');
    }
  }, [refreshBooks, showToast]);

  const handleAppearanceChange = React.useCallback((next) => {
    setSettings((currentSettings) => ({ ...currentSettings, ...next }));
    setLayoutTick((value) => value + 1);
  }, []);

  const handlePickBackgroundImage = React.useCallback(() => {
    backgroundInputRef.current?.click();
  }, []);

  const handleBackgroundFile = React.useCallback(async (file) => {
    if (!file) return;
    if (!String(file.type || '').startsWith('image/')) {
      showToast('请选择图片文件（JPG / PNG / WebP）。');
      return;
    }
    setBackgroundPicking(true);
    try {
      let blob = file;
      // Downscale large photos; a reading background never needs more than
      // ~2400px and this keeps IndexedDB small.
      try {
        const bitmap = await createImageBitmap(file);
        const scale = Math.min(1, 2400 / Math.max(bitmap.width, bitmap.height));
        if (scale < 1) {
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(bitmap.width * scale);
          canvas.height = Math.round(bitmap.height * scale);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
          const converted = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.86));
          if (converted) blob = converted;
        }
        bitmap.close?.();
      } catch {
        // SVG/unsupported decoders: keep the original file.
      }
      await saveReaderBackground(blob);
      setSettings((currentSettings) => ({ ...currentSettings, backgroundImageKey: 'reader-background' }));
      setBackgroundRevision((value) => value + 1);
      showToast('背景图片已保存，可调整透明度和模糊度。');
    } catch (error) {
      showToast(error?.message || '背景图片保存失败。');
    } finally {
      setBackgroundPicking(false);
    }
  }, [showToast]);

  const handleClearBackgroundImage = React.useCallback(async () => {
    try {
      await deleteReaderBackground();
      setSettings((currentSettings) => ({ ...currentSettings, backgroundImageKey: '' }));
      setBackgroundImageUrl('');
      showToast('已移除背景图片。');
    } catch (error) {
      showToast(error?.message || '移除背景图片失败。');
    }
  }, [showToast]);

  const handleImport = React.useCallback(async (files, options = {}) => {
    if (options.rejected) {
      showToast('没有可识别的文档。支持 PDF / EPUB / MOBI / TXT / Markdown / HTML。');
      return;
    }
    if (!files?.length) return;
    setImporting(true);
    const added = [];
    const errors = [];
    for (const file of files) {
      try {
        const row = await saveBook(file);
        added.push(row);
      } catch (error) {
        errors.push(`${file.name}: ${error?.message || '导入失败'}`);
      }
    }
    await refreshBooks();
    setImporting(false);
    if (errors.length > 0) showToast(errors[0], 4200);
    if (added.length > 0) {
      showToast(added.length === 1 ? '已加入书架。' : `已加入 ${added.length} 份文档。`);
      void openBook(added[0]);
    }
  }, [refreshBooks, showToast]);

  const handleOnlineImport = React.useCallback(async (url) => {
    setOnlineBusy(true);
    try {
      const file = await fetchRemoteBook(url);
      setOnlineOpen(false);
      await handleImport([file]);
    } catch (error) {
      showToast(error?.message || '在线导入失败，请检查链接或稍后重试。', 5200);
    } finally {
      setOnlineBusy(false);
    }
  }, [handleImport, showToast]);

  const exitImmersive = React.useCallback(async () => {
    setImmersive(false);
    if (document.fullscreenElement === rootRef.current) {
      try { await document.exitFullscreen(); } catch { /* browser already exited */ }
    }
  }, []);

  const toggleImmersive = React.useCallback(async () => {
    if (immersive) {
      await exitImmersive();
      return;
    }
    // Immersive first works *inside the current DSH window*; fullscreen is a
    // separate explicit choice so entering immersion never steals the desktop.
    setImmersive(true);
    setTocOpen(false);
  }, [immersive, exitImmersive]);

  const toggleFullscreen = React.useCallback(async () => {
    try {
      if (document.fullscreenElement === rootRef.current) {
        await document.exitFullscreen();
      } else if (rootRef.current?.requestFullscreen) {
        await rootRef.current.requestFullscreen();
      }
    } catch {
      showToast('浏览器阻止了全屏；可以继续使用当前窗口的沉浸模式。', 3600);
    }
  }, [showToast]);

  React.useEffect(() => {
    const onFullscreenChange = () => {
      setFullscreen(document.fullscreenElement === rootRef.current);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  React.useEffect(() => {
    if (!current && immersive) void exitImmersive();
  }, [current, immersive, exitImmersive]);

  React.useEffect(() => {
    if (!immersive || appearanceOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape' && !event.defaultPrevented) {
        event.preventDefault();
        void exitImmersive();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [immersive, appearanceOpen, exitImmersive]);

  const closeBook = React.useCallback(() => {
    try { localStorage.removeItem(LAST_BOOK_KEY); } catch { /* storage unavailable */ }
    try { sessionStorage.removeItem(SESSION_BOOK_KEY); } catch { /* storage unavailable */ }
    setLastBookSummary(null);
    if (progressSaveRef.current.timer) {
      window.clearTimeout(progressSaveRef.current.timer);
      progressSaveRef.current.timer = 0;
    }
    void flushProgress();
    setAiOpen(false);
    setAiSeed(null);
    setSelection(null);
    setSelectionTranslation(null);
    setAnnotations([]);
    setAnnotationsOpen(false);
    setAnnotationComposerOpen(false);
    setAnnotationDraft(null);
    setEditingAnnotation(null);
    setFocusAnnotation(null);
    setFocusPdfAnnotation(null);
    const book = currentRef.current?.book;
    if (book?.dispose) {
      try { book.dispose(); } catch { /* already disposed */ }
    }
    setCurrent(null);
    setProgress({});
    setFlowLocation({ index: 0, entry: null });
  }, [flushProgress]);

  const openBook = React.useCallback(async (summary) => {
    setOpening(true);
    setOpeningLabel(`正在打开《${summary.title || '文档'}》…`);
    try {
      const record = await getBook(summary.id);
      if (!record?.blob) throw new Error('书架中找不到这个文件，可能已被清理。请重新导入。');
      setLastBookSummary(null);
      try { localStorage.setItem(LAST_BOOK_KEY, record.id); } catch { /* storage unavailable */ }
      try { sessionStorage.setItem(SESSION_BOOK_KEY, record.id); } catch { /* storage unavailable */ }
      const format = record.format || extensionOf(record.title);
      if (format === 'pdf') {
        if (record.blob.size > 24 * 1024 * 1024) {
          setOpeningLabel(`正在打开大型 PDF《${record.title || summary.title || '文档'}》…`);
        }
        // A Blob URL lets the browser read asynchronously. Avoid materializing
        // and synchronously copying the entire document on the UI thread.
        const data = record.blob;
        const saved = record.progress || {};
        // Keep the payload in data; the metadata record has no second payload
        // field. A Blob reference itself does not duplicate its file bytes.
        const viewerRecord = { ...record, blob: null, blobName: record.blob.name || '' };
        setCurrent({ kind: 'pdf', record: viewerRecord, data });
        setProgress({ page: saved.page || 1, pages: saved.pages || 0, percent: saved.percent || 0 });
        setFlowLocation({ index: 0, entry: null });
        setTocOpen(false);
        setAnnotationsOpen(false);
        setFocusPdfAnnotation(null);
        await reloadAnnotations(record.id);
        setOpening(false);
        await touchBook(record.id);
        await refreshBooks();
        return;
      }
      const { parseBook } = await import('./formats/index.js');
      const parsed = await parseBook(record.blob, { fileName: record.title ?? summary.title, mime: record.blob.type });
      const merged = { ...record, title: parsed.title || record.title, author: parsed.author || record.author, language: parsed.language || record.language };
      if (merged.title !== record.title || merged.author !== record.author || merged.language !== record.language) {
        await updateBook(record.id, { title: merged.title, author: merged.author, language: merged.language });
        await refreshBooks();
      }
      const saved = record.progress || {};
      const restoreChapter = clamp(Number(saved.chapter) || 0, 0, Math.max(0, parsed.chapters.length - 1));
      setCurrent({ kind: 'flow', record: merged, book: parsed });
      setFlowLocation({ index: restoreChapter, entry: { scrollRatio: Number(saved.scrollRatio) || 0 } });
      setProgress({
        chapter: restoreChapter,
        chapters: parsed.chapters.length,
        percent: Number(saved.percent) || (parsed.chapters.length ? ((restoreChapter + 1) / parsed.chapters.length) * 100 : 0),
      });
      setTocOpen(true);
      setAnnotationsOpen(false);
      setFocusAnnotation(null);
      await reloadAnnotations(record.id);
      setOpening(false);
      if (looksForeign(parsed.chapters.slice(0, 3).map((chapter) => chapter.blocks.map((block) => block.text || '').join(' ')).join(' '))
        && !settingsRef.current.autoTranslate) {
        showToast('检测到外文内容。顶部「实时翻译」可以随时开启。', 4200);
      }
    } catch (error) {
      setOpening(false);
      showToast(error?.message || '打开文档失败。', 5000);
    }
  }, [refreshBooks, reloadAnnotations, showToast]);

  React.useEffect(() => {
    if (loadingBooks || current || autoReopenRef.current || booksRef.current.length === 0) return;
    autoReopenRef.current = true;
    let lastId = '';
    try { lastId = localStorage.getItem(LAST_BOOK_KEY) || ''; } catch { /* storage unavailable */ }
    if (!lastId) {
      setLastBookSummary(null);
      return;
    }
    const summary = booksRef.current.find((book) => book.id === lastId);
    if (!summary) {
      setLastBookSummary(null);
      try { localStorage.removeItem(LAST_BOOK_KEY); } catch { /* ignore */ }
      return;
    }
    // Opening an 80 MB / 1000-page PDF synchronously on panel mount freezes the
    // sidebar before the library can even paint. Show the library with a resume
    // card instead; normal books still reopen automatically.
    const heavyBook = Number(summary.size) > 24 * 1024 * 1024
      || Number(summary.progress?.pages) > 300;
    let sameSession = false;
    try { sameSession = sessionStorage.getItem(SESSION_BOOK_KEY) === summary.id; } catch { /* storage unavailable */ }
    setLastBookSummary(summary);
    // On a cold app start, do not synchronously pull an 80 MB PDF into the
    // sidebar. Within the same session (window switch / panel remount) still
    // resume directly; on a cold mount show the resume card instead.
    if (heavyBook && !sameSession) return;
    void openBook(summary);
  }, [loadingBooks, current, openBook]);

  React.useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') void flushProgress();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [flushProgress]);

  const handleDelete = React.useCallback(async () => {
    const target = deleteTarget;
    if (!target) return;
    try {
      if (currentRef.current?.record?.id === target.id) closeBook();
      await deleteBook(target.id);
      setDeleteTarget(null);
      await refreshBooks();
      showToast('已从书架删除。');
    } catch (error) {
      showToast(error?.message || '删除失败。');
    }
  }, [closeBook, deleteTarget, refreshBooks, showToast]);

  const handleClearLibrary = React.useCallback(async () => {
    try {
      closeBook();
      await clearLibrary();
      await refreshBooks();
      setSettingsOpen(false);
      showToast('书架已清空。');
    } catch (error) {
      showToast(error?.message || '清空书架失败。');
    }
  }, [closeBook, refreshBooks, showToast]);

  const openAi = React.useCallback((text, context) => {
    setAiSeed({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, text: String(text || '').slice(0, 8000), context: String(context || '').slice(0, 1600) });
    setAiOpen(true);
    setAnnotationsOpen(false);
    setSelection(null);
    setSelectionTranslation(null);
  }, []);

  const handleGoogle = React.useCallback((text, kind = 'web') => {
    const query = String(text || '').trim().slice(0, 500);
    if (!query) return;
    const url = kind === 'scholar'
      ? `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`
      : `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) showToast('浏览器拦截了新窗口。请允许弹出窗口，或复制文字后手动搜索。');
  }, [showToast]);

  const handleCopy = React.useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast('已复制。');
    } catch {
      showToast('复制失败，请手动选择。');
    }
  }, [showToast]);

  const handleFlowSelection = React.useCallback((picked) => {
    cancelSelectionRequest();
    if (!picked?.text?.trim()) {
      setSelection(null);
      return;
    }
    setSelection({ ...picked, source: 'flow' });
    setSelectionTranslation(null);
  }, [cancelSelectionRequest]);

  const handlePdfSelection = React.useCallback((picked) => {
    cancelSelectionRequest();
    if (!picked?.text) {
      setSelection(null);
      return;
    }
    setSelection({ ...picked, source: 'pdf' });
    setSelectionTranslation(null);
  }, [cancelSelectionRequest]);

  const translateSelection = React.useCallback(async (picked) => {
    const text = picked?.text?.trim();
    if (!text) return;
    cancelSelectionRequest();
    const controller = new AbortController();
    const token = selectionRequestRef.current.token;
    const bookId = current?.record?.id;
    selectionRequestRef.current.controller = controller;
    const fresh = () => !controller.signal.aborted && token === selectionRequestRef.current.token && currentRef.current?.record?.id === bookId;
    setSelectionTranslation({ status: 'loading' });
    try {
      const result = await translateSegments([{ id: 'selection', text }], {
        context: picked.context || '',
        title: current?.book?.title || current?.record?.title || '',
        signal: controller.signal,
      });
      if (fresh()) setSelectionTranslation({ status: 'done', zh: result.selection || '' });
    } catch (error) {
      if (fresh() && !isAbortError(error)) setSelectionTranslation({ status: 'error', error: error?.message || '翻译失败。' });
    }
  }, [current, cancelSelectionRequest]);

  const openAnnotationForSelection = React.useCallback((picked) => {
    const bookId = currentRef.current?.record?.id;
    if (!bookId || !picked?.text?.trim()) return;
    const isPdf = currentRef.current?.kind === 'pdf';
    setEditingAnnotation(null);
    setAnnotationDraft({
      bookId,
      kind: isPdf ? 'pdf' : 'flow',
      style: 'highlight',
      color: '#f5d76e',
      width: 9,
      note: '',
      quote: picked.text.trim(),
      chapterId: isPdf ? undefined : currentRef.current?.book?.chapters?.[chapterIndex]?.id,
      chapterIndex: isPdf ? undefined : chapterIndex,
      ranges: isPdf ? undefined : picked.ranges,
      page: isPdf ? picked.page : undefined,
      rects: isPdf ? picked.pageRects : undefined,
    });
    setAnnotationComposerOpen(true);
    setSelection(null);
    setSelectionTranslation(null);
  }, [chapterIndex]);

  const openAnnotationForEdit = React.useCallback((annotation) => {
    if (!annotation) return;
    setEditingAnnotation(annotation);
    setAnnotationDraft({ ...annotation });
    setAnnotationComposerOpen(true);
  }, []);

  const openAnnotationById = React.useCallback((id) => {
    const found = annotations.find((annotation) => annotation.id === id);
    if (found) openAnnotationForEdit(found);
  }, [annotations, openAnnotationForEdit]);

  const closeAnnotationComposer = React.useCallback(() => {
    setAnnotationComposerOpen(false);
    setAnnotationDraft(null);
    setEditingAnnotation(null);
  }, []);

  const handleSaveAnnotation = React.useCallback(async (draft) => {
    if (!draft || !draft.bookId) return;
    try {
      if (draft.id) await updateAnnotation(draft.id, draft);
      else await saveAnnotation(draft);
      await reloadAnnotations(draft.bookId);
      closeAnnotationComposer();
      setLayoutTick((value) => value + 1);
      showToast(draft.note?.trim() ? '批注已保存。' : '标记已保存。');
    } catch (error) {
      showToast(error?.message || '保存批注失败。');
    }
  }, [closeAnnotationComposer, reloadAnnotations, showToast]);

  const handleDeleteAnnotation = React.useCallback(async (annotation) => {
    if (!annotation?.id) return;
    try {
      await deleteAnnotation(annotation.id);
      await reloadAnnotations(currentRef.current?.record?.id);
      closeAnnotationComposer();
      setLayoutTick((value) => value + 1);
      showToast('批注已删除。');
    } catch (error) {
      showToast(error?.message || '删除批注失败。');
    }
  }, [closeAnnotationComposer, reloadAnnotations, showToast]);

  const handleJumpAnnotation = React.useCallback((annotation) => {
    if (!annotation) return;
    if (annotation.kind === 'pdf') {
      setFocusPdfAnnotation({ id: annotation.id, page: annotation.page, token: Date.now() });
      setAnnotationsOpen(false);
      return;
    }
    const nextChapter = Number.isFinite(annotation.chapterIndex) ? annotation.chapterIndex : 0;
    setFlowLocation(location => location.index === nextChapter ? location : { index: nextChapter, entry: { edge: 'start' } });
    setFocusAnnotation({ id: annotation.id, blockId: annotation.ranges?.[0]?.blockId, token: Date.now() });
    setAnnotationsOpen(false);
  }, []);

  const handleChapterChange = React.useCallback((next, entry = { edge: 'start' }) => {
    if (next === chapterIndex || next < 0 || next >= (current?.book?.chapters.length ?? 0)) return;
    setFocusAnnotation(null);
    setFlowLocation({ index: next, entry });
  }, [chapterIndex, current]);

  const handleChapterEntered = React.useCallback((entry, ratio) => {
    if (entry !== chapterEntry || current?.kind !== 'flow') return;
    setFlowLocation(location => location.entry === entry ? { index: location.index, entry: null } : location);
    scheduleProgress(current.record.id, flowProgress(chapterIndex, current.book.chapters.length, ratio));
  }, [chapterEntry, chapterIndex, current, scheduleProgress]);

  function beginTocResize(event) {
    if (event.button !== 0) return;
    event.preventDefault();
    const startX = event.clientX;
    const startWidth = Number(settingsRef.current.tocWidth) || 260;
    const previousCursor = document.body.style.cursor;
    const previousSelect = document.body.style.userSelect;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.body.classList.add('dshr-toc-resizing');
    const move = (pointerEvent) => {
      const next = Math.max(180, Math.min(520, Math.round(startWidth + pointerEvent.clientX - startX)));
      setSettings((value) => ({ ...value, tocWidth: next }));
    };
    const stop = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
      document.body.style.cursor = previousCursor;
      document.body.style.userSelect = previousSelect;
      document.body.classList.remove('dshr-toc-resizing');
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
  }

  const currentBookTitle = current?.book?.title || current?.record?.title || current?.record?.blob?.name || current?.record?.blobName || '';
  const currentAuthor = current?.book?.author || current?.record?.author || '';
  const progressLabel = current?.kind === 'flow'
    ? `第 ${(chapterIndex || 0) + 1} / ${current.book.chapters.length} 章`
    : '';
  const progressPercent = current
    ? (current.kind === 'pdf'
      ? (progress.pages > 0 ? ((progress.page || 1) / progress.pages) * 100 : 0)
      : (((chapterIndex + 1) / Math.max(1, current.book.chapters.length)) * 100))
    : 0;

  function renderTopbar({ iconTools, textTools } = {}) {
    const isPdf = current.kind === 'pdf';
    const readingMode = (
      <div className="dshr-topbar__mode" role="group" aria-label="翻书方式">
        <button
          type="button"
          className={`dshr-topbar__mode-btn${settings.readingMode !== 'book' ? ' is-active' : ''}`}
          onClick={() => setSettings((value) => ({ ...value, readingMode: 'scroll' }))}
          aria-pressed={settings.readingMode !== 'book'}
          title="连续滚动阅读"
        >
          <span>滚动</span>
        </button>
        <button
          type="button"
          className={`dshr-topbar__mode-btn${settings.readingMode === 'book' ? ' is-active' : ''}`}
          onClick={() => setSettings((value) => ({ ...value, readingMode: 'book' }))}
          aria-pressed={settings.readingMode === 'book'}
          title="横版纸质书翻页"
        >
          <span>横版</span>
        </button>
        {settings.readingMode === 'book' ? (
          <select
            className="dshr-topbar__animation"
            aria-label="翻页动画"
            value={settings.bookAnimation || 'slide'}
            onChange={(event) => setSettings((value) => ({ ...value, bookAnimation: event.target.value }))}
          >
            {BOOK_ANIMATIONS.map((animation) => (
              <option key={animation.id} value={animation.id}>{animation.label}</option>
            ))}
          </select>
        ) : null}
      </div>
    );
    const immersiveButton = (
      <button
        type="button"
        className="dshr-btn dshr-btn--icon"
        onClick={() => void toggleImmersive()}
        title="切换到沉浸阅读"
        aria-label="进入沉浸模式"
      >
        <IconMaximize size={16} />
      </button>
    );
    const translationSwitch = (
      <button
        type="button"
        className="dshr-switch"
        role="switch"
        aria-checked={settings.autoTranslate}
        onClick={() => setSettings((value) => ({ ...value, autoTranslate: !value.autoTranslate,
          ...(current.kind === 'pdf' && !value.autoTranslate ? { hideTranslations: false } : {}) }))}
        title="实时对照翻译"
        aria-label="实时翻译"
      >
        <span className="dshr-switch__track" />
        <span style={{ whiteSpace: 'nowrap' }}>实时翻译</span>
      </button>
    );
    const iconActions = (
      <>
        <button
          type="button"
          className={`dshr-btn dshr-btn--icon ${settings.hideTranslations ? 'dshr-btn--outline' : ''}`}
          onClick={() => setSettings((value) => ({ ...value, hideTranslations: !value.hideTranslations }))}
          title={settings.hideTranslations ? '显示中文译文' : '只看原文（隐藏已翻译内容）'}
          aria-label={settings.hideTranslations ? '显示中文译文' : '只看原文，隐藏译文'}
          aria-pressed={settings.hideTranslations}
        >
          {settings.hideTranslations ? <IconEyeOff size={16} /> : <IconEye size={16} />}
        </button>
        <button
          type="button"
          className="dshr-btn dshr-btn--icon"
          onClick={() => { setAppearanceOpen(true); setSelection(null); }}
          title="字体、背景与留白"
          aria-label="阅读外观"
        >
          <IconPalette size={16} />
        </button>
        <button
          type="button"
          className={`dshr-btn dshr-btn--icon ${annotationsOpen ? 'dshr-btn--outline' : ''}`}
          onClick={() => {
            setAnnotationsOpen((value) => !value);
            setAiOpen(false);
            setSelection(null);
          }}
          title="批注与便签"
          aria-label={`批注与便签，共 ${annotations.length} 条`}
        >
          <IconHighlighter size={16} />
          {annotations.length > 0 ? <span className="dshr-count-badge">{annotations.length > 99 ? '99+' : annotations.length}</span> : null}
        </button>
      </>
    );
    const aiButton = (
      <button type="button" className="dshr-btn dshr-btn--primary dshr-btn--sm" onClick={() => openAi('', '')} title="打开 AI 阅读助手">
        <IconSparkles size={14} /> AI
      </button>
    );
    const settingsButton = (
      <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost" onClick={() => setSettingsOpen(true)} title="阅读设置" aria-label="阅读设置">
        <IconSettings size={16} />
      </button>
    );
    return (
      <div className={`dshr-topbar${isPdf ? ' dshr-topbar--pdf' : ''}`} style={{ position: 'relative' }}>
        <div className="dshr-progress" aria-hidden="true"><i style={{ '--p': `${Math.min(100, progressPercent)}%` }} /></div>
        <div className="dshr-topbar__identity">
          <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost" onClick={closeBook} title="返回书架" aria-label="返回书架">
            <IconArrowLeft size={17} />
          </button>
          <div className="dshr-topbar__title">
            <strong title={currentBookTitle}>{currentBookTitle}</strong>
            <span>{[currentAuthor, formatLabel(current.record?.format), progressLabel].filter(Boolean).join(' · ')}</span>
          </div>
        </div>
        {isPdf ? (
          <>
            <div className="dshr-topbar__tools dshr-topbar__icons" role="group" aria-label="阅读快捷操作">
              {iconTools}
              {immersiveButton}
              {iconActions}
              {settingsButton}
            </div>
            <div className="dshr-topbar__tools dshr-topbar__labels">
              {textTools}
              {readingMode}
              {translationSwitch}
              {aiButton}
            </div>
          </>
        ) : (
          <div className="dshr-topbar__tools">
            <button type="button" className={`dshr-btn dshr-btn--icon ${tocOpen ? 'dshr-btn--outline' : ''}`} onClick={() => setTocOpen((value) => !value)} title="目录" aria-label="目录" aria-pressed={tocOpen}>
              <IconList size={16} />
            </button>
            {readingMode}
            {immersiveButton}
            {translationSwitch}
            {iconActions}
            {aiButton}
            {settingsButton}
          </div>
        )}
      </div>
    );
  }

  function renderImmersiveToolbar(pdfTools) {
    const isPdf = current.kind === 'pdf';
    return (
      <div
        className={`dshr-immersive-controls${isPdf ? ' dshr-immersive-controls--pdf' : ''}`}
        role="group"
        aria-label="沉浸阅读控件"
        style={isPdf ? undefined : { height: IMMERSIVE_BAR_HEIGHT }}
      >
        {isPdf ? <span className="dshr-immersive-title" title={currentBookTitle}>{currentBookTitle}</span> : null}
        {pdfTools}
        <div className="dshr-immersive-actions">
          {!isPdf ? (
            <button
              type="button"
              className="dshr-immersive-btn"
              onClick={() => setTocOpen((value) => !value)}
              title={tocOpen ? '收起目录' : '打开目录'}
              aria-pressed={tocOpen}
            >
              <IconList size={15} /> 目录
            </button>
          ) : null}
          <button
            type="button"
            className="dshr-immersive-btn"
            onClick={() => { setAppearanceOpen(true); setSelection(null); }}
            title="阅读外观"
            aria-label="阅读外观"
            aria-haspopup="dialog"
            aria-expanded={appearanceOpen}
            autoFocus
          >
            <IconPalette size={15} /> 外观
          </button>
          <button
            type="button"
            className="dshr-immersive-btn"
            onClick={() => void toggleFullscreen()}
            title={fullscreen ? '退出全屏' : '进入全屏'}
            aria-label={fullscreen ? '退出全屏' : '进入全屏'}
            aria-pressed={fullscreen}
          >
            {fullscreen ? <IconMinimize size={15} /> : <IconMaximize size={15} />}
            {fullscreen ? '还原' : '全屏'}
          </button>
          <button type="button" className="dshr-immersive-btn" onClick={() => void exitImmersive()} title="退出沉浸模式（Esc）">
            <IconX size={15} /> 退出沉浸
          </button>
        </div>
      </div>
    );
  }

  const sidePanels = current ? (
    <>
      {aiOpen ? (
        <AiPanel
          open={aiOpen}
          onClose={() => setAiOpen(false)}
          seed={aiSeed}
          onGoogle={handleGoogle}
          onToast={showToast}
        />
      ) : null}
      {annotationsOpen ? (
        <AnnotationsPanel
          open={annotationsOpen}
          annotations={annotations}
          book={current.book || current.record}
          onClose={() => setAnnotationsOpen(false)}
          onOpenAnnotation={openAnnotationById}
          onJump={handleJumpAnnotation}
          onDelete={(annotation) => void handleDeleteAnnotation(annotation)}
        />
      ) : null}
    </>
  ) : null;

  return (
    <ReaderErrorBoundary onReset={closeBook}>
      <div
        ref={rootRef}
        className={`dshr-root${immersive ? ' is-immersive' : ''}`}
        style={{
          ...appearanceStyle,
          ...immersiveTone,
          '--dshr-font-size': `${settings.fontSize}px`,
          '--dshr-line-height': String(settings.lineHeight),
          '--dshr-toc-width': `${settings.tocWidth}px`,
        }}
        data-reader-background={settings.backgroundPreset}
        data-hide-translations={settings.hideTranslations ? 'true' : 'false'}
        data-reading-mode={settings.readingMode || 'scroll'}
      >
        <input
          ref={backgroundInputRef}
          type="file"
          accept="image/*"
          className="dshr-sr-only"
          tabIndex={-1}
          onChange={(event) => {
            const file = event.target.files?.[0];
            event.target.value = '';
            void handleBackgroundFile(file);
          }}
        />
        {current ? (
          <div className="dshr-reader">
            {!immersive && current.kind === 'flow' ? renderTopbar() : null}
            {immersive && current.kind === 'flow' ? renderImmersiveToolbar() : null}
            <div className="dshr-body">
              {current.kind === 'flow' ? (
                <aside className={`dshr-toc${tocOpen ? '' : ' is-closed'}`} aria-label="目录">
                  <div className="dshr-toc__head">
                    <strong>目录</strong>
                    <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost" onClick={() => setTocOpen(false)} aria-label="收起目录"><IconX size={14} /></button>
                  </div>
                  <div className="dshr-toc__list">
                    {current.book.chapters.map((chapter, index) => (
                      <button
                        key={chapter.id || index}
                        type="button"
                        className={`dshr-toc__item${index === chapterIndex ? ' is-active' : ''}`}
                        onClick={() => handleChapterChange(index)}
                        title={chapter.title}
                      >
                        {chapter.title || `第 ${index + 1} 章`}
                      </button>
                    ))}
                  </div>
                  <div
                    className="dshr-toc__resizer"
                    role="separator"
                    aria-orientation="vertical"
                    aria-label="拖动调整目录宽度"
                    title="拖动调整目录宽度；双击恢复默认"
                    onPointerDown={beginTocResize}
                    onDoubleClick={() => setSettings((value) => ({ ...value, tocWidth: 260 }))}
                  />
                </aside>
              ) : null}

              {current.kind === 'pdf' ? (
                <PdfViewer
                  key={current.record.id}
                  data={current.data}
                  documentId={current.record.id}
                  fileName={currentBookTitle}
                  renderImmersiveToolbar={immersive ? renderImmersiveToolbar : undefined}
                  renderTopbar={immersive ? undefined : renderTopbar}
                  sidePanels={sidePanels}
                  initialPage={current.record.progress?.page || 1}
                  autoTranslate={settings.autoTranslate}
                  hideTranslations={settings.hideTranslations}
                  paged={settings.readingMode === 'book'}
                  onHideTranslations={() => setSettings(value => ({ ...value, hideTranslations: true }))}
                  annotations={annotations}
                  onOpenAnnotation={openAnnotationById}
                  focusAnnotation={focusPdfAnnotation}
                  onReady={({ pageCount }) => setProgress((value) => ({
                    ...value,
                    page: value.page || 1,
                    pages: pageCount,
                    percent: pageCount > 0 ? ((value.page || 1) / pageCount) * 100 : value.percent || 0,
                  }))}
                  onPageChange={(page) => {
                    const pages = progress.pages || 0;
                    const next = { ...progress, page, pages, percent: pages > 0 ? (page / pages) * 100 : 0 };
                    setProgress(next);
                    scheduleProgress(current.record.id, next);
                  }}
                  onSelection={handlePdfSelection}
                />
              ) : (
                <FlowReader
                  book={current.book}
                  chapterIndex={chapterIndex}
                  onChapterChange={handleChapterChange}
                  settings={settings}
                  chapterEntry={chapterEntry}
                  onChapterEntered={handleChapterEntered}
                  onSelection={handleFlowSelection}
                  onProgress={(next) => {
                    setProgress(next);
                    scheduleProgress(current.record.id, next);
                  }}
                  annotations={annotations}
                  onOpenAnnotation={openAnnotationById}
                  focusAnnotation={focusAnnotation}
                  layoutVersion={layoutVersion}
                />
              )}

              {current.kind === 'flow' ? sidePanels : null}
            </div>
            <PagedReader
              enabled={settings.readingMode === 'book'}
              animation={settings.bookAnimation}
              bookMode
              bookFrame={current.kind === 'flow'}
              pdfMode={current.kind === 'pdf'}
              frameTop={immersive ? IMMERSIVE_BAR_HEIGHT : 52}
              frameLeft={current.kind === 'flow' && tocOpen ? settings.tocWidth : 0}
              leftOffset={current.kind === 'flow' && tocOpen ? settings.tocWidth + 12 : 12}
              readerKey={`${current.record.id}:${current.kind}:${chapterIndex}`}
              canPrevChapter={current.kind === 'flow' && chapterIndex > 0}
              canNextChapter={current.kind === 'flow' && chapterIndex < (current.book?.chapters?.length || 1) - 1}
              chapterEntry={chapterEntry}
              onChapterEntered={handleChapterEntered}
              onChapterTurn={(direction, entry) => handleChapterChange(chapterIndex + direction, entry)}
            />
          </div>
        ) : (
          <LibraryView
            books={books}
            collections={collections}
            onCollectionsChange={updateCollections}
            loading={loadingBooks}
            resumeBook={lastBookSummary}
            onResume={(book) => void openBook(book)}
            importing={importing}
            organizing={organizing}
            categoryFilter={categoryFilter}
            onCategoryFilter={setCategoryFilter}
            onAutoOrganize={() => void handleAutoOrganize()}
            onImport={handleImport}
            onOpen={(book) => void openBook(book)}
            onDelete={(book) => setDeleteTarget(book)}
            onCycleCategory={(book, next) => void handleCycleCategory(book, next)}
            onSettings={() => setSettingsOpen(true)}
            onOnlineImport={() => setOnlineOpen(true)}
          />
        )}

        {opening ? (
          <div className="dshr-modal-mask" style={{ background: 'color-mix(in srgb, var(--dshr-bg) 76%, transparent)', backdropFilter: 'blur(5px)' }}>
            <div className="dshr-loading">
              <div className="dshr-loading__ring" />
              <span>{openingLabel}</span>
            </div>
          </div>
        ) : null}

        {selection && !aiOpen && !annotationComposerOpen ? (
          <SelectionToolbar
            selection={selection}
            translation={selectionTranslation}
            onTranslate={(picked) => void translateSelection(picked)}
            onAnnotate={openAnnotationForSelection}
            onExplain={(picked) => openAi(picked.text, picked.context)}
            onGoogle={handleGoogle}
            onCopy={handleCopy}
            onClose={() => { setSelection(null); setSelectionTranslation(null); }}
            onRetry={() => void translateSelection(selection)}
          />
        ) : null}

        <OnlineImportDialog
          open={onlineOpen}
          busy={onlineBusy}
          onClose={() => { if (!onlineBusy) setOnlineOpen(false); }}
          onSubmit={(url) => void handleOnlineImport(url)}
        />
        {settingsOpen ? (
          <SettingsDialog
            settings={settings}
            onChange={setSettings}
            onClose={() => setSettingsOpen(false)}
            onOpenAppearance={() => { setSettingsOpen(false); setAppearanceOpen(true); }}
            onClearLibrary={() => void handleClearLibrary()}
          />
        ) : null}
        {appearanceOpen ? (
          <AppearancePanel
            open={appearanceOpen}
            settings={settings}
            backgroundImageUrl={backgroundImageUrl}
            onChange={handleAppearanceChange}
            onPickBackgroundImage={handlePickBackgroundImage}
            onClearBackgroundImage={() => void handleClearBackgroundImage()}
            onClose={() => setAppearanceOpen(false)}
          />
        ) : null}
        {deleteTarget ? (
          <ConfirmDeleteDialog book={deleteTarget} onCancel={() => setDeleteTarget(null)} onConfirm={() => void handleDelete()} />
        ) : null}
        {annotationComposerOpen && annotationDraft ? (
          <AnnotationComposer
            open={annotationComposerOpen}
            draft={annotationDraft}
            mode={editingAnnotation ? 'edit' : 'create'}
            onClose={closeAnnotationComposer}
            onSave={(draft) => void handleSaveAnnotation(draft)}
            onDelete={editingAnnotation ? () => void handleDeleteAnnotation(editingAnnotation) : undefined}
          />
        ) : null}
        <Toast message={toast} />
      </div>
    </ReaderErrorBoundary>
  );
}
