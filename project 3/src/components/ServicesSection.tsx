import React, { useState, useEffect } from 'react';
import { Notebook as Robot, Brain, Plane, Code, Wifi, Shield, Bone as DroneIcon } from 'lucide-react';

const workshops = [
  {
    icon: Robot,
    name: 'Robotics',
    description: 'Students learn to apply physics and engineering principles to design, build, and program their own autonomous robots.'
  },
  {
    icon: Brain,
    name: 'Artificial Intelligence',
    description: 'Students grasp the fundamentals of AI and ML, experimenting with real-world applications like image recognition and interactive chatbots.'
  },
  {
    icon: Plane,
    name: 'Aeromodelling',
    description: 'Students discover the principles of flight and aerodynamics by designing and building their own model aircraft, enhanced with 3D printing and virtual simulations.'
  },
  {
    icon: DroneIcon,
    name: 'Drone Technology',
    description: 'Students dive into drone technology by learning the science behind flight, assembling drones, and programming autonomous navigation.'
  },
  {
    icon: Code,
    name: 'Programming for Problem Solving',
    description: 'Students develop problem-solving skills through hands-on programming challenges, learning to code, debug, and create interactive applications.'
  },
  {
    icon: Wifi,
    name: 'IoT',
    description: 'Students unlock the potential of IoT by connecting devices and creating smart, responsive systems that interact with the real world.'
  },
  {
    icon: Shield,
    name: 'Cybersecurity',
    description: 'Students gain critical skills in cybersecurity, learning to safeguard systems, detect vulnerabilities, and protect digital information through ethical hacking.'
  },
];

const workshopImages = [
  {
    url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    alt: 'Students working on robotics project'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22731c2edb?auto=format&fit=crop&w=1200&q=80',
    alt: 'AI workshop session'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80',
    alt: 'Drone programming workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092127838-1566ed216258?auto=format&fit=crop&w=1200&q=80',
    alt: 'IoT workshop'
  },
];

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workshopImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workshopImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workshopImages.length) % workshopImages.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h2>

        {/* Workshops Subsection */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Workshops
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our hands-on workshops are designed to provide students with practical experience in cutting-edge technologies, fostering innovation and problem-solving skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <workshop.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {workshop.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {workshop.description}
                </p>
              </div>
            ))}
          </div>

          {/* Workshop Image Slider */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workshopImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {workshopImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-white w-4' : 'bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lab Setups Subsection */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Lab Setups
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            State-of-the-art laboratory facilities equipped with the latest technology to provide hands-on learning experiences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Robotics Lab Column */}
            <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=800&q=80"
                  alt="Modern Robotics Laboratory"
                  className="w-full h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Robotics Lab
                </h4>
                <p className="text-[14px] leading-relaxed text-gray-600">
                  Fully-equipped labs for hands-on robotics learning
                </p>
              </div>
            </div>

            {/* STEM Lab Column */}
            <div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&h=800&q=80"
                  alt="STEM Laboratory"
                  className="w-full h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  STEM Lab
                </h4>
                <p className="text-[14px] leading-relaxed text-gray-600">
                  A multipurpose space for scientific exploration & innovation
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#2B3D4F] rounded-xl overflow-hidden">
            <div className="px-6 py-8 md:py-12 text-center">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                Transform your school with cutting-edge learning. Book a Free Consultation today!
              </h3>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;