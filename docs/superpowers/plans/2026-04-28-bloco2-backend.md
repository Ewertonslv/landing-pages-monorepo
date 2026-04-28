# Bloco 2 — Backend Infraestrutura Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar 3 serverless functions Vercel (leads, copy-generator, webhook-stripe) + schema Supabase, transformando o portfolio-showcase numa plataforma com CRM básico e geração de copy com IA.

**Architecture:** Vercel API Routes (`portfolio-showcase/api/`) com Node.js ESM. Supabase como banco PostgreSQL. Groq (Llama 3.1 70B) para geração de copy. Stripe webhooks para captura de pagamento. Resend para email transacional. O formulário do App.jsx continua abrindo WhatsApp mas agora também persiste o lead no banco.

**Tech Stack:** @supabase/supabase-js, groq-sdk, stripe, resend — todos instalados no portfolio-showcase. Variáveis de ambiente via `.env.local` (dev) e Vercel dashboard (prod).

---

## Mapa de Arquivos

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `portfolio-showcase/package.json` | Modificar | Adicionar 4 dependências |
| `portfolio-showcase/.env.example` | Criar | Documentar variáveis necessárias |
| `portfolio-showcase/vercel.json` | Criar | Rewrite SPA + config functions |
| `portfolio-showcase/supabase/schema.sql` | Criar | DDL completo das 4 tabelas |
| `portfolio-showcase/api/_supabase.js` | Criar | Cliente Supabase compartilhado |
| `portfolio-showcase/api/_body.js` | Criar | Parser de body raw (stream → JSON) |
| `portfolio-showcase/api/leads.js` | Criar | POST /api/leads → salva no Supabase |
| `portfolio-showcase/api/copy-generator.js` | Criar | POST /api/copy-generator → Groq → Supabase |
| `portfolio-showcase/api/webhook-stripe.js` | Criar | POST /api/webhook-stripe → cliente + email |
| `portfolio-showcase/src/App.jsx` | Modificar | onSubmit do form faz POST /api/leads |

---

## Task 1: Dependências + .env.example

**Files:**
- Modify: `portfolio-showcase/package.json`
- Create: `portfolio-showcase/.env.example`

- [ ] **Step 1: Instalar as 4 dependências**

```bash
cd "portfolio-showcase" && npm install @supabase/supabase-js groq-sdk stripe resend
```

Saída esperada: `added N packages` sem erros.

- [ ] **Step 2: Criar .env.example**

Criar o arquivo `portfolio-showcase/.env.example`:

```
# Supabase — https://supabase.com/dashboard/project/_/settings/api
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Groq — https://console.groq.com/keys
GROQ_API_KEY=gsk_...

# Stripe — https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend — https://resend.com/api-keys
RESEND_API_KEY=re_...
```

- [ ] **Step 3: Criar .env.local com valores reais**

Copiar `.env.example` para `.env.local` e preencher as chaves reais. Este arquivo não é commitado (.gitignore já o exclui por padrão).

- [ ] **Step 4: Verificar build não quebrou**

```bash
cd "portfolio-showcase" && npm run build
```

Saída esperada: `✓ built in Xs`

---

## Task 2: vercel.json

**Files:**
- Create: `portfolio-showcase/vercel.json`

- [ ] **Step 1: Criar vercel.json**

```json
{
  "rewrites": [
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ],
  "functions": {
    "api/*.js": {
      "memory": 256,
      "maxDuration": 30
    }
  }
}
```

O rewrite garante que rotas do SPA (sem `/api/`) sempre caem no `index.html`. As functions têm 256 MB de RAM e 30s de timeout — suficiente para chamadas ao Groq.

---

## Task 3: Schema Supabase

**Files:**
- Create: `portfolio-showcase/supabase/schema.sql`

- [ ] **Step 1: Criar arquivo schema.sql**

