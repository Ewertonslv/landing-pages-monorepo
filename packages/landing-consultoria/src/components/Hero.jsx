import { content } from '../../content'

export default function Hero() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center text-white fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {content.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
          {content.hero.subheadline}
        </p>

        <button onClick={() => content.hero.ctaUrl && window.open(content.hero.ctaUrl, '_blank')} className="btn-secondary mb-4">
          {content.hero.cta}
        </button>

        <p className="text-sm opacity-75">
          {content.hero.ctaMicro}
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-left">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3-7%</div>
            <div className="text-sm opacity-80">Taxa de conversão</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">3-7 dias</div>
            <div className="text-sm opacity-80">Entrega rápida</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">R$ 2.997</div>
            <div className="text-sm opacity-80">Investimento</div>
          </div>
        </div>
      </div>
    </section>
  )
}
