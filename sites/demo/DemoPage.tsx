import React from 'react';
import { MessageCircle, Clock, MapPin, PawPrint, Syringe, Scissors, Stethoscope } from 'lucide-react';

/**
 * SITE DE EXEMPLO — clínica fictícia usada como demonstração do produto
 * vendido em /sites. Tudo aqui é ilustrativo: nome, endereço e horários.
 * O botão de WhatsApp aponta para a KORA de propósito.
 */
const ZAP_DEMO = `https://wa.me/5511998644004?text=${encodeURIComponent(
  'Oi! Vi o site de exemplo da clínica e quero um igual pro meu negócio.'
)}`;

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-amber-50/60 text-stone-900 antialiased">
      {/* Faixa de exemplo — sempre visível */}
      <a
        href="/sites/"
        className="block bg-stone-900 px-4 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-stone-800"
      >
        Site de exemplo criado pela KORA — toque aqui pra ter um igual
      </a>

      {/* Hero */}
      <header className="border-b border-emerald-900/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-10 text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-white">
            <PawPrint size={28} aria-hidden="true" />
          </div>
          <h1 className="font-serifdemo text-4xl font-bold tracking-tight text-emerald-950 md:text-5xl">
            Clínica Veterinária Maré Mansa
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-stone-600">
            Cuidando dos bichos de Peruíbe com carinho, perto da sua casa.
          </p>
          <a
            href={ZAP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-emerald-800 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Serviços */}
      <section className="mx-auto max-w-3xl px-5 py-12">
        <h2 className="font-serifdemo text-2xl font-bold text-emerald-950">Nossos serviços</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { icone: Stethoscope, nome: 'Consultas', desc: 'Atendimento clínico geral pro seu pet' },
            { icone: Syringe, nome: 'Vacinas', desc: 'Calendário completo, com lembrete' },
            { icone: Scissors, nome: 'Banho e tosa', desc: 'Com hora marcada, sem estresse' },
            { icone: PawPrint, nome: 'Exames', desc: 'Coleta na clínica, resultado rápido' },
          ].map(({ icone: Icone, nome, desc }) => (
            <div key={nome} className="flex items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-700/10 text-emerald-800">
                <Icone size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{nome}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-stone-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Horário e endereço */}
      <section className="border-y border-emerald-900/10 bg-white">
        <div className="mx-auto grid max-w-3xl gap-8 px-5 py-12 sm:grid-cols-2">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-700/10 text-emerald-800">
              <Clock size={22} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-semibold">Horário de atendimento</h2>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                Segunda a sexta, 8h às 18h
                <br />
                Sábado, 8h às 13h
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-emerald-700/10 text-emerald-800">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-semibold">Onde estamos</h2>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                Av. Beira-Mar, 123 — Centro
                <br />
                Peruíbe/SP <span className="text-stone-400">(endereço ilustrativo)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-3xl px-5 py-14 text-center">
        <h2 className="font-serifdemo text-2xl font-bold text-emerald-950">
          Seu pet merece esse cuidado
        </h2>
        <p className="mx-auto mt-2 max-w-[44ch] leading-relaxed text-stone-600">
          Chama no WhatsApp que a gente combina o melhor horário pra você.
        </p>
        <a
          href={ZAP_DEMO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-emerald-800 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Chamar agora
        </a>
      </section>

      <footer className="border-t border-emerald-900/10 bg-white px-5 py-6 text-center text-xs text-stone-500">
        Clínica fictícia, criada como demonstração ·{' '}
        <a href="/sites/" className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900">
          Quero um site assim
        </a>
      </footer>
    </div>
  );
};

export default DemoPage;
