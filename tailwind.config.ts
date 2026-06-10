import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS 4.
 *
 * En Tailwind 4 los design tokens (colores, tipografías, sombras, etc.)
 * se declaran con la directiva `@theme` dentro de `src/styles/global.css`,
 * que es la fuente única de verdad de la marca.
 *
 * Este archivo se carga mediante `@config "../../tailwind.config.ts"` desde
 * el CSS y se reserva para configuración no relacionada a tokens: rutas de
 * contenido, safelist y plugins. Mantenerlo así evita duplicar valores.
 */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.html',
  ],
  // Clases generadas dinámicamente desde content.ts (acentos por sección).
  safelist: [
    'bg-pink-light',
    'bg-sky-light',
    'bg-cream',
    'text-gold',
    'text-pink',
    'text-sky',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
