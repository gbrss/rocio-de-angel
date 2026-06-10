# Rocío de Ángel — Landing Page Premium
![Alt text](https://github.com/gbrss/rocio-de-angel/blob/main/public/images/1.png?raw=true "Landing Page")
![Alt text](https://github.com/gbrss/rocio-de-angel/blob/main/public/images/2.png?raw=true "Product Presentation")
![Alt text](https://github.com/gbrss/rocio-de-angel/blob/main/public/images/3.png?raw=true "Printable")

Landing page de alto rendimiento para **Rocío de Ángel · Loción Corporal Premium**, construida con Astro 5, TypeScript y Tailwind CSS 4. Diseño *mobile first*, celestial y sofisticado, optimizado para SEO, Core Web Vitals, accesibilidad WCAG AA y conversión.

## Stack

- **Astro 5+** — arquitectura de islas, HTML estático ultrarrápido.
- **TypeScript** — contenido de marca tipado en `src/data/content.ts`.
- **Tailwind CSS 4** — tokens de diseño con `@theme` en `src/styles/global.css`.
- **astro:assets** (Astro Image) — optimización automática de imágenes locales.
- **astro-seo** — Open Graph, Twitter Cards y `<title>`/`<meta>`.
- **Motion One** — fade in, scroll reveal, parallax y botella flotante.
- **lucide-astro** — iconografía lineal.
- **Schema.org** — datos estructurados `Product` y `Organization`.

## Requisitos

- Node.js 18.20+, 20.3+ o 22+.

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:4321
```

Producción:

```bash
npm run build    # genera /dist
npm run preview  # previsualiza el build
```

## Estructura

```
src/
├── layouts/Layout.astro        # <head>, fuentes, SEO, JSON-LD, init de Motion One
├── pages/index.astro           # composición de la página
├── components/
│   ├── Hero.astro              # pantalla completa, partículas, botella flotante
│   ├── Story.astro             # historia de marca a 2 columnas
│   ├── Ingredients.astro       # cards con hover dorado
│   ├── Benefits.astro          # grid 3x2
│   ├── Ritual.astro            # timeline horizontal de 4 pasos
│   ├── Testimonials.astro      # carrusel automático glassmorphism
│   ├── ProductSizes.astro      # presentaciones 250 / 500 ml
│   ├── CTA.astro               # cierre emocional
│   ├── Footer.astro            # newsletter, redes, políticas
│   └── Icon.astro              # mapeo de iconos Lucide por nombre
├── data/content.ts             # todo el contenido editable de la marca
├── assets/                     # imágenes optimizadas por astro:assets
└── styles/global.css           # tokens @theme + utilidades de marca
public/
├── images/                     # fondo floral, partículas, OG (imágenes de ejemplo)
├── favicon.svg
└── robots.txt
```

## Personalización

- **Contenido y precios:** edita `src/data/content.ts` (única fuente de verdad).
- **Paleta y tipografías:** edita el bloque `@theme` en `src/styles/global.css`.
- **Imágenes:** reemplaza los archivos en `public/images/` y `src/assets/` por las definitivas (manteniendo los nombres). Las imágenes incluidas son **placeholders de ejemplo** generados para que el proyecto se vea completo desde el primer `npm run dev`.
- **Dominio:** actualiza `site` en `astro.config.mjs` y la URL en `src/data/content.ts` para canonical, Open Graph y `robots.txt`.

## Accesibilidad y rendimiento

- HTML semántico con landmarks, `alt` descriptivos y foco visible.
- `prefers-reduced-motion` respetado (desactiva animaciones).
- Imágenes responsivas con dimensiones explícitas (sin *layout shift*).
- Fuentes con `preconnect` + `preload` y `display=swap`.
