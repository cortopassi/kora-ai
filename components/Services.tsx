import React from 'react';
import { Layers, Zap, BrainCircuit } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Presença Digital Inteligente",
      subtitle: "Ativos digitais de alta performance.",
      target: "Para pequenos negócios",
      description: "Estruturação de canais digitais otimizados por IA para maximizar conversão e eficiência operacional com baixo overhead técnico.",
      icon: <Layers className="text-brand-cyan" size={32} />
    },
    {
      title: "Produto Digital com IA",
      subtitle: "Tecnologia proprietária como vantagem competitiva.",
      target: "Para empresas em crescimento",
      description: "Desenvolvimento e evolução de software proprietário, integrando modelos de linguagem e análise de dados diretamente no fluxo de valor do produto.",
      icon: <Zap className="text-brand-cyan" size={32} />
    },
    {
      title: "Consultoria em IA e Decisão",
      subtitle: "Segurança e inteligência na estratégia corporativa.",
      target: "Para empresas estruturadas",
      description: "Diagnóstico e implementação de governança de dados e ferramentas de IA para apoiar o C-Level em tomadas de decisão complexas e estratégicas.",
      icon: <BrainCircuit className="text-brand-cyan" size={32} />
    }
  ];

  return (
    <section className="py-section bg-[#FAFAFA]">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-16">
          <span className="font-heading font-semibold text-sm text-brand-gray uppercase tracking-widest">Atuação</span>
          <h2 className="font-heading text-h2 mt-2 text-brand-deepBlue">Como apoiamos seu negócio</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-gutter">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-card-padding border border-brand-gray/20 rounded-brand transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-brand-cyan group"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              <h3 className="font-heading text-h3 text-brand-darkNavy mb-1 group-hover:text-brand-deepBlue transition-colors">{service.title}</h3>
              
              <p className="font-sans text-sm font-medium text-brand-gray mb-4">
                {service.subtitle}
              </p>

              <span className="text-xs font-heading font-semibold text-brand-deepBlue bg-brand-lightBlue/30 px-2 py-1 inline-block rounded-sm w-fit mb-4 uppercase tracking-wider">
                {service.target}
              </span>
              <p className="font-sans text-body text-brand-text flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;