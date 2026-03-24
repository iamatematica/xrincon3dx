import { motion } from 'motion/react';
import { Box, Layers, Cpu, PenTool as Tool } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gallery-white overflow-hidden border-b-2 border-brutal-black">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 grayscale pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920" 
          alt="3D Printing Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-brutal-black rounded-full opacity-10 animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-64 h-64 border-2 border-brutal-black rotate-45 opacity-10 z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-display text-7xl md:text-9xl uppercase leading-none tracking-tighter mb-4">
            XRINCON<span className="text-neon-pink">3DX</span>
          </h1>
          <p className="font-mono text-xl md:text-2xl font-bold uppercase tracking-widest mb-8">
            Imaginación <span className="bg-neon-green px-2">Materializada</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brutal-black text-gallery-white px-8 py-4 font-bold uppercase text-lg brutal-shadow-hover transition-all"
            >
              Ver Catálogo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-brutal-black px-8 py-4 font-bold uppercase text-lg brutal-shadow-hover transition-all bg-neon-blue"
            >
              Pedir Personalizado
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 w-full bg-brutal-black py-4 overflow-hidden border-t-2 border-brutal-black z-20">
        <div className="marquee-track">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-gallery-white font-display text-2xl uppercase whitespace-nowrap">
                3D PRINTING • FDM • SLA • PROTOTYPING • XRINCON3DX • 
              </span>
              <Layers className="text-neon-green w-6 h-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  const features = [
    { icon: Box, title: 'Genéricos', desc: 'Modelos listos para imprimir y disfrutar.', color: 'bg-neon-blue' },
    { icon: Cpu, title: 'Personalizados', desc: 'Tu toque personal en cada detalle técnico.', color: 'bg-neon-pink' },
    { icon: Tool, title: 'Por Encargo', desc: 'Diseños únicos desde cero para tus ideas.', color: 'bg-neon-green' },
  ];

  return (
    <section className="py-24 bg-gallery-white border-b-2 border-brutal-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-8 border-2 border-brutal-black brutal-shadow ${f.color}`}
            >
              <f.icon className="w-12 h-12 mb-4" />
              <h3 className="font-display text-3xl uppercase mb-2">{f.title}</h3>
              <p className="font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
