import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
  plugins: [svelte()],
  server: {
    port: 3000,
  },
});
