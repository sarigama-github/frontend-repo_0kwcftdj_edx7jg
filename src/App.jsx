import React from 'react'
import Hero from './components/Hero'
import Values from './components/Values'
import Showcase from './components/Showcase'
import WhyRomania from './components/WhyRomania'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Values />
      <Showcase />
      <WhyRomania />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
