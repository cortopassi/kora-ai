import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-section bg-brand-bg relative">
      <div className="max-w-container mx-auto px-6">
        <div className="bg-[#101010] rounded-[40px] p-8 md:p-16 border border-brand-border relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
            <div>
               <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                 Abordagem Kora
               </span>
               <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                 A tecnologia é o meio. <br />
                 <span className="text-brand-primary">O negócio é o fim.</span>
               </h2>
               <div className="h-1 w-20 bg-brand-border rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="font-sans text-lg text-brand-muted leading-relaxed">
                Não começamos pelo código, mas pelo entendimento do problema. Atuamos desde a organização de processos em pequenos negócios até a escala de produtos digitais em grandes corporações.
              </p>
              <p className="font-sans text-lg text-white font-medium leading-relaxed">
                Independente da complexidade — seja otimizar a operação de um comércio local ou integrar sistemas legados SAP em multinacionais — trazemos clareza, método e a <span className="text-brand-primary">tecnologia adequada ao seu contexto</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;