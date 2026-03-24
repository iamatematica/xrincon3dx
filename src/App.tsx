import { Hero, Features } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ContactSection } from './components/ContactSection';
import { PRODUCTS } from './types';
import { motion, useScroll, useSpring } from 'motion/react';
import { Instagram, Mail } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-neon-pink z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gallery-white border-b-2 border-brutal-black z-40 px-6 py-4 flex justify-between items-center">
        <div className="font-display text-2xl tracking-tighter">
          XRINCON<span className="text-neon-pink">3DX</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono font-bold uppercase text-sm">
          <a href="#" className="hover:text-neon-pink transition-colors">Inicio</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Productos</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Personalizados</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Contacto</a>
        </div>
        <button className="bg-brutal-black text-gallery-white px-4 py-2 font-mono text-xs font-bold uppercase brutal-shadow">
          Tienda
        </button>
      </nav>

      <Hero />
      <Features />
      
      <div id="products">
        <ProductGrid 
          title="DESTACADOS" 
          products={PRODUCTS.filter(p => p.category === 'generic')} 
        />
        
        <section className="bg-brutal-black py-24 text-gallery-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-6xl md:text-8xl uppercase mb-8 leading-none">
                  TU DISEÑO <br />
                  <span className="text-neon-green">TU MUNDO</span>
                </h2>
                <p className="text-xl font-mono mb-8 opacity-80">
                  ¿No encuentras lo que buscas? Lo diseñamos para ti. 
                  Desde modelado 3D profesional hasta la pieza final.
                </p>
                <button className="bg-neon-green text-brutal-black px-8 py-4 font-display text-2xl uppercase brutal-shadow-hover transition-all">
                  Cotizar Ahora
                </button>
              </div>
              <div className="relative">
                <div className="aspect-square border-2 border-neon-green p-4 rotate-3">
                  <img 
                    src="https://picsum.photos/seed/custom3d/800/800" 
                    alt="Custom Print" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-neon-pink border-2 border-brutal-black flex items-center justify-center -rotate-12">
                  <span className="font-display text-2xl text-brutal-black uppercase">NEW</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid 
          title="PERSONALIZADOS" 
          products={PRODUCTS.filter(p => p.category === 'personalized')} 
        />
      </div>

      <ContactSection />

      <footer className="bg-brutal-black text-gallery-white py-12 border-t-2 border-brutal-black">
        <div className="container mx-auto px-4 flex flex-col md:row justify-between items-center gap-8">
          <div className="font-display text-4xl uppercase">
            XRINCON<span className="text-neon-pink">3DX</span>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/xrincon3dx/" className="hover:text-neon-blue transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-neon-blue transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <div className="font-mono text-xs opacity-50">
            © 2026 XRINCON3DX. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </footer>
    </main>
  );
}

