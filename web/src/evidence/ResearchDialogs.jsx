import React from 'react';
import { citation, normalizeResearch } from './research.js';

export function CitationForm({ book, close, save }) {
  const [fields, setFields] = React.useState({
    title: book.title || '', author: book.author || '', year: book.year || '', doi: book.doi || '',
  });
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState('');
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError('');
    try { await save(book.id, fields); close(); }
    catch (failure) { setError(failure.message || '出处保存失败。'); }
    finally { setBusy(false); }
  }
  return <div className="dshr-modal-mask">
    <form className="dshr-modal dshr-evidence-dialog" role="dialog" aria-modal="true" aria-label="论文出处"
      onSubmit={submit} onKeyDown={event => { if (event.key === 'Escape' && !busy) close(); }}>
      <h3>论文出处</h3>
      <p>可核对题名，并补录已确认的作者、年份和 DOI。</p>
      {[
        ['title', '题名', 300, '必填'],
        ['author', '作者', 500, '未提供'],
        ['year', '年份', 4, '未提供'],
        ['doi', 'DOI', 400, '未提供'],
      ].map(([field, label, max, placeholder]) => <label key={field}>{label}
        <input type="text" autoFocus={field === 'title'} required={field === 'title'}
          inputMode={field === 'year' ? 'numeric' : undefined} maxLength={max} placeholder={placeholder}
          value={fields[field]} onChange={event => setFields(previous => ({ ...previous, [field]: event.target.value }))} />
      </label>)}
      {error ? <p role="alert">{error}</p> : null}
      <div className="dshr-modal__actions">
        <button type="button" className="dshr-btn" onClick={close} disabled={busy}>取消</button>
        <button type="submit" className="dshr-btn dshr-btn--primary" disabled={busy}>保存出处</button>
      </div>
    </form>
  </div>;
}

function move(items, from, step) {
  const next = [...items];
  const to = from + step;
  [next[from], next[to]] = [next[to], next[from]];
  return next;
}

export function TopicEditor({ topic, rows, books, save, close }) {
  const [draft, setDraft] = React.useState(() => normalizeResearch(topic.research, new Set(rows.map(row => row.id))));
  const [error, setError] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const assigned = new Map(draft.groups.flatMap(group => group.ids.map(id => [id, group.id])));
  const byId = new Map(rows.map(row => [row.id, row]));
  function groups(edit) {
    setDraft(previous => ({ ...previous, groups: edit(previous.groups) }));
  }
  function updateGroup(index, changes) {
    groups(previous => previous.map((group, i) => i === index ? { ...group, ...changes } : group));
  }
  function assign(id, groupId) {
    groups(previous => previous.map(group => ({
      ...group, ids: group.id === groupId ? [...group.ids, id] : group.ids.filter(item => item !== id),
    })));
  }
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setError('');
    setBusy(true);
    try { await save(topic, draft); close(); }
    catch (failure) { setError(failure.message || '专题保存失败。'); }
    finally { setBusy(false); }
  }
  return <form className="dshr-topic-form" onSubmit={submit}>
    <label>研究问题<textarea value={draft.question} maxLength={1000}
      onChange={event => setDraft({ ...draft, question: event.target.value })} /></label>
    <label>人工综合<textarea value={draft.synthesis} maxLength={20000}
      onChange={event => setDraft({ ...draft, synthesis: event.target.value })} /></label>
    {draft.groups.map((group, index) => <fieldset key={group.id}>
      <legend>分组 {index + 1}</legend>
      <label>分组名称<input value={group.name} maxLength={80} required
        onChange={event => updateGroup(index, { name: event.target.value })} /></label>
      <label>本组比较<textarea value={group.comparison || ''} maxLength={10000}
        onChange={event => updateGroup(index, { comparison: event.target.value })} /></label>
      <div className="dshr-evidence-actions">
        <button type="button" className="dshr-btn" disabled={index === 0}
          onClick={() => groups(list => move(list, index, -1))}>上移分组</button>
        <button type="button" className="dshr-btn" disabled={index === draft.groups.length - 1}
          onClick={() => groups(list => move(list, index, 1))}>下移分组</button>
        <button type="button" className="dshr-btn" onClick={() => groups(list => list.filter(item => item.id !== group.id))}>移除分组</button>
      </div>
      <ol>{group.ids.filter(id => byId.has(id)).map((id, position) => {
        const record = byId.get(id);
        return <li key={id}>{citation(record, books.get(record.bookId)).title} · {record.quote.slice(0, 48)}
          <button type="button" className="dshr-btn" disabled={position === 0}
            onClick={() => updateGroup(index, { ids: move(group.ids, position, -1) })}>上移证据</button>
          <button type="button" className="dshr-btn" disabled={position === group.ids.length - 1}
            onClick={() => updateGroup(index, { ids: move(group.ids, position, 1) })}>下移证据</button>
        </li>;
      })}</ol>
    </fieldset>)}
    <button type="button" className="dshr-btn" onClick={() => groups(list => [...list, { id: crypto.randomUUID(), name: '', ids: [] }])}>新建分组</button>
    {rows.length && draft.groups.length ? <fieldset><legend>证据归组</legend>
      {rows.map(record => <label key={record.id} data-topic-record={record.id}>
        {citation(record, books.get(record.bookId)).title} · {record.quote.slice(0, 65)}
        <select value={assigned.get(record.id) || ''} onChange={event => assign(record.id, event.target.value)}>
          <option value="">未分组</option>
          {draft.groups.map((group, index) => <option key={group.id} value={group.id}>{group.name || '分组 ' + (index + 1)}</option>)}
        </select>
      </label>)}
    </fieldset> : null}
    {error ? <p role="alert">{error}</p> : null}
    <div className="dshr-modal__actions">
      <button type="button" className="dshr-btn" onClick={close} disabled={busy}>取消编辑专题</button>
      <button type="submit" className="dshr-btn dshr-btn--primary" disabled={busy}>保存专题</button>
    </div>
  </form>;
}