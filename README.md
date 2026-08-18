# Portfólio — Arthur Padilha

Portfólio pessoal construído em React (5 páginas). Design "Instrument": grafite escuro editorial,
tipografia forte e foco em dados. Bilíngue (PT/EN), acessível e otimizado para SEO/compartilhamento.

**Ao vivo:** https://p4d1lh4.github.io/portfolio-arthur

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?logo=framer&logoColor=white)

## Stack

- **React 18** (Create React App)
- **Framer Motion** — animações de scroll (respeita `prefers-reduced-motion`)
- **React Icons**
- **Space Grotesk / Inter / JetBrains Mono** (Google Fonts)

## Rodar localmente

```bash
npm install
npm start        # http://localhost:3000
npm run build    # build de produção em /build
npm run deploy   # publica em gh-pages
```

## Estrutura

```
public/            index.html (SEO/OG/JSON-LD), favicon.svg, robots.txt,
                   sitemap.xml, site.webmanifest, og-image.svg,
                   Arthur-Padilha-CV.pdf, projects/ (screenshots)
src/
  index.css        design system (tokens, base, utilitários)
  App.js           Router (/, /sobre, /experiencias, /projetos, /contato)
  pages/Home.js    Hero + Skills + cards Explore
  context/         LanguageContext (PT/EN)
  data/projects.js metadados dos projetos (links, stack, imagens)
  components/       Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
```

## Como manter

- **Textos:** `src/context/LanguageContext.js` (PT e EN lado a lado).
- **Projetos:** `src/data/projects.js`. Só entra no site quem tem `status: 'published'`.
  Para mostrar um projeto pronto (ex. `entregadores`), mude `status` para `'published'`.
- **Screenshot de projeto:** coloque a imagem em `public/projects/` (ex. `portal-professor.png`)
  e aponte o campo `image` do projeto para o nome do arquivo. Sem imagem → placeholder automático.
- **Links quebrados:** botões só aparecem quando `repoUrl`/`demoUrl` existem — nunca há link morto.
- **Currículo:** substitua `public/Arthur-Padilha-CV.pdf` para atualizar o download.
- **OG image:** `public/og-image.svg` é a fonte; exporte um PNG 1200×630 como `public/og-image.png`
  para o preview em redes sociais (LinkedIn/WhatsApp costumam não renderizar SVG).

## Autor

**Arthur Pedrosa Padilha** — Recife, PE
[LinkedIn](https://www.linkedin.com/in/arthur-ppadilha) · [GitHub](https://github.com/P4d1lh4) · arthur.ppadilha09@gmail.com
