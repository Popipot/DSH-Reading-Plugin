# dsh-reader feature contracts (v2)

Extends the reader into a personal library with appearance controls and annotations.
Existing v1 contracts still hold unless changed here.

## Owned paths

| Owner | Paths |
| --- | --- |
| Lead | `web/src/storage.js`, `web/src/app.jsx`, `web/src/components/**` (except new appearance/annotation components), `web/src/styles.js`, `web/src/index.jsx`, `lib/**`, tests, build/install |
| Appearance engine | `web/src/appearance/**` |
| Annotation engine | `web/src/annotations/**`, `tests/annotations-*.test.mjs` |

Do not edit another owner's paths. `dist/**` and `client/**` are generated.

## Persisted settings (localStorage `dsh-reader:settings:v1`; v1 keys remain readable)

```js
{
  // v1
  autoTranslate: true,
  fontSize: 18,
  lineHeight: 1.85,
  showToc: true,
  aiOpen: false,
  theme: 'auto',

  // v2 appearance
  fontFamily: 'serif',          // 'serif' | 'sans' | 'kai' | 'system'
  fontWeight: 400,              // 400 | 500 | 600
  sideMargin: 28,               // 0..120 CSS px each side
  contentWidth: 760,            // 520..980 CSS px
  backgroundPreset: 'paper',    // 'paper' | 'white' | 'sepia' | 'green' | 'night' | 'custom'
  customBackground: '#fbf7ee',  // used when preset === 'custom'
  textTone: 'auto',             // 'auto' | 'dark' | 'light'
  backgroundImageKey: '',       // IndexedDB asset key, not an object URL
  backgroundImageOpacity: 0.26, // 0..0.8
  backgroundImageBlur: 0,       // 0..12 px
  annotationPanelOpen: false
}
```

Background image files live in IndexedDB `assets` store (`key: 'reader-background'`) as a Blob.
The Lead creates/revokes the object URL; the appearance engine only receives `backgroundImageUrl`.

## Appearance engine API

`web/src/appearance/appearance.js` exports:

```js
export const FONT_FAMILIES = [{ id:'serif', label:'宋体 / Serif' }, ...]
export const FONT_WEIGHTS = [{ value:400, label:'常规' }, { value:500, label:'中等' }, { value:600, label:'加粗' }]
export const BACKGROUND_PRESETS = [
  { id:'paper', label:'纸张', bg:'#fbf7ee', ink:'#2b2a26', muted:'#736f64', accent:'#9a6b2f' },
  { id:'white', label:'白色', ... },
  { id:'sepia', label:'羊皮纸', ... },
  { id:'green', label:'护眼绿', ... },
  { id:'night', label:'夜间', ... },
  { id:'custom', label:'自定义' },
]
export function autoInk(bgColor): { ink, muted, border }
export function resolveAppearance(settings): {
  preset, bg, ink, muted, border, accent,
  fontFamily, fontWeight, headingWeight,
  width, margin, imageOpacity, imageBlur
}
export function appearanceVars(settings, backgroundImageUrl): Record<string,string>
```

`appearanceVars` keys (used by the Lead on `.dshr-root` style):
`--dshr-reader-bg`, `--dshr-reader-ink`, `--dshr-reader-muted`, `--dshr-reader-border`,
`--dshr-reader-accent`, `--dshr-reader-font`, `--dshr-reader-weight`,
`--dshr-reader-heading-weight`, `--dshr-reader-width`, `--dshr-reader-margin`,
`--dshr-reader-image-opacity`, `--dshr-reader-image-blur`, `--dshr-reader-image`.

`web/src/appearance/AppearancePanel.jsx` exports `AppearancePanel` with props:

```js
{
  open: boolean,
  settings: object,
  backgroundImageUrl: string,
  onChange: (nextSettings) => void, // full replacement, Lead persists
  onPickBackgroundImage: () => void,
  onClearBackgroundImage: () => void,
  onClose: () => void,
}
```

It must include: live preview, presets, custom color, font family, weight, size, line height,
side margin, reading width, background image opacity/blur, reset. Use classes prefixed
`dshr-appearance-` and export `appearanceStyles` CSS string from `AppearancePanel.jsx` (or a
separate `styles.js` inside the folder) for the Lead to inject after `styles` and `pdfStyles`.

`web/src/appearance/appearance.css.js` (or exported `appearanceStyles`) must style the
existing reader classes using the variables:

