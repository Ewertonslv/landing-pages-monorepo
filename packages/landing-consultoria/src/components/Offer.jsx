import { content } from '../../content'

export default function Offer() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          {content.offer.title}
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-2xl mb-8">
          {content.offer.items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0">
              <span className="text-lg text-gray-900 font-medium">✓ {item.item}</span>
              <span className="text-lg text-blue-600 font-bold">{item.value}</span>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t-2 border-gray-300">
            <div className="text-right mb-4">
              <div className="text-gray-700">
                <span className="text-lg">Valor total percebido:</span>
                <div className="text-3xl font-bold text-gray-900">{content.offer.totalValue}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg text-gray-700 mb-2">Hoje você paga:</div>
              <div className="text-5xl font-bold text-green-600 mb-2">{content.offer.todayPrice}</div>
              <div className="text-lg text-gray-700">Você economiza: {content.offer.savings}</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-secondary text-lg px-12 py-4">
            Garantir agora
          </button>
        </div>
      </div>
    </section>
  )
}
