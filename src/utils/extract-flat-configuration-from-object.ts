import type { ConfigurationItem } from '../types/configuration-item';

/**
 * An array with the kwown properties.
 */
const flatConfigProps: Array<keyof ConfigurationItem> = [
    'files',
    'ignores',
    'languageOptions',
    'linterOptions',
    'processor',
    'plugins',
    'rules',
    'settings',
];

/**
 * Extract a `ConfigurationItem` from the received object.
 *
 * @param object
 */
export function extractConfigurationItemFromObject(object: Record<string, unknown>): ConfigurationItem {
    // Reduce the known properties
    const configurationItem = flatConfigProps.reduce((configurationItem, key) => {
        // Check if the key is in the object
        if (key in object) {
            // Set the key in the configuration item
            configurationItem[key] = object[key] as never;
        }

        return configurationItem;
    }, {} as ConfigurationItem);

    // Return the configuration item
    return configurationItem;
}
