import { comments, ignores, imports, javascript, jsdoc, jsonc, markdown, node, perfectionist, sortPackageJson, sortTsconfig, stylistic, test, typescript, unicorn, yaml } from './configurations';
import type { ConfigurationItem } from './types/configuration-item';
import type { ConfigurationItems } from './types/configuration-items';
import type { EslintConfigurationFactoryOptions } from './types/eslint-configuration-factory-options';
import { combineConfigurations } from './utils/combine-configurations';
import { extractConfigurationItemFromObject } from './utils/extract-flat-configuration-from-object';
import gitignore from 'eslint-config-flat-gitignore';
import { isPackageExists } from 'local-pkg';
import fs from 'node:fs';
import process from 'node:process';

export class EslintConfigurationFactory {
    /**
     * Creates a flat configuration for `eslint`.
     *
     * @param options
     * @param userConfigs
     */
    public static create(options: EslintConfigurationFactoryOptions & ConfigurationItem = {}, ...userConfigs: (ConfigurationItem | ConfigurationItems)[]): ConfigurationItems {
        // Extract the required values from the received options
        const {
            gitignore: isGitignoreEnabled = true,
            isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI),
            overrides = {},
        } = options;

        // Determines if `typescript` is enabled
        const isTypescriptEnabled = isPackageExists('typescript');

        // Generate the stylistic configuration
        const stylisticConfiguration = typeof options.stylistic === 'object'
            ? options.stylistic
            : {};

        // Check if the stylistic configuration is defined and the `isJSXEnabled` property is not defined
        if (stylisticConfiguration && !('isJSXEnabled' in stylisticConfiguration)) {
            // Set the JSX enabled as the options one
            stylisticConfiguration.isJSXEnabled = options.isJSXEnabled ?? true;
        }

        // Generate the array of configurations
        const configurations: Array<ConfigurationItems> = [
        ];

        // Check if the `gitignore` support is enabled
        if (isGitignoreEnabled) {
            // Check if a `FlatGitignoreOptions` is provided
            if (typeof isGitignoreEnabled !== 'boolean') {
                // Push the `gitignore` rules for the received options
                configurations.push([
                    gitignore(isGitignoreEnabled),
                ]);
            }
            else if (fs.existsSync('.gitignore')) {
                // Push the default `gitignore` rules
                configurations.push([
                    gitignore(),
                ]);
            }
        }

        // Generate the base configurations
        configurations.push(
            ignores(),
            javascript({
                isInEditor: isInEditor,
                overrides: overrides.javascript,
            }),
            comments(),
            node(),
            jsdoc({
                stylistic: stylisticConfiguration,
            }),
            imports({
                stylistic: stylisticConfiguration,
                typescript: isTypescriptEnabled ? options.typescript : {},
            }),
            unicorn(),
            perfectionist(),
        );

        // Check if `typescript` configuration is enabled
        if (isTypescriptEnabled) {
            // Push the `typescript` rules
            configurations.push(typescript({
                ...options.typescript,
                overrides: overrides.typescript,
            }));
        }

        // Check if the `stylistic` configuration is enabled
        if (stylisticConfiguration) {
            // Push the `stylistic` rules
            configurations.push(stylistic(stylisticConfiguration));
        }

        // Check if the `test` support is enabled
        if (options.test ?? true) {
            // Push the `test` rules
            configurations.push(test({
                isInEditor: isInEditor,
                overrides: overrides.test,
            }));
        }

        // Check if the `jsonc` support is enabled
        if (options.isJSONCEnabled ?? true) {
            // Push the `json` rules and the sorterers for `package.json` and `tsconfig.*.json` files
            configurations.push(
                jsonc({
                    overrides: overrides.jsonc,
                    stylistic: stylisticConfiguration,
                }),
                sortPackageJson(),
                sortTsconfig(),
            );
        }

        // Check if the `yaml` support is enabled
        if (options.isYAMLEnabled ?? true) {
            // Push the `yaml` rules
            configurations.push(yaml({
                overrides: overrides.yaml,
                stylistic: stylisticConfiguration,
            }));
        }

        // Check if the `markdown` support is enabled
        if (options.markdown ?? true) {
            // Push the `markdown` rules
            configurations.push(markdown({
                overrides: overrides.markdown,
            }));
        }

        // Extract the configuration item from the options
        const configurationItem = extractConfigurationItemFromObject(options as Record<string, unknown>);

        // Check if a configuration item is extracted
        if (Object.keys(configurationItem).length) {
            // Push the configuration item into the configurations
            configurations.push([
                configurationItem,
            ]);
        }

        // Combine the generated configurations and the user configurations
        const merged = combineConfigurations(
            ...configurations,
            ...userConfigs,
        );

        return merged;
    }
}
