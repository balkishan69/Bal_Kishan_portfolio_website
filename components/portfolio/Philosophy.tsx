'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { philosophyQuotes } from '@/lib/data';

export default function Philosophy() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const next = () => setCurrent((c) => (c + 1) % philosophyQuotes.length);
  const prev = () => setCurrent((c) => (c - 1 + philosophyQuotes.length) % philosophyQuotes.length);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/3 via-transparent to-[#00ff88]/3 pointer-events-none" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#00ff88]/20 border border-[#00d4ff]/20 flex items-center justify-center mx-auto mb-8">
            <Quote size={20} className="text-[#00d4ff]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="text-xl lg:text-3xl font-space-grotesk font-medium text-white leading-relaxed mb-6">
                &ldquo;{philosophyQuotes[current].quote}&rdquo;
              </blockquote>
              <div className="text-sm text-[#5a5a70] font-mono tracking-wider uppercase">
                — {philosophyQuotes[current].context}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#9090a8] hover:text-white hover:border-white/25 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {philosophyQuotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current ? 'bg-[#00d4ff] w-4' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#9090a8] hover:text-white hover:border-white/25 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
