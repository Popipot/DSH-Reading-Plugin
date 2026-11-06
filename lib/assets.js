import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROUTE_PREFIX = '/dsh-reader-assets';
const PREFIX = `${ROUTE_PREFIX}/`;

const TYPES = new Map(Object.entries({
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.cjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.bcmap': 'application/octet-stream',
  '.pfb': 'application/octet-stream',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.map': 'application/json; charset=utf-8',
}));

function sendJson(res, status, value) {
  const body = JSON.stringify(value);
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.setHeader('x-content-type-options', 'nosniff');
  res.end(body);
}

/**
 * Register the lazy PDF.js assets. The client bundle only references this
 * prefix, and the files are produced by scripts/build-pdf.mjs.
 *
 * @param {{ register: Function }} webServer
 * @param {string} packageRoot
 */
export function registerAssetRoutes(webServer, packageRoot) {
  const assetsRoot = path.resolve(packageRoot, 'dist/reader-assets');
  const cache = new Map();

  const dispose = webServer.register({
    kind: 'prefix',
    path: ROUTE_PREFIX,
    handler: async (req, res) => {
      try {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.statusCode = 405;
          res.setHeader('allow', 'GET, HEAD');
          res.end('Method Not Allowed');
          return;
        }
        const url = new URL(req.url ?? '/', 'http://reader.invalid');
        if (!url.pathname.startsWith(PREFIX)) {
          sendJson(res, 404, { error: 'Not found' });
          return;
        }
        let relative;
        try {
          relative = decodeURIComponent(url.pathname.slice(PREFIX.length));
        } catch {
          sendJson(res, 400, { error: 'Bad path' });
          return;
        }
        relative = relative.replace(/\\/gu, '/');
        if (!relative || relative.endsWith('/') || relative.split('/').some((part) => part === '..' || part === '.' || part === '')) {
          sendJson(res, 404, { error: 'Not found' });
          return;
        }
        const target = path.resolve(assetsRoot, relative);
        if (!target.startsWith(`${assetsRoot}${path.sep}`)) {
          sendJson(res, 403, { error: 'Forbidden' });
          return;
        }
        let info;
        try {
          info = await stat(target);
        } catch {
          sendJson(res, 404, { error: 'Not found' });
          return;
        }
        if (!info.isFile()) {
          sendJson(res, 404, { error: 'Not found' });
          return;
        }
        const etag = `"${info.size.toString(16)}-${Math.floor(info.mtimeMs).toString(16)}"`;
        res.setHeader('etag', etag);
        // A linked plugin can rebuild in place. Revalidate executable assets so
        // a cached engine is never paired with a different worker/client build.
        const executable = /\.(?:m?js|cjs)$/iu.test(target);
        res.setHeader('cache-control', executable ? 'no-cache' : 'public, max-age=3600');
        res.setHeader('x-content-type-options', 'nosniff');
        res.setHeader('cross-origin-resource-policy', 'same-origin');
        if (req.headers['if-none-match'] === etag) {
          res.statusCode = 304;
          res.end();
          return;
        }
        const type = TYPES.get(path.extname(target).toLowerCase()) ?? 'application/octet-stream';
        res.setHeader('content-type', type);
        res.setHeader('content-length', String(info.size));
        if (req.method === 'HEAD') {
          res.statusCode = 200;
          res.end();
          return;
        }
        const cacheKey = `${target}:${info.size}:${info.mtimeMs}`;
        let body = cache.get(cacheKey);
        if (!body) {
          body = await readFile(target);
          // Small files (cmaps, fonts) are read repeatedly by pdf.js; caching
          // them avoids disk churn. The main bundle and worker are large and
          // are left to the OS page cache.
          if (body.length <= 512 * 1024) {
            if (cache.size > 256) cache.clear();
            cache.set(cacheKey, body);
          }
        }
        res.statusCode = 200;
        res.end(body);
      } catch (error) {
        if (!res.headersSent) sendJson(res, 500, { error: 'Asset read failed' });
        else {
          try { res.destroy(); } catch { /* socket already gone */ }
        }
        console.warn('[dsh-reader] asset error:', error?.message || error);
      }
    },
  });
  return dispose;
}

export { PREFIX as ASSET_PREFIX };
