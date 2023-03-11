module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
    cucumber: true
  },
  extends: ['airbnb-base', 'eslint-config-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', { js: 'ignorePackages' }],
  },
};
