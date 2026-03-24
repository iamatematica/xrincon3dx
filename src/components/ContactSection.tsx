import { motion } from 'motion/react';
import { Instagram, Mail, Send, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-24 bg-neon-pink border-t-2 border-brutal-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-6xl md:text-8xl uppercase mb-8 leading-none">
              ¿TIENES UNA <span className="text-stroke text-brutal-black">IDEA?</span>
            </h2>
            <p className="text-xl font-bold mb-12 max-w-md">
              Hacemos realidad tus proyectos más locos. Desde prototipos industriales hasta regalos personalizados.
            </p>
            
            <div className="space-y-6">
              <a href="https://www.instagram.com/xrincon3dx/" target="_blank" className="flex items-center gap-4 group">
                <div className="p-4 bg-brutal-black text-gallery-white brutal-shadow group-hover:bg-neon-blue transition-colors">
                  <Instagram className="w-8 h-8" />
                </div>
                <span className="font-display text-2xl uppercase">@xrincon3dx</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-brutal-black text-gallery-white brutal-shadow">
                  <Mail className="w-8 h-8" />
                </div>
                <span className="font-display text-2xl uppercase">hola@xrincon3dx.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-brutal-black text-gallery-white brutal-shadow">
                  <MapPin className="w-8 h-8" />
                </div>
                <span className="font-display text-2xl uppercase">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gallery-white p-8 border-2 border-brutal-black brutal-shadow">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-mono font-bold uppercase text-sm">Nombre</label>
                <input 
                  type="text" 
                  className="w-full border-2 border-brutal-black p-3 focus:bg-neon-blue outline-none transition-colors"
                  placeholder="TU NOMBRE"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono font-bold uppercase text-sm">Email</label>
                <input 
                  type="email" 
                  className="w-full border-2 border-brutal-black p-3 focus:bg-neon-blue outline-none transition-colors"
                  placeholder="TU@EMAIL.COM"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono font-bold uppercase text-sm">Tipo de Pedido</label>
                <select className="w-full border-2 border-brutal-black p-3 focus:bg-neon-blue outline-none transition-colors appearance-none bg-white">
                  <option>GENÉRICO</option>
                  <option>PERSONALIZADO</option>
                  <option>POR ENCARGO (DISEÑO)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-mono font-bold uppercase text-sm">Mensaje / Idea</label>
                <textarea 
                  rows={4}
                  className="w-full border-2 border-brutal-black p-3 focus:bg-neon-blue outline-none transition-colors"
                  placeholder="CUÉNTANOS TU PROYECTO..."
                />
              </div>
              <button className="w-full bg-brutal-black text-gallery-white py-4 font-display text-2xl uppercase brutal-shadow-hover transition-all flex items-center justify-center gap-4">
                Enviar Mensaje <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
