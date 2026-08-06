import React from 'react';
import {
  ShieldCheck,
  Search,
  Layers,
  Image as ImageIcon,
  Settings2,
  Database,
  ArrowUpRight,
  ArrowLeft,
  MessageCircle,
  Heart,
} from 'lucide-react';
import { Reveal } from '../../sites/fx';

/**
 * Case Entre Patas.
 *
 * Regra desta página: ela descreve o QUE FOI CONSTRUÍDO, não resultados.
 * O site ainda não foi populado pela ONG, então não existe número de
 * adoção, doação ou audiência para citar — e número inventado em case
 * é a mesma doença que a gente tirou do resto deste site.
 */

const ZAP = 'https://wa.me/5511998644004';

const CONSTRUIDO = [
  {
    icone: Layers,
    titulo: 'Oito páginas públicas',
    texto:
      'Adoção, Finais Felizes, Quero Ajudar, Eventos, Perdidos & Encontrados, Transparência, Sobre e Início — mais um design system documentado.',
  },
  {
    icone: Settings2,
    titulo: 'Painel que a ONG opera sozinha',
    texto:
      'Cadastrar animal, publicar evento, registrar bicho perdido, atualizar prestação de contas. Sem programador no meio.',
  },
  {
    icone: ImageIcon,
    titulo: 'Foto de celular vira foto de site',
    texto:
      'A imagem é comprimida no navegador antes de subir: arquivos de 3 a 8 MB viram 200 a 500 KB. Site rápido sem ninguém precisar saber o que é compressão.',
  },
  {
    icone: Database,
    titulo: 'Contatos e PIX editáveis',
    texto:
      'WhatsApp, Instagram, telefone, CNPJ e chave PIX ficam numa tela de configurações. Trocar um número atualiza o site inteiro.',
  },
  {
    icone: Heart,
    titulo: 'Adotou, sai do catálogo',
    texto:
      'Marcar um animal como adotado move ele para a vitrine de Finais Felizes automaticamente. Um clique, nenhum deploy.',
  },
  {
    icone: ShieldCheck,
    titulo: 'Escrita restrita a administrador',
    texto:
      'Row Level Security no banco, tabela de administradores, escape de conteúdo nos cards públicos e cabeçalhos de segurança no servidor.',
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
          Case · trabalho voluntário
        </p>

        <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.02] tracking-tight max-w-[19ch] mb-8 animate-slide-up">
          Uma ONG de Peruíbe que{' '}
          <span className="text-brand-primary">
            atualiza o próprio site
          </span>
        </h1>

        <p className="text-lg md:text-xl text-brand-muted max-w-[58ch] leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          O Entre Patas resgata e encaminha cães e gatos para adoção no litoral
          sul de São Paulo. Precisava de presença na internet — e, mais do que
          isso, de autonomia para mantê-la sem depender de ninguém.
        </p>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-brand-border/40">
          {[
            ['Papel', 'Produto e desenvolvimento'],
            ['Formato', 'Voluntário, sem custo para a ONG'],
            ['Entrega', 'Site público + painel de gestão'],
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
            O problema não era<br />
            <span className="text-brand-muted">falta de site</span>
          </h2>
          <div className="space-y-6 text-brand-muted leading-relaxed">
            <p>
              ONG pequena vive de rotatividade: bicho entra, bicho é adotado,
              evento acontece, alguém perde um cachorro na praia. É informação
              que muda toda semana.
            </p>
            <p>
              Um site bonito que só o desenvolvedor consegue atualizar morre em
              dois meses. Fica com foto de animal que já tem dono e evento que
              já passou — e, em vez de gerar confiança, passa a documentar o
              abandono.
            </p>
            <p className="text-brand-text font-medium">
              Então a pergunta que guiou o projeto não foi “como fica bonito”.
              Foi <span className="text-brand-primary">“quem vai manter isso
              daqui a seis meses, e com quais mãos?”</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── o que foi construído ─────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20 md:py-28">
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">
          O que foi construído
        </h2>
        <p className="text-brand-muted mb-14 max-w-[52ch]">
          Um site público e um painel de administração. A ONG entra, edita, e o
          site muda.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONSTRUIDO.map(({ icone: Icone, titulo, texto }, i) => (
            <Reveal key={titulo} delay={(i % 3) * 100} className="h-full">
            <div
              className="h-full bg-brand-surface border border-brand-border rounded-brand p-7 hover:border-brand-primary/40 transition-colors"
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
      </section>

      {/* ── dois momentos ────────────────────────────── */}
      <section className="border-t border-brand-border/40 bg-brand-surface">
        <div className="max-w-container mx-auto px-6 py-20 md:py-28">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-14">
            Dois momentos que definiram o projeto
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal className="h-full">
            <article className="h-full bg-brand-bg border border-brand-border rounded-brand p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Search
                  className="w-5 h-5 text-brand-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
                  Pesquisa com usuário
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 leading-snug">
                O funil terminava em beco sem saída
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                A primeira versão mostrava os animais lindamente — e parava ali.
                O formulário de interesse não levava a lugar nenhum e a doação
                não tinha caminho.
              </p>
              <p className="text-brand-muted leading-relaxed">
                O formulário passou a abrir o WhatsApp com a mensagem já
                escrita, com o nome do animal. A doação ganhou PIX direto. Quem
                se apaixona por um cachorro às onze da noite consegue falar com
                alguém.
              </p>
            </article>
            </Reveal>

            <Reveal delay={120} className="h-full">
            <article className="h-full bg-brand-bg border border-brand-border rounded-brand p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck
                  className="w-5 h-5 text-brand-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-primary">
                  Auditoria de segurança
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 leading-snug">
                Uma falha encontrada antes de virar problema
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Uma revisão do próprio trabalho revelou que as permissões de
                escrita estavam largas demais: quem conseguisse criar uma conta
                poderia alterar conteúdo.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Corrigido com controle de acesso por linha no banco, tabela de
                administradores e verificação em produção. Achar isso no próprio
                código, antes de qualquer incidente, faz parte do trabalho.
              </p>
            </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── estado atual, honesto ────────────────────── */}
      <section className="max-w-container mx-auto px-6 py-20 md:py-28">
        <Reveal>
        <div className="border-l-2 border-brand-primary pl-8 md:pl-10 max-w-[62ch]">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-5">
            Onde o projeto está
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            A plataforma está entregue e no ar. O cadastro dos animais, eventos
            e da prestação de contas fica com a coordenação da ONG — é
            exatamente esse o ponto do painel.
          </p>
          <p className="text-brand-muted leading-relaxed">
            Por isso este case fala do que foi construído, e não de resultados.
            Números de adoção e de doação pertencem a quem faz o trabalho de
            campo, e serão deles quando existirem.
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
            página só resolve — e custa bem menos. Se precisar de painel, a
            gente também faz.
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
        <div className="max-w-container mx-auto px-6 py-8 flex flex-wrap items-center gap-4 justify-between text-sm text-brand-muted">
          <a href="/" aria-label="KORA — página inicial">
            <img src="/kora-wordmark-branco.png" alt="KORA" className="h-5 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <span>© 2026 Kora</span>
            <a href="/" className="hover:text-brand-text transition-colors">
              kora-ia.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CasePage;
