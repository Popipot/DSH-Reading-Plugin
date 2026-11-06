import React from 'react';
import { ANNOTATION_STYLES, styleLabel } from './model.js';
import {
  CloseGlyph,
  EmptyAnnotationIcon,
  HighlightGlyph,
  NoteGlyph,
  UnderlineGlyph,
} from './glyphs.jsx';

/**
 * Right-hand notes panel: all annotations for the book, grouped by chapter or
 * PDF page. Rows show style/color, location, quote and note; jump and delete
 * action buttons are always available (not hover-only) for touch and keyboard.
 *
 * Props (contract):
 *   open, annotations, book, onClose,
 *   onOpenAnnotation(id)   — edit this annotation
 *   onJump(annotation)     — scroll/switch to the annotation location
 *   onDelete(annotation)   — remove this annotation
 */

const STYLE_ICONS = {
  highlight: HighlightGlyph,
  underline: UnderlineGlyph,
  note: NoteGlyph,
};

const FILTERS = [
  { id: 'all', label: '全部' },
  ...ANNOTATION_STYLES.map((style) => ({ id: style.id, label: style.label })),
];

function formatTime(value) {
  const stamp = Number(value);
  if (!Number.isFinite(stamp) || stamp <= 0) return '';
  try {
    return new Date(stamp).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' });
  } catch {
    return '';
  }
}

function buildChapterMap(book) {
  const map = new Map();
  const chapters = book && Array.isArray(book.chapters) ? book.chapters : [];
  for (let index = 0; index < chapters.length; index += 1) {
    const chapter = chapters[index];
    if (!chapter) continue;
    if (chapter.id != null) {
      map.set(String(chapter.id), { index, title: chapter.title || '' });
    }
  }
  return map;
}

function isPdfAnnotation(annotation) {
  if (!annotation) return false;
  if (annotation.kind === 'pdf') return true;
  if (annotation.kind === 'flow') return false;
  return Array.isArray(annotation.rects) && !Array.isArray(annotation.ranges);
}

function chapterFor(annotation, chapterMap) {
  if (!annotation) return null;
  if (annotation.chapterId != null) {
    const byId = chapterMap.get(String(annotation.chapterId));
    if (byId) return byId;
  }
  if (Number.isInteger(Number(annotation.chapterIndex)) && Number(annotation.chapterIndex) >= 0) {
    const index = Number(annotation.chapterIndex);
    const chapters = chapterMap.size > 0 ? [...chapterMap.values()] : [];
    const match = chapters.find((chapter) => chapter.index === index);
    return { index, title: match ? match.title : '' };
  }
  return null;
}

function makeGroups(annotations, chapterMap, filter) {
  const list = (Array.isArray(annotations) ? annotations : []).filter((annotation) => {
    if (!annotation) return false;
    if (filter !== 'all' && annotation.style !== filter) return false;
    return true;
  });
  const groups = new Map();
  for (let index = 0; index < list.length; index += 1) {
    const annotation = list[index];
    const pdf = isPdfAnnotation(annotation);
    let key;
    let order;
    let title;
    if (pdf) {
      const page = Number(annotation.page);
      const hasPage = Number.isInteger(page) && page > 0;
      key = `pdf:${hasPage ? page : 'unknown'}`;
      order = hasPage ? 10000 + page : 999999;
      title = hasPage ? `第 ${page} 页` : 'PDF 页面';
    } else {
      const chapter = chapterFor(annotation, chapterMap);
      const chapterIndex = chapter ? chapter.index : null;
      key = `flow:${chapterIndex == null ? 'unknown' : chapterIndex}`;
      order = chapterIndex == null ? 99999 : chapterIndex;
      title = chapterIndex == null
        ? '正文'
        : `第 ${chapterIndex + 1} 章${chapter && chapter.title ? ` · ${chapter.title}` : ''}`;
    }
    if (!groups.has(key)) {
      groups.set(key, { key, order, title, items: [] });
    }
    groups.get(key).items.push(annotation);
  }
  const result = [...groups.values()];
  result.sort((left, right) => left.order - right.order);
  for (let index = 0; index < result.length; index += 1) {
    const group = result[index];
    group.items.sort((left, right) => {
      const leftStart = Array.isArray(left.ranges) && left.ranges[0] ? left.ranges[0].start || 0 : 0;
      const rightStart = Array.isArray(right.ranges) && right.ranges[0] ? right.ranges[0].start || 0 : 0;
      if (leftStart !== rightStart) return leftStart - rightStart;
      return (Number(left.createdAt) || 0) - (Number(right.createdAt) || 0);
    });
  }
  return result;
}

