import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg pt-24 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Glow Spots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-deepBlue/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-container w-full mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border mb-4">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
              <span className="text-xs font-medium text-brand-lightBlue uppercase tracking-wider">AI for Business</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Inteligência <br />
              <span className="text-gradient-blue">Aplicada.</span>
            </h1>
          </div>
          
          <p className="font-sans text-lg md:text-xl text-brand-muted max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Construímos soluções fundamentadas em dados e IA para empresas que buscam <span className="text-white">eficiência operacional</span> e <span className="text-white">clareza estratégica</span>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="https://wa.me/5511998644004" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-cyan text-brand-bg px-8 py-4 text-base font-heading font-bold rounded-lg hover:bg-brand-lightBlue hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,180,216,0.3)]"
            >
              Falar com especialista
              <ArrowRight size={20} />
            </a>
            
            <button 
              onClick={() => document.getElementById('proposta')?.scrollIntoView({behavior: 'smooth'})}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-heading font-semibold text-white border border-brand-border rounded-lg hover:bg-white/5 transition-all"
            >
              Conhecer soluções
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-brand-cyan/20 blur-[80px] rounded-full z-0"></div>
            
            <img
              src="https://cdn.jsdelivr.net/gh/cortopassi/kora-ai@main/public-assets/kora-shield.png"
              alt="Kora Inteligência Aplicada"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,180,216,0.3)]"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="text-white w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;