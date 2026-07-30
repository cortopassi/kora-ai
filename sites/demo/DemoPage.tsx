import React from 'react';
import {
  MessageCircle,
  Clock,
  MapPin,
  PawPrint,
  Syringe,
  Scissors,
  Stethoscope,
  CalendarCheck,
  ShieldCheck,
  Star,
  Siren,
  Navigation,
  Heart,
} from 'lucide-react';
import { Reveal } from '../fx';

/**
 * SITE DE EXEMPLO — clínica fictícia usada como demonstração do produto
 * vendido em /sites. Nome, endereço, horários e depoimentos são
 * ilustrativos. O botão de WhatsApp aponta para a KORA de propósito.
 *
 * LINGUAGEM VISUAL: adaptada do Projeto Entre Patas.
 *   navy #0A2A47 · verde #157347 · laranja #E8842C · menta #E4F5EB
 *   Padrões herdados: sobretítulo em maiúsculas com travessão e ícone,
 *   botões em pílula sempre com ícone, cartão branco de canto redondo
 *   sobre cinza-claro, ícone dentro de círculo suave, número grande como
 *   prova social, chips de atributo, alternância branco/cinza/navy.
 *
 * CÓDIGO DE COR — invertido em relação ao Entre Patas, de propósito:
 *   VERDE   = WhatsApp. Às 21h, com o bicho passando mal, a pessoa
 *             reconhece o verde antes de ler qualquer palavra.
 *   LARANJA = urgência (plantão). No Entre Patas o laranja era doação.
 *
 * SEM PARALLAX: a versão anterior tinha parallax em duas imagens. Retirado.
 * Esta é página de conversão de urgência — imagem que se move enquanto a
 * pessoa rola procurando o telefone é atrito, não charme. O Reveal fica.
 *
 * Fotos: Unsplash (licença livre, uso comercial, sem atribuição).
 */

