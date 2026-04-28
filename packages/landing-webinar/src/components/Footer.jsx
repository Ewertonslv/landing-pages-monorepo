import { content } from '../../content'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="italic text-lg text-gray-300 mb-4">
            "{content.ps}"
          </p>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Webinar Consultoria Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
