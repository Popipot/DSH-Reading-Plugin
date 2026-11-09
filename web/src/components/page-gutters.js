const MIN_WIDTH = 24;
const MAX_WIDTH = 64;
const VERTICAL_INSET = 12;
const MAX_TRAVEL = 6;
const MAX_PRESS_MS = 500;
const INTERACTIVE = 'a,button,input,select,textarea,img,video,[role="button"],[contenteditable="true"],.dshr-pdf-frame';

export function hasReadingSelection(scroll) {
  const selection = window.getSelection?.();
  return selection && !selection.isCollapsed
    && (scroll.contains(selection.anchorNode) || scroll.contains(selection.focusNode));
}

export function bindPageGutters({ scroll, reader, stage, hint, canTurn, turn }) {
  let press = null;
  let shown = '';
  const hasSelection = () => hasReadingSelection(scroll);
  const hit = event => {
    const { target, clientX: x, clientY: y } = event;
    if (!(target instanceof Element) || target.closest(INTERACTIVE) || stage?.contains(target)) return null;
    const rect = scroll.getBoundingClientRect();
    const left = rect.left + scroll.clientLeft;
    const right = left + scroll.clientWidth;
    const top = rect.top + scroll.clientTop + VERTICAL_INSET;
    const height = scroll.clientHeight - 2 * VERTICAL_INSET;
    if (y < top || y >= top + height) return null;
    const limit = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, scroll.clientWidth * .06));
    const direction = x >= left && x < left + limit ? -1 : x < right && x >= right - limit ? 1 : 0;
    if (!direction || !canTurn(direction)) return null;
    const content = stage || scroll.querySelector('.dshr-pdf-page[data-active="true"] .dshr-pdf-frame');
    if (!content) return null;
    const bounds = content.getBoundingClientRect();
    if (bounds.right <= left || bounds.left >= right) return null;
    const width = Math.min(limit, direction < 0 ? bounds.left - left : right - bounds.right);
    if (width < MIN_WIDTH || (direction < 0 ? x >= left + width : x < right - width)) return null;
    return { direction, left: direction < 0 ? left : right - width, top, width, height };
  };
  const hide = () => {
    if (!shown) return;
    shown = '';
    hint.hidden = true;
    delete scroll.dataset.pageGutterHover;
  };
  const cancel = () => { press = null; hide(); };
  const moved = event => Math.hypot(event.clientX - press.x, event.clientY - press.y) > MAX_TRAVEL;
  const onDown = event => {
    press = null;
    if (event.button !== 0 || !event.isPrimary || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || hasSelection()) return;
    const zone = hit(event);
    if (zone) press = { id: event.pointerId, direction: zone.direction, x: event.clientX, y: event.clientY,
      time: event.timeStamp, released: false };
  };
  const onMove = event => {
    const zone = hit(event);
    if (press && (event.pointerId !== press.id || moved(event) || zone?.direction !== press.direction)) press = null;
    if (!zone || event.buttons || event.pointerType !== 'mouse' || hasSelection()) { hide(); return; }
    const origin = reader.getBoundingClientRect();
    const left = zone.left - origin.left;
    const top = zone.top - origin.top;
    const key = [left, top, zone.width, zone.height].join(':');
    if (key === shown) return;
    shown = key;
    Object.assign(hint.style, { left: left + 'px', top: top + 'px', width: zone.width + 'px', height: zone.height + 'px' });
    hint.hidden = false;
    scroll.dataset.pageGutterHover = 'true';
  };
  const onUp = event => {
    if (!press || event.pointerId !== press.id || moved(event) || event.timeStamp - press.time > MAX_PRESS_MS
      || hasSelection() || hit(event)?.direction !== press.direction) { press = null; return; }
    press.released = true;
  };
  const onClick = event => {
    const accepted = press;
    press = null;
    if (!accepted?.released || event.timeStamp - accepted.time > MAX_PRESS_MS + 100
      || event.defaultPrevented || hasSelection()
      || hit(event)?.direction !== accepted.direction) return;
    turn(accepted.direction, event.detail > 1);
  };
  const events = {
    pointerdown: onDown, pointermove: onMove, pointerup: onUp, click: onClick,
    // The browser can select a nearby word on a double click in blank space.
    selectstart: event => { if (press) event.preventDefault(); },
    pointerleave: () => { if (!press?.released) press = null; hide(); },
    pointercancel: cancel, contextmenu: cancel, scroll: hide,
  };
  for (const [name, listener] of Object.entries(events)) scroll.addEventListener(name, listener);
  return {
    hide,
    dispose() {
      for (const [name, listener] of Object.entries(events)) scroll.removeEventListener(name, listener);
      cancel();
    },
  };
}
