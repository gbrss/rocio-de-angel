// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rociodeangel.cl',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    // Optimización de imágenes locales (astro:assets)
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
