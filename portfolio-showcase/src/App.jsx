import React, { useState } from 'react';
import './index.css';

// ─── CONFIG — edite aqui antes de publicar ────────────────────────────────────
const WHATSAPP_NUMBER = '5511987654321'; // 55 + DDD + número, sem espaços ou traços
const CALENDLY_URL    = 'https://calendly.com/seu-username/consultoria';
// ─────────────────────────────────────────────────────────────────────────────

const templates = [
  {
    id: 1,
    name: "Curso Online / Infoprodutor",
    category: "Educação",
    conversion: "4-7%",
    color: "from-purple-600 to-indigo-600",
    features: ["Vídeo de vendas", "Módulos expansíveis", "Depoimentos com resultados", "Pricing com urgência"],
    ideal: ["Cursos online", "Mentorias", "Programas de transformação", "Infoprodutos"],
    preview: "https://via.placeholder.com/800x600/9333EA/FFFFFF?text=Curso+Online",
    price: "R$ 2.997"
  },
  {
    id: 2,
    name: "SaaS / Software",
    category: "Tecnologia",
    conversion: "3-5%",
    color: "from-blue-600 to-cyan-600",
    features: ["Free trial destacado", "Features comparativas", "Dashboard preview", "Pricing escalável"],
    ideal: ["Ferramentas SaaS", "Softwares B2B", "Plataformas digitais", "Apps web"],
    preview: "https://via.placeholder.com/800x600/2563EB/FFFFFF?text=SaaS",
    price: "R$ 2.997"
  },
  {
    id: 3,
    name: "Consultoria / Coaching",
    category: "Serviços",
    conversion: "5-8%",
    color: "from-slate-700 to-gray-600",
    features: ["Autoridade destacada", "Processo de transformação", "Cases de sucesso", "Alto ticket friendly"],
    ideal: ["Consultores", "Coaches", "Mentores", "Serviços premium"],
    preview: "https://via.placeholder.com/800x600/334155/FFFFFF?text=Coaching",
    price: "R$ 2.997"
  },
  {
    id: 4,
    name: "E-commerce / Lançamento",
    category: "Vendas",
    conversion: "3-6%",
    color: "from-orange-600 to-red-600",
    features: ["Urgência e escassez", "Galeria de produtos", "Reviews destacados", "Checkout otimizado"],
    ideal: ["Lojas online", "Lançamentos", "Produtos digitais", "Físicos"],
    preview: "https://via.placeholder.com/800x600/EA580C/FFFFFF?text=E-commerce",
    price: "R$ 2.997"
  },
  {
    id: 5,
    name: "Serviços Profissionais",
    category: "B2B",
    conversion: "4-6%",
    color: "from-teal-600 to-emerald-600",
    features: ["Portfólio visual", "Captura de leads", "Formulário otimizado", "Local SEO ready"],
    ideal: ["Advogados", "Médicos", "Arquitetos", "Contadores"],
    preview: "https://via.placeholder.com/800x600/0D9488/FFFFFF?text=Profissional",
    price: "R$ 2.997"
  },
  {
    id: 6,
    name: "Webinar / Evento",
    category: "Eventos",
    conversion: "6-10%",
    color: "from-pink-600 to-rose-600",
    features: ["Countdown timer", "Registro simples", "Remind-me automático", "Replay disponível"],
    ideal: ["Webinars", "Workshops", "Lives", "Eventos online"],
    preview: "https://via.placeholder.com/800x600/DB2777/FFFFFF?text=Webinar",
    price: "R$ 2.997"
  }
];

