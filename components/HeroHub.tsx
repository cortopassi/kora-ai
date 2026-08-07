import React from 'react';
import { Cog, Settings, Box, BrainCircuit, Database, TrendingUp } from 'lucide-react';

/**
 * Hero hub — composição radial: o tile KORA é o centro geométrico,
 * maior que os cards, com os 6 serviços em elipse ao redor e o
 * Dashboard Executivo no topo. Linhas conectoras SVG ligam o centro
 * a cada card. Mobile: tile no topo + grid 2 colunas, sem radial.
 */

type Card = {
  titulo: string;
  sub: string;
  icone: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  /** posição absoluta no desktop (elipse ao redor do centro) */
  pos: string;
};

const cards: Card[] = [
  { titulo: 'ERP', sub: 'Integração que sustenta a operação', icone: Cog, pos: 'left-0 top-[14%]' },
  { titulo: 'Processos', sub: 'Eficiência operacional e automação', icone: Settings, pos: 'left-0 top-[42%]' },
  { titulo: 'Produtos Digitais', sub: 'Soluções escaláveis e inovadoras', icone: Box, pos: 'left-[4%] bottom-[4%]' },
  { titulo: 'IA', sub: 'Inteligência que gera vantagem', icone: BrainCircuit, pos: 'right-0 top-[14%]' },
  { titulo: 'Dados', sub: 'Informação que gera insights', icone: Database, pos: 'right-0 top-[42%]' },
  { titulo: 'Resultados', sub: 'Crescimento sustentável e mensurável', icone: TrendingUp, pos: 'right-[4%] bottom-[4%]' },
];

const CardHub: React.FC<{ card: Card; className?: string }> = ({ card: { titulo, sub, icone: Icone }, className = '' }) => (
  <div className={`flex items-start gap-3 rounded-2xl border border-brand-primary/25 bg-brand-surface/70 p-4 backdrop-blur-sm ${className}`}>
    <span className="mt-0.5 flex-none text-brand-primary">
      <Icone size={22} strokeWidth={1.6} />
    </span>
    <div className="min-w-0">
      <h3 className="text-sm font-bold leading-tight text-white">{titulo}</h3>
      <p className="mt-1 text-xs leading-snug text-brand-muted">{sub}</p>
    </div>
  </div>
);

/** Tile central — unidade fechada: K + wordmark + Business First dentro. */
const TileCentral: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`flex flex-col items-center justify-center gap-2.5 rounded-3xl border border-brand-primary/50 bg-brand-bg px-8 py-7 ring-2 ring-brand-primary/30 ${className}`}
    style={{ boxShadow: '0 0 65px rgba(47,107,255,0.5)' }}
  >
    <img src="/kora-favicon-512.png" alt="" aria-hidden="true" className="h-16 w-16 rounded-2xl" />
    <img src="/kora-wordmark-branco.png" alt="" aria-hidden="true" className="h-4 w-auto" />
    <span className="text-[11px] font-medium text-brand-muted">Business First</span>
  </div>
);

/** Dashboard — só gráficos + 78%, sem labels (evita truncamento). */
const CardDashboard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`rounded-2xl border border-brand-primary/25 bg-brand-surface/70 p-4 backdrop-blur-sm ${className}`}>
    <h3 className="text-sm font-bold leading-tight text-white">Dashboard Executivo</h3>
    <p className="mt-0.5 text-xs text-brand-muted">Decisões com clareza</p>
    <div className="mt-3 flex items-center justify-between gap-2">
      <div className="flex-1 rounded-lg bg-brand-bg/60 p-2.5">
        <svg viewBox="0 0 60 30" className="h-8 w-full" aria-hidden="true">
          <polyline points="2,26 14,18 26,22 38,10 50,14 58,4" fill="none" stroke="#2F6BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex-1 rounded-lg bg-brand-bg/60 p-2.5">
        <svg viewBox="0 0 60 30" className="h-8 w-full" aria-hidden="true">
          <rect x="6" y="16" width="9" height="12" rx="1" fill="#2F6BFF" opacity="0.6" />
          <rect x="22" y="10" width="9" height="18" rx="1" fill="#2F6BFF" opacity="0.8" />
          <rect x="38" y="13" width="9" height="15" rx="1" fill="#2F6BFF" opacity="0.7" />
          <rect x="52" y="6" width="6" height="22" rx="1" fill="#2F6BFF" />
        </svg>
      </div>
      <div className="flex-none rounded-lg bg-brand-bg/60 p-2">
        <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#1E3350" strokeWidth="4" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="#2F6BFF" strokeWidth="4" strokeLinecap="round" strokeDasharray="73.5 94" transform="rotate(-90 18 18)" />
          <text x="18" y="22" textAnchor="middle" className="fill-white" style={{ fontSize: '11px', fontWeight: 700 }}>78%</text>
        </svg>
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
      <div className="relative hidden aspect-[10/9] w-full lg:block">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute inset-[22%] -z-10 rounded-full bg-brand-primary/15 blur-3xl" aria-hidden="true" />

        {/* Linhas conectoras do centro até cada card */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 90" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#2F6BFF" strokeWidth="0.35" opacity="0.35">
            <path d="M50,50 C36,50 26,20 14,17" />
            <path d="M50,50 C34,50 22,48 12,45" />
            <path d="M50,52 C36,58 24,74 16,80" />
            <path d="M50,50 C64,50 74,20 86,17" />
            <path d="M50,50 C66,50 78,48 88,45" />
            <path d="M50,52 C64,58 76,74 84,80" />
            <path d="M50,44 C50,34 50,26 50,16" />
          </g>
          <g fill="#2F6BFF">
            <circle cx="30" cy="34" r="0.5" /><circle cx="20" cy="47" r="0.5" /><circle cx="32" cy="64" r="0.5" />
            <circle cx="70" cy="34" r="0.5" /><circle cx="80" cy="47" r="0.5" /><circle cx="68" cy="64" r="0.5" />
            <circle cx="50" cy="30" r="0.5" />
          </g>
        </svg>

        {/* Dashboard no topo-centro */}
        <CardDashboard className="absolute left-1/2 top-0 w-[40%] -translate-x-1/2" />

        {/* 6 cards em elipse */}
        {cards.map((c) => (
          <CardHub key={c.titulo} card={c} className={`absolute w-[27%] ${c.pos}`} />
        ))}

        {/* Tile central — maior (~1.4x) e no centro geométrico */}
        <TileCentral className="absolute left-1/2 top-1/2 w-[24%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ── Mobile/tablet: tile no topo + grid 2 colunas ──── */}
      <div className="lg:hidden">
        <div className="mx-auto w-fit"><TileCentral /></div>
        <div className="mt-6"><CardDashboard /></div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {cards.map((c) => <CardHub key={c.titulo} card={c} />)}
        </div>
      </div>
    </div>
  );
};

export default HeroHub;
