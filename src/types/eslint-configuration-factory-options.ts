import type { ConfigurationItem } from './configuration-item';
import type { IsInEditorProperty } from './is-in-editor-property';
import type { StylisticProperty } from './stylistic-property';
import type { TypeScriptConfiguration } from './typescript-configuration';
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore';

export type EslintConfigurationFactoryOptions = IsInEditorProperty & StylisticProperty & {
    /**
     * Determines if the JSONC support is enabled.
     *
     * @default true
     */
    isJSONCEnabled?: boolean;

    /**
     * Determines if the JSX support is enabled.
     *
     * Currently only stylistic rules are included.
     *
     * @default true
     */
    isJSXEnabled?: boolean;

    /**
     * Determines if the YAML support is enabled.
     *
     * @default true
     */
    isYAMLEnabled?: boolean;

    /**
     * Enable gitignore support.
     *
     * Passing an object to configure the options.
     *
     * @see https://github.com/antfu/eslint-config-flat-gitignore
     * @default true
     */
    gitignore?: boolean | FlatGitignoreOptions;

    /**
     * Enable Markdown support.
     *
     * @default true
     */
    markdown?: boolean;

    /**
     * Provide overrides for rules for each integration.
     */
    overrides?: {
        /**
         * Overrides for `javascript` integration.
         */
        javascript?: ConfigurationItem['rules'];

        /**
         * Overrides for `typescript` integration.
         */
        typescript?: ConfigurationItem['rules'];

        /**
         * Overrides for `test` integration.
         */
        test?: ConfigurationItem['rules'];

        /**
         * Overrides for `jsonc` integration.
         */
        jsonc?: ConfigurationItem['rules'];

        /**
         * Overrides for `markdown` integration.
         */
        markdown?: ConfigurationItem['rules'];

        /**
         * Overrides for `yaml` integration.
         */
        yaml?: ConfigurationItem['rules'];
    };

    /**
     * Enable test support.
     *
     * @default true
     */
    test?: boolean;

    /**
     * Enable TypeScript support.
     *
     * Passing an object to enable TypeScript Language Server support.
     *
     * @default auto-detect based on the dependencies
     */
    typescript?: TypeScriptConfiguration;
};
