import { content } from '../../content'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Landing Pages Pro</h4>
            <p className="text-gray-400">Convertendo consultores em vendedores desde 2024.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Sobre</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="text-gray-400">📧 contato@landing.com</p>
            <p className="text-gray-400">📱 WhatsApp: (11) 98765-4321</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p className="italic text-lg">{content.ps}</p>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Landing Pages Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
