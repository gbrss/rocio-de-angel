/**
 * ROCÍO DE ÁNGEL — Contenido de marca centralizado y tipado.
 * Editar aquí actualiza toda la landing.
 */

export type IconName =
  | 'Flower'
  | 'Flower2'
  | 'Leaf'
  | 'Droplets'
  | 'Droplet'
  | 'Sparkles'
  | 'Sprout'
  | 'Sun'
  | 'Feather'
  | 'Wind'
  | 'Heart'
  | 'Hand'
  | 'Waves'
  | 'Star';

/* ---------------------------------------------------------------- SEO */
export const site = {
  name: 'Rocío de Ángel',
  tagline: 'Loción Corporal Premium',
  url: 'https://rociodeangel.cl',
  locale: 'es_CL',
  title: 'Rocío de Ángel | Loción Corporal Premium',
  description:
    'Loción corporal premium inspirada en ingredientes naturales y sabiduría ancestral para nutrir, hidratar e iluminar tu piel.',
  ogImage: '/images/og-image.webp',
  email: 'hola@rociodeangel.cl',
  whatsapp: '56912345678',
  instagram: 'https://instagram.com/rociodeangel',
  facebook: 'https://facebook.com/rociodeangel',
} as const;

/* --------------------------------------------------------------- Hero */
export const hero = {
  eyebrow: 'Bienestar holístico',
  title: 'Rocío de Ángel',
  subtitle: 'El poder ancestral de la naturaleza en cada gota.',
  description:
    'Una loción corporal de textura sedosa que envuelve la piel en hidratación profunda, nutrición botánica y un acabado luminoso. Cuidado consciente, ritual diario.',
  primaryCta: { label: 'Comprar ahora', href: '#presentaciones' },
  secondaryCta: { label: 'Conocer ingredientes', href: '#ingredientes' },
} as const;

/* ------------------------------------------------------------ Historia */
export const story = {
  eyebrow: 'Nuestra esencia',
  title: 'Inspirada en la armonía ancestral',
  paragraphs: [
    'Rocío de Ángel nace de una idea sencilla y profunda: la naturaleza ya conoce el lenguaje de la piel. Recogemos esa sabiduría —flores, aceites y extractos que han acompañado el cuidado femenino durante generaciones— y la traducimos en una fórmula moderna, ligera y consciente.',
    'Cada gota busca el equilibrio entre ciencia botánica y ritual. No se trata solo de hidratar, sino de regalarte un momento de calma: un instante diario en que la piel respira, se nutre y recupera su luz natural.',
  ],
  highlight: 'Formulada en Chile, con respeto por tu piel y por el origen de cada ingrediente.',
  imageAlt: 'Composición floral suave con pétalos de rosa sobre fondo cremoso',
} as const;

/* -------------------------------------------------------- Ingredientes */
export interface Ingredient {
  name: string;
  icon: IconName;
  description: string;
}

export const ingredients: { eyebrow: string; title: string; items: Ingredient[] } = {
  eyebrow: 'Botánica activa',
  title: 'Ingredientes que la piel reconoce',
  items: [
    {
      name: 'Rosa Damascena',
      icon: 'Flower2',
      description:
        'Aceite floral noble que aporta elasticidad, equilibra la piel y deja una estela delicada y reconfortante.',
    },
    {
      name: 'Aloe Vera',
      icon: 'Leaf',
      description:
        'Hidratación inmediata y efecto calmante. Refresca, suaviza y prepara la piel para absorber los nutrientes.',
    },
    {
      name: 'Manzanilla',
      icon: 'Flower',
      description:
        'Conocida por su poder relajante, ayuda a serenar la piel sensible y a reducir la sensación de tirantez.',
    },
    {
      name: 'Aceite de Coco',
      icon: 'Droplets',
      description:
        'Nutrición rica en ácidos grasos que sella la hidratación y devuelve suavidad a las zonas más secas.',
    },
    {
      name: 'Extractos Florales',
      icon: 'Sparkles',
      description:
        'Una sinergia de botánicos seleccionados que aportan antioxidantes y un acabado luminoso y natural.',
    },
  ],
};

/* ----------------------------------------------------------- Beneficios */
export interface Benefit {
  title: string;
  icon: IconName;
  description: string;
}

export const benefits: { eyebrow: string; title: string; items: Benefit[] } = {
  eyebrow: 'Resultados visibles',
  title: 'Un solo gesto, seis beneficios',
  items: [
    {
      title: 'Hidratación profunda',
      icon: 'Droplet',
      description: 'Repone la humedad de la piel y la mantiene confortable durante todo el día.',
    },
    {
      title: 'Nutrición natural',
      icon: 'Sprout',
      description: 'Aceites botánicos que alimentan la barrera cutánea sin sensación grasa.',
    },
    {
      title: 'Luminosidad',
      icon: 'Sparkles',
      description: 'Realza el brillo natural de la piel para un aspecto saludable y radiante.',
    },
    {
      title: 'Suavidad',
      icon: 'Feather',
      description: 'Textura sedosa que deja la piel notablemente más tersa al tacto.',
    },
    {
      title: 'Absorción rápida',
      icon: 'Wind',
      description: 'Se funde al instante, sin residuos, lista para vestirte enseguida.',
    },
    {
      title: 'Bienestar diario',
      icon: 'Heart',
      description: 'Un ritual sensorial que convierte el cuidado en un momento para ti.',
    },
  ],
};

