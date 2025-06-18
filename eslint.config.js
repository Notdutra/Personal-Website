import { defineConfig } from 'eslint-define-config';
import reactPlugin from 'eslint-plugin-react';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';

export default defineConfig([
  {
    files: ['src/**/*.{js,jsx}', 'src/**/*.js', 'src/**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react: reactPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      ...tailwindcssPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  ...[prettierConfig],
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.git/**', '.vite/**'],
  },
]);
