# @abrahamsaanchez/eslint-config

A configuration factory for [ESLint](https://eslint.org), almost forked from [@antfu/eslint-config](https://github.com/antfu/eslint-config) but with some changes.

- Single quotes, no semi.
- Indent to 4 spaces by default (in YAML files we use 2 spaces to avoid errors).
- Auto fix for formatting (aimed to be used standalone **without** Prettier).
- Designed to work with TypeScript and JSX out-of-box.
- Lints also for json, markdown and yaml.
- Sorted imports, dangling commas.
- Reasonable defaults, best practices, only one-line of config
- Respects `.gitignore` by default
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Using [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)

> [!IMPORTANT]
> This config is written in the new [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Usage

### Install

```bash
# Using NPM
npm i -D eslint @abrahamsaanchez/eslint-config
```

### Create config file

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
// eslint.config.js
import { EslintConfigurationFactory } from '@abrahamsaanchez/eslint-config';

export default EslintConfigurationFactory.create();
```

> Note that `.eslintignore` no longer works in Flat config.

### Add script for package.json

For example:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

## VS Code support (auto fix)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
    // Enable the eslint formatter
    "eslint.format.enable": true,

    // Enable the ESlint flat config support
    "eslint.experimental.useFlatConfig": true,

    // Disable the default formatter, use eslint instead
    "prettier.enable": false,
    "editor.formatOnSave": false,

    // Auto fix
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.organizeImports": "never"
    },

    // Silent the stylistic rules in the IDE, but still auto fix them
    "eslint.rules.customizations": [
        { "rule": "style/*", "severity": "off" },
        { "rule": "*-indent", "severity": "off" },
        { "rule": "*-spacing", "severity": "off" },
        { "rule": "*-spaces", "severity": "off" },
        { "rule": "*-order", "severity": "off" },
        { "rule": "*-dangle", "severity": "off" },
        { "rule": "*-newline", "severity": "off" },
        { "rule": "*quotes", "severity": "off" },
        { "rule": "*semi", "severity": "off" }
    ],

    // Enable eslint for all supported languages
    "eslint.validate": [
        "html",
        "javascript",
        "javascriptreact",
        "json",
        "jsonc",
        "markdown",
        "typescript",
        "typescriptreact",
        "yaml"
    ]
}
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Abraham Sánchez](https://github.com/abrahamsaanchez)
