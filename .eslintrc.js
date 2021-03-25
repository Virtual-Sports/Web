module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],

    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'no-case-declarations': 'error',
        'no-duplicate-imports': 'error',
        'no-console': 1,
        'no-unused-vars': 'error',
        'no-alert': 'error',
        'new-cap': 'error',
        'prefer-template': 'error',
        'no-shadow': 'error',
        'no-underscore-dangle': 'error',
        'prefer-rest-params': 'error',
        'consistent-return': 'error',
        'react-hooks/exhaustive-deps': 0,
        'new-cap': 0,
        camelcase: 'error',
        'object-shorthand': 'error',
        'no-param-reassign': ['error', { props: true }],
        'react/no-unused-prop-types': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                },
                block: {
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
    },
}
