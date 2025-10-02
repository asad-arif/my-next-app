'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, scaleOnHover } from '@/lib/animations/variants';

const ConfiguratorsGrid = () => {
  const configurators = [
    {
      id: 'chair',
      title: 'Chair Configurator',
      description: 'Interactive chair customization with materials, colors, and leg styles',
      href: '/configurators/chair',
      icon: Code,
      gradient: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/20 hover:border-cyan-400/50',
      iconBg: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
      textColor: 'text-cyan-400/80',
      linkColor: 'text-cyan-400 group-hover:text-cyan-300',
    },
    {
      id: 'architecture',
      title: 'Architecture Visualizer',
      description: '3D architectural visualization with material and lighting options',
      href: '#',
      icon: Palette,
      gradient: 'from-blue-600/20 to-purple-600/20',
      borderColor: 'border-blue-400/20 hover:border-blue-400/50',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      textColor: 'text-blue-400/80',
      linkColor: 'text-blue-400 group-hover:text-blue-300',
    },
    {
      id: 'vehicle',
      title: 'Vehicle Configurator',
      description: 'Customize vehicles with colors, features, and accessories in 3D',
      href: '#',
      icon: Zap,
      gradient: 'from-green-600/20 to-cyan-600/20',
      borderColor: 'border-green-400/20 hover:border-green-400/50',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
      textColor: 'text-green-400/80',
      linkColor: 'text-green-400 group-hover:text-green-300',
      span: 'sm:col-span-2 lg:col-span-1',
    },
  ];

  return (
    <section id="configurators" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Featured
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Configurators
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Explore our collection of interactive 3D configurators, each designed for specific industries and use cases
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {configurators.map((configurator) => {
            const IconComponent = configurator.icon;
            return (
              <motion.div 
                key={configurator.id}
                className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${configurator.borderColor} transition-all duration-300 ${configurator.span || ''}`}
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`h-64 bg-gradient-to-br ${configurator.gradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 ${configurator.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${configurator.iconColor}`} />
                    </div>
                    <p className={`${configurator.textColor} text-lg`}>{configurator.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{configurator.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{configurator.description}</p>
                  <a 
                    href={configurator.href}
                    className={`flex items-center ${configurator.linkColor} text-sm font-medium transition-colors`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ConfiguratorsGrid;
