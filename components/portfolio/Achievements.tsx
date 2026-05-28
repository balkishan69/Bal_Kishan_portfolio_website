'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, ExternalLink, Code, Star } from 'lucide-react';
import { achievements } from '@/lib/data';

const problemStats = [
  { platform: 'LeetCode', solved: '300+', color: '#f59e0b', detail: 'Knight Badge' },
  { platform: 'Codeforces', solved: '300+', color: '#60a5fa', detail: 'Specialist' },
  { platform: 'CodeChef', solved: '200+', color: '#a78bfa', detail: '3 Stars' },
  { platform: 'Total', solved: '1000+', color: '#00ff88', detail: 'Across all platforms' },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="text-[#00d4ff] font-mono text-sm tracking-widest">05.</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Achievements</h2>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        {/* Big achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {achievements.map((ach, i) => (
            <motion.a
              key={ach.platform}
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group glass rounded-2xl p-6 cursor-pointer hover:border-white/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: ach.color }}
              />

              <div className="relative">
                <div className="text-3xl mb-3">{ach.icon}</div>
                <div className="text-sm text-[#5a5a70] mb-1">{ach.platform}</div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: ach.color }}
                >
                  {ach.rating}
                </div>
                <div className="text-base font-semibold text-white mb-1">{ach.badge}</div>
                <div className="text-xs text-[#9090a8]">{ach.detail}</div>
                {ach.solved && (
                  <div className="mt-3 flex items-center gap-1 text-xs text-[#5a5a70]">
                    <Code size={10} />
                    {ach.solved} problems solved
                  </div>
                )}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                    View Profile
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
              <ExternalLink
                size={12}
                className="absolute top-4 right-4 text-[#5a5a70] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>

        {/* Stats breakdown + GitHub activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem solving breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
              <Code size={16} className="text-[#00d4ff]" />
              DSA Problem Solving
            </h3>
            <div className="space-y-4">
              {problemStats.map((ps, i) => (
                <div key={ps.platform} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-[#9090a8]">{ps.platform}</div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: ps.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: ps.platform === 'Total' ? '100%' : `${(parseInt(ps.solved) / 1000) * 100}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-sm font-bold" style={{ color: ps.color }}>
                      {ps.solved}
                    </span>
                  </div>
                  <div className="w-20 text-xs text-[#5a5a70]">{ps.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#9090a8]">Meta HackerCup 2024</span>
                <span className="text-[#00d4ff] font-semibold">Global Rank 6,676</span>
              </div>
              <div className="text-xs text-[#5a5a70] mt-1">Out of 24,000+ participants — Top 28% worldwide</div>
            </div>
          </motion.div>

          {/* GitHub stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
              <Star size={16} className="text-[#ffd700]" />
              GitHub Activity
            </h3>

            {/* GitHub contribution graph image */}
            <div className="rounded-xl overflow-hidden bg-white/3 p-3 mb-5">
              <img
                src={`https://ghchart.rshah.org/00d4ff/balkishan69`}
                alt="GitHub contribution chart"
                className="w-full rounded opacity-90"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="text-center text-xs text-[#5a5a70] mt-2">Contribution Activity</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Repositories', value: '44+', color: '#00d4ff' },
                { label: 'Languages', value: '10+', color: '#00ff88' },
                { label: 'Contributions', value: '500+', color: '#ff6b35' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-white/3 rounded-xl">
                  <div className="text-lg font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#5a5a70] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="https://github.com/balkishan69"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-[#9090a8] hover:text-[#00d4ff] transition-colors"
              >
                View full GitHub profile
                <ExternalLink size={11} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
