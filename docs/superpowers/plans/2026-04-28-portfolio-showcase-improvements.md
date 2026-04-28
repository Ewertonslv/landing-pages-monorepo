# Portfolio Showcase — Melhorias de Conversão — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir os 5 bloqueadores de conversão no portfolio-showcase sem adicionar dependências.

**Architecture:** Todas as mudanças são cirúrgicas dentro de `portfolio-showcase/src/App.jsx`. Extraímos constantes de config para o topo do arquivo, substituímos o form fake por redirect WhatsApp, removemos social proof fabricado, tornamos a calculadora de ROI interativa e removemos o botão que expõe o GitHub.

**Tech Stack:** React 18, Tailwind CSS, Vite 4. Sem novas libs.

---

## Mapa de arquivos

| Arquivo | Ação |
|---|---|
| `portfolio-showcase/src/App.jsx` | Modificar (único arquivo) |

---

### Task 1: Bloco de config + CALENDLY_URL no handleScheduleCall

**Files:**
- Modify: `portfolio-showcase/src/App.jsx` — linhas 1–4 (inserir config) e linha 109–111 (usar constante)

- [ ] **Step 1: Abrir o arquivo e localizar o início**

O arquivo começa em:
```jsx
import React, { useState } from 'react';
import './index.css';
```

- [ ] **Step 2: Inserir bloco de config logo após os imports**

Substituir as duas primeiras linhas por:
```jsx
import React, { useState } from 'react';
import './index.css';

// ─── CONFIG — edite aqui antes de publicar ────────────────────────────────────
const WHATSAPP_NUMBER = '5511987654321'; // 55 + DDD + número, sem espaços ou traços
const CALENDLY_URL    = 'https://calendly.com/seu-username/consultoria';
// ─────────────────────────────────────────────────────────────────────────────
```

- [ ] **Step 3: Atualizar handleScheduleCall para usar a constante**

Localizar (linha ~109):
```jsx
  const handleScheduleCall = () => {
    window.open('https://calendly.com/seu-username/consultoria', '_blank');
  };
```

Substituir por:
```jsx
  const handleScheduleCall = () => {
    window.open(CALENDLY_URL, '_blank');
  };
```

- [ ] **Step 4: Verificar no browser**

```bash
cd "C:\Users\Ewerton\Documents\Projetos github\landing-pages-monorepo\portfolio-showcase"
npm run dev
```

Abrir `http://localhost:3000`, clicar em "Agendar Demonstração" no header. Deve abrir nova aba com a URL do Calendly.

- [ ] **Step 5: Commit**

```bash
cd "C:\Users\Ewerton\Documents\Projetos github\landing-pages-monorepo"
git add portfolio-showcase/src/App.jsx
git commit -m "config: extrair WHATSAPP_NUMBER e CALENDLY_URL para bloco de config"
```

---

### Task 2: Social proof honesto — remover números fabricados

**Files:**
- Modify: `portfolio-showcase/src/App.jsx` — seção do banner hero (~linhas 165–183)

- [ ] **Step 1: Localizar o grid de 4 métricas no banner**

Buscar no arquivo por `500+` — está dentro de um `<div className="grid md:grid-cols-4 gap-8 text-center">`.

O bloco atual:
```jsx
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-purple-200">Consultores/Coaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.2%</div>
              <div className="text-purple-200">Conversão média</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5-7</div>
              <div className="text-purple-200">Dias de entrega</div>
            </div>
            <div>
              <div className="text-4xl font-bold">R$ 2.997</div>
              <div className="text-purple-200">Investimento único</div>
            </div>
          </div>
```

- [ ] **Step 2: Substituir pelos valores honestos**

```jsx
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">6</div>
              <div className="text-purple-200">Templates prontos</div>
            </div>
            <div>
              <div className="text-4xl font-bold">3–7%</div>
              <div className="text-purple-200">Conversão esperada</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5-7</div>
              <div className="text-purple-200">Dias de entrega</div>
            </div>
            <div>
              <div className="text-4xl font-bold">R$ 2.997</div>
              <div className="text-purple-200">Investimento único</div>
            </div>
          </div>
```

