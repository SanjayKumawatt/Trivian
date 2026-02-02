import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  // Dropdown items customized for your company context
 const productLinks = [
    { name: 'Community Intelligence', href: '/products/community-intelligence' },
    { name: 'Workforce Intelligence (HR)', href: '/products/workforce-intelligence' },
    { name: 'Customer Intelligence (CRM)', href: '/products/customer-intelligence' },
    { name: 'Software Services', href: '/services' }, // Isko Services page se link kiya hai
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- Logo Section --- */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="text-2xl  flex items-center gap-1 font-bold tracking-tight">
              {/* Splitting the long name for better visual design matching the image */}
              <img src={logo} className='h-13 mb-2' alt="" />
              <span className="text-gray-900 ">TRIVIAN</span>
              <span className="text-teal-500">DIRECT</span>
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button className="flex items-center text-teal-600 font-medium focus:outline-none">
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isProductDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden p-2"
                  >
                    <div className="flex flex-col space-y-1">
                      {productLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/services" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* --- CTA Button --- */}
          <div className="hidden md:flex items-center">
            <Link
              to="/get-started"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-md font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu (Slide down) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md">
                Home
              </Link>
              
              <div className="px-3 py-2">
                <span className="block text-base font-medium text-teal-600 mb-2">Products</span>
                <div className="pl-4 space-y-2 border-l-2 border-teal-100">
                  {productLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-sm text-gray-600 hover:text-teal-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md">
                Services
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md">
                Contact
              </Link>
              
              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link
                  to="/get-started"
                  className="block w-full text-center bg-teal-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;