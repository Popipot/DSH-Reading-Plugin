import React from 'react';

/**
 * Small stroke icon set. Keeping these local avoids adding the whole DSH icon
 * package as a client dependency and keeps the reader visually self-contained.
 */
function Icon({ size = 18, children, viewBox = '0 0 24 24', fill = 'none', strokeWidth = 1.7, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconBook(props) {
  return (
    <Icon {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      <path d="M8 7h8M8 10.5h5" />
    </Icon>
  );
}

export function IconBookOpen(props) {
  return (
    <Icon {...props}>
      <path d="M12 6.5C10.6 5.2 8.7 4.6 6.5 4.6H3v13h3.9c2 0 3.8.6 5.1 1.8 1.3-1.2 3.1-1.8 5.1-1.8H21v-13h-3.5c-2.2 0-4.1.6-5.5 1.9Z" />
      <path d="M12 6.5v12.9" />
    </Icon>
  );
}

export function IconArrowLeft(props) {
  return (
    <Icon {...props}><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></Icon>
  );
}

export function IconUpload(props) {
  return (
    <Icon {...props}>
      <path d="M12 16V4" /><path d="m7 9 5-5 5 5" />
      <path d="M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15" />
    </Icon>
  );
}

export function IconSearch(props) {
  return (
    <Icon {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" /></Icon>
  );
}

export function IconSparkles(props) {
  return (
    <Icon {...props}>
      <path d="m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      <path d="m5 13 .7 1.8L7.5 15.5l-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13Z" />
    </Icon>
  );
}

export function IconTranslate(props) {
  return (
    <Icon {...props}>
      <path d="M4 5h8M8 3v2c0 4.2-1.8 7.2-5 9" />
      <path d="M5 10c1.8 2.2 4 3.6 6.8 4.4" />
      <path d="m13 20 3.6-9L20 20" />
      <path d="M14.6 16.8h4.8" />
    </Icon>
  );
}

export function IconX(props) {
  return (
    <Icon {...props}><path d="m6 6 12 12M18 6 6 18" /></Icon>
  );
}

export function IconChevronLeft(props) {
  return <Icon {...props}><path d="m15 18-6-6 6-6" /></Icon>;
}

export function IconChevronRight(props) {
  return <Icon {...props}><path d="m9 18 6-6-6-6" /></Icon>;
}

export function IconChevronDown(props) {
  return <Icon {...props}><path d="m6 9 6 6 6-6" /></Icon>;
}

export function IconList(props) {
  return (
    <Icon {...props}>
      <path d="M8 6h12M8 12h12M8 18h12" /><path d="M4 6h.01M4 12h.01M4 18h.01" />
    </Icon>
  );
}

export function IconSettings(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </Icon>
  );
}

export function IconTrash(props) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M9 7V5h6v2M7 7l.7 12.2A1.8 1.8 0 0 0 9.5 21h5a1.8 1.8 0 0 0 1.8-1.8L17 7" />
      <path d="M10 11v6M14 11v6" />
    </Icon>
  );
}

export function IconCopy(props) {
  return (
    <Icon {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5" />
    </Icon>
  );
}

export function IconPlus(props) {
  return <Icon {...props}><path d="M12 5v14M5 12h14" /></Icon>;
}

export function IconMinus(props) {
  return <Icon {...props}><path d="M5 12h14" /></Icon>;
}

export function IconRotate(props) {
  return (
    <Icon {...props}>
      <path d="M20 11a8 8 0 1 0-2.3 6.3" /><path d="M20 4v7h-7" />
    </Icon>
  );
}

export function IconExternal(props) {
  return (
    <Icon {...props}>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </Icon>
  );
}

export function IconGoogle({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M22.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.94a5.08 5.08 0 0 1-2.2 3.33v2.77h3.56c2.08-1.92 3.3-4.74 3.3-8.11Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.97 10.97 0 0 0 12 1 11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z" />
    </svg>
  );
}

export function IconGoogleScholar({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 3 1.5 8.5 12 14l8.6-4.5v6.2h1.9V8.5L12 3Z" opacity=".9" />
      <path fill="currentColor" d="M6.2 11.4v4.1c0 2.2 2.6 4 5.8 4s5.8-1.8 5.8-4v-4.1L12 14.4l-5.8-3Z" opacity=".65" />
    </svg>
  );
}

export function IconSun(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3.6" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Icon>
  );
}

export function IconMoon(props) {
  return <Icon {...props}><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" /></Icon>;
}

export function IconCheck(props) {
  return <Icon {...props}><path d="m5 12 4.5 4.5L19 7" /></Icon>;
}

export function IconWand(props) {
  return (
    <Icon {...props}>
      <path d="m15 4 1 2.2L18.2 7 16 8 15 10.2 14 8l-2.2-1L14 6.2 15 4Z" />
      <path d="m5 19 8.5-8.5" />
      <path d="m4 14 6 6" />
    </Icon>
  );
}

export function IconTag(props) {
  return (
    <Icon {...props}>
      <path d="M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </Icon>
  );
}

export function IconHighlighter(props) {
  return (
    <Icon {...props}>
      <path d="m14 4 6 6-9.5 9.5H5v-5L14 4Z" />
      <path d="M12 21h9" />
      <path d="M14 6.5 17.5 10" />
    </Icon>
  );
}

export function IconNote(props) {
  return (
    <Icon {...props}>
      <path d="M5 3.5h11l3 3V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M15.5 3.5V7H19" />
      <path d="M8 11h8M8 15h5" />
    </Icon>
  );
}

export function IconPalette(props) {
  return (
    <Icon {...props}>
      <path d="M12 3a9 9 0 1 0 0 18h1.2a1.8 1.8 0 0 0 1.3-3l-.6-.7a1.6 1.6 0 0 1 1.2-2.7h1.6A4.3 4.3 0 0 0 21 10.3 7.7 7.7 0 0 0 12 3Z" />
      <circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7.2" r="1" /><circle cx="15" cy="7.2" r="1" /><circle cx="17" cy="11" r="1" />
    </Icon>
  );
}

export function IconMaximize(props) {
  return (
    <Icon {...props}>
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
    </Icon>
  );
}

export function IconMinimize(props) {
  return (
    <Icon {...props}>
      <path d="M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5" />
    </Icon>
  );
}

export function IconDownload(props) {
  return (
    <Icon {...props}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 18v2h16v-2" />
    </Icon>
  );
}

export function IconLink(props) {
  return (
    <Icon {...props}>
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
    </Icon>
  );
}

export function IconEye(props) {
  return (
    <Icon {...props}>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

export function IconEyeOff(props) {
  return (
    <Icon {...props}>
      <path d="m3 3 18 18" />
      <path d="M10.6 6.1A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a16.5 16.5 0 0 1-3.2 3.7" />
      <path d="M6.2 6.7C3.9 8.4 2.5 12 2.5 12S6 18 12 18c1.3 0 2.5-.3 3.5-.8" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </Icon>
  );
}
