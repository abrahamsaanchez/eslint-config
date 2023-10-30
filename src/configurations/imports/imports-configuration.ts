import type { StylisticProperty } from '../../types/stylistic-property';
import type { TypeScriptConfiguration } from '../../types/typescript-configuration';

export type ImportsConfiguration = StylisticProperty & {
    /**
     * The typescript configuration.
     */
    typescript?: TypeScriptConfiguration;
};
