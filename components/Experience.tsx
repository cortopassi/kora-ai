import React from 'react';
import { Reveal } from '../sites/fx';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg border-b border-brand-border/30">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal delay={0} className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter transition-colors duration-300 hover:text-brand-primary cursor-default">Biz</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Inteligência de Negócio</p>
            </Reveal>
            <Reveal delay={100} className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter transition-colors duration-300 hover:text-brand-primary cursor-default">Process</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Eficiência & Operação</p>
            </Reveal>
            <Reveal delay={200} className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter transition-colors duration-300 hover:text-brand-primary cursor-default">Tech</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Apps, SAP & Dados</p>
            </Reveal>
            <Reveal delay={300} className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter transition-colors duration-300 hover:text-brand-primary cursor-default">Growth</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Resultados Reais</p>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;