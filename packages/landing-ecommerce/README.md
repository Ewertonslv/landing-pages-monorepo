# 🚀 Landing SaaS

Landing page minimalista e elegante para SaaS e produtos digitais.

## 📋 Características

- Design moderno e minimalista
- Otimizado para conversão
- Seções: Hero, Features, Pricing, CTA
- Responsivo (mobile-first)
- Performance otimizada
- SEO-friendly

## 📁 Estrutura

```
landing-saas/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── index.html
│   └── favicon.svg
├── content.js          # Edite aqui!
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customização

### 1. Alterar Conteúdo

Abra `content.js` e edite:

```javascript
export const content = {
  headline: "Seu título aqui",
  subheadline: "Seu subtítulo",
  features: [...],
  pricing: [...]
}
```

### 2. Alterar Cores

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: '#2563eb',  // Seu primária
  secondary: '#1e40af' // Seu secundária
}
```

### 3. Alterar Imagens

Coloque suas imagens em `public/` e referencie em `content.js`

## 🚀 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Conectar pasta dist no Netlify
```

## 📊 Performance

- Lighthouse: 95+
- PageSpeed: Otimizado
- Core Web Vitals: Green

---

Dúvidas? Veja README raiz do monorepo.
