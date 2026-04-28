import { content } from '../../content'

export default function Solution() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{content.solution.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.solution.items.map((item, idx) => (
            <div key={idx} className="border-l-4 border-red-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.number}. {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
