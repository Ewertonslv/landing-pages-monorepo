# 🎨 Portfolio Showcase - Landing Pages Pro

Demonstração visual interativa de todos os templates de landing pages disponíveis.

## 🚀 Features

- **6 Templates** profissionais exibidos
- **Navegação interativa** entre templates
- **Seção de preços** com 3 planos
- **Calculadora de ROI** visual
- **Formulário de contato** integrado
- **Design responsivo** mobile-first
- **Animações suaves** para melhor UX

## 📊 Seções

### 1. Templates
- Grid com 6 templates
- Preview visual de cada um
- Detalhes expandidos ao clicar
- Features e casos de uso
- Taxa de conversão destacada

### 2. Preços
- 3 planos (Individual, Agência, White Label)
- Comparação visual
- Calculadora de ROI interativa
- Destaque para plano mais popular

### 3. Contato
- Formulário funcional
- Informações de contato
- WhatsApp e email

## 🎯 Como Usar

```bash
cd portfolio-showcase
npm install
npm run dev
```

Acesse: http://localhost:3000

## 📦 Build para Produção

```bash
npm run build
```

Deploy na Vercel, Netlify ou GitHub Pages.

## 🎨 Customização

Edite `src/App.jsx`:
- **templates[]** - adicionar/editar templates
- **pricingPlans[]** - ajustar preços
- **Cores** - modificar gradientes e temas

## 💡 Uso Recomendado

Este showcase é perfeito para:
- Enviar para prospects via link
- Apresentações comerciais
- Website institucional
- Landing page de vendas

## 🔗 Deploy Sugerido

1. **Vercel** (Recomendado)
   ```bash
   vercel --prod
   ```

2. **Netlify**
   - Conectar repositório Git
   - Build: `npm run build`
   - Publish: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   gh-pages -d dist
   ```

---

**Status:** ✅ Pronto para produção  
**Tecnologias:** React 18, Tailwind CSS 3, Vite 4
