import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Share2, TrendingUp, CheckCircle2 } from 'lucide-react';

const TechnologyPhilosophy = () => {

  const philosophies = [
    {
      icon: BrainCircuit,
      title: "AI as an Enabler, Not a Buzzword",
      description: "We use artificial intelligence where it creates measurable value-automation, prediction, prioritization, and insight-not where it adds unnecessary complexity.",
      points: [] 
    },
    {
      icon: Share2,
      title: "Systems Thinking",
      description: "We design platforms that connect workflows, users, and data into a single operational ecosystem. No more disconnected tools.",
      points: []
    },
    {
      icon: TrendingUp,
      title: "Built for Growth",
      description: "Every solution is architected assuming:",
      points: [
        "Increasing users",
        "Growing datasets",
        "Higher transaction volumes",
        "Evolving business needs"
      ]
    }
  ];

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Technology <span className="text-teal-600">Philosophy</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {philosophies.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 border border-transparent hover:border-teal-100 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-teal-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Special List for "Built for Growth" */}
              {item.points.length > 0 && (
                <ul className="space-y-3 mt-4 border-t border-gray-200 pt-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechnologyPhilosophy;