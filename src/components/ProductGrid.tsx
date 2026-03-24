import { motion } from 'motion/react';
import { Product } from '../types';
import { ShoppingCart, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: string;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white border-2 border-brutal-black overflow-hidden brutal-shadow transition-all group"
    >
      <div className="relative aspect-square overflow-hidden border-b-2 border-brutal-black">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brutal-black text-gallery-white px-3 py-1 font-mono text-xs uppercase font-bold">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-2xl uppercase leading-tight">{product.name}</h3>
          <span className="font-mono font-bold text-xl">${product.price}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase border border-brutal-black px-2 py-0.5">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-neon-green border-2 border-brutal-black py-2 font-bold uppercase text-sm brutal-shadow-hover transition-all flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Comprar
          </button>
          <button className="p-2 border-2 border-brutal-black brutal-shadow-hover transition-all bg-gallery-white">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProductGrid = ({ products, title }: { products: Product[], title: string }) => {
  return (
    <section className="py-24 bg-gallery-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-5xl md:text-7xl uppercase">{title}</h2>
          <div className="h-1 flex-1 bg-brutal-black" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
