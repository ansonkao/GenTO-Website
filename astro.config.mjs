// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  redirects: {
    '/volunteer': 'https://forms.gle/au7xsVy6bkE3xGAv5',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
