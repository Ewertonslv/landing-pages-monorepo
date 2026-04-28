# 🧪 Testing Script - Perfection Sprint Local

Execute estes testes em ordem. ✅ = Passar. ❌ = Falhar = Voltar pra editar.

---

## SETUP INICIAL

### 1. Instalar dependências
```bash
cd portfolio-showcase
npm install
```

**Esperado:** ✅ Sem erros

---

### 2. Rodar dev server
```bash
npm run dev
```

**Esperado:** ✅ "VITE v4.x.x ready in X ms"

**URL:** http://localhost:5173 (ou http://localhost:3000)

---

## TESTES DO PORTFOLIO

### T1: Carregar página
1. Abra http://localhost:5173
2. Aguarde carregar (máx 3 seg)

**✅ PASSAR se:**
- Página carrega sem erros (console limpo)
- Hero visible com "Landing Pages que Vendem"
- Header com botão "Agendar Demonstração"

**❌ FALHAR se:**
- Página branca/vazia
- Erros no console (F12 → Console)
- Botões não aparecem

---

### T2: Header CTA Funcional
1. Clique em "Agendar Demonstração" (top right)

**✅ PASSAR se:**
- Abre Calendly em nova aba
- URL contém "calendly.com"
- Sem erros console

**❌ FALHAR se:**
- Nada acontece
- Erro de JavaScript

---

### T3: Template Grid
1. Scroll para "Escolha seu template"
2. Veja 6 cards com templates

**✅ PASSAR se:**
- Todos 6 aparecem: Curso, SaaS, Consultoria, E-commerce, Serviços, Webinar
- Cores diferentes em cada
- Conversão visível (3-7%, 4-6%, etc)
- Nenhum card duplicado

**❌ FALHAR se:**
- Menos de 6 templates
- Conversão não aparece
- Cards sobrepostos

---

### T4: Template Selection
1. Clique no template "Consultoria / Coaching"
2. Veja detalhes ao lado

**✅ PASSAR se:**
- Card fica com borda roxa (ring-purple-500)
- Detalhes aparecem à direita
- "Taxa de Conversão: 5-8%" visível
- Botão "Agendar Demonstração" funciona

**❌ FALHAR se:**
- Nenhuma mudança visual
- Detalhes não carregam

---

### T5: Preços Section
1. Clique em "Preços" (nav)
2. Scroll pela seção

**✅ PASSAR se:**
- 3 planos visíveis: Individual, Agência, White Label
- Plano Agência está em destaque (MAIS POPULAR)
- Preços visíveis: R$ 2.997, R$ 8.997/mês, R$ 15.997/mês
- ROI Calculator mostra R$ 19.880 de ganho mensal
- 3 botões "Começar Agora"

**❌ FALHAR se:**
- Menos de 3 planos
- Preços não aparecem
- ROI Calculator vazio

---

### T6: Pricing CTAs
1. Clique "Começar Agora" em qualquer plano

**✅ PASSAR se:**
- Abre Calendly em nova aba
- Sem erros console

**❌ FALHAR se:**
- Nada acontece
- Erro de JavaScript

---

### T7: Contact Form
1. Clique em "Contato" (nav)
2. Veja formulário

**✅ PASSAR se:**
- 5 campos: Nome, Email, Empresa, Interesse, Mensagem
- Buttons visíveis: "Enviar e Agendar Chamada"
- Email real: ewertoncom297@gmail.com
- WhatsApp link funcional

**❌ FALHAR se:**
- Campos faltando
- Email é fake (contato@landing.com)
- WhatsApp é +55 (11) 98765-4321

---

### T8: Form Submission
1. Preencha:
   - Nome: "Teste Silva"
   - Email: "teste@email.com"
   - Empresa: "Minha Empresa"
   - Interesse: "Projeto Individual"
   - Mensagem: "Teste de formulário"
2. Clique "Enviar e Agendar Chamada"

**✅ PASSAR se:**
- Alert aparece: "✅ Mensagem recebida!..."
- Formulário limpa
- Sem erros console

**❌ FALHAR se:**
- Nada acontece
- Erro de validação (não era obrigatório)
- Formulário não limpa

---

### T9: Form Validation
1. Tente enviar sem preencher Nome
2. Clique "Enviar"

**✅ PASSAR se:**
- Alert: "Por favor, preencha nome e email"
- Formulário NÃO envia

