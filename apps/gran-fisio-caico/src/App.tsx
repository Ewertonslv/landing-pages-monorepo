import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Activity, 
  HeartPulse, 
  Sparkles,
  Users,
  Star,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    description: 'Tratamentos especializados para reabilitação física, alívio de dores e recuperação de movimentos.',
    icon: <Activity className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pilates',
    title: 'Pilates',
    description: 'Método focado no fortalecimento do core, flexibilidade e consciência corporal para todas as idades.',
    icon: <HeartPulse className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'estetica',
    title: 'Estética Avançada',
    description: 'Procedimentos modernos para realçar sua beleza natural e cuidar da saúde da sua pele.',
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  }
];

const TESTIMONIALS = [
  {
    name: 'Maria Silva',
    text: 'A GrandFisio mudou minha qualidade de vida. O atendimento é humanizado e os profissionais são excelentes.',
    rating: 5
  },
  {
    name: 'João Pedro',
    text: 'Melhor clínica de Caicó. O Pilates me ajudou muito com as dores nas costas.',
    rating: 5
  },
  {
    name: 'Ana Oliveira',
    text: 'Ambiente acolhedor e tratamentos de ponta. Recomendo a todos!',
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 ambient-shadow' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl cta-gradient flex items-center justify-center text-white shadow-lg">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-xl font-headline font-extrabold tracking-tight text-primary">
              GrandFisio<span className="text-secondary">Caicó</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/5584999999999" // Placeholder WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full cta-gradient text-white text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Início', 'Serviços', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-headline font-bold text-on-surface text-left"
                >
                  {item}
                </button>
              ))}
              <a 
                href="https://wa.me/5584999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl cta-gradient text-white text-center font-bold text-lg shadow-lg"
              >
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="início" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Referência em Caicó/RN</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6">
              Cuidado que <span className="text-primary">transforma</span> vidas.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Na GrandFisio Caicó, unimos excelência técnica e humanização para oferecer o melhor em fisioterapia, pilates e estética avançada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5584999999999"
                className="px-8 py-4 rounded-2xl cta-gradient text-white font-bold text-lg shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Começar Tratamento
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => scrollToSection('serviços')}
                className="px-8 py-4 rounded-2xl bg-white border-2 border-outline-variant text-on-surface font-bold text-lg hover:bg-surface-container transition-all flex items-center justify-center gap-2"
              >
                Ver Serviços
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`}
                    alt="Paciente"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-on-surface-variant font-medium">+500 pacientes satisfeitos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden ambient-shadow hero-mask aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=1000"
                alt="Clínica GrandFisio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-2xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold text-on-surface">10+</span>
              </div>
              <p className="text-xs text-on-surface-variant font-medium leading-tight">Anos de experiência cuidando da sua saúde.</p>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Nossas Especialidades</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6">
              Soluções completas para o seu bem-estar
            </h3>
            <p className="text-on-surface-variant text-lg">
              Oferecemos uma gama de serviços integrados para tratar o corpo e a mente, com foco em resultados duradouros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden ambient-shadow hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-headline font-bold text-on-surface mb-4">{service.title}</h4>
                  <p className="text-on-surface-variant mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Saiba mais
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden ambient-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                alt="Equipe GrandFisio"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl text-white shadow-2xl hidden md:block">
              <CheckCircle2 className="w-10 h-10 mb-4" />
              <p className="text-xl font-bold">Excelência e Humanização</p>
              <p className="text-sm opacity-80">Nossos pilares de atendimento.</p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Sobre a Clínica</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-8">
              Comprometidos com a sua saúde e autoestima
            </h3>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                A GrandFisio Caicó nasceu do desejo de transformar a vida das pessoas através de um cuidado especializado e acolhedor. Localizada no coração de Caicó/RN, somos referência em reabilitação e estética.
              </p>
              <p>
                Nossa equipe é formada por profissionais altamente qualificados que buscam constantemente as melhores técnicas e tecnologias do mercado para garantir resultados excepcionais.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-on-surface">Tecnologia</p>
                  <p className="text-sm">Equipamentos de última geração.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-on-surface">Conforto</p>
                  <p className="text-sm">Ambiente climatizado e moderno.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white/70 font-bold tracking-widest uppercase text-sm mb-4">Depoimentos</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-extrabold mb-6">O que nossos pacientes dizem</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-lg">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden ambient-shadow grid md:grid-cols-5">
            <div className="md:col-span-2 cta-gradient p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-headline font-extrabold mb-8">Informações de Contato</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Endereço</p>
                      <p className="opacity-80">Rua Exemplo, 123, Centro<br />Caicó - RN, 59300-000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Telefone / WhatsApp</p>
                      <p className="opacity-80">(84) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Horário de Funcionamento</p>
                      <p className="opacity-80">Seg - Sex: 07:00 às 20:00<br />Sáb: 08:00 às 12:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="font-bold mb-4">Siga-nos</p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/grandfisio_caico" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-12">
              <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-8">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full px-6 py-4 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="(84) 99999-9999"
                      className="w-full px-6 py-4 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Assunto</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                    <option>Agendamento de Consulta</option>
                    <option>Dúvidas sobre Serviços</option>
                    <option>Pilates</option>
                    <option>Estética</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-6 py-4 rounded-2xl bg-surface-container border-none focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 rounded-2xl cta-gradient text-white font-bold text-lg shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg cta-gradient flex items-center justify-center text-white">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-lg font-headline font-extrabold tracking-tight text-primary">
              GrandFisio<span className="text-secondary">Caicó</span>
            </span>
          </div>
          <p className="text-on-surface-variant mb-8">
            © 2026 GrandFisio Caicó. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5584999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
