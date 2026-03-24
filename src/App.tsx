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
      <nav className="fixed top-0 w-full bg-gallery-white border-b-2 border-brutal-black z-40 px-6 py-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="font-display text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              XRINCON<span className="text-neon-pink">3DX</span>
            </div>
            <div className="h-8 w-[1px] bg-brutal-black/20 hidden lg:block" />
            <div className="hidden lg:flex gap-6 font-mono font-bold uppercase text-[10px]">
              <button className="hover:text-neon-blue">Explorar</button>
              <button className="hover:text-neon-blue">Educación</button>
              <button className="hover:text-neon-blue">Comunidad</button>
            </div>
          </div>
          
          {/* Thingiverse-style Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative">
            <input 
              type="text" 
              placeholder="Buscar diseños, creadores o colecciones..." 
              className="w-full border-2 border-brutal-black p-2 font-mono text-xs focus:bg-neon-blue outline-none brutal-shadow bg-gray-50"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-xs uppercase bg-brutal-black text-white px-3 py-1">Buscar</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block font-mono font-bold uppercase text-[10px] border-2 border-brutal-black px-3 py-1 brutal-shadow bg-neon-green">
              Crear
            </button>
            <div className="w-8 h-8 rounded-full border-2 border-brutal-black bg-neon-blue flex items-center justify-center font-bold text-xs">
              XR
            </div>
          </div>
        </div>

        {/* Thingiverse-style Category Bar */}
        <div className="hidden md:flex gap-4 overflow-x-auto pb-2 border-t border-brutal-black/10 pt-2 no-scrollbar">
          {['Todos', 'Articulados', 'Decoración', 'Gamer', 'Ingeniería', 'Hogar', 'Herramientas', 'Gadgets', 'Moda', 'Juguetes'].map(cat => (
            <button key={cat} className="whitespace-nowrap px-4 py-1.5 bg-gallery-white border-2 border-brutal-black text-[10px] font-bold uppercase hover:bg-neon-blue transition-all brutal-shadow-hover">
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <Hero />
      <Features />
      
      <div id="catalog">
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
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-neon-green text-brutal-black px-8 py-4 font-display text-2xl uppercase brutal-shadow-hover transition-all"
                >
                  Cotizar Ahora
                </button>
              </div>
              <div className="relative">
                <div className="aspect-square border-2 border-neon-green p-4 rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800" 
                    alt="3D Printer Detail" 
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

        <div id="personalized">
          <ProductGrid 
            title="PERSONALIZADOS" 
            products={PRODUCTS.filter(p => p.category === 'personalized')} 
          />
        </div>
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      {/* Community Stats Section (Thingiverse-inspired) */}
      <section className="py-16 bg-gallery-white border-t-2 border-brutal-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl md:text-5xl uppercase mb-2">2.4M+</div>
              <div className="font-mono text-[10px] font-bold uppercase opacity-60">Diseños Compartidos</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl uppercase mb-2">150K+</div>
              <div className="font-mono text-[10px] font-bold uppercase opacity-60">Makers Activos</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl uppercase mb-2">12M+</div>
              <div className="font-mono text-[10px] font-bold uppercase opacity-60">Descargas Totales</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl uppercase mb-2">500K+</div>
              <div className="font-mono text-[10px] font-bold uppercase opacity-60">Remixes Creados</div>
            </div>
          </div>
        </div>
      </section>

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

