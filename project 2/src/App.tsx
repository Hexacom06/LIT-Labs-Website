import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ImpactSection />
      <ServicesSection />
    </div>
  );
}

export default App;