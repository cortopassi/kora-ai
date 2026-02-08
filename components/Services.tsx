import React from 'react';
import { MonitorSmartphone, GitMerge, Database, TrendingUp, MoveRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Desenv. de Software",
      description: "Desenvolvimento de software customizado. Criamos Apps nativos, sites otimizados e plataformas SaaS escaláveis, garantindo arquitetura robusta para o crescimento do seu negócio.",
      tags: ["Apps & Sites", "SaaS", "Custom Dev"],
      icon: <MonitorSmartphone className="text-white" size={24} />
    },
    {
      title: "Agilidade & Gestão",
      description: "Consultoria em Agilidade e Gestão de Projetos. Implementamos métodos ágeis que conectam a execução técnica do dia a dia aos OKRs estratégicos da empresa, aumentando a eficiência.",
      tags: ["Agile/Scrum", "Gestão de Projetos", "OKRs"],
      icon: <GitMerge className="text-white" size={24} />
    },
    {
      title: "Enterprise & SAP",
      description: "Especialistas em SAP e soluções Enterprise. Integramos ERPs legados com tecnologias SaaS modernas, otimizando processos complexos e modernizando sua infraestrutura corporativa.",
      tags: ["SAP Experts", "Integrações", "B2B"],
      icon: <Database className="text-white" size={24} />
    },
    {
      title: "Marketing & Growth",
      description: "Acelere seu crescimento com estratégias de Growth e Marketing Digital. Focamos em performance, SEO técnico e aquisição de leads qualificados para escalar seus produtos no mercado.",
      tags: ["SEO/SEM", "Performance", "Growth"],
      icon: <TrendingUp className="text-white" size={24} />
    }
  ];

  return (
    <section id="servicos" className="py-section bg-brand-bg border-t border-brand-border/30 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Nossa <span className="text-brand-muted">Expertise</span>
            </h2>
            <p className="font-sans text-brand-muted max-w-md">
              Somos generalistas experientes. Combinamos as competências essenciais para resolver qualquer desafio digital da sua empresa.
            </p>
          </div>
          <a href="https://wa.me/5511998644004" className="hidden md:flex items-center gap-2 text-white font-medium hover:text-brand-primary transition-colors group">
            Ver todas as soluções <MoveRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-brand-surface rounded-brand p-8 border border-brand-border hover:border-brand-primary/50 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                {service.icon}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                <div>
                   <div className="w-12 h-12 bg-brand-surfaceHighlight rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-muted">
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