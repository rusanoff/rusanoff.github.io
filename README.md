# rusanoff.github.io
Online business card

> **Note**
> Also, this repository contains useful configs (see project files)

## GitHub Action Config

```yaml
name: Lint Commit Messages
on: [pull_request, push]
jobs:
  commitlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: wagoid/commitlint-github-action@v5
        configFile: commitlint.config.ts
```

## tsconfig

```js
module.exports = {
  // Файлы для включения в отслеживание
  "files": [],
  "extends": "",
  "include": [
    "src",
    "*.js",
    "*.*.js",
    "*.config.js",
    "*.config.ts"
  ],
  "exclude": [
    "node_modules"
  ],
  // Ссылки на проекты
  "references": [],
  "compilerOptions": {
    // Не разрешать недостижимый код
    "allowUnreachableCode": false,

    // Не разрешать неиспользуемые метки
    "allowUnusedLabels": false,

    // (Входит в правило `strict`) Включить анализ для всех файлов в строгом режиме ECMAScript
    "alwaysStrict": true,

    // Включить строгие правила обработки необязательных свойств объекта
    "exactOptionalPropertyTypes": true,

    // Включить проверку аварийных случаев switch-case
    "noFallthroughCasesInSwitch": true,

    // (Входит в правило `strict`) Включить проверку на указание типа в нужных местах
    "noImplicitAny": true,

    // Включить проверку на модификатор `override` для перезаписи метода родительского класса
    "noImplicitOverride": true,

    // Включить проверку на возвращение нужного типа данных во всем теле функции
    "noImplicitReturns": true,

    // (Входит в правило `strict`) Включить проверку на явный тип `this`
    "noImplicitThis": true,

    // Разрешать обращаться к динамическим свойствам объекта через точку
    "noPropertyAccessFromIndexSignature": false,

    // Включить предупреждение, что динамическое свойство может быть undefined
    "noUncheckedIndexedAccess": true,

    // Запретить неиспользуемые переменные
    "noUnusedLocals": true,

    // Запретить неиспользуемые параметры
    "noUnusedParameters": true,

    // Включает все строгие правила проверки
    "strict": true,

    // Включить проверку типов для аргументов `call` и `apply` и `bind` (Входит в правило `strict`)
    "strictBindCallApply": true,

    // Включить строгую проверку типов для параметров функций (Входит в правило `strict`)
    "strictFunctionTypes": true,

    // Включить строгую проверку на `null` и `undefined` (Входит в правило `strict`)
    "strictNullChecks": true,

    // Включить строгую проверку для инициализаии свойств классов в конструкторе (Входит в правило `strict`)
    "strictPropertyInitialization": true,

    // Включить тип unknown по умолчанию для `error` в `catch()` (Входит в правило `strict`)
    "useUnknownInCatchVariables": true,

    // Не разрешать произвольные расширения (нет необходимости)
    "allowArbitraryExtensions": false,

    // Не разрешать импорт расширений TS (нет необходимости)
    "allowImportingTsExtensions": false,

    // Не разрешать получать доступ к экспорту UMD (нет необходимости)
    "allowUmdGlobalAccess": false,

    // Указывает корневой каталог
    "baseUrl": './',

    // Индивидуальные условия 
    "customConditions": [],

    // Устанавливает систему модулей из списка
    "module": "esnext",

    // Стратегия разрешения модуля из списка
    "moduleResolution": "nodenext",

    // Предоставляет способ переопределить список суффиксов имен файлов по умолчанию для поиска при разрешении модуля
    "moduleSuffixes": [],

    // Проверять исходный набор файлов на наличие директив
    "noResolve": false,

    // Элиасы
    "paths": {},

    // Разрешить импортировать модули с расширением `.json` 
    "resolveJsonModule": true,

    // Не обращаться к полю экспорта файлов `package.json`, если он когда-либо читает из пакета в `node_modules`
    "resolvePackageJsonExports": false,

    // Обращаться к полю импорта файлов `package.json`, если он когда-либо читает из пакета в `node_modules`
    "resolvePackageJsonImports": true,

    // Корневой каталог для сохранения структуры
    "rootDir": '.',

    // Cообщить компилятору, что существует множество "виртуальных" каталогов, действующих как один корень
    "rootDirs": [],

    // Директории пакетов типов
    "typeRoots": [],

    // Пакеты типов
    "types": [],

    // Не создавать файлы декларации
    "declaration": false,

    // Директория для файлов декларации 
    // "declarationDir": './',

    // Не генерировтаь файлы карты декларации 
    "declarationMap": false,

    // Не понижать уровень. Понижение уровня — это термин TypeScript, обозначающий переход
    // на более старую версию JavaScript 
    "downlevelIteration": false,

    // Определяет, будет ли TypeScript выдавать метку порядка байтов (BOM) при записи выходных файлов
    "emitBOM": false,

    // Выдавать не только декларацию
    "emitDeclarationOnly": false,

    // Импортировать помощники из `tslib`
    "importHelpers": true,

    // Устаревший в пользу `verbatimModuleSyntax`
    // "importsNotUsedAsValues": false,

    // Отключить генерацию дополнительных сведений о типах для отладки и анализа (нет необходимости)
    "inlineSourceMap": false,

    // Отключить генерацию дополнительных сведений о типах для отладки и анализа (нет необходимости)
    "inlineSources": false,

    // Адрес исходных карт
    // "mapRoot": './',

    // Конец последовательности строк
    "newLine": 'lf',

    // Не создавать выходные файлы компилятора, такие как исходный код JavaScript, исходные карты или объявления
    "noEmit": true,

    // Не создавать выходные файлы для помощников
    "noEmitHelpers": true,

    // Не создавать выходные файлы компилятора, такие как исходный код JavaScript, исходные карты или объявления,
    // если были сообщения о каких-либо ошибках
    // "noEmitOnError": false,

    // Директория для файлов `.js` после транспиляции 
    // "outDir": './'

    // Не для CommonJS or ES6 modules.
    // "outFile": '',

    // Не удалять объявления const enum в сгенерированном коде
    "preserveConstEnums": false,

    // Устаревший в пользу verbatimModuleSyntax
    // "preserveValueImports": "",

    // Удалять комментарии
    "removeComments": true,

    // Генерировать исходные карты
    "sourceMap": true,
    
    // Местоположение, в котором отладчик должен найти файлы TypeScript, а не относительные исходные местоположения
    // "sourceRoot": ''

    // Не создавать объявления для кода, который имеет аннотацию @internal в комментарии JSDoc
    // "stripInternal": false,

    // Разрешите импорт файлов JavaScript
    "allowJs": true,

    // Разрешите импорт файлов JavaScript
    "checkJs": true,

    // Максимальная глубина зависимости для поиска в node_modules и загрузки файлов
    // "maxNodeModuleJsDepth": 0,

    // Не отключать лимит памяти
    "disableSizeLimit": false,

    // Плагины
    "plugins": [],

    // Не требовать `import * as` для дефолтных экспортов
    "allowSyntheticDefaultImports": true,

    // Решает проблемы с дефолтными импортами (включает `allowSyntheticDefaultImports`) 
    "esModuleInterop": true,

    // Требовать отслеживание регистра файловой системы
    "forceConsistentCasingInFileNames": true,

    // Указывать на проблемы кода, который не может быть правильно интерпретирован во время транспиляции одного файла
    "isolatedModules": true,

    // Не отражать тот же флаг в Node.js; который не определяет реальный путь символических ссылок
    "preserveSymlinks": false,

    // Не сохранять исходный синтаксис модуля JS
    "verbatimModuleSyntax": false,

    // Устанавливет кодировку
    "charset": 'utf8',

    // Не изменять оператор типа keyof, чтобы он возвращал строку вместо `строки | число`
    "keyofStringsOnly": false,

    // Не отключать `"use strict"`
    "noImplicitUseStrict": false,

    // Проверять параметры типа при сравнении двух универсальных функций 
    "noStrictGenericChecks": false,

    // Нужно было для старых версий TS
    "suppressExcessPropertyErrors": false,

    // Отключено в пользу использования `@ts-ignore`
    "suppressImplicitAnyIndexErrors": false,
    
    // Включить транспиляцию декораторов в JavaScript
    "emitDecoratorMetadata": true,

    // Включить экспериментальную поддержку декораторов
    "experimentalDecorators": true,

    // Не изменять JSX
    "jsx": "preserve",

    // Переопредление функции для создания элементов JSX (полезно, например, для preact)
    // "jsxFactory": "h",

    // Переопредление функции для создания фрагментов JSX (полезно, например, для preact)
    // "jsxFragmentFactory": "Fragment",

    // Указывает библиотеку, из которой будут импортироваться функции для работы с JSX
    // "jsxImportSource": "preact",

    // Вспомогательный библиотеки типов
    "lib": [],

    // Автоматически определять скрипт или модуль
    "moduleDetection": "auto",

    // Отключает автоматическое включение любых файлов библиотеки. Если эта опция установлена, `lib` игнорируется
    "noLib": false,

    // @depraecated в пользу `jsxFactory`
    // "reactNamespace": "",
    
    // Версия JavaScript для транспиляции
    "target": "ESNext",

    // ИСпользовтаь новую стандартную версию полей классов 
    "useDefineForClassFields": true,

    // Не использовать по-умолчанию расширенную диагностику
    "diagnostics": false,

    // Не выводить имена файлов, которые TS считает частью проекта, и причину их компиляции
    "explainFiles": false,
    
    // Не отслеживать время компиляции по-умолчанию
    "extendedDiagnostics": false,

    // Не отслеживать по-умолчанию нагрузку на CPU при компиляции
    // "generateCpuProfile": '',

    // Не выводить имена сгенерированных файлов, являющихся частью компиляции, на терминал
    "listEmittedFiles": false,

    // Не выводить имена файлов, входящих в компиляцию
    "listFiles": false,

    // Не выводить информацию о процессе разрешения для каждого обработанного файла
    "traceResolution": false,

    // Не отслеживать, был ли собран проект
    "composite": false,

    // Загружать все доступные проекты в память 
    "disableReferencedProjectLoad": false,

    // Не отключать поиск всех ссылок или переход к определению в редакторе
    "disableSolutionSearching": false,

    // Не включать старое поведение для состовных проектов
    "disableSourceOfProjectReferenceRedirect": false,

    // Не сохранять информацию о графе проекта из последней компиляции в файлы, хранящиеся на диске
    "incremental": false,

    // Файл с информацией о графе проекта из последней компиляции
    // "tsBuildInfoFile": '',

    // Не обрезать сообщения об ошибках
    "noErrorTruncation": false,

    // Не сохранять устаревший вывод консоли в режиме просмотра вместо очистки экрана
    "preserveWatchOutput": false,

    // Стилизовтаь ошибки
    "pretty": true,

    // @deprecated в пользу `skipLibCheck`
    "skipDefaultLibCheck": true,

    // Пропускать проверку типов библиотек
    "skipLibCheck": true,

    // Отслкживтаь только измененные файлы
    "assumeChangesOnlyAffectDirectDependencies": true,
  },
  "watchOptions": {
    // Стратегия просмотра отдельных файлов: использовать собственные события операционной/файловой системы
    "watchFile": "useFsEvents",
    // Стратегия наблюдения за деревьями каталогов: использовать собственные события операционной/файловой системы
    "watchDirectory": "useFsEvents",
    // Фолбэк стратегии наблюдения за файлами: проверять несколько раз в секунду 
    "fallbackPolling": "fixedPollingInterval",
    // Синхронно вызывать обратные вызовы и обновлять состояние наблюдателей каталогов на платформах,
    // которые не поддерживают рекурсивный просмотр изначально
    "synchronousWatchDirectory": true,
    // Исключающиеся директории
    "excludeDirectories": [
      "node_modules"
    ],
    // Исключающиеся файлы
    "excludeFiles": [],
  },
  "typeAcquisition": {
    // Включить автоматическое получение типов в JS
    "enable": false,
    // Какие DefinitelyTyped типы включить
    "include": [],
    // Какие DefinitelyTyped типы исключить
    "exclude": [],
    // Отключить подключение DefinitelyTyped типов на основе имени файла
    "disableFilenameBasedTypeAcquisition": false
  },
};
```
