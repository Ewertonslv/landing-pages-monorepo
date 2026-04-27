# Landing Pages Monorepo

Monorepo com starter Kit e landing pages de clientes.

## Estrutura

```
landing-pages-monorepo/
├── packages/
│   └── starter/          # Biblioteca de componentes
│       └── src/
│           └── components/
│               ├── Hero.tsx
│               ├── Features.tsx
│               ├── CTA.tsx
│               └── Footer.tsx
└── apps/
    └── [cliente]/       # Landing pages de clientes
```

## Como usar

### Usar componentes do starter

```tsx
import { Hero, Features, CTA, Footer } from '@landing/starter/src';

<Hero title="Olá" subtitle="Mundo" />
```

### Criar nova landing page

1. Clone o repositório
2. Copie `apps/template/` para `apps/[novo-cliente]/`
3. Edite o conteúdo

## Scripts

```bash
npm install       # Instalar todas as dependências
npm run build   # Build de todos os projetos
```