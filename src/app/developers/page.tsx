"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Terminal, GitBranch, ExternalLink, Code2, Database, Layout } from "lucide-react";

export default function DevelopersPage() {
  const shouldReduceMotion = useReducedMotion();
  
  const techStack = [
    { name: "Next.js 15", icon: <Layout size={24} />, desc: "The React framework used for server-side rendering, routing, and fast load times." },
    { name: "Tailwind CSS", icon: <Code2 size={24} />, desc: "Utility-first framework enabling the rapid development of our Liquid Glass UI." },
    { name: "Framer Motion", icon: <div className="font-mono text-xl font-bold pr-2">M</div>, desc: "Powering the complex scroll animations, staggers, and fluid transitions." },
    { name: "TypeScript", icon: <strong className="font-mono text-lg">TS</strong>, desc: "Providing static type definitions for a robust and bug-free codebase." },
    { name: "Supabase", icon: <Database size={24} />, desc: "Open-source Firebase alternative for database and real-time operations." },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30 dark:bg-[#050505] bg-[var(--bg)] transition-colors duration-500">
      
      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 relative"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 -z-10 flex justify-center pointer-events-none opacity-20 dark:opacity-30">
          <div className="w-[800px] h-[400px] bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-black/50 bg-white/50 backdrop-blur-md mb-10 font-mono text-xs font-bold uppercase tracking-widest dark:text-[#A1A1AA] text-indigo-600 shadow-sm transition-all duration-300">
          <Terminal size={14} className="text-indigo-500" />
          <span>~/srm-insider/platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 dark:text-white text-[#09090b] drop-shadow-2xl font-heading uppercase">
          Built by <span className="text-gradient font-mono">Developers</span>, <br className="hidden md:block"/> for Students
        </h1>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto font-bold uppercase tracking-tight opacity-80 leading-relaxed">
          Explore the architecture and technology powering the SRM Insider platform. We believe in building fast, beautiful, and accessible software.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <section className="mb-24">
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-sm">
            <Code2 className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-3xl font-black dark:text-white text-[#09090b] tracking-tighter font-mono uppercase tracking-widest">Tech_Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card liquid-hover p-8 border-b-4 border dark:border-white/10 border-black/10 border-b-transparent hover:border-b-indigo-500 group transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center dark:text-white text-[#09090b] group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  {tech.icon}
                </div>
                <div className="text-[10px] font-black font-mono dark:text-white/20 text-black/20 uppercase tracking-widest">0{i + 1}</div>
              </div>
              <h3 className="text-2xl font-black dark:text-white text-[#09090b] mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase font-heading">{tech.name}</h3>
              <p className="text-sm dark:text-[#A1A1AA] text-[#52525b] leading-relaxed font-bold opacity-80">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center border dark:border-white/10 border-black/10 shadow-2xl transition-all duration-500"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none dark:block hidden" />
        
        <GitBranch size={56} className="dark:text-white text-indigo-600 mb-8 relative z-10 opacity-90 transition-transform group-hover:scale-110 duration-500" />
        <h2 className="text-4xl md:text-6xl font-black dark:text-white text-[#09090b] mb-8 tracking-tighter relative z-10 uppercase font-heading">We <span className="text-gradient">Open Source</span></h2>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto mb-12 relative z-10 font-bold leading-relaxed opacity-80">
          Portions of our platform architecture, UI components, and Liquid Glass design system are available on GitHub for the community to learn from and contribute to.
        </p>

        <a 
          href="https://github.com/srminsider" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative z-10 flex items-center justify-center gap-3 px-10 py-5 bg-indigo-500 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-indigo-600 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-[0_25px_60px_rgba(99,102,241,0.5)] border-none"
        >
          View GitHub Archive <ExternalLink size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.section>

    </main>
  );
}
