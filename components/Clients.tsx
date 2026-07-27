import React from 'react';

/**
 * Marcas exibidas como wordmark em texto, de propósito.
 *
 * Antes eram <img> apontando para Wikimedia e logodownload.org.
 * Isso quebrava por três motivos: hotlink é bloqueado na origem,
 * SVG de terceiro não renderiza confiável, e usar logo de marca
 * registrada sem licença é risco desnecessário.
 *
 * Texto sempre renderiza, carrega instantâneo e não depende de ninguém.
 */
const MARCAS = [
  'Magalu',
  'Brasilprev',
  'Samsung',
  'Wellhub',
  'Dafiti',
  'Prefeitura de Santos',
  'Zurich',
];

const Clients: React.FC = () => {
  const trilha = [...MARCAS, ...MARCAS, ...MARCAS];

  return (
    <section className="py-12 bg-brand-bg border-b border-brand-border/20 overflow-hidden relative">
      <div className="max-w-container mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.2em]">
          Experiência do time em
        </p>
      </div>

      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <div className="flex gap-16 md:gap-24 items-center animate-scroll min-w-full pl-24">
          {trilha.map((marca, i) => (
            <div
              key={`${marca}-${i}`}
              className="flex items-center justify-center min-w-[120px] h-[60px] whitespace-nowrap"
            >
              <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white/40 hover:text-white/90 transition-colors duration-300">
                {marca}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
