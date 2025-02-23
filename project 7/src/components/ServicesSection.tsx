import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const workshops = [
  {
    title: 'Robotics Workshop',
    description: 'Design, build, and program real robots!',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22731c2edb?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Explore the future of artificial intelligence',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Drone Technology',
    description: 'Master aerial robotics and automation',
    image: 'https://images.unsplash.com/photo-1581092127838-1566ed216258?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'IoT Innovation',
    description: 'Connect and control smart devices',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Cybersecurity',
    description: 'Learn ethical hacking and system protection',
    image: 'https://images.unsplash.com/photo-1581092160562-0b60f54e6df0?auto=format&fit=crop&w=800&q=80'
  }
];

const labSetups = [
  {
    name: 'STEM Lab',
    description: 'A state-of-the-art facility equipped with advanced learning tools, interactive displays, and collaborative workspaces designed to foster innovation and hands-on learning in science, technology, engineering, and mathematics.',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&h=800&q=80'
  },
  {
    name: 'Robotics Lab',
    description: 'Cutting-edge robotics laboratory featuring programmable robots, assembly stations, testing areas, and specialized equipment for students to explore mechanical engineering, programming, and automation.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=800&q=80'
  }
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === workshops.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workshops.length - 1 : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getVisibleSlides = () => {
    const slides = [];
    const totalSlides = workshops.length;
    
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      
      slides.push({
        ...workshops[index],
        position: i
      });
    }
    
    return slides;
  };

  return (
    <section className="services-bg py-24 relative min-h-screen">
      {/* Main Content */}
      <div className="services-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-200">
          Our Key Offerings
        </h2>

        {/* Workshops Carousel Section */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-200">
            Workshops
          </h3>
          
          <div 
            className="relative h-[500px] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={slideContainerRef}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {getVisibleSlides().map((slide, index) => (
                <div
                  key={slide.title}
                  className="absolute w-[80%] max-w-[600px] transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${slide.position * 85}%) scale(${slide.position === 0 ? 1 : 0.85})`,
                    zIndex: slide.position === 0 ? 20 : 10,
                    opacity: slide.position === 0 ? 1 : 0.6
                  }}
                >
                  <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] glass-card">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform transition-transform duration-300">
                      <h4 className="text-white text-xl font-bold mb-2"> 
                        {slide.title}
                      </h4>
                      <p className="text-white/90 text-sm">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-30 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-30 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {workshops.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-8 bg-cyan-400' 
                      : 'bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lab Setups Section */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-200">
            Lab Setups
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {labSetups.map((lab) => (
              <div 
                key={lab.name}
                className="group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-2xl glass-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {lab.name}
                  </h4>
                  <p className="text-base text-gray-300 line-clamp-3">
                    {lab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="px-6 py-10 md:py-10 text-center">
            <h3 className="text-2xl md:text-[28px] font-bold mb-6 text-white max-w-3xl mx-auto">
              Let's make schools future-ready.
            </h3>
            <button 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-[30px] py-[15px] rounded-[4px] font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
