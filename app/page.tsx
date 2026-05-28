'use client';

import Navbar from '@/components/portfolio/Navbar';
import ParticleBackground from '@/components/portfolio/ParticleBackground';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Achievements from '@/components/portfolio/Achievements';
import Philosophy from '@/components/portfolio/Philosophy';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508] text-white overflow-x-hidden relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Philosophy />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
