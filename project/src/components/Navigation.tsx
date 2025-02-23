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
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduTech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
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
          <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
          <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;