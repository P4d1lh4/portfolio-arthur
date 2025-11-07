# 🚀 Guia de Deploy - GitHub Pages

## Comandos Rápidos

### Deploy Inicial

```bash
# 1. Certifique-se de que tudo está commitado
git add .
git commit -m "Preparando para deploy"
git push origin main

# 2. Execute o deploy
npm run deploy
```

### Configurar GitHub Pages (Apenas na primeira vez)

1. Acesse: https://github.com/P4d1lh4/portfolio-arthur/settings/pages
2. Em **Source**, selecione:
   - Branch: `gh-pages`
   - Pasta: `/ (root)`
3. Clique em **Save**
4. Aguarde 2-5 minutos

### Acessar o Site

Seu portfólio estará disponível em:
👉 **https://P4d1lh4.github.io/portfolio-arthur**

---

## 📝 Fluxo de Trabalho Diário

Sempre que fizer alterações:

```bash
# 1. Faça suas alterações no código

# 2. Teste localmente
npm start

# 3. Commit suas alterações
git add .
git commit -m "Descrição das alterações"
git push origin main

# 4. Deploy no GitHub Pages
npm run deploy
```

---

## ⚙️ O que acontece quando você executa `npm run deploy`

1. **predeploy**: Executa `npm run build`
   - Compila o React para HTML, CSS e JS otimizados
   - Cria a pasta `build/` com os arquivos estáticos

2. **deploy**: Executa `gh-pages -d build`
   - Cria/atualiza a branch `gh-pages`
   - Copia o conteúdo de `build/` para a raiz da branch
   - Faz push automático para o GitHub

---

## 🔧 Configurações (já feitas)

### package.json

```json
{
  "homepage": "https://P4d1lh4.github.io/portfolio-arthur",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```

---

## 🐛 Troubleshooting

### Site não carrega / 404

**Causa**: GitHub Pages não configurado
**Solução**: Verifique as configurações em Settings > Pages

### Mudanças não aparecem

**Causa**: Cache do navegador
**Solução**: 
- Limpe o cache (Ctrl + Shift + Delete)
- Abra em janela anônima
- Aguarde alguns minutos

### Erro ao fazer deploy

**Causa**: Repositório não configurado
**Solução**:
```bash
git remote -v  # Verifica se o remote está correto
git remote set-url origin https://github.com/P4d1lh4/portfolio-arthur.git
```

### Build falha

**Causa**: Erro no código ou dependências
**Solução**:
```bash
npm install  # Reinstala dependências
npm run build  # Testa o build manualmente
```

---

## 📊 Monitoramento

### Verificar status do deploy

1. Acesse o repositório no GitHub
2. Vá em **Actions** (se disponível)
3. Ou verifique a branch `gh-pages` foi atualizada

### Ver logs de build

```bash
npm run build  # Ver se há erros de compilação
```

---

## 🎯 Checklist de Deploy

Antes de fazer deploy, verifique:

- [ ] Código está funcionando localmente (`npm start`)
- [ ] Build está funcionando (`npm run build`)
- [ ] Alterações commitadas no Git
- [ ] Sem erros no console do navegador
- [ ] Imagens e recursos carregando corretamente
- [ ] Links externos funcionando

---

## 🔐 Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio:

1. Crie o arquivo `public/CNAME` com seu domínio:
   ```
   seudominio.com
   ```

2. Configure o DNS do seu domínio:
   ```
   Type: CNAME
   Name: www
   Value: P4d1lh4.github.io
   ```

3. No GitHub: Settings > Pages > Custom domain
   - Digite seu domínio
   - Ative "Enforce HTTPS"

---

## 📚 Recursos Úteis

- [Documentação GitHub Pages](https://docs.github.com/pt/pages)
- [Create React App - Deployment](https://create-react-app.dev/docs/deployment/#github-pages)
- [gh-pages - NPM](https://www.npmjs.com/package/gh-pages)

---

## 💡 Dicas

1. **Sempre teste localmente antes de fazer deploy**
2. **Faça commits descritivos**
3. **Deploy em horários de baixo tráfego se possível**
4. **Mantenha a branch main sempre estável**
5. **Use branches para features novas**

---

Feito com ❤️ para facilitar seu deploy!

