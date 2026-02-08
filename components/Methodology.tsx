import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { number: "01", title: "Diagnóstico", text: "Mapeamento profundo de dores e dados." },
    { number: "02", title: "Estratégia", text: "Definição do caminho técnico viável." },
    { number: "03", title: "Construção", text: "Desenvolvimento ágil e iterativo." },
    { number: "04", title: "Evolução", text: "Monitoramento e otimização contínua." }
  ];

  return (
    <section id="metodo" className="py-section bg-brand-bg">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">Nosso Processo</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative pt-8 border-t border-brand-border group hover:border-brand-primary transition-colors duration-500">
              <span className="absolute -top-3 left-0 bg-brand-bg px-2 text-sm font-bold text-brand-muted group-hover:text-brand-primary transition-colors">
                {step.number}
              </span>
              
              <h3 className="font-heading text-xl font-bold text-white mb-3 mt-4">{step.title}</h3>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;