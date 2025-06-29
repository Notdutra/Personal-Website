import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      // Disable strict unused variable checking for development
      'no-unused-vars': 'off',
      '@next/next/no-img-element': 'off', // Allow img tags
    },
  },
];

export default eslintConfig;
