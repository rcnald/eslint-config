import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import tsParser from "@typescript-eslint/parser"
import neostandard, { resolveIgnoresFromGitignore } from "neostandard"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...neostandard({
    ignores: [...resolveIgnoresFromGitignore(), "eslint.config.*"],
  }),
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "module",

      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: false,
          trailingComma: "all",
          arrowParens: "always",
          semi: false,
          endOfLine: "auto",
        },
      ],
      "no-unused-vars": [
        "warn",
        {
          destructuredArrayIgnorePattern: "^_",
          args: "none",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
]
