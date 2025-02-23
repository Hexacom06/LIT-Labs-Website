import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  useEffect(() => {
    // Initialize parallax effect
    const handleParallax = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll<HTMLElement>('.parallax').forEach(element => {
        const speed = element.dataset.speed || '0.8';
        const yPos = -(scrolled * parseFloat(speed));
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOHYtNmg2djZoLTZ6IiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS1vcGFjaXR5PSIuMDgiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-8"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            {/* Headline with gradient */}
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              Modernizing schools for the Future!
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mb-8">
              Empowering schools in an affordable and scalable way.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:brightness-110 transition-all duration-300 min-w-[200px]">
                Get a Free Consultation
              </button>
              <button className="px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 min-w-[200px]">
                Explore Our Programs
              </button>
            </div>

            {/* Trust Indicators */}
            <div>
              <p className="text-base font-medium text-gray-600 mb-4">
                Trusted by Schools Across India
              </p>
              <div className="flex gap-8 overflow-hidden">
                <div className="flex animate-scroll gap-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=50&fit=crop&crop=edges&q=80`}
                      alt={`Partner School ${i}`}
                      className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 parallax" data-speed="0.5">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80"
                alt="Modern Classroom"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -left-4 top-1/4 animate-float-slow">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <p className="text-lg font-semibold">🚀 Igniting Possibilities</p>
                <div className="flex items-center mt-2">
                  <CountUp end={500} suffix="+" className="text-2xl font-bold text-blue-600" />
                  <span className="ml-2 text-sm text-gray-500">Schools</span>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 animate-float">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <p className="text-lg font-semibold">📚 Affordable & Scalable</p>
                <div className="flex items-center mt-2">
                  <CountUp end={50000} suffix="+" className="text-2xl font-bold text-blue-600" />
                  <span className="ml-2 text-sm text-gray-500">Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;