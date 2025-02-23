import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import ServicesOverview from './components/ServicesOverview';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ImpactSection />
      <ServicesOverview />
    </div>
  );
}

export default App;