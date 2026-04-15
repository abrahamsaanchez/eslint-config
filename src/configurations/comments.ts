import type { ConfigurationItems } from '../types/configuration-items';

import { GLOB_HTML } from '../globs';

/**
 * Generates the `comments` rules.
 */
export function comments(): ConfigurationItems {
    // Return the `comments` rules
    return [
        {
            ignores: [GLOB_HTML],
            name: 'abrahamsaanchez:eslint-comments',
            rules: {
                'eslint-comments/disable-enable-pair': [
                    'error',
                    {
                        allowWholeFile: true,
                    },
                ],
                'eslint-comments/no-aggregating-enable': 'error',
                'eslint-comments/no-duplicate-disable': 'error',
                'eslint-comments/no-unlimited-disable': 'error',
                'eslint-comments/no-unused-enable': 'error',
            },
        },
    ];
}
