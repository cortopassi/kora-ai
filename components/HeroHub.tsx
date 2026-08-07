import React from 'react';
import { Cog, Settings, Box, BrainCircuit, Database, TrendingUp } from 'lucide-react';

/**
 * Hero hub — a arte do hero reconstruída como componente real (era um
 * bitmap kora-hero-hub.jpg, ilegível quando reduzido). Agora o texto é
 * vetorial, selecionável e acessível.
 *
 * Desktop (lg+): composição radial com o tile central, 6 cards em elipse,
 * o card do dashboard no topo e linhas conectoras SVG atrás.
 * Mobile/tablet: vira tile no topo + grid de 2 colunas, sem radial.
 */

type Card = {
  titulo: string;
  sub: string;
  icone: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  /** posição absoluta no desktop (elipse ao redor do centro) */
  pos: string;
};

const cards: Card[] = [
  { titulo: 'ERP', sub: 'Integração que sustenta a operação', icone: Cog, pos: 'left-0 top-[18%]' },
  { titulo: 'Processos', sub: 'Eficiência operacional e automação', icone: Settings, pos: 'left-0 top-1/2 -translate-y-1/2' },
  { titulo: 'Produtos Digitais', sub: 'Soluções escaláveis e inovadoras', icone: Box, pos: 'left-[10%] bottom-[6%]' },
  { titulo: 'IA', sub: 'Inteligência que gera vantagem', icone: BrainCircuit, pos: 'right-0 top-[18%]' },
  { titulo: 'Dados', sub: 'Informação que gera insights', icone: Database, pos: 'right-0 top-1/2 -translate-y-1/2' },
  { titulo: 'Resultados', sub: 'Crescimento sustentável e mensurável', icone: TrendingUp, pos: 'right-[10%] bottom-[6%]' },
];

const CardHub: React.FC<{ card: Card; className?: string }> = ({ card, className = '' }) => {
  const { titulo, sub, icone: Icone } = card;
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border border-brand-primary/25 bg-brand-surface/70 p-4 backdrop-blur-sm ${className}`}
    >
      <span className="mt-0.5 flex-none text-brand-primary">
        <Icone size={22} strokeWidth={1.6} />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold leading-tight text-white">{titulo}</h3>
        <p className="mt-1 text-xs leading-snug text-brand-muted">{sub}</p>
      </div>
    </div>
  );
};

/** Tile central com o K, wordmark e "Business First". */
const TileCentral: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`relative flex flex-col items-center justify-center gap-2 rounded-3xl border border-brand-primary/40 bg-brand-bg/90 px-8 py-7 ring-1 ring-brand-primary/30 ${className}`}
    style={{ boxShadow: '0 0 60px rgba(47,107,255,0.35)' }}
  >
    <img src="/kora-favicon-512.png" alt="" aria-hidden="true" className="h-16 w-16" />
    <img src="/kora-wordmark-branco.png" alt="" aria-hidden="true" className="h-4 w-auto" />
    <span className="text-[11px] font-medium text-brand-muted">Business First</span>
  </div>
);

/** Card do dashboard executivo com mini-gráficos SVG. */
const CardDashboard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`rounded-2xl border border-brand-primary/25 bg-brand-surface/70 p-4 backdrop-blur-sm ${className}`}
  >
    <h3 className="text-sm font-bold leading-tight text-white">Dashboard Executivo</h3>
    <p className="mt-0.5 text-xs text-brand-muted">Decisões com clareza</p>
    <div className="mt-3 grid grid-cols-3 gap-2">
      {/* Indicadores — linha */}
      <div className="rounded-lg bg-brand-bg/60 p-2">
        <svg viewBox="0 0 60 30" className="h-8 w-full" aria-hidden="true">
          <polyline points="2,26 14,18 26,22 38,10 50,14 58,4" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="mt-1 text-center text-[9px] text-brand-muted">Indicadores</p>
      </div>
      {/* Performance — barras */}
      <div className="rounded-lg bg-brand-bg/60 p-2">
        <svg viewBox="0 0 60 30" className="h-8 w-full" aria-hidden="true">
          <rect x="6" y="16" width="8" height="12" rx="1" fill="#2F6BFF" opacity="0.6" />
          <rect x="20" y="10" width="8" height="18" rx="1" fill="#2F6BFF" opacity="0.8" />
          <rect x="34" y="13" width="8" height="15" rx="1" fill="#2F6BFF" opacity="0.7" />
          <rect x="48" y="6" width="8" height="22" rx="1" fill="#2F6BFF" />
        </svg>
        <p className="mt-1 text-center text-[9px] text-brand-muted">Performance</p>
      </div>
      {/* Resultados — anel 78% */}
      <div className="rounded-lg bg-brand-bg/60 p-2">
        <svg viewBox="0 0 36 36" className="mx-auto h-8 w-8" aria-hidden="true">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#1E3350" strokeWidth="4" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="#2F6BFF" strokeWidth="4" strokeLinecap="round" strokeDasharray="73.5 94" transform="rotate(-90 18 18)" />
          <text x="18" y="22" textAnchor="middle" className="fill-white" style={{ fontSize: '11px', fontWeight: 700 }}>78%</text>
        </svg>
        <p className="mt-1 text-center text-[9px] text-brand-muted">Resultados</p>
      </div>
    </div>
  </div>
);

const HeroHub: React.FC = () => {
  return (
    <div
      role="img"
      aria-label="Diagrama: a KORA conectando ERP, IA, dados, processos e produtos digitais a um dashboard executivo"
    >
      {/* ── Desktop: composição radial ────────────────────── */}
      <div className="relative hidden aspect-[4/3] w-full lg:block">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute inset-[15%] -z-10 rounded-full bg-brand-primary/15 blur-3xl" aria-hidden="true" />

        {/* Linhas conectoras */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 75" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#2F6BFF" strokeWidth="0.3" opacity="0.4">
            <path d="M50,42 C35,42 30,25 16,22" />
            <path d="M50,42 C32,42 20,42 8,42" />
            <path d="M50,45 C35,50 28,62 20,66" />
            <path d="M50,42 C65,42 70,25 84,22" />
            <path d="M50,42 C68,42 80,42 92,42" />
            <path d="M50,45 C65,50 72,62 80,66" />
            <path d="M50,38 C50,30 50,24 50,16" />
          </g>
          <g fill="#2F6BFF">
            <circle cx="16" cy="22" r="0.6" /><circle cx="8" cy="42" r="0.6" /><circle cx="20" cy="66" r="0.6" />
            <circle cx="84" cy="22" r="0.6" /><circle cx="92" cy="42" r="0.6" /><circle cx="80" cy="66" r="0.6" />
            <circle cx="50" cy="16" r="0.6" />
          </g>
        </svg>

        {/* Card do dashboard no topo */}
        <CardDashboard className="absolute left-1/2 top-0 w-[38%] -translate-x-1/2" />

        {/* 6 cards ao redor */}
        {cards.map((c) => (
          <CardHub key={c.titulo} card={c} className={`absolute w-[26%] ${c.pos}`} />
        ))}

        {/* Tile central */}
        <TileCentral className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ── Mobile/tablet: tile no topo + grid 2 colunas ──── */}
      <div className="lg:hidden">
        <TileCentral className="mx-auto w-fit" />
        <div className="mt-6">
          <CardDashboard />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {cards.map((c) => (
            <CardHub key={c.titulo} card={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroHub;