```sql
-- Habilitar extensão para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- leads: capturado pelo formulário de contato
CREATE TABLE leads (
  id          uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  name        text        NOT NULL,
  email       text        NOT NULL,
  empresa     text,
  interesse   text,
  mensagem    text,
  status      text        DEFAULT 'novo'
                          CHECK (status IN ('novo', 'contatado', 'convertido', 'perdido')),
  created_at  timestamptz DEFAULT now()
);

-- clientes: criado pelo webhook do Stripe após pagamento
CREATE TABLE clientes (
  id                  uuid    DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id             uuid    REFERENCES leads(id),
  name                text    NOT NULL,
  email               text    NOT NULL,
  plano               text    NOT NULL
                              CHECK (plano IN ('individual', 'agencia', 'whitelabel')),
  valor               numeric NOT NULL,
  stripe_payment_id   text    UNIQUE,
  status              text    DEFAULT 'ativo'
                              CHECK (status IN ('ativo', 'pausado', 'cancelado')),
  created_at          timestamptz DEFAULT now()
);

-- projetos: cada LP encomendada por um cliente
CREATE TABLE projetos (
  id           uuid    DEFAULT gen_random_uuid() PRIMARY KEY,
  cliente_id   uuid    REFERENCES clientes(id),
  template     text    NOT NULL,
  nicho        text,
  status       text    DEFAULT 'briefing'
                       CHECK (status IN ('briefing', 'em_producao', 'revisao', 'entregue')),
  vercel_url   text,
  created_at   timestamptz DEFAULT now(),
  delivered_at timestamptz
);

-- copies: blocos de copy gerados pelo Copy Generator
CREATE TABLE copies (
  id          uuid    DEFAULT gen_random_uuid() PRIMARY KEY,
  projeto_id  uuid    REFERENCES projetos(id),
  nicho       text    NOT NULL,
  dor         text    NOT NULL,
  solucao     text    NOT NULL,
  blocos      jsonb   NOT NULL,
  aprovado    boolean DEFAULT false,
  created_at  timestamptz DEFAULT now()
);
```

- [ ] **Step 2: Executar no Supabase**

1. Abrir https://supabase.com/dashboard
2. Selecionar projeto → SQL Editor
3. Colar o conteúdo de `schema.sql`
4. Clicar em **Run**
5. Verificar que as 4 tabelas aparecem em **Table Editor**

---

## Task 4: Utilitários compartilhados da API

**Files:**
- Create: `portfolio-showcase/api/_supabase.js`
- Create: `portfolio-showcase/api/_body.js`

Arquivos com prefixo `_` não são tratados como serverless functions pelo Vercel.

- [ ] **Step 1: Criar api/_supabase.js**

```js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
```

- [ ] **Step 2: Criar api/_body.js**

Vercel não auto-parseia o body em funções serverless puras (não-Next.js). Este helper lê o stream e devolve o JSON.

```js
async function rawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export async function parseBody(req) {
  const buf = await rawBody(req);
  return JSON.parse(buf.toString('utf-8'));
}

export { rawBody };
```

---

## Task 5: leads.js — Captura de lead

**Files:**
- Create: `portfolio-showcase/api/leads.js`

- [ ] **Step 1: Criar api/leads.js**

```js
import { supabase } from './_supabase.js';
import { parseBody } from './_body.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body;
  try {
    body = await parseBody(req);
  } catch {
    return res.status(400).json({ error: 'Body inválido' });
  }

  const { name, email, empresa, interesse, mensagem } = body;

  if (!name || !email) {
    return res.status(400).json({ error: 'name e email são obrigatórios' });
  }

  const { data, error } = await supabase
    .from('leads')
    .insert({ name, email, empresa, interesse, mensagem })
    .select('id')
    .single();

  if (error) {
    console.error('Supabase leads error:', error);
    return res.status(500).json({ error: 'Erro ao salvar lead' });
  }

  return res.status(201).json({ id: data.id });
}
```

- [ ] **Step 2: Testar com curl (após npm run dev)**

```bash
curl -X POST http://localhost:5173/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@email.com","interesse":"individual"}'
```

Resposta esperada: `{"id":"uuid-aqui"}`

Verificar no Supabase Table Editor → tabela `leads` que o registro apareceu.

---

## Task 6: copy-generator.js — Copy com Groq

**Files:**
- Create: `portfolio-showcase/api/copy-generator.js`

- [ ] **Step 1: Criar api/copy-generator.js**

```js
import Groq from 'groq-sdk';
import { supabase } from './_supabase.js';
import { parseBody } from './_body.js';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function buildPrompt(nicho, dor, solucao) {
  return `Você é um expert em copywriting de alta conversão para landing pages no Brasil.
Crie 15 blocos de copy para uma landing page profissional.

Nicho: ${nicho}
Problema principal do cliente: ${dor}
Solução oferecida: ${solucao}

