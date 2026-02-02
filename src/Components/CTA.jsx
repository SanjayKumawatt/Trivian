import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gray-900 rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-gray-900/20"
        >
          
          {/* Decorative Glow Effects */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to modernize <br className="hidden md:block" />
              your <span className="text-teal-400">operations?</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the forward-thinking organizations building their future on Trivian’s intelligent platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              {/* Primary Button */}
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/25 group"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Secondary Button */}
              <Link 
                to="/demo" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white font-bold rounded-xl transition-all duration-300"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Schedule a Demo
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;