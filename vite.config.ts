/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  build: {
    target: 'es2017',
    lib: {
      entry: 'src/index.ts',
      name: 'SmartSearch',
      fileName: 'smart-search',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
    }
  }
  
});

