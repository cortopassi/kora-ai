import { GitMerge, MonitorSmartphone, Database, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Conteúdo das páginas de atuação. Regras herdadas do resto do site:
 * nada de cliente citado como cliente, nada de número inventado.
 * A prova concreta mora na faixa "Experiência do time em" e no case.
 */

export type Atuacao = {
  slug: string;
  icone: LucideIcon;
  titulo: string;
  promessa: string;
  resumo: string;
  dores: { titulo: string; texto: string }[];
  entregas: { titulo: string; texto: string }[];
  comoFunciona: { titulo: string; texto: string }[];
  paraQuem: string;
  metaTitle: string;
  metaDescription: string;
  caseLink?: { href: string; rotulo: string };
};

export const ATUACOES: Record<string, Atuacao> = {
  'eficiencia-operacional': {
    slug: 'eficiencia-operacional',
    icone: GitMerge,
    titulo: 'Eficiência Operacional',
    promessa: 'Sua operação organizada, medida e conectada à estratégia',
    resumo:
      'Quando a empresa cresce, o processo que funcionava na cabeça de três pessoas vira gargalo na mão de trinta. A gente entra para mapear como o trabalho realmente acontece, cortar o que não gera valor e ligar a operação do dia a dia aos objetivos do negócio.',
    dores: [
      { titulo: 'Retrabalho invisível', texto: 'Tarefas refeitas, aprovações que voltam, informação que se perde entre áreas — e ninguém consegue apontar onde o tempo está indo.' },
      { titulo: 'Operação descolada da estratégia', texto: 'Metas anuais de um lado, rotina do outro. O time trabalha muito, mas o esforço não se converte nos resultados que a diretoria espera.' },
      { titulo: 'Decisão sem medida', texto: 'Sem indicadores de processo, cada discussão vira opinião contra opinião. Priorizar vira disputa política, não análise.' },
    ],
    entregas: [
      { titulo: 'Mapeamento de processos', texto: 'O fluxo real do trabalho documentado — não o que está no manual, o que acontece de verdade — com gargalos e desperdícios marcados.' },
      { titulo: 'Redesenho com o time', texto: 'Processos reconstruídos junto de quem opera, para a mudança pegar. Papéis, alçadas e passagens de bastão definidos.' },
      { titulo: 'OKRs e indicadores', texto: 'Objetivos desdobrados até a operação, com indicadores que o time acompanha sem precisar de analista dedicado.' },
      { titulo: 'Ritos de gestão', texto: 'Cadência de acompanhamento enxuta: as reuniões certas, com a pauta certa, e nenhuma a mais.' },
    ],
    comoFunciona: [
      { titulo: 'Imersão', texto: 'Entrevistas e observação da operação para entender o fluxo real e as dores de quem executa.' },
      { titulo: 'Redesenho', texto: 'Novo desenho de processos e indicadores, validado com o time e com a liderança.' },
      { titulo: 'Implantação acompanhada', texto: 'A gente fica junto na virada, ajustando o que a prática mostrar — melhoria de processo que não é acompanhada regride.' },
    ],
    paraQuem:
      'Empresas em crescimento onde a operação virou caixa-preta, e líderes que precisam de previsibilidade antes de contratar mais gente para compensar processo ruim.',
    metaTitle: 'Consultoria em Eficiência Operacional e Processos | KORA',
    metaDescription: 'Mapeamento e redesenho de processos, OKRs e indicadores de operação. Conectamos o dia a dia da sua equipe aos objetivos estratégicos do negócio.',
  },

  'tecnologia-desenvolvimento': {
    slug: 'tecnologia-desenvolvimento',
    icone: MonitorSmartphone,
    titulo: 'Tecnologia & Desenvolvimento',
    promessa: 'Software sob medida, quando software é a resposta certa',
    resumo:
      'Nem todo problema se resolve com sistema — e é por isso que a gente começa pelo problema, não pela proposta de desenvolvimento. Quando a resposta é software, construímos aplicações, sites e plataformas com a robustez de quem já operou tecnologia em ambiente corporativo.',
    dores: [
      { titulo: 'Planilha virou sistema', texto: 'A operação inteira roda numa planilha que só uma pessoa entende, quebra sem aviso e não escala com o negócio.' },
      { titulo: 'Ferramenta de prateleira que não veste', texto: 'O software pronto cobre 70% da necessidade — e os 30% que faltam são justamente o que diferencia a sua operação.' },
      { titulo: 'Sistema legado que trava a empresa', texto: 'A tecnologia atual funciona, mas cada mudança custa caro, demora e depende de fornecedor difícil de acessar.' },
    ],
    entregas: [
      { titulo: 'Aplicações web e mobile', texto: 'Sistemas sob medida para o fluxo do seu negócio, do painel interno ao produto que o seu cliente usa.' },
      { titulo: 'Sites e plataformas', texto: 'Da página institucional rápida e encontrável no Google à plataforma completa com painel de gestão.' },
      { titulo: 'Integrações', texto: 'Seus sistemas conversando entre si — ERP, CRM, planilhas e APIs de terceiros — sem redigitação nem versão conflitante.' },
      { titulo: 'Automação de rotinas', texto: 'Tarefas repetitivas de cadastro, conferência e relatório saindo da mão do time e indo para o software.' },
    ],
    comoFunciona: [
      { titulo: 'Entendimento do problema', texto: 'Antes de qualquer linha de código: qual decisão ou fluxo esse software melhora, e como saberemos que funcionou.' },
      { titulo: 'Construção em ciclos curtos', texto: 'Entregas parciais funcionando desde cedo, para validar com uso real em vez de apresentação de slides.' },
      { titulo: 'Entrega com autonomia', texto: 'Documentação, treinamento e — quando faz sentido — painel de gestão para o seu time operar sem depender de desenvolvedor.' },
    ],
    paraQuem:
      'Negócios que superaram as ferramentas genéricas e precisam de tecnologia com a cara da própria operação — sem virar reféns de quem a construiu.',
    metaTitle: 'Desenvolvimento de Software Sob Medida | KORA',
    metaDescription: 'Aplicações, sites, plataformas e integrações construídos a partir do problema de negócio. Entrega com documentação e autonomia para o seu time.',
  },

  'sistemas-dados-sap': {
    slug: 'sistemas-dados-sap',
    icone: Database,
    titulo: 'Sistemas & Dados (SAP)',
    promessa: 'Seu ERP trabalhando a favor da decisão, não contra ela',
    resumo:
      'Ambiente SAP é território que a gente conhece por dentro: integração com novas tecnologias, sustentação de processos críticos e a ponte entre o dado que está no sistema e a decisão que precisa ser tomada na sala de reunião.',
    dores: [
      { titulo: 'O dado existe, o relatório não', texto: 'A informação está no ERP, mas extrair uma visão confiável exige dias de trabalho manual e conhecimento tribal.' },
      { titulo: 'Integração frágil entre sistemas', texto: 'SAP de um lado, sistemas satélites do outro, e no meio interfaces que quebram e conciliações manuais que consomem o time.' },
      { titulo: 'Dependência de consultoria cara e distante', texto: 'Cada ajuste vira projeto, cada projeto vira orçamento, e o conhecimento nunca fica na sua equipe.' },
    ],
    entregas: [
      { titulo: 'Consultoria técnica SAP', texto: 'Análise, evolução e sustentação de processos no ERP, com quem fala a língua do funcional e do técnico.' },
      { titulo: 'Integrações SAP ↔ ecossistema', texto: 'O ERP conectado a aplicações modernas, APIs e ferramentas do dia a dia, com interfaces monitoráveis.' },
      { titulo: 'Estruturação de dados', texto: 'Dados organizados e confiáveis saindo do sistema e chegando em painéis que a diretoria consegue ler.' },
      { titulo: 'Apoio à decisão com IA', texto: 'Onde fizer sentido — e só onde fizer sentido — camadas de inteligência sobre os dados para antecipar problemas e priorizar.' },
    ],
    comoFunciona: [
      { titulo: 'Diagnóstico do ambiente', texto: 'Levantamento do cenário atual: módulos, integrações, pontos de dor e o que a empresa precisa que o sistema responda.' },
      { titulo: 'Plano por prioridade', texto: 'Roteiro de evolução ordenado por impacto no negócio, não por tamanho de projeto.' },
      { titulo: 'Execução com transferência', texto: 'Implementação documentada e conhecimento transferido para o seu time — autonomia é parte da entrega.' },
    ],
    paraQuem:
      'Corporações e médias empresas com SAP no coração da operação, que precisam de evolução técnica com visão de negócio — e sem criar nova dependência.',
    metaTitle: 'Consultoria SAP, Integrações e Dados | KORA',
    metaDescription: 'Consultoria técnica SAP com visão de negócio: integrações, estruturação de dados e apoio à decisão. Conhecimento transferido para o seu time.',
  },

  'produtos-crescimento': {
    slug: 'produtos-crescimento',
    icone: TrendingUp,
    titulo: 'Produtos & Crescimento',
    promessa: 'Do discovery ao crescimento, com gestão de produto de verdade',
    resumo:
      'Produto digital que dá certo não nasce de feature atrás de feature: nasce de decidir bem o que construir, para quem e por quê. Trazemos bagagem de Product Management construída em bancos, marketplaces e saúde para dentro do seu produto — e estratégias de Growth e SEO para ele ser encontrado e crescer.',
    dores: [
      { titulo: 'Roadmap guiado por opinião', texto: 'O produto evolui pelo pedido mais barulhento — do cliente grande, do sócio, do comercial — e não por evidência de valor.' },
      { titulo: 'Produto pronto, tração zero', texto: 'A construção consumiu o orçamento e o lançamento chegou sem plano de aquisição: ninguém encontra, ninguém testa.' },
      { titulo: 'Time técnico sem direção de produto', texto: 'Desenvolvedores bons entregando rápido — na direção errada. Falta quem traduza negócio em prioridade.' },
    ],
    entregas: [
      { titulo: 'Discovery e validação', texto: 'Pesquisa com usuário, priorização por valor e prototipagem antes de investir em construção cara.' },
      { titulo: 'Gestão de produto', texto: 'Roadmap, métricas de produto e cadência de decisão — o papel de Product Manager exercido de fato, não de título.' },
      { titulo: 'Growth e SEO', texto: 'Estratégia de aquisição orgânica e experimentos de crescimento medidos, para o produto ser achado e convertido.' },
      { titulo: 'Visão de mercado', texto: 'Posicionamento, análise de concorrência e precificação tratados como parte do produto, não como detalhe do marketing.' },
    ],
    comoFunciona: [
      { titulo: 'Diagnóstico do produto', texto: 'Onde o produto está, o que os números e os usuários dizem, e qual a maior alavanca disponível agora.' },
      { titulo: 'Foco na alavanca', texto: 'Um ciclo de trabalho concentrado no que move o ponteiro — descoberta, entrega ou aquisição — com critério de sucesso definido antes.' },
      { titulo: 'Rotina de produto instalada', texto: 'Ao final, seu time fica com o processo: como decidir, como medir e como repetir sem depender da gente.' },
    ],
    paraQuem:
      'Empresas construindo ou destravando um produto digital, e fundadores que precisam de senioridade de produto sem contratar um head em tempo integral.',
    caseLink: { href: '/cases/agilimetro/', rotulo: 'Veja um produto que construímos e operamos: o Agilímetro' },
    metaTitle: 'Gestão de Produtos Digitais, Growth e SEO | KORA',
    metaDescription: 'Product Management com bagagem em bancos, marketplaces e saúde: discovery, roadmap, métricas e estratégias de crescimento para o seu produto digital.',
  },
};
