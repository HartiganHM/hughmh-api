import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Ignore root directory files
  { ignores: ['dist', 'node_modules', '*.json', '*.js', '*.mjs', '*.mts'] },
  // Explicitly include directories
  { files: ['src/**/*', 'prisma/**/*'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // TypeScript files
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { prettier: prettierPlugin },
    languageOptions: { globals: globals.node },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
  // JSON files
  json.configs.recommended,
  {
    files: ['**/tsconfig.json', '**/*.jsonc'],
    language: 'json/jsonc',
  },
];
