import React from 'react';

export function Pricing({ data }) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preços simples e transparentes
          </h2>
          <p className="text-xl text-gray-600">
            Escolha o plano certo para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 transition-all ${
                plan.highlighted 
                  ? 'bg-blue-600 text-white shadow-2xl scale-105' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                {plan.description}
              </p>

              <div className="my-6">
                {typeof plan.price === 'string' ? (
                  <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                ) : (
                  <>
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                      /{plan.period}
                    </span>
                  </>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3">✓</span>
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
