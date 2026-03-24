import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ShoppingCart, ExternalLink, X, Info, Heart, Download, User, Share2, Eye, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  key?: string;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Simulated Thingiverse-style metrics
  const views = Math.floor((product.downloads || 0) * 4.5);
  const remixes = Math.floor((product.likes || 0) / 12);

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white border-2 border-brutal-black overflow-hidden brutal-shadow transition-all group cursor-pointer flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-square overflow-hidden border-b-2 border-brutal-black bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          
          {/* Thingiverse-style Overlay Stats */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-brutal-black/90 via-brutal-black/40 to-transparent flex justify-between items-end text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex flex-col gap-1">
              <div className="flex gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-neon-pink text-neon-pink" /> {product.likes}</span>
                <span className="flex items-center gap-1"><Download className="w-3 h-3" /> {product.downloads}</span>
              </div>
              <div className="flex gap-3 text-[10px] font-mono opacity-70">
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {views}</span>
                <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3" /> {remixes}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] uppercase font-bold bg-brutal-black/50 px-2 py-1 rounded">
              <User className="w-3 h-3" /> {product.author}
            </div>
          </div>

          <div className="absolute top-4 left-4">
            <span className="bg-brutal-black text-gallery-white px-3 py-1 font-mono text-xs uppercase font-bold">
              {product.category}
            </span>
          </div>
          
          {/* Trending Badge */}
          {(product.likes || 0) > 1000 && (
            <div className="absolute top-4 right-4 bg-neon-green text-brutal-black px-2 py-1 font-mono text-[10px] font-bold uppercase rotate-12 brutal-shadow">
              Trending
            </div>
          )}
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-neon-blue border border-brutal-black flex items-center justify-center font-bold text-[8px]">
              {product.author?.substring(0, 2).toUpperCase()}
            </div>
            <span className="font-mono text-[10px] font-bold uppercase opacity-70">{product.author}</span>
          </div>

          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-2xl uppercase leading-tight">{product.name}</h3>
            <span className="font-mono font-bold text-xl">${product.price}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase border border-brutal-black px-2 py-0.5">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="mt-auto flex gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); /* Add to cart logic */ }}
              className="flex-1 bg-neon-green border-2 border-brutal-black py-2 font-bold uppercase text-sm brutal-shadow-hover transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> Comprar
            </button>
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setIsLiked(!isLiked);
              }}
              className={`p-2 border-2 border-brutal-black brutal-shadow-hover transition-all ${isLiked ? 'bg-neon-pink' : 'bg-gallery-white'}`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-brutal-black' : ''}`} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); /* Share logic */ }}
              className="p-2 border-2 border-brutal-black brutal-shadow-hover transition-all bg-gallery-white"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brutal-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-gallery-white border-4 border-brutal-black brutal-shadow max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-neon-pink border-2 border-brutal-black brutal-shadow-hover z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square border-b-4 md:border-b-0 md:border-r-4 border-brutal-black">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="font-mono font-bold text-neon-pink uppercase mb-2">{product.category}</span>
                  <h2 className="font-display text-5xl md:text-6xl uppercase mb-4 leading-none">{product.name}</h2>
                  <p className="text-lg font-medium mb-6">{product.description}</p>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-display text-4xl">${product.price}</span>
                    <div className="flex-1 h-1 bg-brutal-black" />
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-neon-green border-2 border-brutal-black py-4 font-display text-2xl uppercase brutal-shadow-hover transition-all flex items-center justify-center gap-4">
                      <ShoppingCart className="w-6 h-6" /> Añadir al Carrito
                    </button>
                    <button className="w-full border-2 border-brutal-black py-4 font-display text-2xl uppercase brutal-shadow-hover transition-all bg-neon-blue flex items-center justify-center gap-4">
                      <ExternalLink className="w-6 h-6" /> Consultar por WhatsApp
                    </button>
                  </div>

                  <div className="mt-8 pt-8 border-t-2 border-brutal-black/10">
                    <h4 className="font-mono font-bold uppercase text-xs mb-4">Especificaciones 3D</h4>
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                      <div><span className="opacity-50">Material:</span> PLA+ Premium</div>
                      <div><span className="opacity-50">Resolución:</span> 0.12mm</div>
                      <div><span className="opacity-50">Relleno:</span> 15% Gyroid</div>
                      <div><span className="opacity-50">Post-procesado:</span> Lijado manual</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
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
