import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Building2, Briefcase, Target, 
  CheckCircle, AlertTriangle, Layers, Zap 
} from 'lucide-react';

// Product Data Store
const productData = {
  'community-intelligence': {
    title: "Trivian Community Intelligence Platform",
    subtitle: "A comprehensive digital platform designed to manage residential communities, housing societies, gated complexes, and shared infrastructure.",
    icon: Building2,
    theme: "teal",
    problem: [
      "Manual records & Delayed communication",
      "Poor financial visibility",
      "Inefficient issue resolution",
      "Security gaps in visitor tracking"
    ],
    modules: [
      { title: "Resident & Asset Management", desc: "Central registry of residents, families, vehicles, and assets with role-based access." },
      { title: "Financial & Billing Intelligence", desc: "Automated maintenance billing, payment tracking, reconciliation, and audit-ready summaries." },
      { title: "Issue & Maintenance Automation", desc: "Intelligent categorization of complaints, priority-based routing, and resolution tracking." },
      { title: "Communication & Engagement", desc: "Central announcement system, emergency alerts, community polls, and notices." },
      { title: "Visitor & Access Monitoring", desc: "Visitor logs, access authorization records, and security event tracking." }
    ],
    scale: "Supports small societies to large multi-property setups without redesign."
  },
  'workforce-intelligence': {
    title: "Trivian Workforce Intelligence System",
    subtitle: "An AI-enabled HR platform that transforms workforce data into actionable intelligence.",
    icon: Briefcase,
    theme: "blue",
    problem: [
      "Manual recruitment screening",
      "Poor workforce visibility",
      "Error-prone payroll processes",
      "Limited performance insights"
    ],
    modules: [
      { title: "Recruitment Intelligence", desc: "AI-assisted resume screening and candidate shortlisting based on skill relevance." },
      { title: "Employee Lifecycle Management", desc: "Digital onboarding, role mapping, exit processes, and retention insights." },
      { title: "Payroll & Compliance", desc: "Automated salary calculations, statutory reporting support, and audit-ready payroll records." },
      { title: "Performance & Analytics", desc: "Goal tracking, performance trends, and workforce productivity dashboards." }
    ],
    scale: "Built for growing teams, from startups to enterprise workforces."
  },
  'customer-intelligence': {
    title: "Trivian Customer Intelligence Platform",
    subtitle: "A customer management system built around behavior, data, and automation.",
    icon: Target,
    theme: "indigo",
    problem: [
      "Missed follow-ups on leads",
      "Disconnected customer data",
      "Inaccurate sales forecasting",
      "Manual data entry fatigue"
    ],
    modules: [
      { title: "Intelligent Lead Scoring", desc: "Prioritize leads based on AI-driven potential analysis." },
      { title: "Automated Follow-ups", desc: "Never miss a touchpoint with smart scheduling and automation." },
      { title: "Sales Pipeline Forecasting", desc: "Predict revenue with accurate sales pipeline models." },
      { title: "Customer Interaction Tracking", desc: "360-degree view of all customer communications." },
      { title: "Revenue Analytics", desc: "Deep dive into financial performance metrics." }
    ],
    scale: "Scales with your customer base and sales team size."
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/products" className="text-teal-600 hover:underline">Back to Products</Link>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Hero Header */}
      <div className={`bg-slate-900 pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden`}>
         <div className={`absolute top-0 right-0 w-96 h-96 bg-${product.theme}-500/10 rounded-full blur-3xl -mr-20 -mt-20`}></div>
         <div className="max-w-5xl mx-auto relative z-10">
            <Link to="/products" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-${product.theme}-500/20 text-${product.theme}-400`}>
                <Icon className="w-8 h-8" />
              </div>
              <span className={`text-${product.theme}-400 font-bold tracking-wide uppercase text-sm`}>
                Detailed Overview
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              {product.title}
            </motion.h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              {product.subtitle}
            </p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        
        {/* Problem Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="text-red-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">The Problem We Solve</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.problem.map((item, idx) => (
              <div key={idx} className="flex items-center bg-red-50 p-4 rounded-lg border border-red-100">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                <span className="text-red-900 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modules Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Layers className={`text-${product.theme}-600 mr-3`} />
            Key Functional Modules
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {product.modules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all"
              >
                <h4 className="font-bold text-lg text-gray-900 mb-2">{mod.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scale Section */}
        <div className={`bg-${product.theme}-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between`}>
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold mb-2 flex items-center">
              <Zap className={`text-${product.theme}-400 mr-2`} /> Designed For Scale
            </h4>
            <p className={`text-${product.theme}-100`}>{product.scale}</p>
          </div>
          <Link 
            to="/contact"
            className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get a Demo
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;