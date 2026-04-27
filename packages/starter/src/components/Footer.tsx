interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links?: FooterLink[];
  company?: string;
}

export default function Footer({ links, company }: FooterProps) {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        {links && links.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-600 hover:text-gray-900">
                {link.label}
              </a>
            ))}
          </div>
        )}
        
        <p className="text-center text-gray-500 text-sm">
          {company && `© ${new Date().getFullYear()} ${company}`}
        </p>
      </div>
    </footer>
  );
}

export { Footer };