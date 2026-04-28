import { content } from '../../content'

export default function CTA() {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          {content.hero.headline}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Sua expertise é valiosa. Seu cliente ideal está procurando exatamente o que você oferece — mas sua LP não tá falando com ele.
        </p>
        <p className="text-lg mb-8 opacity-90">
          Não deixe mais dinheiro na mesa.
        </p>

        <button className="btn-secondary mb-4 text-lg px-12 py-4">
          Garantir minha LP profissional agora
        </button>

        <p className="text-sm opacity-75 mt-4">
          Entrega em 3-7 dias • Conversão 3-7% • Garantia de 15 dias
        </p>
      </div>
    </section>
  )
}
