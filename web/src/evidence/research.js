export function normalizeResearch(value = {}, allowedIds) {
  const assigned = new Set();
  const groups = Array.isArray(value.groups) ? value.groups : [];
  return {
    question: String(value.question ?? '').trim().slice(0, 1000),
    synthesis: String(value.synthesis ?? '').trim().slice(0, 20000),
    groups: groups.map(group => ({
      id: group.id,
      name: String(group.name ?? '').trim().slice(0, 80),
      comparison: String(group.comparison ?? '').trim().slice(0, 10000),
      ids: (group.ids ?? []).filter(id => {
        if (!allowedIds.has(id) || assigned.has(id)) return false;
        assigned.add(id);
        return true;
      }),
    })),
  };
}

export function topicSections(records, groups = []) {
  const unassigned = new Map(records.map(record => [record.id, record]));
  const sections = groups.map(group => ({
    id: group.id,
    name: group.name,
    comparison: group.comparison,
    rows: group.ids.flatMap(id => {
      const record = unassigned.get(id);
      unassigned.delete(id);
      return record ? [record] : [];
    }),
  }));
  sections.push({ id: '', name: '未分组', rows: [...unassigned.values()] });
  return sections;
}

export function citation(record, book) {
  const source = book?.citationConfirmed ? book : record;
  return {
    title: source.title || book?.title || '题名待确认',
    author: source.author || (!book?.citationConfirmed && book?.author) || '',
    year: source.year || '',
    doi: source.doi || '',
    printLabel: record.printLabel || '',
    page: record.anchor?.page,
  };
}