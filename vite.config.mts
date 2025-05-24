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
    base: '/',
    css: {
      devSourcemap: true,
    },
    build: {
      cssCodeSplit: true,
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          404: path.resolve(__dirname, '404.html'),
        },
        output: {
          assetFileNames: () => {
            return 'assets/[name].[hash].[ext]';
          },
        },
      },
    },
    publicDir: path.resolve(__dirname, 'public'),
    plugins: [
      HashPublicIcons({
        hashFunction: getFileNameWithCommonHash,
      }),
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
        workbox: {
          navigateFallback: null,
          navigateFallbackDenylist: [/^\/404.html$/],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
              },
            },
            {
              urlPattern: /\.(?:js|css)$/i,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-resources',
              },
            },
            {
              urlPattern: /^https:\/\/rusanoff\.github\.io\/(?!404\.html).*/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'pages-cache',
                networkTimeoutSeconds: 3,
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 60 * 60 * 24,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
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
        pages: [
          {
            filename: 'index',
            template: './index.html',
            entry: './src/app/main.mts',
            injectOptions: {
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
          },
          {
            filename: '404',
            template: './404.html',
            entry: './src/app/404.mts',
            injectOptions: {
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
          },
        ],
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
