import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, CheckCircle2, AlertTriangle, Gavel } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Scale className="w-8 h-8" />
            </div>
            <span className="text-teal-400 font-bold uppercase tracking-wider text-sm">Legal Documentation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-400">Please read these terms carefully before using our services.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12"
        >
          
          <div className="space-y-10 text-gray-600">
            
            {/* Section 1: Acceptance */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 text-teal-500 mr-2" /> 1. Acceptance
              </h2>
              <p className="leading-relaxed pl-7">
                By accessing or using the software platforms and services provided by <strong>TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED</strong>, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
            </section>

            {/* Section 2: Services */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-500 font-mono mr-3">02</span> Services
              </h2>
              <p className="leading-relaxed pl-7">
                We provide intelligent software platforms, SaaS products, and technology services. These services are subject to availability and we reserve the right to modify, update, or discontinue features to improve performance and security.
              </p>
            </section>

            {/* Section 3: User Responsibilities */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-500 font-mono mr-3">03</span> User Responsibilities
              </h2>
              <ul className="list-disc pl-12 space-y-2">
                <li>Users must ensure that their use of the platform complies with all applicable laws.</li>
                <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
                <li>Any unauthorized use of your account must be reported immediately.</li>
              </ul>
            </section>

            {/* Section 4: Intellectual Property */}
            <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All platform code, design, algorithms, logos, and content remain the exclusive property of <strong>TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED</strong>. Users are granted a limited, non-exclusive license to use the service as intended, but no ownership rights are transferred.
              </p>
            </section>

            {/* Section 5: Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" /> 5. Limitation of Liability
              </h2>
              <p className="leading-relaxed pl-7">
                Services are provided “as is” without warranties of any kind. TRIVIAN DIRECT SOLUTION INDIA PRIVATE LIMITED shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services, to the extent permitted by law.
              </p>
            </section>

            {/* Section 6: Termination */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-teal-500 font-mono mr-3">06</span> Termination
              </h2>
              <p className="leading-relaxed pl-7">
                We reserve the right to suspend or terminate access to our services for any user who violates these terms, engages in fraudulent activity, or poses a security risk to our platforms.
              </p>
            </section>

            {/* Section 7: Governing Law */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <Gavel className="w-5 h-5 text-teal-500 mr-2" /> 7. Governing Law
              </h2>
              <p className="leading-relaxed pl-7">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            {/* Footer Note */}
            <div className="border-t border-gray-200 pt-8 mt-12 text-sm text-gray-500">
              <p>For any legal inquiries, please contact: <a href="mailto:support@triviandirect.in" className="text-teal-600 hover:underline">support@triviandirect.in</a></p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;