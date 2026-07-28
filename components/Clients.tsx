import React, { useState } from 'react';

/**
 * Faixa de marcas.
 *
 * Cada marca tenta carregar o arquivo em /logos/. Se o arquivo não existir
 * ou falhar ao carregar, o wordmark em texto assume no lugar — a faixa
 * nunca volta a exibir alt text quebrado como aconteceu antes.
 *
 * Para ativar as logos, coloque em public/logos/:
 *   magalu.svg · brasilprev.svg · samsung.svg
 *   wellhub.svg · dafiti.svg · prefeitura-santos.svg · zurich.svg
 *
 * Use SVG ou PNG com fundo transparente. O filtro deixa tudo em tom
 * uniforme, então logo colorida fica coerente com o resto da página.
 */

type Marca = { nome: string; arquivo: string };

const MARCAS: Marca[] = [
  { nome: 'Magalu', arquivo: '/logos/magalu.svg' },
  { nome: 'Brasilprev', arquivo: '/logos/brasilprev.svg' },
  { nome: 'Samsung', arquivo: '/logos/samsung.svg' },
  { nome: 'Wellhub', arquivo: '/logos/wellhub.svg' },
  { nome: 'Dafiti', arquivo: '/logos/dafiti.svg' },
  { nome: 'Prefeitura de Santos', arquivo: '/logos/prefeitura-santos.svg' },
  { nome: 'Zurich', arquivo: '/logos/zurich.svg' },
];

const Marca: React.FC<{ marca: Marca }> = ({ marca }) => {
  const [falhou, setFalhou] = useState(false);

  if (falhou) {
    return (
      <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white/45 hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
        {marca.nome}
      </span>
    );
  }

  return (
    <img
      src={marca.arquivo}
      alt={marca.nome}
      loading="lazy"
      width={140}
      height={40}
      onError={() => setFalhou(true)}
      className="h-7 md:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
    />
  );
};

const Clients: React.FC = () => {
  const trilha = [...MARCAS, ...MARCAS, ...MARCAS];

  return (
    <section className="py-14 bg-brand-bg border-b border-brand-border/30 overflow-hidden relative">
      <div className="max-w-container mx-auto px-6 mb-9 text-center">
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
              key={`${marca.nome}-${i}`}
              className="flex items-center justify-center min-w-[120px] h-[52px]"
            >
              <Marca marca={marca} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
