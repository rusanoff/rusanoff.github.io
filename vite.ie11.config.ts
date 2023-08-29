import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

import { defaultConfig } from './vite.config';

export default defineConfig({
  ...defaultConfig,
  plugins: [
    ...(defaultConfig.plugins || []),
    legacy({
      targets: ['defaults', 'dead'],
      polyfills: false,
    }),
  ],
});
