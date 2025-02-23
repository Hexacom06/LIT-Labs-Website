import React from 'react';

const LabSetups = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Lab Setups
        </h3>
        
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
  );
};

export default LabSetups;