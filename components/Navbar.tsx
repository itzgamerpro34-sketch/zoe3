import React, { useState } from 'react';
import { Menu, X, Server, LayoutDashboard, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <Server className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Hiden<span className="text-blue-400">Host</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#inicio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</a>
                <a href="#planes" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Planes</a>
                <a href="#caracteristicas" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Características</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Estado</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <LayoutDashboard size={18} />
                  Panel de Control
               </button>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20">
                  Área de Clientes
               </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#planes" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Planes</a>
            <a href="#caracteristicas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Características</a>
            <button className="w-full text-left text-blue-400 font-bold block px-3 py-2 rounded-md text-base">
               Ir al Panel
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;