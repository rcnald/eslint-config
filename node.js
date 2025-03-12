// @ts-check

import globals from 'globals'
import config from './base.js'

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      camelcase: 'off',
      'no-useless-constructor': 'off',
      'no-new': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
