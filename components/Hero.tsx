import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Tilt } from '../sites/fx';
import { smoothScrollToId } from './smoothScroll';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center pt-32 pb-52 overflow-hidden bg-brand-bg">
      {/* Subtle Gradient Spot */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-12%] w-[440px] h-[440px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

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
              Transformamos dores operacionais em inteligência competitiva. Começamos pelo entendimento do seu negócio para aplicar a tecnologia ideal — seja em <strong>Processos</strong>, <strong>Dados</strong>, <strong>SAP</strong> ou <strong>Produtos Digitais</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a 
                href="https://wa.me/5511998644004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-base font-bold rounded-full hover:bg-brand-primary hover:text-white active:scale-[0.98] transition-all duration-300 min-w-[180px]"
              >
                Falar com consultor
                <ArrowRight size={18} />
              </a>
              <button 
                onClick={() => smoothScrollToId('servicos')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/10 rounded-full hover:bg-white/5 active:scale-[0.98] transition-all min-w-[180px]"
              >
                Como atuamos
              </button>
            </div>
          </div>

          {/* Right Visual — escudo sem moldura, com brilho radial e legenda ancorada */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[420px] h-[420px] md:w-[560px] md:h-[560px] max-w-full animate-float overflow-visible">
              {/* Brilho radial: profundidade sem caixa (ampliado junto com o scale do escudo) */}
              <div className="absolute inset-[-22%] bg-brand-primary/20 blur-3xl rounded-full animate-glow-pulse will-change-[opacity]" aria-hidden="true"></div>

              {/*
                COMPENSAÇÃO, não correção: o PNG atual (public/kora-shield.png)
                tem ~66% de margem transparente — o desenho ocupa só ~34% da
                largura do arquivo. O scale-[1.9] compensa isso visualmente.
                Se o arquivo for recortado/regerado sem a margem, REMOVA o
                scale-[1.9] daqui e volte o brilho para inset-[12%].
              */}
              <Tilt max={3} className="absolute inset-0">
                {/* Wrapper da entrada: a animação vive aqui porque a <img>
                    carrega o scale-[1.9] de compensação e o Tilt controla o
                    próprio transform via JS — animar qualquer um dos dois
                    criaria conflito de transform. */}
                <div className="w-full h-full animate-shield-in will-change-[transform,opacity]">
                  <img
                    src="/kora-shield.png"
                    alt="Kora Shield"
                    width={1024}
                    height={1024}
                    fetchPriority="high"
                    className="w-full h-full object-contain scale-[1.9] relative z-10 drop-shadow-2xl"
                  />
                </div>
              </Tilt>

              {/* Legenda do escudo */}
              <div className="absolute left-1/2 -translate-x-[60%] bottom-0 translate-y-4 z-20 bg-brand-surfaceHighlight border border-white/10 px-4 py-3 rounded-xl shadow-xl">
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