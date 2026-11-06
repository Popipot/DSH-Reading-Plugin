import React from 'react';
import { translateSegments, getTranslationModel } from '../ai-client.js';
import { getPdfTranslation, putPdfTranslation, getPdfTranslationPreferences, savePdfTranslationPreferences } from '../storage.js';
import { PdfTranslationController, normalizeGlossary } from './translation-controller.js';

const defaults = { glossary: '', fontSize: 16, prefetch: true, showSource: false, linked: true };
export function usePdfTranslation({ documentId, title, enabled, activePage, sources, visibleIds }) {
  const [snapshot, setSnapshot] = React.useState({ documentId: '', pages: {}, cacheIssue: '' });
  const [preferences, setPreferences] = React.useState({ ...defaults, documentId: '' });
  const [metadata, setMetadata] = React.useState(null);
  const [modelError, setModelError] = React.useState('');
  const [modelRevision, setModelRevision] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!documentId) return undefined;
    let alive = true;
    setSnapshot({ documentId, pages: {}, cacheIssue: '' });
    setPaused(false);
    const controller = new PdfTranslationController({
      translate: translateSegments, cache: { get: getPdfTranslation, put: putPdfTranslation },
      onChange: state => { if (alive) setSnapshot({ documentId, ...state }); },
      onModelChanged: () => { if (alive) setModelRevision(value => value + 1); },
    });
    ref.current = { documentId, controller };
    void getPdfTranslationPreferences(documentId).catch(() => ({})).then(saved => {
      if (alive) setPreferences({ ...defaults, ...saved, documentId,
        glossary: normalizeGlossary(saved.glossary), fontSize: Math.max(12, Math.min(24, Number(saved.fontSize) || 16)) });
    });
    return () => { alive = false; controller.dispose(); if (ref.current?.controller === controller) ref.current = null; };
  }, [documentId]);
  React.useEffect(() => {
    if (!documentId) return undefined;
    const controller = new AbortController();
    setModelError('');
    void getTranslationModel({ signal: controller.signal }).then(result => {
      if (!controller.signal.aborted) {
        setMetadata({ ...result, documentId });
        if (!result.ready) setModelError('翻译模型未就绪，请在 DSH 设置中选择默认模型。');
      }
    }).catch(error => {
      if (!controller.signal.aborted) { setModelError(error.message || '翻译服务不可用。'); setMetadata({ documentId, ready: false }); }
    });
    const refresh = () => { if (document.visibilityState === 'visible') setModelRevision(value => value + 1); };
    const timer = setInterval(refresh, 60000);
    document.addEventListener('visibilitychange', refresh);
    return () => { controller.abort(); clearInterval(timer); document.removeEventListener('visibilitychange', refresh); };
  }, [documentId, modelRevision]);
  React.useEffect(() => {
    const session = ref.current;
    if (!session || session.documentId !== documentId || preferences.documentId !== documentId || metadata?.documentId !== documentId) return;
    session.controller.configure({ documentId, title, enabled: enabled && !paused, canTranslate: Boolean(metadata.ready),
      model: { provider: metadata.provider || '', model: metadata.model || '', promptVersion: metadata.promptVersion || '' },
      glossary: preferences.glossary, prefetch: preferences.prefetch });
    session.controller.setFocus(activePage, visibleIds);
    for (const [page, source] of Object.entries(sources)) if (Math.abs(Number(page) - activePage) <= 3) session.controller.registerPage(Number(page), source);
  }, [documentId, title, enabled, paused, preferences.glossary, preferences.prefetch, preferences.documentId, metadata, activePage, visibleIds, sources]);
  React.useEffect(() => {
    if (documentId && preferences.documentId === documentId) void savePdfTranslationPreferences(documentId, preferences).catch(() => {});
  }, [documentId, preferences]);
  return {
    ...(snapshot.documentId === documentId ? snapshot : { pages: {}, cacheIssue: '' }),
    preferences: preferences.documentId === documentId ? preferences : defaults,
    paused, model: metadata?.documentId === documentId ? metadata : null, modelError,
    setPaused, refreshModel: () => setModelRevision(value => value + 1),
    updatePreferences: patch => setPreferences(previous => ({ ...previous, ...patch })),
    retry: (page, id) => ref.current?.controller.retry(page, id),
  };
}
