module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaFeatures: {
   jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 plugins: ['react', '@typescript-eslint'],
 rules: {
  'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  'no-shadow': 'off',
  'import/extensions': [
   'error',
   'ignorePackages',
   {
    js: 'never',
    mjs: 'never',
    jsx: 'never',
    ts: 'never',
    tsx: 'never',
   },
  ],
  'import/no-unresolved': 'off',
 },
 settings: {
  'import/parsers': {
   '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'], typescript: {} } },
 },
}
