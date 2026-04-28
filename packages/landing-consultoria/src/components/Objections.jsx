import { content } from '../../content'

export default function Objections() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {content.objections.title}
        </h2>

        <div className="space-y-6">
          {content.objections.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                🤔 {item.q}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
