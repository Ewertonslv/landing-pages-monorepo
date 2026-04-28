import { useState } from 'react'
import { content } from '../../content'

export default function FAQ() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {content.faq.title}
        </h2>

        <div className="space-y-4">
          {content.faq.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow">
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full p-6 text-left font-bold text-gray-900 hover:bg-gray-50 transition flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span className="text-2xl">{expanded === idx ? '−' : '+'}</span>
              </button>
              {expanded === idx && (
                <div className="px-6 pb-6 text-gray-700 border-t border-gray-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