**❌ FALHAR se:**
- Envia sem validação
- Erro confuso

---

### T10: GitHub Link
1. Clique botão "Código" no template detail

**✅ PASSAR se:**
- Abre GitHub em nova aba
- URL: github.com/Ewertonslv/landing-pages-monorepo

**❌ FALHAR se:**
- Nada acontece
- URL incorreta

---

## TESTES DE MOBILE

### T11: Mobile Header
1. Abra DevTools (F12)
2. Clique "Toggle device toolbar" (Ctrl+Shift+M)
3. Selecione "iPhone 12" (390x844)
4. Scroll página

**✅ PASSAR se:**
- Header adapta: botão vai pra baixo ou fica em linha
- Texto legível (não quebrado)
- Sem overflow horizontal

**❌ FALHAR se:**
- Texto sobreposto
- Scroll horizontal aparece
- Botão inacessível

---

### T12: Mobile Template Grid
1. Em iPhone view, scroll para templates
2. Veja grid

**✅ PASSAR se:**
- Templates em 1 coluna (mobile)
- Cards ocupam largura inteira
- Sem overflow

**❌ FALHAR se:**
- Grid em 3 colunas (desktop)
- Cards fora de tela

---

### T13: Mobile Form
1. Em iPhone view, vá para Contato
2. Scroll e preencha form

**✅ PASSAR se:**
- Todos campos visíveis
- Teclado não cobre campos importantes
- Input fields grandes o suficiente (> 44px altura)

**❌ FALHAR se:**
- Campos cortados
- Letras muito pequenas

---

## TESTES DE PERFORMANCE

### T14: Page Speed
1. Abra DevTools → Performance
2. Clique record
3. Scroll página inteira
4. Pause recording
5. Check "Largest Contentful Paint" (LCP)

**✅ PASSAR se:**
- LCP < 2.5 segundos
- Nenhum "jank" (stuttering)

**❌ FALHAR se:**
- LCP > 3 segundos
- Página travando no scroll

---

### T15: Bundle Size
```bash
npm run build
```

**✅ PASSAR se:**
- dist/ < 500KB
- Build completa sem warnings

**❌ FALHAR se:**
- Build falha
- Warnings de dependências não usadas

---

## TESTES DE COPY

### T16: Hero Copy Check
1. Veja homepage
2. Leia headline + subheadline

**✅ PASSAR se:**
- Headline menciona PROBLEMA ("investe em tráfego pago mas LP não converte?")
- Subheadline menciona SOLUÇÃO (3-7% conversão)
- Ambos clara e sem jargão técnico

**❌ FALHAR se:**
- Copy genérico ("Landing Pages Pro")
- Sem problema mencionado

---

### T17: CTA Clarity
1. Veja todos os botões (10+)

**✅ PASSAR se:**
- Todos dizem AÇÃO: "Agendar", "Começar", "Enviar"
- Nenhum diz: "Saiba Mais", "Clique", "Leia"

**❌ FALHAR se:**
- CTAs são genéricos

---

## CHECKLIST FINAL

```
✅ FUNCIONALIDADE
- [ ] Header CTA funciona
- [ ] Templates carregam (6)
- [ ] Pricing visível
- [ ] Form submite sem erro
- [ ] Validação funciona
- [ ] GitHub link funciona
- [ ] Sem console errors

✅ MOBILE
- [ ] Header adapta
- [ ] Grid adapta
- [ ] Form adaptado
- [ ] Sem overflow

✅ PERFORMANCE
- [ ] Carrega < 3seg
- [ ] LCP < 2.5seg
- [ ] Build < 500KB

✅ COPY
- [ ] Hero problema-focado
- [ ] CTAs ação-focados
- [ ] Sem jargão técnico

✅ TUDO PRONTO?
- [ ] Nenhum ❌ acima
- [ ] Tudo ✅
```

---

## Se Falhar Em Algo

1. **Anote exatamente o que falhou**
2. **Repita teste 2x (pode ser fluke)**
3. **Se falhar 2x:**
   - Abra console (F12)
   - Screenshot do erro
   - Avisa aqui com detalhes

---

## Timeline

- **T1-T10:** 15 min
- **T11-T13:** 10 min
- **T14-T15:** 5 min
- **T16-T17:** 5 min

**Total:** ~35 min para todo testing

---

**Depois disso, seu portfolio está 100% pronto para deploy!** 🚀
