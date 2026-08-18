# Prompts para capturar os screenshots do portfólio

## Onde os prints ficam

```
public/projects/
├── portal-professor/    notas.png (capa) · dashboard.png (galeria)
├── nielsen-analytics/   dashboard.png (capa) · galeria vazia
├── mirai/               chat.png (capa) · galeria vazia
└── entregadores/        vazio (projeto ainda em draft)
```

Uma pasta por projeto. Agora **cada print tem dois destinos possíveis** em `src/data/projects.js`,
sempre com caminho relativo a `public/projects/`:

| Campo | O que é | Onde aparece |
|---|---|---|
| `image` | a capa, um print só | card da lista de projetos **e** topo da página de detalhe |
| `gallery` | os demais prints, em array | seção "Mais telas" da página de detalhe |

As legendas ficam em `src/context/LanguageContext.js`, em `projects.shots`, indexadas pelo mesmo
caminho do arquivo, nas duas línguas. Print sem legenda aparece normalmente, só sem texto embaixo.

**O que falta capturar:** a galeria de Nielsen Analytics e a de Mirai (hoje só têm a capa), e tudo
de Entregadores.

---

## Prompt base (cole no começo de qualquer agente)

```
Você vai capturar um screenshot de produto para o portfólio do Arthur.

PASTA DE DESTINO
C:\Users\Site5\Repositório\portfolio-arthur\public\projects\<slug>\
A pasta já existe. Cada projeto tem a sua. Salve os PNGs direto lá dentro, com nome
descritivo em minúsculo (dashboard.png, mapa.png, relatorio.png). Pode salvar mais de um
candidato — eu escolho depois.

ESPECIFICAÇÃO DA IMAGEM
- 1600x1000 px exatos (proporção 16:10 — o CSS usa aspect-ratio 16/10 + object-fit cover).
  Use resize_window para 1600x1000 antes de capturar.
- PNG.
- Tema claro, zoom 100%.
- Dado real na tela: nada de estado vazio, "nenhum resultado", lorem ipsum, skeleton ou spinner.
- Sem devtools, sem overlay de erro do Vite/Next, sem console aberto.
- Sem dado sensível: chave de API, token, e-mail ou telefone real, path do usuário Windows.

DEPOIS DE SALVAR
Edite C:\Users\Site5\Repositório\portfolio-arthur\src\data\projects.js. No objeto com o slug
do projeto, sempre com caminho relativo a public/projects/:
    image:   '<slug>/<melhor>.png'                          // capa: card + topo do detalhe
    gallery: ['<slug>/<outro>.png', '<slug>/<outro2>.png']  // demais telas do detalhe
Depois adicione a legenda de cada print em src/context/LanguageContext.js, em projects.shots,
NAS DUAS LÍNGUAS (pt e en), indexada pelo caminho do arquivo. Uma frase por print, dizendo o
que a tela mostra. Sem travessão.
Me mostre todos os prints no final e diga qual você escolheu como capa e por quê.
```

---

## 1. Portal do Professor — ✅ feito

Pasta: `public/projects/portal-professor/` — `notas.png` (em uso) e `dashboard.png`.

Para trocar qual aparece no site, edite `image` em `src/data/projects.js` para
`'portal-professor/dashboard.png'`. Só refaça a captura se quiser outra tela:

<details>
<summary>Prompt original</summary>

```
Preciso de um screenshot de produto do "Portal do Professor" para o meu portfólio.
[cole o PROMPT BASE acima, com slug = portal-professor]

CONTEXTO
- Código local: C:\Users\Site5\Portal (frontend React+TS+Vite em frontend/, backend FastAPI em
  backend/, Supabase em supabase/). Rodar: docker-compose up, ou uvicorn no backend +
  `npm run dev` no frontend/, com o seed rodado antes.
- Demo ao vivo: https://portalprofessor.vercel.app
- Contas de seed (README.md + backend/scripts/seed.py): admin@escola.com, coord1@escola.com,
  prof1@escola.com — senhas em SEED_ADMIN_PASSWORD / SEED_DEFAULT_PASSWORD no .env

O QUE FAZER
1. Tente a demo ao vivo primeiro (mais barato). Se não logar, suba local.
2. Logue como COORDENADOR (coord1@escola.com) — é o perfil com mais tela cheia de dado.
3. Capture /dashboard (métricas + gráfico + tabela de módulos) e /grades (grade de notas).
   As duas telas precisam mostrar a sidebar com o menu completo.
```

</details>

---

## 2. Nielsen Analytics — capa pronta, falta a tela dos achados

