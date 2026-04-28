# Design: Portfolio Showcase — Melhorias de Conversão

**Data:** 2026-04-28  
**Arquivo alvo:** `portfolio-showcase/src/App.jsx`  
**Escopo:** 5 mudanças cirúrgicas no arquivo existente. Sem novas dependências.

---

## Contexto

O portfolio-showcase é a principal ferramenta de vendas do projeto. Atualmente tem três bloqueadores críticos que tornam a taxa de conversão zero: formulário que não envia nada, URL do Calendly com placeholder, e social proof fabricado. Além disso, a calculadora de ROI é estática, perdendo a oportunidade de engajamento personalizado.

---

## Mudança 1 — Bloco de configuração no topo do arquivo

Extrair todas as constantes que precisam ser editadas para produção para um bloco de config explícito no topo do `App.jsx`, antes de qualquer componente:

```js
// ─── CONFIG ──────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '5511987654321'; // formato: 55 + DDD + número, sem espaços
const CALENDLY_URL    = 'https://calendly.com/seu-username/consultoria';
// ─────────────────────────────────────────────────────────────────────────────
```

`handleScheduleCall` passa a usar `CALENDLY_URL`. O form passa a usar `WHATSAPP_NUMBER`.

---

## Mudança 2 — Formulário → WhatsApp com mensagem pré-preenchida

No `onSubmit` do formulário, ao invés do `setTimeout` fake:

1. Montar a mensagem com os dados preenchidos:
   ```
   Olá! Tenho interesse em uma landing page.
   Nome: {name}
   Email: {email}
   Empresa/Nicho: {empresa}
   Interesse: {interesse}
   Mensagem: {mensagem}
   ```
2. Abrir `https://wa.me/{WHATSAPP_NUMBER}?text={encodeURIComponent(mensagem)}`
3. Remover o `formLoading` state (desnecessário sem async)
4. Adicionar Calendly como link de texto secundário abaixo do botão de submit:
   > "Prefere agendar uma call? [Clique aqui](CALENDLY_URL)"

**Resultado:** zero infraestrutura, funciona hoje, lead chega com contexto pré-preenchido.

---

## Mudança 3 — Social proof honesto

Substituir os 4 números do banner hero:

| Antes (fabricado) | Depois (honesto) |
|---|---|
| `500+` Consultores/Coaches | `6` Templates prontos |
| `4.2%` Conversão média | `3–7%` Conversão esperada |
| `5–7` Dias de entrega | `5–7` Dias de entrega *(mantém)* |
| `R$ 2.997` Investimento único | `R$ 2.997` Investimento único *(mantém)* |

Subtítulo do banner: trocar "Reserve 15 minutos para descobrir como 500+ consultores aumentaram suas vendas" por "Reserve 15 minutos para ver os templates ao vivo e entender como podemos aumentar sua conversão".

---

## Mudança 4 — Calculadora de ROI interativa

Substituir a seção estática de ROI por uma versão com 3 inputs controlados:

**State adicionado:**
```js
const [roi, setRoi] = useState({ visitors: 1000, currentRate: 1, ticket: 497 });
```

**Inputs:** visitantes/mês, taxa de conversão atual (%), ticket médio (R$).

**Cálculo em tempo real (derivado, sem state extra):**
```js
const beforeSales   = Math.floor(roi.visitors * roi.currentRate / 100);
const afterSales    = Math.floor(roi.visitors * 0.05);
const beforeRevenue = beforeSales * roi.ticket;
const afterRevenue  = afterSales  * roi.ticket;
const gain          = afterRevenue - beforeRevenue;
const roiPercent    = Math.round((gain / 2997) * 100);
```

**Abaixo dos resultados:** botão "Quero esse ROI" que abre WhatsApp com mensagem incluindo os números calculados.

---

## Mudança 5 — Remover botão "Código"

No painel de detalhe do template selecionado, o botão "Código" linka para o repositório GitHub público. Isso é contraproducente para um produto pago.

Substituir por um segundo botão "Agendar Demo" que abre o WhatsApp — reforça o CTA ao invés de desviar o lead para o código-fonte.

---

## Fora de escopo

- Migração para Astro/Next.js (mudança arquitetural grande)
- CTA buttons nos templates individuais (sem tráfego ainda)
- Backend real para o formulário (WhatsApp resolve sem infra)
- Analytics/GA4 (próxima iteração)

---

## Critérios de sucesso

- [ ] Formulário submetido abre WhatsApp com mensagem pré-preenchida
- [ ] Nenhum número/stat fabricado visível na página
- [ ] Calculadora atualiza resultados ao digitar em qualquer campo
- [ ] Botão "Código" não existe mais na página
- [ ] WHATSAPP_NUMBER e CALENDLY_URL estão no topo do arquivo, fáceis de encontrar
