import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';const prerender = require('@prerenderer/rollup-plugin');
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer');
export default defineConfig(({mode}) => {  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      mode === 'production' && prerender({
        staticDir: path.join(__dirname, 'dist'),
        renderer: new PuppeteerRenderer(),
        routes: [
          '/', 
          '/biografia', 
          '/orientacoes', 
          '/pos-perda-ponderal',
          '/procedimento/rinoplastia',
          '/procedimento/blefaroplastia',
          '/procedimento/lifting-facial',
          '/procedimento/tratamento-de-flacidez-e-gordura-no-submento-(papada)',
          '/procedimento/mamoplastia-de-aumento',
          '/procedimento/mamoplastia-redutora',
          '/procedimento/mastopexia',
          '/procedimento/lipoaspiracao',
          '/procedimento/abdominoplastia',
          '/procedimento/ninfoplastia'
        ]
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
