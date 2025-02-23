import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="impact">
        <ImpactSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;