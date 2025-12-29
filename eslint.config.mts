import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ...js.configs.recommended,
    ...prettier,
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {
      ...js.configs.recommended.plugins,
      prettier: prettierPlugin,
  // JavaScript recommended rules
  ...js.configs.recommended,
  // Prettier config to disable conflicting stylistic rules
  ...prettier,
  // Project-specific JS/TS overrides
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, prettier: prettierPlugin },
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // Ignore common build artifacts
  { ignores: ['dist', 'node_modules'] },
  // TypeScript ESLint recommended flat config
  ...tseslint.configs.recommended,
  // JSON recommended flat config
  ...json.configs['flat/recommended'],
  // Additional JSONC / tsconfig handling
  {
    files: ['**/tsconfig.json', '**/*.jsonc'],
    language: 'json/jsonc',
    plugins: { json },
  },
]);
