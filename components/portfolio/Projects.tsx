'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '@/lib/data';

const categoryColors: Record<string, string> = {
  'AI/ML': '#a855f7',
  'Full Stack': '#00d4ff',
  'Backend': '#ff6b35',
  'Frontend': '#00ff88',
  'Algorithms': '#ffd700',
};

function ProjectCard({ project, index, featured }: { project: typeof projects[0]; index: number; featured: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const catColor = categoryColors[project.category] || '#00d4ff';
  const liveDemoColor = project.id === 'codesage' ? '#00d4ff' : catColor;

  if (featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        whileHover={{ y: -8 }}
            className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8 group hover:border-white/15 transition-all duration-500 glow-cyan items-stretch"
      >
        {/* Image */}
            <div className="relative overflow-hidden h-36 lg:h-full bg-[#0d0d14]">
            <div
              className="w-full h-full bg-cover bg-top bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${catColor}20, transparent 60%)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/90 via-[#0d0d14]/40 to-transparent lg:bg-none" />

        </div>

        {/* Content */}
        <div className="bg-[#0d0d14] p-3 flex flex-col justify-between h-full">
          <div>
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full mb-4 inline-block"
              style={{ color: catColor, background: `${catColor}20`, border: `1px solid ${catColor}30` }}
            >
              {project.category}
            </span>
            <div className="text-xs font-mono text-[#5a5a70] mb-2">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
              {project.title}
            </h3>
            <div className="text-sm text-[#9090a8] mb-4">{project.subtitle}</div>
            <p className="text-sm text-[#9090a8] leading-relaxed mb-4">{project.description}</p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.metrics.map((m) => (
                <span
                  key={m}
                  className="text-xs px-2 py-1 rounded-md font-medium"
                  style={{ color: catColor, background: `${catColor}10`, border: `1px solid ${catColor}20` }}
                >
                  ✓ {m}
                </span>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-[#9090a8]">
                  {t}
                </span>
              ))}
            </div>

            {/* Expandable details */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-[#5a5a70] hover:text-[#00d4ff] flex items-center gap-1 transition-colors mb-3"
            >
              {expanded ? 'Less detail' : 'Architecture deep-dive'}
              {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="text-xs text-[#9090a8] leading-relaxed overflow-hidden mb-4"
                >
                  {project.longDescription}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-[#9090a8] hover:text-white hover:border-white/25 transition-all duration-200"
            >
              <Github size={14} />
              Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-black transition-all duration-200"
                style={{ background: liveDemoColor }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Non-featured compact card
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden group hover:border-white/12 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-28 overflow-hidden bg-[#0d0d14]">
        <div
          className="w-full h-full bg-cover bg-top bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/60 to-transparent" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span
          className="text-xs font-medium px-2 py-1 rounded-full mb-3 inline-block"
          style={{ color: catColor, background: `${catColor}20` }}
        >
          {project.category}
        </span>
        <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
          {project.title}
        </h3>
        <div className="text-xs text-[#9090a8] mb-3">{project.subtitle}</div>
        <p className="text-xs text-[#5a5a70] leading-relaxed flex-1 overflow-hidden">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 my-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#9090a8]">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#5a5a70]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#9090a8] hover:text-white transition-colors"
          >
            <Github size={12} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs ml-auto"
              style={{ color: '#00d4ff' }}
            >
              Live <ArrowUpRight size={11} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const filteredOthers = filter
    ? otherProjects.filter((p) => p.category === filter)
    : otherProjects;

  const allCategories = Array.from(new Set(otherProjects.map((p) => p.category)));

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="text-[#00d4ff] font-mono text-sm tracking-widest">04.</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#9090a8] mb-12 max-w-xl"
        >
          Production-grade systems built with performance, scalability, and real-world impact in mind.
        </motion.p>

        {/* Featured projects */}
        <div className="space-y-6 mb-16">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} featured={true} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">More Projects</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter(null)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                  !filter ? 'bg-[#00d4ff]/15 text-[#00d4ff]' : 'text-[#9090a8] hover:text-white'
                }`}
              >
                All
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat === filter ? null : cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                    filter === cat ? 'text-white' : 'text-[#9090a8] hover:text-white'
                  }`}
                  style={
                    filter === cat
                      ? { background: `${categoryColors[cat]}20`, color: categoryColors[cat] }
                      : {}
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filteredOthers.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} featured={false} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://github.com/balkishan69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl text-sm text-[#9090a8] hover:text-white hover:border-white/25 transition-all duration-200 group"
          >
            <Github size={16} />
            View all 44+ repositories on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
