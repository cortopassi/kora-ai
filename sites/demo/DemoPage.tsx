import React from 'react';
import {
  MessageCircle,
  Clock,
  MapPin,
  PawPrint,
  Syringe,
  Scissors,
  Stethoscope,
  HeartHandshake,
  CalendarCheck,
  Waves,
  Quote,
} from 'lucide-react';
import { Reveal, useParallax } from '../fx';

/**
 * SITE DE EXEMPLO — clínica fictícia usada como demonstração do produto
 * vendido em /sites. Nome, endereço, horários e depoimento são
 * ilustrativos. O botão de WhatsApp aponta para a KORA de propósito.
 *
 * Fotos: Unsplash (licença livre para uso comercial, sem atribuição).
 * Para independência total do CDN deles, baixar estes mesmos arquivos
 * para public/sites/ e trocar as URLs abaixo por caminhos locais.
 */
const foto = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?fm=jpg&q=75&w=${w}&auto=format&fit=crop`;

const FOTOS = {
  hero: foto('photo-1654895716780-b4664497420d', 1400),
  sobre: foto('photo-1644675272883-0c4d582528d8', 900),
  consulta: foto('photo-1770836037793-95bdbf190f71', 800),
  vacina: foto('photo-1770836037275-38b44e4b101f', 800),
  banho: foto('photo-1553688738-a278b9f063e0', 800),
  exames: foto('photo-1770836037816-4445dbd449fd', 800),
  ctaFinal: foto('photo-1621371236495-1520d8dc72a5', 1400),
};

const ZAP_DEMO = `https://wa.me/5511998644004?text=${encodeURIComponent(
  'Oi! Vi o site de exemplo da clínica e quero um igual pro meu negócio.'
)}`;

const BotaoZap: React.FC<{ children: React.ReactNode; claro?: boolean }> = ({ children, claro }) => (
  <a
    href={ZAP_DEMO}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
      claro
        ? 'bg-white text-emerald-900 hover:bg-emerald-50 focus-visible:outline-white'
        : 'bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:outline-emerald-700'
    }`}
  >
    <MessageCircle size={20} aria-hidden="true" />
    {children}
  </a>
);

