import React from 'react';

export function Footer({ data }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              {data.links.produto.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {data.links.empresa.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {data.links.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <div className="flex gap-4">
              {data.social.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 Analytics Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
