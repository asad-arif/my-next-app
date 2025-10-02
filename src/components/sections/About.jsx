'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { fadeInLeft, fadeInRight } from '@/lib/animations/variants';

const About = () => {
  const skills = [
    { name: '3D Web Development', color: 'bg-cyan-400' },
    { name: 'Interactive Design', color: 'bg-blue-400' },
    { name: 'Performance Optimization', color: 'bg-green-400' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              About Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We specialize in creating cutting-edge 3D configurators that bring your products to life. 
              Our team combines technical expertise with creative vision to deliver immersive experiences 
              that engage your customers and drive conversions.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With years of experience in 3D web development, we understand the unique challenges of 
              creating performant, interactive 3D experiences that work seamlessly across all devices.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 ${skill.color} rounded-full`}></div>
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl border border-cyan-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-cyan-400" />
                  </div>
                  <p className="text-cyan-400/80 text-lg">Your Photo Here</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
