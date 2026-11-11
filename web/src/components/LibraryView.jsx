import React from 'react';
import {
  IconBookOpen, IconUpload, IconBook, IconTrash, IconPlus, IconSettings,
  IconSearch, IconWand, IconTag, IconDownload, IconChevronRight, IconX,
  IconCheck, IconChevronLeft, IconFolder, IconMinus, IconNote, IconCopy,
} from './icons.jsx';
import {
  CATEGORIES, categoryLabel, formatBytes, formatLabel, formatRelativeTime, isSupportedFile,
  saveBookCollection, deleteBookCollection,
} from '../storage.js';
import { bookTitle, CollectionCard, CollectionDialog, matchesBook } from './BookCollections.jsx';
import { LibraryMascot } from './LibraryMascot.jsx';

function progressPercent(book) {
  const progress = book.progress;
  if (!progress) return 0;
  if (typeof progress.page === 'number' && typeof progress.pages === 'number' && progress.pages > 0) {
    return Math.max(0, Math.min(100, (progress.page / progress.pages) * 100));
  }
  if (typeof progress.percent === 'number') return Math.max(0, Math.min(100, progress.percent));
  if (typeof progress.chapter === 'number' && typeof progress.chapters === 'number' && progress.chapters > 0) {
    return Math.max(0, Math.min(100, ((progress.chapter + 1) / progress.chapters) * 100));
  }
  return 0;
}

const CATEGORY_MASCOT = { book: 'reading', paper: 'search', document: 'note' };
const SHELF_CATEGORIES = ['paper', 'book', 'document'].map(id => CATEGORIES.find(category => category.id === id));
const CATEGORY_ICON = { book: IconBookOpen, paper: IconNote, document: IconNote };
const NEXT_CATEGORY = { book: 'paper', paper: 'document', document: 'book' };

function BookCard({ book, list, onOpen, onDelete, onCycleCategory, onAdd, onRemove, onEditCitation, selection, onToggle }) {
  const percent = progressPercent(book);
  const meta = [formatLabel(book.format), book.author || '', formatBytes(book.size)].filter(Boolean).join(' · ');
  const page = book.progress?.page;
  const progressLabel = page ? "第 " + page + (book.progress.pages ? " / " + book.progress.pages : "") + " 页" : percent > 0 ? Math.round(percent) + "%" : "未开始";
  return (
    <article className={`dshr-book-card${selection ? ' is-selecting' : ''}${selection?.has(book.id) ? ' is-selected' : ''}`}>
      <button type="button" className="dshr-book" aria-pressed={selection ? selection.has(book.id) : undefined}
        aria-label={`${selection ? '选择' : book.missingSource ? '关联原文' : '打开'} ${bookTitle(book)}`}
        onClick={() => selection ? onToggle(book.id) : onOpen(book)}>
      {list ? (
        <>
          <span className="dshr-library-row__title"><IconNote size={17} /><strong title={bookTitle(book)}>{bookTitle(book)}</strong></span>
          <span className="dshr-library-row__author" title={book.author || undefined}>{book.author || "—"}</span>
          <span className="dshr-library-row__year">{book.year || "—"}</span>
          <span className="dshr-library-row__progress">{book.missingSource ? "原文待关联" : progressLabel}</span>
        </>
      ) : (
        <>
          <span className="dshr-book__media">
            {book.cover ? <img className="dshr-book__cover" src={book.cover} alt="" loading="lazy" decoding="async" />
              : <span className="dshr-book__spine">{formatLabel(book.format)}</span>}
          </span>
          <span className="dshr-book__body">
            <span className="dshr-book__title">{bookTitle(book)}</span>
            <span className="dshr-book__meta">{meta}{book.missingSource ? " · 点击关联原文" : ""}</span>
            <span className="dshr-book__foot">
              <span>{book.lastOpenedAt ? "阅读于 " + formatRelativeTime(book.lastOpenedAt) : formatRelativeTime(book.addedAt)}</span>
              <span>{progressLabel}</span>
            </span>
            <span className="dshr-book__progress" aria-hidden="true"><i style={{ "--p": percent + "%" }} /></span>
          </span>
        </>
      )}
      {selection && <span className="dshr-book__selected" aria-hidden="true">{selection.has(book.id) && <IconCheck size={14} />}</span>}
      </button>
      {!selection && (
      <div className="dshr-book__badges">
        <button
          type="button"
          className={`dshr-book__category is-${book.category || 'document'}`}
          title={`默认分类：${categoryLabel(book.category)}${book.categoryManual ? '（手动）' : '（自动）'} · 点击切换`}
          onClick={() => onCycleCategory(book)}
        >
          <IconTag size={11} /> {categoryLabel(book.category)}
        </button>
        {book.format === 'pdf' && onEditCitation ? <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--ghost"
          aria-label={`编辑论文出处 ${bookTitle(book)}`} onClick={() => onEditCitation(book)}>出处</button> : null}
        <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--ghost dshr-book__add" aria-label={`将 ${bookTitle(book)} 加入书单`} onClick={() => onAdd([book.id])}>
          <IconPlus size={13} /> 加入书单
        </button>
        {onRemove ? (
          <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost" aria-label={`从此书单移出 ${bookTitle(book)}`} title="从此书单移出" onClick={() => onRemove([book.id])}>
            <IconMinus size={14} />
          </button>
        ) : (
          <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete" aria-label={`从书架删除 ${bookTitle(book)}`} title="从书架删除" onClick={() => onDelete(book)}>
            <IconTrash size={14} />
          </button>
        )}
      </div>
      )}
    </article>
  );
}

