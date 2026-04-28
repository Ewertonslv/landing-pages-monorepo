import React, { useState } from 'react';

export function FAQ({ data }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {data.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
