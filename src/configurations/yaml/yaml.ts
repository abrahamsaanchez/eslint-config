import { GLOB_YAML } from '../../globs';
import { parserYaml, pluginYaml } from '../../plugins/yaml';
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
        stylistic = {},
    } = configuration;

    // Extract the stylistic properties from the stylistic configuration
    const {
        quotes = 'single',
    } = stylistic;

    // Ensure the indent is 2 spaces to avoid unexpected errors
    const indent = 2;

    // Return the `yaml` rules
    return [
        {
            name: 'abrahamsaanchez:yaml:setup',
            plugins: {
                yaml: pluginYaml,
            },
        },
        {
            files: [
                GLOB_YAML,
            ],
            languageOptions: {
                parser: parserYaml,
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

                ...stylistic
                    ? {
                            'yaml/block-mapping-question-indicator-newline': 'error',
                            'yaml/block-sequence-hyphen-indicator-newline': 'error',
                            'yaml/flow-mapping-curly-newline': 'error',
                            'yaml/flow-mapping-curly-spacing': 'error',
                            'yaml/flow-sequence-bracket-newline': 'error',
                            'yaml/flow-sequence-bracket-spacing': 'error',
                            'yaml/indent': [
                                'error',
                                indent,
                            ],
                            'yaml/key-spacing': 'error',
                            'yaml/no-tab-indent': 'error',
                            'yaml/quotes': [
                                'error',
                                {
                                    avoidEscape: false,
                                    prefer: quotes,
                                },
                            ],
                            'yaml/spaced-comment': 'error',
                        }
                    : {},

                ...overrides,
            },
        },
    ];
}
