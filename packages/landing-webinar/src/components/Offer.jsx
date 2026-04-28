import { content } from '../../content'

export default function Offer() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
      <div className="max-w-3xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-12">{content.offer.title}</h2>
        <div className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl">
          <ul className="space-y-4">
            {content.offer.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-2xl">✓</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
