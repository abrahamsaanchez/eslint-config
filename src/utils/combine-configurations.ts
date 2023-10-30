import type { ConfigurationItem } from '../types/configuration-item';
import type { ConfigurationItems } from '../types/configuration-items';

/**
 * Combine array and non-array configs into a single array.
 *
 * @param configurations
 */
export function combineConfigurations(...configurations: (ConfigurationItem | ConfigurationItems)[]): ConfigurationItems {
    return configurations.flatMap(configuration => Array.isArray(configuration)
        ? configuration
        : [
                configuration,
            ]);
}
