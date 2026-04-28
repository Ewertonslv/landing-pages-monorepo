# 🧪 Quick Start - Executar 17 Testes em 5 Minutos

**Você está aqui:** Dev server rodando ✅  
**Próximo:** Instalar Playwright + Rodar testes  
**Tempo:** ~5 min

---

## 📋 CHECKLIST - Passo a Passo

```
[ ] 1. Abra novo terminal (Ctrl+`)
[ ] 2. Rode: npm install -D @playwright/test
[ ] 3. Aguarde instalação (~2 min)
[ ] 4. Rode: npx playwright test
[ ] 5. Aguarde testes rodarem (~2 min)
[ ] 6. Veja resultado: "17 passed ✅"
```

---

## 💻 Comandos Exatos (copie e cole)

**Terminal 1 (já rodando):**
```bash
npm run dev
# Deixe rodando! Mostra: ➜  Local:   http://localhost:3000
```

**Terminal 2 (novo):**
```bash
cd portfolio-showcase
```

```bash
npm install -D @playwright/test
```

Aguarde terminar...

```bash
npx playwright test
```

---

## ✅ Resultado Esperado

```
=========================== test session starts ============================
17 passed (45.2s)

✅ T1: Carregar página
✅ T2: Header CTA funciona
✅ T3: Template grid (6)
✅ T4: Template selection
✅ T5: Preços section
✅ T6: Pricing CTAs
✅ T7: Contact Form
✅ T8: Form submission
✅ T9: Form validation
✅ T10: GitHub link
✅ T11: Mobile header
✅ T12: Mobile grid
✅ T13: Mobile form
✅ T14: Page speed
✅ T15: Bundle size
✅ T16: Hero copy
✅ T17: CTA clarity

======================== 17 passed (45.2s) ==========================
```

---

## 🎯 Se Tudo Passar (17/17 ✅)

Você pode:

1. **Ver relatório visual:**
   ```bash
   npx playwright show-report
   ```

2. **Capturar screenshots** (agora automáticas em `playwright-report/`)

3. **Fazer git push:**
   ```bash
   git add -A
   git commit -m "feat: Add automated Playwright test suite (17/17 passing)"
   git push origin main
   ```

---

## ❌ Se Algum Teste Falhar

1. **Veja o erro:**
   ```bash
   npx playwright show-report
   ```

2. **Debug:**
   ```bash
   npx playwright test T2 --debug
   # (substitua T2 pelo teste que falhou)
   ```

3. **Avisa aqui:**
   - Nome do teste (T1-T17)
   - Screenshot do erro
   - Exato erro message

---

## 📊 Timeline Completa

| Etapa | Tempo | Status |
|-------|-------|--------|
| Instalar Playwright | 2 min | 🔄 |
| Rodar testes | 2 min | 🔄 |
| Ver relatório | 1 min | ⏳ |
| **TOTAL** | **5 min** | **🚀** |

---

**Bora lá!** Rode agora: `npm install -D @playwright/test && npx playwright test`

Avisa aqui quando terminar com resultado 👇