Retorne APENAS um JSON válido com esta estrutura exata (sem markdown, sem explicações):
{
  "headline": "Título principal impactante (máx 10 palavras)",
  "subheadline": "Subtítulo que complementa o título (máx 20 palavras)",
  "hero_cta": "Texto do botão CTA principal (máx 5 palavras)",
  "problema_titulo": "Título da seção de problema (máx 8 palavras)",
  "problema_itens": ["dor específica 1", "dor específica 2", "dor específica 3", "dor específica 4"],
  "solucao_titulo": "Título da seção de solução (máx 8 palavras)",
  "beneficios": [
    {"titulo": "Benefício 1", "descricao": "Descrição clara e específica"},
    {"titulo": "Benefício 2", "descricao": "Descrição clara e específica"},
    {"titulo": "Benefício 3", "descricao": "Descrição clara e específica"},
    {"titulo": "Benefício 4", "descricao": "Descrição clara e específica"},
    {"titulo": "Benefício 5", "descricao": "Descrição clara e específica"},
    {"titulo": "Benefício 6", "descricao": "Descrição clara e específica"}
  ],
  "prova_social": "X+ clientes já usam esta solução com resultado Y",
  "depoimento_1": {"nome": "Nome Sobrenome", "cargo": "Cargo, Empresa", "texto": "Depoimento realista e específico de 2-3 frases"},
  "depoimento_2": {"nome": "Nome Sobrenome", "cargo": "Cargo, Empresa", "texto": "Depoimento realista e específico de 2-3 frases"},
  "oferta_titulo": "Título da oferta principal (máx 8 palavras)",
  "cta_final": "Texto do CTA de fechamento (máx 6 palavras)",
  "urgencia": "Frase de escassez ou urgência crível e específica",
  "garantia": "Texto de garantia que elimina o risco do comprador",
  "ps": "Post scriptum persuasivo em 1-2 frases que reforça o benefício principal"
}`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body;
  try {
    body = await parseBody(req);
  } catch {
    return res.status(400).json({ error: 'Body inválido' });
  }

  const { nicho, dor, solucao, projeto_id } = body;

  if (!nicho || !dor || !solucao) {
    return res.status(400).json({ error: 'nicho, dor e solucao são obrigatórios' });
  }

  let blocos;
  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-70b-versatile',
      messages: [{ role: 'user', content: buildPrompt(nicho, dor, solucao) }],
      temperature: 0.7,
      max_tokens: 2048,
    });

    const raw = completion.choices[0].message.content.trim();
    const jsonStr = raw.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    blocos = JSON.parse(jsonStr);
  } catch (err) {
    console.error('Groq/parse error:', err);
    return res.status(500).json({ error: 'Erro ao gerar copy com IA' });
  }

  const { data, error } = await supabase
    .from('copies')
    .insert({ nicho, dor, solucao, blocos, projeto_id: projeto_id ?? null })
    .select('id')
    .single();

  if (error) {
    console.error('Supabase copies error:', error);
    return res.status(500).json({ error: 'Erro ao salvar copy' });
  }

  return res.status(201).json({ id: data.id, blocos });
}
```

- [ ] **Step 2: Testar com curl**

```bash
curl -X POST http://localhost:5173/api/copy-generator \
  -H "Content-Type: application/json" \
  -d '{"nicho":"Coaching de carreira","dor":"Profissionais presos em empregos que odeiam sem saber como mudar","solucao":"Programa de 90 dias que leva do emprego ao negócio próprio"}'
```

Resposta esperada: JSON com `id` e `blocos` contendo os 15 campos.

Verificar que o registro aparece na tabela `copies` do Supabase.

---

## Task 7: webhook-stripe.js — Pagamento → CRM → Email

**Files:**
- Create: `portfolio-showcase/api/webhook-stripe.js`

- [ ] **Step 1: Criar api/webhook-stripe.js**