- [ ] **Step 3: Atualizar o subtítulo da seção de contato**

Localizar (~linha 383):
```jsx
            <p className="text-gray-600 mb-8 text-center">Reserve 15 minutos para descobrir como 500+ consultores aumentaram suas vendas</p>
```

Substituir por:
```jsx
            <p className="text-gray-600 mb-8 text-center">Reserve 15 minutos para ver os templates ao vivo e entender como podemos aumentar sua conversão</p>
```

- [ ] **Step 4: Verificar no browser**

Recarregar `http://localhost:3000`. O banner deve mostrar "6 Templates prontos" e "3–7% Conversão esperada". Nenhum "500+" deve aparecer na página.

- [ ] **Step 5: Commit**

```bash
git add portfolio-showcase/src/App.jsx
git commit -m "fix: remover social proof fabricado, substituir por métricas honestas"
```

---

### Task 3: Formulário → redirect WhatsApp com mensagem pré-preenchida

**Files:**
- Modify: `portfolio-showcase/src/App.jsx` — estado `formLoading`, função `onSubmit`, link Calendly secundário (~linhas 107–108, 387–398, 456–477)

- [ ] **Step 1: Remover o state formLoading**

Localizar (~linha 107):
```jsx
  const [formLoading, setFormLoading] = useState(false);
```

Deletar essa linha (não é mais necessária).

- [ ] **Step 2: Substituir o onSubmit inteiro**

Localizar o bloco:
```jsx
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!formData.name || !formData.email) {
                    alert('Por favor, preencha nome e email');
                    return;
                  }
                  setFormLoading(true);
                  setTimeout(() => {
                    alert('✅ Mensagem recebida! Você receberá um email de confirmação em segundos.\n\nProximan passo: Agendar sua call em Calendly.');
                    setFormData({ name: '', email: '', empresa: '', interesse: '', mensagem: '' });
                    setFormLoading(false);
                  }, 1000);
                }}
```

Substituir por:
```jsx
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!formData.name || !formData.email) {
                    alert('Por favor, preencha nome e email');
                    return;
                  }
                  const texto = [
                    `Olá! Tenho interesse em uma landing page.`,
                    `Nome: ${formData.name}`,
                    `Email: ${formData.email}`,
                    formData.empresa  ? `Empresa/Nicho: ${formData.empresa}`  : null,
                    formData.interesse ? `Interesse: ${formData.interesse}` : null,
                    formData.mensagem  ? `Mensagem: ${formData.mensagem}`   : null,
                  ].filter(Boolean).join('\n');
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
                  setFormData({ name: '', email: '', empresa: '', interesse: '', mensagem: '' });
                }}
```

- [ ] **Step 3: Atualizar o botão de submit (remover disabled e loading)**

Localizar:
```jsx
                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {formLoading ? 'Enviando...' : 'Enviar e Agendar Chamada'}
                </button>
```

Substituir por:
```jsx
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Enviar via WhatsApp
                </button>
```

- [ ] **Step 4: Adicionar link Calendly secundário abaixo do botão**

Logo após o botão de submit (antes do `</form>`), inserir:
```jsx
                <p className="text-center text-sm text-gray-500 mt-3">
                  Prefere agendar uma call?{' '}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:text-purple-700 underline"
                  >
                    Clique aqui para o Calendly
                  </a>
                </p>
```

- [ ] **Step 5: Verificar no browser**

Ir para a aba "Contato". Preencher nome "Teste" e email "teste@teste.com". Clicar "Enviar via WhatsApp". Deve abrir o WhatsApp Web (ou app) com a mensagem pré-preenchida contendo os dados do formulário. O formulário deve ser limpo após o envio.

- [ ] **Step 6: Commit**

```bash
git add portfolio-showcase/src/App.jsx
git commit -m "feat: formulário de contato redireciona para WhatsApp com mensagem pré-preenchida"
```

---

### Task 4: Remover botão "Código" → substituir por "Agendar Demo" WhatsApp

