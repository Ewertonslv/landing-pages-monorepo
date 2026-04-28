import React from 'react';

export function Benefits({ data }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo que você recebe
          </h2>
          <p className="text-xl text-gray-600">
            Muito além das aulas: uma experiência completa de aprendizado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((benefit, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
