import React from 'react';
import { validFingerprint } from './identity.js';

import { citation, topicSections } from './research.js';
import { scopes, buildEvidenceMarkdown, downloadMarkdown } from './markdown.js';
import { TopicEditor } from './ResearchDialogs.jsx';

function EvidenceModal({ title, close, children }) {
  React.useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);
  return (
    <div className="dshr-modal-mask" onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="dshr-modal dshr-evidence-dialog" role="dialog" aria-modal="true" aria-label={title}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function EvidenceComposer({ evidence }) {
  const { draft, busy, problem } = evidence;
  const [note, setNote] = React.useState(draft.note);
  const [selected, setSelected] = React.useState(draft.translation ? '0' : '');
  const [printLabel, setPrintLabel] = React.useState('');
  const editedLabel = React.useRef(false);
  React.useEffect(() => {
    let alive = true;
    void draft.printLabelRequest?.then(label => { if (alive && !editedLabel.current) setPrintLabel(label.slice(0, 80)); });
    return () => { alive = false; };
  }, [draft.printLabelRequest]);
  const translation = selected === '' ? null : draft.options[Number(selected)];
  return (
    <EvidenceModal title={draft.old ? '确认重新关联证据' : '保存证据'} close={evidence.closeDraft}>
      <p>{draft.source.title} · PDF 第 {draft.source.anchor.page} 页</p>
      {draft.old ? <p>本次会用新选区更新证据原文和出处。</p> : null}
      <blockquote>{draft.source.quote}</blockquote>
      <label>印刷页标（可选）<input value={printLabel} maxLength={80} placeholder="未提供"
        onChange={event => { editedLabel.current = true; setPrintLabel(event.target.value); }} /></label>
      <label>备注（可选）<textarea value={note} maxLength={20000} onChange={event => setNote(event.target.value)} /></label>
      {draft.options.length ? (
        <label>译文快照<select value={selected} onChange={event => setSelected(event.target.value)}>
          <option value="">暂不附译文</option>
          {draft.options.map((option, index) => <option key={option.scope} value={index}>{scopes[option.scope]}</option>)}
        </select></label>
      ) : <p>可先保存原文，之后补充译文。</p>}
      {translation ? <blockquote>{translation.text}</blockquote> : null}
      {problem ? <p role="alert">{problem}</p> : null}
      <div className="dshr-modal__actions">
        <button type="button" className="dshr-btn" disabled={busy} onClick={evidence.closeDraft}>取消</button>
        <button type="button" className="dshr-btn dshr-btn--primary" disabled={busy}
          onClick={() => evidence.saveDraft({ note, translation, printLabel })}>{draft.old ? '确认更新出处' : '保存证据'}</button>
      </div>
    </EvidenceModal>
  );
}

function EvidenceCard({ record, evidence, book, collections, selected, onSelect, exportOne }) {
  const missing = !book;
  const source = citation(record, book);
  const [edit, setEdit] = React.useState(null);
  const [deleting, setDeleting] = React.useState(false);
  const input = React.useRef(null);
  const verified = validFingerprint(record.identity);
  const state = missing ? '原文缺失' : verified ? '取证版本已记录' : record.identityError ? '核验失败' : '文件身份待确认';
  function change(next) { setEdit(previous => ({ ...previous, ...next })); }
  return (
    <article className="dshr-evidence-card" data-evidence-id={record.id} data-evidence-state={state}>
      <strong>{source.title} · {source.page ? `PDF 物理页 ${source.page}` : 'PDF 页码待确认'}</strong>
      <p>印刷页标 {source.printLabel || '未提供'} · 作者 {source.author || '未提供'} · 年份 {source.year || '未提供'} · DOI {source.doi || '未提供'}</p>
      <label className="dshr-evidence-checkbox"><input type="checkbox" checked={selected}
        onChange={event => onSelect(record, event.target.checked)} />选入导出</label>
      <p>{state} · {new Date(record.createdAt).toLocaleString()}</p>
      <blockquote>{record.quote}</blockquote>
      {record.translation ? <><strong>{scopes[record.translation.scope]}</strong><blockquote>{record.translation.text}</blockquote></> : <p>暂无译文快照</p>}
      {record.note ? <p className="dshr-evidence-note">{record.note}</p> : null}
      {record.identityError && !verified && !missing ? <p>{record.identityError}</p> : null}
      <div className="dshr-evidence-actions">
        <button type="button" className="dshr-btn dshr-btn--outline" disabled={evidence.busy || missing || !verified}
          onClick={() => evidence.jump(record)}>回到原文</button>
        {!verified && !missing ? <button type="button" className="dshr-btn" disabled={evidence.busy}
          onClick={() => evidence.retry(record)}>重试核验</button> : null}
        <button type="button" className="dshr-btn" disabled={evidence.busy} onClick={() => input.current.click()}>重新关联 PDF</button>
        <input ref={input} hidden type="file" accept=".pdf,application/pdf" onChange={event => {
          const file = event.currentTarget.files[0];
          event.currentTarget.value = '';
          if (file) evidence.pickFile(record, file);
        }} />
        {evidence.mismatch?.record.id === record.id ? <button type="button" className="dshr-btn dshr-btn--outline"
          disabled={evidence.busy} onClick={evidence.reselect}>打开该版本重新选区</button> : null}
        <button type="button" className="dshr-btn" onClick={() => exportOne(record)}>导出证据</button>
        <button type="button" className="dshr-btn" disabled={evidence.busy} onClick={() => setEdit({
          note: record.note || '', text: record.translation?.text || '', scope: record.translation?.scope || 'selection',
          topicIds: record.topicIds || [], printLabel: record.printLabel || '',
        })}>编辑证据</button>
        <button type="button" className="dshr-btn dshr-btn--danger" disabled={evidence.busy} onClick={() => setDeleting(true)}>删除证据</button>
      </div>
      {deleting ? (
        <div className="dshr-evidence-actions">
          <p>这会删除证据并移除相关书单中的引用。</p>
          <button type="button" className="dshr-btn" onClick={() => setDeleting(false)}>取消删除</button>
          <button type="button" className="dshr-btn dshr-btn--danger" disabled={evidence.busy}
            onClick={() => { setDeleting(false); evidence.remove(record); }}>确认删除证据</button>
        </div>
      ) : null}
      {edit ? <form onSubmit={event => {
        event.preventDefault();
        const translation = edit.text.trim() ? {
          scope: edit.scope, text: edit.text.trim(),
          source: edit.scope === 'selection' ? record.quote
            : record.translation?.scope === 'paragraph' ? record.translation.source : '',
        } : null;
        evidence.edit(record, { note: edit.note, translation, topicIds: edit.topicIds, printLabel: edit.printLabel.trim() });
        setEdit(null);
      }}>
        <label>编辑印刷页标<input value={edit.printLabel} maxLength={80} placeholder="未提供"
          onChange={event => change({ printLabel: event.target.value })} /></label>
        <label>编辑备注<textarea value={edit.note} maxLength={20000} onChange={event => change({ note: event.target.value })} /></label>
        <label>已核对的译文<textarea value={edit.text} maxLength={40000} onChange={event => change({ text: event.target.value })} /></label>
        <label>译文覆盖范围<select value={edit.scope} onChange={event => change({ scope: event.target.value })}>
          <option value="selection">{scopes.selection}</option>
          {record.translation?.scope === 'paragraph' ? <option value="paragraph">{scopes.paragraph}</option> : null}
        </select></label>
        {collections.length ? <fieldset>
          <legend>书单中的证据引用</legend>
          {collections.map(collection => <label key={collection.id} className="dshr-evidence-checkbox">
            <input type="checkbox" checked={edit.topicIds.includes(collection.id)} onChange={event => change({
              topicIds: event.target.checked ? [...edit.topicIds, collection.id] : edit.topicIds.filter(id => id !== collection.id),
            })} />{collection.name}
          </label>)}
        </fieldset> : null}
        <div className="dshr-modal__actions">
          <button type="button" className="dshr-btn" onClick={() => setEdit(null)}>取消编辑</button>
          <button type="submit" className="dshr-btn dshr-btn--primary" disabled={evidence.busy}>确认保存修改</button>
        </div>
      </form> : null}
    </article>
  );
}

export function EvidenceLibrary({ evidence, books, collections, saveResearch }) {
  const [topic, setTopic] = React.useState(evidence.panel.topicId || '');
  const [all, setAll] = React.useState(false);
  const [paper, setPaper] = React.useState('');
  const [editor, setEditor] = React.useState(false);
  const [selected, setSelected] = React.useState(() => new Set());
  const [preview, setPreview] = React.useState(null);
  const [message, setMessage] = React.useState('');
  const [page, setPage] = React.useState(0);
  const bookId = evidence.panel.bookId;
  const bookById = React.useMemo(() => new Map(books.map(book => [book.id, book])), [books]);
  const activeTopic = collections.find(collection => collection.id === topic);
  const topicRows = React.useMemo(() => evidence.rows.filter(row => !topic || row.topicIds?.includes(topic)), [evidence.rows, topic]);
  const papers = React.useMemo(() => {
    const items = new Map();
    for (const row of topicRows) items.set(row.bookId, citation(row, bookById.get(row.bookId)).title);
    return [...items].sort((a, b) => a[1].localeCompare(b[1]));
  }, [topicRows, bookById]);
  const scope = paper || (!activeTopic && !all ? bookId : '');
  const rows = scope ? topicRows.filter(row => row.bookId === scope) : topicRows;
  const sections = topicSections(rows, activeTopic?.research?.groups);
  const selectedRows = topicRows.filter(row => selected.has(row.id));
  const size = 40;
  const lastPage = Math.max(0, Math.ceil(rows.length / size) - 1);
  const visible = Math.min(page, lastPage);
  let offset = 0;

  function changeTopic(id) {
    setTopic(id);
    setPaper('');
    setPage(0);
    setSelected(new Set());
    setMessage('');
  }
  function select(record, checked) {
    setSelected(previous => {
      const next = new Set(previous);
      if (checked) next.add(record.id);
      else next.delete(record.id);
      return next;
    });
  }
  function prepare(records, scopeName) {
    setMessage('');
    setPreview({
      sections: topicSections(records, activeTopic?.research?.groups),
      topic: activeTopic,
      count: records.length,
      scopeName,
    });
  }
  function exportConfirmed() {
    try {
      downloadMarkdown(buildEvidenceMarkdown({ ...preview, books: bookById }),
        preview.topic ? '专题对照笔记.md' : '阅读证据.md');
      setPreview(null);
      setMessage('已将 Markdown 交给浏览器保存。');
    } catch (error) { setMessage(error?.message || '无法保存 Markdown，请重试。'); }
  }
  function exportOne(record) {
    try {
      downloadMarkdown(buildEvidenceMarkdown({ sections: topicSections([record]), books: bookById }), '证据-' + record.id + '.md');
      setMessage('已将 Markdown 交给浏览器保存。');
    } catch (error) { setMessage(error?.message || '无法保存 Markdown，请重试。'); }
  }
  return <EvidenceModal title="证据库" close={evidence.closePanel}>
    {editor && activeTopic ? <TopicEditor topic={activeTopic} rows={topicRows} books={bookById}
      save={saveResearch} close={() => setEditor(false)} /> : preview ? <section aria-label="Markdown 导出范围">
      <h4>确认导出范围</h4>
      <p>{preview.scopeName} · {preview.count} 条证据</p>
      {preview.sections.filter(section => section.rows.length).map(section => <div key={section.id}>
        {preview.topic ? <strong>{section.name}</strong> : null}
        <ol>{section.rows.map(record => {
          const source = citation(record, bookById.get(record.bookId));
          return <li key={record.id}>{source.title} · PDF 物理页 {source.page || '待确认'}</li>;
        })}</ol>
      </div>)}
      {message ? <p role="alert">{message}</p> : null}
      <div className="dshr-evidence-actions">
        <button type="button" className="dshr-btn" onClick={() => setPreview(null)}>取消导出</button>
        <button type="button" className="dshr-btn dshr-btn--primary" onClick={exportConfirmed}>确认导出 Markdown</button>
      </div>
    </section> : <>
      <div className="dshr-evidence-actions">
        {bookId && !activeTopic ? <button type="button" className="dshr-btn" aria-pressed={all}
          onClick={() => { setAll(value => !value); setPage(0); }}>
          {all ? '查看当前论文' : '查看全部证据'}
        </button> : null}
        {collections.length ? <label>按书单查看<select value={activeTopic?.id || ''} onChange={event => changeTopic(event.target.value)}>
          <option value="">所有书单</option>
          {collections.map(collection => <option key={collection.id} value={collection.id}>{collection.name}</option>)}
        </select></label> : null}
        {activeTopic ? <label>按论文筛选<select value={paper} onChange={event => { setPaper(event.target.value); setPage(0); }}>
          <option value="">全部论文</option>
          {papers.map(([id, title]) => <option key={id} value={id}>{title}</option>)}
        </select></label> : null}
        <span role="status">{rows.length} 条证据</span>
      </div>
      {activeTopic ? <section className="dshr-topic-summary">
        <h4>{activeTopic.name}</h4>
        <p><strong>研究问题</strong> {activeTopic.research?.question || '未填写'}</p>
        <p><strong>人工综合</strong> {activeTopic.research?.synthesis || '未填写'}</p>
        <div className="dshr-evidence-actions">
          <button type="button" className="dshr-btn" disabled={evidence.busy} onClick={() => setEditor(true)}>编辑专题</button>
          <button type="button" className="dshr-btn dshr-btn--outline" disabled={evidence.busy || !topicRows.length}
            onClick={() => prepare(topicRows, '整专题')}>导出整专题</button>
        </div>
      </section> : null}
      <div className="dshr-evidence-actions">
        <button type="button" className="dshr-btn dshr-btn--outline" disabled={evidence.busy || !selectedRows.length}
          onClick={() => prepare(selectedRows, '所选证据')}>导出所选证据</button>
        {selectedRows.length ? <>
          <span>已选 {selectedRows.length} 条</span>
          <button type="button" className="dshr-btn" onClick={() => setSelected(new Set())}>清空选择</button>
        </> : null}
      </div>
      {message ? <p role="status">{message}</p> : null}
      {evidence.problem ? <p role="alert">{evidence.problem}</p> : null}
      {rows.length ? sections.map(section => {
        const start = visible * size;
        const records = section.rows.slice(Math.max(0, start - offset), Math.max(0, start + size - offset));
        offset += section.rows.length;
        return records.length ? <section key={section.id} data-evidence-group={section.name}>
          {activeTopic ? <h4>{section.name}</h4> : null}
            {section.comparison ? <p className="dshr-evidence-note">{section.comparison}</p> : null}
          {records.map(record => <EvidenceCard key={record.id} record={record} evidence={evidence}
            collections={collections} book={bookById.get(record.bookId)} exportOne={exportOne}
            selected={selected.has(record.id)} onSelect={select} />)}
        </section> : null;
      }) : <p>当前范围没有证据。可从 PDF 保存证据，再将它加入书单。</p>}
      {lastPage ? <div className="dshr-evidence-actions" aria-label="证据列表分页">
        <button type="button" className="dshr-btn" disabled={visible === 0} onClick={() => setPage(visible - 1)}>上一批</button>
        <span>{visible + 1} / {lastPage + 1}</span>
        <button type="button" className="dshr-btn" disabled={visible === lastPage} onClick={() => setPage(visible + 1)}>下一批</button>
      </div> : null}
    </>}
    <div className="dshr-modal__actions"><button type="button" className="dshr-btn" disabled={evidence.busy}
      onClick={evidence.closePanel}>关闭证据库</button></div>
  </EvidenceModal>;
}
