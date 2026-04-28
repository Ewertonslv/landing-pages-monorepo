import { content } from '../../content'

export default function SocialProof() {
  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Números que Comprovam</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.socialProof.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white rounded-xl shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">O que nossos clientes dizem</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {content.socialProof.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">{testimonial.image}</div>
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
