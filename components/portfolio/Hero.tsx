'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown, ExternalLink, Download, MapPin } from 'lucide-react';
import { personalInfo, stats } from '@/lib/data';

const roles = personalInfo.roles;

function TypeWriter() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 40);
    } else {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <span className="text-[#00d4ff]">
      {displayed}
      <span className="animate-[blink_1s_step-end_infinite] text-[#00d4ff]">|</span>
    </span>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#050508]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#00ff88]/4 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#ff6b35]/3 rounded-full blur-[80px]" />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"
        style={{ top: '30%' }}
      />
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <div className="text-sm font-mono text-[#5a5a70] mb-2 tracking-widest uppercase">
                {'<'} Hello World {'>'}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">Bal </span>
                <span className="text-gradient">Kishan</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants}>
              <div className="text-xl lg:text-2xl font-space-grotesk text-[#9090a8]">
                <TypeWriter />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#9090a8] text-base lg:text-lg leading-relaxed max-w-lg"
            >
              {personalInfo.tagline} MERN specialist, AI systems builder, and competitive programmer with{' '}
              <span className="text-[#00d4ff]">1000+ DSA problems</span> solved and{' '}
              <span className="text-[#00ff88]">LeetCode Knight</span> badge.
            </motion.p>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm text-[#5a5a70]">
              <MapPin size={14} />
              <span>New Delhi, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-black font-semibold rounded-xl text-sm transition-all duration-200"
              >
                View Projects
                <ExternalLink size={14} />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1O0Dbu8meAAS-ZiaKAaRgAKl7t6nk2Axb/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-semibold rounded-xl text-sm hover:bg-white/5 transition-all duration-200"
              >
                <Download size={14} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#00d4ff' }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-[#9090a8] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="text-xs text-[#5a5a70] font-mono ml-2">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#00d4ff] transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-8 lg:items-end"
          >
            {/* Profile Photo - Circular */}
            <div className="relative group">
              {/* Animated rotating border rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00d4ff] via-[#00ff88] to-[#ff6b35] opacity-75 blur-xl group-hover:opacity-100 animate-rotate-slow transition-all duration-500" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#00d4ff]/40 to-[#ff6b35]/40 blur-md animate-pulse" />

              {/* Main circular image container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#00d4ff]/30 shadow-2xl glow-cyan-strong backdrop-blur-sm">
                <img
                  src="/profile.png"
                  alt="Bal Kishan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff]/10 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating animated badges */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 bg-gradient-to-br from-[#f59e0b] to-[#ff6b35] border-2 border-[#fff]/20 rounded-full w-20 h-20 flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-xs font-bold text-white">Knight</div>
                  <div className="text-lg">⚔️</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute -top-2 -left-2 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] border-2 border-[#fff]/20 rounded-full w-24 h-24 flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-xs font-bold text-black">1000+</div>
                  <div className="text-xs text-black">Problems</div>
                </div>
              </motion.div>

              {/* Decorative particles around profile */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.cos((i * 120) * Math.PI / 180) * 80, 0],
                    y: [0, Math.sin((i * 120) * Math.PI / 180) * 80, 0],
                  }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-2 h-2 rounded-full bg-[#00d4ff]/40"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover:border-[#00d4ff]/20 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-[#9090a8] mt-1">{stat.label}</div>
                  <div className="text-xs text-[#5a5a70] mt-0.5">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#5a5a70] tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-[#5a5a70]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
