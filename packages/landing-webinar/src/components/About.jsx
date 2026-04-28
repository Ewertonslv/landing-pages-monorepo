import { content } from '../../content'

export default function About() {
  return (
    <section className="py-20 px-4 bg-red-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-6xl mb-4">👨‍🏫</div>
          <h2 className="text-4xl font-bold mb-4">{content.about.title}</h2>
          <p className="text-2xl font-bold text-red-600 mb-2">{content.about.name}</p>
          <p className="text-lg text-gray-700 mb-6">{content.about.credentials}</p>
          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-lg text-gray-700">{content.about.details}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
