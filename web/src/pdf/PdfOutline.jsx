import React from 'react';
import { IconChevronLeft } from '../components/icons.jsx';

function OutlineItems({ items, page, knownPages, onJump }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.dest ? (
            <button type="button" title={item.title} aria-current={knownPages.get(item) === page ? 'location' : undefined}
              onClick={() => onJump(item)}>{item.title}</button>
          ) : <span>{item.title}</span>}
          {item.items?.length > 0 && <OutlineItems items={item.items} page={page} knownPages={knownPages} onJump={onJump} />}
        </li>
      ))}
    </ul>
  );
}

export function PdfOutline({ pdf, page, onPage, onClose }) {
  const [items, setItems] = React.useState(null);
  const [knownPages, setKnownPages] = React.useState(() => new Map());
  const [problem, setProblem] = React.useState('');
  const request = React.useRef(0);

  React.useEffect(() => {
    let cancelled = false;
    setItems(null);
    setKnownPages(new Map());
    setProblem('');
    pdf.getOutline().then(result => {
      if (!cancelled) setItems(result || []);
    }).catch(() => {
      if (!cancelled) { setItems([]); setProblem('无法读取目录。可使用顶部页码跳转。'); }
    });
    return () => { cancelled = true; request.current++; };
  }, [pdf]);

  async function jump(item) {
    const token = ++request.current;
    setProblem('');
    try {
      const target = typeof item.dest === 'string' ? await pdf.getDestination(item.dest) : item.dest;
      const destination = target?.[0];
      const index = Number.isInteger(destination) ? destination : destination ? await pdf.getPageIndex(destination) : -1;
      if (token !== request.current) return;
      if (index < 0 || index >= pdf.numPages) throw new Error('Invalid outline page');
      setKnownPages(previous => new Map(previous).set(item, index + 1));
      onPage(index + 1);
    } catch {
      if (token === request.current) setProblem('无法跳转到此条目。可使用顶部页码。');
    }
  }

  return (
    <aside className="dshr-pdf-outline" aria-label="PDF 目录">
      <div className="dshr-pdf-outline__heading">
        <strong>目录</strong>
        <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost" onClick={onClose}
          aria-label="收起 PDF 目录"><IconChevronLeft size={16} /></button>
      </div>
      <div className="dshr-pdf-outline__list">
        {problem && <p role="status">{problem}</p>}
        {items === null ? <p>正在读取目录…</p>
          : items.length ? <OutlineItems items={items} page={page} knownPages={knownPages} onJump={jump} />
          : !problem && <p>这份 PDF 没有目录。可使用顶部页码跳转。</p>}
      </div>
    </aside>
  );
}
