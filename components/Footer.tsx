import React from 'react';
import { Twitter, Github, Instagram, Server } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1 rounded">
                <Server className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Hiden<span className="text-blue-400">Host</span></span>
            </div>
            <p className="text-slate-500 text-sm">
              Servidores de Minecraft de alto rendimiento, gratuitos e ilimitados. Creado por gamers, para gamers.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400">Minecraft Java</a></li>
              <li><a href="#" className="hover:text-blue-400">Minecraft Bedrock</a></li>
              <li><a href="#" className="hover:text-blue-400">Hosting Dedicado</a></li>
              <li><a href="#" className="hover:text-blue-400">Dominios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-400">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-blue-400">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-400">Estado de Servidores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} HidenHost Clone. Todos los derechos reservados. No afiliado con Mojang AB.
        </div>
      </div>
    </footer>
  );
};

export default Footer;