import type { ConfigurationItems } from '../types/configuration-items';

import { GLOB_HTML } from '../globs';
import { PARSER_ANGULAR } from '../plugins/angular';
import { PLUGIN_TAILWINDCSS } from '../plugins/tailwindcss';

/**
 * TailwindCSS plugin for props and items sorting.
 *
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss
 */
export function tailwindcss(): ConfigurationItems {
    return [
        {
            files: [
                GLOB_HTML,
            ],
            languageOptions: {
                parser: PARSER_ANGULAR,
            },
        },
        {
            name: 'abrahamsaanchez:tailwindcss',
            plugins: {
                tailwindcss: PLUGIN_TAILWINDCSS,
            },
            rules: {
                'tailwindcss/classnames-order': 'error',
                'tailwindcss/enforces-negative-arbitrary-values': 'error',
                'tailwindcss/enforces-shorthand': 'error',
                'tailwindcss/no-arbitrary-value': 'off',
                'tailwindcss/no-contradicting-classname': 'error',
                'tailwindcss/no-custom-classname': 'off',
            },
        },
    ];
}
