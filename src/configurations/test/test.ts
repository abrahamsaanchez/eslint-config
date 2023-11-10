import { GLOB_TESTS } from '../../globs';
import { pluginNoOnlyTests } from '../../plugins/no-only-tests';
import { pluginVitest } from '../../plugins/vitest';
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
                    ...pluginVitest,
                    rules: {
                        ...pluginVitest.rules,
                        // extend `test/no-only-tests` rule
                        ...pluginNoOnlyTests.rules,
                    },
                },
            },
        },
        {
            files: GLOB_TESTS,
            name: 'abrahamsaanchez:test:rules',
            rules: {
                'test/consistent-test-it': [
                    'error',
                    {
                        fn: 'it',
                        withinDescribe: 'it',
                    },
                ],
                'test/no-identical-title': 'error',
                'test/no-only-tests': isInEditor ? 'off' : 'error',
                'test/prefer-hooks-in-order': 'error',
                'test/prefer-lowercase-title': 'error',

                ...overrides,
            },
        },
    ];
}
