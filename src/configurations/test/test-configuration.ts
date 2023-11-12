import type { IsInEditorProperty } from '../../types/is-in-editor-property';
import type { OverridesProperty } from '../../types/overrides-property';

export type TestConfiguration = IsInEditorProperty & OverridesProperty & {
	/**
	 * Determines if Jest is enabled.
	 */
	isJestEnabled: boolean;
};
