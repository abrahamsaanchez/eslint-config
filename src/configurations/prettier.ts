import { PLUGIN_PRETTIER, PRETTIER_CONFIGURATION } from '../plugins/prettier';
import type { ConfigurationItems } from '../types/configuration-items';
import type { RecursiveRecord } from '../types/recursive-record';
import type { Rules } from '../types/rules';

/**
 * Generates the `prettier` rules.
 */
export function prettier(): ConfigurationItems {
    // Extract the `eslint-config-prettier`rules
    const configurationRules: Rules = (<Record<'rules', Rules>>PRETTIER_CONFIGURATION).rules;

    // Extract the `eslint-plugin-prettier`rules
    const pluginRules: Rules = (<RecursiveRecord>PLUGIN_PRETTIER).configs.recommended.rules as unknown as Rules;

    // Return the `prettier` rules
    return [
        {
            name: 'abrahamsaanchez:eslint-prettier',
            plugins: {
                prettier: PLUGIN_PRETTIER,
            },
            rules: {
                ...configurationRules,
                ...pluginRules,
                'prettier/prettier': 'warn',
            },
        },
    ];
}
