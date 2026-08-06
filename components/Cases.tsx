import React from 'react';
import { MoveRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '../sites/fx';

/**
 * Seção de cases da home.
 *
 * É a prova de que a KORA entrega, e o principal ponto de entrada para as
 * páginas de case — que antes só eram alcançáveis por dentro do /sites ou
 * de uma atuação. Cada card leva ao case completo.
 *
 * Sem número inventado aqui também: cada descrição é o que o trabalho é,
 * não um resultado que não temos como comprovar.
 */

const cases = [
  {
    titulo: 'Mike White',
    categoria: 'Negócios locais',
    descricao:
      'Site, marca e presença no Google pro professor de boxe — de invisível na busca a encontrado em Peruíbe.',
    imagem: '/case-mike-white.jpg',
    href: '/cases/mike-white/',
  },
  {
    titulo: 'Entre Patas',
    categoria: 'Produto · voluntário',
    descricao:
      'Site público e painel de gestão para uma ONG animal atualizar o próprio conteúdo, sem depender de desenvolvedor.',
    imagem: '/kora-og.png',
    href: '/cases/entre-patas/',
  },
  {
    titulo: 'Agilímetro',
    categoria: 'Produto próprio',
    descricao:
      'SaaS de métricas de engenharia que integra com o Jira: DORA, visão executiva, sprint review e mapa de OKRs.',
    imagem: '/kora-og.png',
    href: '/cases/agilimetro/',
  },
];

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-20 bg-brand-bg border-t border-brand-border/30">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Cases <span className="text-brand-muted">no ar</span>
              </h2>
              <p className="font-sans text-brand-muted max-w-md">
                Trabalhos entregues e funcionando. Do site de um negócio local
                a produtos que a gente mesmo constrói e opera.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, index) => (
            <Reveal key={c.titulo} delay={index * 100} className="h-full">
                <a
                  href={c.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-brand border border-brand-border bg-brand-surface transition-colors duration-500 hover:border-brand-primary/50"
                >
                  <div className="aspect-[1200/630] w-full overflow-hidden border-b border-brand-border">
                    <img
                      src={c.imagem}
                      alt={`Case ${c.titulo}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
                      {c.categoria}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {c.titulo}
                    </h3>
                    <p className="font-sans text-sm text-brand-muted leading-relaxed mb-6">
                      {c.descricao}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-muted transition-colors group-hover:text-brand-primary">
                      Ver o case
                      <MoveRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href="/sites/"
              className="inline-flex items-center gap-2 text-brand-muted font-medium hover:text-brand-primary transition-colors group"
            >
              Ver sites para negócios locais
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Cases;
