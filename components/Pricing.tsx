import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelect: (plan: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelect }) => {
  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Plan Steve',
      price: '$0',
      description: 'Perfecto para empezar con amigos.',
      features: [
        '4 GB RAM DDR4',
        '2 vCores CPU',
        '10 GB NVMe SSD',
        'Soporte Básico',
        'Acceso FTP Completo',
        'Panel Pterodactyl'
      ],
      buttonText: 'Crear Gratis',
      gradient: 'from-slate-700 to-slate-600'
    },
    {
      id: 'unlimited',
      name: 'Plan Ilimitado',
      price: '$0',
      description: 'La opción favorita de la comunidad.',
      recommended: true,
      features: [
        'RAM ILIMITADA',
        'Almacenamiento (GB) ILIMITADO',
        'CPU vCores ILIMITADOS',
        'GPU ILIMITADA',
        'Slots ILIMITADOS',
        'Soporte Prioritario 24/7',
        'Bases de Datos Ilimitadas',
        'Copias de Seguridad Diarias'
      ],
      buttonText: 'Obtener Ilimitado',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'pro',
      name: 'Plan Herobrine',
      price: '$9.99',
      description: 'Para networks grandes y serios.',
      features: [
        'Recursos Dedicados',
        'Ryzen 9 7950X Dedicado',
        'IP Dedicada Incluida',
        'Soporte VIP por Discord',
        'Instalador de Modpacks',
        'Subdominios Personalizados',
        'Protección DDoS Layer 7'
      ],
      buttonText: 'Comprar Premium',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="planes" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Planes para cada necesidad</h2>
          <p className="text-xl text-slate-400">Desde servidores gratuitos hasta potencia ilimitada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-slate-800/80 border-blue-500 shadow-2xl shadow-blue-500/20 scale-100 md:-translate-y-4' 
                  : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider py-2 rounded-full text-center shadow-lg flex items-center justify-center gap-1">
                  <Sparkles size={14} /> Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400">/mes</span>
                </div>
                <p className="text-slate-400 text-sm mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => {
                   const isUnlimited = feature.toUpperCase().includes('ILIMITAD');
                   return (
                    <li key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 ${isUnlimited ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-300'}`}>
                        <Check size={14} />
                        </div>
                        <span className={`text-sm ${isUnlimited ? 'font-bold text-white' : 'text-slate-300'}`}>
                            {feature}
                        </span>
                    </li>
                   )
                })}
              </ul>

              <button
                onClick={() => onSelect(plan.id)}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl bg-gradient-to-r ${plan.gradient} hover:opacity-90`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;