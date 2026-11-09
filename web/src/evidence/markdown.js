import { citation } from './research.js';

export const scopes = { selection: '选区译文', paragraph: '所属段落译文' };

function literal(text) {
  return String(text ?? '').replace(/[!-/:-@[-\x60{-~]/gu, char => '\\' + char);
}

const inline = value => literal(String(value ?? '').replace(/\s+/gu, ' ').trim());
const block = value => String(value ?? '').split(/\r\n?|\n/u).map(line =>
  '> ' + literal(line).replace(/^[ \t]+/u, spaces => spaces.replace(/[ \t]/gu, char => char === '\t' ? '&#9;' : '&#32;')),
).join('\n');

export function buildEvidenceMarkdown({ sections, books, topic }) {
  const output = [topic ? '# ' + inline(topic.name) : '# 阅读证据'];
  if (topic) {
    output.push('## 研究问题\n\n' + (topic.research?.question ? block(topic.research.question) : '未填写'));
    output.push('## 人工综合\n\n' + (topic.research?.synthesis ? block(topic.research.synthesis) : '未填写'));
  }
  let count = 0;
  for (const section of sections) {
    if (!section.rows.length) continue;
    if (topic) {
      output.push('## ' + inline(section.name));
      if (section.comparison) output.push('**本组比较**\n\n' + block(section.comparison));
    }
    for (const record of section.rows) {
      const source = citation(record, books.get(record.bookId));
      output.push('### ' + ++count + '. ' + inline(source.title), [
        '- PDF 物理页码 ' + (Number.isSafeInteger(source.page) && source.page > 0 ? source.page : '待确认'),
        '- 印刷页标 ' + (inline(source.printLabel) || '未提供'),
        '- 作者 ' + (inline(source.author) || '未提供'),
        '- 年份 ' + (inline(source.year) || '未提供'),
        '- DOI ' + (inline(source.doi) || '未提供'),
      ].join('\n'));
      output.push('**原文**\n\n' + block(record.quote));
      if (record.translation) output.push('**' + (scopes[record.translation.scope] || '译文') + '**\n\n' + block(record.translation.text));
      if (record.note) output.push('**备注**\n\n' + block(record.note));
    }
  }
  return output.join('\n\n') + '\n';
}

export function downloadMarkdown(markdown, filename) {
  const url = URL.createObjectURL(new Blob([markdown], { type: 'text/markdown;charset=utf-8' }));
  try {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}