const pricingPlans = [
  {
    name: "Individual",
    price: "2.997",
    period: "por projeto",
    features: ["1 landing page completa", "Entrega em 5-7 dias", "2 revisões incluídas", "Suporte por email"],
    highlight: false
  },
  {
    name: "Agência",
    price: "8.997",
    period: "/mês",
    features: ["Até 3 landing pages/mês", "Entrega em 3-5 dias", "Revisões ilimitadas", "Suporte prioritário", "White label disponível"],
    highlight: true
  },
  {
    name: "White Label",
    price: "15.997",
    period: "/mês",
    features: ["Até 10 landing pages/mês", "Entrega em 2-3 dias", "Código-fonte incluído", "Suporte dedicado", "Treinamento incluso"],
    highlight: false
  }
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [activeSection, setActiveSection] = useState('templates');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    empresa: '',
    interesse: '',
    mensagem: ''
  });

  const handleScheduleCall = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Landing Pages que Vendem</h1>
              <p className="text-gray-600">Consultores, coaches e agências ganham 3-7% de conversão em 5-7 dias</p>
            </div>
            <button
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Agendar Demonstração
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex gap-6 mt-6 border-b border-gray-200">
            {['templates', 'precos', 'contato'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`pb-3 px-2 font-medium transition-colors ${
                  activeSection === section 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section === 'templates' && 'Templates'}
                {section === 'precos' && 'Preços'}
                {section === 'contato' && 'Contato'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Problem + Solution */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Você investe em tráfego pago mas a LP não converte?</h2>
            <p className="text-xl text-purple-100 mb-6">Consultores e coaches gastam R$ 500-1.000/mês em tráfego, mas a landing page antiga converte apenas 0.8-1.2%. Resultado: R$ 600-1.000 de gasto por cliente adquirido.</p>
            <div className="bg-purple-500/30 border border-purple-300 rounded-lg p-6">
              <p className="text-lg font-semibold">Com nossas landing pages:</p>
              <p className="text-2xl font-bold mt-2">Taxa de conversão sobe para 3-7% 📈</p>
              <p className="text-purple-100 mt-2">Mesmo tráfego. 3-5x mais vendas. CAC cai 60-80%.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">6</div>
              <div className="text-purple-200">Templates prontos</div>
            </div>
            <div>
              <div className="text-4xl font-bold">3–7%</div>
              <div className="text-purple-200">Conversão esperada</div>
            </div>
            <div>
              <div className="text-4xl font-bold">5-7</div>
              <div className="text-purple-200">Dias de entrega</div>
            </div>
            <div>
              <div className="text-4xl font-bold">R$ 2.997</div>
              <div className="text-purple-200">Investimento único</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeSection === 'templates' && (
          <>
            {/* Template Grid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Escolha seu template</h2>
              <p className="text-gray-600 mb-8">Cada template é otimizado para seu nicho específico</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`cursor-pointer rounded-xl overflow-hidden transition-all hover:shadow-xl ${
                      selectedTemplate.id === template.id 
                        ? 'ring-4 ring-purple-500 shadow-xl scale-105' 
                        : 'shadow-md hover:scale-102'
                    }`}
                  >
                    <div className={`h-40 bg-gradient-to-br ${template.color} p-6 text-white`}>
                      <div className="text-sm font-medium opacity-90">{template.category}</div>
                      <div className="text-xl font-bold mt-2">{template.name}</div>
                      <div className="mt-4 inline-block bg-white/20 px-3 py-1 rounded-full text-sm">
                        Conversão: {template.conversion}
                      </div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{template.price}</div>
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-medium transition-colors">
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Template Detail */}
            {selectedTemplate && (
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Preview */}
                  <div>
                    <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                      <img 
                        src={selectedTemplate.preview} 
                        alt={selectedTemplate.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={handleScheduleCall}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        Agendar Demonstração
                      </button>
                      <button
                        onClick={() => window.open(`https://github.com/Ewertonslv/landing-pages-monorepo`, '_blank')}
                        className="px-6 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                      >
                        Código
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{selectedTemplate.name}</h3>
                        <div className="text-purple-600 font-medium mt-1">{selectedTemplate.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">{selectedTemplate.price}</div>
                        <div className="text-sm text-gray-500">ou R$ 8.997/mês (plano)</div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="font-semibold text-green-800">Taxa de Conversão</div>
                      <div className="text-2xl font-bold text-green-600">{selectedTemplate.conversion}</div>
                      <div className="text-sm text-green-700">vs 1-2% média do mercado</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Recursos Incluídos</h4>
                      <div className="space-y-2">
                        {selectedTemplate.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs">✓</div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Ideal Para</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTemplate.ideal.map((item, idx) => (
                          <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {activeSection === 'precos' && (
          <section>
            <h2 className="text-3xl font-bold mb-2 text-center">Planos e Preços</h2>
            <p className="text-gray-600 mb-12 text-center">Escolha o plano ideal para seu negócio</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                <div 
                  key={idx}
                  className={`rounded-2xl p-8 ${
                    plan.highlight 
                      ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-2xl scale-105' 
                      : 'bg-white shadow-lg'
                  }`}
                >
                  {plan.highlight && (
                    <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                      MAIS POPULAR
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">R$ {plan.price}</span>
                    <span className={plan.highlight ? 'text-purple-200' : 'text-gray-600'}>{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={plan.highlight ? 'text-purple-200' : 'text-purple-600'}>✓</span>
                        <span className={plan.highlight ? 'text-purple-50' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleScheduleCall}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.highlight
                        ? 'bg-white text-purple-600 hover:bg-purple-50'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    Começar Agora
                  </button>
                </div>
              ))}
            </div>

            {/* ROI Calculator */}
            <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculadora de ROI</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Situação Atual</h4>
                  <div className="space-y-3 bg-white rounded-lg p-4">
                    <div>Taxa de conversão: <strong>1%</strong></div>
                    <div>1.000 visitantes = <strong>10 vendas</strong></div>
                    <div>Ticket R$ 497 = <strong className="text-red-600">R$ 4.970</strong></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Com Nossa LP</h4>
                  <div className="space-y-3 bg-white rounded-lg p-4">
                    <div>Taxa de conversão: <strong className="text-green-600">5%</strong></div>
                    <div>1.000 visitantes = <strong className="text-green-600">50 vendas</strong></div>
                    <div>Ticket R$ 497 = <strong className="text-green-600">R$ 24.850</strong></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center bg-green-600 text-white p-6 rounded-lg">
                <div className="text-sm font-medium">Ganho Mensal</div>
                <div className="text-4xl font-bold">R$ 19.880</div>
                <div className="text-sm mt-2">ROI de 664% no primeiro mês</div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contato' && (
          <section className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Agendar Demonstração</h2>
            <p className="text-gray-600 mb-8 text-center">Reserve 15 minutos para ver os templates ao vivo e entender como podemos aumentar sua conversão</p>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!formData.name || !formData.email) {
                    alert('Por favor, preencha nome e email');
                    return;
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
                  setFormData({ name: '', email: '', empresa: '', interesse: '', mensagem: '' });
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa/Nicho</label>
                  <input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Ex: Consultoria, Coaching, E-commerce"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Qual é seu interesse?</label>
                  <select
                    value={formData.interesse}
                    onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="individual">Projeto Individual (R$ 2.997)</option>
                    <option value="agencia">Plano Agência (R$ 8.997/mês)</option>
                    <option value="whitelabel">White Label (R$ 15.997/mês)</option>
                    <option value="duvidas">Dúvidas / Mais Informações</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem (opcional)</label>
                  <textarea
                    rows="3"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Conte um pouco sobre seu desafio..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Enviar via WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Prefere agendar uma call?{' '}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-600 hover:text-purple-700 underline"
                  >
                    Clique aqui para o Calendly
                  </a>
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-gray-600 text-sm mb-1">📱 WhatsApp</div>
                    <a href="https://wa.me/551198765432" className="font-bold text-purple-600 hover:text-purple-700">Enviar mensagem</a>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm mb-1">✉️ Email</div>
                    <a href="mailto:ewertoncom297@gmail.com" className="font-bold text-purple-600 hover:text-purple-700">ewertoncom297@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto para aumentar suas conversões?</h3>
          <button
            onClick={handleScheduleCall}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Agendar Demonstração Gratuita
          </button>
          <div className="mt-8 text-gray-400 text-sm">
            © 2026 Landing Pages - Que Vendem. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
