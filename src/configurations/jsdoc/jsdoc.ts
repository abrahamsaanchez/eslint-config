import { pluginJsdoc } from '../../plugins/jsdoc';
import type { ConfigurationItems } from '../../types/configuration-items';
import type { JsdocConfiguration } from './jsdoc-configuration';

/**
 * Generates the `jsdoc` rules for the received configuration.
 *
 * @param configuration
 */
export function jsdoc(configuration: JsdocConfiguration): ConfigurationItems {
    // Determines if the stylistics are enabled
    const isStylisticEnabled = Object.keys(configuration.stylistic ?? {}).length > 0;

    // Return the `jsdoc` rules
    return [
        {
            name: 'abrahamsaanchez:jsdoc',
            plugins: {
                jsdoc: pluginJsdoc,
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

                ...isStylisticEnabled
                    ? {
                            'jsdoc/check-alignment': 'warn',
                            'jsdoc/multiline-blocks': 'warn',
                        }
                    : {},
            },
        },
    ];
}
