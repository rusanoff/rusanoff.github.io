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

```js
module.exports = {
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

    // "noUncheckedIndexedAccess": 
  },
};
```
