import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg border-b border-brand-border/30">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">Biz</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Inteligência de Negócio</p>
            </div>
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">Process</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Eficiência & Operação</p>
            </div>
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">Tech</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Apps, SAP & Dados</p>
            </div>
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">Growth</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Resultados Reais</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;