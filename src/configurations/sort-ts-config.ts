import type { ConfigurationItems } from '../types/configuration-items';

/**
 * Sort `tsconfig.json` files.
 */
export function sortTsconfig(): ConfigurationItems {
    return [
        {
            files: [
                '**/tsconfig.json',
                '**/tsconfig.*.json',
            ],
            name: 'abrahamsaanchez:sort-tsconfig',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                ],
            },
        },
    ];
}
