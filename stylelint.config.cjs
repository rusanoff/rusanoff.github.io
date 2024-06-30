module.exports = {
  customSyntax: 'postcss-scss',
  rules: {
    /** region Avoid errors */

    // region Descending

    // Запретить селекторам с более низкой специфичностью появляться после переопределения селекторов
    // с более высокой специфичностью
    'no-descending-specificity': true,

    // endregion Descending

    // region Duplicate

    // Запретить дублирование пользовательских свойств в блоках объявлений
    'declaration-block-no-duplicate-custom-properties': true,

    // Запретить повторяющиеся свойства в блоках объявления
    'declaration-block-no-duplicate-properties': true,

    // Запретить повторяющиеся имена семейств шрифтов
    'font-family-no-duplicate-names': true,

    // Запретить повторяющиеся селекторы в блоках анимации
    'keyframe-block-no-duplicate-selectors': true,

    // Запретить дублирование правил @import
    'no-duplicate-at-import-rules': true,

    // Запретить повторяющиеся селекторы
    'no-duplicate-selectors': true,

    // endregion Duplicate

    // region Empty

    // Запретить пустые блоки
    'block-no-empty': true,

    // Запретить пустые комментарии
    'comment-no-empty': true,

    // Запретить пустые файлы
    'no-empty-source': true,

    // endregion Empty

    // region Invalid

    // Запретить недопустимые шестнадцатеричные значения цвета
    'color-no-invalid-hex': true,

    // Запретить оператор без пробелов в функции `calc()`
    'function-calc-no-unspaced-operator': true,

    // Запретить !important в анимации
    'keyframe-declaration-no-important': true,

    // Запретить недопустимые медиа-запросы
    'media-query-no-invalid': true,

    // Запретить недопустимые именованные области сетки
    'named-grid-areas-no-invalid': true,

    // Запретить комментарии с двойной косой чертой (//...), которые не поддерживаются CSS
    'no-invalid-double-slash-comments': true,

    // Запретить @import ниже описания правил стиля
    'no-invalid-position-at-import-rule': true,

    // Запретить неэкранированный перенос строки
    'string-no-newline': true,

    // endregion Invalid

    // region Irregular

    // Запретить неправильные пробелы
    'no-irregular-whitespace': true,

    // endregion Irregular

    // region Missing

    // Запретить отсутствующую функцию var для пользовательских свойств
    'custom-property-no-missing-var-function': true,

    // Запретить отсутствие родовых семейств в списках семейств шрифтов
    'font-family-no-missing-generic-family-keyword': true,

    // endregion Missing

    // region Non-standard

    // Запретить значения направления в вызовах `linear-gradient()`, недопустимые по стандартному синтаксису
    'function-linear-gradient-no-nonstandard-direction': true,

    // endregion Non-standard

    // region Overrides

    // Запретить сокращённые свойства, которые переопределяют связанные полные свойства
    'declaration-block-no-shorthand-property-overrides': true,

    // endregion Overrides

    //region Unmatchable

    // Запретить селекторы, которые не могут быть сопоставлены с элементами
    'selector-anb-no-unmatchable': true,
    //endregion Unmatchable

    // region Unknown

    // Запретить неизвестные аннотации
    'annotation-no-unknown': true,

    // Запретить неизвестные правила
    'at-rule-no-unknown': true,

    // Запретить неизвестные значения свойств в объявлениях
    'declaration-property-value-no-unknown': true,

    // Запретить неизвестные функции
    'function-no-unknown': true,

    // Запретить неизвестные имена медиа-запросов
    'media-feature-name-no-unknown': true,

    // Запретить неизвестные значения для медиа-запросов
    'media-feature-name-value-no-unknown': true,

    // Запретить неизвестные анимации
    'no-unknown-animations': true,

    // Запретить неизвестные пользовательские медиа-запросы
    'no-unknown-custom-media': true,

    // Разрешить неизвестные пользовательские свойства (они могут быть использованы для импортированных переменных)
    'no-unknown-custom-properties': null,

    // Запретить неизвестные свойства
    'property-no-unknown': true,

    // Запретить неизвестные селекторы псевдоклассов
    'selector-pseudo-class-no-unknown': true,

    // Запретить неизвестные селекторы псевдоэлементов
    'selector-pseudo-element-no-unknown': true,

    // Запретить селекторы неизвестного типа
    'selector-type-no-unknown': true,

    // Запретить неизвестные единицы измерения
    'unit-no-unknown': true,

    // endregion Unknown

    /** endregion Avoid errors */

    /* -------------------------------------------------------------------- */

    /** region Enforce conventions */

    // region Allowed, disallowed & required

    // region At rule

    // Не отслеживать список разрешённых at-правил
    'at-rule-allowed-list': null,

    // Не отслеживать список запрещённых at-правил
    'at-rule-disallowed-list': null,

    // Запретить префиксы для at-правил
    'at-rule-no-vendor-prefix': true,

    // Не отслеживать список необходимых свойств для at-правила
    'at-rule-property-required-list': null,

    // endregion At rule

    // region Color

    // Запретить альфа-канал для шестнадцатеричных цветов
    'color-hex-alpha': 'never',

    // Запретить именованные цвета
    'color-named': 'never',

    // Разрешить шестнадцатеричные цвета
    'color-no-hex': false,

    // endregion Color

    // region Comment

    // Не отслеживать список запрещённых слов в комментариях
    'comment-word-disallowed-list': null,

    // endregion Comment

    // region Declaration

    // Запретить !important в объявлениях
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
      },
    ],

    // Не отслеживать список разрешённых пар свойств и единиц измерения
    'declaration-property-unit-allowed-list': null,

    // Не отслеживать список запрещённых пар свойств и единиц измерения
    'declaration-property-unit-disallowed-list': null,

    // Не отслеживать список разрешённых пар свойств и значений
    'declaration-property-value-allowed-list': null,

    // Не отслеживать список запрещённых пар свойств и значений
    'declaration-property-value-disallowed-list': null,

    // endregion Declaration

    // region Function

    // Не отслеживать разрешение на css функции
    'function-allowed-list': null,

    // Не отслеживать запрет на css функции
    'function-disallowed-list': null,

    // Запретить URL-адреса, относящиеся к схеме
    'function-url-no-scheme-relative': true,

    // Не отслеживать разрешённые схемы в url адресах
    'function-url-scheme-allowed-list': null,

    // Не отслеживать запрещённые схемы в url адресах
    'function-url-scheme-disallowed-list': null,

    // endregion Function

    // region Length

    // Запретить единицы измерения для нуля
    'length-zero-no-unit': true,

    // endregion Length

    // region Media feature

    // Не отслеживать список разрешённых имен медиа функций
    'media-feature-name-allowed-list': null,

    // Не отслеживать список запрещённых имен медиа функций
    'media-feature-name-disallowed-list': null,

    // Разрешить префиксы поставщиков для имен медиа функций
    'media-feature-name-no-vendor-prefix': true,

    // Не отслеживать список разрешенных пар имен и объектов в медиа-запросах
    'media-feature-name-unit-allowed-list': null,

    // Не отслеживать список разрешённых пар имени и значения медиа функции
    'media-feature-name-value-allowed-list': null,

    // endregion Media feature

    // region Property

    // Не отслеживать список разрешённых свойств
    'property-allowed-list': null,

    // Не отслеживать список запрещённых свойств
    'property-disallowed-list': null,

    // Запретить префиксы для свойств
    'property-no-vendor-prefix': true,

    // endregion Property

    // region Rule

    // Не отслеживать список запрещённых свойств для селекторов в правилах
    'rule-selector-property-disallowed-list': null,

    // endregion Rule

    // region Selector

    // Не отслеживать список запрещённых имён атрибутов
    'selector-attribute-name-disallowed-list': null,

    // Не отслеживать список разрешённых операторов атрибутов
    'selector-attribute-operator-allowed-list': null,

    // Не отслеживать список запрещённых операторов атрибутов
    'selector-attribute-operator-disallowed-list': null,

    // Не отслеживать список разрешённых комбинаторов
    'selector-combinator-allowed-list': null,

    // Не отслеживать список запрещённых комбинаторов
    'selector-combinator-disallowed-list': null,

    // Не отслеживать список запрещённых селекторов
    'selector-disallowed-list': null,

    // Запретить квалификацию селектора по тегу
    'selector-no-qualifying-type': true,

    // Разрешить префиксы для селекторов
    'selector-no-vendor-prefix': false,

    // Не отслеживать список разрешённых селекторов псевдоклассов
    'selector-pseudo-class-allowed-list': null,

    // Не отслеживать список запрещённых селекторов псевдоклассов
    'selector-pseudo-class-disallowed-list': null,

    // Не отслеживать список разрешённых селекторов псевдоэлементов
    'selector-pseudo-element-allowed-list': null,

    // Не отслеживать список запрещённых селекторов псевдоэлементов
    'selector-pseudo-element-disallowed-list': null,

    // endregion Selector

    // region Unit

    // Не отслеживать список разрешённых единиц
    'unit-allowed-list': null,

    // Не отслеживать список запрещённых единиц
    'unit-disallowed-list': null,

    // endregion Unit

    // region Value

    // Запретить префиксы поставщиков для значений
    'value-no-vendor-prefix': true,

    // endregion Value

    // endregion Allowed, disallowed & required

    // region Case

    // Разрешить только строчные буквы для названий функций
    'function-name-case': 'lower',

    // Разрешить только строчные буквы для селекторов тегов
    'selector-type-case': 'lower',

    // Разрешить только строчные буквы для значений ключевых слов
    'value-keyword-case': 'lower',

    // endregion Case

    // region Empty lines

    // Требовать пустую строку между блоками
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
        ignoreAtRules: [
          'else',
        ],
      },
    ],

    // Требовать пустую строку перед комментариями.
    'comment-empty-line-before': [
      'always',
      {
        ignore: [
          // Игнорировать комментарии команд stylelint-а
          'stylelint-commands',
          // Игнорировать комментарии, следующие после комментариев
          'after-comment',
        ],
      },
    ],

    // Запрещать пустую строку перед пользовательскими свойствами
    'custom-property-empty-line-before': 'never',

    // Запретить пустые строки между правилами
    'declaration-empty-line-before': 'never',

    // Требовать пустую строку перед правилами
    'rule-empty-line-before': [
      'always',
      {
        except: [
          // Отменить для вложенных правил и первого дочернего элемента их родительского узла
          'first-nested',
        ],
        ignore: [
          // Игнорировать правила, следующие за комментарием
          'after-comment',
        ],
      },
    ],

    // endregion Empty lines

    // region Max & min

    // Ограничить количество свойств в однострочном блоке
    'declaration-block-single-line-max-declarations': 1,

    // Не отслеживать количество значений для списка свойств
    'declaration-property-max-values': null,

    // Ограничить глубину вложенности.
    'max-nesting-depth': 3,

    // Максимальное количество знаков после точки в дробных значениях
    'number-max-precision': 3,

    // Ограничить количество атрибутов в селекторе
    'selector-max-attribute': 1,

    // Ограничить количество классов в селекторе
    'selector-max-class': 3,

    // Ограничить количество комбинаторов в селекторе
    'selector-max-combinators': 2,

    // Ограничить количество составных селекторов
    'selector-max-compound-selectors': 3,

    // Ограничить количество селекторов ID
    'selector-max-id': 0,

    // Ограничить количество псевдоклассов в селекторе
    'selector-max-pseudo-class': 3,

    // Не отслеживать ограничение специфичности селекторов
    'selector-max-specificity': null,

    // Ограничить количество селекторов тегов
    'selector-max-type': 0,

    // Ограничить количество универсального селектора
    'selector-max-universal': 1,

    // Минимальное значение для миллисекунд
    'time-min-milliseconds': 16,

    // endregion Max & min

    // region Notation

    // Числовое обозначение для альфа-значений
    'alpha-value-notation': 'number',

    // Старая нотация для функций цвета
    'color-function-notation': 'legacy',

    // Разрешить только короткие обозначения для шестнадцатеричных цветов
    'color-hex-length': 'short',

    // Значение `font-weight` должно быть числовым
    'font-weight-notation': 'numeric',

    // Угловое обозначение для оттенков в градусах
    'hue-degree-notation': 'angle',

    // Разрешить только строку (без `url()`) для правил @import
    'import-notation': 'string',

    // Разрешить указывать только процентное обозначение для селекторов анимации
    'keyframe-selector-notation': 'percentage',

    // Требовать префиксную нотацию для диапазонов медиа-запросов
    'lightness-notation': 'number',

    // Требовать числовое обозначение яркости
    'media-feature-range-notation': 'prefix',

    // Разрешить только сложную нотацию для псевдоклассов `:not()` (например: `:not(:last-child)`)
    'selector-not-notation': 'complex',

    // Укажите двойное двоеточие для псевдоэлементов
    'selector-pseudo-element-colon-notation': 'double',

    // endregion Notation

    // region Pattern

    // Не отслеживать шаблон для комментариев
    'comment-pattern': null,

    // Не отслеживать шаблон для имен пользовательских медиазапросов
    'custom-media-pattern': null,

    // Не отслеживать шаблон пользовательских свойств
    'custom-property-pattern': null,

    // Не отслеживать шаблон имени анимации
    'keyframes-name-pattern': null,

    // Не отслеживать шаблон для селекторов классов
    'selector-class-pattern': null,

    // Не отслеживать шаблон селектора по id
    'selector-id-pattern': null,

    // Не отслеживать шаблон для вложенных селекторов
    'selector-nested-pattern': null,

    // endregion Pattern

    // region Quotes

    // Требовать кавычки вокруг каждого имени семейства шрифтов, которое не является ключевым словом
    'font-family-name-quotes': 'always-unless-keyword',

    // Требовать кавычки для url адресов
    'function-url-quotes': 'always',

    // Требовать кавычки для значений атрибутов
    'selector-attribute-quotes': 'always',

    // endregion Quotes

    // region Redundant

    // Запретить сокращённые свойства, которые можно объединить в одно сокращённое свойство
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        // Игнорировать свойства:
        ignoreShorthands: [
          'font',
        ],
      },
    ],

    // Запретить избыточные значения в сокращённых свойствах
    'shorthand-property-no-redundant-values': true,

    // endregion Redundant

    // region Whitespace inside

    // Требовать пробелы внутри маркеров комментариев
    'comment-whitespace-inside': 'always',

    // endregion Whitespace inside

    /** endregion Enforce conventions */
  },
};
