export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'generic' | 'personalized' | 'custom';
  image: string;
  tags: string[];
  likes?: number;
  downloads?: number;
  author?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dragón Articulado V2',
    description: 'Impresión 3D de alta precisión con movimiento fluido. Ideal para escritorio y decoración.',
    price: 2500,
    category: 'generic',
    image: 'https://images.unsplash.com/photo-1631035510705-7833539825b3?auto=format&fit=crop&q=80&w=800',
    tags: ['Articulado', 'Decoración', 'Fantasía'],
    likes: 1240,
    downloads: 8500,
    author: 'XRincon'
  },
  {
    id: '2',
    name: 'Llavero Low Poly',
    description: 'Tu nombre o logo en 3D con estilo low-poly y colores vibrantes.',
    price: 800,
    category: 'personalized',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
    tags: ['Personalizado', 'Accesorio', 'Regalo'],
    likes: 450,
    downloads: 1200,
    author: 'XRincon'
  },
  {
    id: '3',
    name: 'Soporte Modular Gamer',
    description: 'Diseño minimalista y resistente impreso en PLA+ para tu setup gamer.',
    price: 1500,
    category: 'generic',
    image: 'https://images.unsplash.com/photo-1581092335397-9583ee92d0bb?auto=format&fit=crop&q=80&w=800',
    tags: ['Setup', 'Gamer', 'Utilidad'],
    likes: 890,
    downloads: 3400,
    author: 'XRincon'
  },
  {
    id: '4',
    name: 'Maceta Voronoi',
    description: 'Estilo moderno con patrón Voronoi para tus plantas, texturas únicas.',
    price: 1200,
    category: 'generic',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800',
    tags: ['Hogar', 'Decoración', 'Minimalista'],
    likes: 2100,
    downloads: 15000,
    author: 'XRincon'
  },
  {
    id: '5',
    name: 'Litofanía Curva',
    description: 'Tus recuerdos impresos en capas que cobran vida con la luz.',
    price: 3500,
    category: 'personalized',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tags: ['Foto', 'Regalo', 'Luz'],
    likes: 670,
    downloads: 500,
    author: 'XRincon'
  },
  {
    id: '6',
    name: 'Engranaje Planetario',
    description: 'Piezas finales funcionales y prototipado rápido de alta fidelidad.',
    price: 5000,
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800',
    tags: ['Ingeniería', 'Prototipo', 'Funcional'],
    likes: 340,
    downloads: 200,
    author: 'XRincon'
  }
];
