import React from 'react';
import { createEvidence, getBook, listEvidence, removeEvidence, reviseEvidence, saveBook } from '../storage.js';
import { fingerprintPdf, sameFingerprint, validFingerprint } from './identity.js';

const uuid = () => crypto.randomUUID();
const sourceOf = ({ record, anchor, quote }) => ({
  bookId: record.id, title: record.title, author: record.author,
  fileRevision: record.fileRevision ?? null, anchor, quote, sourceRevision: uuid(),
});

export function useEvidence({ currentRef, navigation, openBook, refreshBooks, showToast }) {
  const [rows, setRows] = React.useState([]);
  const [panel, setPanel] = React.useState(null);
  const [draft, setDraft] = React.useState(null);
  const [focus, setFocus] = React.useState(null);
  const [busy, setBusy] = React.useState(false);
  const [problem, setProblem] = React.useState('');
  const [mismatch, setMismatch] = React.useState(null);
  const [replacement, setReplacement] = React.useState(null);
  const busyRef = React.useRef(false);
  const refreshId = React.useRef(0);

  async function refresh() {
    const id = ++refreshId.current;
    const result = await listEvidence();
    if (id === refreshId.current) setRows(result);
  }

  async function action(operation) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setProblem('');
    try { await operation(); }
    catch (error) { setProblem(error?.message || '证据操作失败，请重试。'); }
    finally { busyRef.current = false; setBusy(false); }
  }

  function show(bookId = '') {
    setPanel({ bookId });
    setMismatch(null);
    void action(refresh);
  }

  async function confirmFingerprint(record, blob) {
    const identity = await fingerprintPdf(blob);
    await reviseEvidence(record.id, { identity, identityError: '' }, record.sourceRevision);
    await refresh();
  }

  function createDraft(selection, translation) {
    const current = currentRef.current;
    if (current?.kind !== 'pdf' || !selection.evidenceAnchor) return;
    const old = replacement?.blob === current.data ? replacement.record : null;
    const options = [
      translation?.status === 'done' && translation.zh?.trim()
        ? { scope: 'selection', text: translation.zh, source: selection.text } : null,
      selection.paragraphTranslation,
    ].filter(Boolean);
    setProblem('');
    setDraft({
      id: old?.id || uuid(), old, blob: current.data,
      source: sourceOf({ record: current.record, anchor: selection.evidenceAnchor, quote: selection.text }),
      options, note: old?.note || '', translation: options[0] || null,
    });
  }

  function saveDraft({ note, translation }) {
    if (!draft) return;
    void action(async () => {
      const { old, blob, source, id } = draft;
      const changes = { ...source, note, translation, identity: null, identityError: '' };
      const record = old
        ? await reviseEvidence(id, changes, old.sourceRevision)
        : { id, ...changes, topicIds: [], createdAt: Date.now(), updatedAt: Date.now() };
      if (!record) throw new Error('证据或原文已变化，请重新打开后重试。');
      if (!old) await createEvidence(record);
      setDraft(null);
      setReplacement(null);
      setPanel({ bookId: source.bookId });
      ++refreshId.current;
      setRows(previous => [record, ...previous.filter(row => row.id !== record.id)]);
      showToast('证据已保存。');
      void confirmFingerprint(record, blob).catch(async error => {
        try {
          await reviseEvidence(id, { identityError: error?.message || '文件核验失败，请重试。' }, source.sourceRevision);
          await refresh();
        } catch { /* The committed evidence remains available for retry. */ }
      });
    });
  }

  async function originalFile(record) {
    const stored = await getBook(record.bookId);
    if (!stored?.blob) throw new Error('原文缺失。请选择 PDF 重新关联。');
    if (stored.format !== 'pdf') throw new Error('当前关联不是 PDF，请重新关联。');
    return stored;
  }

  function retry(record) {
    void action(async () => {
      const stored = await originalFile(record);
      if ((stored.fileRevision ?? null) !== record.fileRevision) {
        throw new Error('取证时的版本尚未确认，当前文件已更新。请选择文件后重新选区。');
      }
      await confirmFingerprint(record, stored.blob);
    });
  }

  function jump(record) {
    if (busyRef.current) return;
    const token = ++navigation.current;
    setFocus(null);
    void action(async () => {
      if (!validFingerprint(record.identity)) throw new Error('文件身份待确认，核验完成后可定位。');
      const stored = await originalFile(record);
      const current = currentRef.current;
      const blob = current?.kind === 'pdf' && current.record.id === stored.id
        && current.record.fileRevision === stored.fileRevision ? current.data : stored.blob;
      const identity = await fingerprintPdf(blob);
      if (token !== navigation.current) return;
      if (!sameFingerprint(record.identity, identity)) throw new Error('文件版本不一致。请选择正确原文，或重新选区确认出处。');
      if (blob !== currentRef.current?.data && !await openBook(stored, { verifiedRecord: stored, token })) return;
      if (token !== navigation.current) return;
      setPanel(null);
      setFocus({ token, blob, anchor: record.anchor, quote: record.quote });
    });
  }

  function located(token, result) {
    if (token !== navigation.current) return;
    if (result === 'exact') showToast('已精确定位原文。');
    if (result === 'page') showToast('仅定位到 PDF 页。请核对原文后重新选区。', 4500);
    if (result === 'unavailable') showToast('无法确认有效页码，请重新核对原文。', 4500);
  }

  function pickFile(record, file) {
    void action(async () => {
      setMismatch(null);
      if (!/\.pdf$/i.test(file.name) || !(await file.slice(0, 1024).text()).includes('%PDF-')) {
        throw new Error('请选择有效的 PDF 文件。');
      }
      const identity = await fingerprintPdf(file);
      if (!sameFingerprint(record.identity, identity)) {
        setMismatch({ record, file, identity });
        setProblem(validFingerprint(record.identity)
          ? '所选文件与取证版本不同。可换一个文件，或打开该版本重新选择原文。'
          : '原版本待确认。若无法核验原文件，请在所选 PDF 重新选择原文。');
        return;
      }
      const stored = await saveBook(file, { fingerprint: identity });
      const updated = await reviseEvidence(record.id, {
        bookId: stored.id, fileRevision: stored.fileRevision, sourceRevision: uuid(), identityError: '',
      }, record.sourceRevision);
      if (!updated) throw new Error('证据已变化，请重新打开后重试。');
      setPanel({ bookId: stored.id });
      await refreshBooks();
      await refresh();
      showToast('已确认同一文件并重新关联。');
    });
  }

  function reselect() {
    if (!mismatch || busyRef.current) return;
    const token = ++navigation.current;
    void action(async () => {
      const { record, file, identity } = mismatch;
      const stored = await saveBook(file, { fingerprint: identity });
      if (token !== navigation.current || !await openBook(stored, { verifiedRecord: stored, token })) return;
      setReplacement({ record, blob: stored.blob });
      setMismatch(null);
      setPanel(null);
      showToast('请选择该版本的对应原文，然后点击「重新关联此选区」。', 5000);
    });
  }

  function edit(record, changes) {
    void action(async () => {
      if (!await reviseEvidence(record.id, changes, record.sourceRevision)) {
        throw new Error('证据已变化，请重新打开后重试。');
      }
      await refresh();
      showToast('证据已更新。');
    });
  }

  function remove(record) {
    void action(async () => {
      await removeEvidence(record.id);
      await refresh();
      showToast('证据已删除，相关书单引用已移除。');
    });
  }

  return {
    rows, panel, draft, focus, busy, problem, mismatch, replacement, refresh, show, retry, jump, located,
    createDraft, saveDraft, pickFile, reselect, edit, remove,
    closePanel: () => { if (!busyRef.current) { setPanel(null); setMismatch(null); setProblem(''); } },
    closeDraft: () => { if (!busyRef.current) { setDraft(null); setProblem(''); } },
  };
}