A capa (`dashboard.png`) já está no site. Falta o enquadramento rolado até a lista de achados, que
foi capturado numa sessão anterior mas **nunca chegou a ser salvo em disco**, e o clone temporário
que gerou o relatório já foi apagado. Não dá para exportar de novo: precisa reexecutar o pipeline.

```
Preciso reexecutar a auditoria do "Nielsen Analytics" e salvar DOIS enquadramentos do relatório
para o meu portfólio.

PASTA DE DESTINO
C:\Users\Site5\Repositório\portfolio-arthur\public\projects\nielsen-analytics\
Já existe e já contém dashboard.png (a capa atual, de uma execução anterior).
NÃO sobrescreva dashboard.png sem me perguntar. Ver a seção "ENTREGA" no fim.

CONTEXTO
- Repo: https://github.com/P4d1lh4/Nielsen-analytics (NÃO está clonado nesta máquina)
- É o `ux-audit`: um CLI em TypeScript que audita usabilidade em três fases. O Playwright dirige
  um Chromium headless por um fluxo descrito em YAML e grava screenshot, árvore ARIA e DOM limpo;
  um modelo multimodal analisa essa evidência; e a terceira fase gera um dashboard HTML de arquivo
  único com as heurísticas de Nielsen e a WCAG 2.1.
- O que interessa é o RELATÓRIO HTML GERADO, não o terminal.

CUSTO, LEIA ANTES DE RODAR
O CLI tem dois motores. O padrão é `agent-sdk`, que usa o Claude Code já autenticado e é cobrado
no plano. O outro é `api`, que cobra por token e exige AI_API_KEY. Use `agent-sdk`. Só troque para
`api` se o agent-sdk falhar, e nesse caso me avise antes.

O QUE FAZER
1. Clone o repo numa pasta temporária e leia o README. `npm install` e `npm run build`.
2. Escreva um YAML de config apontando para https://portalprofessor.vercel.app, viewport
   1366x768, com um fluxo de ~5 passos passando pela tela de login (goto, wait, type, click,
   wait). A execução anterior auditou exatamente esse alvo, então manter o mesmo alvo faz os
   dois prints combinarem com o que já está no site.
3. Rode o pipeline completo:
       node dist/index.js pipeline --config <seu.yaml> --engine agent-sdk --model claude-opus-5
   O modelo importa: o relatório imprime o nome dele no canto superior direito, e a capa atual
   diz claude-opus-5.
4. Abra o HTML gerado (fica em .ux-audit-reports/<timestamp>_<target>/) no browser, viewport
   1600x1000, e capture DOIS enquadramentos DA MESMA EXECUÇÃO:
   a) capa: topo do relatório, com o resumo (passos, analisados, violações) e os chips de
      severidade visíveis, mais a sidebar de passos e a primeira evidência;
   b) achados: rolado até a lista de violações, mostrando pelo menos dois achados completos com
      heurística, severidade, seletor do elemento e o bloco de correção sugerida em código.
   Os dois têm que sair da mesma execução. Se vierem de execuções diferentes, os números do
   topo não batem com a lista de baixo e fica visivelmente inconsistente na página.

ESPECIFICAÇÃO DAS IMAGENS
- 1600x1000 px exatos (16:10). resize_window antes de capturar. PNG. Tema claro, zoom 100%.
- Relatório com achados de verdade. Relatório vazio "0 issues" não serve.
- Sem chave de API, sem path do meu usuário Windows, sem overlay de erro.

ENTREGA
1. Salve o enquadramento (b) como achados.png na pasta de destino.
2. Salve o enquadramento (a) como dashboard-novo.png, NÃO como dashboard.png.
3. Me mostre os dois e o dashboard.png atual, lado a lado, e me diga qual capa ficou melhor.
   Só depois que eu responder é que você renomeia dashboard-novo.png para dashboard.png (ou
   apaga, se a antiga ganhar).
4. Em src/data/projects.js, no objeto com slug 'nielsen-analytics':
       gallery: ['nielsen-analytics/achados.png'],
5. Em src/context/LanguageContext.js, em projects.shots, adicione a legenda de achados.png nas
   DUAS línguas (pt e en), uma frase dizendo o que a tela mostra. Sem travessão.
6. Apague a pasta temporária do clone.
```

---

## 3. Mirai — capa pronta, falta galeria

Pasta: `public/projects/mirai/` — `chat.png` é a capa: conversa da cesta de café da manhã com os
produtos recomendados.

