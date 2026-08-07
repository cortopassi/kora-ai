import React from 'react';
import { ArrowRight, Target, Award, Workflow, TrendingUp } from 'lucide-react';
import { smoothScrollToId } from './smoothScroll';

const ZAP_DIAGNOSTICO =
  'https://wa.me/5511998644004?text=' +
  encodeURIComponent('Olá! Quero agendar um diagnóstico com a KORA.');

const provas = [
  { icone: Target, titulo: 'Business First', texto: 'Tecnologia alinhada aos objetivos do negócio.' },
  { icone: Award, titulo: '+15 anos de experiência', texto: 'Atuando em grandes empresas e desafios complexos.' },
  { icone: Workflow, titulo: 'Soluções ponta a ponta', texto: 'Da estratégia à execução com inteligência.' },
  { icone: TrendingUp, titulo: 'Resultados que importam', texto: 'Eficiência, crescimento e vantagem competitiva.' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-brand-bg pt-28 pb-16 lg:pt-32">
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[800px] w-[800px] rounded-full bg-brand-primary/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-12%] h-[440px] w-[440px] rounded-full bg-indigo-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-container px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm animate-fade-in">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" />
              <span className="text-sm font-medium tracking-wide text-brand-text">
                Consultoria em IA · SAP · Dados · Processos
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white animate-slide-up sm:text-5xl lg:text-6xl">
              Clareza para <span className="text-brand-accent">decidir.</span>
              <br />
              Tecnologia para <span className="text-brand-accent">executar.</span>
            </h1>

            <p className="max-w-xl font-sans text-lg leading-relaxed text-brand-muted animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Transformamos problemas operacionais em resultados de negócio
              através de IA, Processos, Dados, SAP e Produtos Digitais.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href={ZAP_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:bg-brand-primary hover:text-white active:scale-[0.98]"
              >
                Agendar diagnóstico
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => smoothScrollToId('metodo')}
                className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/5 active:scale-[0.98]"
              >
                Conhecer nosso método
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px]">
              {/* Glow contido atrás — profundidade sem lavar o contraste */}
              <div
                className="pointer-events-none absolute inset-[8%] -z-10 bg-brand-primary/12 blur-2xl"
                aria-hidden="true"
              />
              <img
                src="/kora-hero-hub.jpg"
                alt="Diagrama: a KORA conectando ERP, IA, dados, processos e produtos digitais a um dashboard executivo"
                width={1536}
                height={1024}
                fetchPriority="high"
                className="w-full rounded-2xl [-webkit-mask-image:radial-gradient(ellipse_at_center,black_88%,transparent_100%)] [mask-image:radial-gradient(ellipse_at_center,black_88%,transparent_100%)]"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-brand-border/60 pt-12 lg:grid-cols-4">
          {provas.map(({ icone: Icone, titulo, texto }) => (
            <div key={titulo} className="flex flex-col gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <Icone size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-sm font-bold text-white">{titulo}</h3>
                <p className="mt-1 text-sm leading-snug text-brand-muted">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
