import React, { useState } from 'react';

export function Modules({ data }) {
  const [expandedModule, setExpandedModule] = useState(null);

  const totalLessons = data.reduce((sum, mod) => sum + mod.lessons, 0);
  const totalDuration = data.reduce((sum, mod) => {
    const [hours, minutes] = mod.duration.replace('h', '').replace('min', '').trim().split(' ');
    return sum + (parseInt(hours) * 60) + (parseInt(minutes) || 0);
  }, 0);
  const totalHours = Math.floor(totalDuration / 60);
  const totalMinutes = totalDuration % 60;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que você vai aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo estruturado em {data.length} módulos práticos, do básico ao avançado
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{totalLessons}</div>
              <div className="text-sm text-gray-600">Aulas</div>
            </div>
            <div className="text-center border-l-2 border-gray-300 pl-8">
              <div className="text-3xl font-bold text-purple-600">{totalHours}h {totalMinutes}min</div>
              <div className="text-sm text-gray-600">De conteúdo</div>
            </div>
            <div className="text-center border-l-2 border-gray-300 pl-8">
              <div className="text-3xl font-bold text-purple-600">{data.length}</div>
              <div className="text-sm text-gray-600">Módulos</div>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-4">
          {data.map((module, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-400 transition-all overflow-hidden"
            >
              <button
                onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                className="w-full p-6 text-left flex items-start gap-6 hover:bg-purple-50 transition-colors"
              >
                {/* Module Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                    {module.number}
                  </div>
                </div>

                {/* Module Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {module.description}
                  </p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>📹 {module.lessons} aulas</span>
                    <span>⏱️ {module.duration}</span>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="flex-shrink-0">
                  <div className={`transform transition-transform ${expandedModule === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedModule === idx && (
                <div className="px-6 pb-6 bg-purple-50 border-t-2 border-purple-100">
                  <div className="pt-4 space-y-2">
                    <p className="text-sm text-gray-700">
                      <strong>Neste módulo você vai dominar:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Fundamentos teóricos e práticos</li>
                      <li>Exercícios hands-on</li>
                      <li>Cases reais de sucesso</li>
                      <li>Material complementar para download</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Pronto para começar sua jornada?</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            Garantir minha vaga agora →
          </button>
        </div>
      </div>
    </section>
  );
}
