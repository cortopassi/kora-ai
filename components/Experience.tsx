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
              A Kora não é uma aventura acadêmica. Nossa empresa nasce da união de profissionais experientes, que acumularam lastro atuando em empresas de diferentes portes e segmentos.
            </p>
            <p>
              Entendemos a diferença entre a teoria dos modelos de IA e a prática de um ambiente corporativo complexo. Lidamos diariamente com decisões reais, restrições orçamentárias e a necessidade imperativa de retorno sobre o investimento.
            </p>
            <p className="text-white font-semibold">
              Não entregamos apenas código; entregamos maturidade executiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;