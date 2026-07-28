import React from 'react';
import { ArrowUpRight, ArrowLeft, MessageCircle, Check } from 'lucide-react';
import { Reveal, Tilt } from '../sites/fx';
import type { Atuacao } from './data';

const ZAP = 'https://wa.me/5511998644004';

const AtuacaoPage: React.FC<{ atuacao: Atuacao }> = ({ atuacao }) => {
  const { icone: Icone } = atuacao;
  const zapComContexto = `${ZAP}?text=${encodeURIComponent(
    `Oi! Quero conversar sobre ${atuacao.titulo}.`
  )}`;

  return (
    <div className="bg-brand-bg text-brand-text min-h-screen font-sans">
      {/* Topo */}
      <header className="border-b border-brand-border/40">
        <div className="max-w-container mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            aria-label="Voltar para a página inicial"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-muted hover:text-brand-text transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Voltar <span className="hidden sm:inline">pra home</span>
          </a>
          <a
            href={zapComContexto}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text border border-brand-border px-4 py-2 rounded-pill hover:bg-brand-surfaceHighlight active:scale-[0.98] transition"
          >
            <MessageCircle size={15} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-16 md:pt-28">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary mb-8 animate-fade-in">
          <Icone size={14} aria-hidden="true" />
          Atuação Kora
        </p>
        <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-[18ch] mb-6 animate-slide-up">
          {atuacao.titulo}
        </h1>
        <p className="font-heading text-xl md:text-2xl text-brand-primary font-semibold mb-8 max-w-[38ch] animate-slide-up" style={{ animationDelay: '0.15s' }}>
          {atuacao.promessa}
        </p>
        <p className="text-lg text-brand-muted max-w-[62ch] leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>{atuacao.resumo}</p>
      </section>

      {/* Dores */}
      <section className="border-y border-brand-border/40 bg-brand-surface">
        <div className="max-w-container mx-auto px-6 py-20">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-12">
              Quando faz sentido nos chamar
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {atuacao.dores.map((dor, i) => (
              <Reveal key={dor.titulo} delay={i * 110} className="h-full">
                <div className="h-full bg-brand-bg border border-brand-border rounded-brand p-7">
                  <h3 className="font-heading font-bold text-lg mb-3 leading-snug">{dor.titulo}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{dor.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Entregas */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-12">
            O que entregamos
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {atuacao.entregas.map((entrega, i) => (
            <Reveal key={entrega.titulo} delay={i * 90} className="h-full">
              <Tilt className="h-full">
                <div className="h-full bg-brand-surface border border-brand-border rounded-brand p-7 hover:border-brand-primary/40 transition-colors">
                  <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary mb-5">
                    <Check size={16} aria-hidden="true" />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-3 leading-snug">{entrega.titulo}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{entrega.texto}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-t border-brand-border/40 bg-brand-surface">
        <div className="max-w-container mx-auto px-6 py-20">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-12">
              Como funciona
            </h2>
          </Reveal>
          <ol className="grid md:grid-cols-3 gap-8">
            {atuacao.comoFunciona.map((passo, i) => (
              <Reveal key={passo.titulo} delay={i * 110}>
                <li className="relative pt-8 border-t border-brand-border">
                  <span className="absolute -top-3 left-0 bg-brand-surface px-2 text-sm font-bold text-brand-primary">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading font-bold text-xl mb-3 mt-2">{passo.titulo}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{passo.texto}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <p className="mt-14 text-brand-muted leading-relaxed max-w-[60ch] border-l-2 border-brand-primary pl-6">
              <span className="text-brand-text font-medium">Para quem é:</span> {atuacao.paraQuem}
            </p>
            {atuacao.caseLink && (
              <a
                href={atuacao.caseLink.href}
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-primary hover:brightness-125 transition"
              >
                {atuacao.caseLink.rotulo}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-border/40">
        <div className="max-w-container mx-auto px-6 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-6 max-w-[22ch] mx-auto">
              Vamos conversar sobre o seu cenário?
            </h2>
            <p className="text-brand-muted max-w-[46ch] mx-auto mb-10 leading-relaxed">
              Primeira conversa sem compromisso: você conta o contexto, a gente diz com
              franqueza se e como podemos ajudar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={zapComContexto}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-7 py-4 rounded-pill hover:brightness-110 active:scale-[0.98] transition"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <a
                href="/#servicos"
                className="inline-flex items-center gap-2 border border-brand-border text-brand-text font-semibold px-7 py-4 rounded-pill hover:bg-brand-surfaceHighlight active:scale-[0.98] transition"
              >
                Ver todas as atuações
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-brand-border/40">
        <div className="max-w-container mx-auto px-6 py-8 flex flex-wrap gap-4 justify-between text-sm text-brand-muted">
          <span>© {new Date().getFullYear()} Kora</span>
          <a href="/" className="hover:text-brand-text transition-colors">
            kora-ia.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AtuacaoPage;
