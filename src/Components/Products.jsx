import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Wallet, Wrench, Bell, ShieldCheck, BarChart3, 
  UserCheck, FileText, CheckCircle2, TrendingUp, Search, Briefcase, 
  Target, MessageCircle, DollarSign
} from 'lucide-react';

const Products = () => {
  return (
    <div className="bg-gray-50">
      
      {/* --- Section Header --- */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 mb-6"
          >
            Our <span className="text-teal-600">Product Ecosystem</span>
          </motion.h2>
          <p className="text-xl text-gray-600">
            Intelligent platforms engineered to solve specific operational challenges.
          </p>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT 1: Community Intelligence Platform
      ========================================================================== */}
      <section className="py-24 border-t border-gray-100 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-bold mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Flagship Product
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trivian Community Intelligence Platform
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl">
              A comprehensive digital platform designed to manage residential communities, housing societies, gated complexes, and shared infrastructure using automation and analytics.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Col: Problem Statement */}
            <div className="lg:col-span-1">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                <h4 className="text-xl font-bold text-red-800 mb-4">The Problem We Solve</h4>
                <p className="text-red-700/80 mb-6 text-sm font-medium uppercase tracking-wide">
                  Community management often depends on:
                </p>
                <ul className="space-y-4">
                  {[
                    "Manual records",
                    "Delayed communication",
                    "Poor financial visibility",
                    "Inefficient issue resolution"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-red-900 font-medium">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-red-200">
                  <p className="text-teal-700 font-bold italic">
                    "Our platform replaces this with a centralized intelligence system."
                  </p>
                </div>
              </div>

              {/* Scale Badge */}
              <div className="mt-8 bg-teal-900 text-white p-6 rounded-2xl">
                <h5 className="font-bold text-lg mb-2 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-teal-400" />
                  Designed For Scale
                </h5>
                <p className="text-teal-100 text-sm">
                  Supports small societies to large multi-property setups without redesign.
                </p>
              </div>
            </div>

            {/* Right Col: Modules Grid */}
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">Key Functional Modules</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Module Cards */}
                <ModuleCard 
                  icon={Users} title="Resident & Asset Management"
                  items={["Central registry of residents & families", "Role-based access control", "Vehicle & asset tracking"]}
                />
                <ModuleCard 
                  icon={Wallet} title="Financial & Billing Intelligence"
                  items={["Automated maintenance billing", "Payment tracking & reconciliation", "Audit-ready financial summaries"]}
                />
                <ModuleCard 
                  icon={Wrench} title="Issue & Maintenance"
                  items={["Intelligent complaint categorization", "Priority-based routing", "Performance tracking insights"]}
                />
                <ModuleCard 
                  icon={Bell} title="Communication & Engagement"
                  items={["Central announcement system", "Emergency alerts", "Community polls & notices"]}
                />
                <ModuleCard 
                  icon={ShieldCheck} title="Visitor & Access Monitoring"
                  items={["Digital visitor logs", "Access authorization records", "Security event tracking"]}
                />
                <ModuleCard 
                  icon={BarChart3} title="Analytics & Dashboards"
                  items={["Operational metrics", "Financial insights", "Usage and engagement trends"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT 2: Workforce Intelligence System (HR)
      ========================================================================== */}
      <section className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              HR Platform
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trivian Workforce Intelligence System
            </h3>
            <p className="text-lg text-gray-600">
              An AI-enabled HR platform that transforms workforce data into actionable intelligence.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-5">
              
              {/* Challenges Sidebar */}
              <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-6">Challenges Addressed</h4>
                <ul className="space-y-6">
                  {[
                    "Manual recruitment screening",
                    "Poor workforce visibility",
                    "Error-prone payroll processes",
                    "Limited performance insights"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <UserCheck className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
                      <span className="text-lg text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities List */}
              <div className="lg:col-span-3 p-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Platform Capabilities</h4>
                <div className="space-y-8">
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-800">Recruitment Intelligence</h5>
                      <p className="text-gray-600 mt-1">AI-assisted resume screening & Candidate shortlisting based on skill relevance.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-800">Employee Lifecycle</h5>
                      <p className="text-gray-600 mt-1">Digital onboarding, Role mapping, Exit & retention insights.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-800">Payroll & Compliance</h5>
                      <p className="text-gray-600 mt-1">Automated salary calculations, Statutory reporting & Audit-ready records.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-gray-800">Performance & Analytics</h5>
                      <p className="text-gray-600 mt-1">Goal tracking, Performance trends & Workforce productivity dashboards.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PRODUCT 3: Customer Intelligence Platform (CRM)
      ========================================================================== */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 text-indigo-200 border border-indigo-500/30 rounded-full text-sm font-bold mb-6">
            <Target className="w-4 h-4 mr-2" />
            CRM Solution
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trivian Customer Intelligence Platform
          </h3>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-16">
            A customer management system built around behavior, data, and automation. Designed to help teams focus on high-value opportunities.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { icon: Target, title: "Intelligent Lead Scoring", desc: "Prioritize leads based on AI-driven potential analysis." },
              { icon: MessageCircle, title: "Automated Follow-ups", desc: "Never miss a touchpoint with smart scheduling." },
              { icon: BarChart3, title: "Pipeline Forecasting", desc: "Predict revenue with accurate sales pipeline models." },
              { icon: Users, title: "Interaction Tracking", desc: "360-degree view of all customer communications." },
              { icon: DollarSign, title: "Revenue Analytics", desc: "Deep dive into financial performance metrics." },
              { icon: CheckCircle2, title: "Manual Update Reduction", desc: "Focus on selling, not data entry." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:bg-white/20 transition-all"
              >
                <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                <p className="text-indigo-200 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

// Helper Component for Grid Items
const ModuleCard = ({ icon: Icon, title, items }) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:bg-white transition-all duration-300 group">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
        <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
      </div>
      <h5 className="ml-3 font-bold text-gray-900">{title}</h5>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-gray-600 flex items-start">
          <span className="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Products;