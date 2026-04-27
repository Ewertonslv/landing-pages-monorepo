interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function Features({ title, features, columns = 3 }: FeaturesProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Features };