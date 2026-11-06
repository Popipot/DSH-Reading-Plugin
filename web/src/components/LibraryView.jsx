import React from 'react';
import {
  IconBookOpen, IconUpload, IconBook, IconTrash, IconPlus, IconSettings,
  IconSparkles, IconTranslate, IconSearch, IconWand, IconTag, IconDownload,
} from './icons.jsx';
import {
  CATEGORIES, categoryLabel, formatBytes, formatLabel, formatRelativeTime, isSupportedFile,
} from '../storage.js';

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

const NEXT_CATEGORY = { book: 'paper', paper: 'document', document: 'book' };

function BookCard({ book, onOpen, onDelete, onCycleCategory }) {
  const percent = progressPercent(book);
  const meta = [formatLabel(book.format), book.author || '', formatBytes(book.size)].filter(Boolean).join(' · ');
  return (
    <div
      className="dshr-book"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(book)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen(book);
        }
      }}
    >
      <div className="dshr-book__media">
        {book.cover
          ? <img className="dshr-book__cover" src={book.cover} alt={`${book.title || '文档'}封面`} loading="lazy" />
          : <div className="dshr-book__spine">{formatLabel(book.format)}</div>}
      </div>
      <div className="dshr-book__body">
        <div className="dshr-book__title">{book.title || '未命名文档'}</div>
        <div className="dshr-book__meta">{meta}</div>
        <div className="dshr-book__foot">
          <span>{book.lastOpenedAt ? `阅读于 ${formatRelativeTime(book.lastOpenedAt)}` : formatRelativeTime(book.addedAt)}</span>
          <span>{percent > 0 ? `${Math.round(percent)}%` : '未开始'}</span>
        </div>
        <div className="dshr-book__progress" aria-hidden="true"><i style={{ '--p': `${percent}%` }} /></div>
      </div>
      <div className="dshr-book__badges">
        <button
          type="button"
          className={`dshr-book__category is-${book.category || 'document'}`}
          title={`分类：${categoryLabel(book.category)}${book.categoryManual ? '（手动）' : '（自动）'} · 点击切换`}
          onClick={(event) => {
            event.stopPropagation();
            onCycleCategory(book);
          }}
        >
          <IconTag size={11} /> {categoryLabel(book.category)}
        </button>
        <button
          type="button"
          className="dshr-btn dshr-btn--icon dshr-btn--sm dshr-btn--ghost dshr-book__delete"
          aria-label={`从书架删除 ${book.title || '这本书'}`}
          title="从书架删除"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(book);
          }}
        >
          <IconTrash size={14} />
        </button>
      </div>
    </div>
  );
}

