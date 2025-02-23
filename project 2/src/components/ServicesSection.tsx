import React from 'react';
import { Notebook as Robot, Brain, Plane, Bone as Drone, Code, Wifi, Shield, FlaskRound as Flask, Microscope } from 'lucide-react';

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
    icon: Drone,
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

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default ServicesSection;