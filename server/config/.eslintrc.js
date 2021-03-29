module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb/base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
  },
};
