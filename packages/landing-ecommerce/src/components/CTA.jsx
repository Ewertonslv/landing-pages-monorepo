import React from 'react';

export function CTA({ data }) {
  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          {data.headline}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {data.subheadline}
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          {data.buttonText}
        </button>
      </div>
    </section>
  );
}
