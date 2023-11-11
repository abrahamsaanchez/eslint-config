import { PLUGIN_JSDOC } from '../plugins/jsdoc';
import type { ConfigurationItems } from '../types/configuration-items';

/**
 * Generates the `jsdoc` rules for the received configuration.
 */
export function jsdoc(): ConfigurationItems {
    // Return the `jsdoc` rules
    return [
        {
            name: 'abrahamsaanchez:jsdoc',
            plugins: {
                jsdoc: PLUGIN_JSDOC,
            },
            rules: {
                'jsdoc/check-access': 'warn',
                'jsdoc/check-param-names': [
                    'error',
                    {
                        enableFixer: true,
                    },
                ],
                'jsdoc/check-property-names': 'warn',
                'jsdoc/check-types': 'warn',
                'jsdoc/empty-tags': 'warn',
                'jsdoc/implements-on-classes': 'warn',
                'jsdoc/no-defaults': 'warn',
                'jsdoc/no-multi-asterisks': 'warn',
                'jsdoc/require-description': 'off',
                'jsdoc/require-description-complete-sentence': 'error',
                'jsdoc/require-example': 'off',
                'jsdoc/require-file-overview': 'off',
                'jsdoc/require-hyphen-before-param-description': 'error',
                'jsdoc/require-jsdoc': [
                    'error',
                    {
                        require: {
                            ArrowFunctionExpression: false,
                            ClassDeclaration: false,
                            ClassExpression: true,
                            FunctionDeclaration: true,
                            FunctionExpression: true,
                            MethodDefinition: true,
                        },
                    },
                ],
                'jsdoc/require-param': 'error',
                'jsdoc/require-param-description': 'off',
                'jsdoc/require-param-name': 'warn',
                'jsdoc/require-param-type': 'off',
                'jsdoc/require-property': 'warn',
                'jsdoc/require-property-description': 'warn',
                'jsdoc/require-property-name': 'warn',
                'jsdoc/require-returns': 'off',
                'jsdoc/require-returns-check': 'warn',
                'jsdoc/require-returns-description': 'warn',
                'jsdoc/require-yields-check': 'warn',
                'jsdoc/tag-lines': [
                    'error',
                    'always',
                    {
                        applyToEndTag: false,
                        count: 0,
                        startLines: 1,
                    },
                ],
            },
        },
    ];
}
