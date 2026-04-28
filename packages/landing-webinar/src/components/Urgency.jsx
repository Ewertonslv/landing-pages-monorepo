import { content } from '../../content'

export default function Urgency() {
  return (
    <section className="py-20 px-4 bg-yellow-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          {content.urgency.title}
        </h2>
        <div className="bg-white rounded-xl p-8 shadow">
          <ul className="space-y-4">
            {content.urgency.items.map((item, idx) => (
              <li key={idx} className="text-lg text-gray-700 flex gap-4">
                <span className="text-2xl">⚡</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
