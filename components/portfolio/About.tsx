'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Target, BookOpen, GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';

const traits = [
  {
    icon: Code2,
    title: 'Systems Thinker',
    desc: 'I architect for scale before I write the first line. Clean abstractions, clear boundaries.',
    color: '#00d4ff',
  },
  {
    icon: Zap,
    title: 'Performance Obsessed',
    desc: '40% latency reductions, 30% efficiency gains — I measure everything and optimize deliberately.',
    color: '#00ff88',
  },
  {
    icon: Target,
    title: 'Product-Oriented',
    desc: 'I build features that solve real problems, not just technical challenges. Outcomes over output.',
    color: '#ff6b35',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learner',
    desc: 'From competitive programming to AI systems — I operate at the frontier of what\'s buildable.',
    color: '#ffd700',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="text-[#00d4ff] font-mono text-sm tracking-widest">01.</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-[#9090a8] text-lg leading-relaxed">
              I&apos;m a recent 2026 Computer Science grad from AKTU University building production-grade software
              that handles real traffic, real users, and real problems. My engineering journey started
              with competitive programming — solving 1000+ DSA problems across LeetCode, Codeforces,
              and CodeChef — which gave me a strong foundation in algorithmic thinking.
            </p>
            <p className="text-[#9090a8] leading-relaxed">
              I've built full-stack systems with the MERN stack, integrated AI/LLM capabilities
              into production applications, and architect backends that scale. During my internship at{' '}
              <span className="text-white font-medium">Bluestock Fintech</span>, I optimized systems
              serving 10,000+ daily requests and reduced API response times by 30%.
            </p>
            <p className="text-[#9090a8] leading-relaxed">
              I believe in shipping early, measuring impact, and iterating with data. My projects range
              from AI-powered code intelligence platforms to real-time collaborative tools — each one
              built with production reliability in mind.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { label: 'Location', value: 'New Delhi, India' },
                { label: 'Education', value: 'B.Tech CSE, AKTU' },
                { label: 'Graduation', value: 'May 2026' },
                { label: 'Focus', value: 'Full Stack + AI' },
              ].map((fact) => (
                <div key={fact.label} className="glass rounded-lg p-3">
                  <div className="text-xs text-[#5a5a70] mb-1">{fact.label}</div>
                  <div className="text-sm text-white font-medium">{fact.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Traits + Education */}
          <div className="space-y-8">
            {/* Engineering traits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-xl p-4 group hover:border-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  style={{ '--trait-color': trait.color } as React.CSSProperties}
                >
                  {/* Hover glow background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                    style={{ background: trait.color }}
                  />
                  <div className="relative">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${trait.color}15`, border: `1px solid ${trait.color}30` }}
                    >
                      <trait.icon size={16} style={{ color: trait.color }} />
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{trait.title}</div>
                    <div className="text-xs text-[#5a5a70] leading-relaxed">{trait.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-[#00d4ff]" />
                <span className="text-sm font-semibold text-white">Education</span>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-[#00d4ff] mt-1.5 flex-shrink-0" />
                      {i < education.length - 1 && (
                        <div className="w-px flex-1 bg-white/5 mt-1" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="text-sm font-semibold text-white">{edu.degree}</div>
                      <div className="text-xs text-[#9090a8] mt-0.5">{edu.institution}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[#5a5a70]">{edu.duration}</span>
                        {edu.grade && (
                          <span className="text-xs text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded-full">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                      {edu.courses.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {edu.courses.slice(0, 3).map((c) => (
                            <span key={c} className="text-xs text-[#5a5a70] bg-white/5 px-2 py-0.5 rounded">
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
