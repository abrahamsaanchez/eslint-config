import type { ConfigurationItems } from '../../types/configuration-items';
import type { MarkdownConfiguration } from './markdown-configuration';

import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE } from '../../globs';
import { PLUGIN_MARKDOWN } from '../../plugins/markdown';

/**
 * Generates the `markdown` rules for the received configuration.
 *
 * @param configuration
 */
export function markdown(configuration: MarkdownConfiguration): ConfigurationItems {
    // Extract the required values from the received configuration
    const {
        overrides = {},
    } = configuration;

    // Return the `markdown` rules
    return [
        {
            name: 'abrahamsaanchez:markdown:setup',
            plugins: {
                markdown: PLUGIN_MARKDOWN,
            },
        },
        {
            files: [
                GLOB_MARKDOWN,
            ],
            name: 'abrahamsaanchez:markdown:processor',
            processor: 'markdown/markdown',
        },
        {
            files: [
                GLOB_MARKDOWN_CODE,
            ],
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        impliedStrict: true,
                    },
                },
            },
            name: 'abrahamsaanchez:markdown:rules',
            rules: {
                'antfu/no-cjs-exports': 'off',
                'antfu/no-ts-export-equal': 'off',

                'import/no-unresolved': 'off',
                'no-alert': 'off',
                'no-console': 'off',
                'no-undef': 'off',
                'no-unused-expressions': 'off',

                'no-unused-vars': 'off',

                'node/prefer-global/process': 'off',
                'style/comma-dangle': 'off',

                'style/eol-last': 'off',
                'ts/consistent-type-imports': 'off',
                'ts/no-namespace': 'off',
                'ts/no-redeclare': 'off',
                'ts/no-require-imports': 'off',
                'ts/no-unused-vars': 'off',
                'ts/no-use-before-define': 'off',

                'ts/no-var-requires': 'off',
                'unicode-bom': 'off',
                'unused-imports/no-unused-imports': 'off',
                'unused-imports/no-unused-vars': 'off',

                // Type aware rules
                ...{
                    'ts/await-thenable': 'off',
                    'ts/dot-notation': 'off',
                    'ts/no-floating-promises': 'off',
                    'ts/no-for-in-array': 'off',
                    'ts/no-implied-eval': 'off',
                    'ts/no-misused-promises': 'off',
                    'ts/no-unnecessary-type-assertion': 'off',
                    'ts/no-unsafe-argument': 'off',
                    'ts/no-unsafe-assignment': 'off',
                    'ts/no-unsafe-call': 'off',
                    'ts/no-unsafe-member-access': 'off',
                    'ts/no-unsafe-return': 'off',
                    'ts/restrict-plus-operands': 'off',
                    'ts/restrict-template-expressions': 'off',
                    'ts/unbound-method': 'off',
                },

                ...overrides,
            },
        },
    ];
}
