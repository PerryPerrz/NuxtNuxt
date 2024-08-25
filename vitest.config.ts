/// <reference types="vitest" />
import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom', // or 'happy-dom'
    coverage: {
      reportsDirectory: './__tests__/coverage', // Change the directory where the coverage reports are generated
      exclude : ['**/app.vue/**', '**/error.vue/**', '**/layouts/**', ...coverageConfigDefaults.exclude], // Exclude files from coverage
      clean: true, // Clean the coverage directory before generating the reports
    },
  }
})