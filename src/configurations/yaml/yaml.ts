import { GLOB_YAML } from '../../globs';
import { PARSER_YAML, PLUGIN_YAML } from '../../plugins/yaml';
import type { ConfigurationItems } from '../../types/configuration-items';
import type { YamlConfiguration } from './yaml-configuration';

/**
 * Generates the `yaml` rules for the received configuration.
 *
 * @param configuration
 */
export function yaml(configuration: YamlConfiguration): ConfigurationItems {
    // Extract the required values from the received configuration
    const {
        overrides = {},
    } = configuration;

    // Return the `yaml` rules
    return [
        {
            name: 'abrahamsaanchez:yaml:setup',
            plugins: {
                yaml: PLUGIN_YAML,
            },
        },
        {
            files: [
                GLOB_YAML,
            ],
            languageOptions: {
                parser: PARSER_YAML,
            },
            name: 'abrahamsaanchez:yaml:rules',
            rules: {
                'style/spaced-comment': 'off',

                'yaml/block-mapping': 'error',
                'yaml/block-sequence': 'error',
                'yaml/no-empty-key': 'error',
                'yaml/no-empty-sequence-entry': 'error',
                'yaml/no-irregular-whitespace': 'error',
                'yaml/plain-scalar': 'error',

                ...overrides,
            },
        },
    ];
}
