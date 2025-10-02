'use client';

import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations/variants';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Get In
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Ready to bring your 3D vision to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                placeholder="Project inquiry"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <div className="relative">
                <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <textarea
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
