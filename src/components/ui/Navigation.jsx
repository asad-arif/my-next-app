'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';
import { useScrollDetection } from '@/lib/scroll';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollDetection();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'configurators', label: 'Configurators' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/images/asad_pic.png"
              alt="Muhammad Asad avatar"
              className="w-10 h-10 rounded-full object-cover border border-white/20"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white">Muhammad Asad</span>
              <span className="text-xs text-gray-300/80">3D Developer</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)} 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
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
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => handleNavClick(item.id)} 
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
