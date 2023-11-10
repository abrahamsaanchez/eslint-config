import { GLOB_HTML } from '../globs';
import { parserAngular } from '../plugins/angular';
import { pluginTailwindCSS } from '../plugins/tailwindcss';
import type { ConfigurationItems } from '../types/configuration-items';

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
                parser: parserAngular,
            },
        },
        {
            name: 'abrahamsaanchez:tailwindcss',
            plugins: {
                tailwindcss: pluginTailwindCSS,
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
