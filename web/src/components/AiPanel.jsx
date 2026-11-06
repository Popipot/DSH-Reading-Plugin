import React from 'react';
import { Markdown } from './markdown.jsx';
import { streamAI, isAbortError } from '../ai-client.js';
import { IconX, IconSparkles, IconGoogle, IconGoogleScholar, IconRotate, IconExternal } from './icons.jsx';

const WELCOME_SUGGESTIONS = [
  '帮我梳理这段话的论证结构',
  '解释其中的专业术语和背景',
  '翻译并指出关键语法',
  '这段和我的研究问题有什么关系？',
];

export function AiPanel({ open, onClose, seed, onGoogle, onToast }) {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState('');
  const abortRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const seedId = seed?.id ?? '';
  const selection = seed?.text ?? '';
  const context = seed?.context ?? '';

  const scrollToEnd = React.useCallback(() => {
    const el = bodyRef.current;
    if (!el) return;
    requestAnimationFrame(() => { el.scrollTop = el.scrollHeight; });
  }, []);

  const send = React.useCallback(async (question, { replace = false, history } = {}) => {
    const trimmed = String(question ?? '').trim();
    if (!trimmed || busy) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const userMessage = { role: 'user', content: trimmed };
    const base = history ?? messages;
    const nextMessages = replace ? [userMessage] : [...base, userMessage];
    setMessages([...nextMessages, { role: 'assistant', content: '' }]);
    setBusy(true);
    setError('');
    scrollToEnd();
    let answer = '';
    try {
      await streamAI({
        messages: nextMessages.map((message) => ({ role: message.role, content: message.content })),
        selection,
        context,
        signal: controller.signal,
      }, {
        onDelta: (delta) => {
          answer += delta;
          setMessages((prev) => {
            if (prev.length === 0) return prev;
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last?.role !== 'assistant') return prev;
            updated[updated.length - 1] = { ...last, content: answer };
            return updated;
          });
          scrollToEnd();
        },
      });
      if (!answer.trim()) {
        setError('AI 没有返回内容，请重试或换一种问法。');
        setMessages((prev) => prev.filter((message, index) => !(index === prev.length - 1 && message.role === 'assistant' && !message.content)));
      }
    } catch (streamError) {
      if (isAbortError(streamError)) return;
      setError(streamError?.message || 'AI 请求失败。');
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant' && !last.content) return prev.slice(0, -1);
        return prev;
      });
    } finally {
      setBusy(false);
    }
  }, [busy, context, messages, scrollToEnd, selection]);

  // A new selection opens a fresh conversation and asks for an explanation.
  React.useEffect(() => {
    if (!open || !seedId) return;
    abortRef.current?.abort();
    setMessages([]);
    setError('');
    setInput('');
    const intro = '请解释这段内容。';
    setMessages([
      { role: 'user', content: intro },
      { role: 'assistant', content: '' },
    ]);
    setBusy(true);
    const controller = new AbortController();
    abortRef.current = controller;
    let answer = '';
    void streamAI({
      messages: [{ role: 'user', content: intro }],
      selection,
      context,
      signal: controller.signal,
    }, {
      onDelta: (delta) => {
        answer += delta;
        setMessages((prev) => {
          if (prev.length === 0) return prev;
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role !== 'assistant') return prev;
          updated[updated.length - 1] = { ...last, content: answer };
          return updated;
        });
        scrollToEnd();
      },
    }).catch((streamError) => {
      if (!isAbortError(streamError)) setError(streamError?.message || 'AI 请求失败。');
    }).finally(() => {
      setBusy(false);
      if (!answer.trim()) {
        setMessages((prev) => prev.filter((message, index) => !(index === prev.length - 1 && message.role === 'assistant' && !message.content)));
      }
    });
    return () => controller.abort();
    // seedId is the intentional reset trigger; selection/context belong to it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, seedId]);

  React.useEffect(() => {
    if (!open) abortRef.current?.abort();
  }, [open]);

  if (!open) return null;

  const submit = (event) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy) return;
    setInput('');
    void send(question);
  };

  const searchText = (external) => {
    const text = selection || messages.find((message) => message.role === 'user')?.content || '';
    if (!text.trim()) {
      onToast?.('先在正文里选中一段文字，再搜索。');
      return;
    }
    onGoogle?.(text, external ? 'scholar' : 'web');
  };

  return (
    <aside className="dshr-ai" aria-label="AI 阅读助手">
      <div className="dshr-ai__head">
        <IconSparkles size={17} />
        <strong>AI 阅读助手</strong>
        <span className="dshr-chip dshr-chip--brand">DSH 默认模型</span>
        <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost" onClick={onClose} aria-label="关闭 AI 面板" title="关闭">
          <IconX size={16} />
        </button>
      </div>
      <div className="dshr-ai__body" ref={bodyRef}>
        {messages.length === 0 ? (
          <div className="dshr-ai__welcome">
            <strong>选中正文中的任意句子</strong>，我会解释含义、术语和语法；也可以直接追问，或跳转 Google / Google 学术继续查。
            <div className="dshr-ai__suggestions">
              {WELCOME_SUGGESTIONS.map((suggestion) => (
                <button key={suggestion} type="button" onClick={() => void send(suggestion)} disabled={busy}>{suggestion}</button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`dshr-ai__msg${message.role === 'user' ? ' dshr-ai__msg--user' : ''}`}>
              <span className="dshr-ai__role">{message.role === 'user' ? '你' : '阅读助手'}</span>
              {message.role === 'assistant'
                ? (message.content ? <Markdown text={message.content} /> : (busy && index === messages.length - 1 ? <span className="dshr-translation__loading"><span className="dshr-spinner" /> 正在思考…</span> : null))
                : message.content}
            </div>
          ))
        )}
        {error ? (
          <div className="dshr-ai__error">
            {error}
            <div style={{ marginTop: 6 }}>
              <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--outline" onClick={() => void send(messages.find((message) => message.role === 'user')?.content || '请重新解释这段内容。', { replace: true, history: [] })}>
                <IconRotate size={13} /> 重新回答
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="dshr-ai__foot">
        <form onSubmit={submit}>
          <textarea
            className="dshr-ai__input"
            placeholder="追问：这段的论证有什么问题？／术语是什么意思？"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                void send(input);
                setInput('');
              }
            }}
            disabled={busy}
            aria-label="向 AI 追问"
          />
          <div className="dshr-ai__actions">
            <span className="dshr-ai__hint">Enter 发送 · Shift+Enter 换行</span>
            <div style={{ display: 'flex', gap: 5 }}>
              <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--outline" onClick={() => searchText(false)} title="用 Google 搜索选中的文字">
                <IconGoogle size={13} /> Google
              </button>
              <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--outline" onClick={() => searchText(true)} title="用 Google 学术搜索选中的文字">
                <IconGoogleScholar size={13} /> 学术
              </button>
              <button type="submit" className="dshr-btn dshr-btn--sm dshr-btn--primary" disabled={busy || !input.trim()}>
                {busy ? <span className="dshr-spinner" /> : <IconExternal size={13} />} 发送
              </button>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
}
