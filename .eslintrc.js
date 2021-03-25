module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    },
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'never',
                component: 'any',
            },
            svg: 'always',
            math: 'always',
        }],
        indent: ['error', 4, {SwitchCase: 1}],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'block-scoped-var': 'error',
    },
}
