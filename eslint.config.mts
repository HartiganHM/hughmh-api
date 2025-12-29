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
    },
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...(prettier.rules ?? {}),
      'prettier/prettier': 'error',
    },
  },
  { ignores: ['dist', 'node_modules'] },
  tseslint.configs.recommended,
  {
    ...json.configs.recommended,
    files: ['**/*.json'],
  },
  {
    files: ['**/tsconfig.json', '**/*.jsonc'],
    language: 'json/jsonc',
    plugins: { json },
  },
]);
