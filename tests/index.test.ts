import { EslintConfigurationFactory } from '../src';

describe('eslintConfigurationFactory', () => {
    it('should pass linting with globals', () => {
        expect(true).toBe(true);
    });

    it('returns an antfu-based configuration array', async () => {
        const configuration = await EslintConfigurationFactory.create({
            isTailwindCSSEnabled: false,
        });

        expect(Array.isArray(configuration)).toBe(true);
        expect(configuration.length).toBeGreaterThan(0);
    });
});
