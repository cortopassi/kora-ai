import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { title: "Entendimento", text: "Imersão no contexto do problema e variáveis de negócio." },
    { title: "Direção", text: "Definição estratégica do caminho técnico a seguir." },
    { title: "Inteligência", text: "Aplicação de modelos e dados para gerar valor." },
    { title: "Construção", text: "Desenvolvimento com foco em estabilidade e escala." }
  ];

  return (
    <section className="py-section bg-brand-bg">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Nosso Processo</h2>
          <p className="font-sans text-brand-muted mt-4 max-w-2xl mx-auto">
            Linear, transparente e focado na redução de incertezas.
          </p>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Number Indicator */}
                <div className="w-24 h-24 mx-auto bg-brand-bg border border-brand-border rounded-full flex items-center justify-center relative z-10 mb-6 group-hover:border-brand-cyan transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                   <div className="w-20 h-20 bg-brand-card rounded-full flex items-center justify-center">
                     <span className="font-heading font-bold text-2xl text-brand-cyan">0{index + 1}</span>
                   </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-brand-lightBlue transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-muted px-2">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;