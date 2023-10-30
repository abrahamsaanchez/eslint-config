import type { EslintCommentsRules, EslintRules, ImportRules, JsoncRules, MergeIntersection, NRules, Prefix, ReactRules, RenamePrefix, RuleConfig, TypeScriptRules, UnicornRules, Unprefix, VitestRules, VueRules, YmlRules } from '@antfu/eslint-define-config';
import type { UnprefixedRuleOptions } from '@stylistic/eslint-plugin';
import type { Rules as AntfuRules } from 'eslint-plugin-antfu';

type StylisticMergedRules = MergeIntersection<
  EslintRules &
  Unprefix<ReactRules, 'react/'> &
  Unprefix<TypeScriptRules, '@typescript-eslint/'>
  & { 'jsx-self-closing-comp': ReactRules['react/self-closing-comp'] }
>;

type StylisticRules = Pick<StylisticMergedRules, keyof UnprefixedRuleOptions>;

export type Rules = MergeIntersection<
  RenamePrefix<TypeScriptRules, '@typescript-eslint/', 'ts/'> &
  RenamePrefix<VitestRules, 'vitest/', 'test/'> &
  RenamePrefix<YmlRules, 'yml/', 'yaml/'> &
  RenamePrefix<NRules, 'n/', 'node/'> &
  Prefix<StylisticRules, 'style/'> &
  Prefix<AntfuRules, 'antfu/'> &
  ImportRules &
  EslintRules &
  JsoncRules &
  VueRules &
  UnicornRules &
  EslintCommentsRules &
  {
      'test/no-only-tests': RuleConfig<[]>;
  }
>;
