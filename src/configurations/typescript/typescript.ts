import type { ParserOptions } from '@antfu/eslint-define-config';

import { cwd } from 'node:process';

import type { ConfigurationItem } from '../../types/configuration-item';
import type { ConfigurationItems } from '../../types/configuration-items';
import type { TypescriptConfiguration } from './typescript-configuration';

import { GLOB_TS, GLOB_TSX } from '../../globs';
import { PLUGIN_ANTFU } from '../../plugins/antfu';
import { PLUGIN_IMPORT } from '../../plugins/import';
import { PARSER_TYPESCRIPT, PLUGIN_TYPESCRIPT } from '../../plugins/typescript';
import { coerceArray } from '../../utils/coerce-array';

/**
 * Generates the `typescript` rules for the received configuration.
 *
 * @param configuration
 */
export function typescript(configuration?: TypescriptConfiguration): ConfigurationItems {
    // Extract the required values from the received configuration
    const {
        overrides = {},
        parserOptions = {},
    } = configuration ?? {};

    // Generate the rules that requires a `tsconfig.json` file
    const typeAwareRules: ConfigurationItem['rules'] = {
        'dot-notation': 'off',
        'no-implied-eval': 'off',
        'no-throw-literal': 'off',
        'ts/await-thenable': 'error',
        'ts/dot-notation': [
            'error',
            {
                allowKeywords: true,
            },
        ],
        'ts/naming-convention': [
            'error',
            {
                format: [
                    'camelCase',
                ],
                leadingUnderscore: 'require',
                modifiers: [
                    'private',
                ],
                selector: 'memberLike',
            },
            {
                format: [
                    'camelCase',
                    'UPPER_CASE',
                ],
                leadingUnderscore: 'allow',
                modifiers: [
                    'private',
                    'readonly',
                    'static',
                ],
                selector: 'memberLike',
            },
            {
                format: [
                    'PascalCase',
                ],
                prefix: [
                    'are',
                    'can',
                    'did',
                    'do',
                    'has',
                    'have',
                    'is',
                    'should',
                    'was',
                    'were',
                    'will',
                ],
                selector: [
                    'variable',
                ],
                types: [
                    'boolean',
                ],
            },
            {
                custom: {
                    match: false,
                    regex: '^I[A-Z]',
                },
                format: [
                    'PascalCase',
                ],
                selector: 'interface',
            },
            {
                format: [
                    'camelCase',
                ],
                selector: [
                    'function',
                ],
            },
            {
                format: [
                    'camelCase',
                    'PascalCase',
                ],
                modifiers: [
                    'exported',
                ],
                selector: [
                    'function',
                ],
            },
            {
                format: [
                    'camelCase',
                ],
                selector: 'variable',
            },
            {
                format: [
                    'UPPER_CASE',
                ],
                modifiers: [
                    'exported',
                ],
                selector: 'variable',
            },
            {
                format: [
                    'PascalCase',
                ],
                selector: [
                    'enumMember',
                    'typeAlias',
                ],
            },
        ],
        'ts/no-confusing-void-expression': [
            'error',
            {
                ignoreArrowShorthand: true,
            },
        ],
        'ts/no-floating-promises': 'error',
        'ts/no-for-in-array': 'error',
        'ts/no-implied-eval': 'error',
        'ts/no-misused-promises': 'off',
        'ts/no-unnecessary-boolean-literal-compare': 'error',
        'ts/no-unnecessary-type-assertion': 'error',
        'ts/no-unsafe-argument': 'off',
        'ts/no-unsafe-assignment': 'off',
        'ts/no-unsafe-call': 'off',
        'ts/no-unsafe-member-access': 'off',
        'ts/no-unsafe-return': 'off',
        'ts/prefer-readonly': 'error',
        'ts/promise-function-async': [
            'error',
            {
                checkArrowFunctions: false,
            },
        ],
        'ts/restrict-plus-operands': 'error',
        'ts/restrict-template-expressions': 'off',
        'ts/switch-exhaustiveness-check': 'error',
        'ts/unbound-method': 'off',
    };

    // Generate the path to the `tsconfig.json`
    const tsconfigPath = configuration?.tsconfigPath
        ? coerceArray(configuration.tsconfigPath)
        : undefined;

    // Return the `typescript` rules
    return [
        {
            // Install the plugins without globs, so they can be configured separately
            name: 'abrahamsaanchez:typescript:setup',
            plugins: {
                antfu: PLUGIN_ANTFU,
                import: PLUGIN_IMPORT,
                ts: PLUGIN_TYPESCRIPT,
            },
        },
        {
            files: [
                GLOB_TS,
                GLOB_TSX,
            ],
            languageOptions: {
                parser: PARSER_TYPESCRIPT,
                parserOptions: {
                    sourceType: 'module',
                    ...tsconfigPath
                        ? {
                                project: tsconfigPath,
                                tsconfigRootDir: cwd(),
                            }
                        : {},
                    ...parserOptions as unknown as ParserOptions,
                },
            },
            name: 'abrahamsaanchez:typescript:rules',
            rules: {
                'no-dupe-class-members': 'off',
                'no-invalid-this': 'off',
                'no-loss-of-precision': 'off',
                'no-redeclare': 'off',
                'no-use-before-define': 'off',
                'no-useless-constructor': 'off',
                'ts/ban-ts-comment': [
                    'error',
                    {
                        'ts-ignore': 'allow-with-description',
                    },
                ],
                'ts/consistent-type-definitions': [
                    'error',
                    'interface',
                ],
                'ts/consistent-type-imports': [
                    'error',
                    {
                        disallowTypeAnnotations: false,
                        prefer: 'type-imports',
                    },
                ],
                'ts/explicit-function-return-type': 'error',
                'ts/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        ignoredMethodNames: [
                        ],
                        overrides: {
                            constructors: 'no-public',
                        },
                    },
                ],
                'ts/explicit-module-boundary-types': 'error',
                'ts/member-ordering': [
                    'error',
                    {
                        default: [
                            'signature',
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',
                            'public-decorated-field',
                            'protected-decorated-field',
                            'private-decorated-field',
                            'public-instance-field',
                            'protected-instance-field',
                            'private-instance-field',
                            'public-field',
                            'protected-field',
                            'private-field',
                            'static-field',
                            'instance-field',
                            'abstract-field',
                            'decorated-field',
                            'field',
                            'public-constructor',
                            'protected-constructor',
                            'private-constructor',
                            'constructor',
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',
                            'public-decorated-method',
                            'protected-decorated-method',
                            'private-decorated-method',
                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',
                            'public-abstract-field',
                            'protected-abstract-field',
                            'public-abstract-method',
                            'protected-abstract-method',
                            'public-method',
                            'protected-method',
                            'private-method',
                            'static-method',
                            'instance-method',
                            'abstract-method',
                            'decorated-method',
                            'method',
                        ],
                    },
                ],

                'ts/no-confusing-non-null-assertion': 'error',

                'ts/no-dupe-class-members': 'error',
                'ts/no-dynamic-delete': 'off',
                'ts/no-explicit-any': 'error',
                'ts/no-extra-non-null-assertion': 'error',
                'ts/no-extraneous-class': 'off',
                'ts/no-import-type-side-effects': 'error',
                'ts/no-invalid-this': [
                    'error',
                    {
                        capIsConstructor: true,
                    }
                ],
                'ts/no-invalid-void-type': 'off',
                'ts/no-non-null-asserted-optional-chain': 'error',
                'ts/no-non-null-assertion': 'off',
                'ts/no-redeclare': 'error',
                'ts/no-require-imports': 'error',
                'ts/no-unused-vars': 'off',
                'ts/no-use-before-define': [
                    'error',
                    {
                        classes: false,
                        functions: false,
                        variables: true,
                    },
                ],
                'ts/no-useless-constructor': 'error',
                'ts/prefer-for-of': 'error',
                'ts/triple-slash-reference': 'off',
                'ts/unified-signatures': 'off',

                ...tsconfigPath ? typeAwareRules : {},
                ...overrides,
            },
        },
        {
            files: [
                '**/*.d.ts',
            ],
            name: 'abrahamsaanchez:typescript:dts-overrides',
            rules: {
                'eslint-comments/no-unlimited-disable': 'off',
                'import/no-duplicates': 'off',
                'no-restricted-syntax': 'off',
                'unused-imports/no-unused-vars': 'off',
            },
        },
        {
            files: [
                '**/*.{test,spec}.ts?(x)',
            ],
            name: 'abrahamsaanchez:typescript:tests-overrides',
            rules: {
                'no-unused-expressions': 'off',
            },
        },
        {
            files: [
                '**/*.js',
                '**/*.cjs',
            ],
            name: 'abrahamsaanchez:typescript:javascript-overrides',
            rules: {
                'ts/no-require-imports': 'off',
            },
        },
    ];
}
