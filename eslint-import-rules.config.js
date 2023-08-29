module.exports = {
  rules: {
    // region Helpful warnings

    // Предупреждать об использовании устаревшего имени (JSDoc с тегом @deprecated или TomDoc Deprecated:)
    'import/no-deprecated': 'warn',

    // Отключить проверку на использование пустых именованных блоков импорта
    'import/no-empty-named-blocks': 'off',

    // Предупреждать об импортах из пакетов, которых нет в package.json
    'import/no-extraneous-dependencies': 'warn',

    // Запретить использование изменяемого экспорта с `var` или `let`
    'import/no-mutable-exports': 'error',

    // Предупреждать о неиспользуемых модулях
    'import/no-unused-modules': [
      'warn',
      {
        unusedExports: true,
      },
    ],

    // endregion Helpful warnings

    // region Static analysis

    // Запретить абсолютные пути в импортах
    'import/no-absolute-path': 'error',

    // Запретить цикличные зависимости в модулях
    'import/no-cycle': 'error',

    // Запретить динамические имена в `require()`
    'import/no-dynamic-require': 'error',

    // Отключить проверку на импорт подмодулей других модулей
    'import/no-internal-modules': 'off',

    // Запретить импорт пакетов по относительным путям
    'import/no-relative-packages': 'error',

    // Отключить проверку на импорт в папки с относительными родительскими путями
    'import/no-relative-parent-imports': 'off',

    // Отключить правило на проверку запрещенных путей
    'import/no-restricted-paths': 'off',

    // Запретить модулю импортировать самого себя
    'import/no-self-import': 'error',

    // Предупреждать о ненужных сегментах в пути импорта
    'import/no-useless-path-segments': 'warn',

    // Предупреждать о синтаксисе загрузчика Webpack при импорте
    'import/no-webpack-loader-syntax': 'warn',

    // endregion Static analysis

    // region Style guide

    // Отключить проверку на слово `type` ДО скобок при импорте типов
    'import/consistent-type-specifier-style': 'off',

    // Требовать именование фрагментов webpack при динамическом импорте
    'import/dynamic-import-chunkname': [
      'error',
      {
        importFunctions: ['dynamicImport'],
        webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
      },
    ],

    // Требовать, чтобы все экспорты объявлялись внизу файла
    'import/exports-last': 'warn',

    // Отключить проверку на расширения файлов
    'import/extensions': 'off',

    // Предупреждать, что импорты должны быть только вверху файла
    'import/first': 'warn',

    // Отключить проверку на групповой экспорт
    'import/group-exports': 'off',

    // Отключить проверку на количество зависимостей (операторы import или require).
    'import/max-dependencies': 'off',

    // Предупреждать, что нужна пустая строка после импорта
    'import/newline-after-import': 'warn',

    // Требовать имя для сущности, экспортируемой по умолчанию
    'import/no-anonymous-default-export': 'error',

    // Запретить экспорты по умолчанию
    'import/no-default-export': 'error',

    // Предупреждать об использовании экспорта по умолчанию в качестве импорта с локальным именем
    'import/no-named-default': 'warn',

    // Отключить проверку на именованные экспорты
    'import/no-named-export': 'off',

    // Предупреждать о предпочтении не использовать `import * as` (не касаясь стилей)
    'import/no-namespace': [
      'warn',
      {
        ignore: ['*.scss'],
      },
    ],

    // Отключить проверку на то, что импорты должны возвращать результат
    'import/no-unassigned-import': 'off',

    // Требовать порядок импортов
    'import/order': [
      'warn',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'object'],
        'pathGroups': [
          {
            pattern: '**/*.module.scss',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '@(@helpers|types)**/**/*',
            group: 'parent',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': [],
        'newlines-between': 'always',
      },
    ],

    // Отключить правило на предпочтение к экспорту по умолчанию
    'import/prefer-default-export': 'off',

    // endregion Style guide
  },
};
