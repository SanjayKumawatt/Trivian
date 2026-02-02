import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const SmarterSystems = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800">

      {/* Background Patterns (Circuit/Tech Vibe) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute left-0 bottom-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-300 blur-3xl"></div>
        {/* Optional Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
        >
          Let’s Build <span className="text-teal-200">Smarter Systems</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Whether you are launching a product, modernizing operations, or scaling rapidly, TRIVIAN helps you build technology that lasts.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Primary Button */}
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-4 bg-white text-teal-700 rounded-lg font-bold text-lg hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            About Us


            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Button */}
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-teal-700/50 backdrop-blur-sm border border-teal-400 text-white rounded-lg font-bold text-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Start a Conversation
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SmarterSystems;