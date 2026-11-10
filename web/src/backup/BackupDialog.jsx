import React from 'react';
import { IconX } from '../components/icons.jsx';
import { createLibraryBackup, inspectLibraryBackup } from './library.js';

function downloadBackup(blob) {
  const url = URL.createObjectURL(blob);
  try {
    const link = document.createElement('a');
    link.href = url;
    link.download = `DSH-Reader-Backup-${new Date().toISOString().slice(0, 10)}.zip`;
    link.click();
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

export default function BackupDialog({ allowRestore, onClose, beforeBackup, onRestored }) {
  const fileInput = React.useRef(null);
  const operation = React.useRef(null);
  const [includeOriginals, setIncludeOriginals] = React.useState(true);
  const [busy, setBusy] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');
  const [preview, setPreview] = React.useState(null);
  const [policy, setPolicy] = React.useState('keep');

  async function run(label, action) {
    if (operation.current) return;
    const controller = new AbortController();
    operation.current = controller;
    setBusy(label);
    setMessage('');
    setError('');
    try { await action(controller.signal); }
    catch (failure) {
      if (controller.signal.aborted) setMessage('操作已取消。');
      else setError(failure?.message || '操作失败，请重试。');
    } finally {
      operation.current = null;
      setBusy('');
    }
  }

  function dismiss() {
    if (operation.current) operation.current.abort();
    else onClose();
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      dismiss();
    }
    if (event.key === 'Tab') {
      const controls = [...event.currentTarget.querySelectorAll('button:not(:disabled), input:not([hidden]):not(:disabled), select:not(:disabled)')];
      const edge = event.shiftKey ? controls[0] : controls.at(-1);
      if (event.target === edge) {
        event.preventDefault();
        (event.shiftKey ? controls.at(-1) : controls[0])?.focus();
      }
    }
  }

  function exportBackup() {
    void run('正在生成备份…', async signal => {
      await beforeBackup();
      const blob = await createLibraryBackup({ includeOriginals, signal });
      signal.throwIfAborted();
      downloadBackup(blob);
      setMessage('ZIP 已生成，保存位置可在下载记录中查看。');
    });
  }

  function pickBackup(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setPreview(null);
    setPolicy('keep');
    void run('正在校验 ZIP…', async signal => {
      setPreview(await inspectLibraryBackup(file, signal));
    });
  }

  function restore() {
    if (!preview || !allowRestore) return;
    void run('正在恢复…', async signal => {
      const result = await preview.restore(policy, signal);
      setPreview(null);
      setMessage(`恢复已完成。写入 ${result.written} 条，保留本机 ${result.kept} 条。`);
      onRestored();
    });
  }

  return (
    <div className="dshr-modal-mask" onKeyDown={handleKeyDown}>
      <div className="dshr-modal dshr-backup" role="dialog" aria-modal="true" aria-label="备份与恢复">
        <div className="dshr-backup__heading">
          <h3>备份与恢复</h3>
          <button autoFocus type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost"
            aria-label={busy ? '取消操作' : '关闭备份与恢复'} onClick={dismiss}><IconX size={16} /></button>
        </div>
        <p>ZIP 保存在本机，包含文档信息、书单、进度、批注、证据、专题及译文。不包含 DSH 账户和阅读器外观设置。</p>
        <div className="dshr-settings-row">
          <label><input type="checkbox" checked={includeOriginals} disabled={Boolean(busy)}
            onChange={event => setIncludeOriginals(event.target.checked)} /> 包含原文文件（含 PDF）</label>
          <button type="button" className="dshr-btn dshr-btn--outline" disabled={Boolean(busy)} onClick={exportBackup}>导出 ZIP</button>
        </div>
        <div className="dshr-settings-row">
          <span>{allowRestore ? '选取 ZIP 后先校验文件并预览范围。' : '返回书架后可恢复备份。'}</span>
          <button type="button" className="dshr-btn dshr-btn--outline" disabled={Boolean(busy) || !allowRestore}
            onClick={() => fileInput.current?.click()}>选择备份 ZIP</button>
          <input ref={fileInput} type="file" accept=".zip,application/zip" aria-label="选择备份文件" hidden onChange={pickBackup} />
        </div>
        {preview ? (
          <section className="dshr-backup__preview" aria-label="恢复范围预览">
            <strong>校验通过，等待确认</strong>
            <p>文档 {preview.summary.documents} 份（含原文 {preview.summary.originals} 份） · 书单 {preview.summary.collections} 个
              {' · '}批注 {preview.summary.annotations} 条 · 证据 {preview.summary.evidence} 条 · 译文数据 {preview.summary.translations} 条</p>
            {preview.summary.titles.length ? <p>{preview.summary.titles.join('、')}{preview.summary.documents > preview.summary.titles.length ? '…' : ''}</p> : null}
            {preview.summary.originals < preview.summary.documents ? <p>缺少原文的文档可在书架重新关联，文件内容须与备份指纹一致。</p> : null}
            {preview.conflictCount ? (
              <label>同 ID 冲突 {preview.conflictCount} 条
                <select aria-label="同 ID 冲突处理" value={policy} disabled={Boolean(busy)} onChange={event => setPolicy(event.target.value)}>
                  <option value="keep">保留本机记录</option>
                  <option value="replace">使用备份记录</option>
                </select>
                {policy === 'replace' ? <p>备份缺少原文时，会保留本机已有原文的整条文档记录。</p> : null}
              </label>
            ) : null}
            <div className="dshr-modal__actions">
              <button type="button" className="dshr-btn" disabled={Boolean(busy)} onClick={() => setPreview(null)}>取消预览</button>
              <button type="button" className="dshr-btn dshr-btn--primary" disabled={Boolean(busy) || !allowRestore}
                onClick={restore}>确认恢复</button>
            </div>
          </section>
        ) : null}
        {busy || message ? <p role="status">{busy || message}</p> : null}
        {error ? <p role="alert">{error}</p> : null}
        {busy ? <button type="button" className="dshr-btn" onClick={() => operation.current?.abort()}>取消当前操作</button> : null}
      </div>
    </div>
  );
}
