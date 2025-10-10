'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
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
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={link.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">© 2024 Muhammad Asad. Built with Next.js and Three.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
