import React from 'react';
import { Cog, Settings, Box, BrainCircuit, Database, TrendingUp } from 'lucide-react';

/**
 * Hero hub — arte do hero como componente real (era bitmap ilegível).
 * Layout em grid de 3 colunas: esquerda e direita com os cards,
 * centro com o dashboard em cima e o tile da marca embaixo. Lê como
 * radial (tudo converge no centro) sem sobreposição absoluta.
 * Mobile: tile no topo + grid de 2 colunas.
 */

type Card = {
  titulo: string;
  sub: string;
  icone: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
};

const esquerda: Card[] = [
  { titulo: 'ERP', sub: 'Integração que sustenta a operação', icone: Cog },
  { titulo: 'Processos', sub: 'Eficiência operacional e automação', icone: Settings },
  { titulo: 'Produtos Digitais', sub: 'Soluções escaláveis e inovadoras', icone: Box },
];
const direita: Card[] = [
  { titulo: 'IA', sub: 'Inteligência que gera vantagem', icone: BrainCircuit },
  { titulo: 'Dados', sub: 'Informação que gera insights', icone: Database },
  { titulo: 'Resultados', sub: 'Crescimento sustentável e mensurável', icone: TrendingUp },
];
const todos = [...esquerda, ...direita];

const CardHub: React.FC<{ card: Card }> = ({ card: { titulo, sub, icone: Icone } }) => (
  <div className="flex items-start gap-3 rounded-2xl border border-brand-primary/25 bg-brand-surface/70 p-4 backdrop-blur-sm transition-colors hover:border-brand-primary/50">
    <span className="mt-0.5 flex-none text-brand-primary">
      <Icone size={22} strokeWidth={1.6} />
    </span>
    <div className="min-w-0">
      <h3 className="text-sm font-bold leading-tight text-white">{titulo}</h3>
      <p className="mt-1 text-xs leading-snug text-brand-muted">{sub}</p>
    </div>
  </div>
);

const TileCentral: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-3">
    <img
      src="/kora-favicon-512.png"
      alt=""
      aria-hidden="true"
      className="h-24 w-24 rounded-3xl"
      style={{ boxShadow: '0 0 55px rgba(47,107,255,0.45)' }}
    />
    <img src="/kora-wordmark-branco.png" alt="" aria-hidden="true" className="h-4 w-auto" />
    <span className="text-[11px] font-medium text-brand-muted">Business First</span>
  </div>
);

const CardDashboard: React.FC = () => (
  <div className="rounded-2xl border border-brand-primary/25 bg-brand-surface/70 p-4 backdrop-blur-sm">
    <h3 className="text-sm font-bold leading-tight text-white">Dashboard Executivo</h3>
    <p className="mt-0.5 text-xs text-brand-muted">Decisões com clareza</p>
    <div className="mt-3 grid grid-cols-3 gap-2">
      <div className="rounded-lg bg-brand-bg/60 p-2">
        <svg viewBox="0 0 60 30" className="h-8 w-full" aria-hidden="true">
          <polyline points="2,26 14,18 26,22 38,10 50,14 58,4" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="mt-1 truncate text-center text-[8px] text-brand-muted">Indicadores</p>
      </div>
      <div className="rounded-lg bg-brand-bg/60 p-2">
        <svg viewBox="0 0 60 30" className="h-8 w-full" aria-hidden="true">
          <rect x="6" y="16" width="8" height="12" rx="1" fill="#2F6BFF" opacity="0.6" />
          <rect x="20" y="10" width="8" height="18" rx="1" fill="#2F6BFF" opacity="0.8" />
          <rect x="34" y="13" width="8" height="15" rx="1" fill="#2F6BFF" opacity="0.7" />
          <rect x="48" y="6" width="8" height="22" rx="1" fill="#2F6BFF" />
        </svg>
        <p className="mt-1 truncate text-center text-[8px] text-brand-muted">Performance</p>
      </div>
      <div className="rounded-lg bg-brand-bg/60 p-2">
        <svg viewBox="0 0 36 36" className="mx-auto h-8 w-8" aria-hidden="true">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#1E3350" strokeWidth="4" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="#2F6BFF" strokeWidth="4" strokeLinecap="round" strokeDasharray="73.5 94" transform="rotate(-90 18 18)" />
          <text x="18" y="22" textAnchor="middle" className="fill-white" style={{ fontSize: '11px', fontWeight: 700 }}>78%</text>
        </svg>
        <p className="mt-1 truncate text-center text-[8px] text-brand-muted">Resultados</p>
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
      {/* ── Desktop: grid 3 colunas ──────────────────────── */}
      <div className="relative hidden lg:block">
        <div className="pointer-events-none absolute inset-[20%] -z-10 rounded-full bg-brand-primary/15 blur-3xl" aria-hidden="true" />
        <div className="grid grid-cols-3 items-center gap-5">
          {/* esquerda */}
          <div className="flex flex-col gap-4">
            {esquerda.map((c) => <CardHub key={c.titulo} card={c} />)}
          </div>
          {/* centro: dashboard + tile, centralizado na coluna */}
          <div className="flex flex-col items-center gap-6">
            <CardDashboard />
            <TileCentral />
          </div>
          {/* direita */}
          <div className="flex flex-col gap-4">
            {direita.map((c) => <CardHub key={c.titulo} card={c} />)}
          </div>
        </div>
      </div>

      {/* ── Mobile/tablet: tile no topo + grid 2 colunas ──── */}
      <div className="lg:hidden">
        <div className="mx-auto w-fit"><TileCentral /></div>
        <div className="mt-6"><CardDashboard /></div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {todos.map((c) => <CardHub key={c.titulo} card={c} />)}
        </div>
      </div>
    </div>
  );
};

export default HeroHub;
