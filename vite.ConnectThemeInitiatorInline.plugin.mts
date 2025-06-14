import type { Plugin } from 'vite';

/**
 * Vite плагин, который подключает скрипт с определением темы в HTML инлайново,
 * чтобы он был доступен во время загрузки страницы
 */
export const ConnectThemeInitiatorInline = (): Plugin => {
  return {
    name: 'ConnectThemeInitiatorInline',
    enforce: 'post',
    transformIndexHtml: {
      handler(html, { bundle }) {
        if (!bundle) {
          return html.replace(
            /<\/head>/,
            '<script src="./src/app/theme.mts"></script>\n</head>',
          );
        }

        const themeChunk = Object.values(bundle).find((chunk) => {
          return chunk.type === 'chunk' && chunk.isEntry && chunk.fileName.includes('theme');
        });

        if (!themeChunk) {
          return html;
        }

        return html.replace(
          /<\/head>/,
          `<script>\n${(themeChunk as { code: string }).code}\n</script>\n</head>`,
        );
      },
    },
  };
};
