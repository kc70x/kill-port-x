module.exports = [
  {
    // Basic environment and parser settings
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly'
      }
    },

    // Files / patterns ESLint should ignore
    ignores: ['node_modules/**', 'coverage/**'],

    // Rules translated from the existing .eslintrc.json
    rules: {
      'no-unused-vars': ['warn', { args: 'none', varsIgnorePattern: '^_' }],
      'no-console': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];
