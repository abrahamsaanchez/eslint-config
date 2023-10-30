import { pluginComments } from '../plugins/comments';
import type { ConfigurationItems } from '../types/configuration-items';

/**
 * Generates the `comments` rules.
 */
export function comments(): ConfigurationItems {
    // Return the `comments` rules
    return [
        {
            name: 'abrahamsaanchez:eslint-comments',
            plugins: {
                'eslint-comments': pluginComments as unknown,
            },
            rules: {
                'eslint-comments/no-aggregating-enable': 'error',
                'eslint-comments/no-duplicate-disable': 'error',
                'eslint-comments/no-unlimited-disable': 'error',
                'eslint-comments/no-unused-enable': 'error',
            },
        },
    ];
}
