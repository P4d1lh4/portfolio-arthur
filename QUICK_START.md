# 🚀 Guia de Início Rápido

## Comandos Essenciais

### Instalação e Execução

```bash
# 1. Entre na pasta do projeto
cd portfolio-arthur

# 2. Instale as dependências
npm install

# 3. Execute o projeto
npm start
```

O projeto será aberto automaticamente em [http://localhost:3000](http://localhost:3000)

## 🎯 Primeiros Passos para Personalizar

### 1. Atualize suas informações pessoais

Edite `src/components/Hero/Hero.js`:
```javascript
// Linha 41-46
<motion.h1 className="hero-name" variants={itemVariants}>
  SEU NOME AQUI
  <br />
  <span className="hero-surname">SEU SOBRENOME</span>
</motion.h1>
```

### 2. Atualize seus links sociais

No mesmo arquivo, linhas 76-99, atualize os links:
```javascript
href="https://github.com/SEU_USUARIO"
href="https://www.linkedin.com/in/SEU_PERFIL"
href="mailto:seu.email@exemplo.com"
```

### 3. Personalize as cores

Edite `src/index.css` (linhas 13-21):
```css
:root {
  --primary-color: #667eea;      /* Sua cor principal */
  --secondary-color: #764ba2;    /* Sua cor secundária */
  --accent-color: #f093fb;       /* Cor de destaque */
}
```

### 4. Adicione suas experiências

Edite `src/components/Experience/Experience.js`:
```javascript
const experiences = [
  {
    icon: <FaBriefcase />,
    title: 'Seu Cargo',
    company: 'Sua Empresa',
    period: 'Período',
    description: 'Descrição do que você fez...',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
  // Adicione mais experiências...
];
```

### 5. Adicione seus projetos

Edite `src/components/Projects/Projects.js`:
```javascript
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição detalhada...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    gradient: 'var(--gradient-1)',
  },
  // Adicione mais projetos...
];
```

### 6. Atualize suas habilidades

Edite `src/components/Skills/Skills.js`:
```javascript
const skills = [
  { name: 'Skill', icon: <IconeDoSkill />, color: '#CODIGO_COR' },
  // Adicione mais habilidades...
];
```

## 📦 Build para Publicação

```bash
# Criar versão de produção
npm run build

# Os arquivos otimizados estarão em: build/
```

## 🌐 Opções de Deploy Gratuito

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Arraste a pasta `build/` para [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Adicione ao package.json:
# "homepage": "https://seu-usuario.github.io/portfolio-arthur"

# Adicione aos scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

## 🎨 Customização Rápida de Cores

### Esquemas de Cores Prontos

#### Tema Azul Escuro (Atual)
```css
--primary-color: #667eea;
--secondary-color: #764ba2;
```

#### Tema Verde Tecnológico
```css
--primary-color: #00d4aa;
--secondary-color: #00a67e;
```

#### Tema Roxo Vibrante
```css
--primary-color: #9d4edd;
--secondary-color: #7b2cbf;
```

#### Tema Laranja Energético
```css
--primary-color: #ff6b6b;
--secondary-color: #ee5a6f;
```

## 🐛 Problemas Comuns

### Erro: "Module not found"
```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já em uso
```bash
# Use outra porta
PORT=3001 npm start
```

### Animações não funcionam
```bash
# Verifique se instalou todas as dependências
npm install framer-motion react-intersection-observer
```

## 📞 Precisa de Ajuda?

- 📧 Email: arthur.ppadilha09@gmail.com
- 💼 LinkedIn: [arthur-ppadilha](https://www.linkedin.com/in/arthur-ppadilha)
- 🐱 GitHub: [P4d1lh4](https://github.com/P4d1lh4)

## ✅ Checklist de Personalização

- [ ] Atualizar nome e informações pessoais
- [ ] Atualizar links sociais (GitHub, LinkedIn, Email)
- [ ] Adicionar suas experiências profissionais
- [ ] Adicionar seus projetos
- [ ] Atualizar suas habilidades
- [ ] Personalizar as cores do tema
- [ ] Atualizar informações de contato
- [ ] Testar em diferentes dispositivos
- [ ] Fazer build de produção
- [ ] Deploy online

---

🎉 **Pronto!** Seu portfólio está configurado e pronto para impressionar!

