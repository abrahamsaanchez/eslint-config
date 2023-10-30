import { GLOB_EXCLUDE } from '../globs';
import type { ConfigurationItems } from '../types/configuration-items';

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
