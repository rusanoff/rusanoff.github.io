import type { UserConfig } from '@commitlint/types';
import type { RulesConfig } from '@commitlint/types/lib/rules';

const ERROR_VALUE = 2;

const personalRules: Partial<RulesConfig> = {
  // Требовать сообщение комита с заглавной буквы
  'subject-case': [ERROR_VALUE, 'always', 'sentence-case'],

  // Требовать оставлять область изменений пустой
  'scope-empty': [ERROR_VALUE, 'always'],
};

const personalConfig: UserConfig = {
  rules: personalRules,
};

export default {
  extends: ['@commitlint/config-conventional'],
  ...personalConfig,
};
