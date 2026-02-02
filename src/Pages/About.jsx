import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, Target, Globe, ShieldCheck, RefreshCw, 
  Layers, Brain, Cloud, Users, Briefcase, 
  Database, ArrowRight, CheckCircle2, Lock, Package 
} from 'lucide-react';

const About = () => {
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white">

      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section className="bg-slate-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-full text-sm font-semibold mb-6"
          >
            Who We Are
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            Simplifying Complexity with <br className="hidden md:block" />
            <span className="text-teal-400">Intelligent Systems</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED is an Indian technology startup founded with the goal of creating intelligent software systems that simplify complex operations for businesses and communities.
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          BELIEFS & VALUES
      ========================================================================== */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Engineering for <span className="text-teal-600">Impact</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are a team of engineers and problem-solvers who believe that technology shouldn't just exist-it should solve real problems. Our work combines software engineering discipline, AI-driven logic, and product-centric thinking.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 mb-4">We believe technology should:</h3>
              <ul className="space-y-4">
                {[
                  "Reduce operational friction",
                  "Increase transparency",
                  "Support better decisions",
                  "Grow sustainably with users"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          VISION & MISSION
      ========================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-10 rounded-2xl relative overflow-hidden"
            >
              <Eye className="w-12 h-12 text-teal-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To build a future where organizations operate on intelligent digital foundations, enabling efficiency, transparency, and long-term scalability.
              </p>
              {/* Decorative bg icon */}
              <Eye className="absolute bottom-[-20px] right-[-20px] w-48 h-48 text-white/5" />
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-teal-50 text-gray-900 p-10 rounded-2xl border border-teal-100 relative overflow-hidden"
            >
              <Target className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3 relative z-10">
                {[
                  "Automate core business operations",
                  "Transform data into actionable insights",
                  "Support rapid growth without instability",
                  "Maintain strong security standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Target className="absolute bottom-[-20px] right-[-20px] w-48 h-48 text-teal-500/10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LONG TERM GOALS
      ========================================================================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Long-Term Goals</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, text: "Build a portfolio of AI-first SaaS products" },
              { icon: Globe, text: "Serve customers across multiple industries" },
              { icon: Database, text: "Continuously evolve platforms through data" },
              { icon: ShieldCheck, text: "Establish trust through transparency" }
            ].map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  <goal.icon className="w-6 h-6 text-teal-600" />
                </div>
                <p className="font-medium text-gray-800">{goal.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK & WHAT WE BUILD
      ========================================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* How We Work */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How We Work</h2>
              <p className="text-gray-500 mt-2">Our methodology ensures quality and scalability.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Package, title: "Product-First Mindset", 
                  desc: "We design solutions as scalable products, not temporary projects." 
                },
                { 
                  icon: RefreshCw, title: "Iterative Development", 
                  desc: "Our platforms evolve continuously based on real usage and feedback." 
                },
                { 
                  icon: Lock, title: "Security & Reliability", 
                  desc: "Security is built into architecture from day one, not added later." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-teal-100 transition-all duration-300"
                >
                  <item.icon className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* What We Build */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Layers className="mr-3 text-teal-600" /> What We Build
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><Package className="text-teal-500 w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Intelligent SaaS Platforms</h4>
                    <p className="text-gray-600 text-sm">Multi-tenant, secure, scalable platforms that automate operations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Brain className="text-teal-500 w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">AI-Driven Business Systems</h4>
                    <p className="text-gray-600 text-sm">Custom AI components that analyze data and predict outcomes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Cloud className="text-teal-500 w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Cloud-Native Applications</h4>
                    <p className="text-gray-600 text-sm">Modern apps designed for high availability and reliability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="mr-3 text-teal-600" /> Our Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, text: "Community Management" },
                  { icon: Briefcase, text: "HR & Workforce" },
                  { icon: Target, text: "Sales Intelligence" },
                  { icon: Database, text: "Data Analytics" }
                ].map((area, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <area.icon className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="text-sm font-semibold text-gray-700">{area.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CTA SECTION
      ========================================================================== */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Let’s Build Smarter Systems
          </motion.h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
            Whether you are launching a product, modernizing operations, or scaling rapidly, TRIVIAN helps you build technology that lasts.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-800 font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg"
          >
            Work With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;