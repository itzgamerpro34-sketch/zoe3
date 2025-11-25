import React, { useState } from 'react';
import { X, Server, Loader2, MonitorPlay } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateServerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [serverName, setServerName] = useState('');
  const [serverType, setServerType] = useState('Java');

  if (!isOpen) return null;

  const handleCreate = () => {
    if(!serverName) return;
    setLoading(true);
    // Simulate creation process
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Success
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {step === 1 && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600/20 rounded-xl">
                  <Server className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Configurar Servidor</h2>
                  <p className="text-slate-400 text-sm">Plan Ilimitado Seleccionado</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nombre del Servidor</label>
                  <input 
                    type="text" 
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                    placeholder="MiSuperServer"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Software</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setServerType('Java')}
                      className={`px-4 py-3 rounded-lg border text-center transition-all ${serverType === 'Java' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                      Java Edition
                    </button>
                    <button 
                      onClick={() => setServerType('Bedrock')}
                      className={`px-4 py-3 rounded-lg border text-center transition-all ${serverType === 'Bedrock' ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                      Bedrock (PE)
                    </button>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-sm space-y-2">
                    <div className="flex justify-between">
                        <span className="text-slate-400">RAM Asignada:</span>
                        <span className="text-green-400 font-bold">∞ Ilimitada</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Almacenamiento GB:</span>
                        <span className="text-green-400 font-bold">∞ Ilimitado</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">CPU Cores:</span>
                        <span className="text-green-400 font-bold">∞ Ilimitados</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">GPU:</span>
                        <span className="text-green-400 font-bold">∞ Ilimitada</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-2 mt-2">
                        <span className="text-slate-400">Precio:</span>
                        <span className="text-white font-bold">$0.00 /mes</span>
                    </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  disabled={!serverName}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </>
          )}

          {step === 2 && (
             <div className="text-center py-10">
                {!loading ? (
                    <>
                    <h3 className="text-xl font-bold text-white mb-4">¿Confirmar Creación?</h3>
                    <p className="text-slate-400 mb-8">Estás a punto de crear <strong>{serverName}</strong> con recursos totalmente ilimitados y gratis.</p>
                    <div className="flex gap-4">
                        <button onClick={() => setStep(1)} className="flex-1 py-3 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700">Volver</button>
                        <button onClick={handleCreate} className="flex-1 py-3 bg-green-600 rounded-lg font-bold hover:bg-green-500">CREAR AHORA</button>
                    </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <Loader2 className="w-16 h-16 text-blue-500 animate-spin mb-4" />
                        <h3 className="text-xl font-bold text-white">Desplegando Servidor...</h3>
                        <p className="text-slate-400 mt-2">Configurando contenedores Docker...</p>
                    </div>
                )}
             </div>
          )}

          {step === 3 && (
              <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MonitorPlay className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">¡Servidor Creado!</h2>
                  <p className="text-slate-400 mb-8">Tu servidor <strong>{serverName}</strong> está listo y en línea.</p>
                  
                  <div className="bg-slate-950 p-4 rounded-lg mb-6 border border-slate-800">
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">IP de Conexión</p>
                      <code className="text-blue-400 font-mono text-lg">{serverName.toLowerCase()}.hidenhost.com</code>
                  </div>

                  <button 
                    onClick={onClose}
                    className="w-full py-3 bg-blue-600 rounded-lg font-bold text-white hover:bg-blue-500"
                  >
                      Ir al Panel de Control
                  </button>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateServerModal;