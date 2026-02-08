import React from 'react';
import { Boxes, Terminal, LineChart, MoveRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Presença Digital",
      description: "Sites e sistemas web de alta performance focados em conversão.",
      tags: ["Performance", "SEO", "Design"],
      icon: <Boxes className="text-white" size={24} />
    },
    {
      title: "Produtos de IA",
      description: "Desenvolvimento de software proprietário integrado com LLMs.",
      tags: ["SaaS", "Automação", "LLMs"],
      icon: <Terminal className="text-white" size={24} />
    },
    {
      title: "Consultoria de Dados",
      description: "Análise preditiva e estruturação de governança de dados.",
      tags: ["Analytics", "Strategy", "BI"],
      icon: <LineChart className="text-white" size={24} />
    }
  ];

  return (
    <section id="servicos" className="py-section bg-brand-bg border-t border-brand-border/30 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Expertise <span className="text-brand-muted">Digital</span>
            </h2>
            <p className="font-sans text-brand-muted max-w-md">
              Não vendemos apenas código. Entregamos infraestrutura intelectual para sua empresa escalar.
            </p>
          </div>
          <a href="https://wa.me/5511998644004" className="hidden md:flex items-center gap-2 text-white font-medium hover:text-brand-primary transition-colors group">
            Ver detalhes <MoveRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-brand-surface rounded-brand p-8 border border-brand-border hover:border-brand-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                {service.icon}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                <div>
                   <div className="w-12 h-12 bg-brand-surfaceHighlight rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="font-sans text-brand-muted leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-brand-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;