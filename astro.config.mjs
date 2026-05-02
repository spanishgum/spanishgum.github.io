// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://spanishgum.github.io',
  base: '/',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
