import { pluginAntfu } from '../../plugins/antfu';
import { pluginImport } from '../../plugins/import';
import type { ConfigurationItems } from '../../types/configuration-items';
import { coerceArray } from '../../utils/coerce-array';
import type { ImportsConfiguration } from './imports-configuration';

/**
 * Generates the `imports` rules for the received configuration.
 *
 * @param configuration
 */
export function imports(configuration: ImportsConfiguration): ConfigurationItems {
    // Determines if `stylistics` is enabled
    const isStylisticEnabled = Object.keys(configuration.stylistic ?? {}).length > 0;

    // Determines if `typescript` is enabled
    const isTypescriptEnabled = Object.keys(configuration.typescript ?? {}).length > 0;

    // Generate the path to the `tsconfig.json`
    const tsconfigPath = isTypescriptEnabled
        ? coerceArray(configuration.typescript!.tsconfigPath)
        : undefined;

    // Return the `imports` rules
    return [
        {
            name: 'abrahamsaanchez:imports',
            plugins: {
                antfu: pluginAntfu,
                import: pluginImport,
            },
            rules: {
                'antfu/import-dedupe': 'error',
                'antfu/no-import-node-modules-by-path': 'error',

                'import/first': 'error',
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

                ...isStylisticEnabled
                    ? {
                            'import/newline-after-import': 'error',
                        }
                    : {},
            },
            settings: {
                ...isTypescriptEnabled
                    ? {
                            'import/resolver': {
                                typescript: {
                                    project: tsconfigPath,
                                },
                            },
                        }
                    : {},
            },
        },
    ];
}
