import React from 'react';
import { IconChevronDown, IconChevronRight, IconFolder, IconPlus, IconSearch, IconTrash } from './icons.jsx';
import { formatLabel } from '../storage.js';

export const bookTitle = book => book.title || '未命名文档';

export function matchesBook(book, query) {
  return `${book.title || ''} ${book.author || ''}`.toLowerCase().includes(query);
}

function PreviewCover({ book }) {
  const [failed, setFailed] = React.useState(false);
  return book.cover && !failed
    ? <img src={book.cover} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} />
    : <span className="dshr-collection__spine">{formatLabel(book.format)}</span>;
}

export function CollectionCard({ folder, expanded, onToggle, onOpen, onRead }) {
  const previewId = React.useId();
  const summaryId = React.useId();
  return (
    <article className="dshr-collection" data-collection-id={folder.id}>
      <button type="button" className="dshr-collection__open" aria-label={`打开书单 ${folder.name}`} aria-describedby={summaryId} onClick={onOpen}>
        <span className="dshr-collection__top">
          <span className="dshr-collection__icon"><IconFolder size={17} /></span>
          <span className="dshr-collection__heading">
            <strong title={folder.name}>{folder.name}</strong>
            <small id={summaryId}>{folder.system ? '默认分类' : '自建书单'} · {folder.books.length} 本</small>
          </span>
          <IconChevronRight size={16} />
        </span>
        {folder.books.length ? (
          <span className="dshr-collection__covers">
            {folder.books.slice(0, 4).map(book => (
              <span className="dshr-collection__sample" key={book.id}>
                <span className="dshr-collection__cover"><PreviewCover key={book.cover} book={book} /></span>
                <span className="dshr-collection__title" title={bookTitle(book)}>{bookTitle(book)}</span>
              </span>
            ))}
          </span>
        ) : <span className="dshr-collection__empty">暂未收录书籍</span>}
      </button>
      {folder.books.length > 0 && (
        <button type="button" className="dshr-collection__peek" onClick={onToggle} aria-expanded={expanded} aria-controls={previewId}>
          {expanded ? '收起书名' : `预览全部 ${folder.books.length} 本`} <IconChevronDown size={13} />
        </button>
      )}
      {folder.books.length > 0 && (
        <ul className="dshr-collection__preview" id={previewId} hidden={!expanded} aria-label={`${folder.name}书名清单`}>
          {expanded && folder.books.map(book => (
            <li key={book.id}>
              <button type="button" onClick={() => onRead(book)}>
                <span>{bookTitle(book)}</span><small>{formatLabel(book.format)}</small>
              </button>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function CollectionDialog({ action, books, collections, onClose, onCreate, onSave, onDelete }) {
  const dialogRef = React.useRef(null);
  const submitting = React.useRef(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState('');
  const [name, setName] = React.useState(action.collection?.name ?? '');
  const [query, setQuery] = React.useState('');
  const original = action.collection?.bookIds ?? [];
  const [selected, setSelected] = React.useState(() => new Set(action.bookIds ?? original));
  const [destination, setDestination] = React.useState('');
  const titleId = React.useId();
  const adding = action.kind === 'add';
  const deleting = action.kind === 'delete';
  const title = adding ? '加入书单' : deleting ? '删除书单' : action.collection ? '编辑书单' : '新建书单';
  const needle = query.trim().toLowerCase();
  const visible = !adding && !deleting ? books.filter(book => matchesBook(book, needle)) : [];

  React.useLayoutEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  async function submit(event) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setBusy(true);
    setError('');
    try {
      if (deleting) await onDelete(action.collection.id);
      else if (adding) await onSave({ id: destination, add: action.bookIds });
      else await onSave({
        id: action.collection?.id,
        name,
        add: [...selected].filter(id => !original.includes(id)),
        remove: original.filter(id => !selected.has(id)),
      });
      onClose();
    } catch (err) {
      setError(err?.message || '书单保存失败，请重试。');
    } finally {
      submitting.current = false;
      setBusy(false);
    }
  }

  return (
    <dialog ref={dialogRef} className="dshr-modal dshr-collection-dialog" aria-labelledby={titleId} onCancel={event => {
      event.preventDefault();
      if (!submitting.current) onClose();
    }}>
      <form onSubmit={submit}>
        <h3 id={titleId}>{title}</h3>
        {deleting ? (
          <p>删除「{action.collection.name}」后，里面的书仍可在全部文档中打开，进度与批注会保留。</p>
        ) : adding ? (
          <label className="dshr-collection-dialog__field">
            <span>将 {action.bookIds.length} 本书加入</span>
            <select value={destination} onChange={event => setDestination(event.target.value)} disabled={busy} required>
              <option value="">选择自建书单</option>
              {collections.map(collection => (
                <option key={collection.id} value={collection.id}>{collection.name} · {collection.bookIds.length} 本</option>
              ))}
            </select>
          </label>
        ) : (
          <>
            <label className="dshr-collection-dialog__field">
              <span>书单名称</span>
              <input value={name} onChange={event => setName(event.target.value)} placeholder="例如：论文待读" maxLength={60} disabled={busy} required />
            </label>
            <div className="dshr-collection-dialog__listbar">
              <strong>收录书籍</strong><span>{selected.size} 本已选</span>
            </div>
            {books.length > 0 && (
              <label className="dshr-library__search dshr-collection-dialog__search">
                <IconSearch size={14} />
                <input type="search" placeholder="搜索书名、作者" aria-label="搜索可加入的书籍" value={query} onChange={event => setQuery(event.target.value)} />
              </label>
            )}
            {visible.length ? (
              <div className="dshr-collection-dialog__choices">
                {visible.map(book => (
                  <label key={book.id}>
                    <input type="checkbox" checked={selected.has(book.id)} disabled={busy} onChange={event => {
                      const checked = event.target.checked;
                      setSelected(previous => {
                        const next = new Set(previous);
                        if (checked) next.add(book.id);
                        else next.delete(book.id);
                        return next;
                      });
                    }} />
                    <span>{bookTitle(book)}<small>{[formatLabel(book.format), book.author].filter(Boolean).join(' · ')}</small></span>
                  </label>
                ))}
              </div>
            ) : <p>{books.length ? '没有匹配的书籍。' : '可以先创建空书单，导入书籍后再加入。'}</p>}
          </>
        )}
        {error && <p className="dshr-collection-dialog__error" role="alert">{error}</p>}
        <div className="dshr-modal__actions dshr-collection-dialog__actions">
          {adding && <button type="button" className="dshr-btn dshr-btn--outline" disabled={busy} onClick={() => onCreate(action.bookIds)}><IconPlus size={15} /> 新建书单</button>}
          <button type="button" className="dshr-btn" disabled={busy} onClick={onClose}>取消</button>
          <button type="submit" className={`dshr-btn ${deleting ? 'dshr-btn--danger' : 'dshr-btn--primary'}`} disabled={busy || (adding ? !destination : !deleting && !name.trim())}>
            {deleting && <IconTrash size={14} />}{busy ? '正在保存…' : deleting ? '删除书单' : adding ? '加入' : '保存书单'}
          </button>
        </div>
      </form>
    </dialog>
  );
}
