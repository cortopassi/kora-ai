import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="py-section bg-[#050A1A] border-y border-brand-border relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-cyan/20 blur-xl rounded-full opacity-50"></div>
            <h2 className="relative font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Experiência forjada em <span className="text-gradient-blue">contextos reais</span>.
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-brand border-l-4 border-l-brand-cyan">
               <p className="font-sans text-lg text-brand-text">
                A Kora é fundamentada na prática. Nascemos da união de profissionais seniores que acumularam lastro liderando tecnologia e produto em cenários de alta complexidade.
              </p>
            </div>
            
            <p className="font-sans text-brand-muted">
              Compreendemos a distância entre um modelo de IA em laboratório e uma operação empresarial robusta. Nosso foco é mitigar riscos e garantir ROI tangível.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <div className="h-px flex-grow bg-brand-border"></div>
              <span className="text-sm font-semibold text-white uppercase tracking-widest">Visão & Maturidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;