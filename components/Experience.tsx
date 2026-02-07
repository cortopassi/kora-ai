import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="py-section bg-brand-darkNavy text-white">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-h2 md:text-[40px] text-white mb-6 leading-tight">
              Experiência construída em contextos reais de negócio.
            </h2>
            <div className="w-16 h-1 bg-brand-cyan mb-8"></div>
          </div>
          
          <div className="space-y-6 font-sans text-body text-slate-200">
            <p>
              A Kora é fundamentada na prática, não apenas na teoria. Nascemos da união de profissionais seniores que acumularam lastro liderando tecnologia e produto em cenários de alta complexidade.
            </p>
            <p>
              Compreendemos a distância entre um modelo de IA em laboratório e uma operação empresarial robusta. Nosso foco é mitigar riscos e garantir que cada iniciativa tecnológica converta-se em retorno tangível sobre o investimento.
            </p>
            <p className="text-white font-semibold border-l-4 border-brand-cyan pl-4">
              Não entregamos apenas código; entregamos visão estratégica e maturidade executiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;