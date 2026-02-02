import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Brain, CloudLightning, ArrowUpRight } from 'lucide-react';

const WhatWeBuild = () => {
  const services = [
    {
      icon: Layout,
      title: "Intelligent SaaS Platforms",
      description: "Multi-tenant, secure, scalable platforms that automate operations across industries.",
      delay: 0
    },
    {
      icon: Brain,
      title: "AI-Driven Business Systems",
      description: "Custom AI components that analyze data patterns, predict outcomes, and assist decision-making.",
      delay: 0.2
    },
    {
      icon: CloudLightning,
      title: "Cloud-Native Applications",
      description: "Modern applications designed for high availability, performance, and reliability.",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-400 font-semibold tracking-wide uppercase text-sm"
          >
            Core Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl font-bold text-white"
          >
            What We <span className="text-teal-400">Build</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-400 max-w-2xl mx-auto"
          >
            Engineering robust solutions for the modern digital era.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-teal-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-2"
            >
              {/* Icon Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-teal-400" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors opacity-0 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeBuild;