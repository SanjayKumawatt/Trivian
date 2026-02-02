import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, Send, CheckCircle, 
  Loader2, ArrowRight, Building2, User 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '', // User kis product/service ke liye aaya hai
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call (2 seconds delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form (Optional: agar user ko naya form bharna ho)
      // setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- Page Header --- */}
      <section className="bg-slate-900 pt-32 pb-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Let's Start a <span className="text-teal-400">Conversation</span>
        </motion.h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Ready to modernize your operations? Reach out to our engineering team directly.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* --- LEFT COLUMN: Contact Info --- */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Whether you have a question about our platforms, need a demo, or want to discuss a custom engineering project, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              
              {/* Address Card */}
              <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal-200 transition-colors">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-teal-700" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Headquarters</h3>
                  <p className="text-gray-600 leading-relaxed">
                    C/O-MD JALALUDDIN ANSARI,<br />
                    VILLAGE-SANGRAMPUR, Gola (Ramgarh),<br />
                    Gola, Ramgarh - 829110,<br />
                    Jharkhand, India
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal-200 transition-colors">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-teal-700" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and support:</p>
                  <a href="mailto:support@triviandirect.in" className="text-teal-600 font-bold text-lg hover:underline">
                    support@triviandirect.in
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* --- RIGHT COLUMN: Form Area --- */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10 relative overflow-hidden">
            
            {/* Conditional Rendering: Form OR Success Message */}
            <AnimatePresence mode="wait">
              
              {!isSuccess ? (
                /* --- THE FORM --- */
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* --- INTEREST SELECTION (CRITICAL FIELD) --- */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">What are you interested in?</label>
                    <div className="relative">
                      <select 
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all appearance-none text-gray-700 cursor-pointer"
                      >
                        <option value="" disabled>Select a Topic</option>
                        <option value="Community Intelligence Platform">Community Intelligence Platform</option>
                        <option value="Workforce Intelligence (HR)">Workforce Intelligence (HR)</option>
                        <option value="Sales & CRM Solutions">Sales & CRM Solutions</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Cloud Architecture">Cloud Architecture Design</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-teal-500/25 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </motion.form>

              ) : (

                /* --- SUCCESS STATE (No Browser Alert) --- */
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 max-w-xs mx-auto mb-8">
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.interest}</strong>. Our team will contact you shortly at {formData.email}.
                  </p>
                  
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
                    }}
                    className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>

              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;