import globals from 'globals';
import typeScriptParser from '@typescript-eslint/parser';
import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
// FIXME: Включить ESLint для html файлов, когда WebStorm будет поддерживать flat config
// FIXME: Пока не работает для нового варианта конфигурации ESLint
// import importPlugin from 'eslint-plugin-import';

import eslintRules from './eslint-rules.config.js';
import typescriptRules from './eslint-typescript-rules.config.js';
// eslint-disable-next-line capitalized-comments
// import importRules from './eslint-import-rules.config.js';

export default [
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      'public/*',
      '.github/*',
      '.husky/*',
      '*.d.ts',
    ],
  },
  {
    files: [
      '**/*.js',
      '**/*.*.js',
      '**/*.ts',
      '**/*.*.ts',
    ],
    plugins: {
      // Плагин с наборами правил для TypeScript
      '@typescript-eslint': typeScriptEslintPlugin,
      // Плагин для импортов
      // 'import': importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        myCustomGlobal: 'readonly',
      },
      parser: typeScriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: '.',
        project: ['tsconfig.json'],
      },
    },
    rules: {
      ...eslintRules.rules,
      ...typescriptRules.rules,
      // ...importRules.rules,
    },
  },
  {
    files: ['*.config.js', '*.config.ts'],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      // 'import/no-default-export': 'off',
      // 'import/no-unresolved': 'off',
      // 'import/no-anonymous-default-export': 'off',
    },
  },
];
