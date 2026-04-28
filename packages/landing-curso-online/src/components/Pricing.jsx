import React from 'react';

export function Pricing({ data }) {
  const savings = data.fullPrice - data.price;
  
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transforme sua carreira hoje
          </h2>
          <p className="text-xl text-purple-200">
            Oferta especial por tempo limitado
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Urgency Banner */}
          <div className="bg-red-500 text-white px-6 py-3 rounded-lg text-center mb-8">
            <div className="font-bold">{data.urgency}</div>
            <div className="text-sm">{data.spots}</div>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="text-gray-500 line-through text-2xl mb-2">
              De R$ {data.fullPrice}
            </div>
            <div className="text-6xl font-bold text-purple-600 mb-2">
              R$ {data.price}
            </div>
            <div className="text-xl text-gray-600">
              ou 12x de R$ {data.installmentPrice}
            </div>
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mt-4 font-bold">
              Economia de {data.discount}% (R$ {savings})
            </div>
          </div>

          {/* Bonuses */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-xl mb-4 text-center">🎁 Bônus Exclusivos</h3>
            <ul className="space-y-2">
              {data.bonuses.map((bonus, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-4 font-bold text-lg text-purple-600">
              Total em bônus: R$ {data.totalBonusValue}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-xl mb-4">
            {data.cta} →
          </button>

          {/* Trust Badges */}
          <div className="flex justify-center gap-6 text-sm text-gray-600 mt-6">
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>7 Dias de Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
