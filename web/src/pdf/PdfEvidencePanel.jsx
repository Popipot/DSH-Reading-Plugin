import React from 'react';
import { IconPlus } from '../components/icons.jsx';

export function PdfEvidencePanel({ evidence, bookId, page, onSave }) {
  const records = evidence.rows.filter(record => record.bookId === bookId);
  const sorted = records.filter(record => record.anchor.page === page)
    .concat(records.filter(record => record.anchor.page !== page));

  return (
    <section className="dshr-pdf-evidence" aria-label="当前论文的证据">
      <div className="dshr-pdf-evidence__heading">
        <strong>当前论文</strong>
        <button type="button" className="dshr-btn dshr-btn--ghost" disabled={!onSave}
          onMouseDown={event => event.preventDefault()} onClick={onSave}
          title={onSave ? undefined : '先选中 PDF 原文'}><IconPlus size={15} /> 保存证据</button>
      </div>
      {evidence.problem && !evidence.panel && !evidence.draft && <p role="status">{evidence.problem}</p>}
      {sorted.length === 0 ? <p className="dshr-pdf-evidence__empty">选中原文后，即可保存到这篇论文的证据。</p> : (
        <div className="dshr-pdf-evidence__list">
          {sorted.map(record => (
            <article key={record.id} className={record.anchor.page === page ? 'is-current-page' : undefined}>
              <strong>第 {record.anchor.page} 页</strong>
              <blockquote>{record.quote}</blockquote>
              {record.note && <p>{record.note}</p>}
              <button type="button" className="dshr-btn dshr-btn--ghost" disabled={evidence.busy}
                onClick={() => evidence.jump(record)}>回到原文</button>
            </article>
          ))}
        </div>
      )}
      <button type="button" className="dshr-btn dshr-btn--ghost dshr-pdf-evidence__manage"
        onClick={() => evidence.show(bookId)}>管理证据</button>
    </section>
  );
}
