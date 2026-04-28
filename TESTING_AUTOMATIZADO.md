# 🧪 Testing Automatizado com Playwright

Criei um **suite de 17 testes automatizados** que valida 100% das funcionalidades.

---

## 🚀 Como Rodar (3 passos)

### 1️⃣ Instale Playwright (primeira vez)
```bash
cd portfolio-showcase
npm install -D @playwright/test
```

Leva ~2 min. Você vai ver:
```
added XX packages
```

### 2️⃣ Certifique-se que o dev server está rodando

Se já tem outro terminal com `npm run dev` rodando, ótimo!

Senão, em outro terminal:
```bash
npm run dev
```

### 3️⃣ Rode os testes
```bash
npx playwright test
```

---

## ✅ Resultado Esperado

Você verá:
```
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
```

---

## 🔍 Ver Relatório Detalhado

Após os testes rodarem:
```bash
npx playwright show-report
```

Abre um navegador com:
- ✅ Testes que passaram
- ❌ Testes que falharam (com screenshot)
- ⏱️ Tempo de execução
- 📸 Screenshots automáticas

---

## ⚙️ Opções de Rodar

**Rodar um teste específico:**
```bash
npx playwright test T1
```

**Rodar em modo "headed" (ver navegador):**
```bash
npx playwright test --headed
```

**Rodar debugger interativo:**
```bash
npx playwright test --debug
```

**Rodar só desktop (sem mobile):**
```bash
npx playwright test --grep "T1-T10"
```

---

## 🐛 Se Algum Teste Falhar

1. **Veja o erro:**
   ```bash
   npx playwright show-report
   ```

2. **Debug o teste específico:**
   ```bash
   npx playwright test T2 --debug
   ```

3. **Avisa aqui com:**
   - Qual teste falhou (T1, T2, etc)
   - Print do erro
   - Output do console

---

## 📝 Arquivos Criados

```
portfolio-showcase/
├── tests/
│   └── e2e-tests.spec.js          (17 testes)
├── playwright.config.js            (config)
└── playwright-report/              (gerado após testes)
```

---

## ⏱️ Timeline

- Instalação Playwright: 2 min
- Rodar 17 testes: ~1-2 min
- Ver relatório: < 1 min

**Total:** ~5 min

---

**Depois dos testes passarem (17/17):** ✅

1. Screenshots automáticas foram salvas em `playwright-report/`
2. Portfolio 100% validado
3. Pronto para DIA 2

**Go!** 🚀
```bash
npm install -D @playwright/test && npx playwright test
```
