# 🚀 GUIA DE DEPLOY - Portfolio Showcase

## Opções de Deploy (Do mais fácil ao mais avançado)

---

## 🟢 OPÇÃO 1: Vercel (RECOMENDADO - 2 minutos)

### Por que Vercel?
- ✅ Deploy automático a cada commit
- ✅ SSL/HTTPS grátis
- ✅ CDN global
- ✅ Preview de branches
- ✅ Zero configuração

### Passos:

1. **Criar conta Vercel**
   - Acesse: https://vercel.com
   - Cadastre com GitHub

2. **Importar projeto**
   ```bash
   # No terminal, na pasta do projeto:
   npm install -g vercel
   vercel login
   vercel
   ```

3. **Configurar**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy!**
   - URL gerada: `seu-projeto.vercel.app`
   - Customizar domínio nas configurações

**Tempo total:** 2 minutos ⚡

---

## 🔵 OPÇÃO 2: Netlify (3 minutos)

### Por que Netlify?
- ✅ Interface visual amigável
- ✅ Formulários nativos
- ✅ Functions serverless
- ✅ Split testing A/B

### Passos:

1. **Criar conta**
   - https://netlify.com

2. **Deploy via Git**
   - Conectar GitHub/GitLab
   - Selecionar repositório
   - Build: `npm run build`
   - Publish: `dist`

3. **Ou Deploy manual**
   ```bash
   npm run build
   # Arraste a pasta 'dist' para Netlify
   ```

4. **URL gerada**
   - `seu-site.netlify.app`

**Tempo total:** 3 minutos

---

## 🟡 OPÇÃO 3: GitHub Pages (5 minutos)

### Por que GitHub Pages?
- ✅ Grátis para sempre
- ✅ Integração total com Git
- ✅ Domínio customizado

### Passos:

1. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Adicionar ao package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://seu-usuario.github.io/portfolio-showcase"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configurar no GitHub**
   - Settings → Pages
   - Source: gh-pages branch
   - URL: `seu-usuario.github.io/portfolio-showcase`

**Tempo total:** 5 minutos

---

## 🟠 OPÇÃO 4: Servidor Próprio (10 minutos)

### Para quem tem VPS/servidor

1. **Build local**
   ```bash
   npm run build
   ```

2. **Upload pasta dist/**
   ```bash
   scp -r dist/* usuario@servidor:/var/www/html/
   ```

3. **Configurar Nginx**
   ```nginx
   server {
     listen 80;
     server_name seudominio.com;
     root /var/www/html;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

4. **Reiniciar Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

## 🎯 CHECKLIST PRÉ-DEPLOY

Antes de fazer deploy, verifique:

- [ ] `npm run build` funciona sem erros
- [ ] Todas as imagens/assets estão incluídos
- [ ] Links de contato atualizados
- [ ] Informações de preço corretas
- [ ] Meta tags SEO configuradas
- [ ] Favicon adicionado

---

## 🔧 CONFIGURAÇÕES ADICIONAIS

### Domínio Customizado

**Vercel:**
1. Settings → Domains
2. Adicionar domínio
3. Configurar DNS (A ou CNAME)

**Netlify:**
1. Domain Settings
2. Add custom domain
3. Configurar DNS

### Analytics

Adicionar ao `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### SEO Otimizado

No `index.html`:

```html
<meta name="description" content="Landing pages profissionais que convertem 3-7%. Templates testados para cursos, SaaS, e-commerce e mais.">
<meta property="og:title" content="Landing Pages Pro">
<meta property="og:description" content="Templates de alta conversão">
<meta property="og:image" content="/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

---

## 📊 MONITORAMENTO

### Ferramentas Recomendadas:

1. **Google Analytics** - Tráfego
2. **Hotjar** - Mapas de calor
3. **Google Search Console** - SEO
4. **Vercel Analytics** - Performance

---

## 🚨 TROUBLESHOOTING

### Build falha?
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Página em branco?
- Verificar console do navegador
- Verificar base path no Vite config
- Confirmar assets carregando

### Imagens não aparecem?
- Usar caminhos relativos: `/images/foto.jpg`
- Ou colocar em `/public/images/`

---

## ✅ DEPLOY CHECKLIST FINAL

- [ ] Build concluído sem erros
- [ ] Deploy realizado com sucesso
- [ ] URL funcionando
- [ ] Mobile responsivo OK
- [ ] Formulário testado
- [ ] Links de contato funcionando
- [ ] Velocidade < 2s
- [ ] SSL/HTTPS ativo

---

## 🎉 PRONTO!

Seu portfolio showcase está no ar!

**Próximos passos:**
1. Compartilhar URL com prospects
2. Adicionar ao email signature
3. Incluir em propostas comerciais
4. Postar nas redes sociais

---

**Dúvidas?** Entre em contato!
