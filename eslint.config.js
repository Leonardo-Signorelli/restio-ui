// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import { version } from "react";

export default tseslint.config(
  { ignores: ["dist", "storybook-static"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/no-direct-mutation-state": "error",
      "react/prefer-read-only-props": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/boolean-prop-naming": [
        "error",
        { propTypeNames: ["bool", "mutuallyExclusiveTrueProps"] },
      ],
      "react/destructuring-assignment": ["error", "always"],
      "no-param-reassign": ["error", { props: true }],
    },
  },
  storybook.configs["flat/recommended"]
);
