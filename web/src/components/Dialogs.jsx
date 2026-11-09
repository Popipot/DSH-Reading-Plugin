import React from 'react';
import { IconX, IconMinus, IconPlus, IconTrash, IconPalette } from './icons.jsx';

export function SettingsDialog({ settings, onChange, onClose, onClearLibrary, onOpenAppearance }) {
  const [confirmClear, setConfirmClear] = React.useState(false);
  React.useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const set = (patch) => onChange({ ...settings, ...patch });

  return (
    <div className="dshr-modal-mask" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="dshr-modal" role="dialog" aria-modal="true" aria-label="阅读设置">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <h3>阅读设置</h3>
            <p>设置只保存在本机，不影响 DSH 的其它插件。</p>
          </div>
          <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--ghost" onClick={onClose} aria-label="关闭设置"><IconX size={16} /></button>
        </div>

        <div className="dshr-settings-row">
          <div>
            <div className="dshr-settings-row__title">字体、背景与布局</div>
            <div className="dshr-settings-row__hint">字体、字重、字号、行距、阅读宽度、目录宽度、亮度、背景颜色与自定义背景图片。</div>
          </div>
          <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--outline" onClick={onOpenAppearance}>
            <IconPalette size={14} /> 打开外观面板
          </button>
        </div>

        <div className="dshr-settings-row">
          <div>
            <div className="dshr-settings-row__title">实时对照翻译</div>
            <div className="dshr-settings-row__hint">滚动到外文段落后自动翻译成中文，译文显示在原文下方。</div>
          </div>
          <button
            type="button"
            className="dshr-switch"
            role="switch"
            aria-checked={settings.autoTranslate}
            onClick={() => set({ autoTranslate: !settings.autoTranslate })}
          >
            <span className="dshr-switch__track" />
            {settings.autoTranslate ? '开启' : '关闭'}
          </button>
        </div>

        <div className="dshr-settings-row">
          <div>
            <div className="dshr-settings-row__title">正文字号</div>
            <div className="dshr-settings-row__hint">{settings.fontSize}px · 适合长篇阅读的字号</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--outline" onClick={() => set({ fontSize: Math.max(14, settings.fontSize - 1) })} aria-label="减小字号"><IconMinus size={15} /></button>
            <span className="dshr-chip" style={{ minWidth: 46, justifyContent: 'center' }}>{settings.fontSize}px</span>
            <button type="button" className="dshr-btn dshr-btn--icon dshr-btn--outline" onClick={() => set({ fontSize: Math.min(26, settings.fontSize + 1) })} aria-label="增大字号"><IconPlus size={15} /></button>
          </div>
        </div>

        <div className="dshr-settings-row">
          <div>
            <div className="dshr-settings-row__title">行距</div>
            <div className="dshr-settings-row__hint">当前 {settings.lineHeight.toFixed(2)}</div>
          </div>
          <input
            type="range"
            min="1.45"
            max="2.2"
            step="0.05"
            value={settings.lineHeight}
            onChange={(event) => set({ lineHeight: Number(event.target.value) })}
            aria-label="行距"
          />
        </div>

        <div className="dshr-settings-row">
          <div>
            <div className="dshr-settings-row__title">翻译与 AI</div>
            <div className="dshr-settings-row__hint">使用 DSH 当前默认模型；翻译只发送当前段落或选中文字，不发送整本书。</div>
          </div>
          <span className="dshr-chip dshr-chip--brand">DSH 默认模型</span>
        </div>

        <div className="dshr-settings-row dshr-settings-row--danger">
          <div>
            <div className="dshr-settings-row__title">清空本地书架</div>
            <div className="dshr-settings-row__hint">删除已导入的所有文档、书单、批注和阅读进度。已保存的证据保留并标为原文缺失。</div>
          </div>
          {confirmClear ? (
            <div style={{ display: 'flex', gap: 6 }}>
              <button type="button" className="dshr-btn dshr-btn--sm" onClick={() => setConfirmClear(false)}>取消</button>
              <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--danger" onClick={() => { onClearLibrary(); setConfirmClear(false); }}>
                <IconTrash size={13} /> 确认清空
              </button>
            </div>
          ) : (
            <button type="button" className="dshr-btn dshr-btn--sm dshr-btn--danger" onClick={() => setConfirmClear(true)}>
              <IconTrash size={13} /> 清空
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ConfirmDeleteDialog({ book, onCancel, onConfirm }) {
  const [confirmEvidence, setConfirmEvidence] = React.useState(false);
  const hasEvidence = book?.evidenceCount > 0;
  React.useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);
  return (
    <div className="dshr-modal-mask" onMouseDown={(event) => { if (event.target === event.currentTarget) onCancel(); }}>
      <div className="dshr-modal" role="dialog" aria-modal="true" aria-label="删除文档">
        <h3>从书架删除？</h3>
        <p>《{book?.title || '未命名文档'}》及其阅读进度会从本机删除。原始文件不受影响。</p>
        {hasEvidence ? <p>关联了 {book.evidenceCount} 条证据。保留后可查看和导出，原文会标记为缺失。</p> : null}
        <div className="dshr-modal__actions">
          <button type="button" className="dshr-btn" onClick={onCancel}>取消</button>
          {hasEvidence ? <>
            <button type="button" className="dshr-btn" onClick={() => onConfirm(false)}>删除原文并保留证据</button>
            <button type="button" className="dshr-btn dshr-btn--danger"
              onClick={() => confirmEvidence ? onConfirm(true) : setConfirmEvidence(true)}>
              {confirmEvidence ? '确认同时删除证据' : '一并删除证据'}
            </button>
          </> : <button type="button" className="dshr-btn dshr-btn--danger" onClick={() => onConfirm(false)}><IconTrash size={14} /> 删除</button>}
        </div>
      </div>
    </div>
  );
}

export function Toast({ message }) {
  if (!message) return null;
  return <div className="dshr-toast" role="status">{message}</div>;
}
