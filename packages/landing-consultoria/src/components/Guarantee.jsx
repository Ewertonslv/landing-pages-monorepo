import { content } from '../../content'

export default function Guarantee() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {content.guarantee.title}
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          {content.guarantee.text}
        </p>

        <div className="inline-block bg-green-100 border-2 border-green-500 rounded-xl p-8">
          <div className="text-5xl mb-4">✓</div>
          <p className="text-lg font-bold text-green-700">
            Garantia 100% de satisfação ou seu dinheiro de volta
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="btn-primary">
            Aproveitar a garantia
          </button>
        </div>
      </div>
    </section>
  )
}