const foto = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?fm=jpg&q=75&w=${w}&auto=format&fit=crop`;

/**
 * TROCAR ESTAS FOTOS. Só o ID muda — o resto do código não.
 *
 * O QUE PROCURAR: contato gentil, luz quente, bicho relaxado, tutor e pet
 * juntos, sala clara. Foto de clínica veterinária não vende procedimento,
 * vende a calma depois dele.
 *
 * DO QUE FUGIR: agulha, gaiola, aço inox, focinheira, close de dente ou
 * olho, animal com cara de susto. E escolha as quatro com temperatura de
 * luz parecida — mistura de clínico frio com quente parece colagem.
 *
 * COERÊNCIA: o depoimento fala de vira-lata caramelo. Vira-lata lê como
 * Peruíbe; cachorro de raça lê como banco de imagem gringo. Prefira SRD.
 *
 * ATENÇÃO: estes IDs foram escolhidos lendo a descrição do fotógrafo, sem
 * ver a imagem. Confira as cinco no navegador antes de considerar fechado.
 *
 * COMO TROCAR: abra unsplash.com, ache a foto, copie o trecho do endereço
 * que começa com "photo-" e cole no lugar do ID. Se errar o ID, o cartão
 * mostra o ícone sobre fundo menta em vez de imagem quebrada.
 */
const FOTOS = {
  // Eric Ward — "photo of man hugging tan dog". Abraço, cachorro caramelo.
  hero: foto('photo-1522276498395-f4f68f7f8454', 1400),
  // Khamkéo — "person touching brown dog sleeping on sofa". A calma depois.
  consulta: foto('photo-1568365994964-f3ed699784fe', 800),
  // Tonmoy Iftekhar — "small puppy being held by a person". O colo, não a agulha.
  vacina: foto('photo-1641744094775-25e555ef943d', 800),
  // Rico Van de Voorde — "woman holding black and white dog during daytime".
  exames: foto('photo-1612728802087-d56c04cb141b', 800),
  // Hayffield L — "brown pomeranian wearing pink towel". Pós-banho, na toalha.
  banho: foto('photo-1611173622933-91942d394b04', 800),
};

const ZAP = `https://wa.me/5511998644004?text=${encodeURIComponent(
  'Oi! Vi o site de exemplo da clínica e quero um igual pro meu negócio.'
)}`;

/**
 * Rótulo tem que bater com o destino. Botão escrito "Ligar" que abre
 * conversa queima confiança na hora — e confiança é tudo que essa página
 * tem pra vender. Então aqui não existe botão de ligar: o mapa vai pro
 * mapa, o resto vai pro WhatsApp.
 *
 * NA VERSÃO DE CLIENTE REAL: trocar por href={`tel:+55DDNNNNNNNNN`} com o
 * telefone da clínica, e aí sim o rótulo "Ligar" fica honesto.
 */
const MAPA = 'https://www.google.com/maps/search/?api=1&query=Peru%C3%ADbe+SP';

/* horários: 0=domingo … 6=sábado. null = fechado */
const HORARIOS: (readonly [string, string] | null)[] = [
  null,
  ['08:00', '18:00'],
  ['08:00', '18:00'],
  ['08:00', '18:00'],
  ['08:00', '18:00'],
  ['08:00', '18:00'],
  ['08:00', '13:00'],
];
const DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const emMinutos = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/**
 * Responde "posso ir agora?" sem a pessoa ler tabela nenhuma.
 * É o elemento mais importante da página: às 21h essa é a única
 * pergunta na cabeça de quem chegou aqui.
 */
function calcularStatus() {
  const agora = new Date();
  const dia = agora.getDay();
  const min = agora.getHours() * 60 + agora.getMinutes();
  const hoje = HORARIOS[dia];

  if (hoje) {
    const abre = emMinutos(hoje[0]);
    const fecha = emMinutos(hoje[1]);
    if (min >= abre && min < fecha)
      return { aberto: true, texto: `Aberto agora · fecha às ${hoje[1]}` };
    if (min < abre)
      return { aberto: false, texto: `Fechado · abre hoje às ${hoje[0]}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (dia + i) % 7;
    const f = HORARIOS[d];
    if (f)
      return {
        aberto: false,
        texto: `Fechado · abre ${i === 1 ? 'amanhã' : DIAS[d].toLowerCase()} às ${f[0]}`,
      };
  }
  return { aberto: false, texto: 'Fechado' };
}

/* ── peças reaproveitáveis, no padrão do Entre Patas ──────────── */

const Sobretitulo: React.FC<{
  children: React.ReactNode;
  cor?: 'verde' | 'laranja' | 'claro';
  icone?: React.ElementType;
}> = ({ children, cor = 'verde', icone: Icone = PawPrint }) => {
  const tom =
    cor === 'laranja'
      ? 'text-[#E8842C]'
      : cor === 'claro'
        ? 'text-[#8FD9B0]'
        : 'text-[#157347]';
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${tom}`}
    >
      <span className="h-px w-6 bg-current opacity-50" />
      <Icone size={13} aria-hidden="true" />
      {children}
    </p>
  );
};

const Pilula: React.FC<{
  href: string;
  children: React.ReactNode;
  tom?: 'verde' | 'laranja' | 'branco' | 'contorno';
  icone: React.ElementType;
}> = ({ href, children, tom = 'verde', icone: Icone }) => {
  const estilos = {
    verde: 'bg-[#157347] text-white hover:bg-[#10603A] focus-visible:outline-[#157347]',
    laranja: 'bg-[#E8842C] text-white hover:bg-[#D2741F] focus-visible:outline-[#E8842C]',
    branco: 'bg-white text-[#0A2A47] ring-1 ring-[#E6EBE9] hover:bg-[#E4F5EB] focus-visible:outline-[#0A2A47]',
    contorno: 'border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white',
  }[tom];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${estilos}`}
    >
      <Icone size={18} aria-hidden="true" />
      {children}
    </a>
  );
};

