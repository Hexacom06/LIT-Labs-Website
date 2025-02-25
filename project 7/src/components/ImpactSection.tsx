import React, { useState } from 'react';
import CountUp from 'react-countup';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SchoolLogos from './SchoolLogos';

const testimonialsByCategory = {
  students: [
    {
      quote: "Building an aircraft model was like living my dream! I felt like Iron Man.  I want to create fighter jets in the future.",
      author: "Rohan",
      role: "6th Grade Student",
      image: "/images/Rohan Class6.png"
    },
    {
      quote: "The robotics program opened my eyes to a whole new world of possibilities. I'm now considering a career in engineering!",
      author: "Khushbu",
      role: "11th Grade Student",
      image: "/images/khushbunew.jpg"
    },
    {
      quote: "I love how we get to work on real-world projects. It's not just theory anymore - we're actually building things!",
      author: "Arpit Savarkar",
      role: "8th Grade Student",
      image: "/images/Arpit Savarkar.webp"
    }
  ],
  teachers: [
    {
      quote: "LIT Labs program challenged and inspired students, offering real-world STEM skills in an exciting format. Absolutely fantastic!",
      author: "Dr. Shailendra Mishra",
      role: "Principal",
      image: "/images/Principal.png"
    },
    {
      quote: "Students were fully engaged, working as teams, and developing essential skills like problem-solving & creativity. A brilliant program that we highly recommend.",
      author: "Smt. Pushpinder Kaur",
      role: "Principal",
      image: "/images/Chairman.png"
    },
    {
      quote: "The curriculum support by LIT Labs has made it so much easier to integrate modern technology into our daily lessons.",
      author: "Smt. Shalini Dubey",
      role: "Science Teacher",
      image: "/images/ShaliniDubey.jpg"
    }
  ],
  parents: [
    {
      quote: "Seeing my daughter's enthusiasm for science grow has been incredible. LIT Labs' program has really sparked her curiosity.",
      author: "Sm. Seetu Yadav ",
      role: "Parent",
      image: "/images/ShailendraSingh.webp"
    },
    {
      quote: "The practical skills my son is learning are preparing him for the future. It's an investment in his education.",
      author: "Sm. Tapan Singh",
      role: "Parent",
      image: "/images/images (1).jpeg"
    },
    {
      quote: "We've seen a remarkable improvement in our child's problem-solving abilities and interest since joining LIT Labs program.",
      author: "Sm. Saurabh Yadav",
      role: "Parent",
      image: "/images/SaurabhYadav.webp"
    }
  ]
};

const ImpactSection = () => {
  const [activeCategory, setActiveCategory] = useState('students');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'students', label: 'Students' },
    { id: 'teachers', label: 'Teachers' },
    { id: 'parents', label: 'Parents' }
  ];

  const currentTestimonials = testimonialsByCategory[activeCategory as keyof typeof testimonialsByCategory];
  const currentTestimonial = currentTestimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === currentTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? currentTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Our Impact</h2>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={50} suffix="+" duration={2.5} />
            </div>
            <p className="text-gray-600">Schools Reached</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={200} suffix="+" duration={2.5} />
            </div>
            <p className="text-gray-600">Teachers</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={2000} suffix="+" duration={2.5} />
            </div>
            <p className="text-gray-600">Students Certified</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={5000} suffix="+" duration={2.5} />
            </div>
            <p className="text-gray-600">Students Impacted</p>
          </div>
        </div>

        {/* School Logos Section */}
        <SchoolLogos />

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">Testimonials</h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="border-b border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentIndex(0);
                  }}
                  className={`px-8 py-4 text-lg font-medium transition-all duration-300 relative
                    ${activeCategory === category.id 
                      ? 'text-blue-600' 
                      : 'text-gray-500 hover:text-blue-600'
                    }`}
                >
                  {category.label}
                  {activeCategory === category.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Single Testimonial Display */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="bg-white rounded-2xl p-8 shadow-lg transition-opacity duration-300"
              key={`${activeCategory}-${currentIndex}`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="relative flex-shrink-0">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-600"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-blue-600 mb-1">{currentTestimonial.author}</h4>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-xl text-gray-700 leading-relaxed text-center italic mb-8">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Navigation Controls */}
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-600" />
                  </button>
                  
                  <div className="flex gap-3">
                    {currentTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center
                          ${currentIndex === index
                            ? 'bg-blue-600 text-white font-bold'
                            : 'text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
