"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  
  const stats = [
    { label: "Articles", value: "500+" },
    { label: "Readers", value: "10K+" },
    { label: "Contributors", value: "50+" },
  ];

  const values = [
    { title: "Transparency", desc: "Open content and clear communication directly to the student body." },
    { title: "Community", desc: "A connected campus through shared stories, ideas, and events." },
    { title: "Growth", desc: "Empowering every student to achieve their full potential." },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30 dark:bg-[#050505] bg-[var(--bg)] transition-colors duration-500">
      
      {/* Hero Section */}
      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6 border dark:border-indigo-500/20 border-indigo-500/10">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-widest">Our Mission</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b] drop-shadow-2xl">
          We are <span className="text-gradient">SRM Insider</span>
        </h1>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] leading-relaxed font-medium">
          The premier campus media platform built entirely by students, for students. We uncover the stories, news, and opportunities that matter most to the SRM community.
        </p>
      </motion.section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card liquid-hover p-8 text-center border dark:border-white/10 border-black/10"
          >
            <div className="text-4xl md:text-5xl font-black dark:text-white text-[#09090b] mb-2 tracking-tighter drop-shadow-lg">{stat.value}</div>
            <div className="text-xs font-bold dark:text-[#A1A1AA] text-[#52525b] uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Values Section */}
      <section>
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black dark:text-white text-[#09090b] tracking-tighter mb-4 uppercase">Core Values</h2>
          <p className="dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto font-medium">The principles that guide our editorial team and platform development.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card liquid-hover p-8 relative overflow-hidden group border dark:border-white/10 border-black/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-6 border dark:border-white/5 border-black/5 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <span className="text-indigo-600 dark:text-indigo-400 font-black text-xl">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white text-[#09090b] mb-3 tracking-snug uppercase">{value.title}</h3>
              <p className="dark:text-[#A1A1AA] text-[#52525b] leading-relaxed font-bold opacity-70">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
