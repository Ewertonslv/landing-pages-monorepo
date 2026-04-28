export const content = {
  meta: {
    title: "Analytics Pro - Transforme dados em decisões",
    description: "Plataforma de analytics em tempo real para empresas que querem crescer",
    image: "/og-image.jpg"
  },
  
  hero: {
    headline: "Transforme seus dados em decisões",
    subheadline: "Plataforma intuitiva para análise de dados em tempo real",
    cta: "Começar gratuitamente",
    ctaSecondary: "Ver demo",
    ctaUrl: '#',         // Substitua: URL de cadastro/trial
    ctaSecondaryUrl: '#', // Substitua: URL de demo ou vídeo
    image: "/hero-image.svg"
  },

  features: [
    {
      title: "Análise em tempo real",
      description: "Veja suas métricas atualizando ao vivo",
      icon: "📊"
    },
    {
      title: "Dashboard customizável",
      description: "Monte exatamente o que você precisa",
      icon: "⚙️"
    },
    {
      title: "Integração com APIs",
      description: "Conecte suas ferramentas favoritas",
      icon: "🔗"
    },
    {
      title: "Segurança em primeiro lugar",
      description: "Seus dados estão protegidos com encriptação",
      icon: "🔒"
    },
    {
      title: "Suporte 24/7",
      description: "Time pronto para ajudar qualquer hora",
      icon: "💬"
    },
    {
      title: "Escalável",
      description: "Cresce junto com seu negócio",
      icon: "📈"
    }
  ],

  pricing: [
    {
      name: "Startup",
      price: 29,
      period: "mês",
      description: "Perfeito para começar",
      features: [
        "Até 10k eventos/mês",
        "Dashboard básico",
        "Email support",
        "1 usuário"
      ],
      cta: "Começar grátis",
      highlighted: false
    },
    {
      name: "Profissional",
      price: 99,
      period: "mês",
      description: "Para equipes em crescimento",
      features: [
        "Até 500k eventos/mês",
        "Dashboards ilimitados",
        "Email + chat support",
        "5 usuários",
        "Integrações avançadas"
      ],
      cta: "Começar grátis",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Para grandes empresas",
      features: [
        "Eventos ilimitados",
        "Suporte dedicado",
        "SLA garantido",
        "Usuários ilimitados",
        "API completa"
      ],
      cta: "Fale conosco",
      highlighted: false
    }
  ],

  cta: {
    headline: "Pronto para crescer?",
    subheadline: "Comece grátis hoje. Sem cartão de crédito necessário.",
    buttonText: "Começar gratuitamente"
  },

  footer: {
    links: {
      produto: [
        { text: "Features", href: "#" },
        { text: "Pricing", href: "#" },
        { text: "Security", href: "#" }
      ],
      empresa: [
        { text: "Blog", href: "#" },
        { text: "Careers", href: "#" },
        { text: "About", href: "#" }
      ],
      legal: [
        { text: "Privacy", href: "#" },
        { text: "Terms", href: "#" },
        { text: "Contact", href: "#" }
      ]
    },
    social: [
      { icon: "Twitter", url: "https://twitter.com" },
      { icon: "LinkedIn", url: "https://linkedin.com" },
      { icon: "GitHub", url: "https://github.com" }
    ]
  }
};