```js
import Stripe from 'stripe';
import { Resend } from 'resend';
import { supabase } from './_supabase.js';
import { rawBody } from './_body.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// Email enviado ao cliente após pagamento confirmado
function buildConfirmationEmail(name, valor, plano) {
  const planoLabel = { individual: 'Individual', agencia: 'Agência', whitelabel: 'White Label' };
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px">
      <h2 style="color:#7C3AED">Pagamento confirmado! 🎉</h2>
      <p>Olá, <strong>${name}</strong>!</p>
      <p>Recebemos seu pagamento de <strong>R$ ${valor.toFixed(2)}</strong> referente ao plano <strong>${planoLabel[plano] || plano}</strong>.</p>
      <p>Nossa equipe entrará em contato em até <strong>24 horas úteis</strong> para iniciar o briefing da sua landing page.</p>
      <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0">
      <p style="color:#6B7280;font-size:14px">Dúvidas? Responda este email ou acesse nosso WhatsApp.</p>
      <p style="color:#6B7280;font-size:14px">Equipe Landing Pages Pro</p>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const sig = req.headers['stripe-signature'];
  const buf = await rawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Stripe signature error:', err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true, skipped: event.type });
  }

  const session = event.data.object;
  const email = session.customer_email || session.customer_details?.email;
  const name  = session.customer_details?.name || email;
  const plano = session.metadata?.plano || 'individual';
  const valor = (session.amount_total || 0) / 100;

  // Criar cliente no CRM
  const { data: cliente, error: clienteError } = await supabase
    .from('clientes')
    .insert({
      name,
      email,
      plano,
      valor,
      stripe_payment_id: session.payment_intent || session.id,
    })
    .select('id')
    .single();

  if (clienteError) {
    console.error('Supabase clientes error:', clienteError);
    return res.status(500).json({ error: 'Erro ao criar cliente' });
  }

  // Criar projeto em status inicial
  const { error: projetoError } = await supabase
    .from('projetos')
    .insert({
      cliente_id: cliente.id,
      template: session.metadata?.template || 'a definir',
      status: 'briefing',
    });

  if (projetoError) {
    console.error('Supabase projetos error:', projetoError);
  }

  // Enviar email de confirmação
  const { error: emailError } = await resend.emails.send({
    from: 'contato@seudominio.com.br', // Substitua pelo domínio verificado no Resend
    to: email,
    subject: `Pagamento confirmado — Plano ${plano}`,
    html: buildConfirmationEmail(name, valor, plano),
  });

  if (emailError) {
    console.error('Resend error:', emailError);
  }

  return res.status(200).json({ received: true, cliente_id: cliente.id });
}
```

- [ ] **Step 2: Testar com Stripe CLI (opcional, recomendado)**

Instalar Stripe CLI: https://stripe.com/docs/stripe-cli

```bash
stripe listen --forward-to localhost:5173/api/webhook-stripe
```

Em outro terminal, disparar evento de teste:

```bash
stripe trigger checkout.session.completed
```

Verificar que:
1. Um registro aparece na tabela `clientes` do Supabase
2. Um registro aparece na tabela `projetos` do Supabase
3. O email é enviado (visível no dashboard do Resend)

---

## Task 8: Atualizar App.jsx — form persiste lead

**Files:**
- Modify: `portfolio-showcase/src/App.jsx`

O formulário já abre WhatsApp com dados pré-preenchidos. Agora também persiste o lead no Supabase via `/api/leads` antes de redirecionar. Se a API falhar, o WhatsApp ainda abre (fail-open).

- [ ] **Step 1: Localizar o onSubmit do formulário**

No `App.jsx`, encontrar a função `handleFormSubmit` (ou o `onSubmit` do form de contato). Ela atualmente monta a mensagem e abre `window.open(wa.me/...)`.

- [ ] **Step 2: Adicionar o POST /api/leads antes do window.open**

Localizar o trecho que abre o WhatsApp e adicionar o `fetch` antes:

```jsx
const handleFormSubmit = async (e) => {
  e.preventDefault();

  // Persiste lead no banco (fail-open: WhatsApp abre mesmo se falhar)
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        empresa: formData.empresa,
        interesse: formData.interesse,
        mensagem: formData.mensagem,
      }),
    });
  } catch {
    // silencia erro — WhatsApp abre de qualquer forma
  }

  const texto = [
    `Olá! Tenho interesse em uma landing page.`,
    `Nome: ${formData.name}`,
    `Email: ${formData.email}`,
    formData.empresa   ? `Empresa/Nicho: ${formData.empresa}`   : null,
    formData.interesse ? `Interesse: ${formData.interesse}`      : null,
    formData.mensagem  ? `Mensagem: ${formData.mensagem}`        : null,
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
};
```

- [ ] **Step 3: Verificar que a função está conectada ao form**

O `<form>` deve ter `onSubmit={handleFormSubmit}`. Confirmar que não há dois handlers conflitantes.

- [ ] **Step 4: Rebuild e verificar**

```bash
cd "portfolio-showcase" && npm run build
```

Saída esperada: `✓ built in Xs` sem erros.

---

## Checklist de variáveis antes de ir ao ar

Antes de fazer deploy no Vercel, configurar em **Settings → Environment Variables**:

| Variável | Onde obter |
|---|---|
| `SUPABASE_URL` | Supabase → Project Settings → API |
| `SUPABASE_ANON_KEY` | Supabase → Project Settings → API |
| `GROQ_API_KEY` | console.groq.com/keys |
| `STRIPE_SECRET_KEY` | dashboard.stripe.com/apikeys |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Webhooks → seu endpoint → Signing secret |
| `RESEND_API_KEY` | resend.com/api-keys |
