import React from 'react';
import {
  MessageCircle,
  Check,
  X,
  Search,
  ArrowRight,
  ChevronDown,
  Heart,
  BarChart3,
} from 'lucide-react';
import { Reveal } from './fx';


const PRECO_SETUP = 'R$ 1.199';
const PRECO_PARCELA = '3x de R$ 399,90';
const PRECO_MENSAL = 'R$ 199';
const PRECO_ANUAL = 'R$ 1.990';

const ZAP = 'https://wa.me/5511998644004';
const ZAP_PRINCIPAL = `${ZAP}?text=${encodeURIComponent('Oi! Quero um site para o meu negócio.')}`;

const CtaWhats: React.FC<{ children: React.ReactNode; grande?: boolean }> = ({ children, grande }) => (
  <a
    href={ZAP_PRINCIPAL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
      grande ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'
    }`}
  >
    <MessageCircle size={grande ? 22 : 18} aria-hidden="true" />
    {children}
  </a>
);

const SitesPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-brand-bg text-brand-text antialiased">
      {/* Header */}
      <header className="border-b border-brand-border bg-brand-bg/90 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
            <img src="/kora-wordmark-branco.png" alt="KORA" className="h-5 w-auto" />
            <span className="hidden text-sm text-brand-muted sm:inline">para negócios locais</span>
          </a>
          <a
            href={ZAP_PRINCIPAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-4 py-2 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero — texto forte + site do Mike num frame de navegador + faixa de prova */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="mb-5 inline-block rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-semibold text-brand-primary">
              Sites para negócios locais · Litoral sul de SP
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight md:text-[3.4rem]">
              Seu cliente já está no Google.{' '}
              <span className="text-brand-primary">Falta o seu negócio estar lá.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-brand-muted">
              A gente monta a página do seu negócio — serviços, horário e um botão
              que cai direto no seu WhatsApp. Você só responde quem chega.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaWhats grande>Quero meu site</CtaWhats>
              <a
                href="#case"
                className="inline-flex items-center gap-1.5 px-2 py-3 font-semibold text-brand-text underline decoration-brand-primary decoration-2 underline-offset-4 transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Ver um site nosso no ar
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Site real do Mike num frame de navegador desktop */}
          <div>
            <a
              href="https://mwboxe.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o site do professor Mike White, no ar em mwboxe.com.br"
              className="group block overflow-hidden rounded-xl border border-brand-border shadow-2xl shadow-black/50 transition sm:hover:shadow-black/70"
            >
              <div className="flex items-center gap-1.5 border-b border-brand-border bg-brand-surfaceHighlight px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
                <span className="ml-2 flex-1 truncate rounded bg-brand-bg px-3 py-1 text-xs text-brand-muted">
                  mwboxe.com.br
                </span>
              </div>
              <img
                src="/mwboxe-screenshot.jpg"
                alt="Topo do site do professor Mike White, com o hero 'Treine onde você quiser'"
                className="w-full"
                width={1263}
                height={944}
              />
            </a>
            <p className="mt-3 text-center text-xs text-brand-muted">
              mwboxe.com.br — no ar, de verdade.
            </p>
          </div>
        </div>

        {/* Faixa de prova */}
        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brand-border bg-brand-border sm:grid-cols-3">
          {[
            ['1 página', 'direto no WhatsApp'],
            ['No ar em dias', 'não em meses'],
            ['R$ 199/mês', 'sem fidelidade'],
          ].map(([valor, rotulo]) => (
            <div key={valor} className="bg-brand-bg px-6 py-5">
              <dt className="font-display text-xl font-extrabold text-brand-text">{valor}</dt>
              <dd className="mt-0.5 text-sm text-brand-muted">{rotulo}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Como funciona — sequência real, então numeração faz sentido */}
      <section className="border-b border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Como funciona
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                titulo: 'Você chama no WhatsApp',
                texto: 'Manda o nome do seu negócio, os serviços, o horário e umas fotos. A gente cuida do resto.',
              },
              {
                titulo: 'A gente monta, você aprova',
                texto: 'Em poucos dias você recebe o site pronto pra ver no celular. Pediu ajuste? A gente ajusta.',
              },
              {
                titulo: 'Seu negócio no ar',
                texto: 'Publicamos no seu endereço e o botão de WhatsApp começa a trabalhar pra você.',
              },
            ].map(({ titulo, texto }, i) => (
              <li key={titulo}>
                <Reveal delay={i * 120} className="h-full">
                <div className="relative h-full rounded-2xl border border-brand-border bg-brand-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
                <span className="font-display text-4xl font-extrabold text-brand-primary/30">{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{titulo}</h3>
                <p className="mt-2 leading-relaxed text-brand-muted">{texto}</p>
                </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seção farol — o case real é a maior prova da página */}
      <section id="case" className="scroll-mt-20 border-t-2 border-brand-primary/60 border-b border-brand-border bg-brand-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:py-28 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <a
              href="https://mwboxe.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-3xl border border-brand-border shadow-xl shadow-black/30 transition sm:hover:shadow-2xl"
            >
              <img
                src="/mwboxe-screenshot.jpg"
                alt="Site do professor de boxe Mike White, no ar em mwboxe.com.br"
                className="w-full"
                width={1200}
                height={630}
              />
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-primary">
                Feito de verdade
              </p>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                O professor campeão que o Google não encontrava
              </h2>
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-brand-muted">
                Mike White é campeão de boxe com mais de 2 mil seguidores no
                Instagram — e até semana passada, invisível na busca. Hoje ele
                tem site em domínio próprio, perfil no Google Maps com WhatsApp
                a um toque e avaliação real de aluno publicada. Foi o primeiro
                site do nosso braço de negócios locais. O seu pode ser o
                próximo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/cases/mike-white/"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
                >
                  Ver o case completo
                </a>
                <a
                  href="https://mwboxe.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-6 py-3 font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
                >
                  Abrir o site ao vivo
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O que entra / o que não é */}
      <section className="border-t border-brand-border bg-brand-bg">
        <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          O que entra no seu site
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="space-y-4">
            {[
              'Nome, fotos e a cara do seu negócio',
              'Seus serviços, do jeito que você oferece',
              'Horário de atendimento e endereço',
              'Botão de WhatsApp em destaque, sempre à mão',
              'Funciona bem no celular — é onde seu cliente está',
              'Endereço próprio na internet (seu domínio)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-primary text-brand-text">
                  <Check size={14} aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-brand-text">{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
            <h3 className="font-display text-lg font-bold">Pra ser honesto: o que não é</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Não é sistema de agendamento',
                'Não é loja virtual nem catálogo de produtos',
                'Não tem cadastro, login ou pagamento',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-surfaceHighlight text-brand-muted">
                    <X size={14} aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed text-brand-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              É uma página só, feita pra apresentar o negócio e trazer cliente pro seu
              WhatsApp. Simples de propósito — e por isso cabe no bolso.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* SEO — aparecer no Google */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-primary">
            Feito pra aparecer no Google
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Seu cliente digita o que precisa. Quem ele encontra?
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-brand-muted">
            A maioria dos sites baratos é bonita só por fora: o Google não
            entende o que tem dentro, e a página nunca aparece pra ninguém. O
            seu já sai montado pra busca — é isso que transforma site em
            cliente.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              'Título e descrição escritos com as palavras que seu cliente procura, com o nome da sua cidade',
              'Página leve e rápida — o Google prioriza site que abre na hora, ainda mais no celular',
              'Estrutura que o Google lê: endereço, horário e serviços marcados do jeito que o buscador entende',
              'Pronto pra ligar no seu Perfil da Empresa no Google, o mapinha que aparece nas buscas da região',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-primary text-brand-text">
                  <Check size={14} aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-brand-text">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Mock de resultado de busca */}
        <Reveal delay={150} className="select-none">
        <div aria-hidden="true">
          <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-xl shadow-black/20 md:p-8">
            <p className="mb-4 text-center font-sans text-3xl font-medium tracking-tight">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </p>
            <div className="flex items-center gap-3 rounded-full border border-stone-200 px-5 py-3 shadow-sm">
              <Search size={18} className="flex-none text-stone-400" />
              <span className="truncate text-stone-700">aula de boxe em peruíbe</span>
            </div>
            <div className="mt-6 rounded-2xl border-2 border-brand-primary bg-brand-primary/5 p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white">
                  MW
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-stone-700">Mike White — Professor de Boxe</p>
                  <p className="truncate text-[11px] text-stone-500">mwboxe.com.br</p>
                </div>
              </div>
              <p className="mt-2 font-semibold text-brand-primary">
                Aula de Boxe e Muay Thai em Peruíbe | Prof. Mike White
              </p>
              <p className="mt-1 text-sm leading-snug text-stone-600">
                Aulas de boxe e muay thai em Peruíbe: turmas infantil e adulto,
                atendimento a domicílio e primeira aula grátis.
              </p>
            </div>
            <div className="mt-4 space-y-3 px-1 opacity-50">
              <div className="h-3 w-3/4 rounded-full bg-stone-200" />
              <div className="h-3 w-2/3 rounded-full bg-stone-200" />
              <div className="h-3 w-4/5 rounded-full bg-stone-200" />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-brand-muted">Simulação ilustrativa de resultado de busca</p>
        </div>
        </Reveal>
      </section>

      {/* Seção demo — test-drive, cartão discreto (sem celular) */}
      <section className="border-b border-brand-border">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-2xl border border-brand-border bg-brand-surface p-8 sm:flex-row sm:items-center sm:justify-between md:p-10">
              <div className="max-w-[62ch]">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Experimente por dentro
                </p>
                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight">
                  Quer ver como ficaria pro seu negócio?
                </h2>
                <p className="mt-3 leading-relaxed text-brand-muted">
                  Montamos uma clínica veterinária de exemplo — a Maré Mansa —
                  pra você navegar à vontade: serviços, horários e o botão de
                  WhatsApp sempre à mão. É fictícia, e é exatamente o padrão do
                  que entregamos.
                </p>
              </div>
              <a
                href="/sites/demo/"
                className="inline-flex flex-none items-center gap-2 self-start rounded-full bg-brand-primary px-6 py-3 font-semibold text-white transition hover:brightness-110 active:scale-[0.98] sm:self-auto"
              >
                Abrir a demo
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Preço */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-brand-primary bg-brand-surface p-8 text-center md:p-12 shadow-xl shadow-black/20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">Quanto custa</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="font-display text-5xl font-extrabold text-brand-primary">{PRECO_SETUP}</p>
              <p className="mt-1 font-semibold text-brand-muted">uma vez, pra montar</p>
              <p className="mt-0.5 text-sm text-brand-muted">ou {PRECO_PARCELA}</p>
            </div>
            <div className="hidden h-16 w-px bg-brand-surfaceHighlight sm:block" aria-hidden="true" />
            <div>
              <p className="font-display text-5xl font-extrabold text-brand-primary">
                {PRECO_MENSAL}
                <span className="text-2xl font-bold text-brand-muted">/mês</span>
              </p>
              <p className="mt-1 font-semibold text-brand-muted">pra manter no ar</p>
              <p className="mt-0.5 text-sm text-brand-muted">ou {PRECO_ANUAL} no ano</p>
            </div>
          </div>
          {/* A mensalidade é descrita como SERVIÇO, não como infraestrutura.
              "Hospedagem e manutenção" soa custo, e custo o cliente sempre acha
              que dá pra baratear. "Você me chama e eu ajusto" é relação — e é
              o que o dono de clínica de bairro realmente quer comprar. */}
          <p className="mx-auto mt-6 max-w-[48ch] leading-relaxed text-brand-muted">
            Mudou o horário? Entrou um serviço novo? Você me chama no WhatsApp e eu
            ajusto. Uma vez por ano eu reviso tudo pra manter atualizado.
          </p>

          <div className="mx-auto mt-7 max-w-[44ch] space-y-2.5 rounded-2xl bg-brand-bg p-5 text-[15px] text-brand-muted">
            <p>
              <span className="font-semibold text-brand-text">À vista ou parcelado.</span>{' '}
              {PRECO_SETUP} ou {PRECO_PARCELA} no cartão.
            </p>
            <p>
              <span className="font-semibold text-brand-text">No plano anual,</span>{' '}
              {PRECO_ANUAL} no ano — dois meses grátis.
            </p>
            <p>
              <span className="font-semibold text-brand-text">Sem fidelidade.</span>{' '}
              Pode sair quando quiser, o site é seu.
            </p>
          </div>
          <div className="mt-8">
            <CtaWhats grande>Combinar pelo WhatsApp</CtaWhats>
          </div>
        </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-t border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Perguntas comuns
          </h2>
          <div className="mt-8 divide-y divide-brand-border">
            {[
              {
                p: 'Em quanto tempo fica pronto?',
                r: 'Com as informações e fotos em mãos, em poucos dias você recebe a primeira versão pra aprovar.',
              },
              {
                p: 'Preciso entender de tecnologia?',
                r: 'Não. Você só manda as informações pelo WhatsApp e aprova o resultado. Tudo que é técnico é com a gente.',
              },
              {
                p: 'E se eu quiser mudar algo depois?',
                r: 'Ajustes simples — trocar horário, foto, serviço — estão dentro da mensalidade. É só pedir.',
              },
              {
                p: 'Serve pra clínica veterinária?',
                r: 'Serve — inclusive montamos uma demo de clínica pra você navegar (a Maré Mansa, logo acima). E serve pra qualquer negócio local que viva de ser encontrado: professor, salão, oficina, restaurante. Se o seu cliente te procura no Google e no WhatsApp, é pra você.',
              },
            ].map(({ p, r }) => (
              <details key={p} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {p}
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="flex-none text-brand-primary transition-transform group-open:rotate-180"
                  />
                </summary>
                {/* Truque do grid-rows: <details> não anima height (0 -> auto),
                    mas grid-template-rows 0fr -> 1fr anima. Semântica nativa
                    preservada: leitor de tela, Ctrl+F e teclado seguem OK. */}
                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
                  <p className="min-h-0 overflow-hidden pt-3 leading-relaxed text-brand-muted">{r}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Outros trabalhos — dá visibilidade sem competir com o case principal */}
      <section className="border-t border-brand-border bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-primary">
              Outros trabalhos
            </p>
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              A gente também vai além de uma página
            </h2>
            <p className="mt-3 max-w-[56ch] leading-relaxed text-brand-muted">
              Quando o negócio precisa de mais que um site, a KORA constrói —
              de plataforma pra ONG a produto de software próprio.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                titulo: 'Entre Patas',
                categoria: 'Plataforma · ONG animal',
                texto: 'Site público e painel de gestão pra uma ONG de proteção animal atualizar tudo sozinha, sem depender de desenvolvedor.',
                href: '/cases/entre-patas/',
                icone: Heart,
              },
              {
                titulo: 'Agilímetro',
                categoria: 'Produto próprio · SaaS',
                texto: 'Software de métricas de engenharia que integra com o Jira: DORA, visão executiva e mapa de OKRs.',
                href: '/cases/agilimetro/',
                icone: BarChart3,
              },
            ].map(({ titulo, categoria, texto, href, icone: Icone }) => (
              <Reveal key={titulo} className="h-full">
                <a
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-brand-border bg-brand-bg p-7 transition-colors hover:border-brand-primary/50"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icone size={22} aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-primary">
                    {categoria}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold">{titulo}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-brand-muted">{texto}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-muted transition-colors group-hover:text-brand-primary">
                    Ver o case
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quem faz — KORA assina embaixo */}
      <footer className="bg-brand-surface text-brand-muted">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <img src="/kora-wordmark-branco.png" alt="KORA" className="h-6 w-auto mb-5" />
              <p className="font-display text-2xl font-bold text-brand-text">Feito pela KORA</p>
              <p className="mt-2 leading-relaxed text-brand-muted">
                Consultoria de inteligência de negócios, com experiência do time em
                empresas como Magalu, Samsung e Brasilprev. O mesmo cuidado dos projetos
                grandes, no tamanho do seu negócio.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <CtaWhats>Falar com a KORA</CtaWhats>
              <a
                href="/cases/entre-patas/"
                className="px-2 text-sm text-brand-muted underline underline-offset-4 transition-colors hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Veja um projeto completo que fizemos
              </a>
              <a
                href="/"
                className="px-2 text-sm text-brand-muted underline underline-offset-4 transition-colors hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Conhecer a KORA completa
              </a>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-xs text-brand-muted">
            © {new Date().getFullYear()} Kora AI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SitesPage;
