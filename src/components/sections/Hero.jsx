'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play, Code } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="mb-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={fadeInUp}
          >
            Interactive 3D Configurators
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Transform your ideas into immersive 3D experiences. Professional, creative, and cutting-edge 
            configurators that engage your audience like never before.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <motion.button 
            className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('configurators')}
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 group-hover:translate-x-1 transition-transform" />
            View Configurators
          </motion.button>
          <motion.button 
            className="group border-2 border-cyan-400/50 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 group-hover:rotate-12 transition-transform" />
            Learn More
          </motion.button>
        </motion.div>

        <motion.div 
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
