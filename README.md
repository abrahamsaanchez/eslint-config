# @abrahamsaanchez/eslint-config

A thin extension of [@antfu/eslint-config](https://github.com/antfu/eslint-config) for [ESLint](https://eslint.org).

- Uses `@antfu/eslint-config` as the base.
- Keeps this package's defaults on top: 4 spaces, single quotes, semicolons.
- Preserves YAML indentation at 2 spaces.
- Keeps JSON, Markdown, YAML and TypeScript support enabled.
- Adds package and tsconfig key sorting plus Tailwind CSS rules.
- Respects `.gitignore` by default.
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily.

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

You can still pass `@antfu/eslint-config` options directly:

```js
// eslint.config.mjs
import { EslintConfigurationFactory } from '@abrahamsaanchez/eslint-config';

export default EslintConfigurationFactory.create({
    typescript: {
        tsconfigPath: 'tsconfig.json',
    },
    vue: true,
});
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
