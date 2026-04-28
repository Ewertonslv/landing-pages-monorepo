# 🔧 Setup Phase 1 - Guia Detalhado

Após o deploy do portfolio em Vercel, configure esses 4 essenciais em ~90 minutos:

---

## 1️⃣ Google Analytics 4 (~10 min)

### Por quê?
Rastrear quantas pessoas visitam, qual template interessa mais, taxa de clique nos CTAs.

### Setup:
1. Acesse https://analytics.google.com
2. Clique "Create Property"
3. Nome: "Landing Pages Portfolio"
4. Timezone: São Paulo
5. Clique "Create"
6. Copie o **Measurement ID** (formato: `G-XXXXXXXXXX`)

### Integrar no Portfolio:
1. Abra `portfolio-showcase/src/App.jsx`
2. Adicione no `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Commit + Push → Vercel redeploya automaticamente
4. Acesse seu portfolio e confirme que GA4 está rastreando (cheque "Realtime")

---

## 2️⃣ Calendly (Agendamento) (~10 min)

### Por quê?
Automatizar agendamento de calls sem ter que trocar 100 mensagens.

### Setup:
1. Acesse https://calendly.com
2. Crie uma conta (email trabalho)
3. Configure:
   - **Event name:** "Consultoria Landing Page"
   - **Duration:** 30 min
   - **Availability:** Seg-Sex, 9h-18h
4. Copie o **URL da página** (ex: `https://calendly.com/seu-username/consultoria`)

### Integrar no Portfolio:
1. Abra `portfolio-showcase/src/components/CTA.jsx`
2. Substitua o formulário por:

```jsx
<a href="https://calendly.com/seu-username/consultoria" 
   target="_blank" 
   rel="noopener noreferrer"
   className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
  Agendar Consulta Gratuita
</a>
```

3. Commit + Push → Vercel redeploya

---

## 3️⃣ Stripe (Pagamentos) (~15 min)

### Por quê?
Receber pagamentos de clientes (R$ 2.997 por projeto).

### Setup:
1. Acesse https://stripe.com/br
2. Crie conta com seu CPF/CNPJ
3. Ative: Produtos → Prices
4. Crie um produto:
   - **Nome:** "Landing Page Profissional"
   - **Preço:** R$ 2.997
   - **Tipo:** Pagamento único

5. Copie a **Publishable Key** (pk_live_...)

### Integrar Simples (Form com Stripe):
Para agora, use uma solução simples:

1. No portfolio, adicione um botão "Comprar Agora":
```jsx
<form action="https://buy.stripe.com/seu-link-de-pagamento" method="POST">
  <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-lg">
    Começar Agora - R$ 2.997
  </button>
</form>
```

2. Gere o link em: Stripe Dashboard → Products → Create payment link

---

## 4️⃣ SendGrid (Email Automático) (~20 min)

### Por quê?
Enviar email de confirmação quando alguém preenche o formulário.

### Setup:
1. Acesse https://sendgrid.com
2. Crie conta (use seu email)
3. Vá em: Settings → API Keys
4. Crie uma nova key → copie

### Template de Email:
Crie um template simples em SendGrid:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; background: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: white; padding: 30px; border-radius: 8px; }
        h1 { color: #333; }
        .button { display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Olá {{name}}! 👋</h1>
        <p>Recebemos sua solicitação para uma landing page profissional.</p>
        <p><strong>Próximos passos:</strong></p>
        <ol>
            <li>Você receberá um link Calendly por email para agendar uma call</li>
            <li>Na call, discutimos seus objetivos, público e copy</li>
            <li>Entregamos a LP em 5-7 dias</li>
        </ol>
        <a href="https://calendly.com/seu-username/consultoria" class="button">Agendar Agora</a>
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
            Dúvidas? Responda este email.
        </p>
    </div>
</body>
</html>
```

### Integrar no Portfolio (Node.js simples):

Se o portfolio tiver um formulário, crie um endpoint simples:

```javascript
// backend/send-email.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(email, name) {
  const msg = {
    to: email,
    from: 'seu@email.com',
    subject: 'Recebemos sua solicitação! 🎉',
    html: `
      <h1>Olá ${name}!</h1>
      <p>Sua solicitação foi recebida.</p>
      <a href="https://calendly.com/seu-username/consultoria">Agendar Call</a>
    `,
  };
  
  await sgMail.send(msg);
}
```

---

## 📋 Checklist Rápido

- [ ] Vercel deploy ✅
- [ ] GA4 configurado e rastreando
- [ ] Calendly integrado no CTA
- [ ] Stripe product criado
- [ ] SendGrid account + API key
- [ ] Email template criado
- [ ] Testar fluxo completo:
  - Visitou portfolio
  - Clicou em CTA
  - Recebeu email
  - Agendou call no Calendly

---

## ⏱️ Semana 1 = Semana de Setup

**Seu objetivo:** Ter TUDO funcionando até o final da semana 1.

**Depois:** Começar outreach (LinkedIn, email, WhatsApp).

---

## 🚨 Dicas Importantes

1. **GA4:** Leva ~24h pra começar a rastrear. Não se preocupe se não ver dados agora.
2. **Calendly:** Teste agendando uma call para você mesmo.
3. **Stripe:** Use mode "test" enquanto testa. Mude para "live" quando começar vendas reais.
4. **SendGrid:** Teste enviando um email para você primeiro.

---

**Próximo passo:** Após setup, comece a outreach (Semana 2).
