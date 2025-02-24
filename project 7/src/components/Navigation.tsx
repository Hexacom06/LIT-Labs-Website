import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import ContactForm from './ContactForm';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-blue-600">L.I.T. Lab</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('impact')} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 h-64' : 'opacity-0 h-0'
        } overflow-hidden bg-white`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Services
            </button>
            <button 
              onClick={() => {
                setShowContactForm(true);
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  );
};

export default Navigation;
