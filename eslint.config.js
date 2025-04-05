import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },

  // React configuration with version specified
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: "detect", // Automatically detect React version from package.json
      },
    },
    rules: {
      // Turn off requirement for React to be in scope
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
    },
  },
  pluginReact.configs.flat.recommended,
]);
