export const content = {
  meta: {
    title: "EcoStyle - Moda Sustentável",
    description: "Roupas de qualidade que não prejudicam o planeta",
    image: "/og-image.jpg"
  },
  
  hero: {
    headline: "Moda Sustentável para quem se importa",
    subheadline: "Roupas premium feitas com 100% de materiais ecológicos",
    cta: "Ver coleção",
    ctaSecondary: "Conhecer nossa história",
    ctaUrl: '#',         // Substitua: URL da loja/produto principal
    ctaSecondaryUrl: '#', // Substitua: URL da página sobre/história
    image: "/hero-image.svg"
  },

  features: [
    {
      title: "100% Sustentável",
      description: "Materiais eco-friendly e processos éticos",
      icon: "🌱"
    },
    {
      title: "Entrega em 24h",
      description: "Rápido e com rastreamento completo",
      icon: "🚚"
    },
    {
      title: "Garantia 100%",
      description: "Não gostou? Devolução sem questões",
      icon: "✅"
    },
    {
      title: "Qualidade Premium",
      description: "Tecidos importados de alta qualidade",
      icon: "👕"
    },
    {
      title: "Preços Justos",
      description: "Direto do produtor para você",
      icon: "💰"
    },
    {
      title: "Comunidade Global",
      description: "Faça parte de um movimento sustentável",
      icon: "🌍"
    }
  ],

  pricing: [
    {
      name: "T-Shirt",
      price: 89,
      period: "un",
      description: "Algodão orgânico 100%",
      features: [
        "Algodão certificado",
        "Disponível em 5 cores",
        "Tamanhos P a GG",
        "Entrega em 24h"
      ],
      cta: "Comprar agora",
      highlighted: false
    },
    {
      name: "Coleção Premium",
      price: 249,
      period: "trio",
      description: "Kit com 3 peças selecionadas",
      features: [
        "1 calça + 2 camisetas",
        "Combinações exclusivas",
        "Frete grátis",
        "Economia de R$68"
      ],
      cta: "Adicionar ao carrinho",
      highlighted: true
    },
    {
      name: "Cápsula Anual",
      price: 1290,
      period: "/ano",
      description: "Assinatura com novas peças mensais",
      features: [
        "1 peça nova a cada mês",
        "Desconto de 20%",
        "Frete grátis sempre",
        "Acesso antecipado"
      ],
      cta: "Assinar agora",
      highlighted: false
    }
  ],

  cta: {
    headline: "Comece sua jornada sustentável",
    subheadline: "Receba R$ 30 de desconto no seu primeiro pedido",
    buttonText: "Receber cupom"
  },

  footer: {
    links: {
      produto: [
        { text: "Coleção", href: "#" },
        { text: "Materiais", href: "#" },
        { text: "Tamanhos", href: "#" }
      ],
      empresa: [
        { text: "Nossa história", href: "#" },
        { text: "Sustentabilidade", href: "#" },
        { text: "Blog", href: "#" }
      ],
      legal: [
        { text: "Privacy", href: "#" },
        { text: "Termos", href: "#" },
        { text: "Suporte", href: "#" }
      ]
    },
    social: [
      { icon: "Instagram", url: "https://instagram.com" },
      { icon: "TikTok", url: "https://tiktok.com" },
      { icon: "Pinterest", url: "https://pinterest.com" }
    ]
  }
};
