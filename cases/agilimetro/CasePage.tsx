import React from 'react';
import {
  ArrowUpRight,
  ArrowLeft,
  MessageCircle,
  GitMerge,
  Gauge,
  LayoutDashboard,
  ClipboardCheck,
  Radar,
  Target,
} from 'lucide-react';
import { Reveal, Tilt } from '../../sites/fx';

/**
 * Case de produto próprio: o Agilímetro (agilimetro.com).
 * Regras combinadas: capacidades do produto podem ser citadas;
 * clientes e números NÃO aparecem, mesmo os que existem.
 */

const ZAP = `https://wa.me/5511998644004?text=${encodeURIComponent(
  'Oi! Vi o case do Agilímetro e quero conversar sobre produto.'
)}`;

const CONSTRUIDO = [
  {
    icone: GitMerge,
    titulo: 'Integração profunda com Jira',
    texto:
      'Os dados nascem onde o time já trabalha. O Agilímetro se conecta ao Jira e transforma o que está espalhado em tickets numa leitura organizada — sem planilha paralela, sem digitação dupla.',
  },
  {
    icone: Gauge,
    titulo: 'Métricas DORA na prática',
    texto:
      'Frequência de deploy, lead time, taxa de falha e tempo de recuperação — o padrão da indústria para medir engenharia, traduzido para quem decide, não só para quem programa.',
  },
  {
    icone: LayoutDashboard,
    titulo: 'Visão Executiva',
    texto:
      'A pergunta que diretoria faz — "como está a tecnologia?" — respondida numa tela, em linguagem de negócio. Sem exigir que o executivo aprenda jargão de engenharia para entender a própria operação.',
  },
  {
    icone: ClipboardCheck,
    titulo: 'Sprint Review estruturada',
    texto:
      'O rito de revisão deixa de depender da memória e do improviso: o que foi planejado, o que foi entregue e o que mudou no caminho, documentado a cada ciclo.',
  },
  {
    icone: Radar,
    titulo: 'Radar de saúde dos times',
    texto:
      'Sinais de sobrecarga, gargalo e desvio aparecendo antes de virarem crise — governança que antecipa, em vez de relatório que lamenta.',
  },
  {
    icone: Target,
    titulo: 'Mapa de OKRs',
    texto:
      'O elo que costuma faltar: a entrega da engenharia conectada aos objetivos da empresa, para priorização deixar de ser disputa e virar critério.',
  },
];

const CaseAgilimetro: React.FC = () => {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen font-sans">
      {/* Topo */}
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
            href="https://agilimetro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text border border-brand-border px-4 py-2 rounded-pill hover:bg-brand-surfaceHighlight active:scale-[0.98] transition"
          >
            agilimetro.com
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-container mx-auto px-6 pt-20 pb-16 md:pt-28">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary mb-8 animate-fade-in">
          Case Kora · Produto próprio
        </p>
        <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-[19ch] mb-8 animate-slide-up">
          Agilímetro: engenharia medida em linguagem de negócio
        </h1>
        <p
          className="text-lg md:text-xl text-brand-muted max-w-[60ch] leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          Um SaaS de métricas de engenharia e governança que a Kora concebeu, construiu e
          opera. Não é um projeto de vitrine: é produto vivo, em operação no mercado, integrado
          ao Jira e evoluindo em ciclos contínuos — a nossa própria tese de trabalho,
          aplicada em nós mesmos.
        </p>
      </section>

      {/* O problema */}
      <section className="border-y border-brand-border/40 bg-brand-surface">
        <div className="max-w-container mx-auto px-6 py-20">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-12">
              O problema que ele ataca
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titulo: 'Tecnologia como caixa-preta',
                texto:
                  'A engenharia consome parte relevante do orçamento, mas a liderança enxerga só o que atravessa a fronteira: prazo cumprido ou estourado. O meio do caminho é invisível.',
              },
              {
                titulo: 'Dado preso no Jira',
                texto:
                  'Tudo que aconteceu está registrado em tickets — e é exatamente por isso que ninguém consegue ler. Volume sem síntese não é informação, é ruído.',
              },
              {
                titulo: 'Conversa sem chão comum',
                texto:
                  'O time fala de story points, a diretoria fala de resultado, e a reunião entre os dois vira tradução simultânea malfeita. Cada lado sai achando que o outro não entende.',
              },
            ].map((dor, i) => (
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

      {/* O que foi construído */}
      <section className="max-w-container mx-auto px-6 py-20">
        <Reveal>
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-12">
            O que o produto faz
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSTRUIDO.map(({ icone: Icone, titulo, texto }, i) => (
            <Reveal key={titulo} delay={(i % 3) * 100} className="h-full">
              <Tilt className="h-full">
                <div className="h-full bg-brand-surface border border-brand-border rounded-brand p-7 hover:border-brand-primary/40 transition-colors">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary mb-5">
                    <Icone size={19} aria-hidden="true" />
                  </span>
                  <h3 className="font-heading font-bold text-lg mb-3 leading-snug">{titulo}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{texto}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Por que isso importa pra quem contrata a Kora */}
      <section className="border-t border-brand-border/40 bg-brand-surface">
        <div className="max-w-container mx-auto px-6 py-20">
          <Reveal>
            <div className="border-l-2 border-brand-primary pl-8 md:pl-10 max-w-[64ch]">
              <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-tight mb-6">
                Por que um produto próprio prova a consultoria
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                O Agilímetro é as três frentes da Kora dentro de um único produto: gestão
                de produto de ponta a ponta (do discovery ao roadmap vivo), engenharia de
                software com integrações de verdade, e dados transformados em decisão
                executiva.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Quando dizemos a um cliente como se constrói, se mede e se opera um produto
                digital, não é teoria de slide — é a rotina que praticamos no nosso. Quem
                opera o próprio SaaS entende o seu de um jeito que consultoria de
                prateleira não alcança.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-border/40">
        <div className="max-w-container mx-auto px-6 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight leading-tight mb-6 max-w-[22ch] mx-auto">
              Quer construir (ou destravar) o seu produto?
            </h2>
            <p className="text-brand-muted max-w-[46ch] mx-auto mb-10 leading-relaxed">
              A mesma cabeça que concebeu e opera o Agilímetro pode olhar para o seu
              cenário. Primeira conversa sem compromisso.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={ZAP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-7 py-4 rounded-pill hover:brightness-110 active:scale-[0.98] transition"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <a
                href="https://agilimetro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-brand-border text-brand-text font-semibold px-7 py-4 rounded-pill hover:bg-brand-surfaceHighlight active:scale-[0.98] transition"
              >
                Conhecer o Agilímetro
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

export default CaseAgilimetro;
