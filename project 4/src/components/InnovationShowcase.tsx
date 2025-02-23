import React from 'react';
import { Notebook as Robot, Brain, Bone as Drone, Wifi } from 'lucide-react';

const technologies = [
  {
    icon: Robot,
    title: 'Robotics',
    description: 'Hands-on robotics education with industry-standard equipment and comprehensive curriculum support.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Introduction to AI concepts through practical applications and interactive learning experiences.',
  },
  {
    icon: Drone,
    title: 'Drone Technology',
    description: 'Explore aerial robotics and real-world applications of drone technology in modern industries.',
  },
  {
    icon: Wifi,
    title: 'IoT Solutions',
    description: 'Connect the physical and digital worlds through innovative Internet of Things projects.',
  },
];

const InnovationShowcase = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Leading Edge Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <tech.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{tech.title}</h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>
              <a
                href="#learn-more"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;