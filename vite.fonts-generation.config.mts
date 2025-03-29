import FontsPlugin from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';

import { getDefaultConfig } from './vite.config.mts';

const defaultConfig = getDefaultConfig();

export default defineConfig({
  ...defaultConfig,
  plugins: [
    ...(defaultConfig.plugins || []),
    FontsPlugin({
      custom: {
        families: [
          {
            name: 'Oswald Variable',
            local: 'Oswald',
            src: './app/assets/fonts/Oswald/*.ttf',
            transform: (font) => {
              // Нужно для установки корректного веса вариативного шрифта
              font.weight = '100 900' as unknown as number;

              return font;
            },
          },
          {
            name: 'Oswald',
            local: 'Oswald',
            src: './app/assets/fonts/Oswald/static/*.*',
            transform: (font) => {
              return font;
            },
          },
          {
            name: 'Inter Tight Variable',
            local: 'Inter Tight',
            src: './app/assets/fonts/Inter_Tight/*.ttf',
            transform: (font) => {
              if (font.basename.toLowerCase().includes('italic')) {
                font.style = 'italic';
              } else {
                font.style = 'normal';
              }

              // Нужно для установки корректного веса вариативного шрифта
              font.weight = '100 900' as unknown as number;

              return font;
            },
          },
          {
            name: 'Inter Tight',
            local: 'Inter Tight',
            src: './app/assets/fonts/Inter_Tight/static/*.*',
            transform: (font) => {
              if (font.basename.toLowerCase().includes('italic')) {
                font.style = 'italic';
              } else {
                font.style = 'normal';
              }

              return font;
            },
          },
        ],
        preload: true,
        display: 'swap',
      },
    }),
  ],
});
