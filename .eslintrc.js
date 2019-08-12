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
    '@typescript-eslint/explicit-function-return-type': "off",
    "@typescript-eslint/prefer-interface": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
