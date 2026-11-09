import React from 'react';
import { validFingerprint } from './identity.js';

const scopes = { selection: '选区译文', paragraph: '所属段落译文' };

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
  const translation = selected === '' ? null : draft.options[Number(selected)];
  return (
    <EvidenceModal title={draft.old ? '确认重新关联证据' : '保存证据'} close={evidence.closeDraft}>
      <p>{draft.source.title} · PDF 第 {draft.source.anchor.page} 页</p>
      {draft.old ? <p>本次会用新选区更新证据原文和出处。</p> : null}
      <blockquote>{draft.source.quote}</blockquote>
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
          onClick={() => evidence.saveDraft({ note, translation })}>{draft.old ? '确认更新出处' : '保存证据'}</button>
      </div>
    </EvidenceModal>
  );
}

function exportEvidence(record) {
  const escape = value => String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const quote = value => escape(value).split(/\r?\n/u).map(line => '> ' + line).join('\n');
  const markdown = [
    '# ' + escape(record.title),
    record.anchor?.page ? `PDF 物理页码 ${record.anchor.page}` : 'PDF 页码待确认',
    '## 原文\n\n' + quote(record.quote),
    record.translation ? `## ${scopes[record.translation.scope]}\n\n${quote(record.translation.text)}` : '',
    record.note ? '## 备注\n\n' + quote(record.note) : '',
  ].filter(Boolean).join('\n\n') + '\n';
  const url = URL.createObjectURL(new Blob([markdown], { type: 'text/markdown;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `证据-${record.id}.md`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function EvidenceCard({ record, evidence, missing, collections }) {
  const [edit, setEdit] = React.useState(null);
  const [deleting, setDeleting] = React.useState(false);
  const input = React.useRef(null);
  const verified = validFingerprint(record.identity);
  const state = missing ? '原文缺失' : verified ? '取证版本已记录' : record.identityError ? '核验失败' : '文件身份待确认';
  function change(next) { setEdit(previous => ({ ...previous, ...next })); }
  return (
    <article className="dshr-evidence-card" data-evidence-id={record.id} data-evidence-state={state}>
      <strong>{record.title} · {record.anchor?.page ? `PDF 第 ${record.anchor.page} 页` : 'PDF 页码待确认'}</strong>
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
        <button type="button" className="dshr-btn" onClick={() => exportEvidence(record)}>导出证据</button>
        <button type="button" className="dshr-btn" disabled={evidence.busy} onClick={() => setEdit({
          note: record.note || '', text: record.translation?.text || '', scope: record.translation?.scope || 'selection',
          topicIds: record.topicIds || [],
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
        evidence.edit(record, { note: edit.note, translation, topicIds: edit.topicIds });
        setEdit(null);
      }}>
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

export function EvidenceLibrary({ evidence, books, collections }) {
  const [topic, setTopic] = React.useState('');
  const [all, setAll] = React.useState(false);
  const bookId = evidence.panel.bookId;
  const ids = new Set(books.map(book => book.id));
  const rows = evidence.rows.filter(row => (all || !bookId || row.bookId === bookId)
    && (!topic || row.topicIds?.includes(topic)));
  return (
    <EvidenceModal title="证据库" close={evidence.closePanel}>
      <div className="dshr-evidence-actions">
        {bookId ? <button type="button" className="dshr-btn" aria-pressed={all} onClick={() => setAll(value => !value)}>
          {all ? '查看当前论文' : '查看全部证据'}
        </button> : null}
        {collections.length ? <label>按书单查看<select value={topic} onChange={event => setTopic(event.target.value)}>
          <option value="">所有书单</option>
          {collections.map(collection => <option key={collection.id} value={collection.id}>{collection.name}</option>)}
        </select></label> : null}
        <span role="status">{rows.length} 条证据</span>
      </div>
      {evidence.problem ? <p role="alert">{evidence.problem}</p> : null}
      {rows.length ? rows.map(record => <EvidenceCard key={record.id} record={record} evidence={evidence}
        collections={collections} missing={!ids.has(record.bookId)} />) : <p>选中 PDF 原文后，点击「保存证据」即可加入。</p>}
      <div className="dshr-modal__actions"><button type="button" className="dshr-btn" disabled={evidence.busy}
        onClick={evidence.closePanel}>关闭证据库</button></div>
    </EvidenceModal>
  );
}
