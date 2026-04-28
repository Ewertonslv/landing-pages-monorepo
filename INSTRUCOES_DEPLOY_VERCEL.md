# 🚀 Instruções de Deploy em Vercel

## Pré-requisitos

- [ ] Conta GitHub (gratuita)
- [ ] Conta Vercel (conectada ao GitHub)
- [ ] Git instalado localmente

---

## Passo 1: Preparar o Repositório

### 1.1 Inicializar Git (se não tiver)
```bash
cd C:\Users\Ewerton Silva\OneDrive\Documentos\landing-pages-monorepo
git init
git add .
git commit -m "Initial commit: 6 landing page templates + documentation"
```

### 1.2 Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome: `landing-pages-monorepo`
3. Descrição: "Landing pages profissionais que convertem 3-7%"
4. Público (para portfólio) ou Privado
5. **Não inicialize** README/gitignore (vamos fazer isso via CLI)
6. Clique "Create repository"

### 1.3 Fazer Push para GitHub

```bash
git remote add origin https://github.com/SEU-USERNAME/landing-pages-monorepo.git
git branch -M main
git push -u origin main
```

---

## Passo 2: Fazer Deploy do Portfolio Showcase

### 2.1 Acessar Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Sign in com GitHub
3. Clique "Add New..." → "Project"
4. Selecione o repositório `landing-pages-monorepo`

### 2.2 Configurar Deploy

Na página de setup:

**Framework Preset:** Vite  
**Root Directory:** `packages/portfolio-showcase`  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  

Clique "Deploy" e aguarde (~2 min)

### 2.3 Resultado

Você receberá uma **URL ao vivo**, como:
```
https://landing-pages-monorepo.vercel.app
```

---

## Passo 3: Deploy Individual de Templates (Opcional)

Se quiser fazer deploy de templates individuais:

### Para cada template:

```bash
# Exemplo: landing-saas
cd packages/landing-saas

# 1. Criar novo projeto Vercel
vercel

# 2. Seguir as instruções na CLI
# 3. Publicado em: https://landing-saas-yourusername.vercel.app
```

---

## Passo 4: Atualizar README

Adicione ao `README.md` (raiz):

```markdown
## 🌐 Portfolio Showcase (Live)

[Acesse o portfólio ao vivo](https://landing-pages-monorepo.vercel.app)

Todos os 6 templates estão rodando em produção.
```

---

## Passo 5: Configurações Adicionais (Recomendado)

### 5.1 Domínio customizado

1. Em Vercel → Settings → Domains
2. Adicione seu domínio (ex: landing-pages.com.br)
3. Aponte DNS do seu domínio para Vercel

### 5.2 Variáveis de ambiente

Se precisar (ex: email, API keys):

1. Em Vercel → Settings → Environment Variables
2. Adicione suas variáveis
3. Redeploy automático

### 5.3 Analytics

1. Em Vercel → Analytics (Free tier disponível)
2. Rastreie visitas, conversão, performance

---

## Troubleshooting

### Build falha com "React not found"
```bash
cd packages/portfolio-showcase
npm install
```

### Porta 3000 ocupada (dev local)
```bash
npm run dev -- --port 3001
```

### Precisa atualizar tema/cores
Edite `tailwind.config.js` do portfolio-showcase

---

## Verificação

Após deploy, verifique:

- ✅ URL carrega em < 2s
- ✅ Todos os 6 templates aparecem
- ✅ Responsivo em mobile
- ✅ Formulário funciona
- ✅ CTAs redirecionam corretamente

---

## Próximas Ações

1. Compartilhar link com prospects
2. Adicionar ao email signature
3. Linked to LinkedIn
4. Iniciar outreach

---

**Deploy concluído!** 🎉
