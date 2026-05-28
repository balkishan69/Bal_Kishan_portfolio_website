'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00ff88] flex items-center justify-center">
                <Code2 size={16} className="text-black font-bold" />
              </div>
              <span className="font-space-grotesk font-700 text-white text-sm tracking-wide">
                bal<span className="text-[#00d4ff]">kishan</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-sm text-[#9090a8] hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-[#00d4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://drive.google.com/file/d/1KxxXH2XMHi4OjMyAs6UCqqKbvU6sdk0Q/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-[#00d4ff] border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/10 transition-all duration-200"
              >
                Resume
              </motion.a>
              <motion.button
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-black bg-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/90 transition-all duration-200"
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#9090a8] hover:text-white transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-[#9090a8] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://drive.google.com/file/d/1KxxXH2XMHi4OjMyAs6UCqqKbvU6sdk0Q/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 text-sm text-[#00d4ff] border border-[#00d4ff]/30 rounded-lg"
                >
                  Resume
                </a>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="flex-1 px-4 py-2 text-sm text-black bg-[#00d4ff] rounded-lg font-medium"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
