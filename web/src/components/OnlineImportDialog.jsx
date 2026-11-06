import React from 'react';
import { IconDownload, IconLink, IconX } from './icons.jsx';

const SOURCES = [
  { label: 'Project Gutenberg', hint: '七万本公版书', href: 'https://www.gutenberg.org/' },
  { label: 'Standard Ebooks', hint: '精校公版书', href: 'https://standardebooks.org/' },
  { label: 'arXiv', hint: '开放获取论文', href: 'https://arxiv.org/' },
  { label: 'Open Library', hint: '开放图书目录', href: 'https://openlibrary.org/' },
  { label: 'Internet Archive', hint: '公版与开放馆藏', href: 'https://archive.org/' },
  { label: 'Wikisource', hint: '公版文献', href: 'https://zh.wikisource.org/' },
];

export function OnlineImportDialog({ open, busy, onClose, onSubmit }) {
  const [url, setUrl] = React.useState('');
  const [error, setError] = React.useState('');
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      setError('');
      window.setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape' && !busy) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, busy, onClose]);

  if (!open) return null;

  const submit = (event) => {
    event.preventDefault();
    const value = url.trim();
    if (!/^https:\/\//iu.test(value)) {
      setError('请输入以 https:// 开头的电子书文件直链。');
      return;
    }
    setError('');
    onSubmit(value);
  };

  return (
    <div
      className="dshr-modal-mask"
      onMouseDown={(event) => { if (event.target === event.currentTarget && !busy) onClose(); }}
    >
      <div className="dshr-modal dshr-online-modal" role="dialog" aria-modal="true" aria-label="从公开来源导入">
        <div className="dshr-online-modal__head">
          <div>
            <h3><IconDownload size={17} /> 从公开来源导入</h3>
            <p>粘贴电子书文件的直链，下载后自动加入书架并打开。</p>
          </div>
          <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost" onClick={onClose} disabled={busy} aria-label="关闭在线导入">
            <IconX size={16} />
          </button>
        </div>

        <div className="dshr-online-modal__notice">
          <strong>版权提示</strong>
          <span>仅支持你确认有权下载的公开版权 / 开放获取资源。本功能不内置 Z-Library 等版权不明的书源，也不会抓取登录后的私密页面。</span>
        </div>

        <form className="dshr-online-modal__form" onSubmit={submit}>
          <label htmlFor="dshr-online-url">文件直链</label>
          <div className="dshr-online-modal__input">
            <IconLink size={15} />
            <input
              ref={inputRef}
              id="dshr-online-url"
              type="url"
              value={url}
              onChange={(event) => { setUrl(event.target.value); setError(''); }}
              placeholder="https://www.gutenberg.org/ebooks/11.epub3.images"
              spellCheck="false"
              autoComplete="off"
              disabled={busy}
            />
          </div>
          {error ? <p className="dshr-online-modal__error">{error}</p> : null}
          <p className="dshr-online-modal__hint">
            支持 PDF / EPUB / MOBI / AZW3 / TXT / Markdown / HTML 直链；单个文件最大 120 MB。
            古登堡、Standard Ebooks、arXiv、Open Library、Internet Archive 等站点可正常使用。
          </p>
          <div className="dshr-online-modal__actions">
            <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--ghost" onClick={onClose} disabled={busy}>取消</button>
            <button type="submit" className="dshr-btn dshr-btn--sm dshr-btn--primary" disabled={busy || url.trim() === ''}>
              {busy ? '正在下载…' : '下载并打开'}
            </button>
          </div>
        </form>

        <div className="dshr-online-modal__sources">
          <span>去哪里找书？</span>
          <div className="dshr-online-modal__source-list">
            {SOURCES.map((source) => (
              <a key={source.label} href={source.href} target="_blank" rel="noreferrer" title={source.hint}>
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
