'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your message.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: personalInfo.github, handle: '@balkishan69', color: '#ffffff' },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, handle: 'bal-kishan', color: '#0077b5' },
    { icon: Twitter, label: 'Twitter', href: personalInfo.twitter, handle: '@balkishanm69', color: '#1da1f2' },
    { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, handle: personalInfo.email, color: '#00d4ff' },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16"
        >
          <div className="text-[#00d4ff] font-mono text-sm tracking-widest">06.</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="flex-1 h-px bg-white/5 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s build something{' '}
                <span className="text-gradient">exceptional</span>.
              </h3>
              <p className="text-[#9090a8] leading-relaxed">
                I&apos;m actively looking for full-time software engineering roles and internships.
                Whether you have a challenging problem, an interesting project, or just want to
                discuss systems and algorithms — I&apos;m always open to a conversation.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {[
                { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, label: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/15 flex items-center justify-center">
                    <Icon size={14} className="text-[#00d4ff]" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-[#9090a8] hover:text-white transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-[#9090a8]">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <div className="text-xs text-[#5a5a70] mb-4 tracking-wider uppercase font-mono">Find me on</div>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, label, href, handle, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="glass rounded-xl p-4 group hover:border-white/10 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">{label}</div>
                        <div className="text-xs text-[#5a5a70]">{handle}</div>
                      </div>
                      <ArrowUpRight
                        size={12}
                        className="ml-auto text-[#5a5a70] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 glass rounded-xl p-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">Open to opportunities</div>
                <div className="text-xs text-[#5a5a70]">Full-time roles & internships — starting 2026</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center mb-4">
                  <Send size={24} className="text-[#00ff88]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-[#9090a8] text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                  className="mt-6 text-xs text-[#00d4ff] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-[#5a5a70] mb-2 block uppercase tracking-wider font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5a70] focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#5a5a70] mb-2 block uppercase tracking-wider font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5a70] focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#5a5a70] mb-2 block uppercase tracking-wider font-mono">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5a70] focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all resize-none"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>
                {error && <div className="text-sm text-rose-400">{error}</div>}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00d4ff] text-black font-semibold rounded-xl text-sm hover:bg-[#00d4ff]/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
