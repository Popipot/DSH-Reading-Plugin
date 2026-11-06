import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerAssetRoutes } from './assets.js';
import { registerAiRoutes } from './ai.js';
import { registerImportRoutes } from './import-source.js';

export const name = 'dsh-reader';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Server half of dsh-reader.
 *
 * Reading and document parsing are entirely browser-side. The Host only:
 *  - serves the lazy PDF.js bundle/worker/cMaps/fonts;
 *  - proxies explicit translation and AI questions to the DSH default model;
 *  - proxies allow-listed public-domain / open-access book downloads (no
 *    general web proxy and no shadow-library sources).
 *
 * The plugin deliberately declares no hard service dependency, so a profile
 * without a Web server or without a configured model still loads (the client
 * UI remains usable for reading; AI routes answer 503).
 */
export function apply(ctx) {
  ctx.inject(['webServer'], (webCtx) => {
    webCtx.effect(() => {
      const disposeAssets = registerAssetRoutes(webCtx.webServer, packageRoot);
      const disposeAi = registerAiRoutes(webCtx.webServer, ctx);
      const disposeImport = registerImportRoutes(webCtx.webServer);
      return () => {
        disposeAssets();
        disposeAi();
        disposeImport();
      };
    }, 'dsh-reader: routes');
  });
}
