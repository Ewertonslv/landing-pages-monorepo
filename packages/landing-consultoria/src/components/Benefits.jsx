import { content } from '../../content'

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          {content.benefits.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.benefits.items.map((benefit, idx) => (
            <div key={idx} className="p-6 border-2 border-blue-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✓</span>
                <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
