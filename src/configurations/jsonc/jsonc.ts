import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../../globs';
import { PARSER_JSONC, PLUGIN_JSONC } from '../../plugins/jsonc';
import type { ConfigurationItems } from '../../types/configuration-items';
import type { JsoncConfiguration } from './jsonc-configuration';

/**
 * Generates the `jsonc` rules for the received configuration.
 *
 * @param configuration
 */
export function jsonc(configuration: JsoncConfiguration): ConfigurationItems {
    // Extract the required values from the received configuration
    const {
        overrides = {},
    } = configuration;

    // Return the `jsonc` rules
    return [
        {
            name: 'abrahamsaanchez:jsonc:setup',
            plugins: {
                jsonc: PLUGIN_JSONC,
            },
        },
        {
            files: [
                GLOB_JSON,
                GLOB_JSON5,
                GLOB_JSONC,
            ],
            languageOptions: {
                parser: PARSER_JSONC,
            },
            name: 'abrahamsaanchez:jsonc:rules',
            rules: {
                'jsonc/no-bigint-literals': 'error',
                'jsonc/no-binary-expression': 'error',
                'jsonc/no-binary-numeric-literals': 'error',
                'jsonc/no-dupe-keys': 'error',
                'jsonc/no-escape-sequence-in-identifier': 'error',
                'jsonc/no-floating-decimal': 'error',
                'jsonc/no-hexadecimal-numeric-literals': 'error',
                'jsonc/no-infinity': 'error',
                'jsonc/no-multi-str': 'error',
                'jsonc/no-nan': 'error',
                'jsonc/no-number-props': 'error',
                'jsonc/no-numeric-separators': 'error',
                'jsonc/no-octal': 'error',
                'jsonc/no-octal-escape': 'error',
                'jsonc/no-octal-numeric-literals': 'error',
                'jsonc/no-parenthesized': 'error',
                'jsonc/no-plus-sign': 'error',
                'jsonc/no-regexp-literals': 'error',
                'jsonc/no-sparse-arrays': 'error',
                'jsonc/no-template-literals': 'error',
                'jsonc/no-undefined-value': 'error',
                'jsonc/no-unicode-codepoint-escapes': 'error',
                'jsonc/no-useless-escape': 'error',
                'jsonc/space-unary-ops': 'error',
                'jsonc/valid-json-number': 'error',

                ...overrides,
            },
        },
    ];
}
