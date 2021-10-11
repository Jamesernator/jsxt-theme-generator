"use strict";
const createEslintConfig = require("@jamesernator/eslint-config");

module.exports = {
    ...createEslintConfig({ typescript: false }),
    env: { node: true, es6: true },
};
