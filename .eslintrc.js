module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',

  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