```
Preciso de MAIS telas do Mirai para a galeria da página de detalhe do meu portfólio.

PASTA DE DESTINO
C:\Users\Site5\Repositório\portfolio-arthur\public\projects\mirai\
Já existe e já tem a capa (chat.png). Não sobrescreva. Salve os PNGs novos ali, nome descritivo
em minúsculo.

ESPECIFICAÇÃO DA IMAGEM
- 1600x1000 px exatos (16:10). resize_window antes de capturar. PNG. Tema claro, zoom 100%.
- Tela com dado real. Lista vazia, spinner ou toast de erro no frame não serve.
- Sem GROQ_API_KEY, SERPAPI_KEY nem path do meu usuário Windows visível.

CONTEXTO
- Projeto PRIVADO, não está clonado em C:\Users\Site5 e não tem repo público.
- Next.js + React + Tailwind no front, FastAPI + Python no back, SQLite, LLM via Groq,
  preço em tempo real via SerpApi.

PRIMEIRO PASSO — OBRIGATÓRIO
Procure a pasta do Mirai no disco (C:\Users\Site5 e subpastas de 1 nível). Se não achar, PARE e
me pergunte o caminho ou a URL do repo privado. Não invente e não faça mockup.

O QUE FAZER
1. Suba back e front conforme o README. Se faltar chave de API, me avise antes de tentar rodar.
2. Capture, viewport 1600x1000:
   a) a Cesta Inteligente montada, com produtos e o total do orçamento;
   b) a tela de Listas salvas, com mais de uma lista;
   c) Encartes ou Alertas, se tiverem conteúdo real.
   Duas dessas três já bastam.

DEPOIS DE SALVAR
Edite C:\Users\Site5\Repositório\portfolio-arthur\src\data\projects.js: no objeto com slug
'mirai', preencha o array `gallery` com os arquivos novos (chat.png continua em `image`).
Adicione a legenda de cada um em src/context/LanguageContext.js, em projects.shots, nas duas
línguas. Me mostre os prints.
```

---

## 4. Análise de Dados para Entregadores — falta tudo

```
Preciso de um screenshot de produto do projeto "Análise de Dados para Entregadores" para o meu
portfólio.

PASTA DE DESTINO
C:\Users\Site5\Repositório\portfolio-arthur\public\projects\entregadores\
Já existe e está vazia. Salve os PNGs lá dentro, nome descritivo em minúsculo.

ESPECIFICAÇÃO DA IMAGEM
- 1600x1000 px exatos (16:10). resize_window antes de capturar. PNG. Tema claro, zoom 100%.
- Gráfico sem dado ou mapa cinza vazio não serve.
- Sem chave do Supabase/OpenAI visível, sem endereço real de cliente, sem overlay de erro do Vite.

CONTEXTO
- Código local: C:\Users\Site5\projeto-entregador\Projeto-para-entregadores
- Repo: https://github.com/P4d1lh4/Projeto-para-entregadores
- Vite + React + TS + Tailwind, Supabase, Leaflet (mapas), Recharts (gráficos), OpenAI (assistente).
- Páginas em src/pages/: Analytics, Dashboard, Drivers, MapView, RouteHeatMapPage,
  DeliveryAnalysis, AIAnalysis, Companies, DataImport, Settings.

O QUE FAZER
1. Leia o README e o .env.example. `npm install` e `npm run dev`. Precisa das credenciais do
   Supabase no .env — se não estiverem lá, me avise antes de prosseguir.
2. Confirme que tem dado no banco. Se as telas vierem vazias, use DataImport ou os scripts
   check_data.js / regenerate_data.js na raiz para popular um dataset de exemplo.
3. Capture TRÊS telas:
   a) a rota de mapa (MapView ou RouteHeatMapPage) — o heatmap de rotas é a tela mais
      visualmente distinta e é o que diferencia esse projeto dos outros do portfólio;
   b) /analytics — dashboard com os gráficos e métricas do Recharts;
   c) AIAnalysis ou Drivers, com dado carregado.
   No mapa: enquadre com bastante rota/ponto visível, zoom num centro urbano, não no oceano.

DEPOIS DE SALVAR
Edite C:\Users\Site5\Repositório\portfolio-arthur\src\data\projects.js, no objeto com slug
'entregadores':
    image:   'entregadores/mapa.png'                              // o mapa é a capa
    gallery: ['entregadores/analytics.png', 'entregadores/...']   // as outras
Adicione a legenda de cada print em src/context/LanguageContext.js, em projects.shots, nas duas
línguas. Esse projeto está com `status: 'draft'` e não aparece no site. Deixe como está, eu
decido depois se publico. Me mostre os três prints.
```

---

## Conferir no final

```bash
cd "C:/Users/Site5/Repositório/portfolio-arthur" && npm start
```

Veja a seção de projetos com os prints lado a lado, e depois abra cada página de detalhe em
`/projetos/<slug>` para conferir a galeria. Se algum print destoar (tema, densidade de informação
muito diferente, corte estranho no 16:10), refaça só aquele.
