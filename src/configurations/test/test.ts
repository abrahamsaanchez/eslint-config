import { GLOB_TESTS } from '../../globs';
import { pluginJest } from '../../plugins/jest';
import { pluginNoOnlyTests } from '../../plugins/no-only-tests';
import type { ConfigurationItems } from '../../types/configuration-items';
import type { TestConfiguration } from './test-configuration';

/**
 * Generates the `test` rules for the received configuration.
 *
 * @param configuration
 */
export function test(configuration: TestConfiguration): ConfigurationItems {
    // Extract the required values from the received configuration
    const {
        isInEditor = false,
        overrides = {},
    } = configuration;

    // Return the `test` rules
    return [
        {
            name: 'abrahamsaanchez:test:setup',
            plugins: {
                test: {
                    ...pluginJest,
                    rules: {
                        ...pluginJest.rules,
                        // extend `test/no-only-tests` rule
                        ...pluginNoOnlyTests.rules,
                    },
                },
            },
        },
        {
            files: GLOB_TESTS,
            languageOptions: {
                globals: {
                    'jest/globals': true,
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
                'test/no-deprecated-functions': 'error',
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

                ...overrides,
            },
        },
    ];
}
