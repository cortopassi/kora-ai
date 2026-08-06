import React from 'react';
import {
  Globe,
  Palette,
  MessageSquareQuote,
  MapPin,
  Users,
  Tag,
  ArrowUpRight,
  ArrowLeft,
  MessageCircle,
} from 'lucide-react';
import { Reveal } from '../../sites/fx';

/**
 * Case Mike White.
 *
 * Mesma regra dos outros cases: descreve o QUE FOI CONSTRUÍDO e o que já
 * mudou na presença digital, sem inventar número de aluno ou faturamento.
 * O negócio é do Mike; os números entram aqui quando existirem.
 */

const ZAP = 'https://wa.me/5511998644004';

const CONSTRUIDO = [
  {
    icone: Globe,
    titulo: 'Site em domínio próprio',
    texto:
      'mwboxe.com.br, uma página, direto pro WhatsApp.',
  },
  {
    icone: Palette,
    titulo: 'Identidade aplicada',
    texto:
      'A marca do Mike em site, favicon e redes, de ponta a ponta.',
  },
  {
    icone: MessageSquareQuote,
    titulo: 'Prova social real',
    texto:
      'Depoimento de pai de aluno com foto verdadeira; nada inventado.',
  },
  {
    icone: MapPin,
    titulo: 'Google de ponta a ponta',
    texto:
      'Site indexado, perfil no Maps com botão de WhatsApp, avaliações abertas.',
  },
  {
    icone: Users,
    titulo: 'Dois públicos, uma página',
    texto:
      'Adulto iniciante e pais de alunos a partir de 5 anos, cada um com seu caminho.',
  },
  {
    icone: Tag,
    titulo: 'Preço sem pegadinha',
    texto:
      'Valores públicos na página, primeira aula grátis.',
  },
];

