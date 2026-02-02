import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Code2, 
  CloudCog, 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  
  const servicesData = [
    {
      title: "AI & Data Engineering Services",
      icon: BrainCircuit,
      description: "We transform raw data into decision-making power through advanced engineering.",
      features: [
        "Predictive analytics systems",
        "Automation pipelines",
        "Custom AI models",
        "Data processing platforms"
      ]
    },
    {
      title: "Custom Software & SaaS Development",
      icon: Code2,
      description: "Building robust, scalable products that define new market standards.",
      features: [
        "End-to-end product engineering",
        "Multi-tenant SaaS platforms",
        "API-based architectures",
        "Secure application development"
      ]
    },
    {
      title: "Cloud-Native Architecture Design",
      icon: CloudCog,
      description: "Designing systems that survive failure and scale without friction.",
      features: [
        "Scalable system design",
        "Performance optimization",
        "High availability planning",
        "Disaster recovery strategies"
      ]
    },
    {
      title: "UX for Complex Systems",
      icon: LayoutDashboard,
      description: "Making complex workflows intuitive for power users and administrators.",
      features: [
        "Workflow-driven interface design",
        "Role-based dashboards",
        "Data-heavy UX optimization"
      ]
    }
  ];

  return (
    <div className="bg-white">
      
      {/* --- Page Header --- */}
      <section className="bg-slate-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            Engineering <span className="text-teal-400">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            We don't just write code. We engineer intelligent systems that drive business growth, security, and operational efficiency.
          </motion.p>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group"
              >
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-gray-300 group-hover:text-teal-200 transition-colors">
                    <span className="text-4xl font-bold opacity-20">0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 border-t border-gray-100 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* --- Mini CTA Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a custom solution?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Whether you need a complete platform overhaul or a specific AI module, our engineering team is ready to architect the solution.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 group"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;