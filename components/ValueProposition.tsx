import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section id="proposta" className="py-section bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Clareza, <br />
              <span className="text-brand-muted">Critério e</span> <br />
              <span className="text-brand-cyan">Resultado.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            <div className="glass-card p-8 rounded-brand">
              <p className="font-sans text-lg text-brand-text leading-relaxed">
                A Kora não vende tecnologia pela tecnologia. Atuamos na interseção entre <strong className="text-white">estratégia de negócio</strong> e <strong className="text-white">engenharia de software</strong>, utilizando IA como ferramenta para estruturar decisões robustas.
              </p>
            </div>
            
            <div className="pl-6 border-l-2 border-brand-cyan/30">
              <p className="font-sans text-lg text-brand-muted">
                Nosso foco é eliminar o ruído do mercado e entregar soluções que resolvam problemas reais, automatizando processos e fornecendo insights preditivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;