const CasePage: React.FC = () => {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen font-sans">
      {/* ── topo ─────────────────────────────────────── */}
      <header className="border-b border-brand-border/40">
        <div className="max-w-container mx-auto px-6 py-5 flex items-center justify-between relative">
          <a href="/" aria-label="KORA — página inicial" className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
            <img src="/kora-wordmark-branco.png" alt="KORA" className="h-5 w-auto" />
          </a>
          <a
            href="/"
            aria-label="Voltar para a página inicial"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-muted hover:text-brand-text transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Voltar <span className="hidden sm:inline">pra home</span>
          </a>
          <a
            href="/sites/"
            className="text-sm text-brand-muted hover:text-brand-text transition-colors"
          >
            Sites para negócios locais
          </a>
        </div>
      </header>

      {/* ── hero ─────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          Case · negócios locais
        </p>

        <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.02] tracking-tight max-w-[19ch] mb-8 animate-slide-up">
          De invisível no Google a{' '}
          <span className="text-brand-primary">
            encontrado em Peruíbe
          </span>
        </h1>

        <p className="text-lg md:text-xl text-brand-muted max-w-[58ch] leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Site, marca e presença digital completa pro professor de boxe Mike
          White — campeão dentro do ringue, invisível fora do Instagram.
        </p>

        <div className="mt-16 pt-10 border-t border-brand-border/40 animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <img
            src="/case-mike-white.jpg"
            alt="Turma treinando boxe com o professor Mike White em Peruíbe"
            className="w-full rounded-brand border border-brand-border"
            width={1200}
            height={630}
          />
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-brand-border/40">
          {[
            ['Papel', 'Site, marca e presença digital'],
            ['Formato', 'Negócio local · uma página'],
            ['Entrega', 'Site + Google + identidade'],
            ['Base', 'Peruíbe · SP'],
          ].map(([rotulo, valor]) => (
            <div key={rotulo}>
              <dt className="text-xs uppercase tracking-[0.14em] text-brand-muted mb-2">
                {rotulo}
              </dt>
              <dd className="text-sm font-medium leading-snug">{valor}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── problema ─────────────────────────────────── */}
      <section className="border-y border-brand-border/40 bg-brand-surface">
        <div className="max-w-container mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 md:gap-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Campeão no ringue,<br />
            <span className="text-brand-muted">invisível na busca</span>
          </h2>
          <div className="space-y-6 text-brand-muted leading-relaxed">
            <p>
              Mike White é professor de boxe e muay thai em Peruíbe: campeão do
              cinturão CBB, vice-campeão paulista, mais de 2 mil seguidores no
              Instagram. Mas quem procurasse “aula de boxe em Peruíbe” no Google
              não encontrava nada dele.
            </p>
            <p>
              Sem site, sem perfil no Maps, sem endereço digital próprio — todo
              o negócio dependia de quem já o conhecia.
            </p>
            <p className="text-brand-text font-medium">
              Pra quem vive de aluno novo,{' '}
              <span className="text-brand-primary">ser invisível na busca é
              deixar cliente na mesa todo dia.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── o conceito ───────────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 md:gap-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            A página se organiza<br />
            <span className="text-brand-muted">por lugar, não por serviço</span>
          </h2>
          <div className="space-y-6 text-brand-muted leading-relaxed">
            <p>
              A resposta óbvia seria uma página de serviços: boxe, muay thai,
              preços. A gente foi por outro caminho.
            </p>
            <p>
              O diferencial do Mike não é o que ele ensina — é onde: ele vai até
              o aluno. Casa, quadra, praia, academia. Então a página inteira se
              organiza por lugar, não por serviço:{' '}
              <span className="text-brand-text font-medium">“Treine onde você
              quiser”</span> é a promessa de abertura e a espinha do site.
            </p>
            <p>
              Quem chega entende em cinco segundos por que treinar com ele é
              diferente de se matricular numa academia.
            </p>
          </div>
        </div>
      </section>

      {/* ── o que foi construído ─────────────────────── */}
      <section className="border-y border-brand-border/40 bg-brand-surface">
        <div className="max-w-container mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
            O que foi construído
          </h2>
          <p className="text-brand-muted mb-14 max-w-[52ch]">
            Não só um site: um funil inteiro, da busca no Google ao “bora
            agendar a primeira aula” no WhatsApp.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONSTRUIDO.map(({ icone: Icone, titulo, texto }, i) => (
              <Reveal key={titulo} delay={(i % 3) * 100} className="h-full">
              <div
                className="h-full bg-brand-bg border border-brand-border rounded-brand p-7 hover:border-brand-primary/40 transition-colors"
              >
                <Icone
                  className="w-5 h-5 text-brand-primary mb-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="font-heading font-bold text-lg mb-3 leading-snug">
                  {titulo}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">{texto}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── o que já mudou ───────────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20 md:py-28">
        <Reveal>
        <div className="border-l-2 border-brand-primary pl-8 md:pl-10 max-w-[62ch]">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-5">
            O que já mudou
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Hoje, quem procura o Mike encontra: site com domínio próprio no ar,
            perfil no Google Maps com conversa de WhatsApp a um toque, avaliação
            real de aluno publicada. O funil inteiro — da busca ao “bora agendar
            a primeira aula” — existe e funciona.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="https://mwboxe.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-7 py-4 rounded-pill hover:brightness-110 transition"
            >
              Ver ao vivo: mwboxe.com.br
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm text-brand-muted leading-relaxed mt-6 max-w-[52ch]">
            Este case cresce junto com o negócio — números de alunos e agenda
            entram aqui conforme acontecem.
          </p>
        </div>
        </Reveal>
      </section>

      {/* ── cta ──────────────────────────────────────── */}
      <section className="border-t border-brand-border/40">
        <div className="max-w-container mx-auto px-6 py-20 md:py-28 text-center">
          <Reveal>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight mb-6 max-w-[20ch] mx-auto">
            Seu negócio precisa de algo assim?
          </h2>
          <p className="text-brand-muted max-w-[48ch] mx-auto mb-10 leading-relaxed">
            Para clínicas, escritórios e comércios da região, normalmente uma
            página só resolve — e custa bem menos. Site, marca e Google, no ar
            rápido.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/sites/"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-7 py-4 rounded-pill hover:brightness-110 transition"
            >
              Ver sites para negócios locais
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={ZAP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-brand-border text-brand-text font-semibold px-7 py-4 rounded-pill hover:bg-brand-surfaceHighlight transition"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-brand-border/40">
        <div className="max-w-container mx-auto px-6 py-8 flex flex-wrap gap-4 justify-between text-sm text-brand-muted">
          <span>© 2026 Kora</span>
          <a href="/" className="hover:text-brand-text transition-colors">
            kora-ia.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CasePage;
