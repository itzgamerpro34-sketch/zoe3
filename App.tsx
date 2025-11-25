import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CreateServerModal from './components/CreateServerModal';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCreateServer = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero onOpenCreate={openCreateServer} />
        <Features />
        <Pricing onSelect={openCreateServer} />
      </main>

      <Footer />
      <CreateServerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ChatWidget />
    </div>
  );
};

export default App;