import { GLOB_TESTS } from '../../globs';
import { PLUGIN_JEST } from '../../plugins/jest';
import { PLUGIN_NO_ONLY_TESTS } from '../../plugins/no-only-tests';
import type { ConfigurationItems } from '../../types/configuration-items';
import type { RecursiveRecord } from '../../types/recursive-record';
import type { Rules } from '../../types/rules';
import type { TestConfiguration } from './test-configuration';
import globals from 'globals';

/**
 * Generates the `test` rules for the received configuration.
 *
 * @param configuration
 */
export function test(configuration: TestConfiguration): ConfigurationItems {
    // Extract the required values from the received configuration
    const {
        isInEditor = false,
        isJestEnabled = false,
        overrides = {},
    } = configuration;

    // Return the `test` rules
    return [
        {
            name: 'abrahamsaanchez:test:setup',
            plugins: {
                test: {
                    ...PLUGIN_JEST as Record<string, unknown>,
                    rules: {
                        ...(<RecursiveRecord>PLUGIN_JEST).rules as unknown as Rules,
                        // extend `test/no-only-tests` rule
                        ...(<RecursiveRecord>PLUGIN_NO_ONLY_TESTS).rules as unknown as Rules,
                    },
                },
            },
        },
        {
            files: GLOB_TESTS,
            languageOptions: {
                globals: {
                    ...globals.jest,
                },
            },
            name: 'abrahamsaanchez:test:rules',
            rules: {
                'test/consistent-test-it': [
                    'error',
                    {
                        fn: 'it',
                        withinDescribe: 'it',
                    },
                ],
                'test/expect-expect': [
                    'error',
                    {
                        additionalTestBlockFunctions: [
                        ],
                        assertFunctionNames: [
                            'expect',
                        ],
                    },
                ],
                'test/no-conditional-expect': 'error',
                'test/no-conditional-in-test': 'error',
                'test/no-confusing-set-timeout': 'off',
                'test/no-done-callback': 'error',
                'test/no-duplicate-hooks': 'error',
                'test/no-identical-title': 'error',
                'test/no-only-tests': isInEditor ? 'off' : 'error',
                'test/prefer-hooks-in-order': 'error',
                'test/prefer-hooks-on-top': 'error',
                'test/prefer-lowercase-title': [
                    'error',
                    {
                        ignoreTopLevelDescribe: true,
                    },
                ],
                'test/prefer-spy-on': 'error',
                'test/require-top-level-describe': [
                    'error',
                    {
                        maxNumberOfTopLevelDescribes: 1,
                    },
                ],

                ...isJestEnabled ? {
                    'test/no-deprecated-functions': 'error',
                } : {},

                ...overrides,
            },
        },
    ];
}
