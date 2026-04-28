import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { content } from '../content';
import './index.css';

function App() {
  return (
    <div className="font-sans">
      <Hero data={content.hero} />
      <Features data={content.features} />
      <Pricing data={content.pricing} />
      <CTA data={content.cta} />
      <Footer data={content.footer} />
    </div>
  );
}

export default App;
