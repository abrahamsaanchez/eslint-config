import { pluginNode } from '../plugins/node';
import type { ConfigurationItems } from '../types/configuration-items';

/**
 * Generates the `node` rules.
 */
export function node(): ConfigurationItems {
    // Return the `node` rules
    return [
        {
            name: 'abrahamsaanchez:node',
            plugins: {
                node: pluginNode,
            },
            rules: {
                'node/handle-callback-err': [
                    'error',
                    '^(err|error)$',
                ],
                'node/no-deprecated-api': 'error',
                'node/no-exports-assign': 'error',
                'node/no-new-require': 'error',
                'node/no-path-concat': 'error',
                'node/prefer-global/buffer': [
                    'error',
                    'never',
                ],
                'node/prefer-global/process': [
                    'error',
                    'never',
                ],
                'node/process-exit-as-throw': 'error',
            },
        },
    ];
}
