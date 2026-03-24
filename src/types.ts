export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'generic' | 'personalized' | 'custom';
  image: string;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Articulated Dragon',
    description: 'Impresión 3D de alta precisión con movimiento fluido.',
    price: 2500,
    category: 'generic',
    image: 'https://picsum.photos/seed/dragon3d/800/800',
    tags: ['Articulado', 'Decoración', 'Fantasía']
  },
  {
    id: '2',
    name: 'Llavero Personalizado',
    description: 'Tu nombre o logo en 3D con colores vibrantes.',
    price: 800,
    category: 'personalized',
    image: 'https://picsum.photos/seed/keychain/800/800',
    tags: ['Personalizado', 'Accesorio', 'Regalo']
  },
  {
    id: '3',
    name: 'Soporte de Auriculares',
    description: 'Diseño minimalista y resistente para tu setup gamer.',
    price: 1500,
    category: 'generic',
    image: 'https://picsum.photos/seed/headset/800/800',
    tags: ['Setup', 'Gamer', 'Utilidad']
  },
  {
    id: '4',
    name: 'Maceta Geométrica',
    description: 'Estilo moderno para tus plantas de interior.',
    price: 1200,
    category: 'generic',
    image: 'https://picsum.photos/seed/pot/800/800',
    tags: ['Hogar', 'Decoración', 'Minimalista']
  },
  {
    id: '5',
    name: 'Litofanía Personalizada',
    description: 'Tu foto favorita revelada por la luz.',
    price: 3500,
    category: 'personalized',
    image: 'https://picsum.photos/seed/lithophane/800/800',
    tags: ['Foto', 'Regalo', 'Luz']
  },
  {
    id: '6',
    name: 'Pieza Técnica Industrial',
    description: 'Prototipado rápido y piezas finales funcionales.',
    price: 5000,
    category: 'custom',
    image: 'https://picsum.photos/seed/industrial/800/800',
    tags: ['Ingeniería', 'Prototipo', 'Funcional']
  }
];
