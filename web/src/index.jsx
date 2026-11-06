import React from 'react';
import { ReaderPage } from './app.jsx';
import { styles } from './styles.js';
import { pdfStyles } from './pdf/PdfViewer.jsx';
import { appearanceStyles } from './appearance/AppearancePanel.jsx';
import { annotationStyles } from './annotations/styles.js';

export const name = 'dsh-reader';
export const inject = ['slots', 'layout'];

export const PANEL_ID = 'reader';

function ReaderIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 5.4A2.4 2.4 0 0 1 6.4 3H20v16.1H6.4A2.4 2.4 0 0 0 4 21.5V5.4Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
      <path d="M4 18.4a2.4 2.4 0 0 1 2.4-2.3H20" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      <path d="M8.2 7h7.6M8.2 10.2h4.6" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      <circle cx="17.2" cy="18.6" r="2.1" fill="currentColor" opacity=".9" />
    </svg>
  );
}

export function apply(ctx) {
  ctx.effect(() => {
    const style = document.createElement('style');
    style.dataset.dshReader = 'styles';
    style.textContent = `${styles}\n${pdfStyles}\n${appearanceStyles}\n${annotationStyles}`;
    document.head.appendChild(style);
    return () => style.remove();
  }, 'dsh-reader: styles');

  ctx.slots.inject('main', function* registerReaderPanel() {
    yield ctx.slots.register({
      name: 'main',
      key: PANEL_ID,
    }, ReaderPage);
  });

  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist',
    id: PANEL_ID,
    order: 10,
    label: () => '阅读',
  }, ReaderIcon));
}
