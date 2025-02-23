import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = gridRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      gridRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      gridRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#000428] to-[#004e92]">
        {/* Grid Background */}
        <div 
          ref={gridRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            mask: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.8) 0%, transparent 70%)'
          }}
        />

        {/* Radial Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,78,146,0.15) 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-6 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn. Innovate. Transform.
            </motion.h1>

            <motion.p
              className="text-[#C0C0C0] text-lg md:text-xl mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Empowering schools in an affordable and scalable way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative inline-block group"
            >
              <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              <button 
                onClick={() => setShowContactForm(true)}
                className="relative px-8 py-4 text-lg font-medium rounded-full bg-white text-[#004e92] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white border border-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000428] to-transparent z-10"
        />
      </section>

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  );
};

export default Hero;