export function LibraryView({
  books, collections, onCollectionsChange, loading, resumeBook, onResume, importing, organizing, categoryFilter, onCategoryFilter,
  onAutoOrganize, onImport, onOpen, onDelete, onCycleCategory, onSettings, onOnlineImport, onEvidence, onEditCitation,
  onBackup, onRestoreOriginal,
}) {
  const inputRef = React.useRef(null);
  const originalInput = React.useRef(null);
  const originalBook = React.useRef(null);
  const [over, setOver] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [preview, setPreview] = React.useState(null);
  const [selection, setSelection] = React.useState(null);
  const [action, setAction] = React.useState(null);
  const [notice, setNotice] = React.useState(null);
  const [guideOpen, setGuideOpen] = React.useState(false);
  const [guideDismissed, setGuideDismissed] = React.useState(false);
  const guideRef = React.useRef(null);
  const dragDepth = React.useRef(0);
  const shelfRef = React.useRef(null);
  const headingRef = React.useRef(null);
  const focusHeading = React.useRef(false);

  const folders = React.useMemo(() => {
    const byId = new Map(books.map(book => [book.id, book]));
    const byCategory = new Map(CATEGORIES.map(category => [category.id, []]));
    const byImport = [...books].sort((a, b) => a.addedAt - b.addedAt);
    for (const book of byImport) byCategory.get(book.category)?.push(book);
    return [
      ...collections.map(collection => ({ ...collection, books: collection.bookIds.map(id => byId.get(id)).filter(Boolean) })),
      ...CATEGORIES.map(category => ({ id: category.id, name: category.label, system: true, books: byCategory.get(category.id) })),
    ];
  }, [books, collections]);
  const active = folders.find(folder => folder.id === categoryFilter);
  const scope = active?.books ?? books;
  const query = search.trim().toLowerCase();
  const filtered = query ? scope.filter(book => matchesBook(book, query)) : scope;
  const homeFolders = collections.length ? folders.filter(folder => !folder.system) : folders;
  const shownBooks = active || query ? filtered : [...filtered].sort((a, b) =>
    (b.lastOpenedAt || 0) - (a.lastOpenedAt || 0) || (b.addedAt || 0) - (a.addedAt || 0));
  const listMode = !active;
  const continueBook = resumeBook || books.find(book => !book.missingSource && book.progress);
  const selectedIds = selection ? scope.filter(book => selection.has(book.id)).map(book => book.id) : [];

  React.useLayoutEffect(() => {
    if (!focusHeading.current) return;
    focusHeading.current = false;
    headingRef.current?.focus({ preventScroll: true });
  }, [categoryFilter]);

  function openFolder(id) {
    focusHeading.current = id !== categoryFilter;
    onCategoryFilter(id);
    setSearch('');
    setSelection(null);
    setPreview(null);
    setNotice(null);
    setGuideOpen(false);
    shelfRef.current?.scrollTo({ top: 0 });
  }

  const createFolder = (bookIds = []) => setAction({ kind: 'edit', bookIds });
  function addToFolder(bookIds) {
    setNotice(null);
    if (collections.length) setAction({ kind: 'add', bookIds });
    else createFolder(bookIds);
  }
  async function saveFolder(input) {
    const saved = await saveBookCollection(input);
    onCollectionsChange(current => current.some(item => item.id === saved.id)
      ? current.map(item => item.id === saved.id ? saved : item)
      : [...current, saved]);
    return saved;
  }
  async function removeFromFolder(bookIds) {
    try {
      await saveFolder({ id: active.id, remove: bookIds });
      setSelection(null);
      setNotice({ text: `已从「${active.name}」移出 ${bookIds.length} 本。` });
    } catch (error) {
      setNotice({ text: error?.message || '移出书单失败。' });
    }
  }
  async function deleteFolder(id) {
    await deleteBookCollection(id);
    onCollectionsChange(current => current.filter(item => item.id !== id));
    if (categoryFilter === id) openFolder('all');
    setNotice({ text: '书单已删除。' });
  }

  const pick = () => inputRef.current?.click();
  function readBook(book) {
    if (!book.missingSource) { onOpen(book); return; }
    originalBook.current = book;
    originalInput.current?.click();
  }

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dragDepth.current = 0;
    setOver(false);
    const files = [...(event.dataTransfer?.files ?? [])].filter((file) => isSupportedFile(file.name));
    if (files.length === 0) {
      onImport([], { rejected: true });
      return;
    }
    onImport(files);
  };

  return (
    <div className="dshr-library-shell">
      <aside className="dshr-library-nav" aria-label="书库导航">
        <strong className="dshr-library-nav__brand"><IconBookOpen size={24} /> DSH Reader</strong>
        <nav aria-label="书架分类">
          <button type="button" aria-current={!active ? "page" : undefined} onClick={() => openFolder("all")}><IconFolder size={19} /> 我的书架</button>
          {SHELF_CATEGORIES.map(category => {
            const Icon = CATEGORY_ICON[category.id];
            return <button key={category.id} type="button" aria-current={active?.id === category.id ? "page" : undefined}
              onClick={() => openFolder(category.id)}><Icon size={19} /> {category.label}</button>;
          })}
          <button type="button" onClick={() => onEvidence()}><IconBook size={19} /> 证据库</button>
        </nav>
        <div className="dshr-library-nav__actions">
          <button type="button" onClick={onOnlineImport}><IconDownload size={17} /> 公开书库导入</button>
          <button type="button" onClick={onAutoOrganize} disabled={organizing || books.length === 0}><IconWand size={17} /> {organizing ? "整理中…" : "一键整理"}</button>
          {onBackup && <button type="button" onClick={onBackup}><IconCopy size={17} /> 备份与恢复</button>}
          <button type="button" onClick={onSettings}><IconSettings size={19} /> 设置</button>
        </div>
      </aside>
      <div className="dshr-library" ref={shelfRef} onDragOver={event => event.preventDefault()} onDrop={handleDrop}>
      <div className="dshr-library__inner">
        <header className="dshr-hero">
          <div className="dshr-library-title">
            <h1 ref={headingRef} tabIndex={-1}>{active?.name || "我的书架"}</h1>
            {active?.system && <LibraryMascot key={active.id} pose={CATEGORY_MASCOT[active.id]} size={48} />}
            {!active && (guideDismissed || query) && !loading && <LibraryMascot pose="welcome" />}
          </div>
          <div className="dshr-hero__actions">
            <label className="dshr-library__search">
              <IconSearch size={17} />
              <input type="search" value={search} onChange={event => setSearch(event.target.value)}
                placeholder={active ? "搜索此书单" : "搜索文档"} aria-label={active ? "搜索此书单" : "搜索书架"} />
            </label>
            <button type="button" className="dshr-btn dshr-btn--primary" onClick={pick} disabled={importing}>
              {importing ? <span className="dshr-spinner" /> : <IconDownload size={17} />}
              {importing ? "正在加入书架…" : "导入文档"}
            </button>
          </div>
        </header>

        {!active && !loading && !query && (continueBook || !guideDismissed) && (
          <section className="dshr-library-start" aria-label="阅读与导入">
            {continueBook && (
              <button type="button" className="dshr-resume" onClick={() => onResume(continueBook)}>
                <span className="dshr-resume__mark"><IconNote size={25} /></span>
                <span className="dshr-resume__body">
                  <span className="dshr-resume__eyebrow">继续阅读</span>
                  <strong title={bookTitle(continueBook)}>{bookTitle(continueBook)}</strong>
                  <span className="dshr-resume__meta">{continueBook.progress?.page
                    ? "第 " + continueBook.progress.page + (continueBook.progress.pages ? " / " + continueBook.progress.pages : "") + " 页"
                    : formatLabel(continueBook.format) + " · " + Math.round(progressPercent(continueBook)) + "%"}</span>
                  <span className="dshr-resume__progress" aria-hidden="true"><i style={{ "--p": progressPercent(continueBook) + "%" }} /></span>
                </span>
                <span className="dshr-resume__arrow" aria-hidden="true"><IconChevronRight size={18} /></span>
              </button>
            )}
            {!guideDismissed && (
              <div className="dshr-library-guide">
                <button type="button" className="dshr-library-guide__open" aria-expanded={guideOpen} onClick={() => {
                  if (guideOpen) { setGuideOpen(false); return; }
                  setGuideOpen(true);
                  requestAnimationFrame(() => guideRef.current?.scrollIntoView({ block: "nearest" }));
                }}>
                  <LibraryMascot pose="welcome" size={192} />
                  <span className="dshr-library-guide__label">
                    <strong>导入指南</strong><IconChevronRight size={18} />
                  </span>
                </button>
                <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost dshr-library-guide__close" aria-label="隐藏导入指南"
                  onClick={() => { setGuideDismissed(true); setGuideOpen(false); }}><IconX size={16} /></button>
              </div>
            )}
          </section>
        )}
        {!active && !loading && !query && (
          <section className="dshr-collections" aria-label="书单文件夹">
            <div className="dshr-collections__bar">
              <h2>书单</h2>
              <button type="button" className="dshr-btn dshr-btn--outline" onClick={() => createFolder()}><IconPlus size={15} /> 新建书单</button>
            </div>
            <div className="dshr-collections__grid">
              {homeFolders.map(folder => <CollectionCard key={folder.id} folder={folder} expanded={preview === folder.id}
                onToggle={() => setPreview(value => value === folder.id ? null : folder.id)}
                onOpen={() => openFolder(folder.id)} onRead={readBook} />)}
            </div>
          </section>
        )}

        {!active && !query && (!books.length || guideOpen) && <section
          ref={guideRef}
          className={`dshr-drop${books.length ? ' is-compact' : ''}${over ? ' is-over' : ''}`}
          onDragEnter={(event) => {
            event.preventDefault();
            dragDepth.current += 1;
            setOver(true);
          }}
          onDragOver={(event) => event.preventDefault()}
          onDragLeave={() => {
            dragDepth.current = Math.max(0, dragDepth.current - 1);
            if (dragDepth.current === 0) setOver(false);
          }}
          onDrop={handleDrop}
          aria-label="拖放文档以导入"
        >
          <div className="dshr-drop__mark"><IconUpload size={24} /></div>
          <div className="dshr-drop__body">
            <div className="dshr-drop__title">拖一份文献或书到这里，或点击导入</div>
            <div className="dshr-drop__hint">
              文件只保存在本机浏览器书架中，不会上传；翻译仅发送当前选中的段落。
            </div>
            {!books.length && <div className="dshr-drop__formats">
              {['PDF', 'EPUB', 'MOBI', 'AZW3', 'TXT', 'Markdown', 'HTML'].map((format) => (
                <span key={format} className="dshr-chip">{format}</span>
              ))}
            </div>}
          </div>
          <button type="button" className="dshr-btn dshr-btn--outline" onClick={pick} disabled={importing}>选择文件</button>
        </section>}

        {active && (
          <div className="dshr-collection-context">
            <nav aria-label="书架位置">
              <button type="button" className="dshr-btn dshr-btn--ghost" onClick={() => openFolder('all')}><IconChevronLeft size={15} /> 返回书架</button>
            </nav>
            {!active.system && <div className="dshr-collection-context__actions">
              <button type="button" className="dshr-btn dshr-btn--outline" onClick={() => onEvidence(active.id)}>专题与证据</button>
              <button type="button" className="dshr-btn dshr-btn--outline" onClick={() => setAction({ kind: 'edit', collection: active })}>编辑书单</button>
              <button type="button" className="dshr-btn dshr-btn--ghost" onClick={() => setAction({ kind: 'delete', collection: active })}><IconTrash size={15} /> 删除书单</button>
            </div>}
          </div>
        )}

        <div className="dshr-library__bar">
          <h2>{query ? "搜索结果" : active ? "书单内容" : "最近文献"}</h2>
          <span>{filtered.length} / {scope.length} 本</span>
          {scope.length > 0 && <button type="button" className="dshr-btn dshr-btn--outline" aria-pressed={!!selection} onClick={() => setSelection(value => value ? null : new Set())}>
            {selection ? '退出多选' : '多选'}
          </button>}
        </div>

        <div className="dshr-library__notice" role="status">
          {notice?.added && <LibraryMascot pose="celebrate" size={36} />}
          {notice?.text}
        </div>
        {selection && <div className="dshr-collection-selection" aria-label="批量书单操作">
          <span>已选 {selectedIds.length} 本</span>
          <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--outline" disabled={!filtered.length}
            onClick={() => setSelection(current => new Set([...current, ...filtered.map(book => book.id)]))}>全选当前结果</button>
          <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--primary" disabled={!selectedIds.length} onClick={() => addToFolder(selectedIds)}>加入书单</button>
          {active && !active.system && <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--outline" disabled={!selectedIds.length} onClick={() => void removeFromFolder(selectedIds)}>从此书单移出</button>}
        </div>}

        {loading ? (
          <div className="dshr-loading" style={{ minHeight: 180 }}>
            <div className="dshr-loading__ring" />
            <span>正在打开书架…</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="dshr-empty-books">
            {query ? <LibraryMascot key="search" pose="search" /> : active && !active.system ? <LibraryMascot key="sleep" pose="sleep" /> : null}
            {query ? `没有匹配「${search.trim()}」的文档。`
              : active ? `「${active.name}」还没有书。` : '导入文档后，就可以把它们加入书单。'}
            {active && !active.system && !query && <button type="button" className="dshr-btn dshr-btn--outline" onClick={() => setAction({ kind: 'edit', collection: active })}>
              <IconPlus size={15} /> 添加书籍
            </button>}
          </div>
        ) : (
          <div className={listMode ? "dshr-library-rows" : "dshr-books"}>
            {listMode && <div className="dshr-library-rows__head" aria-hidden="true">
              <span>文献标题</span><span>作者</span><span>年份</span><span>进度</span><span>操作</span>
            </div>}
            {shownBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                list={listMode}
                onOpen={readBook}
                onDelete={onDelete}
                onEditCitation={onEditCitation}
                onCycleCategory={(item) => onCycleCategory(item, NEXT_CATEGORY[item.category || 'document'])}
                onAdd={addToFolder}
                onRemove={active && !active.system ? removeFromFolder : undefined}
                selection={selection}
                onToggle={id => setSelection(current => {
                  const next = new Set(current);
                  if (next.has(id)) next.delete(id);
                  else next.add(id);
                  return next;
                })}
              />
            ))}
          </div>
        )}

      </div>
      </div>

      {action && <CollectionDialog key={`${action.kind}:${action.collection?.id || ''}`} action={action} books={books} collections={collections}
        onClose={() => setAction(null)} onCreate={createFolder} onDelete={deleteFolder}
        onSave={async input => {
          const saved = await saveFolder(input);
          setSelection(null);
          const added = action.kind === 'add' || (action.kind === 'edit' && !action.collection && action.bookIds?.length > 0);
          setNotice({ added, text: added ? `已加入「${saved.name}」。` : `已保存「${saved.name}」。` });
        }} />}

      <input ref={originalInput} type="file" aria-label="选择原文文件" hidden
        onChange={event => {
          const file = event.target.files?.[0];
          const book = originalBook.current;
          originalBook.current = null;
          event.target.value = '';
          if (book && file) void onRestoreOriginal?.(book, file);
        }} />

      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".pdf,.epub,.mobi,.azw,.azw3,.txt,.md,.markdown,.html,.htm,application/pdf,application/epub+zip,text/plain,text/markdown,text/html"
        className="dshr-sr-only"
        tabIndex={-1}
        onChange={(event) => {
          const files = [...(event.target.files ?? [])];
          event.target.value = '';
          if (files.length > 0) onImport(files);
        }}
      />
    </div>
  );
}
