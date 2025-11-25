import React from 'react';
import { Rocket, Zap, ShieldCheck, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenCreate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenCreate }) => {
  return (
    <div id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          Nuevo: Nodos Ryzen 9 7950X Disponibles
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 tracking-tight mb-6 drop-shadow-lg">
          Hosting Minecraft <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Gratuito e Ilimitado
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Crea tu servidor 24/7 en segundos. <b>RAM, GPU, Cores y GB Ilimitados</b>. Todo gratis y con el mejor panel del mercado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onOpenCreate}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
            <div className="flex items-center gap-3">
              <Rocket className="w-6 h-6 group-hover:animate-bounce" />
              CREAR SERVIDOR GRATIS
            </div>
          </button>
          
          <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl font-bold text-white text-lg hover:bg-slate-800 transition-all flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-400" />
            Ver Planes Premium
          </button>
        </div>

        {/* Mini stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Uptime', value: '99.9%', icon: Zap },
            { label: 'Recursos', value: 'Ilimitados', icon: ShieldCheck },
            { label: 'Activación', value: 'Inmediata', icon: Rocket },
            { label: 'Soporte', value: '24/7 Vivo', icon:  Terminal},
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg backdrop-blur-sm">
              <stat.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="font-bold text-white text-lg">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;