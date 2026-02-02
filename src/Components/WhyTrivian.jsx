import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSpreadsheet, 
  Layers, 
  EyeOff, 
  AlertTriangle, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Server 
} from 'lucide-react';

const WhyTrivian = () => {
  
  // Data for the "Problem" side
  const challenges = [
    { icon: Layers, text: "Fragmented software tools" },
    { icon: FileSpreadsheet, text: "Manual processes and spreadsheets" },
    { icon: EyeOff, text: "Limited visibility into data" },
    { icon: AlertTriangle, text: "Systems that break when scale increases" },
  ];

  // Data for the "Solution" side
  const solutions = [
    { icon: Zap, text: "Easier to operate" },
    { icon: Server, text: "More reliable at scale" },
    { icon: ShieldCheck, text: "Secure by design" },
    { icon: TrendingUp, text: "Ready for long-term growth" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why <span className="text-teal-600">TRIVIAN</span> Exists
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We bridge the gap between traditional operations and intelligent automation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* --- Left Column: The Problem (Current Reality) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gray-200"></div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-gray-100 text-gray-600 p-2 rounded-lg mr-3">
                <AlertTriangle size={20} />
              </span>
              Many organizations today operate on:
            </h3>
            <ul className="space-y-6">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="ml-4 text-base font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- Right Column: The Solution (TRIVIAN) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-teal-100 relative overflow-hidden transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-teal-100 text-teal-600 p-2 rounded-lg mr-3">
                <Zap size={20} />
              </span>
              TRIVIAN exists to replace this complexity with intelligent, unified platforms that are:
            </h3>
            <ul className="space-y-6">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-teal-100 rounded-full p-1">
                    <item.icon className="h-4 w-4 text-teal-600" />
                  </div>
                  <span className="ml-4 text-lg font-semibold text-gray-800">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyTrivian;