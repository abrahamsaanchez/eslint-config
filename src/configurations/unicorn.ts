import type { ConfigurationItems } from '../types/configuration-items';

import { PLUGIN_UNICORN } from '../plugins/unicorn';

/**
 * Generates the `unicorn` rules.
 */
export function unicorn(): ConfigurationItems {
    // Return the `unicorn` rules
    return [
        {
            name: 'abrahamsaanchez:unicorn',
            plugins: {
                unicorn: PLUGIN_UNICORN,
            },
            rules: {
                'unicorn/better-regex': 'error',
                'unicorn/catch-error-name': 'error',
                'unicorn/custom-error-definition': 'off',
                'unicorn/error-message': 'error',
                'unicorn/escape-case': 'error',
                'unicorn/explicit-length-check': 'error',
                'unicorn/filename-case': [
                    'error',
                    {
                        cases: {
                            kebabCase: true,
                            pascalCase: true,
                        },
                        ignore: [
                            /^[A-Z]+\..*$/,
                        ],
                    },
                ],
                'unicorn/new-for-builtins': 'error',
                'unicorn/no-array-callback-reference': 'error',
                'unicorn/no-array-method-this-argument': 'error',
                'unicorn/no-array-push-push': 'error',
                'unicorn/no-console-spaces': 'error',
                'unicorn/no-for-loop': 'error',
                'unicorn/no-hex-escape': 'error',
                'unicorn/no-instanceof-array': 'error',
                'unicorn/no-invalid-remove-event-listener': 'error',
                'unicorn/no-lonely-if': 'error',
                'unicorn/no-new-array': 'error',
                'unicorn/no-new-buffer': 'error',
                'unicorn/no-static-only-class': 'error',
                'unicorn/no-unnecessary-await': 'error',
                'unicorn/no-zero-fractions': `error`,
                'unicorn/prefer-add-event-listener': 'off',
                'unicorn/prefer-array-find': 'error',
                'unicorn/prefer-array-flat-map': 'error',
                'unicorn/prefer-array-index-of': 'error',
                'unicorn/prefer-array-some': 'error',
                'unicorn/prefer-at': 'error',
                'unicorn/prefer-blob-reading-methods': 'error',
                'unicorn/prefer-date-now': 'error',
                'unicorn/prefer-dom-node-append': 'error',
                'unicorn/prefer-dom-node-dataset': 'error',
                'unicorn/prefer-dom-node-remove': 'error',
                'unicorn/prefer-dom-node-text-content': 'error',
                'unicorn/prefer-includes': 'error',
                'unicorn/prefer-keyboard-event-key': 'error',
                'unicorn/prefer-math-trunc': 'error',
                'unicorn/prefer-modern-dom-apis': 'error',
                'unicorn/prefer-modern-math-apis': 'error',
                'unicorn/prefer-negative-index': 'error',
                'unicorn/prefer-node-protocol': 'error',
                'unicorn/prefer-number-properties': 'error',
                'unicorn/prefer-optional-catch-binding': 'error',
                'unicorn/prefer-prototype-methods': 'error',
                'unicorn/prefer-query-selector': 'error',
                'unicorn/prefer-reflect-apply': 'error',
                'unicorn/prefer-regexp-test': 'error',
                'unicorn/prefer-string-replace-all': 'error',
                'unicorn/prefer-string-slice': 'error',
                'unicorn/prefer-string-starts-ends-with': 'error',
                'unicorn/prefer-string-trim-start-end': 'error',
                'unicorn/prefer-top-level-await': 'off',
                'unicorn/prefer-type-error': 'error',
                'unicorn/throw-new-error': 'error',
            },
        },
    ];
}
