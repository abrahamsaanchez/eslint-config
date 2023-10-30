import type { ParserOptions } from '@typescript-eslint/parser';

export interface TypeScriptConfiguration {
    /**
     * Additional parser options for TypeScript.
     */
    parserOptions?: Partial<ParserOptions>;

    /**
     * When this options is provided, type aware rules will be enabled.
     *
     * @see https://typescript-eslint.io/linting/typed-linting/
     */
    tsconfigPath?: string | string[];
}
