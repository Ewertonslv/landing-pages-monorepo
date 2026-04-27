/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Layout, 
  ShoppingBag, 
  GraduationCap, 
  HeartPulse, 
  Home, 
  Dumbbell,
  CheckCircle2,
  Quote,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  MousePointer2
} from 'lucide-react';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NICHOS = [
  { id: 'saas', title: 'SaaS', icon: Layout, color: 'from-blue-500/20 to-cyan-500/20' },
  { id: 'ecommerce', title: 'E-commerce', icon: ShoppingBag, color: 'from-orange-500/20 to-red-500/20' },
  { id: 'education', title: 'Educação', icon: GraduationCap, color: 'from-purple-500/20 to-pink-500/20' },
  { id: 'health', title: 'Saúde', icon: HeartPulse, color: 'from-emerald-500/20 to-teal-500/20' },
  { id: 'realestate', title: 'Imóveis', icon: Home, color: 'from-amber-500/20 to-orange-500/20' },
  { id: 'fitness', title: 'Fitness', icon: Dumbbell, color: 'from-red-500/20 to-rose-500/20' },
];

const PROJECTS = [
  { name: 'CloudFlow AI', niche: 'SaaS', tag: 'Conversão', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Luxe Wear', niche: 'E-commerce', tag: 'Vendas', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Mastery Academy', niche: 'Educação', tag: 'Lançamento', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Vitality Clinic', niche: 'Saúde', tag: 'Autoridade', img: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Skyline Towers', niche: 'Imóveis', tag: 'Luxo', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Iron Gym', niche: 'Fitness', tag: 'Performance', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200' },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Animation
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
      });

      // Scroll Reveal
      const reveals = gsap.utils.toArray('.gsap-reveal');
      reveals.forEach((el: any) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Parallax effect for background elements
      gsap.to('.parallax-bg', {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1
        },
        y: (i, target) => -target.dataset.speed * 100
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-premium-dark selection:bg-accent selection:text-white">
      <div className="noise fixed inset-0 z-0" />
      
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div data-speed="2" className="parallax-bg absolute top-[10%] left-[5%] w-64 h-64 bg-accent/20 rounded-full blur-[120px]" />
        <div data-speed="4" className="parallax-bg absolute top-[60%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
        <div data-speed="1" className="parallax-bg absolute bottom-[10%] left-[20%] w-48 h-48 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 py-6 px-8 md:px-16 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center">
            <Sparkles size={18} className="text-white" />
          </div>
          <span>STUDIO<span className="text-accent">.</span></span>
        </motion.div>
        
        <nav className="hidden lg:flex items-center gap-10 glass px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#niches" className="hover:text-white transition-colors">Nichos</a>
          <a href="#process" className="hover:text-white transition-colors">Processo</a>
          <a href="#contact" className="hover:text-white transition-colors">Contato</a>
        </nav>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="accent-gradient text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform hover:scale-105 active:scale-95"
        >
          Bora Conversar
        </motion.button>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-8 md:px-16 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-6 flex items-center gap-3 glass w-fit px-4 py-2 rounded-full border-white/10">
            <Zap size={14} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Especialista em Landing Pages Premium</span>
          </div>
          
          <h1 className="hero-title font-display text-6xl md:text-[10vw] font-black leading-[0.85] tracking-tighter mb-12">
            <span className="block text-gradient">DESIGN QUE</span>
            <span className="block text-accent italic">VENDE SOZINHO.</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
              Transformo negócios comuns em marcas <span className="text-white font-medium">cinematográficas</span> através de landing pages de alta conversão.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-premium-dark" alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center border-4 border-premium-dark text-xs font-bold">+40</div>
              </div>
              <div>
                <div className="text-sm font-bold">Clientes Satisfeitos</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Projetos de Alto Ticket</div>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Marquee */}
        <div className="mt-24 marquee-container mask-fade py-10 border-y border-white/5">
          <div className="marquee-content">
            {['HIGH CONVERSION', 'PREMIUM DESIGN', 'FAST DELIVERY', 'STRATEGIC COPY', 'MOBILE FIRST', 'SEO OPTIMIZED'].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-4xl md:text-6xl font-display font-black text-white/10 hover:text-accent/40 transition-colors cursor-default whitespace-nowrap">
                <span>{text}</span>
                <Sparkles size={30} />
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {['HIGH CONVERSION', 'PREMIUM DESIGN', 'FAST DELIVERY', 'STRATEGIC COPY', 'MOBILE FIRST', 'SEO OPTIMIZED'].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-4xl md:text-6xl font-display font-black text-white/10 hover:text-accent/40 transition-colors cursor-default whitespace-nowrap">
                <span>{text}</span>
                <Sparkles size={30} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Niches Section */}
      <section id="niches" className="py-32 px-8 md:px-16 max-w-7xl mx-auto z-10 relative">
        <div className="mb-20 gsap-reveal">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-6">
            DOMÍNIO POR <span className="text-accent">NICHO</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl">Layouts pensados estrategicamente para cada tipo de audiência.</p>
        </div>

        <div className="bento-container">
          {/* Large Bento Item */}
          <div className="col-span-2 row-span-2 glass-card rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden relative gsap-reveal">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Target size={180} className="text-accent" />
            </div>
            <div>
              <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mb-8">
                <Layout size={32} className="text-white" />
              </div>
              <h3 className="text-4xl font-display font-black mb-4">SaaS & Tech</h3>
              <p className="text-white/50 text-lg max-w-sm">Páginas que explicam o complexo de forma simples e convertem trials em assinaturas.</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-accent group-hover:gap-4 transition-all">
              Ver Projetos SaaS <ArrowRight size={16} />
            </button>
          </div>

          {/* Smaller Bento Items */}
          {NICHOS.slice(1).map((nicho, i) => (
            <div key={i} className="glass-card rounded-[2rem] p-8 flex flex-col justify-between group gsap-reveal">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br", nicho.color)}>
                <nicho.icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-black mb-2">{nicho.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">Estratégias validadas para {nicho.title.toLowerCase()}.</p>
              </div>
            </div>
          ))}

          {/* CTA Bento Item */}
          <div className="col-span-2 glass-card rounded-[2rem] p-8 flex items-center justify-between accent-gradient border-none gsap-reveal">
            <div className="max-w-xs">
              <h3 className="text-2xl font-display font-black mb-2">Seu nicho não está aqui?</h3>
              <p className="text-white/80 text-sm font-medium">Criamos layouts personalizados para qualquer modelo de negócio.</p>
            </div>
            <button className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase - The "Chamada" for Portfolio */}
      <section id="portfolio" className="py-32 bg-white/[0.01] relative z-10">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 gsap-reveal">
            <div className="max-w-2xl">
              <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter mb-6">
                O <span className="text-white/20">SHOWCASE</span>
              </h2>
              <p className="text-white/40 text-xl">Uma seleção dos nossos trabalhos mais impactantes.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <ArrowRight size={24} className="rotate-180" />
              </div>
              <div className="w-14 h-14 rounded-full accent-gradient flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative gsap-reveal"
              >
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden relative glass border-white/5">
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {project.niche}
                  </div>
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      <MousePointer2 size={32} />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h4 className="text-3xl font-display font-black mb-2">{project.name}</h4>
                    <div className="flex gap-3">
                      <span className="text-xs text-white/40 font-bold uppercase tracking-widest">{project.tag}</span>
                      <span className="text-xs text-accent font-bold uppercase tracking-widest">Ver Projeto</span>
                    </div>
                  </div>
                  <div className="text-white/10 font-display text-6xl font-black">0{i+1}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center gsap-reveal">
            <button className="glass px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.3em] hover:bg-white/5 transition-all">
              Ver Portfólio Completo
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof & Stats */}
      <section className="py-32 px-8 md:px-16 z-10 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="gsap-reveal glass-card p-12 rounded-[2.5rem] text-center">
            <div className="text-6xl font-display font-black text-accent mb-4">40%</div>
            <p className="text-white/60 font-medium">Aumento médio na taxa de conversão dos nossos clientes.</p>
          </div>
          <div className="gsap-reveal glass-card p-12 rounded-[2.5rem] text-center">
            <div className="text-6xl font-display font-black text-white mb-4">150+</div>
            <p className="text-white/60 font-medium">Landing pages premium entregues em 2025.</p>
          </div>
          <div className="gsap-reveal glass-card p-12 rounded-[2.5rem] text-center">
            <div className="text-6xl font-display font-black text-accent mb-4">24h</div>
            <p className="text-white/60 font-medium">Tempo médio para o primeiro rascunho estratégico.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-40 px-8 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center gsap-reveal">
          <h2 className="font-display text-6xl md:text-[12vw] font-black leading-[0.8] tracking-tighter mb-16">
            VAMOS <span className="text-accent">DOMINAR</span> <br />O MERCADO?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="accent-gradient text-white px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-105 transition-all">
              Quero minha Landing Page
            </button>
            <div className="flex items-center gap-4 glass px-8 py-6 rounded-full">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-white/60">Disponível para novos projetos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 border-t border-white/5 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-display font-black tracking-tighter">
            STUDIO<span className="text-accent">.</span>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            © 2026 — Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
