'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, Play, Code, Palette, Zap, ArrowRight, Github, Linkedin, Mail, Menu, X, Star, Quote, Send, User, MessageSquare, Phone } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager, TechCorp",
      content: "The 3D configurator transformed our product showcase. Our conversion rate increased by 40% and customer engagement is through the roof.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Creative Director, DesignStudio",
      content: "Incredible attention to detail and seamless integration. The configurator perfectly matches our brand aesthetic and user experience goals.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "CEO, Innovation Labs",
      content: "Working with this team was a game-changer. They delivered exactly what we envisioned and more. Highly recommend for any 3D project.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">3D Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('configurators')} className="text-gray-300 hover:text-cyan-400 transition-colors">Configurators</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-cyan-400 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <button onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-cyan-400 transition-colors">Home</button>
                <button onClick={() => { scrollToSection('configurators'); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-cyan-400 transition-colors">Configurators</button>
                <button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-cyan-400 transition-colors">About</button>
                <button onClick={() => { scrollToSection('testimonials'); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-cyan-400 transition-colors">Testimonials</button>
                <button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Configurators Grid Section */}
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
            {/* Product Configurator */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="h-64 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Code className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-cyan-400/80 text-lg">Product Configurator</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Product Configurator</h3>
                <p className="text-gray-300 text-sm mb-4">Interactive product customization with real-time 3D visualization</p>
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Architecture Visualizer */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300"
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Palette className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-blue-400/80 text-lg">Architecture Visualizer</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Architecture Visualizer</h3>
                <p className="text-gray-300 text-sm mb-4">3D architectural visualization with material and lighting options</p>
                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Vehicle Configurator */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/50 transition-all duration-300 sm:col-span-2 lg:col-span-1"
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="h-64 bg-gradient-to-br from-green-600/20 to-cyan-600/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-green-400" />
                  </div>
                  <p className="text-green-400/80 text-lg">Vehicle Configurator</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Vehicle Configurator</h3>
                <p className="text-gray-300 text-sm mb-4">Customize vehicles with colors, features, and accessories in 3D</p>
                <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">3D Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Interactive Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Performance Optimization</span>
                </div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900/30">
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
              Client
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Hear what our clients say about our 3D configurator solutions
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 relative overflow-hidden">
              <Quote className="w-12 h-12 text-cyan-400/30 absolute top-4 left-4" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <motion.p 
                  key={currentTestimonial}
                  className="text-lg text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  "{testimonials[currentTestimonial].content}"
                </motion.p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-cyan-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                      placeholder="Your name"
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

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">3D Portfolio</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 3D Configurator Portfolio. Built with Next.js and Three.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

}