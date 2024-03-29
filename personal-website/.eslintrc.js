module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'import/no-extraneous-dependencies': ["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}],
  },
};