**Files:**
- Modify: `portfolio-showcase/src/App.jsx` — seção de detalhe do template selecionado (~linhas 237–249)

- [ ] **Step 1: Localizar o par de botões abaixo do preview**

Buscar por `Agendar Demonstração` dentro do `<div className="mt-4 flex gap-2">`. O bloco atual:
```jsx
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={handleScheduleCall}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        Agendar Demonstração
                      </button>
                      <button
                        onClick={() => window.open(`https://github.com/Ewertonslv/landing-pages-monorepo`, '_blank')}
                        className="px-6 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                      >
                        Código
                      </button>
                    </div>
```

- [ ] **Step 2: Substituir o botão "Código" por "Falar no WhatsApp"**

```jsx
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={handleScheduleCall}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        Agendar Demonstração
                      </button>
                      <button
                        onClick={() => {
                          const msg = `Olá! Tenho interesse no template: ${selectedTemplate.name}`;
                          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
                        }}
                        className="px-6 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                      >
                        WhatsApp
                      </button>
                    </div>
```

- [ ] **Step 3: Verificar no browser**

Na aba "Templates", selecionar qualquer template. Abaixo do preview, clicar "WhatsApp". Deve abrir WhatsApp com a mensagem "Olá! Tenho interesse no template: [nome do template]". O botão "Código" não deve existir mais.

- [ ] **Step 4: Commit**

```bash
git add portfolio-showcase/src/App.jsx
git commit -m "fix: remover botão Código que expõe GitHub, substituir por CTA WhatsApp"
```

---

### Task 5: Calculadora de ROI interativa

**Files:**
- Modify: `portfolio-showcase/src/App.jsx` — adicionar state `roi`, substituir seção estática (~linhas 351–376)

- [ ] **Step 1: Adicionar state roi ao bloco de useState existente**

Localizar o bloco de estados no início do componente App (~linha 98):
```jsx
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [activeSection, setActiveSection] = useState('templates');
  const [formData, setFormData] = useState({
```

Inserir após `setActiveSection`:
```jsx
  const [roi, setRoi] = useState({ visitors: 1000, currentRate: 1, ticket: 497 });
```

- [ ] **Step 2: Adicionar cálculo derivado logo antes do return**

Localizar a linha `return (` do componente App. Inserir imediatamente antes dela:
```jsx
  const roiBeforeSales   = Math.floor(roi.visitors * roi.currentRate / 100);
  const roiAfterSales    = Math.floor(roi.visitors * 5 / 100);
  const roiBeforeRevenue = roiBeforeSales * roi.ticket;
  const roiAfterRevenue  = roiAfterSales  * roi.ticket;
  const roiGain          = roiAfterRevenue - roiBeforeRevenue;
  const roiPercent       = Math.round((roiGain / 2997) * 100);
```

- [ ] **Step 3: Localizar a seção estática da calculadora**

Buscar por `Calculadora de ROI` — está dentro da seção `activeSection === 'precos'`. O bloco a substituir começa em:
```jsx
            {/* ROI Calculator */}
            <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculadora de ROI</h3>
              <div className="grid md:grid-cols-2 gap-8">
```
...e termina no `</div>` que fecha o bloco `Calculadora de ROI`.

- [ ] **Step 4: Substituir pelo bloco interativo**

```jsx
            {/* ROI Calculator */}
            <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Calculadora de ROI</h3>
              <p className="text-gray-600 mb-6">Digite seus números e veja o impacto real</p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Visitantes/mês</label>
                  <input
                    type="number"
                    min="0"
                    value={roi.visitors}
                    onChange={(e) => setRoi({ ...roi, visitors: Number(e.target.value) || 0 })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Taxa de conversão atual (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={roi.currentRate}
                    onChange={(e) => setRoi({ ...roi, currentRate: Number(e.target.value) || 0 })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ticket médio (R$)</label>
                  <input
                    type="number"
                    min="0"
                    value={roi.ticket}
                    onChange={(e) => setRoi({ ...roi, ticket: Number(e.target.value) || 0 })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Situação Atual</h4>
                  <div className="space-y-3 bg-white rounded-lg p-4">
                    <div>Taxa de conversão: <strong>{roi.currentRate}%</strong></div>
                    <div>{roi.visitors.toLocaleString('pt-BR')} visitantes = <strong>{roiBeforeSales.toLocaleString('pt-BR')} vendas</strong></div>
                    <div>Receita: <strong className="text-red-600">R$ {roiBeforeRevenue.toLocaleString('pt-BR')}</strong></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Com Nossa LP (5%)</h4>
                  <div className="space-y-3 bg-white rounded-lg p-4">
                    <div>Taxa de conversão: <strong className="text-green-600">5%</strong></div>
                    <div>{roi.visitors.toLocaleString('pt-BR')} visitantes = <strong className="text-green-600">{roiAfterSales.toLocaleString('pt-BR')} vendas</strong></div>
                    <div>Receita: <strong className="text-green-600">R$ {roiAfterRevenue.toLocaleString('pt-BR')}</strong></div>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-lg text-center mb-4">
                <div className="text-sm font-medium">Ganho Mensal Estimado</div>
                <div className="text-4xl font-bold">R$ {roiGain.toLocaleString('pt-BR')}</div>
                <div className="text-sm mt-2">ROI estimado de {roiPercent.toLocaleString('pt-BR')}% no primeiro mês</div>
              </div>

              <button
                onClick={() => {
                  const msg = `Olá! Calculei meu ROI: com ${roi.visitors} visitantes/mês e ticket R$ ${roi.ticket}, passando de ${roi.currentRate}% para 5% de conversão, ganho R$ ${roiGain.toLocaleString('pt-BR')}/mês. Quero saber mais!`;
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Quero esse ROI — Falar no WhatsApp
              </button>
            </div>
```

- [ ] **Step 5: Verificar no browser**

Ir para a aba "Preços". Rolar até "Calculadora de ROI". Deve mostrar 3 campos editáveis. Alterar "Visitantes/mês" para 2000 — os valores "Antes" e "Depois" devem atualizar imediatamente. Clicar no botão verde — deve abrir WhatsApp com mensagem contendo os números calculados.

- [ ] **Step 6: Commit final**

```bash
git add portfolio-showcase/src/App.jsx
git commit -m "feat: calculadora de ROI interativa com redirect WhatsApp"
```

---

## Self-Review

### Cobertura do spec

| Requisito do spec | Task que implementa |
|---|---|
| Bloco de config WHATSAPP_NUMBER + CALENDLY_URL no topo | Task 1 |
| handleScheduleCall usa constante | Task 1 |
| Form → WhatsApp com mensagem pré-preenchida | Task 3 |
| Remover formLoading desnecessário | Task 3 |
| Calendly como link secundário | Task 3 |
| "500+" → "6 Templates prontos" | Task 2 |
| "4.2%" → "3–7% Conversão esperada" | Task 2 |
| Subtítulo seção contato atualizado | Task 2 |
| ROI interativo com 3 inputs | Task 5 |
| Resultados em tempo real | Task 5 |
| Botão "Quero esse ROI" → WhatsApp | Task 5 |
| Remover botão "Código" / GitHub | Task 4 |
| Substituir por CTA WhatsApp | Task 4 |

Todos os requisitos cobertos. ✅

### Placeholder scan

Nenhum TBD, TODO ou "implement later" encontrado. ✅

### Consistência de tipos/nomes

- `WHATSAPP_NUMBER` usado em Tasks 3, 4 e 5 — definido em Task 1. ✅
- `CALENDLY_URL` usado em Task 1 (handleScheduleCall) e Task 3 (link secundário). ✅
- `roi` state definido em Task 5 Step 1, usado em Steps 2 e 4. ✅
- `roiGain`, `roiPercent`, etc. definidos em Task 5 Step 2, usados em Step 4. ✅
- `selectedTemplate` já existia no estado original — usado em Task 4 sem redefinição. ✅
