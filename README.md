# 🚀 Portfólio Arthur Padilha

Portfólio pessoal desenvolvido com React, apresentando projetos, habilidades e experiências profissionais de forma moderna e interativa.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3)

## ✨ Características

- 🎨 **Design Moderno e Responsivo** - Interface elegante que se adapta a todos os dispositivos
- ⚡ **Animações Suaves** - Utilizando Framer Motion para transições fluidas
- 🌟 **Efeitos Visuais** - Partículas animadas e gradientes dinâmicos
- 📱 **Mobile First** - Totalmente otimizado para dispositivos móveis
- 🎯 **Performance Otimizada** - Carregamento rápido e eficiente
- 💼 **Seções Completas** - Hero, Sobre, Experiência, Projetos, Habilidades e Contato

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Framer Motion** - Biblioteca de animações para React
- **React Icons** - Conjunto de ícones populares
- **React Intersection Observer** - Detecção de elementos na viewport
- **CSS3** - Estilização moderna com variáveis CSS e gradientes
- **Google Fonts** - Tipografia (Inter e Poppins)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/P4d1lh4/portfolio-arthur.git
cd portfolio-arthur
```

### 2. Instale as dependências

Com npm:
```bash
npm install
```

Ou com yarn:
```bash
yarn install
```

### 3. Execute o projeto

Com npm:
```bash
npm start
```

Ou com yarn:
```bash
yarn start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

Com npm:
```bash
npm run build
```

Ou com yarn:
```bash
yarn build
```

Os arquivos otimizados estarão na pasta `build/`

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages. Siga os passos abaixo:

### 1️⃣ Preparação do Repositório

Certifique-se de que seu código está em um repositório GitHub:

```bash
# Se ainda não inicializou o Git
git init
git add .
git commit -m "Initial commit"

# Conecte ao repositório remoto
git remote add origin https://github.com/P4d1lh4/portfolio-arthur.git
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy Automático

Execute o comando de deploy:

```bash
npm run deploy
```

Este comando irá:
- ✅ Criar um build otimizado do projeto
- ✅ Criar/atualizar a branch `gh-pages`
- ✅ Fazer push automático para o GitHub

### 3️⃣ Configurar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione:
   - Branch: `gh-pages`
   - Pasta: `/ (root)`
4. Clique em **Save**

### 4️⃣ Acessar seu Site

Após alguns minutos, seu portfólio estará disponível em:
**https://P4d1lh4.github.io/portfolio-arthur**

### 🔄 Atualizações Futuras

Para atualizar seu portfólio online, basta:

```bash
# Faça suas alterações
git add .
git commit -m "Descrição das alterações"
git push origin main

# Deploy no GitHub Pages
npm run deploy
```

### ⚙️ Configurações Importantes

O arquivo `package.json` já está configurado com:
- **homepage**: URL do GitHub Pages
- **predeploy**: Build automático antes do deploy
- **deploy**: Publicação na branch gh-pages

### 🔍 Troubleshooting

**Problema: Site não carrega corretamente**
- Verifique se a `homepage` no `package.json` está correta
- Certifique-se de que a branch `gh-pages` foi criada
- Aguarde alguns minutos após o deploy

**Problema: Erro 404**
- Verifique se o GitHub Pages está ativado nas configurações
- Confirme se a branch selecionada é `gh-pages`

**Problema: Páginas em branco**
- Certifique-se de que o build foi bem-sucedido
- Verifique o console do navegador por erros

## 📂 Estrutura do Projeto

```
portfolio-arthur/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── Experience/
│   │   │   ├── Experience.js
│   │   │   └── Experience.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── ParticlesBackground/
│   │   │   ├── ParticlesBackground.js
│   │   │   └── ParticlesBackground.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   └── Skills/
│   │       ├── Skills.js
│   │       └── Skills.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  --bg-dark: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
}
```

### Conteúdo

Edite os componentes em `src/components/` para atualizar:
- Informações pessoais
- Experiências profissionais
- Projetos
- Habilidades
- Informações de contato

## 📱 Responsividade

O portfólio é totalmente responsivo e foi testado em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🌟 Funcionalidades Principais

### 1. **Hero Section**
- Animação de entrada
- Efeitos de gradiente
- Links sociais animados
- Indicador de scroll

### 2. **Seção Sobre**
- Cards informativos
- Animação de progresso de idiomas
- Design modular

### 3. **Timeline de Experiências**
- Timeline vertical animada
- Cards com efeito hover
- Tags de tecnologias

### 4. **Galeria de Projetos**
- Cards interativos
- Gradientes dinâmicos
- Links para código e demo

### 5. **Grid de Habilidades**
- Ícones animados
- Efeitos de hover
- Organização por categorias

### 6. **Formulário de Contato**
- Validação de campos
- Design moderno
- Integração com email

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Arthur Pedrosa Padilha**

- 💼 LinkedIn: [@arthur-ppadilha](https://www.linkedin.com/in/arthur-ppadilha)
- 🐱 GitHub: [@P4d1lh4](https://github.com/P4d1lh4)
- 📧 Email: arthur.ppadilha09@gmail.com
- 📍 Localização: Recife - PE, Brasil

## 🙏 Agradecimentos

- Inspiração de designs modernos da comunidade
- Bibliotecas open-source utilizadas
- Comunidade React Brasil

---

⭐ Se você gostou deste projeto, considere dar uma estrela no GitHub!

Desenvolvido com ❤️ e React por Arthur Padilha