- `.dshr-content` — page background and optional image layer.
- `.dshr-content__inner` — width `min(var(--dshr-reader-width), calc(100% - var(--dshr-reader-margin) * 2))`.
- `.dshr-block` — font family/weight.
- `.dshr-block[data-kind="heading"] :is(h1,h2,h3,h4,h5,h6)` — heading weight.
- `.dshr-pdf-content` — horizontal padding `calc(16px + var(--dshr-reader-margin) * .55)` so PDF fit-width respects side margins.
- `.dshr-pdf-scroll` — page background.
- Preserve readability for dark/night backgrounds and background images; the page text must use `--dshr-reader-ink`.

## Annotation engine API

`web/src/annotations/model.js` exports:

```js
export const HIGHLIGHT_COLORS = [{id:'yellow',label:'黄',value:'#f5d76e'}, ...]
export const HIGHLIGHT_WIDTHS = [{id:'thin',label:'细',value:4}, {id:'medium',label:'中',value:9}, {id:'wide',label:'宽',value:16}]
export const UNDERLINE_COLORS = [...]
export function blockTextOffset(root, node, offset): number
export function rangeFromOffsets(root, start, end): Range | null
export function selectionRangeText(root, range): {start,end,text} | null
export function collectFlowSelection(container, selection): {
  text, rect, ranges: [{ blockId, start, end, text }]
} | null
export function normalizedRectsForSelection(range, pageElement): {x,y,w,h}[] // 0..1
export function createAnnotation(bookId, payload): Annotation
```

Annotation shape:

```js
{
  id: string,
  bookId: string,
  kind: 'flow' | 'pdf',
  style: 'highlight' | 'underline' | 'note',
  color: string,        // hex
  width: number,        // highlight band width in CSS px (4/9/16)
  note: string,
  quote: string,
  createdAt: number,
  updatedAt: number,
  // flow
  chapterId?: string,
  chapterIndex?: number,
  ranges?: [{ blockId, start, end, text }],
  // pdf
  page?: number,
  rects?: [{x,y,w,h}], // normalized to page frame
}
```

`FlowAnnotationLayer.jsx` exports:

```js
export function FlowAnnotationLayer({ containerRef, annotations, chapterId, onOpenAnnotation, layoutVersion })
```

It renders an absolutely positioned, pointer-transparent layer inside `.dshr-content`; for each flow
annotation in the current chapter it resolves `[data-anno-block] .dshr-block__body` ranges and draws
highlight bands / underlines / note buttons. Note buttons alone receive pointer events and call
`onOpenAnnotation(id)`. It must recompute after container resize, font/appearance changes
(`layoutVersion`), translation insertion, and chapter changes. If a stored range no longer matches, fall
back to locating `annotation.quote` inside the block text and clamp the range; never throw.

`PdfAnnotationLayer.jsx` exports:

```js
export function PdfAnnotationLayer({ annotations, onOpenAnnotation })
```

Rendered inside `.dshr-pdf-frame`; draws normalized rects as absolutely positioned percentages.
Note buttons get pointer events.

`AnnotationComposer.jsx` exports:

```js
export function AnnotationComposer({ open, draft, mode, onClose, onSave, onDelete })
```

Draft shape: `{ style, color, width, note, quote, ...annotationFields }`. It must let the user switch
between highlight/underline/note, choose highlight color and width, underline color, and enter a note.
`onSave(draft)` receives the edited draft. `mode === 'edit'` shows delete.

`AnnotationsPanel.jsx` exports:

```js
export function AnnotationsPanel({ open, annotations, book, onClose, onOpenAnnotation, onJump, onDelete })
```

Lists annotations for the whole book (grouped by chapter/page), shows color/style/quote/note/location,
and supports jump and delete. Empty state explains how to select text and add a mark.

All annotation components use classes prefixed `dshr-anno-` and can export their own CSS string from
`web/src/annotations/styles.js` for the Lead to inject.

## Integration rules (Lead)

- `FlowReader` adds `data-anno-block={block.id}` and wraps the original block in
  `.dshr-block__body`, keeping `.dshr-translation` outside that body.
- `FlowReader` reports selection with `flowRanges`; `App` opens the composer and persists annotations.
- `PdfViewer` extends `onSelection` payload with `pageRects` (normalized) and accepts
  `annotationsByPage`, `onOpenAnnotation`, `focusAnnotation`. This is Lead-owned integration;
  the annotation engine only supplies the layer and math.
- Storage: DB v2 adds `annotations` and `assets` stores. Annotations are deleted with their book.
- Topbar gets an annotations button and an appearance (Aa) button; both open side panels/dialogs.
- Library gets category tabs, type badges, auto-organize, and manual type cycling.
