# Handoff — Landing Pages Monorepo
**Data:** 2026-04-28  
**Para continuar:** Mande este arquivo para o Claude ler antes de qualquer coisa.

---

## Estado Atual

### Bloco 1 — Concluído ✅
- CTA buttons funcionando em todos os 6 templates (`onClick` com `window.open`)
- Countdown timer corrigido (data atualizada para 2026)
- GA4 + banner LGPD adicionados ao `portfolio-showcase/src/App.jsx`
- Build verificado: `npm run build` passa sem erros

### Bloco 2 — Backend — NÃO INICIADO ⏳
O plano completo está em:
```
docs/superpowers/plans/2026-04-28-bloco2-backend.md
```
**Nenhum arquivo do Bloco 2 foi criado ainda.** Tudo precisa ser feito do zero.

---

## O Que Precisa Ser Feito (Bloco 2)

### Task 1 — Dependências + .env.example
```bash
cd "C:/Users/Ewerton/Documents/Projetos github/landing-pages-monorepo/portfolio-showcase"
npm install @supabase/supabase-js groq-sdk stripe resend
```
Depois criar o arquivo `portfolio-showcase/.env.example` com este conteúdo:
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
Também criar `portfolio-showcase/.env.local` (não commitado) com as chaves reais.

---

### Task 2 — vercel.json
Criar `portfolio-showcase/vercel.json`:
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

---

### Task 3 — Schema Supabase
Criar `portfolio-showcase/supabase/schema.sql` e rodar no Supabase Dashboard → SQL Editor:
```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

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

---

### Task 4 — Utilitários da API
Criar a pasta `portfolio-showcase/api/` e dentro dela:

**`api/_supabase.js`** (prefixo `_` = não vira serverless function):
```js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
```

**`api/_body.js`** (Vercel não auto-parseia body em funções puras):
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

### Task 5 — api/leads.js
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

---

### Task 6 — api/copy-generator.js
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

---

### Task 7 — api/webhook-stripe.js
```js
import Stripe from 'stripe';
import { Resend } from 'resend';
import { supabase } from './_supabase.js';
import { rawBody } from './_body.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { error: projetoError } = await supabase
    .from('projetos')
    .insert({
      cliente_id: cliente.id,
      template: session.metadata?.template || 'a definir',
      status: 'briefing',
    });

  if (projetoError) console.error('Supabase projetos error:', projetoError);

  const { error: emailError } = await resend.emails.send({
    from: 'contato@seudominio.com.br', // SUBSTITUIR pelo domínio verificado no Resend
    to: email,
    subject: `Pagamento confirmado — Plano ${plano}`,
    html: buildConfirmationEmail(name, valor, plano),
  });

  if (emailError) console.error('Resend error:', emailError);

  return res.status(200).json({ received: true, cliente_id: cliente.id });
}
```

---

### Task 8 — Atualizar App.jsx (formulário persiste lead)

Arquivo: `portfolio-showcase/src/App.jsx`

Localizar a função `handleFormSubmit` e **substituir** pelo código abaixo (padrão fail-open: WhatsApp abre mesmo se a API falhar):

```jsx
const handleFormSubmit = async (e) => {
  e.preventDefault();

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

Confirmar que o `<form>` tem `onSubmit={handleFormSubmit}`.

---

## Verificação Final

Após todas as tasks:
```bash
cd "C:/Users/Ewerton/Documents/Projetos github/landing-pages-monorepo/portfolio-showcase"
npm run build
```
Deve passar sem erros.

---

## Placeholders Para Substituir Antes do Deploy

| Arquivo | Variável/Placeholder | Onde obter |
|---|---|---|
| `App.jsx` linha ~5 | `WHATSAPP_NUMBER` | Seu número com DDI |
| `App.jsx` linha ~6 | `CALENDLY_URL` | Seu link do Calendly |
| `App.jsx` linha ~7 | `GA4_ID` | Google Analytics → Admin → Measurement ID |
| Todos os `content.js` | `ctaUrl: '#'` | Link do checkout / WhatsApp |
| `webhook-stripe.js` | `contato@seudominio.com.br` | Domínio verificado no Resend |
| Vercel Dashboard | Todas as env vars do `.env.example` | Cada serviço listado no arquivo |

---

## Instrução Para o Claude em Casa

> Leia este arquivo inteiro antes de começar. O projeto está em:
> `C:\Users\Ewerton\Documents\Projetos github\landing-pages-monorepo`
>
> O plano detalhado está em:
> `docs/superpowers/plans/2026-04-28-bloco2-backend.md`
>
> Execute as Tasks 1 a 8 em ordem. Comece pela Task 1 (instalar dependências).
> Nenhum arquivo do Bloco 2 foi criado ainda — tudo parte do zero.
> Após criar todos os arquivos, rode `npm run build` para confirmar que não quebrou nada.
