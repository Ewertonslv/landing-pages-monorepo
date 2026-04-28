import React from 'react';

export function Hero({ data }) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Badge */}
        {data.badge && (
          <div className="text-center mb-6 animate-pulse">
            <span className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold text-sm tracking-wide">
              🔥 {data.badge}
            </span>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              {data.headline}
            </h1>
            
            <p className="text-xl text-purple-100 leading-relaxed">
              {data.subheadline}
            </p>

            {/* Social Proof Metrics */}
            <div className="flex gap-6 py-4">
              <div>
                <div className="text-3xl font-bold text-yellow-400">{data.students}</div>
                <div className="text-sm text-purple-200">Alunos</div>
              </div>
              <div className="border-l border-purple-600 pl-6">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-bold text-yellow-400">{data.rating}</span>
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="text-sm text-purple-200">Avaliação</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4 pt-4">
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-5 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-2xl">
                {data.cta} →
              </button>
              <button className="w-full border-2 border-purple-400 hover:bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                {data.ctaSecondary}
              </button>
            </div>

            {/* Guarantee */}
            <div className="flex items-center gap-3 text-sm text-purple-200 pt-4">
              <span className="text-2xl">✓</span>
              <span>{data.guarantee}</span>
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="relative">
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-purple-600">
              {data.videoId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${data.videoId}`}
                  title="Vídeo de apresentação"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <span>Adicione seu vídeo de vendas</span>
                </div>
              )}
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-full shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs">Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-sm">↓ Rolar para ver o conteúdo ↓</div>
      </div>
    </section>
  );
}
