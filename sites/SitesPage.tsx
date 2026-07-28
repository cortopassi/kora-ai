import React from 'react';
import {
  MessageCircle,
  Check,
  X,
  Search,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Reveal } from './fx';


const PRECO_SETUP = 'R$ 1.199';
const PRECO_MENSAL = 'R$ 199';

const ZAP = 'https://wa.me/5511998644004';
const ZAP_PRINCIPAL = `${ZAP}?text=${encodeURIComponent('Oi! Quero um site para a minha clínica.')}`;

const CtaWhats: React.FC<{ children: React.ReactNode; grande?: boolean }> = ({ children, grande }) => (
  <a
    href={ZAP_PRINCIPAL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 font-semibold text-white transition-all hover:bg-teal-800 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
      grande ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'
    }`}
  >
    <MessageCircle size={grande ? 22 : 18} aria-hidden="true" />
    {children}
  </a>
);

const SitesPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-stone-50 text-stone-900 antialiased">
      {/* Header */}
      <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
            <span className="font-display text-xl font-bold tracking-tight">KORA</span>
            <span className="hidden text-sm text-stone-500 sm:inline">para negócios locais</span>
          </a>
          <a
            href={ZAP_PRINCIPAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero — split: texto à esquerda, celular com a demo à direita */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-10 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-4 inline-block rounded-full bg-teal-700/10 px-4 py-1.5 text-sm font-semibold text-teal-800">
            Sites para negócios locais
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Quando alguém procura veterinário na sua cidade, sua clínica aparece?
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-stone-600">
            A gente monta o site da sua clínica: uma página simples e bonita, com seus
            serviços, horários, endereço e um botão que cai direto no seu WhatsApp.
            Você não mexe em nada — só responde as mensagens que chegarem.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaWhats grande>Quero meu site</CtaWhats>
            <a
              href="/sites/demo/"
              className="inline-flex items-center gap-1.5 px-2 py-3 font-semibold text-stone-700 underline decoration-teal-700 decoration-2 underline-offset-4 transition-colors hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Ver um exemplo pronto
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Celular com a demo real rodando dentro */}
        <div className="flex justify-center lg:justify-end">
          <a
            href="/sites/demo/"
            aria-label="Abrir o site de exemplo da Clínica Maré Mansa"
            className="group relative block animate-float pb-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            style={{ animationDuration: '7s' }}
          >
            <div className="w-[290px] rounded-[44px] border-[10px] border-stone-900 bg-stone-900 shadow-2xl shadow-teal-900/25 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="relative h-[585px] w-[270px] overflow-hidden rounded-[34px] bg-white">
                <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-stone-900" aria-hidden="true" />
                <iframe
                  src="/sites/demo/"
                  title="Prévia do site de exemplo"
                  loading="lazy"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="pointer-events-none origin-top-left"
                  style={{ width: '390px', height: '845px', transform: 'scale(0.6923)' }}
                />
              </div>
            </div>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-stone-900 px-4 py-1.5 text-xs font-semibold text-white">
              Toque para ver o exemplo
            </span>
          </a>
        </div>
      </section>

      {/* Por que ter um site */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
          {[
            {
              icone: Search,
              titulo: 'Ser encontrado',
              texto: 'Quem precisa de veterinário procura no Google. Seu site já sai montado pra essa busca — a gente mostra como logo abaixo.',
            },
            {
              icone: ShieldCheck,
              titulo: 'Passar confiança',
              texto: 'Um site bem feito mostra que a clínica é séria — antes mesmo do primeiro "oi" no WhatsApp.',
            },
            {
              icone: Smartphone,
              titulo: 'Cliente no seu WhatsApp',
              texto: 'Nada de formulário ou e-mail. A pessoa toca num botão e a conversa já começa no seu celular.',
            },
          ].map(({ icone: Icone, titulo, texto }, i) => (
            <Reveal key={titulo} delay={i * 120}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-800">
                <Icone size={24} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-bold">{titulo}</h2>
              <p className="mt-2 leading-relaxed text-stone-600">{texto}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEO — aparecer no Google */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-700">
            Feito pra aparecer no Google
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Seu cliente digita "veterinário em Peruíbe". Quem ele encontra?
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-stone-600">
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
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-700 text-white">
                  <Check size={14} aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Mock de resultado de busca */}
        <Reveal delay={150} className="select-none">
        <div aria-hidden="true">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-teal-900/5 md:p-8">
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
              <span className="truncate text-stone-700">veterinário em peruíbe</span>
            </div>
            <div className="mt-6 rounded-2xl border-2 border-teal-700 bg-teal-700/5 p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-[10px] font-bold text-white">
                  MM
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-stone-700">Clínica Maré Mansa</p>
                  <p className="truncate text-[11px] text-stone-400">maremansa.com.br</p>
                </div>
              </div>
              <p className="mt-2 font-semibold text-teal-900">
                Clínica Veterinária em Peruíbe | Maré Mansa
              </p>
              <p className="mt-1 text-sm leading-snug text-stone-600">
                Consultas, vacinas, banho e tosa com hora marcada. Atendemos
                Peruíbe e região. Fale agora pelo WhatsApp.
              </p>
            </div>
            <div className="mt-4 space-y-3 px-1 opacity-50">
              <div className="h-3 w-3/4 rounded-full bg-stone-200" />
              <div className="h-3 w-2/3 rounded-full bg-stone-200" />
              <div className="h-3 w-4/5 rounded-full bg-stone-200" />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-stone-400">Simulação ilustrativa de resultado de busca</p>
        </div>
        </Reveal>
      </section>

      {/* O que entra / o que não é */}
      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          O que entra no seu site
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="space-y-4">
            {[
              'Nome, fotos e a cara da sua clínica',
              'Seus serviços, do jeito que você oferece',
              'Horário de atendimento e endereço',
              'Botão de WhatsApp em destaque, sempre à mão',
              'Funciona bem no celular — é onde seu cliente está',
              'Endereço próprio na internet (seu domínio)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-700 text-white">
                  <Check size={14} aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-display text-lg font-bold">Pra ser honesto: o que não é</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Não é sistema de agendamento',
                'Não é loja virtual nem catálogo de produtos',
                'Não tem cadastro, login ou pagamento',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-stone-200 text-stone-500">
                    <X size={14} aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed text-stone-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              É uma página só, feita pra apresentar a clínica e trazer cliente pro seu
              WhatsApp. Simples de propósito — e por isso cabe no bolso.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Como funciona — sequência real, então numeração faz sentido */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Como funciona
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                titulo: 'Você chama no WhatsApp',
                texto: 'Manda o nome da clínica, os serviços, o horário e umas fotos. A gente cuida do resto.',
              },
              {
                titulo: 'A gente monta, você aprova',
                texto: 'Em poucos dias você recebe o site pronto pra ver no celular. Pediu ajuste? A gente ajusta.',
              },
              {
                titulo: 'Sua clínica no ar',
                texto: 'Publicamos no seu endereço e o botão de WhatsApp começa a trabalhar pra você.',
              },
            ].map(({ titulo, texto }, i) => (
              <li key={titulo}>
                <Reveal delay={i * 120} className="h-full">
                <div className="relative h-full rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/5">
                <span className="font-display text-4xl font-extrabold text-teal-700/30">{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{titulo}</h3>
                <p className="mt-2 leading-relaxed text-stone-600">{texto}</p>
                </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preço */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-teal-700 bg-white p-8 text-center md:p-12 shadow-xl shadow-teal-900/5">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">Quanto custa</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="font-display text-5xl font-extrabold text-teal-800">{PRECO_SETUP}</p>
              <p className="mt-1 font-semibold text-stone-600">uma vez, pra montar</p>
            </div>
            <div className="hidden h-16 w-px bg-stone-200 sm:block" aria-hidden="true" />
            <div>
              <p className="font-display text-5xl font-extrabold text-teal-800">
                {PRECO_MENSAL}
                <span className="text-2xl font-bold text-stone-500">/mês</span>
              </p>
              <p className="mt-1 font-semibold text-stone-600">pra manter no ar</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-[46ch] leading-relaxed text-stone-600">
            A mensalidade cobre o endereço na internet, a hospedagem e pequenos ajustes
            quando você precisar. Sem letra miúda, sem fidelidade.
          </p>
          <div className="mt-8">
            <CtaWhats grande>Combinar pelo WhatsApp</CtaWhats>
          </div>
        </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Perguntas comuns
          </h2>
          <div className="mt-8 divide-y divide-stone-200">
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
                p: 'Serve pra outros negócios além de clínica veterinária?',
                r: 'Serve. Começamos por clínicas veterinárias da região, mas o formato funciona pra qualquer negócio local.',
              },
            ].map(({ p, r }) => (
              <details key={p} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {p}
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="flex-none text-teal-700 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-stone-600">{r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quem faz — KORA assina embaixo */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="font-display text-2xl font-bold text-white">Feito pela KORA</p>
              <p className="mt-2 leading-relaxed text-stone-400">
                Consultoria de inteligência de negócios, com experiência do time em
                empresas como Magalu, Samsung e Brasilprev. O mesmo cuidado dos projetos
                grandes, no tamanho do seu negócio.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <CtaWhats>Falar com a KORA</CtaWhats>
              <a
                href="/cases/entre-patas/"
                className="px-2 text-sm text-stone-400 underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Veja um projeto completo que fizemos
              </a>
              <a
                href="/"
                className="px-2 text-sm text-stone-400 underline underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                Conhecer a KORA completa
              </a>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-xs text-stone-500">
            © {new Date().getFullYear()} Kora AI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SitesPage;
