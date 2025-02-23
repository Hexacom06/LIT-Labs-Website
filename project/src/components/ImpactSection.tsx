import React from 'react';
import CountUp from 'react-countup';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The STEM workshops have transformed how our students engage with technology. The hands-on experience is invaluable.",
    author: "Dr. Sarah Chen",
    role: "Principal, Tech Academy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "EduTech's lab installations have brought our science department into the 21st century. Our students are thriving.",
    author: "Michael Rodriguez",
    role: "Science Department Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Impact</h2>
        
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

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Educators Say</h2>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-lg p-8">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                    <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;