import globals from 'globals';

import type { ConfigurationItems } from '../../types/configuration-items';
import type { JavascriptConfiguration } from './javascript-configuration';

import { GLOB_SRC, GLOB_SRC_EXT } from '../../globs';
import { PLUGIN_ANTFU } from '../../plugins/antfu';
import { PLUGIN_UNUSED_IMPORTS } from '../../plugins/unused-imports';

/**
 * Generates the `javascript` rules for the received configuration.
 *
 * @param configuration
 */
export function javascript(configuration: JavascriptConfiguration): ConfigurationItems {
    // Extract the required values from the received configuration
    const {
        overrides = {},
    } = configuration;

    // Return the `javascript` rules
    return [
        {
            languageOptions: {
                ecmaVersion: 2022,
                globals: {
                    ...globals.browser,
                    ...globals.es2021,
                    ...globals.node,
                    ...globals.jest,
                    document: 'readonly',
                    navigator: 'readonly',
                    window: 'readonly',
                },
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                    ecmaVersion: 2022,
                    sourceType: 'module',
                },
                sourceType: 'module',
            },
            linterOptions: {
                reportUnusedDisableDirectives: true,
            },
            name: 'abrahamsaanchez:javascript',
            plugins: {
                'antfu': PLUGIN_ANTFU,
                'unused-imports': PLUGIN_UNUSED_IMPORTS,
            },
            rules: {
                'accessor-pairs': 'off',

                'array-callback-return': [
                    'error',
                    {
                        checkForEach: true,
                    },
                ],
                'block-scoped-var': 'error',
                'camelcase': [
                    'error',
                    {
                        properties: 'never',
                    },
                ],
                'constructor-super': 'error',
                'default-case-last': 'error',
                'dot-notation': [
                    'error',
                    {
                        allowKeywords: true,
                    },
                ],
                'eqeqeq': 'error',
                'max-classes-per-file': [
                    'error',
                    {
                        ignoreExpressions: true,
                        max: 1,
                    },
                ],
                'new-cap': [
                    'error',
                    {
                        capIsNew: false,
                        newIsCap: true,
                        properties: true,
                    },
                ],
                'no-alert': 'error',
                'no-array-constructor': 'error',
                'no-async-promise-executor': 'error',
                'no-await-in-loop': 'error',
                'no-caller': 'error',
                'no-case-declarations': 'error',
                'no-class-assign': 'error',
                'no-compare-neg-zero': 'error',
                'no-cond-assign': [
                    'error',
                    'always',
                ],
                'no-console': [
                    'error',
                    {
                        allow: [
                            'warn',
                            'error',
                        ],
                    },
                ],
                'no-const-assign': 'error',
                'no-constant-binary-expression': 'error',
                'no-constructor-return': 'error',
                'no-control-regex': 'error',
                'no-debugger': 'error',
                'no-delete-var': 'error',
                'no-dupe-args': 'error',
                'no-dupe-class-members': 'error',
                'no-dupe-keys': 'error',
                'no-duplicate-case': 'error',
                'no-else-return': [
                    'error',
                    {
                        allowElseIf: false,
                    },
                ],
                'no-empty': [
                    'error',
                    {
                        allowEmptyCatch: true,
                    },
                ],
                'no-empty-character-class': 'error',
                'no-empty-pattern': 'error',
                'no-eval': 'error',
                'no-ex-assign': 'error',
                'no-extend-native': 'error',
                'no-extra-bind': 'error',
                'no-extra-boolean-cast': 'error',
                'no-fallthrough': 'error',
                'no-func-assign': 'error',
                'no-global-assign': 'error',
                'no-implied-eval': 'error',
                'no-import-assign': 'error',
                'no-invalid-regexp': 'error',
                'no-invalid-this': 'error',
                'no-irregular-whitespace': 'error',
                'no-iterator': 'error',
                'no-labels': [
                    'error',
                    {
                        allowLoop: false,
                        allowSwitch: false,
                    },
                ],
                'no-lone-blocks': 'error',
                'no-lonely-if': 'error',
                'no-loss-of-precision': 'error',
                'no-misleading-character-class': 'error',
                'no-multi-str': 'error',
                'no-new': 'error',
                'no-new-func': 'error',
                'no-new-wrappers': 'error',
                'no-obj-calls': 'error',
                'no-octal': 'error',
                'no-octal-escape': 'error',
                'no-param-reassign': 'error',
                'no-promise-executor-return': 'error',
                'no-proto': 'error',
                'no-prototype-builtins': 'error',
                'no-redeclare': [
                    'error',
                    {
                        builtinGlobals: false,
                    },
                ],
                'no-regex-spaces': 'error',
                'no-restricted-globals': [
                    'error',
                    {
                        message: 'Use `globalThis` instead.',
                        name: 'global',
                    },
                    {
                        message: 'Use `globalThis` instead.',
                        name: 'self',
                    },
                ],
                'no-restricted-properties': [
                    'error',
                    {
                        message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
                        property: '__proto__',
                    },
                    {
                        message: 'Use `Object.defineProperty` instead.',
                        property: '__defineGetter__',
                    },
                    {
                        message: 'Use `Object.defineProperty` instead.',
                        property: '__defineSetter__',
                    },
                    {
                        message: 'Use `Object.getOwnPropertyDescriptor` instead.',
                        property: '__lookupGetter__',
                    },
                    {
                        message: 'Use `Object.getOwnPropertyDescriptor` instead.',
                        property: '__lookupSetter__',
                    },
                ],
                'no-restricted-syntax': [
                    'error',
                    'DebuggerStatement',
                    'LabeledStatement',
                    'WithStatement',
                    'TSEnumDeclaration[const=true]',
                    'TSExportAssignment',
                ],
                'no-return-assign': 'error',
                'no-self-assign': [
                    'error',
                    {
                        props: true,
                    },
                ],
                'no-self-compare': 'error',
                'no-sequences': 'error',
                'no-shadow-restricted-names': 'error',
                'no-sparse-arrays': 'error',
                'no-template-curly-in-string': 'error',
                'no-this-before-super': 'error',
                'no-undef': 'error',
                'no-undef-init': 'error',
                'no-unexpected-multiline': 'error',
                'no-unmodified-loop-condition': 'error',
                'no-unneeded-ternary': [
                    'error',
                    {
                        defaultAssignment: false,
                    },
                ],
                'no-unreachable': 'error',
                'no-unreachable-loop': 'error',
                'no-unsafe-finally': 'error',
                'no-unsafe-negation': 'error',
                'no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTaggedTemplates: true,
                        allowTernary: true,
                    },
                ],
                'no-unused-private-class-members': 'error',
                'no-unused-vars': 'off',
                'no-use-before-define': [
                    'error',
                    {
                        classes: false,
                        functions: false,
                        variables: true,
                    },
                ],
                'no-useless-backreference': 'error',
                'no-useless-call': 'error',
                'no-useless-catch': 'error',
                'no-useless-computed-key': 'error',
                'no-useless-constructor': 'error',
                'no-useless-rename': 'error',
                'no-useless-return': 'error',
                'no-var': 'error',
                'no-with': 'error',
                'object-shorthand': [
                    'error',
                    'never',
                ],
                'one-var': [
                    'error',
                    {
                        initialized: 'never',
                    },
                ],
                'prefer-arrow-callback': [
                    'error',
                    {
                        allowNamedFunctions: false,
                        allowUnboundThis: true,
                    },
                ],
                'prefer-const': 'error',
                'prefer-exponentiation-operator': 'error',
                'prefer-promise-reject-errors': 'error',
                'prefer-regex-literals': [
                    'error',
                    {
                        disallowRedundantWrapping: true,
                    },
                ],
                'prefer-rest-params': 'error',
                'prefer-spread': 'error',
                'prefer-template': 'error',
                'radix': 'error',
                'require-atomic-updates': [
                    'error',
                    {
                        allowProperties: true,
                    },
                ],

                'sort-imports': [
                    'error',
                    {
                        allowSeparatedGroups: false,
                        ignoreCase: false,
                        ignoreDeclarationSort: true,
                        ignoreMemberSort: false,
                        memberSyntaxSortOrder: [
                            'none',
                            'all',
                            'multiple',
                            'single',
                        ],
                    },
                ],

                'symbol-description': 'error',
                'unicode-bom': [
                    'error',
                    'never',
                ],
                'unused-imports/no-unused-imports': 'error',

                "unused-imports/no-unused-vars": [
                    "warn",
                    {
                        "args": "after-used",
                        "vars": "all"
                    }
                ],
                'use-isnan': [
                    'error',
                    {
                        enforceForIndexOf: true,
                        enforceForSwitchCase: true,
                    },
                ],
                'valid-typeof': [
                    'error',
                    {
                        requireStringLiterals: true,
                    },
                ],
                'vars-on-top': 'error',
                'yoda': [
                    'error',
                    'never',
                ],

                ...overrides,
            },
        },
        {
            files: [
`scripts/${GLOB_SRC}`,
`cli.${GLOB_SRC_EXT}`,
            ],
            name: 'abrahamsaanchez:scripts-overrides',
            rules: {
                'no-console': 'off',
            },
        },
    ];
}
