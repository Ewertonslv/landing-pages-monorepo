import { content } from '../../content'

export default function CTA() {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Inscreva-se Agora (Gratuito)
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Temos apenas 200 vagas. Já ocupadas metade. Não deixe passar.
        </p>
        <button className="bg-white text-red-600 font-bold py-4 px-12 rounded-lg text-lg hover:bg-gray-100 transition">
          Garantir meu lugar
        </button>
        <p className="text-sm opacity-75 mt-4">
          {content.hero.ctaMicro}
        </p>
      </div>
    </section>
  )
}
