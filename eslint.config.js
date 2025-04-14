import { defineConfig } from 'eslint-define-config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default defineConfig([
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.git/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
    },
  },
]);
