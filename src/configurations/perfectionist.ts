import type { ConfigurationItems } from '../types/configuration-items';

import { PLUGIN_PERFECTIONIST } from '../plugins/perfectionist';

/**
 * Perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export function perfectionist(): ConfigurationItems {
    return [
        {
            name: 'abrahamsaanchez:perfectionist',
            plugins: {
                perfectionist: PLUGIN_PERFECTIONIST,
            },
            rules: {
                'perfectionist/sort-exports': 'error',
                'perfectionist/sort-imports': [
                    'error',
                    {
                        'ignoreCase': false,
                        'order': 'asc',
                        'type': 'alphabetical',
                    },
                ],
                'perfectionist/sort-objects': 'error',
            },
        },
    ];
}
