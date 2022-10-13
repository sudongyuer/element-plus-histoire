/// <reference types="histoire" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  histoire: {
    // your Histoire configuration
  },
  plugins: [vue()],
})
