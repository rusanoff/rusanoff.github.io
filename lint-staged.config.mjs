/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Config}
 */
export default {
  '*.{js,jsx,ts,tsx}': 'eslint ./ --max-warnings=0 --cache',
  '*.{css,scss}': 'stylelint "./src/**/*.{css,scss}" --max-warnings=0 --cache',
  '*.svg': 'npx svgo ./src/**/*.svg && npx svgo ./public/**/*.svg',
};