const DemoPage: React.FC = () => {
  const heroRef = useParallax<HTMLImageElement>(0.16);
  const ctaRef = useParallax<HTMLImageElement>(0.14);
  return (
    <div className="min-h-[100dvh] bg-white text-stone-900 antialiased">
      {/* Faixa de exemplo — sempre visível */}
      <a
        href="/sites/"
        className="block bg-stone-900 px-4 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-stone-800"
      >
        Site de exemplo criado pela KORA — toque aqui pra ter um igual
      </a>

      {/* Nav da clínica */}
      <nav className="border-b border-stone-100 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
          <span className="flex items-center gap-2 font-serifdemo text-lg font-bold text-emerald-900">
            <PawPrint size={20} className="text-emerald-700" aria-hidden="true" />
            Maré Mansa
          </span>
          <a
            href={ZAP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
          >
            <MessageCircle size={15} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero com foto */}
      <header className="relative overflow-hidden">
        <div className="h-[440px] w-full md:h-[520px]">
          <img
            ref={heroRef}
            src={FOTOS.hero}
            alt="Veterinária segurando um cachorro no colo com carinho"
            width={1400}
            height={900}
            fetchPriority="high"
            className="h-full w-full object-cover will-change-transform"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-emerald-950/10" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-4xl px-5 pb-10 md:pb-14">
            <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              Peruíbe e região, desde 2015
            </p>
            <h1 className="font-serifdemo text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Cuidado de verdade
              <br />
              pra quem você ama
            </h1>
            <p className="mt-3 max-w-[46ch] text-lg leading-relaxed text-emerald-50">
              Consultas, vacinas, banho e tosa — com hora marcada e sem estresse,
              pertinho da sua casa.
            </p>
            <div className="mt-6">
              <BotaoZap claro>Agendar pelo WhatsApp</BotaoZap>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre */}
      <section className="mx-auto grid max-w-4xl items-center gap-8 px-5 py-16 md:grid-cols-2 md:gap-12">
        <Reveal>
        <img
          src={FOTOS.sobre}
          alt="Veterinário ao lado de um cachorro na clínica"
          width={900}
          height={1100}
          loading="lazy"
          className="h-[340px] w-full rounded-3xl object-cover md:h-[420px]"
        />
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Nossa clínica</p>
          <h2 className="mt-2 font-serifdemo text-3xl font-bold text-emerald-950">
            Aqui seu pet é recebido pelo nome
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            A Maré Mansa nasceu do sonho de cuidar dos bichos do litoral com a
            calma que eles merecem. Nada de sala cheia e espera sem fim: cada
            atendimento tem hora marcada, e a gente conhece cada paciente pelo
            nome — e pelas manias.
          </p>
          <p className="mt-3 leading-relaxed text-stone-600">
            Do filhote na primeira vacina ao idoso que precisa de atenção
            especial, o combinado é o mesmo: explicar tudo com clareza, sem
            pressa e sem empurrar nada que seu pet não precisa.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              { icone: CalendarCheck, texto: 'Atendimento com hora marcada' },
              { icone: HeartHandshake, texto: 'Preço justo, explicado antes' },
              { icone: Waves, texto: 'No coração de Peruíbe, perto da praia' },
            ].map(({ icone: Icone, texto }) => (
              <li key={texto} className="flex items-center gap-3 font-medium text-stone-700">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-emerald-700/10 text-emerald-800">
                  <Icone size={18} aria-hidden="true" />
                </span>
                {texto}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Serviços com fotos */}
      <section className="bg-emerald-950 py-16">
        <div className="mx-auto max-w-4xl px-5">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">Serviços</p>
          <h2 className="mt-2 font-serifdemo text-3xl font-bold text-white">
            Tudo que seu pet precisa, num lugar só
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                img: FOTOS.consulta,
                alt: 'Veterinário examinando um dachshund',
                icone: Stethoscope,
                nome: 'Consultas',
                desc: 'Atendimento clínico geral, do check-up de rotina àquela dúvida que não pode esperar.',
              },
              {
                img: FOTOS.vacina,
                alt: 'Veterinário aplicando vacina em um cachorro pequeno',
                icone: Syringe,
                nome: 'Vacinas',
                desc: 'Calendário completo pra cães e gatos, com lembrete no seu WhatsApp quando chegar a hora.',
              },
              {
                img: FOTOS.banho,
                alt: 'Filhote de cachorro limpo e enrolado numa toalha',
                icone: Scissors,
                nome: 'Banho e tosa',
                desc: 'Com hora marcada e sem gaiola de espera. Seu pet volta cheiroso e tranquilo.',
              },
              {
                img: FOTOS.exames,
                alt: 'Veterinário examinando os dentes de um dachshund',
                icone: PawPrint,
                nome: 'Exames',
                desc: 'Coleta na própria clínica e resultado rápido, explicado numa linguagem que você entende.',
              },
            ].map(({ img, alt, icone: Icone, nome, desc }, i) => (
              <Reveal key={nome} delay={i * 100} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/40">
                <div className="h-44 overflow-hidden">
                  <img src={img} alt={alt} width={800} height={520} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="flex items-center gap-2 font-serifdemo text-xl font-bold text-emerald-950">
                    <Icone size={20} className="text-emerald-700" aria-hidden="true" />
                    {nome}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{desc}</p>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <Reveal>
        <figure className="rounded-3xl border border-emerald-900/10 bg-emerald-50/60 p-8 md:p-10">
          <Quote size={32} className="text-emerald-700/40" aria-hidden="true" />
          <blockquote className="mt-4 font-serifdemo text-2xl font-semibold leading-snug text-emerald-950 md:text-3xl">
            "A Nina tremia só de ouvir a palavra veterinário. Hoje ela entra na
            Maré Mansa abanando o rabo. Isso diz tudo."
          </blockquote>
          <figcaption className="mt-5 font-semibold text-stone-600">
            Tutora da Nina, vira-lata caramelo
            <span className="ml-2 text-sm font-normal text-stone-400">(depoimento ilustrativo)</span>
          </figcaption>
        </figure>
        </Reveal>
      </section>

      {/* Horário e endereço */}
      <section className="border-y border-stone-100 bg-stone-50">
        <div className="mx-auto grid max-w-4xl gap-8 px-5 py-14 sm:grid-cols-2">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-emerald-700 text-white">
              <Clock size={22} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-serifdemo text-lg font-bold text-emerald-950">Horário de atendimento</h2>
              <p className="mt-1 leading-relaxed text-stone-600">
                Segunda a sexta, 8h às 18h
                <br />
                Sábado, 8h às 13h
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-emerald-700 text-white">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-serifdemo text-lg font-bold text-emerald-950">Onde estamos</h2>
              <p className="mt-1 leading-relaxed text-stone-600">
                Av. Beira-Mar, 123 — Centro
                <br />
                Peruíbe/SP <span className="text-stone-400">(endereço ilustrativo)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final com foto */}
      <section className="relative overflow-hidden">
        <div className="h-[340px] w-full">
          <img
            ref={ctaRef}
            src={FOTOS.ctaFinal}
            alt="Cachorro feliz na grama"
            width={1400}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover will-change-transform"
          />
        </div>
        <div className="absolute inset-0 bg-emerald-950/70" />
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <div>
            <h2 className="font-serifdemo text-3xl font-bold text-white md:text-4xl">
              Seu pet merece esse cuidado
            </h2>
            <p className="mx-auto mt-2 max-w-[42ch] leading-relaxed text-emerald-50">
              Chama no WhatsApp que a gente combina o melhor horário pra vocês.
            </p>
            <div className="mt-6">
              <BotaoZap claro>Chamar agora</BotaoZap>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-6 text-center text-xs text-stone-500">
        Clínica fictícia, criada como demonstração — nomes, dados e depoimento são ilustrativos ·{' '}
        <a href="/sites/" className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900">
          Quero um site assim
        </a>
      </footer>
    </div>
  );
};

export default DemoPage;
