import React from 'react';
import { Cpu, HardDrive, Globe, Shield, Wifi, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "CPUs Ryzen 9",
      desc: "Servidores impulsados por procesadores AMD Ryzen de última generación para 0 lag."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-blue-500" />,
      title: "NVMe Ilimitado",
      desc: "Almacenamiento ultra rápido para cargar chunks al instante. Espacio sin límites."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Ubicaciones Globales",
      desc: "Nodos en Miami, Alemania, Singapur y Brasil para la mejor latencia."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Anti-DDoS Pro",
      desc: "Protección de 12 Tbps incluida gratis en todos los planes para mantenerte online."
    },
    {
      icon: <Wifi className="w-8 h-8 text-yellow-500" />,
      title: "Ancho de Banda 1Gbps",
      desc: "Conexiones simétricas de alta velocidad para soportar cientos de jugadores."
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-500" />,
      title: "Setup Instantáneo",
      desc: "Tu servidor se despliega automáticamente en menos de 60 segundos tras el pedido."
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Por qué elegir HidenHost?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Infraestructura de grado empresarial optimizada específicamente para Minecraft Java y Bedrock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="group p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-slate-700 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;