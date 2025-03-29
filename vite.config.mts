import path from 'path';

import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin as HtmlPlugin } from 'vite-plugin-html';
import type { UserConfig } from 'vite';

import { getHashedFileName } from './utils/getHashedFileName';
import { HashPublicIcons } from './vite.HashPublicIcons.plugin.mjs';

export const getDefaultConfig = (): UserConfig => {
  const getFileNameWithCommonHash = getHashedFileName();
  const IS_DEV = process.env.NODE_ENV === 'development';

  return {
    base: process.env.BASE_URL || '/',
    css: {
      devSourcemap: true,
    },
    build: {
      cssCodeSplit: false,
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
    publicDir: path.resolve(__dirname, 'public'),
    plugins: [
      HashPublicIcons(),
      VitePWA({
        base: '/',
        includeAssets: [
          'favicon.svg',
        ],
        registerType: 'autoUpdate',
        strategies: 'generateSW',
        minify: !IS_DEV,
        manifest: {
          name: 'Rusanoff | Frontend Example',
          short_name: 'rusanoff',
          description: 'Frontend development example by Andrew Rusanov',
          icons: [
            {
              src: IS_DEV ? '/icons/icon-192x192.png' : `/icons/${getFileNameWithCommonHash(path.resolve(__dirname, 'public', 'icons', 'icon-192x192.png'))}`,
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: IS_DEV ? '/icons/icon-512x512.png' : `/icons/${getFileNameWithCommonHash(path.resolve(__dirname, 'public', 'icons', 'icon-512x512.png'))}`,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
          start_url: '/',
          id: '/',
          orientation: 'portrait',
          display: 'standalone',
          display_override: [],
          background_color: '#070707',
          theme_color: '#070707',
          shortcuts: [],
          screenshots: [],
        },
        devOptions: {
          enabled: false,
          resolveTempFolder: () => {
            return path.resolve(__dirname, 'dev-dist');
          },
        },
      }),
      HtmlPlugin({
        minify: !IS_DEV,
        entry: 'src/app/main.mts',
        inject: {
          data: {
            iconHash: new Date()
              .getTime()
              .toString(36),
            iOsIconName: IS_DEV
              ? '/icons/apple-touch-icon.png'
              : getFileNameWithCommonHash(
                path.resolve(__dirname, 'public', 'icons', 'apple-touch-icon.png'),
              ),
          },
        },
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: Number(process.env.VITE_DEV_SERVER_PORT),
      ...(process.env.VITE_DEV_SERVER_PROTOCOL === 'https' ? {
        https: {
          cert: './certs/localhost-cert.pem',
          key: './certs/localhost-key.pem',
        },
      } : {}),
    },
  };
};

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return getDefaultConfig();
});