function EmptyState({ hasAny, filter }) {
  if (hasAny) {
    return (
      <div className="dshr-anno-panel__empty">
        <p className="dshr-anno-panel__empty-title">没有匹配的标注</p>
        <p className="dshr-anno-panel__empty-text">
          当前筛选是「{filter === 'all' ? '全部' : styleLabel(filter)}」，切换筛选看看其余标注。
        </p>
      </div>
    );
  }
  return (
    <div className="dshr-anno-panel__empty">
      <span className="dshr-anno-panel__empty-mark" aria-hidden="true">
        <EmptyAnnotationIcon size={44} />
      </span>
      <p className="dshr-anno-panel__empty-title">还没有任何标注</p>
      <p className="dshr-anno-panel__empty-text">
        在阅读时选中一段文字，就可以用荧光笔、下划线或便签把它留在这里。
      </p>
      <ol className="dshr-anno-panel__steps">
        <li className="dshr-anno-panel__step">
          <span className="dshr-anno-panel__step-index">1</span> 选中正文中的一段文字
        </li>
        <li className="dshr-anno-panel__step">
          <span className="dshr-anno-panel__step-index">2</span> 选择荧光笔、下划线或便签
        </li>
        <li className="dshr-anno-panel__step">
          <span className="dshr-anno-panel__step-index">3</span> 之后回到这里回看、跳转
        </li>
      </ol>
      <p className="dshr-anno-panel__hint">PDF 页面同样支持：选中文字后点击「标注」即可。</p>
    </div>
  );
}

