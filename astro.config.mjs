import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://spanishgum.github.io',
  base: '/',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
