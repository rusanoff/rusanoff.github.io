import { defineConfig, buildPluginHtml } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const htmlPluginConfig = {
  minify: true,
  entry: '../src/scripts/main.ts',
  template: './public/index.html',
};

export default defineConfig({
  build: {
    outDir: 'docs',
  },
  plugins: [
    createHtmlPlugin(htmlPluginConfig),
  ],
  publicDir: './public',
});
