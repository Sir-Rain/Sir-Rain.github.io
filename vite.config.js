import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: {
          prependData: '@import "src/scss/main.scss";',
        },
        postcss: {},
      }),
    }),
  ],
  server: {
    port: 3000,
  },
});
