import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg border-b border-brand-border/30">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">5+</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Anos de Mercado</p>
            </div>
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">20+</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Projetos Entregues</p>
            </div>
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">100%</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Foco em ROI</p>
            </div>
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tighter">IA</h3>
                <p className="text-sm font-medium text-brand-muted uppercase tracking-wide">Nativa</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;