/* -------------------------------------------------------------- Ritual */
export interface RitualStep {
  step: string;
  title: string;
  icon: IconName;
  description: string;
}

export const ritual: { eyebrow: string; title: string; steps: RitualStep[] } = {
  eyebrow: 'Tu momento',
  title: 'El ritual Rocío de Ángel',
  steps: [
    {
      step: '01',
      title: 'Prepara',
      icon: 'Waves',
      description: 'Sobre la piel limpia y ligeramente húmeda, respira hondo y deja atrás el día.',
    },
    {
      step: '02',
      title: 'Aplica',
      icon: 'Hand',
      description: 'Dosifica una pequeña cantidad en las palmas y entíbiala entre las manos.',
    },
    {
      step: '03',
      title: 'Masajea',
      icon: 'Droplets',
      description: 'Extiende con movimientos circulares ascendentes hasta su total absorción.',
    },
    {
      step: '04',
      title: 'Florece',
      icon: 'Sparkles',
      description: 'Disfruta una piel luminosa, suave y envuelta en una estela floral delicada.',
    },
  ],
};

/* --------------------------------------------------------- Testimonios */
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export const testimonials: { eyebrow: string; title: string; items: Testimonial[] } = {
  eyebrow: 'Voces reales',
  title: 'Pieles que ya florecieron',
  items: [
    {
      name: 'Valentina R.',
      location: 'Concepción',
      rating: 5,
      quote:
        'La textura es increíble: se absorbe al instante y mi piel queda suave todo el día. El aroma floral es sutil y elegante.',
    },
    {
      name: 'Camila S.',
      location: 'Santiago',
      rating: 5,
      quote:
        'Llevo un mes usándola en las noches y noto mi piel mucho más luminosa. Se volvió mi ritual favorito antes de dormir.',
    },
    {
      name: 'Francisca M.',
      location: 'Viña del Mar',
      rating: 5,
      quote:
        'Tengo piel sensible y por fin encontré una loción que no me irrita y de verdad hidrata en profundidad.',
    },
    {
      name: 'Antonia P.',
      location: 'Temuco',
      rating: 5,
      quote:
        'El envase es precioso y la fórmula se siente premium de verdad. Se nota la calidad de los ingredientes.',
    },
    {
      name: 'Josefa L.',
      location: 'La Serena',
      rating: 5,
      quote:
        'Un lujo accesible. La regalé a mi mamá y ahora las dos somos clientas fieles de Rocío de Ángel.',
    },
  ],
};

/* ------------------------------------------------------- Presentaciones */
export interface ProductSize {
  size: string;
  volume: string;
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  cta: { label: string; href: string };
}

export const productSizes: { eyebrow: string; title: string; items: ProductSize[] } = {
  eyebrow: 'Presentaciones',
  title: 'Elige tu formato',
  items: [
    {
      size: '250',
      volume: '250 ml',
      name: 'Formato Esencial',
      price: '$12.990',
      description: 'Ideal para descubrir el ritual o llevarlo contigo donde vayas.',
      cta: { label: 'Comprar 250 ml', href: '#' },
    },
    {
      size: '500',
      volume: '500 ml',
      name: 'Formato Ritual',
      price: '$21.990',
      description: 'El favorito: rinde el doble para tu rutina diaria con mejor valor.',
      featured: true,
      cta: { label: 'Comprar 500 ml', href: '#' },
    },
  ],
};

/* ----------------------------------------------------------------- CTA */
export const cta = {
  eyebrow: 'Empieza hoy',
  title: 'Descubre tu ritual de bienestar',
  description:
    'Regálate minutos de calma y una piel que se siente cuidada. Rocío de Ángel te acompaña cada día.',
  button: { label: 'Comprar ahora', href: '#presentaciones' },
} as const;

/* -------------------------------------------------------------- Footer */
export const footer = {
  description:
    'Loción corporal premium inspirada en la naturaleza ancestral y el bienestar holístico.',
  newsletter: {
    title: 'Únete al círculo',
    subtitle: 'Recibe rituales de cuidado, novedades y beneficios exclusivos.',
    placeholder: 'Tu correo electrónico',
    button: 'Suscribirme',
  },
  columns: [
    {
      title: 'Marca',
      links: [
        { label: 'Nuestra esencia', href: '#historia' },
        { label: 'Ingredientes', href: '#ingredientes' },
        { label: 'El ritual', href: '#ritual' },
        { label: 'Presentaciones', href: '#presentaciones' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Preguntas frecuentes', href: '#' },
        { label: 'Envíos y entregas', href: '#' },
        { label: 'Cambios y devoluciones', href: '#' },
        { label: 'Contacto', href: '#' },
      ],
    },
  ],
  policies: [
    { label: 'Política de privacidad', href: '#' },
    { label: 'Términos y condiciones', href: '#' },
    { label: 'Política de cookies', href: '#' },
  ],
} as const;

export const nav = [
  { label: 'Esencia', href: '#historia' },
  { label: 'Ingredientes', href: '#ingredientes' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Ritual', href: '#ritual' },
  { label: 'Presentaciones', href: '#presentaciones' },
] as const;
