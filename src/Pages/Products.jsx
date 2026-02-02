import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'community-intelligence',
      title: "Trivian Community Intelligence Platform",
      icon: Building2,
      desc: "A comprehensive digital platform designed to manage residential communities and shared infrastructure using automation.",
      features: ["Resident & Asset Management", "Automated Billing", "Visitor Tracking"],
      color: "teal"
    },
    {
      id: 'workforce-intelligence',
      title: "Trivian Workforce Intelligence (HR)",
      icon: Briefcase,
      desc: "An AI-enabled HR platform that transforms workforce data into actionable intelligence and simplifies payroll.",
      features: ["Recruitment Intelligence", "Payroll Automation", "Performance Analytics"],
      color: "blue"
    },
    {
      id: 'customer-intelligence',
      title: "Trivian Customer Intelligence (CRM)",
      icon: Target,
      desc: "A customer management system built around behavior, data, and automation to help teams focus on high-value opportunities.",
      features: ["Intelligent Lead Scoring", "Pipeline Forecasting", "Revenue Analytics"],
      color: "indigo"
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Our <span className="text-teal-400">Product Ecosystem</span>
        </motion.h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Intelligent platforms engineered to solve specific operational challenges for communities, workforce, and sales.
        </p>
      </section>

      {/* Product Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-8 flex-1">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${product.color}-50`}>
                  <product.icon className={`w-7 h-7 text-${product.color}-600`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 min-h-[56px]">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {product.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Know More Button */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link 
                  to={`/products/${product.id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all group"
                >
                  Know More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;