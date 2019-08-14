module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // parser: 'babel-eslint',
  rules: {
    "no-console": "off",
    "no-use-before-define": ["off", {functions: true, classes: true}],
    "max-len": "off",
    "import/prefer-default-export": "off",
  },
};
