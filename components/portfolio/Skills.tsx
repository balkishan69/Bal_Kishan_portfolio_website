'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';

const categories = [
  { key: 'languages', label: 'Languages', color: '#00d4ff', icon: '{ }' },
  { key: 'frontend', label: 'Frontend', color: '#00ff88', icon: '<>' },
  { key: 'backend', label: 'Backend', color: '#ff6b35', icon: '⚙' },
  { key: 'databases', label: 'Databases', color: '#ffd700', icon: '🗄' },
  { key: 'aiml', label: 'AI / ML', color: '#a855f7', icon: '🧠' },
  { key: 'devops', label: 'DevOps', color: '#06b6d4', icon: '☁' },
  { key: 'tools', label: 'Tools', color: '#f472b6', icon: '🔧' },
];

const langColors: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  'C++': '#f34b7d',
  Java: '#b07219',
  SQL: '#e38c00',
};

function LanguageBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: color }} />
          <span className="text-sm text-white font-medium">{name}</span>
        </div>
        <span className="text-xs font-mono text-[#5a5a70]">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function SkillBadge({ name, color, index }: { name: string; color: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ scale: 1.05, borderColor: color }}
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-[#9090a8] border border-white/8 bg-white/3 hover:text-white transition-all duration-200 cursor-default"
      style={{ '--badge-color': color } as React.CSSProperties}
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activeData = skills[activeCategory as keyof typeof skills];
  const activeColor = categories.find((c) => c.key === activeCategory)?.color || '#00d4ff';

  return (
    <section id="skills" className="section-padding relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="text-[#00d4ff] font-mono text-sm tracking-widest">02.</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Technical Stack</h2>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Language proficiency sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
              <span className="text-[#00d4ff] font-mono">{'{ }'}</span>
              Core Languages
            </h3>
            <div className="space-y-5">
              {skills.languages.map((lang, i) => (
                <LanguageBar
                  key={lang.name}
                  name={lang.name}
                  level={lang.level}
                  color={langColors[lang.name] || '#00d4ff'}
                  index={i}
                />
              ))}
            </div>
          </motion.div>

          {/* Category selector + badges */}
          <div className="lg:col-span-3 space-y-6">
            {/* Category tabs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {categories.slice(1).map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    activeCategory === cat.key
                      ? 'text-white border-transparent'
                      : 'text-[#9090a8] border-white/8 hover:text-white hover:border-white/15'
                  }`}
                  style={
                    activeCategory === cat.key
                      ? { background: `${cat.color}20`, borderColor: `${cat.color}40`, color: cat.color }
                      : {}
                  }
                >
                  <span className="mr-1.5">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Skills grid */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 min-h-[200px]"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-1 h-5 rounded-full"
                  style={{ background: activeColor }}
                />
                <span className="text-sm font-semibold text-white">
                  {categories.find((c) => c.key === activeCategory)?.label}
                </span>
                <span className="text-xs text-[#5a5a70] ml-auto">
                  {Array.isArray(activeData) ? activeData.length : 0} technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(activeData) &&
                  (activeData as string[]).map((skill, i) => (
                    <SkillBadge key={skill} name={skill} color={activeColor} index={i} />
                  ))}
              </div>
            </motion.div>

            {/* Bottom quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Technologies', value: '40+', color: '#00d4ff' },
                { label: 'Languages', value: '6', color: '#00ff88' },
                { label: 'Frameworks', value: '15+', color: '#ff6b35' },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  className="glass rounded-xl p-3 text-center"
                >
                  <div className="text-xl font-bold" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-[#5a5a70] mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
