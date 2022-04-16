const typescriptRules = {
    'quotes': [
        'error',
        'single'
    ],
    'quote-props': [
        'error',
        'consistent'
    ],
    'comma-dangle': [
        'error',
        'never'
    ],
    'no-trailing-spaces': 'error',
    'no-extra-semi': 'error',
    'no-unused-vars': [
        'error',
        {
            args: 'after-used', varsIgnorePattern: '^__unused'
        }
    ],
    'semi': [
        'error',
        'always'
    ]
};

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', '@remix-run/eslint-config', '@remix-run/eslint-config/node'],
    plugins: ['@typescript-eslint'],
    overrides: [
        { files: ['*.tsx'], rules: typescriptRules }
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    }
};