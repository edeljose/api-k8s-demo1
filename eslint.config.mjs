import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "no-unused-vars": "warn",
    },
  },
];

