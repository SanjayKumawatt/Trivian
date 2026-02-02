import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Globe, Database, Layers, CheckCircle } from 'lucide-react';

const WhoWeAre = () => {

  const beliefs = [
    "Reduce operational friction",
    "Increase transparency",
    "Support better decisions",
    "Grow sustainably with users"
  ];

  const goals = [
    {
      icon: Layers,
      text: "Build a portfolio of AI-first SaaS products"
    },
    {
      icon: Globe,
      text: "Serve customers across multiple industries"
    },
    {
      icon: Database,
      text: "Continuously evolve platforms through data learning"
    },
    {
      icon: ShieldCheck,
      text: "Establish trust through transparency and security"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PART 1: Introduction --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Engineering the Future of <span className="text-teal-600">Intelligent Operations</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong className="text-gray-900">TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED</strong> is an Indian technology startup founded with the goal of creating intelligent software systems that simplify complex operations for businesses and communities.
            </p>
            <p className="text-gray-600 mb-6">
              Our work combines software engineering discipline, AI-driven logic, and product-centric thinking.
            </p>
            
            {/* Team Beliefs List */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-900">We believe technology should:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {beliefs.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Decorative Image/Graphic Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[400px] bg-gradient-to-tr from-gray-100 to-teal-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center"
          >
            {/* Abstract Tech Graphic */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                 <Layers className="w-10 h-10 text-teal-600 mb-2" />
                 <div className="h-2 w-16 bg-gray-200 rounded"></div>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-lg mt-8 animate-bounce duration-[4000ms]">
                 <Database className="w-10 h-10 text-blue-600 mb-2" />
                 <div className="h-2 w-16 bg-gray-200 rounded"></div>
               </div>
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-2xl"></div>
          </motion.div>
        </div>

        {/* --- PART 2: Vision & Mission Cards --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-teal-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                To build a future where organizations operate on intelligent digital foundations, enabling efficiency, transparency, and long-term scalability.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-teal-50 border border-teal-100 p-10 rounded-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 text-teal-900">
              <Target size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-teal-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Automate core business operations",
                  "Transform data into actionable insights",
                  "Support rapid growth without instability",
                  "Maintain strong security and reliability standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* --- PART 3: Long-Term Goals --- */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Long-Term Goals</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-teal-600">
                  <goal.icon size={24} />
                </div>
                <p className="text-sm font-medium text-gray-700">{goal.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;