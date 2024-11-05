// @ts-check
// eslint-disable-next-line antfu/no-import-dist
import { EslintConfigurationFactory } from './dist/index.js';

// Generate the eslint configuration
const CONFIGURATION = EslintConfigurationFactory.create({
    typescript: {
        parserOptions: {
            project: true,
        },
        tsconfigPath: 'tsconfig.json',
    },
});

// Export the eslint configuration
export default CONFIGURATION;
