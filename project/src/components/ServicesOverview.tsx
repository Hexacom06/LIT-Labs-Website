import React, { useState } from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    id: 'workshops',
    title: 'STEM Workshops',
    description: 'Interactive workshops designed to engage and inspire',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    features: [
      'Hands-on learning experiences',
      'Industry expert instructors',
      'All materials included',
      'Certificate of completion',
    ],
    price: '$2,500',
    duration: 'per workshop',
  },
  {
    id: 'labs',
    title: 'Lab Installations',
    description: 'Complete laboratory setup and maintenance',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780',
    features: [
      'Custom lab design',
      'Equipment installation',
      'Staff training',
      'Ongoing support',
    ],
    price: 'Custom',
    duration: 'per project',
  },
  {
    id: 'curriculum',
    title: 'Curriculum Development',
    description: 'Tailored educational content and resources',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0',
    features: [
      'Aligned with standards',
      'Digital resources',
      'Assessment tools',
      'Regular updates',
    ],
    price: '$5,000',
    duration: 'per year',
  },
];

const ServicesOverview = () => {
  const [activeTab, setActiveTab] = useState('workshops');

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-md ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={services.find(s => s.id === activeTab)?.image}
              alt={services.find(s => s.id === activeTab)?.title}
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              {services.find(s => s.id === activeTab)?.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {services.find(s => s.id === activeTab)?.description}
            </p>
            
            <div className="space-y-4 mb-8">
              {services.find(s => s.id === activeTab)?.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-baseline justify-between border-t pt-6">
              <div>
                <span className="text-3xl font-bold">
                  {services.find(s => s.id === activeTab)?.price}
                </span>
                <span className="text-gray-500 ml-1">
                  {services.find(s => s.id === activeTab)?.duration}
                </span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;