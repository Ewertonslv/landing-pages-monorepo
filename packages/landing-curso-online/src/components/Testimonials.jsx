import React from 'react';

export function Testimonials({ data }) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Alunos que transformaram suas vidas
          </h2>
          <p className="text-xl text-gray-600">
            Resultados reais de quem aplicou o método
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative"
            >
              {/* Result Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                  ✓ {testimonial.result}
                </div>
              </div>

              {/* Stars */}
              <div className="text-yellow-400 text-xl mb-4 mt-4">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-700">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
