// The pinned StPageFlip geometry is used without its reader/UI or permanent RAF
// loop. Our existing flow cursor remains the only navigation authority.
import { FlipCalculation } from 'page-flip/src/Flip/FlipCalculation';
import { Helper } from 'page-flip/src/Helper';
import { BOOK_PADDING_TOP } from './flow-pagination.js';

const DURATIONS = { slide: 250, cover: 300, flip: 500 };
const EASING = 'cubic-bezier(.25,.1,.25,1)';
const polygon = points => `polygon(${points.filter(Boolean).map(p => `${p.x}px ${p.y}px`).join(',')})`;
let snapshotIdentity = 0;

// Measure once per pagination layout, never traverse/clone a whole chapter on
// every animation frame. Snapshots keep only blocks intersecting either page.
export function indexFlowSnapshots(scroll, stage) {
  const root = scroll.getBoundingClientRect();
  const candidates = stage.querySelectorAll('.dshr-block,.dshr-chapter__kicker,.dshr-chapter__nav');
  return [...(candidates.length ? candidates : stage.children)].map(element => {
    const rect = element.getBoundingClientRect();
    return { element, top: rect.top - root.top + scroll.scrollTop, bottom: rect.bottom - root.top + scroll.scrollTop,
      left: rect.left - root.left, width: rect.width, height: rect.height };
  });
}

