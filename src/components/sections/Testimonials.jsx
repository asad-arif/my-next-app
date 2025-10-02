'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  return (
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
  );
};

export default Testimonials;
