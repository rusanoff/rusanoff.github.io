import type { UserConfig } from '@commitlint/types';

const ERROR_VALUE = 2;

const projectRules: UserConfig['rules'] = {
  // Требовать сообщение комита с заглавной буквы
  'subject-case': [ERROR_VALUE, 'always', 'sentence-case'],

  // Требовать указывать область изменений одним из перечисленных значений
  'scope-enum': [ERROR_VALUE, 'always', ['ui', 'assembly', 'api']],

  // Требовать заполнять область изменений
  'scope-empty': [ERROR_VALUE, 'never'],

  // Требовать указывать ссылки, объявленные в `parserPreset.parserOpts.issuePrefixes`
  'references-empty': [ERROR_VALUE, 'never'],
};

const projectConfig: UserConfig = {
  rules: projectRules,
  parserPreset: {
    parserOpts: {
      issuePrefixes: [],
    },
  },
  // Можно ещё использовать конфиг для jira (commitlint-jira): https://github.com/Gherciu/commitlint-jira
};

export default {
  extends: ['@commitlint/config-conventional'],
  ...projectConfig,
};