export function LibraryView({
  books, loading, resumeBook, onResume, importing, organizing, categoryFilter, onCategoryFilter,
  onAutoOrganize, onImport, onOpen, onDelete, onCycleCategory, onSettings, onOnlineImport,
}) {
  const inputRef = React.useRef(null);
  const [over, setOver] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const dragDepth = React.useRef(0);

  const counts = React.useMemo(() => {
    const next = { all: books.length, book: 0, paper: 0, document: 0 };
    for (const book of books) next[book.category] = (next[book.category] || 0) + 1;
    return next;
  }, [books]);

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase();
    return books.filter((book) => {
      if (categoryFilter !== 'all' && book.category !== categoryFilter) return false;
      if (!query) return true;
      return `${book.title} ${book.author || ''}`.toLowerCase().includes(query);
    });
  }, [books, categoryFilter, search]);

  const pick = () => inputRef.current?.click();

  const handleDrop = (event) => {
    event.preventDefault();
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
    <div className="dshr-library">
      <div className="dshr-library__inner">
        <header className="dshr-hero">
          <div>
            <div className="dshr-hero__eyebrow"><IconBookOpen size={15} /> DSH READER · LIBRARY</div>
            <h1>你的跨语言阅读助手</h1>
            <p>
              PDF、EPUB、MOBI、TXT 都能在这里打开。自动整理成书籍与文献书单，
              读到外文时实时对照中文；选中文字即可翻译、问 AI 或跳转 Google 搜索。
            </p>
          </div>
          <div className="dshr-hero__actions">
            <button type="button" className="dshr-btn dshr-btn--primary" onClick={pick} disabled={importing}>
              {importing ? <span className="dshr-spinner" /> : <IconPlus size={15} />}
              {importing ? '正在加入书架…' : '导入文档'}
            </button>
            <button
              type="button"
              className="dshr-btn dshr-btn--outline"
              onClick={onOnlineImport}
              title="从古登堡、Standard Ebooks、arXiv 等公开来源下载并打开"
            >
              <IconDownload size={15} /> 公开书库导入
            </button>
            <button
              type="button"
              className="dshr-btn dshr-btn--outline"
              onClick={onAutoOrganize}
              disabled={organizing || books.length === 0}
              title="按文件类型与元数据，把书架整理成书籍 / 文献 / 文档"
            >
              {organizing ? <span className="dshr-spinner" /> : <IconWand size={15} />}
              {organizing ? '整理中…' : '一键整理'}
            </button>
            <button type="button" className="dshr-btn dshr-btn--outline" onClick={onSettings} title="阅读与书架设置">
              <IconSettings size={15} /> 设置
            </button>
          </div>
        </header>

        {resumeBook ? (
          <button type="button" className="dshr-resume" onClick={() => onResume(resumeBook)}>
            <span className="dshr-resume__mark"><IconBookOpen size={19} /></span>
            <span className="dshr-resume__body">
              <span className="dshr-resume__eyebrow">继续上次阅读</span>
              <strong>{resumeBook.title || '上次打开的文档'}</strong>
              <span className="dshr-resume__meta">
                {formatLabel(resumeBook.format)}
                {resumeBook.progress?.page
                  ? ` · 第 ${resumeBook.progress.page}${resumeBook.progress.pages ? ` / ${resumeBook.progress.pages}` : ''} 页`
                  : ''}
                {` · ${Math.round(progressPercent(resumeBook))}%`}
              </span>
            </span>
            <span className="dshr-resume__arrow">→</span>
          </button>
        ) : null}

        <section
          className={`dshr-drop${over ? ' is-over' : ''}`}
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
            <div className="dshr-drop__formats">
              {['PDF', 'EPUB', 'MOBI', 'AZW3', 'TXT', 'Markdown', 'HTML'].map((format) => (
                <span key={format} className="dshr-chip">{format}</span>
              ))}
            </div>
          </div>
          <button type="button" className="dshr-btn dshr-btn--outline" onClick={pick} disabled={importing}>选择文件</button>
        </section>

        <div className="dshr-library__bar">
          <h2>我的书架</h2>
          <div className="dshr-library__search">
            <IconSearch size={14} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="搜索书名、作者"
              aria-label="搜索书架"
            />
          </div>
          <span>{filtered.length} / {books.length} 本 · 最近阅读优先</span>
        </div>

        <div className="dshr-library__tabs" role="tablist" aria-label="书架分类">
          <button
            type="button"
            role="tab"
            aria-selected={categoryFilter === 'all'}
            className={`dshr-library__tab${categoryFilter === 'all' ? ' is-active' : ''}`}
            onClick={() => onCategoryFilter('all')}
          >
            全部 <span>{counts.all}</span>
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={categoryFilter === category.id}
              className={`dshr-library__tab${categoryFilter === category.id ? ' is-active' : ''}`}
              onClick={() => onCategoryFilter(category.id)}
              title={category.hint}
            >
              {category.label} <span>{counts[category.id] || 0}</span>
            </button>
          ))}
          <span className="dshr-library__tabs-hint">点卡片右上角分类标签可手动切换</span>
        </div>

        {loading ? (
          <div className="dshr-loading" style={{ minHeight: 180 }}>
            <div className="dshr-loading__ring" />
            <span>正在打开书架…</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="dshr-empty-books">
            {books.length === 0
              ? '书架是空的。导入第一篇论文、第一本书，或把文件拖进上面的虚线框。首次阅读后，进度会自动记录在这里。'
              : search.trim()
                ? `没有匹配「${search.trim()}」的文档。`
                : `「${categoryLabel(categoryFilter)}」书单还是空的。导入文件，或点卡片上的分类标签把已有文档移进来。`}
          </div>
        ) : (
          <div className="dshr-books">
            {filtered.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onOpen={onOpen}
                onDelete={onDelete}
                onCycleCategory={(item) => onCycleCategory(item, NEXT_CATEGORY[item.category || 'document'])}
              />
            ))}
          </div>
        )}

        <footer className="dshr-library__foot">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><IconTranslate size={14} /> 实时对照翻译</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><IconSparkles size={14} /> 选中问 AI</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><IconSearch size={14} /> Google / 学术搜索</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><IconBook size={14} /> 本地书架 · 进度与批注自动保存</span>
        </footer>
      </div>

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
