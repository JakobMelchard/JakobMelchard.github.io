import globals from 'globals'
import base from '@jakobmelchard/config/eslint'

// assets/*.js run in the browser as ES modules.
export default [
  ...base,
  { files: ['assets/**/*.js'], languageOptions: { globals: globals.browser } },
]
