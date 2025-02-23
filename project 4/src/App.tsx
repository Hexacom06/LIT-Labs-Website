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
      <Hero />
      <ImpactSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;