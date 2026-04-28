import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Offer from './components/Offer'
import Urgency from './components/Urgency'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <Problem />
      <Solution />
      <About />
      <Testimonials />
      <Offer />
      <Urgency />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
