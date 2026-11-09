function gutterPoint(scroll, direction) {
  const rect = scroll.getBoundingClientRect();
  const x = rect.left + scroll.clientLeft + (direction < 0 ? 8 : scroll.clientWidth - 8);
  const y = rect.top + scroll.clientTop + scroll.clientHeight / 2;
  const target = scroll.ownerDocument.elementFromPoint?.(x, y) || scroll;
  return { target, clientX: x, clientY: y };
}

function pointer(target, type, options) {
  const view = target.ownerDocument.defaultView;
  const event = view.PointerEvent
    ? new view.PointerEvent(type, { ...options, pointerId: 1, pointerType: 'mouse', isPrimary: true })
    : Object.assign(new view.MouseEvent(type, options), { pointerId: 1, pointerType: 'mouse', isPrimary: true });
  target.dispatchEvent(event);
}

export function clickPageGutter(scroll, direction, detail = 1) {
  const { target, ...point } = gutterPoint(scroll, direction);
  const options = { ...point, bubbles: true, cancelable: true, button: 0 };
  pointer(target, 'pointerdown', { ...options, buttons: 1 });
  pointer(target, 'pointerup', options);
  target.dispatchEvent(new target.ownerDocument.defaultView.MouseEvent('click', { ...options, detail }));
}

export function hoverPageGutter(scroll, direction) {
  const { target, ...point } = gutterPoint(scroll, direction);
  pointer(target, 'pointermove', { ...point, bubbles: true });
}
