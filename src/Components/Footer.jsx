import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* --- Column 1 (Left): Company Name & Description --- */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white block">
              TRIVIAN<span className="text-teal-500">DIRECT</span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED is a technology startup dedicated to building intelligent, data-driven software platforms that help organizations modernize operations and make better decisions through automation and AI.
            </p>
          </div>

          {/* --- Column 2 (Center): Quick Links --- */}
          <div className="lg:pl-12">
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-400 hover:text-teal-400 hover:pl-1 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-teal-400 hover:pl-1 transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-400 hover:pl-1 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-400 hover:pl-1 transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Column 3 (Right): Address & Email --- */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-1 text-teal-500 flex-shrink-0" />
                <p className="text-sm leading-relaxed">
                  C/O-MD JALALUDDIN ANSARI, <br />
                  VILLAGE-SANGRAMPUR, Gola (Ramgarh), <br />
                  Gola, Ramgarh - 829110, <br />
                  Jharkhand, India
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:support@triviandirect.in" className="text-sm hover:text-white transition-colors">
                  support@triviandirect.in
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {currentYear} TRIVIAN DIRECT SOLUTION INDIA PVT. LTD. All rights reserved.
          </p>

          {/* Privacy & Terms Buttons */}
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-slate-500 hover:text-white transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-conditions" 
              className="text-sm text-slate-500 hover:text-white transition-colors hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;