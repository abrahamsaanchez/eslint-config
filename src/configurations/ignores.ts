import type { ConfigurationItems } from '../types/configuration-items';

import { GLOB_EXCLUDE } from '../globs';

/**
 * Generates the `ignores` rules.
 */
export function ignores(): ConfigurationItems {
    // Return the `ignores` rules
    return [
        {
            ignores: GLOB_EXCLUDE,
        },
    ];
}
