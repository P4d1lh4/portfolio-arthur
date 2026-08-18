import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  pt: {
    docTitle: 'Arthur Padilha — Desenvolvedor Full-Stack',
    nav: {
      brand: 'Arthur Padilha',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Sobre', path: '/sobre' },
        { label: 'Experiência', path: '/experiencias' },
        { label: 'Projetos', path: '/projetos' },
        { label: 'Contato', path: '/contato' },
      ],
      cv: 'Baixar CV',
      menu: 'Menu',
      skip: 'Pular para o conteúdo',
    },
    explore: {
      eyebrow: 'Navegue',
      title: 'Explore',
      cta: 'Abrir',
      cards: [
        { path: '/sobre', title: 'Sobre', desc: 'Quem sou e como trabalho' },
        { path: '/experiencias', title: 'Experiência', desc: 'Trajetória profissional e formação' },
        { path: '/projetos', title: 'Projetos', desc: 'Trabalhos selecionados, com código e demo' },
        { path: '/contato', title: 'Contato', desc: 'E-mail, WhatsApp e redes' },
      ],
    },
    hero: {
      available: 'Disponível para novas oportunidades',
      titleParts: [
        { t: 'Transformo ' },
        { t: 'dados', accent: true },
        { t: ' em ' },
        { t: 'produtos digitais', accent: true },
        { t: '.' },
      ],
      subtitle:
        'Desenvolvedor full-stack e estudante de Ciência da Computação (CESAR School). Construo aplicações web completas — do front-end em React a APIs em FastAPI e Node.js — com foco em dados, IA e código limpo.',
      ctaProjects: 'Ver projetos',
      ctaCv: 'Baixar CV',
      metrics: [
        { value: 'Recife, PE', label: 'Brasil' },
        { value: 'Front-end', label: '@ Seaway' },
        { value: 'CC · 8º', label: 'CESAR School' },
      ],
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Sobre mim',
      bio: [
        'Sou desenvolvedor e estudante de Ciência da Computação na CESAR School, em Recife. Trabalho como desenvolvedor front-end na Seaway e já atuei em estágio full-stack, criando APIs e interfaces em times ágeis.',
        'Meu foco é unir desenvolvimento web a dados: gosto de transformar dados brutos em produtos úteis, seja um dashboard de análise, um sistema acadêmico com autenticação e testes, ou uma ferramenta com IA. Valorizo código limpo, testável e bem documentado.',
      ],
      factsLabel: 'Perfil',
      facts: [
        { k: 'Localização', v: 'Recife, PE · Brasil' },
        { k: 'Formação', v: 'Ciência da Computação — CESAR School' },
        { k: 'Idiomas', v: 'Português (nativo), Inglês (avançado)' },
        { k: 'Foco', v: 'Full-stack · Dados · IA' },
      ],
      softLabel: 'Soft skills',
      soft: ['Comunicação', 'Organização', 'Adaptabilidade', 'Trabalho em equipe', 'Proatividade', 'Resolução de problemas'],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Tecnologias',
      subtitle: 'Ferramentas que uso no dia a dia para construir e entregar.',
      groups: [
        { name: 'Linguagens', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C'] },
        { name: 'Front-end', items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
        { name: 'Back-end', items: ['Node.js', 'Express', 'FastAPI', 'Flask'] },
        { name: 'Dados & IA', items: ['Power BI', 'APIs de LLM (Claude, Groq, OpenAI)', 'Recharts', 'Pandas'] },
        { name: 'DevOps & Ferramentas', items: ['Git', 'GitHub', 'Docker', 'Supabase', 'GitHub Actions', 'ServiceNow'] },
      ],
    },
    projects: {
      eyebrow: 'Trabalhos',
      title: 'Projetos em destaque',
      subtitle: 'Uma seleção de projetos que mostram como trabalho — do back-end à experiência final.',
      featured: 'Destaque',
      viewCode: 'Ver código',
      viewDemo: 'Demo ao vivo',
      viewDetails: 'Ver detalhes',
      privateNote: 'Repositório privado',
      shotSoon: 'Screenshot em breve',
      moreTitle: 'Quer ver mais?',
      moreText: 'Meus outros repositórios e contribuições estão no GitHub.',
      moreBtn: 'Ver GitHub',
      // Legendas das imagens, indexadas pelo caminho em public/projects/.
      shots: {
        'portal-professor/notas.png': 'Lançamento de notas e faltas, com edição inline na grade e status calculado por aluno.',
        'portal-professor/dashboard.png': 'Dashboard do coordenador: métricas do período, distribuição de notas e aproveitamento por módulo.',
        'nielsen-analytics/dashboard.png': 'Relatório gerado pelo CLI: violações por passo, severidade e a evidência capturada pelo Playwright.',
        'nielsen-analytics/achados.png': 'Lista de violações de um passo: heurística de Nielsen, severidade, seletor do elemento e o trecho de código sugerido para corrigir.',
        'mirai/chat.png': 'Conversa com a IA montando uma cesta dentro do orçamento, com a justificativa de cada produto.',
      },
      items: {
        'portal-professor': {
          category: 'Full-stack · Web app',
          title: 'Portal do Professor',
          description:
            'Sistema acadêmico para gestão de alunos, disciplinas, notas e faltas, com três perfis de acesso (admin, coordenador e professor).',
          highlights: [
            'Três perfis de acesso com permissões distintas',
            'Autenticação JWT + Row-Level Security no Supabase',
            '157 testes automatizados (pytest) e CI com GitHub Actions',
            'Deploy com Docker Compose e demo ao vivo na Vercel',
          ],
          detail: {
            tagline:
              'Reconstrução de um sistema acadêmico legado em Flask, SQLite e Bootstrap, agora com React, FastAPI e Postgres, e com autorização em duas camadas.',
            summary: [
              'O Portal nasceu de um sistema que a instituição já usava, escrito em Flask com SQLite e Bootstrap 5. A proposta foi refazer a base sem perder as regras de negócio: React com TypeScript no front, FastAPI no back e Supabase (PostgreSQL) no banco.',
              'São três perfis com escopos diferentes. O admin gerencia usuários, períodos e vê o log de auditoria. O coordenador cuida dos módulos, alunos e importações do período. O professor enxerga apenas os próprios módulos. Cada papel tem seu conjunto de rotas, e a diferença entre eles é garantida no servidor, não só na interface.',
            ],
            how: [
              {
                t: 'Login pelo Supabase Auth',
                d: 'A autenticação acontece no Supabase. O token JWT volta para o front e acompanha toda chamada à API.',
              },
              {
                t: 'Validação do token no servidor',
                d: 'O FastAPI valida a assinatura do JWT a cada request usando o JWKS do Supabase (RS256 e ES256, com HS256 mantido por compatibilidade). Nenhum dado é servido só porque o front pediu.',
              },
              {
                t: 'Autorização em duas camadas',
                d: 'Uma dependência do FastAPI barra o papel errado antes do handler rodar. Abaixo dela, o Row Level Security do Postgres barra de novo, agora no banco. Um professor que passasse da primeira camada continuaria sem ler dados de outro módulo.',
              },
              {
                t: 'Escrita direta fechada',
                d: 'A última migration revoga escrita via PostgREST para as roles anon e authenticated. Toda alteração passa pelo backend, que usa a service role key e nunca a expõe ao cliente.',
              },
              {
                t: 'Cache e formulários no front',
                d: 'O TanStack Query cuida de cache, invalidação e refetch das listas. Os formulários usam React Hook Form com schema Zod, então nota fora do intervalo nem chega a sair do navegador.',
              },
            ],
            stack: [
              {
                g: 'Front-end',
                items: [
                  { n: 'React 18 + TypeScript', d: 'SPA com rotas lazy e uma rota protegida por papel.' },
                  { n: 'Vite', d: 'Dev server e build.' },
                  { n: 'Tailwind + shadcn/ui', d: 'Base dos componentes de interface.' },
                  { n: 'TanStack Query v5', d: 'Cache de servidor, invalidação e refetch.' },
                  { n: 'React Hook Form + Zod', d: 'Validação de formulário no cliente.' },
                  { n: 'Recharts', d: 'Gráfico de distribuição de notas do dashboard.' },
                ],
              },
              {
                g: 'Back-end',
                items: [
                  { n: 'FastAPI 0.115', d: 'API REST com Swagger gerado em /api/docs.' },
                  { n: 'Pydantic v2', d: 'Schemas de entrada e saída, arredondamento e clamp de nota.' },
                  { n: 'supabase-py 2.8', d: 'Acesso ao Postgres e à Admin API.' },
                  { n: 'JWT via JWKS', d: 'Validação de assinatura por chave pública, a cada request.' },
                ],
              },
              {
                g: 'Dados',
                items: [
                  { n: 'Supabase PostgreSQL', d: 'Banco e autenticação.' },
                  { n: 'Row Level Security', d: 'Policies granulares por papel em todas as tabelas.' },
                  { n: '11 migrations SQL', d: 'Schema, RLS, atestados, faltas, auditoria, RPC transacional, CHECK constraints e índices de busca.' },
                ],
              },
              {
                g: 'Qualidade e deploy',
                items: [
                  { n: 'pytest 8.3', d: '157 testes no backend, distribuídos em 26 arquivos.' },
                  { n: 'vitest', d: 'Testes do front.' },
                  { n: 'GitHub Actions', d: 'CI com cobertura mínima de 50%.' },
                  { n: 'Docker Compose', d: 'Sobe front e back juntos para rodar local.' },
                ],
              },
            ],
            build: [
              {
                t: 'Modelagem do banco e das permissões',
                d: 'Onze migrations versionadas, da criação do schema até o fechamento da escrita direta. As policies de RLS são granulares por papel, não um using(true) de fachada.',
              },
              {
                t: 'API com autorização testada',
                d: 'Escrevi os routers de usuários, períodos, módulos, alunos, notas, frequência, atestados, relatórios, exportação e auditoria, junto com os testes que provam o isolamento: professor não lê aluno de outro módulo, request sem token responde 403 e token inválido responde 401.',
              },
              {
                t: 'Regra de nota e classificação',
                d: 'Cálculo da média final e a classificação em aprovado, recuperação ou reprovado por faltas, com testes cobrindo os valores de fronteira.',
              },
              {
                t: 'Importação de CSV que aguenta arquivo real',
                d: 'Parser tolerante a BOM, ponto e vírgula e Latin-1, com dry run antes de gravar. Na exportação eu neutralizo fórmulas, para o arquivo não virar CSV injection quando alguém abre no Excel.',
              },
              {
                t: 'Interface por papel',
                d: 'Sidebar, rotas protegidas e as telas de lançamento de notas e chamada, com edição inline na grade em vez de um formulário por aluno.',
              },
            ],
          },
        },
        'nielsen-analytics': {
          category: 'IA · Automação · QA',
          title: 'Nielsen Analytics',
          description:
            'CLI que audita usabilidade combinando automação de navegador e um LLM multimodal: navega por fluxos, captura evidências e gera um relatório com as heurísticas de Nielsen e WCAG 2.1.',
          highlights: [
            'Automação de navegador com Playwright (headless)',
            'Análise multimodal com a API da Anthropic (Claude)',
            'Validação de schema com Zod e CLI com Commander',
            'Relatório em dashboard HTML interativo + Docker',
          ],
          detail: {
            tagline:
              'Três fases separadas de propósito: captura determinística, análise multimodal com LLM e um dashboard HTML de arquivo único.',
            summary: [
              'A ideia central é separar o que precisa ser reproduzível do que precisa ser interpretado. A captura não usa IA nenhuma: um Chromium headless executa um fluxo descrito em YAML e grava evidência crua. Só depois um modelo multimodal lê essa evidência e aponta as violações.',
              'O resultado é um relatório com as heurísticas de Nielsen e critérios da WCAG 2.1, onde cada achado traz severidade de 1 a 4, o seletor do elemento e uma sugestão de correção em código.',
            ],
            how: [
              {
                t: 'Fase 1, captura',
                d: 'O Playwright percorre o fluxo do YAML (goto, type, click, wait) e grava três artefatos por passo: screenshot do viewport, árvore de acessibilidade e o DOM limpo, sem script, style e comentário. Tudo cai numa pasta com timestamp, indexada por um session-manifest.json. Ação com seletor expira em 5s, navegação em 30s, e um passo que falha interrompe o fluxo.',
              },
              {
                t: 'Fase 2, análise',
                d: 'Cada passo vira um payload multimodal: screenshot em base64, DOM e árvore ARIA no mesmo prompt. Os três juntos porque cada um mostra um lado do problema. A imagem mostra o que o usuário vê, o ARIA mostra o que o leitor de tela anuncia e o DOM mostra o que o código declara.',
              },
              {
                t: 'Saída forçada por schema',
                d: 'A resposta do modelo é validada com Zod contra um schema de auditoria. Em vez de texto livre que alguém precisa reler, sai JSON com heuristic, severity, element_selector e suggested_code_fix, pronto para consumir por programa.',
              },
              {
                t: 'Fase 3, dashboard',
                d: 'Um HTML de arquivo único junta o manifesto da captura com o relatório. O conteúdo é montado com textContent e caracteres especiais são escapados, então texto vindo da página auditada não vira injeção dentro do relatório.',
              },
              {
                t: 'Tudo de uma vez',
                d: 'O comando pipeline roda as três fases a partir de um único arquivo de config, com fail-fast se a captura ou a análise quebrar.',
              },
            ],
            stack: [
              {
                g: 'Núcleo do CLI',
                items: [
                  { n: 'TypeScript + Node.js', d: 'Base do projeto, compilado para dist/.' },
                  { n: 'Playwright', d: 'Dirige o Chromium headless e captura screenshot, ARIA e DOM.' },
                  { n: 'Commander', d: 'Comandos e flags do CLI (run, analyze, report, pipeline).' },
                  { n: 'Zod', d: 'Valida o YAML de config por união discriminada e a resposta do LLM.' },
                ],
              },
              {
                g: 'Camada de IA',
                items: [
                  { n: 'Anthropic SDK', d: 'Chamada multimodal ao Claude, com prompt caching do system prompt entre os passos.' },
                  { n: 'Motor agent-sdk', d: 'Usa o Claude Code já autenticado, cobrado no plano.' },
                  { n: 'Motor api', d: 'Chama a API direto com uma chave, cobrado por token.' },
                ],
              },
              {
                g: 'Camada de serviço (opcional)',
                items: [
                  { n: 'Express', d: 'API HTTP que enfileira auditorias.' },
                  { n: 'BullMQ + Redis', d: 'Fila de jobs e worker em background.' },
                  { n: 'PostgreSQL + Prisma', d: 'Persistência dos relatórios.' },
                  { n: 'S3 ou MinIO', d: 'Armazenamento dos screenshots com URL assinada.' },
                ],
              },
              {
                g: 'Qualidade',
                items: [
                  { n: 'node:test via tsx', d: 'Suíte de testes sem framework extra.' },
                  { n: 'typecheck', d: 'Checagem de tipos separada do build.' },
                  { n: 'GitHub Actions', d: 'Typecheck, teste e build em cada push e PR.' },
                ],
              },
            ],
            build: [
              {
                t: 'Tirei a IA da captura',
                d: 'A fase 1 é totalmente determinística. O mesmo YAML produz a mesma evidência, o que deixa auditar o que o modelo viu e reexecutar a análise sem precisar navegar de novo.',
              },
              {
                t: 'Montei o payload multimodal',
                d: 'Combinar screenshot, DOM e árvore ARIA no mesmo prompt encontra problema que nenhum dos três encontra sozinho, como um botão que parece certo na tela mas não tem nome acessível.',
              },
              {
                t: 'Forcei saída estruturada',
                d: 'Schema Zod em cima da resposta do modelo, para o relatório ser dado consumível e não redação.',
              },
              {
                t: 'Cuidei da resiliência',
                d: 'Falha do LLM em um passo é registrada e a análise segue nos outros. O processo termina com exit code 1 para o CI saber que houve problema.',
              },
              {
                t: 'Escrevi o dashboard',
                d: 'HTML de arquivo único, sem build e sem servidor, para o relatório poder ser anexado e aberto em qualquer lugar.',
              },
            ],
          },
        },
        mirai: {
          category: 'IA · Full-stack',
          title: 'Mirai — Assistente de Compras com IA',
          description:
            'Personal shopper digital para otimização de compras e gestão financeira: o usuário conversa com uma IA que pesquisa preços em tempo real e monta a “Cesta Inteligente”.',
          highlights: [
            'IA conversacional para recomendação de produtos',
            'Pesquisa de preços em tempo real (SerpApi)',
            'Cesta Inteligente: criar, salvar e gerir listas',
            'Back-end em FastAPI com LLM (Groq)',
          ],
          detail: {
            tagline:
              'Troca o formulário de busca por uma conversa: o usuário diz o que precisa e o orçamento, a IA pesquisa preço real e monta a lista.',
            summary: [
              'Em vez de filtrar produto a produto, o usuário descreve a necessidade e o quanto pode gastar. A IA devolve uma lista com a justificativa de cada item, e não apenas o nome do produto.',
              'O diferencial é a recomendação vir amarrada a preço real. A busca acontece no momento da consulta, então a sugestão não fica presa a um catálogo velho, e o resultado vira uma lista salva, a Cesta Inteligente.',
            ],
            how: [
              {
                t: 'A conversa no front',
                d: 'Interface em Next.js e React com Tailwind. O chat ocupa o centro da tela e as recomendações aparecem logo abaixo da resposta, cada produto com o motivo de ter sido escolhido.',
              },
              {
                t: 'Interpretação do pedido',
                d: 'O back em FastAPI envia a conversa para um LLM hospedado na Groq, que extrai o que o usuário quer, o teto de orçamento e as restrições declaradas.',
              },
              {
                t: 'Preço em tempo real',
                d: 'Com os itens definidos, a SerpApi busca as ofertas no momento da consulta e devolve o preço que alimenta a recomendação.',
              },
              {
                t: 'Cesta Inteligente',
                d: 'As listas podem ser criadas, salvas e gerenciadas, com persistência em SQLite.',
              },
            ],
            stack: [
              {
                g: 'Front-end',
                items: [
                  { n: 'Next.js + React', d: 'Aplicação e roteamento.' },
                  { n: 'Tailwind CSS', d: 'Estilo e layout da conversa.' },
                ],
              },
              {
                g: 'Back-end',
                items: [
                  { n: 'FastAPI + Python', d: 'API da conversa e da cesta.' },
                  { n: 'SQLite', d: 'Persistência das listas salvas.' },
                ],
              },
              {
                g: 'IA e dados',
                items: [
                  { n: 'Groq API', d: 'LLM da conversa, escolhido pela latência baixa na resposta.' },
                  { n: 'SerpApi', d: 'Pesquisa de preço em tempo real.' },
                ],
              },
              {
                g: 'Infra',
                items: [{ n: 'Docker', d: 'Empacota front e back para rodar igual em qualquer máquina.' }],
              },
            ],
            build: [
              {
                t: 'Desenhei o fluxo de conversa',
                d: 'A IA faz perguntas de acompanhamento antes de recomendar, para chegar em quantidade, marca e orçamento sem obrigar o usuário a preencher formulário.',
              },
              {
                t: 'Amarrei recomendação a preço',
                d: 'A resposta do LLM só vira sugestão depois de passar pela busca de preço, para a lista caber no orçamento que o usuário declarou.',
              },
              {
                t: 'Montei a Cesta Inteligente',
                d: 'A conversa termina em algo que persiste: uma lista salva, editável e recuperável, em vez de uma resposta que some quando a aba fecha.',
              },
            ],
          },
        },
        entregadores: {
          category: 'Full-stack · Dados',
          title: 'Análise de Dados para Entregadores',
          description:
            'Plataforma de análise de dados de entregas com dashboard interativo, visualização geográfica e um assistente de IA para insights.',
          highlights: [
            'Dashboard com gráficos e métricas',
            'Visualização de rotas em mapas (Leaflet)',
            'Assistente de IA para insights (OpenAI)',
            'Persistência e auth com Supabase',
          ],
          detail: {
            tagline:
              'Transforma o CSV exportado da operação em três leituras: os números, a geografia e a pergunta em linguagem natural.',
            summary: [
              'O ponto de partida é sempre um CSV vindo da operação. A plataforma aceita upload de vários arquivos, normaliza os dados e, a partir daí, abre três formas de olhar para eles: o dashboard com os números, o mapa com a geografia e o assistente para perguntar em texto.',
              'A camada que mais mudou o uso foi a geográfica. Ver as rotas e a densidade de entregas desenhadas em cima da cidade responde perguntas que uma tabela não responde, como onde a operação se concentra e onde o tempo se perde.',
            ],
            how: [
              {
                t: 'Importação',
                d: 'A tela de Data Import aceita upload múltiplo de CSV, com armazenamento local dimensionado para até 50 MB de dados.',
              },
              {
                t: 'Números',
                d: 'A página de Analytics reúne os KPIs da operação e os gráficos, construídos com Recharts.',
              },
              {
                t: 'Geografia',
                d: 'O Leaflet com tiles do OpenStreetMap desenha as rotas no mapa, e uma página dedicada mostra o heat map de densidade de entregas.',
              },
              {
                t: 'Pergunta aberta',
                d: 'O assistente recebe o contexto do dataset carregado e responde via API da OpenAI, para perguntar sobre os dados em vez de montar filtro na mão.',
              },
              {
                t: 'Persistência',
                d: 'O Supabase guarda os dados e cuida da autenticação.',
              },
            ],
            stack: [
              {
                g: 'Front-end',
                items: [
                  { n: 'React 18 + TypeScript', d: 'Base da aplicação.' },
                  { n: 'Vite', d: 'Dev server e build.' },
                  { n: 'Tailwind + shadcn/ui', d: 'Componentes de interface.' },
                ],
              },
              {
                g: 'Visualização',
                items: [
                  { n: 'Recharts', d: 'Gráficos e métricas do dashboard.' },
                  { n: 'Leaflet + OpenStreetMap', d: 'Mapa de rotas e heat map de densidade.' },
                ],
              },
              {
                g: 'Dados e IA',
                items: [
                  { n: 'Supabase', d: 'Banco e autenticação.' },
                  { n: 'OpenAI', d: 'Assistente que analisa o dataset carregado.' },
                ],
              },
            ],
            build: [
              {
                t: 'Separei as páginas por pergunta',
                d: 'Analytics para número, mapa e heat map para geografia, Drivers para desempenho por entregador e a análise com IA para pergunta aberta. Cada tela responde uma coisa, em vez de um painel único tentando responder tudo.',
              },
              {
                t: 'Fiz a camada geográfica',
                d: 'Desenho das rotas sobre o mapa e o heat map de densidade, que é a leitura mais direta de onde a operação concentra entrega.',
              },
              {
                t: 'Tratei a importação',
                d: 'Upload múltiplo de CSV com normalização, porque na prática os arquivos chegam de fontes diferentes e em formatos que não combinam.',
              },
            ],
          },
        },
      },
    },
    projectDetail: {
      back: 'Todos os projetos',
      summaryTitle: 'O que é',
      howTitle: 'Como funciona',
      stackTitle: 'A stack, peça por peça',
      buildTitle: 'O que eu construí',
      galleryTitle: 'Mais telas',
      nextLabel: 'Próximo projeto',
      yearLabel: 'Ano',
      techLabel: 'Tecnologias',
      notFoundTitle: 'Projeto não encontrado',
      notFoundText: 'Esse endereço não corresponde a nenhum projeto publicado.',
      notFoundCta: 'Ver todos os projetos',
    },
    experience: {
      eyebrow: 'Trajetória',
      title: 'Experiência',
      current: 'Atual',
      items: [
        {
          role: 'Desenvolvedor Front-end',
          company: 'Seaway',
          period: 'Jul 2025 — Atual',
          description:
            'Desenvolvimento e manutenção da aplicação web em React: ajuste de layouts, correção de bugs e otimização das rotas do usuário.',
        },
        {
          role: 'Desenvolvedor Full-stack (Estágio)',
          company: 'WebStar',
          period: 'Mai 2025 — Jul 2025',
          description:
            'APIs RESTful em Node.js/Express, interfaces em React e integração com bancos de dados SQL e NoSQL, atuando em time ágil.',
        },
        {
          role: 'Auxiliar de Professor — Fundamentos de Programação',
          company: 'NExT / CESAR School',
          period: '2022 — 2023',
          description:
            'Monitoria de programação em Python: apoio a alunos em aulas práticas, correção de exercícios e preparação de materiais didáticos.',
        },
      ],
      talksLabel: 'Palestras & eventos',
      talks: [
        'Palestrante — Introdução ao Python, Olimpíada Brasileira de Robótica (2022)',
        'Palestrante — Frameworks, Maratona de Inovação, CESAR School (2022)',
      ],
      eduLabel: 'Formação',
      education: [
        { course: 'Bacharelado em Ciência da Computação', place: 'CESAR School', period: '2022 — cursando (8º período)' },
        { course: 'Ensino Médio', place: 'Colégio Motivo', period: 'Concluído em 2020' },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      subtitle: 'Estou aberto a novas oportunidades e projetos. A forma mais rápida de me achar é por e-mail ou WhatsApp.',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      location: 'Localização',
      locationValue: 'Recife, PE — Brasil',
      social: 'Redes',
    },
    footer: {
      tagline: 'Desenvolvedor full-stack com foco em dados e IA.',
      built: 'Feito com React',
      back: 'Voltar ao topo',
    },
  },

  en: {
    docTitle: 'Arthur Padilha — Full-Stack Developer',
    nav: {
      brand: 'Arthur Padilha',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/sobre' },
        { label: 'Experience', path: '/experiencias' },
        { label: 'Projects', path: '/projetos' },
        { label: 'Contact', path: '/contato' },
      ],
      cv: 'Download CV',
      menu: 'Menu',
      skip: 'Skip to content',
    },
    explore: {
      eyebrow: 'Browse',
      title: 'Explore',
      cta: 'Open',
      cards: [
        { path: '/sobre', title: 'About', desc: 'Who I am and how I work' },
        { path: '/experiencias', title: 'Experience', desc: 'Professional journey and education' },
        { path: '/projetos', title: 'Projects', desc: 'Selected work, with code and demos' },
        { path: '/contato', title: 'Contact', desc: 'Email, WhatsApp and social' },
      ],
    },
    hero: {
      available: 'Available for new opportunities',
      titleParts: [
        { t: 'I turn ' },
        { t: 'data', accent: true },
        { t: ' into ' },
        { t: 'digital products', accent: true },
        { t: '.' },
      ],
      subtitle:
        'Full-stack developer and Computer Science student (CESAR School). I build complete web applications — from React front-ends to FastAPI and Node.js APIs — focused on data, AI and clean code.',
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
      metrics: [
        { value: 'Recife, PE', label: 'Brazil' },
        { value: 'Front-end', label: '@ Seaway' },
        { value: 'CS · 8th', label: 'CESAR School' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'About me',
      bio: [
        "I'm a developer and Computer Science student at CESAR School in Recife. I work as a front-end developer at Seaway and previously did a full-stack internship, building APIs and interfaces in agile teams.",
        'My focus is blending web development with data: I like turning raw data into useful products — an analytics dashboard, an academic system with auth and tests, or an AI-powered tool. I value clean, testable and well-documented code.',
      ],
      factsLabel: 'Profile',
      facts: [
        { k: 'Location', v: 'Recife, PE · Brazil' },
        { k: 'Education', v: 'Computer Science — CESAR School' },
        { k: 'Languages', v: 'Portuguese (native), English (advanced)' },
        { k: 'Focus', v: 'Full-stack · Data · AI' },
      ],
      softLabel: 'Soft skills',
      soft: ['Communication', 'Organization', 'Adaptability', 'Teamwork', 'Proactivity', 'Problem solving'],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technologies',
      subtitle: 'Tools I use day to day to build and ship.',
      groups: [
        { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C'] },
        { name: 'Front-end', items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'] },
        { name: 'Back-end', items: ['Node.js', 'Express', 'FastAPI', 'Flask'] },
        { name: 'Data & AI', items: ['Power BI', 'LLM APIs (Claude, Groq, OpenAI)', 'Recharts', 'Pandas'] },
        { name: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'Supabase', 'GitHub Actions', 'ServiceNow'] },
      ],
    },
    projects: {
      eyebrow: 'Work',
      title: 'Featured projects',
      subtitle: 'A selection of projects that show how I work — from back-end to final experience.',
      featured: 'Featured',
      viewCode: 'View code',
      viewDemo: 'Live demo',
      viewDetails: 'View details',
      privateNote: 'Private repository',
      shotSoon: 'Screenshot coming soon',
      moreTitle: 'Want to see more?',
      moreText: 'My other repositories and contributions are on GitHub.',
      moreBtn: 'View GitHub',
      // Image captions, keyed by the path under public/projects/.
      shots: {
        'portal-professor/notas.png': 'Grades and absences, edited inline in the grid, with the status recalculated per student.',
        'portal-professor/dashboard.png': 'Coordinator dashboard: term metrics, grade distribution and pass rate per module.',
        'nielsen-analytics/dashboard.png': 'The report the CLI generates: violations per step, severity and the evidence Playwright captured.',
        'nielsen-analytics/achados.png': 'The violation list for a single step: Nielsen heuristic, severity, element selector and the suggested code fix.',
        'mirai/chat.png': 'The AI building a basket within budget, with the reasoning behind each product.',
      },
      items: {
        'portal-professor': {
          category: 'Full-stack · Web app',
          title: 'Portal do Professor',
          description:
            'Academic system to manage students, subjects, grades and absences, with three access roles (admin, coordinator and teacher).',
          highlights: [
            'Three access roles with distinct permissions',
            'JWT auth + Row-Level Security on Supabase',
            '157 automated tests (pytest) and CI with GitHub Actions',
            'Docker Compose deploy and a live demo on Vercel',
          ],
          detail: {
            tagline:
              'A legacy academic system rebuilt off Flask, SQLite and Bootstrap onto React, FastAPI and Postgres, with authorization enforced in two layers.',
            summary: [
              'The Portal started from a system the school already ran, written in Flask with SQLite and Bootstrap 5. The goal was to rebuild the foundation without losing the business rules: React with TypeScript on the front, FastAPI on the back and Supabase (PostgreSQL) for data.',
              'There are three roles with different scopes. Admin manages users, terms and the audit log. Coordinator handles the modules, students and imports for a term. Professor sees only their own modules. Each role gets its own set of routes, and the difference between them is enforced on the server, not just in the UI.',
            ],
            how: [
              {
                t: 'Sign-in through Supabase Auth',
                d: 'Authentication happens in Supabase. The JWT comes back to the front-end and travels with every API call.',
              },
              {
                t: 'Server-side token validation',
                d: 'FastAPI verifies the JWT signature on every request using the Supabase JWKS (RS256 and ES256, with HS256 kept for compatibility). Nothing is served just because the client asked for it.',
              },
              {
                t: 'Authorization in two layers',
                d: 'A FastAPI dependency rejects the wrong role before the handler runs. Underneath it, Postgres Row Level Security rejects again, this time in the database. A professor who got past the first layer still could not read another module data.',
              },
              {
                t: 'Direct writes locked down',
                d: 'The last migration revokes PostgREST write access for the anon and authenticated roles. Every change goes through the backend, which holds the service role key and never exposes it to the client.',
              },
              {
                t: 'Caching and forms on the front',
                d: 'TanStack Query handles caching, invalidation and refetching. Forms use React Hook Form with a Zod schema, so an out-of-range grade never leaves the browser.',
              },
            ],
            stack: [
              {
                g: 'Front-end',
                items: [
                  { n: 'React 18 + TypeScript', d: 'SPA with lazy routes and a role-guarded protected route.' },
                  { n: 'Vite', d: 'Dev server and build.' },
                  { n: 'Tailwind + shadcn/ui', d: 'Foundation for the UI components.' },
                  { n: 'TanStack Query v5', d: 'Server cache, invalidation and refetching.' },
                  { n: 'React Hook Form + Zod', d: 'Client-side form validation.' },
                  { n: 'Recharts', d: 'Grade distribution chart on the dashboard.' },
                ],
              },
              {
                g: 'Back-end',
                items: [
                  { n: 'FastAPI 0.115', d: 'REST API with Swagger generated at /api/docs.' },
                  { n: 'Pydantic v2', d: 'Request and response schemas, grade rounding and clamping.' },
                  { n: 'supabase-py 2.8', d: 'Access to Postgres and the Admin API.' },
                  { n: 'JWT via JWKS', d: 'Public-key signature validation on every request.' },
                ],
              },
              {
                g: 'Data',
                items: [
                  { n: 'Supabase PostgreSQL', d: 'Database and authentication.' },
                  { n: 'Row Level Security', d: 'Granular per-role policies on every table.' },
                  { n: '11 SQL migrations', d: 'Schema, RLS, medical certificates, absences, audit log, transactional RPC, CHECK constraints and search indexes.' },
                ],
              },
              {
                g: 'Quality and deploy',
                items: [
                  { n: 'pytest 8.3', d: '157 backend tests across 26 files.' },
                  { n: 'vitest', d: 'Front-end tests.' },
                  { n: 'GitHub Actions', d: 'CI with a 50% minimum coverage gate.' },
                  { n: 'Docker Compose', d: 'Brings the front and back up together for local runs.' },
                ],
              },
            ],
            build: [
              {
                t: 'Data model and permissions',
                d: 'Eleven versioned migrations, from creating the schema to locking down direct writes. The RLS policies are granular per role, not a using(true) placeholder.',
              },
              {
                t: 'An API whose authorization is tested',
                d: 'I wrote the routers for users, terms, modules, students, grades, attendance, medical certificates, reports, exports and auditing, plus the tests that prove the isolation: a professor cannot read a student from another module, a request with no token returns 403 and an invalid token returns 401.',
              },
              {
                t: 'Grade calculation and classification',
                d: 'Final average and the classification into passed, retake or failed-by-absence, with tests covering the boundary values.',
              },
              {
                t: 'CSV import that survives real files',
                d: 'A parser tolerant of BOM, semicolons and Latin-1, with a dry run before writing. On export I neutralize formulas so the file cannot turn into CSV injection when someone opens it in Excel.',
              },
              {
                t: 'Role-specific interface',
                d: 'Sidebar, protected routes and the grade-entry and attendance screens, editing inline in the grid instead of one form per student.',
              },
            ],
          },
        },
        'nielsen-analytics': {
          category: 'AI · Automation · QA',
          title: 'Nielsen Analytics',
          description:
            'A CLI that audits usability by combining browser automation with a multimodal LLM: it walks through flows, captures evidence and generates a report using Nielsen heuristics and WCAG 2.1.',
          highlights: [
            'Headless browser automation with Playwright',
            'Multimodal analysis with the Anthropic (Claude) API',
            'Schema validation with Zod and a CLI with Commander',
            'Interactive HTML dashboard report + Docker',
          ],
          detail: {
            tagline:
              'Three phases kept deliberately separate: deterministic capture, multimodal LLM analysis and a single-file HTML dashboard.',
            summary: [
              'The core idea is separating what has to be reproducible from what has to be interpreted. Capture uses no AI at all: a headless Chromium runs a flow described in YAML and records raw evidence. Only then does a multimodal model read that evidence and point out the violations.',
              'The output is a report built on Nielsen heuristics and WCAG 2.1 criteria, where each finding carries a severity from 1 to 4, the element selector and a suggested fix in code.',
            ],
            how: [
              {
                t: 'Phase 1, capture',
                d: 'Playwright walks the YAML flow (goto, type, click, wait) and records three artifacts per step: a viewport screenshot, the accessibility tree and a cleaned DOM with scripts, styles and comments stripped. Everything lands in a timestamped folder indexed by a session-manifest.json. Selector actions time out at 5s, navigation at 30s, and a failed step halts the flow.',
              },
              {
                t: 'Phase 2, analysis',
                d: 'Each step becomes a multimodal payload: base64 screenshot, DOM and ARIA tree in the same prompt. All three together because each shows a different side of the problem. The image shows what the user sees, ARIA shows what a screen reader announces and the DOM shows what the code declares.',
              },
              {
                t: 'Schema-enforced output',
                d: 'The model response is validated with Zod against an audit schema. Instead of free text somebody has to reread, it produces JSON with heuristic, severity, element_selector and suggested_code_fix, ready to be consumed programmatically.',
              },
              {
                t: 'Phase 3, dashboard',
                d: 'A single-file HTML merges the capture manifest with the report. Content is built with textContent and special characters are escaped, so text coming from the audited page cannot turn into an injection inside the report.',
              },
              {
                t: 'All at once',
                d: 'The pipeline command runs all three phases from one config file, failing fast if capture or analysis breaks.',
              },
            ],
            stack: [
              {
                g: 'CLI core',
                items: [
                  { n: 'TypeScript + Node.js', d: 'Project foundation, compiled to dist/.' },
                  { n: 'Playwright', d: 'Drives headless Chromium and captures screenshot, ARIA and DOM.' },
                  { n: 'Commander', d: 'CLI commands and flags (run, analyze, report, pipeline).' },
                  { n: 'Zod', d: 'Validates the YAML config as a discriminated union and the LLM response.' },
                ],
              },
              {
                g: 'AI layer',
                items: [
                  { n: 'Anthropic SDK', d: 'Multimodal calls to Claude, with prompt caching for the system prompt across steps.' },
                  { n: 'agent-sdk engine', d: 'Uses the already-authenticated Claude Code, billed to the plan.' },
                  { n: 'api engine', d: 'Calls the API directly with a key, billed per token.' },
                ],
              },
              {
                g: 'Service layer (optional)',
                items: [
                  { n: 'Express', d: 'HTTP API that enqueues audits.' },
                  { n: 'BullMQ + Redis', d: 'Job queue and background worker.' },
                  { n: 'PostgreSQL + Prisma', d: 'Report persistence.' },
                  { n: 'S3 or MinIO', d: 'Screenshot storage with presigned URLs.' },
                ],
              },
              {
                g: 'Quality',
                items: [
                  { n: 'node:test via tsx', d: 'Test suite with no extra framework.' },
                  { n: 'typecheck', d: 'Type checking kept separate from the build.' },
                  { n: 'GitHub Actions', d: 'Typecheck, test and build on every push and PR.' },
                ],
              },
            ],
            build: [
              {
                t: 'I kept AI out of the capture',
                d: 'Phase 1 is fully deterministic. The same YAML produces the same evidence, which makes it possible to audit what the model saw and rerun the analysis without navigating again.',
              },
              {
                t: 'I designed the multimodal payload',
                d: 'Combining screenshot, DOM and ARIA tree in one prompt finds problems none of the three finds alone, like a button that looks right on screen but has no accessible name.',
              },
              {
                t: 'I forced structured output',
                d: 'A Zod schema on top of the model response, so the report is consumable data rather than prose.',
              },
              {
                t: 'I handled resilience',
                d: 'An LLM failure on one step is recorded and the analysis continues on the others. The process exits with code 1 so CI knows something went wrong.',
              },
              {
                t: 'I wrote the dashboard',
                d: 'Single-file HTML, no build and no server, so the report can be attached and opened anywhere.',
              },
            ],
          },
        },
        mirai: {
          category: 'AI · Full-stack',
          title: 'Mirai — AI Shopping Assistant',
          description:
            'A digital personal shopper for purchase optimization and personal finance: users chat with an AI that searches real-time prices and builds a “Smart Basket”.',
          highlights: [
            'Conversational AI for product recommendations',
            'Real-time price search (SerpApi)',
            'Smart Basket: create, save and manage lists',
            'FastAPI back-end with an LLM (Groq)',
          ],
          detail: {
            tagline:
              'Replaces the search form with a conversation: you say what you need and your budget, the AI looks up real prices and assembles the list.',
            summary: [
              'Instead of filtering product by product, you describe the need and how much you can spend. The AI returns a list with the reasoning behind each item, not just a product name.',
              'What makes it different is that recommendations are tied to real prices. The search happens at query time, so suggestions are not locked to a stale catalog, and the result becomes a saved list: the Smart Basket.',
            ],
            how: [
              {
                t: 'The conversation on the front',
                d: 'Next.js and React with Tailwind. The chat sits in the center of the screen and recommendations appear right below the answer, each product with the reason it was picked.',
              },
              {
                t: 'Reading the request',
                d: 'The FastAPI back-end sends the conversation to an LLM hosted on Groq, which extracts what the user wants, the budget ceiling and the stated constraints.',
              },
              {
                t: 'Real-time pricing',
                d: 'Once the items are settled, SerpApi searches for offers at query time and returns the prices that feed the recommendation.',
              },
              {
                t: 'Smart Basket',
                d: 'Lists can be created, saved and managed, persisted in SQLite.',
              },
            ],
            stack: [
              {
                g: 'Front-end',
                items: [
                  { n: 'Next.js + React', d: 'Application and routing.' },
                  { n: 'Tailwind CSS', d: 'Styling and chat layout.' },
                ],
              },
              {
                g: 'Back-end',
                items: [
                  { n: 'FastAPI + Python', d: 'API for the conversation and the basket.' },
                  { n: 'SQLite', d: 'Persistence for saved lists.' },
                ],
              },
              {
                g: 'AI and data',
                items: [
                  { n: 'Groq API', d: 'LLM behind the conversation, chosen for low response latency.' },
                  { n: 'SerpApi', d: 'Real-time price search.' },
                ],
              },
              {
                g: 'Infra',
                items: [{ n: 'Docker', d: 'Packages front and back so they run the same anywhere.' }],
              },
            ],
            build: [
              {
                t: 'I shaped the conversation flow',
                d: 'The AI asks follow-up questions before recommending, so it can settle quantity, brand and budget without forcing the user through a form.',
              },
              {
                t: 'I tied recommendations to price',
                d: 'The LLM answer only becomes a suggestion after passing through price lookup, so the list fits the budget the user stated.',
              },
              {
                t: 'I built the Smart Basket',
                d: 'The conversation ends in something that persists: a saved, editable, retrievable list, instead of an answer that disappears when the tab closes.',
              },
            ],
          },
        },
        entregadores: {
          category: 'Full-stack · Data',
          title: 'Delivery Data Analytics',
          description:
            'Delivery-data analytics platform with an interactive dashboard, geographic visualization and an AI assistant for insights.',
          highlights: [
            'Dashboard with charts and metrics',
            'Route visualization on maps (Leaflet)',
            'AI assistant for insights (OpenAI)',
            'Persistence and auth with Supabase',
          ],
          detail: {
            tagline:
              'Turns the CSV exported from delivery operations into three readings: the numbers, the geography and the plain-language question.',
            summary: [
              'The starting point is always a CSV from operations. The platform takes multiple file uploads, normalizes the data and opens three ways of looking at it: the dashboard for numbers, the map for geography and the assistant for questions in plain text.',
              'The layer that changed how it gets used the most is the geographic one. Seeing routes and delivery density drawn over the city answers questions a table cannot, like where the operation concentrates and where time gets lost.',
            ],
            how: [
              {
                t: 'Import',
                d: 'The Data Import screen accepts multiple CSV uploads, with local storage sized for up to 50 MB of data.',
              },
              {
                t: 'Numbers',
                d: 'The Analytics page gathers the operational KPIs and the charts, built with Recharts.',
              },
              {
                t: 'Geography',
                d: 'Leaflet with OpenStreetMap tiles draws routes on the map, and a dedicated page renders the delivery density heat map.',
              },
              {
                t: 'Open questions',
                d: 'The assistant receives the loaded dataset as context and answers through the OpenAI API, so you can ask about the data instead of building filters by hand.',
              },
              {
                t: 'Persistence',
                d: 'Supabase stores the data and handles authentication.',
              },
            ],
            stack: [
              {
                g: 'Front-end',
                items: [
                  { n: 'React 18 + TypeScript', d: 'Application foundation.' },
                  { n: 'Vite', d: 'Dev server and build.' },
                  { n: 'Tailwind + shadcn/ui', d: 'UI components.' },
                ],
              },
              {
                g: 'Visualization',
                items: [
                  { n: 'Recharts', d: 'Dashboard charts and metrics.' },
                  { n: 'Leaflet + OpenStreetMap', d: 'Route map and density heat map.' },
                ],
              },
              {
                g: 'Data and AI',
                items: [
                  { n: 'Supabase', d: 'Database and authentication.' },
                  { n: 'OpenAI', d: 'Assistant that analyzes the loaded dataset.' },
                ],
              },
            ],
            build: [
              {
                t: 'I split the pages by question',
                d: 'Analytics for numbers, map and heat map for geography, Drivers for per-courier performance and the AI analysis for open questions. Each screen answers one thing, instead of a single panel trying to answer everything.',
              },
              {
                t: 'I built the geographic layer',
                d: 'Route rendering over the map and the density heat map, which is the most direct read on where the operation concentrates deliveries.',
              },
              {
                t: 'I handled the import',
                d: 'Multiple CSV upload with normalization, because in practice the files arrive from different sources in formats that do not line up.',
              },
            ],
          },
        },
      },
    },
    projectDetail: {
      back: 'All projects',
      summaryTitle: 'What it is',
      howTitle: 'How it works',
      stackTitle: 'The stack, piece by piece',
      buildTitle: 'What I built',
      galleryTitle: 'More screens',
      nextLabel: 'Next project',
      yearLabel: 'Year',
      techLabel: 'Technologies',
      notFoundTitle: 'Project not found',
      notFoundText: 'This address does not match any published project.',
      notFoundCta: 'View all projects',
    },
    experience: {
      eyebrow: 'Journey',
      title: 'Experience',
      current: 'Current',
      items: [
        {
          role: 'Front-end Developer',
          company: 'Seaway',
          period: 'Jul 2025 — Present',
          description:
            'Development and maintenance of the web application in React: layout adjustments, bug fixing and optimization of user flows.',
        },
        {
          role: 'Full-stack Developer (Internship)',
          company: 'WebStar',
          period: 'May 2025 — Jul 2025',
          description:
            'RESTful APIs in Node.js/Express, React interfaces and SQL/NoSQL database integration, working in an agile team.',
        },
        {
          role: 'Teaching Assistant — Programming Fundamentals',
          company: 'NExT / CESAR School',
          period: '2022 — 2023',
          description:
            'Python programming assistance: supporting students in practical classes, grading exercises and preparing teaching materials.',
        },
      ],
      talksLabel: 'Talks & events',
      talks: [
        'Speaker — Intro to Python, Brazilian Robotics Olympiad (2022)',
        'Speaker — Frameworks, Innovation Marathon, CESAR School (2022)',
      ],
      eduLabel: 'Education',
      education: [
        { course: 'B.Sc. in Computer Science', place: 'CESAR School', period: '2022 — ongoing (8th semester)' },
        { course: 'High School', place: 'Colégio Motivo', period: 'Completed in 2020' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      subtitle: "I'm open to new opportunities and projects. The fastest way to reach me is by email or WhatsApp.",
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
      locationValue: 'Recife, PE — Brazil',
      social: 'Social',
    },
    footer: {
      tagline: 'Full-stack developer focused on data and AI.',
      built: 'Built with React',
      back: 'Back to top',
    },
  },
};

const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'pt' || saved === 'en') return saved;
  } catch (e) { /* localStorage may be unavailable */ }
  const nav = (typeof navigator !== 'undefined' && navigator.language) || 'pt';
  return nav.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    try { localStorage.setItem('portfolio-language', language); } catch (e) { /* ignore */ }
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
