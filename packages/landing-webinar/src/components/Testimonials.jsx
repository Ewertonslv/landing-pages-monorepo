import { content } from '../../content'

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{content.testimonials.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.testimonials.items.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg border-l-4 border-red-600">
              <p className="italic text-gray-700 mb-4">"{item.text}"</p>
              <p className="font-bold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
