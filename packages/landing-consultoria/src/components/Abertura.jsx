import { content } from '../../content'

export default function Abertura() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          {content.abertura.title}
        </h2>

        <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed">
          {content.abertura.content}
        </p>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Você já se pegou:</h3>
          <ul className="space-y-4">
            {content.abertura.pain.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-red-500 font-bold text-2xl flex-shrink-0">✗</span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
