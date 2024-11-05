import type { ConfigurationItems } from '../types/configuration-items';

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs';
import { PLUGIN_NODE } from '../plugins/node';

/**
 * Generates the `node` rules.
 */
export function node(): ConfigurationItems {
    // Return the `node` rules
    return [
        {
            files: [
                GLOB_JS,
                GLOB_JSX,
                GLOB_TS,
                GLOB_TSX,
            ],
            name: 'abrahamsaanchez:node',
            plugins: {
                node: PLUGIN_NODE,
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
