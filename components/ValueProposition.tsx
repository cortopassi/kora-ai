import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-section bg-white border-b border-brand-gray/10">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h2 className="font-heading text-h2 text-brand-deepBlue tracking-tight">
              Clareza, critério e resultado.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="font-sans text-body text-brand-text">
              A Kora não vende tecnologia pela tecnologia. Atuamos na interseção entre estratégia de negócio e engenharia de software, utilizando Inteligência Artificial como ferramenta fundamental para estruturar decisões e construir produtos digitais robustos.
            </p>
            <p className="font-sans text-body text-brand-text">
              Nosso foco é eliminar o ruído do mercado e entregar soluções que resolvam problemas reais, seja automatizando processos complexos, seja fornecendo insights preditivos para a liderança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;