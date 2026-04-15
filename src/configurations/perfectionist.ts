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
            rules: {
                'perfectionist/sort-exports': 'error',
                'perfectionist/sort-imports': [
                    'error',
                    {
                        ignoreCase: false,
                        order: 'asc',
                        type: 'alphabetical',
                    },
                ],
                'perfectionist/sort-objects': 'error',
            },
        },
    ];
}