function stripIdentity(element) {
  const nodes = [element, ...element.querySelectorAll('*')];
  const ids = new Map();
  const prefix = `dshr-snapshot-${++snapshotIdentity}-`;
  for (const node of nodes) {
    if (node.id) { ids.set(node.id, prefix + ids.size); node.id = ids.get(node.id); }
    for (const name of ['data-seg-id', 'data-anno-block', 'data-anno-id', 'autofocus']) node.removeAttribute(name);
  }
  // SVG diagrams can use clip paths, gradients and <use>. Give their paint
  // resources unique IDs and fix local references rather than deleting them.
  if (ids.size) for (const node of nodes) {
    for (const attr of [...node.attributes]) {
      if (attr.name === 'id') continue;
      let value = attr.value.replace(/url\(\s*(['"]?)#([^\s)'";]+)\1\s*\)/g,
        (match, quote, id) => ids.has(id) ? `url(#${ids.get(id)})` : match);
      if ((attr.name === 'href' || attr.name === 'xlink:href') && ids.has(value.slice(1))) value = '#' + ids.get(value.slice(1));
      if (value !== attr.value) node.setAttribute(attr.name, value);
    }
  }
}

function snapshot(scroll, stage, records, top, bottom, budget) {
  const page = document.createElement('div');
  page.className = 'dshr-turn-page';
  const rootRect = scroll.getBoundingClientRect();
  const stageRect = stage.getBoundingClientRect();
  const inner = stage.cloneNode(false);
  stripIdentity(inner);
  Object.assign(inner.style, { position: 'absolute', left: `${stageRect.left - rootRect.left}px`, top: '0',
    width: `${stageRect.width}px`, height: '100%', padding: '0', margin: '0' });
  page.append(inner);
  const parents = new Map([[stage, inner]]);
  const parentCopy = node => {
    if (parents.has(node)) return parents.get(node);
    const copy = node.cloneNode(false);
    stripIdentity(copy);
    parentCopy(node.parentElement).append(copy);
    parents.set(node, copy);
    return copy;
  };
  for (const record of records) {
    if (record.bottom <= top + BOOK_PADDING_TOP || record.top >= top + scroll.clientHeight - bottom || !record.height) continue;
    // A pathological single block must not stall the host just to animate it.
    // Oversized objects still turn using the same cursor, with an instant commit.
    if (record.height > scroll.clientHeight * 8) throw new Error('Snapshot block exceeds viewport budget');
    const walker = document.createTreeWalker(record.element, 0xFFFFFFFF);
    for (let node = record.element; node; node = walker.nextNode()) {
      budget.nodes -= 1;
      if (node.nodeType === 3) budget.text -= node.length;
      if (budget.nodes < 0 || budget.text < 0) throw new Error('Snapshot exceeds DOM budget');
    }
    const copy = record.element.cloneNode(true);
    stripIdentity(copy);
    Object.assign(copy.style, { position: 'absolute', margin: '0', boxSizing: 'border-box',
      left: `${record.left - (stageRect.left - rootRect.left)}px`, top: `${record.top - top}px`,
      width: `${record.width}px`, height: `${record.height}px` });
    parentCopy(record.element.parentElement).append(copy);
    // An overflowed table/code block can have its own horizontal scroll offset.
    const originals = [record.element, ...record.element.querySelectorAll('*')];
    const copies = [copy, ...copy.querySelectorAll('*')];
    originals.forEach((node, i) => {
      if (node.scrollLeft) copies[i].scrollLeft = node.scrollLeft;
      if (node.tagName === 'CANVAS') {
        copies[i].width = node.width; copies[i].height = node.height;
        copies[i].getContext('2d')?.drawImage(node, 0, 0);
      }
    });
  }
  // Highlights live in a separate, absolutely positioned overlay in FlowReader.
  // Carry only the marks on this page, so they do not blink off during a turn.
  const annotations = scroll.querySelector(':scope > .dshr-anno-layer');
  if (annotations) {
    const marks = annotations.cloneNode(false);
    Object.assign(marks.style, { top: '0', height: '100%' });
    for (const mark of annotations.children) {
      const y = Number.parseFloat(mark.style.top);
      const height = Number.parseFloat(mark.style.height) || 24;
      if (y + height <= top + BOOK_PADDING_TOP || y >= top + scroll.clientHeight - bottom) continue;
      if (--budget.nodes < 0) throw new Error('Snapshot marks exceed DOM budget');
      const copy = mark.cloneNode(true);
      stripIdentity(copy);
      copy.style.top = `${y - top}px`;
      marks.append(copy);
    }
    page.append(marks);
  }
  for (const [edge, height] of [['top', BOOK_PADDING_TOP], ['bottom', bottom]]) {
    const mask = document.createElement('div');
    mask.className = `dshr-turn-mask dshr-turn-mask--${edge}`;
    mask.style.height = `${height}px`;
    page.append(mask);
  }
  return page;
}

// Forward folds from the bottom-right corner toward the left spine. Backward
// plays the identical physical fold in reverse, revealing the previous front.
export function softFoldFrame(width, height, progress) {
  const calc = new FlipCalculation(0, 'bottom', String(Math.round(width)), String(Math.round(height)));
  const p = Math.max(0.0001, Math.min(0.9999, progress));
  const lift = Math.min(height * 0.22, width * 0.28) * Math.sin(Math.PI * p);
  if (!calc.calc({ x: width * (1 - 2 * p), y: height - lift - 0.1 })) return null;
  const origin = calc.getActiveCorner();
  const angle = calc.getAngle();
  const area = calc.getFlippingClipArea().filter(Boolean).map(point => Helper.GetRotatedPoint({
    x: point.x - origin.x, y: point.y - origin.y,
  }, { x: 0, y: 0 }, angle));
  return { reveal: polygon(calc.getBottomClipArea()), fold: polygon(area),
    transform: `translate3d(${origin.x}px,${origin.y}px,0) rotate(${angle}rad)`,
    shadow: calc.getShadowStartPoint(), shadowAngle: calc.getShadowAngle() + Math.PI * 1.5,
    strength: Math.sin(Math.PI * p) };
}

export function createFlowTransition({ reader, scroll, stage, records, from, to, fromBottom, toBottom, mode, direction }) {
  const type = Object.hasOwn(DURATIONS, mode) ? mode : 'slide';
  const rect = scroll.getBoundingClientRect();
  const parent = reader.getBoundingClientRect();
  const overlay = document.createElement('div');
  overlay.className = `dshr-flow-transition is-${type}`;
  overlay.dataset.direction = String(direction);
  overlay.setAttribute('aria-hidden', 'true');
  overlay.inert = true;
  Object.assign(overlay.style, { left: `${rect.left - parent.left}px`, top: `${rect.top - parent.top}px`,
    width: `${scroll.clientWidth}px`, height: `${scroll.clientHeight}px` });
  // Settings may change while a turn is running. Keep this short-lived view's
  // typography and paper stable; the live document reflows around its anchor.
  const appearance = window.getComputedStyle(scroll);
  for (const name of Array.from(appearance)) {
    if (name.startsWith('--dshr-')) overlay.style.setProperty(name, appearance.getPropertyValue(name));
  }
  const budget = { nodes: 1800, text: 64000 };
  const oldPage = snapshot(scroll, stage, records, from, fromBottom, budget);
  const newPage = snapshot(scroll, stage, records, to, toBottom, budget);
  oldPage.dataset.turnPage = 'old'; newPage.dataset.turnPage = 'new';
  overlay.append(oldPage, newPage);
  const effects = [];
  let frame = 0;
  let timer;
  let cancelled = false;
  let endWait;
  const cleanup = () => {
    cancelled = true;
    cancelAnimationFrame(frame);
    clearTimeout(timer);
    for (const effect of effects) effect.cancel();
    endWait?.();
    overlay.remove();
  };
  const animate = (element, keyframes) => {
    const effect = element.animate(keyframes, { duration: DURATIONS[type], easing: EASING, fill: 'both' });
    effect.finished.catch(() => {});
    effects.push(effect);
    return effect;
  };
  try {
    reader.append(overlay);
    if (type === 'slide') {
      // Both opaque pages move as one strip; no fade or empty inter-page gap.
      animate(oldPage, [{ transform: 'translateX(0)' }, { transform: `translateX(${-direction * 100}%)` }]);
      animate(newPage, [{ transform: `translateX(${direction * 100}%)` }, { transform: 'translateX(0)' }]);
    } else if (type === 'cover') {
      const moving = direction > 0 ? newPage : oldPage;
      const stationary = direction > 0 ? oldPage : newPage;
      stationary.dataset.turnRole = 'stationary'; moving.dataset.turnRole = 'moving';
      stationary.style.zIndex = '0'; moving.style.zIndex = '1';
      moving.classList.add('has-edge-shadow');
      animate(moving, direction > 0
        ? [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }]
        : [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }]);
    } else {
      const underneath = direction > 0 ? oldPage : newPage;
      const revealed = direction > 0 ? newPage : oldPage;
      underneath.style.zIndex = '0'; revealed.style.zIndex = '1';
      const fold = document.createElement('div');
      fold.className = 'dshr-turn-fold';
      const shadow = document.createElement('div');
      shadow.className = 'dshr-turn-fold-shadow';
      revealed.append(shadow);
      overlay.append(fold);
      // Use a finite WAAPI clock so cancellation and host throttling have the
      // same bounded completion path as slide/cover; no persistent render loop.
      const clock = animate(overlay, [{ opacity: 1 }, { opacity: 1 }]);
      const draw = progress => {
        const physical = direction > 0 ? progress : 1 - progress;
        if (physical <= 0) { revealed.style.clipPath = 'inset(0 100% 0 0)'; fold.hidden = true; return; }
        if (physical >= 1) { revealed.style.clipPath = 'none'; fold.hidden = true; shadow.hidden = true; return; }
        const geometry = softFoldFrame(scroll.clientWidth, scroll.clientHeight, physical);
        if (!geometry) return;
        fold.hidden = false; shadow.hidden = false;
        revealed.style.clipPath = geometry.reveal;
        fold.style.clipPath = geometry.fold;
        fold.style.transform = geometry.transform;
        if (geometry.shadow) Object.assign(shadow.style, {
          opacity: String(geometry.strength * 0.16),
          transform: `translate3d(${geometry.shadow.x}px,${geometry.shadow.y - scroll.clientHeight}px,0) rotate(${geometry.shadowAngle}rad)`,
        });
      };
      draw(0);
      const tick = () => {
        if (cancelled) return;
        draw(clock.effect.getComputedTiming().progress ?? 0);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }
  } catch (error) { cleanup(); throw error; }
  // Attach rejection handlers synchronously, including to every paired effect.
  const finished = Promise.all(effects.map(effect => effect.finished.catch(() => {})));
  return {
    overlay,
    width: scroll.clientWidth,
    height: scroll.clientHeight,
    cancel: cleanup,
    async play() {
      try {
        await Promise.race([finished, new Promise(resolve => {
          endWait = resolve;
          timer = setTimeout(resolve, DURATIONS[type] + 300);
        })]);
      } finally { cleanup(); }
    },
  };
}
