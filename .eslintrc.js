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
        'no-unused-vars': 'error',
        'no-alert': 1,
        'new-cap': 0,
        'prefer-template': 'error',
        'no-shadow': 'error',
        'no-underscore-dangle': 0,
        'prefer-rest-params': 'error',
        'consistent-return': 'error',
        camelcase: 'error',
        'object-shorthand': 'error',
        'no-param-reassign': ['error', { props: false }],
        'react/no-unused-prop-types': 'error',
        'no-console': 1,
        'react-hooks/exhaustive-deps': 0,
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
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
}
