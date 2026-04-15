import type { ConfigurationItems } from '../../types/configuration-items';
import type { ImportsConfiguration } from './imports-configuration';

import { PLUGIN_IMPORT } from '../../plugins/import';

/**
 * Generates the `imports` rules for the received configuration.
 *
 * @param configuration
 */
export function imports(configuration: ImportsConfiguration): ConfigurationItems {
    // Determines if `typescript` is enabled
    const isTypescriptEnabled = configuration.typescript != null;

    // Return the `imports` rules
    return [
        {
            name: 'abrahamsaanchez:imports',
            plugins: {
                import: PLUGIN_IMPORT,
            },
            rules: {
                'antfu/import-dedupe': 'error',
                'antfu/no-import-dist': 'error',
                'antfu/no-import-node-modules-by-path': 'error',

                'import/first': 'error',
                'import/newline-after-import': 'error',
                'import/no-duplicates': [
                    'error',
                    {
                        'prefer-inline': true,
                    },
                ],
                'import/no-mutable-exports': 'error',
                'import/no-named-default': 'error',
                'import/no-self-import': 'error',
                'import/no-unresolved': 'error',
                'import/no-webpack-loader-syntax': 'error',
                'import/order': 'off',
            },
            settings: {
                ...isTypescriptEnabled
                    ? {
                            'import-x/extensions': [
                                '.ts',
                                '.tsx',
                                '.cts',
                                '.mts',
                                '.js',
                                '.jsx',
                                '.cjs',
                                '.mjs',
                            ],
                            'import-x/parsers': {
                                '@typescript-eslint/parser': [
                                    '.ts',
                                    '.tsx',
                                    '.cts',
                                    '.mts',
                                ],
                            },
                            'import-x/resolver': {
                                typescript: {
                                    project: 'tsconfig.json',
                                },
                            },
                        }
                    : {},
            },
        },
    ];
}
