/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Users, 
  Star, 
  ExternalLink
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2
      })
      .from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");

      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
      });

      gsap.to(".marquee-content", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
            <Layers className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">LUXEPAGES</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
        </nav>

        <button className="bg-brand-accent hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
          Começar Projeto
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Office" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/80 to-brand-bg"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl" ref={heroRef}>
          <h1 className="hero-title text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
            LANDING PAGES QUE <span className="text-brand-accent">CONVERTEM</span> EM LUXO.
          </h1>
          <p className="hero-sub text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Criamos experiências digitais de elite, 100% atualizadas com as tendências de 2026, projetadas para transformar visitantes em clientes fiéis.
          </p>
          <div className="hero-cta flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:bg-brand-accent hover:text-white">
              Ver Projetos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/5 transition-all">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE / AUTHORITY */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="marquee-content flex gap-12 whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 text-white/30 font-display text-2xl font-bold italic">
              <span>+500 PROJETOS ENTREGUES</span>
              <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
              <span>CONVERSÃO 3X SUPERIOR</span>
              <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
              <span>DESIGN DE ELITE</span>
              <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO GRID / DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Por que somos diferentes?</h2>
          <p className="text-white/50 max-w-xl mx-auto">Combinamos tecnologia de ponta com psicologia de vendas para resultados extraordinários.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card md:col-span-2 reveal-up">
            <Zap className="text-brand-accent w-10 h-10 mb-6" />
            <h3 className="text-2xl font-bold mb-3">100% Atualizadas</h3>
            <p className="text-white/60">Nossas landing pages utilizam as tecnologias mais recentes de 2026, garantindo performance máxima e design que não envelhece.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="block text-2xl font-bold text-brand-accent">0.8s</span>
                <span className="text-xs text-white/40 uppercase tracking-widest">Load Time</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="block text-2xl font-bold text-brand-accent">99%</span>
                <span className="text-xs text-white/40 uppercase tracking-widest">SEO Score</span>
              </div>
            </div>
          </div>
          
          <div className="bento-card reveal-up">
            <ShieldCheck className="text-brand-accent w-10 h-10 mb-6" />
            <h3 className="text-2xl font-bold mb-3">Segurança Total</h3>
            <p className="text-white/60">Código limpo, otimizado e protegido contra as vulnerabilidades mais comuns da web moderna.</p>
          </div>

          <div className="bento-card reveal-up">
            <Users className="text-brand-accent w-10 h-10 mb-6" />
            <h3 className="text-2xl font-bold mb-3">Foco no Público</h3>
            <p className="text-white/60">Design centrado no usuário para garantir que cada clique conte e cada visita converta.</p>
          </div>

          <div className="bento-card md:col-span-2 reveal-up">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Escalabilidade Infinita</h3>
                <p className="text-white/60">Sua landing page cresce com o seu negócio. Estrutura modular pronta para expansão.</p>
              </div>
              <div className="flex-1 w-full h-32 bg-gradient-to-r from-brand-accent/20 to-transparent rounded-2xl border border-brand-accent/20 flex items-center justify-center">
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-1 h-8 bg-brand-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-up">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Nossa Vitrine</h2>
              <p className="text-white/50">Explore alguns dos nossos projetos mais recentes e impactantes.</p>
            </div>
            <button className="text-brand-accent font-bold flex items-center gap-2 hover:underline">
              Ver Portfólio Completo <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "EcoFlow Landing", category: "Sustentabilidade", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
              { title: "Fintech Pro", category: "Finanças", img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" },
              { title: "Luxe Real Estate", category: "Imobiliário", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl reveal-up">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <button className="bg-white text-black w-fit px-6 py-2 rounded-full text-sm font-bold">Ver Case</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">O que dizem nossos clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Ricardo Silva", role: "CEO @ TechFlow", text: "A LuxePages transformou nossa taxa de conversão. O design é impecável e o suporte é de outro nível." },
              { name: "Ana Martins", role: "Marketing Manager @ Bloom", text: "Nunca vi nada igual. A velocidade de entrega e a qualidade final superaram todas as expectativas." }
            ].map((testimonial, i) => (
              <div key={i} className="glass p-8 rounded-3xl reveal-up">
                <p className="text-lg text-white/70 italic mb-8">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center font-bold text-brand-accent">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 container mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden reveal-up">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-accent/5 pointer-events-none"></div>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 relative z-10">Pronto para elevar seu padrão digital?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto relative z-10">Junte-se a centenas de empresas que já escalaram seus resultados com nossas landing pages de elite.</p>
          <button className="relative z-10 bg-brand-accent hover:bg-emerald-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105">
            Quero Minha Landing Page
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Layers className="text-brand-accent w-6 h-6" />
            <span className="text-lg font-display font-bold">LUXEPAGES</span>
          </div>
          
          <div className="text-white/30 text-sm">
            © 2026 LuxePages. Todos os direitos reservados.
          </div>

          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
