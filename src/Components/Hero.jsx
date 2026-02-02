import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-teal-50/50 to-white pt-32 pb-20 lg:pt-38 lg:pb-32 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100 blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6"
          >
            Engineering Intelligent <span className="text-teal-600">Digital Systems</span> for the Next Generation of Businesses
          </motion.h1>

          {/* Description Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed space-y-4"
          >
            <p>
              <span className="font-semibold text-gray-800">TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED</span> is a technology startup dedicated to building intelligent, data-driven software platforms that help organizations modernize operations, reduce manual dependency, and make better decisions through automation and artificial intelligence.
            </p>
            <p>
              We focus on real-world problems faced by growing businesses and communities-problems that cannot be solved with generic tools or disconnected applications. Our platforms are designed to work as integrated systems, capable of learning from data, adapting to change, and scaling as usage grows.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link 
              to="/get-started" 
              className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-lg font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/products" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-bold text-lg hover:bg-gray-50 hover:text-teal-600 hover:border-teal-200 transition-all flex items-center justify-center gap-2"
            >
              Explore Solutions
              <Globe className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;