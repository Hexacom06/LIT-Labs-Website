import React, { useState } from 'react';
import CountUp from 'react-countup';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsByCategory = {
  students: [
    {
      quote: "The robotics program opened my eyes to a whole new world of possibilities. I'm now considering a career in engineering!",
      author: "Alex Chen",
      role: "12th Grade Student",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
    },
    {
      quote: "The hands-on STEM workshops made complex concepts so much easier to understand. Learning has never been this fun!",
      author: "Sarah Martinez",
      role: "11th Grade Student",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop"
    },
    {
      quote: "I love how we get to work on real-world projects. It's not just theory anymore - we're actually building things!",
      author: "James Wilson",
      role: "10th Grade Student",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop"
    }
  ],
  teachers: [
    {
      quote: "The STEM workshops have transformed how our students engage with technology. The hands-on experience is invaluable.",
      author: "Dr. Sarah Chen",
      role: "Science Department Head",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    {
      quote: "EduTech's lab installations have brought our science department into the 21st century. Our students are thriving.",
      author: "Michael Rodriguez",
      role: "Physics Teacher",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    },
    {
      quote: "The curriculum support has made it so much easier to integrate modern technology into our daily lessons.",
      author: "Emily Thompson",
      role: "Technology Coordinator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
    }
  ],
  parents: [
    {
      quote: "Seeing my daughter's enthusiasm for science grow has been incredible. The program has really sparked her curiosity.",
      author: "Patricia Lee",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
    },
    {
      quote: "The practical skills my son is learning are preparing him for the future. It's an investment in his education.",
      author: "Robert Johnson",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
    },
    {
      quote: "We've seen a remarkable improvement in our child's problem-solving abilities since joining the program.",
      author: "Maria Garcia",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&h=200&fit=crop"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0000FF]">Our Impact</h2>
        
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

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0000FF]">Testimonials</h2>
          
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
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{currentTestimonial.author}</h4>
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