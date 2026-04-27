import { ArrowRight, Check } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
}

export default function Hero({ title, subtitle, ctaText, ctaLink, features }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {features && features.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <span key={index} className="flex items-center gap-2 text-gray-600">
                <Check className="w-5 h-5 text-green-500" />
                {feature}
              </span>
            ))}
          </div>
        )}

        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </section>
  );
}

export { Hero };