export function AnnotationsPanel({
  open,
  annotations,
  book,
  onClose,
  onOpenAnnotation,
  onJump,
  onDelete,
}) {
  const [filter, setFilter] = React.useState('all');
  const chapterMap = React.useMemo(() => buildChapterMap(book), [book]);

  React.useEffect(() => {
    if (!open || typeof document === 'undefined') return undefined;
    const handleKey = (event) => {
      if (event.key !== 'Escape' || typeof onClose !== 'function') return;
      // A composer may be stacked above the panel; Escape belongs to it first.
      if (document.querySelector('.dshr-anno-composer')) return;
      event.preventDefault();
      onClose();
    };
    document.addEventListener('keydown', handleKey, true);
    return () => document.removeEventListener('keydown', handleKey, true);
  }, [onClose, open]);

  if (!open) return null;

  const all = (Array.isArray(annotations) ? annotations : []).filter(Boolean);
  const counts = { all: all.length };
  for (let index = 0; index < ANNOTATION_STYLES.length; index += 1) {
    const style = ANNOTATION_STYLES[index].id;
    counts[style] = all.filter((annotation) => annotation.style === style).length;
  }
  const groups = makeGroups(all, chapterMap, filter);
  const filteredCount = filter === 'all'
    ? all.length
    : all.filter((annotation) => annotation.style === filter).length;

  const invoke = (handler, argument) => {
    if (typeof handler === 'function') handler(argument);
  };

  return (
    <aside className="dshr-anno-panel" aria-label="标注笔记面板">
      <header className="dshr-anno-panel__head">
        <div className="dshr-anno-panel__titles">
          <h3 className="dshr-anno-panel__title">
            标注笔记
            <span className="dshr-anno-panel__count">{all.length}</span>
          </h3>
          <span className="dshr-anno-panel__sub">
            {all.length > 0
              ? `${filteredCount} 条标注 · ${groups.length} 个位置`
              : '选中文字即可添加标注'}
          </span>
        </div>
        <button
          type="button"
          className="dshr-anno-panel__close"
          aria-label="关闭标注面板"
          onClick={() => invoke(onClose)}
        >
          <CloseGlyph size={13} />
        </button>
      </header>

      {all.length > 0 ? (
        <div className="dshr-anno-panel__filters" role="tablist" aria-label="按样式筛选标注">
          {FILTERS.map((entry) => {
            const active = filter === entry.id;
            const count = counts[entry.id] || 0;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`dshr-anno-panel__filter${active ? ' is-active' : ''}`}
                onClick={() => setFilter(entry.id)}
              >
                {entry.label}
                {entry.id === 'all' ? ` ${count}` : count > 0 ? ` ${count}` : ''}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="dshr-anno-panel__list">
        {groups.length === 0 ? (
          <EmptyState hasAny={all.length > 0} filter={filter} />
        ) : (
          groups.map((group) => (
            <section key={group.key} className="dshr-anno-panel__group">
              <div className="dshr-anno-panel__group-head">
                <span className="dshr-anno-panel__group-title" title={group.title}>{group.title}</span>
                <span className="dshr-anno-panel__group-rule" />
                <span className="dshr-anno-panel__group-count">{group.items.length}</span>
              </div>
              {group.items.map((annotation) => {
                const style = annotation.style || 'highlight';
                const StyleIcon = STYLE_ICONS[style] || HighlightGlyph;
                const color = annotation.color || '#f5d76e';
                const quote = typeof annotation.quote === 'string' ? annotation.quote.trim() : '';
                const note = typeof annotation.note === 'string' ? annotation.note.trim() : '';
                const chapter = chapterFor(annotation, chapterMap);
                const location = isPdfAnnotation(annotation)
                  ? (Number(annotation.page) > 0 ? `第 ${annotation.page} 页` : 'PDF')
                  : (chapter ? `第 ${chapter.index + 1} 章` : '正文');
                const time = formatTime(annotation.updatedAt || annotation.createdAt);
                return (
                  <article
                    key={annotation.id || `${group.key}:${quote}`}
                    className="dshr-anno-item"
                    style={{ '--dshr-anno-color': color }}
                    data-anno-id={annotation.id || undefined}
                  >
                    <button
                      type="button"
                      className="dshr-anno-item__main"
                      onClick={() => invoke(onOpenAnnotation, annotation.id)}
                      title="编辑这条标注"
                    >
                      <div className="dshr-anno-item__meta">
                        <span className="dshr-anno-item__dot" aria-hidden="true" />
                        <span className="dshr-anno-item__style">
                          <StyleIcon size={12} /> {styleLabel(style)}
                        </span>
                        <span className="dshr-anno-item__sep" aria-hidden="true">·</span>
                        <span className="dshr-anno-item__location">{location}</span>
                        <span className="dshr-anno-item__spacer" />
                        {time ? <span>{time}</span> : null}
                      </div>
                      <p className="dshr-anno-item__quote">
                        {quote || note || '（未记录选中文字）'}
                      </p>
                      {note && note !== quote ? (
                        <p className="dshr-anno-item__note">{note}</p>
                      ) : null}
                    </button>
                    <div className="dshr-anno-item__actions">
                      <button
                        type="button"
                        className="dshr-anno-item__action dshr-anno-item__action--jump"
                        onClick={() => invoke(onJump, annotation)}
                        title="跳转到这条标注的位置"
                      >
                        定位
                      </button>
                      <span className="dshr-anno-item__spacer" />
                      <button
                        type="button"
                        className="dshr-anno-item__action dshr-anno-item__action--danger"
                        onClick={() => invoke(onDelete, annotation)}
                        title="删除这条标注"
                      >
                        删除
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>
          ))
        )}
      </div>
    </aside>
  );
}
