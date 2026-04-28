import React from 'react';

export function Hero({ data }) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {data.headline}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {data.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            {data.cta}
          </button>
          <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
            {data.ctaSecondary}
          </button>
        </div>

        <div className="bg-gradient-to-b from-blue-100 to-transparent rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Adicione sua imagem em public/hero-image.svg</span>
          </div>
        </div>
      </div>
    </section>
  );
}
