"use strict";
const createEslintConfig = require("@jamesernator/eslint-config");

const options = {
    ...createEslintConfig({ typescript: false }),
    env: { node: true, es6: true },
};

options.overrides = [
    ...options.overrides || [],
    {
        files: "./*.ts",
        rules: {
            '@typescript-eslint/semi': 'off',
            'spaced-comment': 'off',
            'line-comment-position': 'off',
            'no-inline-comments': 'off',
        },
    },
];

module.exports = options;
