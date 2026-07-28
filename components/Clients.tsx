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
 * Use SVG ou PNG com fundo transparente.
 *
 * Sem loading="lazy" de propósito: a imagem precisa TENTAR carregar de
 * imediato para o onError disparar e o texto assumir. Com lazy, as marcas
 * fora da tela ficam como caixa vazia de 112px na esteira até o navegador
 * decidir buscá-las — buraco visível numa faixa que rola sozinha.
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
      decoding="async"
      width={140}
      height={40}
      onError={() => setFalhou(true)}
      className="h-7 md:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
    />
  );
};

/**
 * Um grupo completo de marcas. A esteira renderiza DOIS grupos idênticos
 * e anima translateX(-50%): quando o primeiro grupo sai inteiro, o segundo
 * está exatamente onde o primeiro começou — loop sem salto. Por isso:
 * nada de padding na faixa animada e nada de terceira cópia (era isso que
 * fazia a esteira "pular" a cada volta).
 */
const Grupo: React.FC<{ ariaHidden?: boolean }> = ({ ariaHidden }) => (
  <div
    aria-hidden={ariaHidden || undefined}
    className="flex shrink-0 items-center gap-12 pr-12 md:gap-24 md:pr-24"
  >
    {MARCAS.map((marca) => (
      <div
        key={marca.nome}
        className="flex h-[52px] min-w-[104px] items-center justify-center md:min-w-[120px]"
      >
        <Marca marca={marca} />
      </div>
    ))}
  </div>
);

const Clients: React.FC = () => {
  return (
    <section className="py-14 bg-brand-bg border-b border-brand-border/30 overflow-hidden relative">
      <div className="max-w-container mx-auto px-6 mb-9 text-center">
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.2em]">
          Experiência do time em
        </p>
      </div>

      {/* Máscaras de borda: mais estreitas no mobile pra não engolir metade da tela */}
      <div className="absolute top-0 bottom-0 left-0 w-10 md:w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-10 md:w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden group">
        <div className="flex w-max items-center animate-scroll [animation-duration:28s] md:[animation-duration:45s] group-hover:[animation-play-state:paused]">
          <Grupo />
          <Grupo ariaHidden />
        </div>
      </div>
    </section>
  );
};

export default Clients;
