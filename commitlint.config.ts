import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

// Generate the scopes
const scopes = {
    deps: {
        description: `Changes to external dependencies.`,
    },
    misc: {
        description: `Changes not related to any scope (do not use it for 'feat' or 'fix' types).`,
    },
};

// Generate the types
const types = {
    build: {
        description: 'Changes that affect the build system or external dependencies.',
        emoji: '🛠',
        title: 'Builds',
    },
    chore: {
        description: 'Other changes that don\'t modify src or test files',
        emoji: '♻️',
        title: 'Chores',
    },
    ci: {
        description:
            'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
        emoji: '⚙️',
        title: 'Continuous Integrations',
    },
    docs: {
        description: 'Documentation only changes.',
        emoji: '📚',
        title: 'Documentation',
    },
    feat: {
        description: 'A new feature.',
        emoji: '✨',
        title: 'Features',
    },
    fix: {
        description: 'A bug fix.',
        emoji: '🐛',
        title: 'Bug Fixes',
    },
    perf: {
        description: 'A code change that improves performance.',
        emoji: '🚀',
        title: 'Performance Improvements',
    },
    refactor: {
        description: 'A code change that neither fixes a bug nor adds a feature.',
        emoji: '📦',
        title: 'Code Refactoring',
    },
    revert: {
        description: 'Reverts a previous commit',
        emoji: '🗑',
        title: 'Reverts',
    },
    style: {
        description:
            'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).',
        emoji: '💎',
        title: 'Styles',
    },
    test: {
        description: 'Adding missing tests or correcting existing tests.',
        emoji: '🚨',
        title: 'Tests',
    },
};

// Generate the configuration
const CONFIGURATION: UserConfig = {
    prompt: {
        questions: {
            body: {
                description: 'Provide a longer description of the change',
            },
            breaking: {
                description: 'Describe the breaking changes',
            },
            breakingBody: {
                description:
                    'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
            },
            isBreaking: {
                description: 'Are there any breaking changes?',
            },
            isIssueAffected: {
                description: 'Does this change affect any open issues?',
            },
            issues: {
                description: 'Add issue references (e.g. "fix #123", "re #123".)',
            },
            issuesBody: {
                description:
                    'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
            },
            scope: {
                description: 'What is the scope of this change',
                enum: scopes,
            },
            subject: {
                description: 'Write a short, imperative tense description of the change',
            },
            type: {
                description: 'Select the type of change that you\'re committing',
                enum: types,
            },
        },
    },
    rules: {
        'body-leading-blank': [
            RuleConfigSeverity.Error,
            'always',
        ],
        'header-max-length': [
            RuleConfigSeverity.Error,
            'always',
            100,
        ],
        'scope-enum': [
            RuleConfigSeverity.Error,
            'always',
            Object.keys(scopes),
        ],
        'subject-case': [
            RuleConfigSeverity.Error,
            'always',
            [
                'sentence-case',
            ],
        ],
        'subject-empty': [
            RuleConfigSeverity.Error,
            'never',
        ],
        'subject-full-stop': [
            RuleConfigSeverity.Error,
            'always',
            '.',
        ],
        'type-case': [
            RuleConfigSeverity.Error,
            'always',
            'lower-case',
        ],
        'type-empty': [
            RuleConfigSeverity.Error,
            'never',
        ],
        'type-enum': [
            RuleConfigSeverity.Error,
            'always',
            Object.keys(types),
        ],
    },
};

// Export the configuration
export default CONFIGURATION;
