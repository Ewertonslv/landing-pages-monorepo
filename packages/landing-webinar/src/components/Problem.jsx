import { content } from '../../content'

export default function Problem() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{content.problem.title}</h2>
        <ul className="space-y-4">
          {content.problem.items.map((item, idx) => (
            <li key={idx} className="bg-white p-6 rounded-lg shadow flex gap-4">
              <span className="text-2xl">😓</span>
              <span className="text-lg text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
