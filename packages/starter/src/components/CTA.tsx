import { ArrowRight } from 'lucide-react';

interface CTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTA({ title, description, buttonText, buttonLink }: CTAProps) {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        
        {description && (
          <p className="text-xl text-gray-300 mb-8">{description}</p>
        )}

        <a
          href={buttonLink}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

export { CTA };