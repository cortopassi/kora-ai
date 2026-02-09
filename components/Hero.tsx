import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-bg">
      {/* Subtle Gradient Spot */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container w-full mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-sm font-medium text-brand-text tracking-wide">Inteligência Aplicada a Negócios</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1.05] animate-slide-up">
              Decisões <br />
              <span className="text-brand-muted">estratégicas.</span> <br />
              <span className="text-gradient-agency">Processos eficientes.</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-brand-muted max-w-lg leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              Transformamos dores operacionais em inteligência competitiva. Começamos pelo entendimento do seu negócio para aplicar a tecnologia ideal — seja em <strong>Agilidade</strong>, <strong>Dados</strong>, <strong>SAP</strong> ou <strong>Produtos Digitais</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a 
                href="https://wa.me/5511998644004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-base font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 min-w-[180px]"
              >
                Falar com consultor
                <ArrowRight size={18} />
              </a>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/10 rounded-full hover:bg-white/5 transition-all min-w-[180px]"
              >
                Como atuamos
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] animate-float">
              {/* Card Container for Shield - giving it a 'product' feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[40px] border border-white/5 backdrop-blur-sm -rotate-6 transform transition-transform duration-700 hover:rotate-0"></div>
              
              <div className="absolute inset-4 bg-[#0A0A0A] rounded-[32px] border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 to-transparent opacity-50"></div>
                 <img
                  src="https://cdn.jsdelivr.net/gh/cortopassi/kora-ai@main/public-assets/kora-shield.png"
                  alt="Kora Shield"
                  className="w-[80%] h-[80%] object-contain relative z-10 drop-shadow-2xl"
                />
              </div>

              {/* Decorative floating pills - Updated text */}
              <div className="absolute -right-8 top-20 bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Business First</div>
                    <div className="text-[10px] text-brand-muted">Tech Enabled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;