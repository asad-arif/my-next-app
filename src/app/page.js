'use client';

import { Navigation } from '@/components/ui';
import { 
  Hero, 
  ConfiguratorsGrid, 
  About, 
  Testimonials, 
  Contact, 
  Footer 
} from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <Hero />
      <ConfiguratorsGrid />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
