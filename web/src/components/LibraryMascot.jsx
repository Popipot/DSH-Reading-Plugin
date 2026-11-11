import React from 'react';

const sprites = {
  welcome: '01-welcome',
  reading: '02-reading',
  search: '03-search',
  note: '04-note',
  celebrate: '05-celebrate',
  sleep: '06-sleep',
};

export function LibraryMascot({ pose, size = 64 }) {
  return (
    <img
      className="dshr-library-mascot"
      data-mascot={pose}
      src={`/dsh-reader-assets/mascot/${sprites[pose]}.webp`}
      alt=""
      width={size}
      height={size}
      decoding="async"
      onError={event => { event.currentTarget.hidden = true; }}
    />
  );
}
