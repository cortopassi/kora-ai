import React from 'react';
import { ChevronRight } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    { title: "1. Entendimento", text: "Imersão no contexto do problema e das variáveis de negócio." },
    { title: "2. Direção", text: "Definição estratégica do caminho técnico e funcional a ser seguido." },
    { title: "3. Inteligência", text: "Aplicação de modelos e dados para gerar alavancagem de valor." },
    { title: "4. Construção", text: "Desenvolvimento da solução com foco em estabilidade e escala." }
  ];

  return (
    <section className="py-section bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 text-brand-deepBlue">Como trabalhamos</h2>
          <p className="font-sans text-body text-brand-gray mt-4 max-w-2xl mx-auto">
            Um processo linear e transparente, focado em reduzir incertezas.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-gutter relative">
           {/* Decorative Line for Desktop - Adjusted for card padding (top-12 = 48px, center of icon with p-6) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-brand-gray/20 -z-10" />

          {steps.map((step, index) => (
            <div 
                key={index} 
                className="bg-white p-6 rounded-brand border border-transparent hover:border-brand-gray/10 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-deepBlue text-white font-heading font-bold rounded-full shadow-sm group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-300 ease-in-out z-10">
                   0{index + 1}
                </div>
                {index < 3 && (
                  <ChevronRight className="md:hidden text-brand-gray" />
                )}
              </div>
              <h3 className="font-heading font-semibold text-[18px] md:text-h3 text-brand-deepBlue mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                {step.title.split('. ')[1]}
              </h3>
              <p className="font-sans text-body text-brand-text leading-relaxed">
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