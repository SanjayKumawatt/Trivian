import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Server, Database, FileKey, UserCheck, Activity } from 'lucide-react';

const Security = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-6">
            <ShieldCheck className="w-8 h-8 text-teal-600" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Security & <span className="text-teal-600">Data Protection</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Security is fundamental to everything we build. We don't just add it; we architect around it.
          </p>
        </div>

        {/* --- Dual Card Layout --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Core Security Measures (Dark Theme) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl border border-slate-800 relative group overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-500"></div>

            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Lock className="mr-3 text-teal-400" /> Core Security Measures
            </h3>
            
            <ul className="space-y-6">
              {[
                { icon: FileKey, text: "Encryption for sensitive data" },
                { icon: UserCheck, text: "Role-based access control" },
                { icon: ShieldCheck, text: "Secure authentication" },
                { icon: Activity, text: "Continuous system monitoring" }
              ].map((item, index) => (
                <li key={index} className="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/50">
                  <item.icon className="w-5 h-5 text-teal-400 mr-4 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Data Protection Principles (Light Theme) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100 relative group overflow-hidden"
          >
            {/* Decorative Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500"></div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Database className="mr-3 text-teal-600" /> Data Protection Principles
            </h3>

            <ul className="space-y-6">
              {[
                { icon: Eye, text: "Data minimization", desc: "We only collect what is necessary." },
                { icon: Lock, text: "Controlled access", desc: "Strict permissions for data entry points." },
                { icon: Server, text: "Secure backups", desc: "Redundant storage to prevent data loss." },
                { icon: ShieldCheck, text: "Privacy-by-design architecture", desc: "Privacy is built into the code base." }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-teal-50 rounded-lg text-teal-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{item.text}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Security;