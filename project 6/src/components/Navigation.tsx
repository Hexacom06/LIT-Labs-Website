import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-600">L.I.T. Labs</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25">
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
          <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
          <button className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;