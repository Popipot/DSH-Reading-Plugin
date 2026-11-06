import React from 'react';

/**
 * A deliberately tiny Markdown renderer for AI answers. It never injects HTML:
 * every token becomes a React element, so model output cannot execute markup.
 */
export function renderInline(text, keyPrefix = 'i') {
  const nodes = [];
  const source = String(text ?? '');
  const pattern = /(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/gu;
  let last = 0;
  let index = 0;
  for (const match of source.matchAll(pattern)) {
    if (match.index > last) nodes.push(source.slice(last, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${index++}`;
    if (token.startsWith('**') || token.startsWith('__')) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('`')) {
      nodes.push(<code key={key}>{token.slice(1, -1)}</code>);
    } else {
      const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/u.exec(token);
      if (link && /^https?:\/\//iu.test(link[2])) {
        nodes.push(<a key={key} href={link[2]} target="_blank" rel="noreferrer noopener">{link[1]}</a>);
      } else {
        nodes.push(token);
      }
    }
    last = match.index + token.length;
  }
  if (last < source.length) nodes.push(source.slice(last));
  return nodes;
}

export function Markdown({ text }) {
  const lines = String(text ?? '').replace(/\r\n/gu, '\n').split('\n');
  const blocks = [];
  let paragraph = [];
  let list = [];
  let quote = [];
  let code = null;
  let key = 0;
  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const content = paragraph.join(' ');
    blocks.push(<p key={`p-${key++}`}>{renderInline(content, `p${key}`)}</p>);
    paragraph = [];
  };
  const flushList = () => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={`ul-${key++}`}>
        {list.map((item, index) => <li key={`li-${key}-${index}`}>{renderInline(item, `l${key}-${index}`)}</li>)}
      </ul>,
    );
    list = [];
  };
  const flushQuote = () => {
    if (quote.length === 0) return;
    blocks.push(
      <blockquote key={`bq-${key++}`}>
        {quote.map((line, index) => <p key={`bqp-${key}-${index}`}>{renderInline(line, `q${key}-${index}`)}</p>)}
      </blockquote>,
    );
    quote = [];
  };
  const flushAll = () => { flushParagraph(); flushList(); flushQuote(); };
  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (line.trim().startsWith('```')) {
      if (code === null) {
        flushAll();
        code = [];
      } else {
        blocks.push(<pre key={`pre-${key++}`}><code>{code.join('\n')}</code></pre>);
        code = null;
      }
      continue;
    }
    if (code !== null) { code.push(rawLine); continue; }
    if (line.trim() === '') { flushAll(); continue; }
    const heading = /^(#{1,4})\s+(.*)$/u.exec(line);
    if (heading) {
      flushAll();
      const level = Math.min(4, heading[1].length);
      const Tag = `h${level}`;
      blocks.push(<Tag key={`h-${key++}`}>{renderInline(heading[2], `h${key}`)}</Tag>);
      continue;
    }
    const quoted = /^\s*>\s?(.*)$/u.exec(line);
    if (quoted) { flushParagraph(); flushList(); quote.push(quoted[1]); continue; }
    const bullet = /^\s*[-*+]\s+(.*)$/u.exec(line);
    if (bullet) { flushAll(); list.push(bullet[1]); continue; }
    const numbered = /^\s*\d+[.)]\s+(.*)$/u.exec(line);
    if (numbered) { flushAll(); list.push(numbered[1]); continue; }
    if (/^\s*([-*_])(?:\s*\1){2,}\s*$/u.test(line)) { flushAll(); blocks.push(<hr key={`hr-${key++}`} />); continue; }
    flushList();
    flushQuote();
    paragraph.push(line);
  }
  if (code !== null) blocks.push(<pre key={`pre-${key++}`}><code>{code.join('\n')}</code></pre>);
  flushAll();
  return <>{blocks}</>;
}
