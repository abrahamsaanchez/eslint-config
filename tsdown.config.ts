import { defineConfig } from 'tsdown';

export default defineConfig({
    dts: false,
    entry: [
        'src/index.ts',
    ],
    exports: true,
    format: ['esm'],
    shims: true,
});
