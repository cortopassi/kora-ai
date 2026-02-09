import React from 'react';
import { MonitorSmartphone, GitMerge, Database, TrendingUp, MoveRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Eficiência Operacional",
      description: "Organização e otimização de fluxos de trabalho. Usamos Agilidade Organizacional para reduzir desperdícios e conectar a operação aos objetivos estratégicos (OKRs), gerando ganho de tempo e receita.",
      tags: ["Mapeamento", "Agile", "Processos"],
      icon: <GitMerge className="text-white" size={24} />
    },
    {
      title: "Tecnologia & Desenvolvimento",
      description: "Construção de soluções digitais sob medida. Quando o software é a resposta, desenvolvemos Apps, Sites e Plataformas robustas para materializar a solução que o seu negócio precisa.",
      tags: ["Apps & Sites", "SaaS", "Custom Dev"],
      icon: <MonitorSmartphone className="text-white" size={24} />
    },
    {
      title: "Sistemas & Dados (SAP)",
      description: "Consultoria técnica especializada para ambientes corporativos. Integração de ERPs (SAP) com novas tecnologias e estruturação de dados para embasar a tomada de decisão executiva.",
      tags: ["SAP Experts", "Integrações", "Dados/IA"],
      icon: <Database className="text-white" size={24} />
    },
    {
      title: "Estratégia & Crescimento",
      description: "Visão de produto e mercado. Atuamos na gestão de produtos digitais e em estratégias de Marketing (Growth/SEO) para garantir que sua solução não apenas exista, mas cresça e venda.",
      tags: ["Product Management", "SEO", "Growth"],
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
              Somos parceiros na resolução de problemas. Combinamos visão de negócio com um kit de ferramentas técnicas completo para destravar o seu crescimento.
            </p>
          </div>
          <a href="https://wa.me/5511998644004" className="hidden md:flex items-center gap-2 text-white font-medium hover:text-brand-primary transition-colors group">
            Falar com um especialista <MoveRight size={20} className="transition-transform group-hover:translate-x-1" />
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