const CirculoIcone: React.FC<{
  icone: React.ElementType;
  tom?: 'menta' | 'laranja';
}> = ({ icone: Icone, tom = 'menta' }) => (
  <span
    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${
      tom === 'laranja' ? 'bg-[#FDEBD8] text-[#C96A12]' : 'bg-[#E4F5EB] text-[#157347]'
    }`}
  >
    <Icone size={20} aria-hidden="true" strokeWidth={2} />
  </span>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full bg-[#F1F4F3] px-2.5 py-1 text-[11px] font-medium text-[#5A6B75]">
    {children}
  </span>
);

/**
 * Foto que falha vira ícone sobre fundo menta em vez de imagem quebrada.
 * Mesma rede de segurança da faixa de marcas da home: ID errado do
 * Unsplash não deixa buraco na página.
 *
 * Sem loading="lazy" de propósito — a imagem precisa TENTAR carregar para
 * o onError disparar e o fallback assumir.
 */
const FotoServico: React.FC<{
  src: string;
  alt: string;
  icone: React.ElementType;
}> = ({ src, alt, icone: Icone }) => {
  const [falhou, setFalhou] = React.useState(false);

  if (falhou) {
    return (
      <div
        className="flex h-40 w-full items-center justify-center bg-[#E4F5EB]"
        role="img"
        aria-label={alt}
      >
        <Icone size={40} className="text-[#157347]/45" aria-hidden="true" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      width={800}
      height={320}
      onError={() => setFalhou(true)}
      className="h-40 w-full object-cover"
    />
  );
};

const Estrelas: React.FC = () => (
  <div className="mb-3 flex gap-0.5 text-[#E8842C]" aria-label="5 de 5 estrelas">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} size={15} fill="currentColor" aria-hidden="true" />
    ))}
  </div>
);

/* ── dados ────────────────────────────────────────────────────── */

const SERVICOS = [
  {
    img: FOTOS.consulta,
    icone: Stethoscope,
    titulo: 'Consulta',
    desc: 'Clínica geral para cães e gatos, com hora marcada ou encaixe no mesmo dia.',
    chips: ['Cães', 'Gatos', 'Hora marcada'],
    alt: 'Mão acariciando um cachorro deitado, tranquilo',
  },
  {
    img: FOTOS.vacina,
    icone: Syringe,
    titulo: 'Vacinação',
    desc: 'Vacinas importadas, carteirinha em dia e lembrete da próxima dose.',
    chips: ['V8 e V10', 'Antirrábica', 'Carteirinha'],
    alt: 'Filhote no colo de uma pessoa, calmo',
  },
  {
    img: FOTOS.exames,
    icone: PawPrint,
    titulo: 'Exames',
    desc: 'Laboratório, ultrassom e raio-X no local, sem precisar ir pra outra cidade.',
    chips: ['Ultrassom', 'Raio-X', 'Sangue'],
    alt: 'Pessoa segurando um cachorro com cuidado',
  },
  {
    img: FOTOS.banho,
    icone: Scissors,
    titulo: 'Banho e tosa',
    desc: 'Higiene e tosa com quem conhece o jeito do seu pet.',
    chips: ['Tosa higiênica', 'Hidratação'],
    alt: 'Cachorro enrolado numa toalha depois do banho',
  },
];

const PASSOS = [
  {
    n: '01',
    icone: MessageCircle,
    titulo: 'Chama no WhatsApp',
    desc: 'Conta o que está acontecendo. A gente responde rápido, sem formulário e sem espera.',
  },
  {
    n: '02',
    icone: CalendarCheck,
    titulo: 'A gente combina o horário',
    desc: 'Encaixe no mesmo dia quando é urgente. Você já sai da conversa sabendo o valor.',
  },
  {
    n: '03',
    icone: Heart,
    titulo: 'Traz seu pet',
    desc: 'Atendimento sem correria, no tempo do pet. E acompanhamento depois.',
  },
];

const AVALIACOES = [
  {
    texto:
      'A Nina tremia só de ouvir a palavra veterinário. Hoje ela entra na Maré Mansa abanando o rabo. Isso diz tudo.',
    autor: 'Carla M.',
    detalhe: 'tutora da Nina, vira-lata caramelo',
  },
  {
    texto:
      'Levei o Thor às 19h de um sábado, num sufoco. Atenderam na hora e explicaram tudo antes de cobrar.',
    autor: 'Rafael L.',
    detalhe: 'tutor do Thor, golden',
  },
  {
    texto:
      'Preço justo e sem empurrar exame que não precisa. Virei cliente das duas gatas.',
    autor: 'Juliana P.',
    detalhe: 'tutora da Mel e da Luna',
  },
];

const NUMEROS: [React.ElementType, string, string, string][] = [
  [ShieldCheck, '10', 'anos', 'Atendendo Peruíbe e região'],
  [Star, '4,9', 'no Google', 'Média das avaliações de tutores'],
  [PawPrint, '2.400+', 'atendimentos', 'Cães e gatos desde a abertura'],
];

const CONFIANCA: [React.ElementType, string][] = [
  [ShieldCheck, 'Em Peruíbe desde 2015'],
  [Clock, 'Encaixe no mesmo dia'],
  [Heart, 'Preço dito antes do atendimento'],
];

/* ── página ───────────────────────────────────────────────────── */

const DemoPage: React.FC = () => {
  const status = calcularStatus();
  const hoje = new Date().getDay();

  return (
    <div className="bg-white text-[#1B2B36]">
      <a
        href={ZAP}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#0A2A47] px-4 py-2.5 text-center text-[13px] font-medium text-[#8FD9B0] transition-colors hover:bg-[#071D33]"
      >
        Site de exemplo criado pela KORA — toque aqui pra ter um igual
      </a>

      {/* barra fixa com o status ao vivo */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A2A47]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <span className="flex items-center gap-2 text-[17px] font-bold text-white">
            <PawPrint size={19} className="text-[#8FD9B0]" aria-hidden="true" />
            Maré Mansa
          </span>
          <span className="flex flex-none items-center gap-2 text-[13px] font-medium text-white/90">
            <span
              className={`h-2 w-2 flex-none rounded-full ${
                status.aberto ? 'bg-[#4ADE80] ring-2 ring-[#4ADE80]/30' : 'bg-[#E8842C]'
              }`}
              aria-hidden="true"
            />
            {status.texto}
          </span>
        </div>
      </header>

      {/* hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={FOTOS.hero}
          alt="Homem abraçando um cachorro caramelo"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Dois gradientes de propósito. O horizontal protege a leitura do
            texto à esquerda e libera a foto à direita; o vertical só acerta
            o encaixe com a barra fixa. Antes era 85-95% em toda a área, o
            que escondia a foto inteira — download sem nada em troca. */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A2A47]/95 via-[#0A2A47]/78 to-[#0A2A47]/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2A47]/70 via-transparent to-[#0A2A47]/80"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <Sobretitulo cor="claro">Clínica veterinária · Peruíbe-SP</Sobretitulo>

          <h1 className="max-w-[20ch] text-[2.15rem] font-bold leading-[1.08] tracking-tight text-white lg:text-6xl">
            Cuidado de verdade pro seu melhor amigo
          </h1>

          {/* Divisão de trabalho: o título carrega o afeto, a linha de apoio
              carrega o lugar. Proximidade é o único gancho que rede grande
              não copia de uma clínica de bairro. */}
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-white/80 lg:text-lg">
            Clínica veterinária no coração de Peruíbe. Consultas, vacinas,
            exames e banho e tosa — com atendimento hoje quando é urgente.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Pilula href={ZAP} tom="verde" icone={MessageCircle}>
              Falar no WhatsApp
            </Pilula>
            <Pilula href={ZAP} tom="laranja" icone={Siren}>
              É urgente
            </Pilula>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-white/70">
            {CONFIANCA.map(([Icone, txt]) => (
              <li key={txt} className="flex items-center gap-2">
                <Icone size={15} className="text-[#8FD9B0]" aria-hidden="true" />
                {txt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* prova social em número grande */}
      <section className="bg-[#F5F7F6] py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-3">
          {NUMEROS.map(([Icone, numero, unidade, desc], i) => (
            <Reveal key={numero} delay={i * 90}>
              <div className="h-full rounded-3xl bg-white p-7 text-center shadow-[0_1px_3px_rgba(10,42,71,0.06)]">
                <div className="flex justify-center">
                  <CirculoIcone icone={Icone} />
                </div>
                {/* Unidade em linha própria: inline, "2.400+ atendimentos"
                    brigava com o número e quebrava feio no celular. */}
                <p className="text-4xl font-bold leading-none tracking-tight text-[#0A2A47]">
                  {numero}
                </p>
                <p className="mt-1.5 text-[13px] font-semibold uppercase tracking-wider text-[#5A6B75]">
                  {unidade}
                </p>
                <p className="mt-2.5 text-[13px] leading-snug text-[#5A6B75]">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 px-5 text-center text-[11px] text-[#93A3AC]">
          (números ilustrativos)
        </p>
      </section>

      {/* serviços */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <Sobretitulo icone={Stethoscope}>O que a gente faz</Sobretitulo>
        <h2 className="max-w-[22ch] text-[1.75rem] font-bold leading-tight tracking-tight text-[#0A2A47] lg:text-4xl">
          Tudo que seu pet precisa, num lugar só
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-[#E6EBE9]">
                <FotoServico src={s.img} alt={s.alt} icone={s.icone} />
                <div className="flex flex-1 flex-col p-6">
                  <CirculoIcone icone={s.icone} />
                  <h3 className="text-lg font-bold text-[#0A2A47]">{s.titulo}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#5A6B75]">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.chips.map((c) => (
                      <Chip key={c}>{c}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* como funciona */}
      <section className="border-y border-[#E6EBE9] bg-[#F5F7F6] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Sobretitulo cor="laranja" icone={CalendarCheck}>
            Simples assim
          </Sobretitulo>
          <h2 className="max-w-[24ch] text-[1.75rem] font-bold leading-tight tracking-tight text-[#0A2A47] lg:text-4xl">
            Atendimento em 3 passos
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {PASSOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 100} className="h-full">
                <div className="flex h-full gap-5 rounded-3xl bg-white p-7">
                  <span className="text-2xl font-bold tabular-nums text-[#CBD6D2]">
                    {p.n}
                  </span>
                  <div>
                    <CirculoIcone icone={p.icone} tom="laranja" />
                    <h3 className="text-lg font-bold text-[#0A2A47]">{p.titulo}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#5A6B75]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* avaliações */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <Sobretitulo icone={Star}>Histórias de tutores</Sobretitulo>
        <h2 className="max-w-[22ch] text-[1.75rem] font-bold leading-tight tracking-tight text-[#0A2A47] lg:text-4xl">
          O que dizem no Google
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {AVALIACOES.map((a, i) => (
            <Reveal key={a.autor} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-[#F5F7F6] p-7">
                <Estrelas />
                <blockquote className="flex-1 text-[15px] leading-relaxed text-[#3C4C56]">
                  “{a.texto}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#E4F5EB] text-[13px] font-bold text-[#157347]"
                    aria-hidden="true"
                  >
                    {a.autor.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold text-[#0A2A47]">
                      {a.autor}
                    </span>
                    <span className="block text-[12px] text-[#5A6B75]">{a.detalhe}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-[#93A3AC]">
          (depoimentos ilustrativos)
        </p>
      </section>

      {/* horário e localização */}
      <section className="border-t border-[#E6EBE9] bg-[#F5F7F6] py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl bg-white p-8">
              <CirculoIcone icone={Clock} />
              <h2 className="text-xl font-bold text-[#0A2A47]">Horário de atendimento</h2>
              <dl className="mt-5 divide-y divide-[#EEF2F1]">
                {HORARIOS.map((faixa, i) => (
                  <div
                    key={DIAS[i]}
                    className={`flex items-center justify-between py-2.5 text-[14px] ${
                      i === hoje ? 'font-bold text-[#157347]' : 'text-[#5A6B75]'
                    }`}
                  >
                    <dt>
                      {DIAS[i]}
                      {i === hoje && (
                        <span className="ml-2 text-[11px] font-semibold uppercase tracking-wider">
                          hoje
                        </span>
                      )}
                    </dt>
                    <dd className="tabular-nums">
                      {faixa ? `${faixa[0]} – ${faixa[1]}` : 'Fechado'}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-[#FDF6EC] p-4 text-[13px] leading-relaxed text-[#8A5A15]">
                <Siren size={16} className="mt-0.5 flex-none" aria-hidden="true" />
                Emergência fora do horário? Chama no WhatsApp que a gente orienta.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110} className="h-full">
            <div className="flex h-full flex-col rounded-3xl bg-white p-8">
              <CirculoIcone icone={MapPin} />
              <h2 className="text-xl font-bold text-[#0A2A47]">Onde estamos</h2>
              <address className="mt-4 not-italic text-[15px] leading-relaxed text-[#5A6B75]">
                Av. Beira-Mar, 123 — Centro
                <br />
                Peruíbe · SP
                <br />
                <span className="text-[11px] text-[#93A3AC]">(endereço ilustrativo)</span>
              </address>
              <ul className="mt-5 space-y-2 text-[14px] text-[#5A6B75]">
                {[
                  'Estacionamento na porta',
                  'A cinco minutos da praia',
                  'Acesso para carrinho e cadeira',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <PawPrint
                      size={14}
                      className="flex-none text-[#157347]"
                      aria-hidden="true"
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                <Pilula href={MAPA} tom="verde" icone={Navigation}>
                  Como chegar
                </Pilula>
                <Pilula href={ZAP} tom="branco" icone={MessageCircle}>
                  Falar agora
                </Pilula>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* cta final */}
      <section className="bg-[#0A2A47] py-20 text-center lg:py-24">
        <div className="mx-auto max-w-2xl px-5">
          <div className="flex justify-center">
            <Sobretitulo cor="claro" icone={Heart}>
              Estamos aqui
            </Sobretitulo>
          </div>
          <h2 className="text-[1.9rem] font-bold leading-tight tracking-tight text-white lg:text-5xl">
            Seu pet merece esse cuidado
          </h2>
          <p className="mx-auto mt-5 max-w-[40ch] text-[16px] leading-relaxed text-white/75">
            Chama no WhatsApp que a gente combina o melhor horário pra vocês.
            Resposta rápida, sem formulário.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Pilula href={ZAP} tom="verde" icone={MessageCircle}>
              Chamar agora
            </Pilula>
            <Pilula href={ZAP} tom="contorno" icone={Siren}>
              É urgente
            </Pilula>
          </div>
        </div>
      </section>

      {/* rodapé */}
      <footer className="border-t border-white/10 bg-[#071D33] py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 font-bold text-white/85">
            <PawPrint size={16} className="text-[#8FD9B0]" aria-hidden="true" />
            Maré Mansa · Peruíbe/SP
          </span>
          <span>
            Site de exemplo por{' '}
            <a
              href="https://kora-ia.com/sites/"
              className="font-semibold text-[#8FD9B0] underline-offset-2 hover:underline"
            >
              KORA
            </a>
          </span>
        </div>
      </footer>

      {/* zap fixo no celular */}
      <a
        href={ZAP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center gap-2.5 rounded-full bg-[#157347] py-4 text-[16px] font-bold text-white shadow-[0_8px_28px_rgba(21,115,71,0.45)] transition-transform active:scale-[0.98] lg:hidden"
      >
        <MessageCircle size={20} aria-hidden="true" />
        Falar no WhatsApp
      </a>
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </div>
  );
};

export default DemoPage;
