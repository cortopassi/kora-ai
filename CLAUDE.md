# KORA — contexto do projeto

Site institucional da KORA, consultoria de inteligência de negócios
(Processos, Dados, SAP, Produtos Digitais). Domínio: `kora-ia.com`.

## Stack

Vite 6 + React 19 + TypeScript. **Tailwind 3 compilado no build**
(`tailwind.config.cjs` + `postcss.config.cjs` + `index.css`) — não usar
mais `cdn.tailwindcss.com`. Ícones: lucide-react.

```bash
npm install
npm run dev      # porta 3000
npm run build    # valida antes de qualquer commit
npx tsc --noEmit
```

O tema da marca (cores `brand-*`, fontes, animações) vive em
`tailwind.config.cjs`. Estilos globais (scrollbar, `.text-gradient-agency`,
`.glass-panel`) vivem em `index.css`, importado pelo `index.tsx`.

## Regras que vieram de bug real

Cada uma dessas custou tempo. Não repita.

**Imagens vivem em `public/`, nunca em `IMG/`.**
O Vite só copia `public/` para o build. Arquivo na raiz não chega em produção.

**Nunca crie ou edite binário por texto.**
`IMG/kora-shield.png` foi destruído assim: o PNG passou por uma conversão
UTF-8 e 758 mil bytes viraram caractere de substituição. Irrecuperável.
Imagem entra por upload binário ou `git add`, nunca por copiar e colar.

**Nada de chave em `define` no `vite.config.ts`.**
Tudo que passa por `define` é escrito literalmente no JS publicado. O projeto
já vazou `GEMINI_API_KEY` assim. O mesmo vale para qualquer variável com
prefixo `VITE_`: elas vão para o navegador por design.

**Não hotlinke imagem de terceiro.**
Wikimedia e afins bloqueiam na origem — as logos apareciam como alt text.
Logo de marca registrada também é risco jurídico. Marca de terceiro se
representa como wordmark em texto. Exceção consciente: fotos de banco
com licença livre via `images.unsplash.com` (CDN feito pra embed, licença
comercial sem atribuição), usadas na demo de /sites — as URLs ficam
centralizadas em `FOTOS` no componente pra facilitar trocar por arquivos
locais em `public/sites/` se quisermos independência total.

**Prova social é real ou não existe.**
Os depoimentos do repositório eram placeholder gerado (nomes e cargos
genéricos, sem empresa). A seção está desligada pela flag `DEPOIMENTOS_REAIS`
em `components/Testimonials.tsx`. Só ligue com nome e empresa verificáveis.

**`og:image` abaixo de 300 KB, 1200×630, URL absoluta.**
Acima disso o WhatsApp mostra o card sem preview. A prospecção da KORA é
por WhatsApp, então isso é requisito operacional, não detalhe.

**Toda `<img>` nova recebe `width` e `height`.**
Sem dimensões intrínsecas o navegador não reserva espaço e o layout pula
durante o carregamento.

## Linguagem

A faixa de marcas diz **"Experiência do time em"** — Magalu, Brasilprev,
Samsung, Wellhub, Dafiti, Prefeitura de Santos, Zurich são lugares onde o
time atuou, **não clientes da KORA**. Nunca reescreva isso de forma que
sugira relação comercial.

## Páginas de atuação (no ar)

Quatro páginas de detalhe em `atuacoes/{slug}/` (Vite multipágina), com
template compartilhado `AtuacaoPage.tsx` e conteúdo em `atuacoes/data.ts`:
eficiencia-operacional, tecnologia-desenvolvimento, sistemas-dados-sap,
produtos-crescimento. Cada uma com meta/og/canonical próprios. Os cards
de Serviços da home linkam para elas. Mesma regra do case: sem cliente
citado como cliente e sem número inventado.

## Página /sites (no ar)

Página de venda de landing pages one-page a negócios locais, em
`sites/` (Vite multipágina: `/sites` e `/sites/demo`). Primeiro alvo:
clínicas veterinárias de Peruíbe, Itanhaém e Mongaguá.

Preço publicado: **R$ 1.199 de montagem + R$ 199/mês** (mensalidade cobre
domínio, hospedagem e ajustes simples). A demo é a Clínica Maré Mansa,
fictícia e rotulada, com `noindex`.

Regras dessa página:

- Linguagem do dono de clínica de bairro, não linguagem de CTO. A home fala
  com diretor de tecnologia; a `/sites` fala com quem atende o próprio telefone
- A KORA assina embaixo como fiadora, não é a vitrine
- Produto é one-page: sem catálogo, sem estoque, sem agendamento, sem
  transação. Se pedir isso, virou software e a margem morreu
- Conversão termina em WhatsApp, sempre

## Backlog conhecido

- Confirmar se a caixa `contato@kora-ia.com` existe de fato (falha em
  silêncio — leads podem estar sumindo)
- Subir os originais em `public/`: `kora-shield.png`, `kora-og.png`
  (1200×630, < 300 KB), `favicon.png`
- Se quiser páginas reais de Privacidade/Termos no futuro (os links mortos
  foram removidos do rodapé), criar conteúdo e rota — recomendável ter
  política de privacidade quando o GTM/analytics estiver ativo
