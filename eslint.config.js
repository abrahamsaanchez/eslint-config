// eslint-disable-next-line antfu/no-import-dist
import { EslintConfigurationFactory } from './dist/index.mjs';

// Generate the eslint configuration
const CONFIGURATION = EslintConfigurationFactory.create({
    isTailwindCSSEnabled: false,
    typescript: {},
}, {
    files: [
        '**/*.ts',
        'eslint.config.js',
    ],
});

// Export the eslint configuration
export default CONFIGURATION;
