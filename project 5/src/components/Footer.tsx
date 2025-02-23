import React from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020140] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">L.I.T. Labs</span>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              We empower schools with cutting-edge STEM education, making learning innovative, hands-on, and future-ready.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-4">
              {[
                'Robotics Workshops',
                'AI & ML Training',
                'Drone Technology',
                'IoT & Automation',
                'STEM Lab Installations'
              ].map((program) => (
                <li key={program}>
                  <a
                    href="#services"
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <MapPin className="h-5 w-5 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  123 Tech Park, Innovation Street
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  info@litlabs.com
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Globe className="h-5 w-5 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  www.litlabs.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-white/20 py-8">
          <div className="flex justify-center space-x-6">
            {[
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Instagram, href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={`Follow us on ${social.icon.name}`}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-6">
          <div className="text-center text-sm text-gray-300">
            <p>© 2025 L.I.T. Labs. All rights reserved.</p>
            <div className="mt-2">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;