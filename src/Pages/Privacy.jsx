import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  // Page load hone par top par scroll karein
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
              <Shield className="w-8 h-8" />
            </div>
            <span className="text-teal-400 font-bold uppercase tracking-wider text-sm">Legal Documentation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: {currentDate}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12"
        >
          
          <div className="prose prose-lg text-gray-600 max-w-none">
            
            <p className="text-lg leading-relaxed mb-8">
              <strong className="text-gray-900">TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED</strong> (“we”, “our”, “us”) is committed to protecting the privacy of users, customers, and partners. This policy outlines how we collect, use, and safeguard your information.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 h-8 bg-teal-500 rounded-full mr-3"></span>
                Information We Collect
              </h2>
              <div className="space-y-4 pl-4 border-l border-gray-100">
                <div>
                  <h3 className="font-bold text-gray-800 flex items-center mb-2">
                    <UserIcon className="w-4 h-4 text-teal-500 mr-2" /> Personal Information
                  </h3>
                  <p>Name, email, phone number, organization details, and account credentials.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 flex items-center mb-2">
                    <ActivityIcon className="w-4 h-4 text-teal-500 mr-2" /> Usage Data
                  </h3>
                  <p>IP address, browser type, device information, usage patterns, and system logs.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 flex items-center mb-2">
                    <BriefcaseIcon className="w-4 h-4 text-teal-500 mr-2" /> Business Data
                  </h3>
                  <p>Information uploaded or processed through our platforms.</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 h-8 bg-teal-500 rounded-full mr-3"></span>
                How We Use Information
              </h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-teal-500">
                <li>To provide and maintain our services effectively.</li>
                <li>To improve product functionality based on usage patterns.</li>
                <li>To ensure security, prevent fraud, and maintain compliance.</li>
                <li>To communicate service updates, alerts, and support messages.</li>
              </ul>
            </div>

            {/* Section 3 & 4 */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <Lock className="w-5 h-5 text-teal-600 mr-2" /> Data Security
                </h3>
                <p className="text-sm">We implement technical and organizational measures to protect data from unauthorized access, loss, or misuse.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <FileText className="w-5 h-5 text-teal-600 mr-2" /> Data Retention
                </h3>
                <p className="text-sm">Data is retained only as long as required for operational, legal, or compliance purposes.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 h-8 bg-teal-500 rounded-full mr-3"></span>
                User Rights
              </h2>
              <p>
                Users have the right to request access, correction, or deletion of their data. If you wish to exercise these rights, please contact our support team.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="font-semibold text-gray-900">Contact Us</p>
              <p>
                If you have questions about this Privacy Policy, please contact us at:<br />
                <a href="mailto:support@triviandirect.in" className="text-teal-600 hover:underline">support@triviandirect.in</a>
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper Icons for this component
const UserIcon = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const ActivityIcon = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const BriefcaseIcon = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;

export default PrivacyPolicy;