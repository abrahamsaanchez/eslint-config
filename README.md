# @abrahamsaanchez/eslint-config

A configuration factory for [ESLint](https://eslint.org), heavily inspired from [@antfu/eslint-config](https://github.com/antfu/eslint-config) but allowing Prettier.

- Single quotes, no semi.
- Indent to 4 spaces by default (in YAML files we use 2 spaces to avoid errors).
- Designed to work with TypeScript and JSX out-of-box.
- Lints also for json, markdown and yaml.
- Sorted imports, dangling commas.
- Reasonable defaults, best practices, only one-line of config
- Respects `.gitignore` by default
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!

> [!IMPORTANT]
> This config is written in the new [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Usage

### Install

```bash
# Using NPM
npm i -D eslint @abrahamsaanchez/eslint-config
```

### Create config file

```js
// eslint.config.mjs
import { EslintConfigurationFactory } from '@abrahamsaanchez/eslint-config';

export default EslintConfigurationFactory.create();
```

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

## VS Code support

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
    // Code Actions for the editor on save
    "editor.codeActionsOnSave": {
        // Fix all the rules with eslint
        "source.fixAll.eslint": true
    },

    // Ensure the files are formatted on save
    "editor.formatOnSave": true,

    // Enable the ESlint flat config support
    "eslint.experimental.useFlatConfig": true,

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
        "vue",
        "yaml"
    ]
}
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Abraham Sánchez](https://github.com/abrahamsaanchez)
