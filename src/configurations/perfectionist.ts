import { pluginPerfectionist } from '../plugins/perfectionist';
import type { ConfigurationItems } from '../types/configuration-items';

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
                perfectionist: pluginPerfectionist,
            },
            rules: {
                'perfectionist/sort-exports': 'error',
                'perfectionist/sort-imports': [
                    'error',
                    {
                        'ignore-case': false,
                        'order': 'asc',
                        'type': 'alphabetical',
                    },
                ],
                'perfectionist/sort-objects': 'error',
            },
        },
    ];
}
