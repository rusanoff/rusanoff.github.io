import { resolve } from 'path';

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

import type { UserConfig } from 'vite';

const htmlPluginConfig = {
  minify: true,
  entry: './scripts/main.ts',
  template: './index.html',
};

export const defaultConfig: UserConfig = {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  plugins: [createHtmlPlugin(htmlPluginConfig)],
  publicDir: '../public',
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: Number(process.env.OUTER_PORT_FRONTEND),
    },
    port: Number(process.env.INNER_PORT_FRONTEND),
  },
};

export default defineConfig(defaultConfig);
