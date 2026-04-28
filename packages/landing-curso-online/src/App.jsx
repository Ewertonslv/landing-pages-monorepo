import React from 'react';
import { Hero } from './components/Hero';
import { Modules } from './components/Modules';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { content } from '../content';
import './index.css';

function App() {
  return (
    <div className="font-sans">
      <Hero data={content.hero} />
      <Modules data={content.modules} />
      <Benefits data={content.benefits} />
      <Testimonials data={content.testimonials} />
      <Pricing data={content.pricing} />
      <FAQ data={content.faq} />
    </div>
  );
}

export default App;
