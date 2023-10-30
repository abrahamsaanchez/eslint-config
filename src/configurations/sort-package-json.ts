import type { ConfigurationItems } from '../types/configuration-items';

/**
 * Sort `package.json` files.
 */
export function sortPackageJson(): ConfigurationItems {
    return [
        {
            files: [
                '**/package.json',
            ],
            name: 'abrahamsaanchez:sort-package-json',
            rules: {
                'jsonc/sort-array-values': [
                    'error',
                    {
                        order: {
                            type: 'asc',
                        },
                        pathPattern: '^files$',
                    },
                ],
                'jsonc/sort-keys': [
                    'error',
                    {
                        order: [
                            'publisher',
                            'name',
                            'displayName',
                            'type',
                            'version',
                            'private',
                            'packageManager',
                            'description',
                            'author',
                            'license',
                            'funding',
                            'homepage',
                            'repository',
                            'bugs',
                            'keywords',
                            'categories',
                            'sideEffects',
                            'exports',
                            'main',
                            'module',
                            'unpkg',
                            'jsdelivr',
                            'types',
                            'typesVersions',
                            'bin',
                            'icon',
                            'files',
                            'engines',
                            'activationEvents',
                            'contributes',
                            'scripts',
                            'dependencies',
                            'devDependencies',
                            'optionalDependencies',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'pnpm',
                            'overrides',
                            'resolutions',
                            'husky',
                            'simple-git-hooks',
                            'lint-staged',
                            'eslintConfig',
                        ],
                        pathPattern: '^$',
                    },
                    {
                        order: {
                            type: 'asc',
                        },
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                    },
                    {
                        order: {
                            type: 'asc',
                        },
                        pathPattern: '^resolutions$',
                    },
                    {
                        order: {
                            type: 'asc',
                        },
                        pathPattern: '^pnpm.overrides$',
                    },
                    {
                        order: [
                            'types',
                            'import',
                            'require',
                            'default',
                        ],
                        pathPattern: '^exports.*$',
                    },
                ],
            },
        },
    ];
}
