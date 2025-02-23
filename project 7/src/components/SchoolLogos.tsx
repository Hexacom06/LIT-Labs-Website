import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const schoolLogos = [
  {
    name: 'Delhi Public School',
    logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=DPS'
  },
  {
    name: 'Ryan International',
    logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Ryan'
  },
  {
    name: 'Kendriya Vidyalaya',
    logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=KV'
  },
  {
    name: 'DAV Public School',
    logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=DAV'
  },
  {
    name: 'Modern School',
    logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Modern'
  },
  {
    name: 'St. Xavier\'s',
    logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Xavier'
  },
];

const SchoolLogos = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600 font-poppins">
        Trusted by Leading Schools
      </h3>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 ${
            showLeftArrow ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 ${
            showRightArrow ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-[1]" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-[1]" />

        {/* Logos Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {schoolLogos.map((school, index) => (
            <div
              key={index}
              className="flex-shrink-0 group"
            >
              <div className="w-[200px] h-[100px] bg-gray-50 rounded-lg shadow-md flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <img
                  src={school.logo}
                  alt={`${school.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-sm text-center mt-2 text-gray-600">{school.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolLogos;