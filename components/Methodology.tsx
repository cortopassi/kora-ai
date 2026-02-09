import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { number: "01", title: "Entendimento", text: "Imersão no negócio para mapear dores reais e gargalos de processo." },
    { number: "02", title: "Desenho", text: "Definição da solução ideal (processo ou tecnologia) para o seu contexto." },
    { number: "03", title: "Implementação", text: "Execução técnica ágil, seja desenvolvendo software ou ajustando gestão." },
    { number: "04", title: "Evolução", text: "Acompanhamento por dados para garantir melhoria contínua e ROI." }
  ];

  return (
    <section id="metodo" className="py-section bg-brand-bg">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">Nosso Processo</h2>
          <p className="font-sans text-brand-muted mt-4 max-w-lg">
            Não vendemos ferramentas de prateleira. Construímos a resposta certa para a pergunta que o seu negócio está fazendo.
          </p>
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