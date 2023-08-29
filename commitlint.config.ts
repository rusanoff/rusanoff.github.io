/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { UserConfig } from '@commitlint/types';

const ERROR_VALUE = 2;

const personalRules: UserConfig['rules'] = {
  // Требовать сообщение комита с заглавной буквы
  'subject-case': [ERROR_VALUE, 'always', 'sentence-case'],
  // Требовать оставлять область изменений пустой
  'scope-empty': [ERROR_VALUE, 'always'],
};

const personalConfig: UserConfig = {
  rules: personalRules,
};

// @ts-ignore
const projectRules: UserConfig['rules'] = {
  ...personalRules,
  // Требовать указывать область изменений одним из перечисленных значений
  'scope-enum': [ERROR_VALUE, 'always', ['ui', 'assembly', 'api']],
  // Требовать заполнять область изменений
  'scope-empty': [ERROR_VALUE, 'never'],
  // Требовать указывать ссылки, объявленные в `parserPreset.parserOpts.issuePrefixes`
  'references-empty': [ERROR_VALUE, 'never'],
};

// @ts-ignore
const projectConfig: UserConfig = {
  rules: personalRules,
  parserPreset: {
    parserOpts: {
      issuePrefixes: [],
    },
  },
  // Можно использовать конфиг для jira (commitlint-jira): https://github.com/Gherciu/commitlint-jira
};

export default {
  extends: ['@commitlint/config-conventional'],
  ...personalConfig,
};
