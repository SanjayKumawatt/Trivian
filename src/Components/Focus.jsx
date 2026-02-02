import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Target, Database } from 'lucide-react';

const FocusAreas = () => {
  const areas = [
    {
      icon: Users,
      title: "Community & Infrastructure Management",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Workforce & Human Resource Intelligence",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Target,
      title: "Sales & Customer Intelligence",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Database,
      title: "Data Analytics & Automation Platforms",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our <span className="text-teal-600">Focus Areas</span>
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Strategic domains where we deliver high-impact technological solutions.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-gray-100 hover:border-teal-200 bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col items-center text-center cursor-default"
            >
              {/* Icon Bubble */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${area.color}`}>
                <area.icon size={30} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                {area.title}
              </h3>
              
              {/* Decorative minimal line */}
              <div className="w-8 h-1 bg-gray-200 mt-4 rounded-full group-hover:bg-teal-400 group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FocusAreas;