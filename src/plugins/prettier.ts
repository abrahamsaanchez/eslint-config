// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck

import * as _prettierConfiguration from 'eslint-config-prettier';
import * as _pluginPrettier from 'eslint-plugin-prettier';

import { interopDefault } from '../utils/interop-default';

export const PLUGIN_PRETTIER = interopDefault(_pluginPrettier);
export const PRETTIER_CONFIGURATION = interopDefault(_prettierConfiguration);
