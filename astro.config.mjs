import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://spanishgum.github.io',
  base: '/',
  server: { port: 4321 },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
