import { Hero, Features, CTA, Footer } from '@landing/starter/src';

export default function App() {
  return (
    <main>
      <Hero
        title="Título da sua Landing Page"
        subtitle="Subtítulo que explica o valor do seu produto ou serviço."
        ctaText="Começar Agora"
        ctaLink="#contato"
        features={['Suporte 24/7', 'Garantia de Qualidade', 'Entrega Rápida']}
      />
      
      <Features
        title="Por que escolher nós?"
        features={[
          { icon: '⚡', title: 'Rápido', description: 'Alta performance.' },
          { icon: '📱', title: 'Responsivo', description: 'Funciona em qualquer dispositivo.' },
          { icon: '🎨', title: 'Moderno', description: 'Design limpo e profissional.' },
        ]}
        columns={3}
      />
      
      <CTA
        title="Pronto para começar?"
        description="Entre em contato e vamos trabalhar juntos."
        buttonText="Falar com Especialista"
        buttonLink="mailto:seu@email.com"
      />
      
      <Footer
        company="Sua Empresa"
        links={[
          { label: 'Início', href: '#' },
          { label: 'Sobre', href: '#sobre' },
          { label: 'Contato', href: '#contato' },
        ]}
      />
    </main>
  );
}