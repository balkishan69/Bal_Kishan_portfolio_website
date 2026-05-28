'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { experience, certifications } from '@/lib/data';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="text-[#00d4ff] font-mono text-sm tracking-widest">03.</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 8 }}
                className="relative group"
              >
                {/* Timeline line */}
                {i < experience.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-white/5" />
                )}

                <div className="glass rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/10 to-[#00ff88]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#00ff88]/10 border border-white/8 flex items-center justify-center text-xl flex-shrink-0">
                      {job.logo}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Role + company */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                            {job.role}
                          </h3>
                          <div className="text-sm text-[#00d4ff] font-medium">{job.company}</div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#5a5a70]">
                          <span className="px-2 py-1 rounded-md bg-white/5 text-[#9090a8]">
                            {job.type}
                          </span>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-3 text-xs text-[#5a5a70] mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {job.duration}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {job.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#9090a8]">
                            <CheckCircle2 size={14} className="text-[#00ff88] mt-0.5 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-md bg-[#00d4ff]/8 text-[#00d4ff] border border-[#00d4ff]/15"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Open Source contribution */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b35]/10 to-[#ffd700]/10 border border-white/8 flex items-center justify-center text-xl">
                  🌍
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Open Source Contributor</h3>
                  <div className="text-sm text-[#ff6b35] font-medium">Hacktoberfest 2023</div>
                </div>
              </div>
              <p className="text-sm text-[#9090a8] mb-3">
                Contributed to 8+ major open source projects including Google&apos;s Oppia, CircuitVerse,
                and Kubernetes documentation during Hacktoberfest 2023.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Google Oppia', 'CircuitVerse', 'Kubernetes Docs', 'BookTown', 'Farmhub'].map((p) => (
                  <span key={p} className="text-xs px-2 py-1 rounded-md bg-white/5 text-[#9090a8]">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications sidebar */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h3 className="text-sm font-semibold text-white mb-1">Certifications</h3>
              <p className="text-xs text-[#5a5a70]">Verified credentials from top institutions</p>
            </motion.div>

            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-5 group hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white leading-tight">{cert.name}</div>
                    <div className="text-xs text-[#5a5a70] mt-0.5">{cert.subtitle}</div>
                    <div
                      className="text-xs font-medium mt-2 inline-block px-2 py-0.5 rounded-full"
                      style={{ color: cert.color, background: `${cert.color}12` }}
                    >
                      {cert.issuer}
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center text-xs font-semibold text-[#00d4ff] hover:text-white transition-colors"
                      >
                        View Certificate
                        <ExternalLink size={12} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-xl p-5 border-dashed"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-xs font-semibold text-white">Currently Exploring</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['System Design', 'Distributed Systems', 'LLM Fine-tuning', 'Rust'].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-[#9090a8]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
