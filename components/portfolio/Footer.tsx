'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00ff88] flex items-center justify-center">
              <Code2 size={16} className="text-black" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-space-grotesk">
                bal<span className="text-[#00d4ff]">kishan</span>
              </div>
              <div className="text-xs text-[#5a5a70]">Full Stack Engineer</div>
            </div>
          </div>

          {/* Center: Built with */}
          <div className="flex items-center gap-1.5 text-xs text-[#5a5a70]">
            <span>Built with</span>
            <Heart size={11} className="text-red-500 fill-red-500" />
            <span>using Next.js, TypeScript & Framer Motion</span>
          </div>

          {/* Right: Social + scroll to top */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/8 text-[#5a5a70] hover:text-white hover:border-white/20 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#00d4ff]/20 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-[#5a5a70]">
          <span>© 2026 Bal Kishan. All rights reserved.</span>
          <span className="mx-2">·</span>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#00d4ff] transition-colors">
            {personalInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
