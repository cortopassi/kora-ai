import React from 'react';
import { Layers, Zap, BrainCircuit, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Presença Digital Inteligente",
      subtitle: "Para pequenos negócios",
      description: "Estruturação de canais digitais otimizados por IA para maximizar conversão e eficiência operacional com baixo overhead técnico.",
      icon: <Layers className="text-white" size={32} />
    },
    {
      title: "Produto Digital com IA",
      subtitle: "Para empresas em crescimento",
      description: "Desenvolvimento e evolução de software proprietário, integrando LLMs e análise de dados diretamente no fluxo de valor.",
      icon: <Zap className="text-white" size={32} />
    },
    {
      title: "Consultoria em Decisão",
      subtitle: "Para empresas estruturadas",
      description: "Diagnóstico e implementação de governança de dados e ferramentas de IA para apoiar o C-Level em tomadas de decisão complexas.",
      icon: <BrainCircuit className="text-white" size={32} />
    }
  ];

  return (
    <section className="py-section bg-brand-bg relative">
      {/* Background decorative blob */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-deepBlue/20 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-sans font-semibold text-sm text-brand-cyan uppercase tracking-widest">Atuação</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-white">Como impulsionamos<br/>o seu negócio</h2>
          </div>
          <p className="text-brand-muted max-w-sm text-sm md:text-base">
            Soluções modulares adaptadas ao estágio de maturidade da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group glass-card p-8 rounded-brand hover:border-brand-cyan/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-deepBlue/50 border border-brand-border rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                  <ArrowUpRight className="text-brand-muted group-hover:text-brand-cyan opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" size={20} />
                </div>
                
                <span className="text-xs font-semibold text-brand-cyan mb-4 block">
                  {service.subtitle}
                </span>
                
                <p className="font-sans text-brand-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;