"use client";

import { motion } from "framer-motion";
import { Terminal, GitBranch, ExternalLink, Code2, Database, Layout } from "lucide-react";

export default function DevelopersPage() {
  const techStack = [
    { name: "Next.js 15", icon: <Layout size={24} />, desc: "The React framework used for server-side rendering, routing, and fast load times." },
    { name: "Tailwind CSS", icon: <Code2 size={24} />, desc: "Utility-first framework enabling the rapid development of our Liquid Glass UI." },
    { name: "Framer Motion", icon: <div className="font-mono text-xl font-bold pr-2">M</div>, desc: "Powering the complex scroll animations, staggers, and fluid transitions." },
    { name: "TypeScript", icon: <strong className="font-mono text-lg">TS</strong>, desc: "Providing static type definitions for a robust and bug-free codebase." },
    { name: "Supabase", icon: <Database size={24} />, desc: "Open-source Firebase alternative for database and real-time operations." },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30">
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 relative"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 -z-10 flex justify-center pointer-events-none opacity-20">
          <div className="w-[800px] h-[400px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-8 font-mono text-sm text-[#A1A1AA]">
          <Terminal size={14} className="text-indigo-400" />
          <span>~/srm-insider/platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
          Built by <span className="text-gradient font-mono">Developers</span>, <br className="hidden md:block"/> for Students
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto">
          Explore the architecture and technology powering the SRM Insider platform. We believe in building fast, beautiful, and accessible software.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <section className="mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10"
        >
          <Code2 className="text-indigo-500" />
          <h2 className="text-3xl font-bold text-white tracking-tight font-mono">Tech_Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card liquid-hover p-6 border-t-0 border-l-0 border-r-0 border-b-2 border-transparent hover:border-indigo-500 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors shadow-inner">
                  {tech.icon}
                </div>
                <div className="text-xs font-mono text-white/30">0{i + 1}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-200 transition-colors">{tech.name}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-10 md:p-14 text-center relative overflow-hidden flex flex-col items-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <GitBranch size={48} className="text-white mb-6 relative z-10 opacity-90" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter relative z-10">We <span className="text-indigo-400">Open Source</span></h2>
        <p className="text-lg text-[#A1A1AA] max-w-xl mx-auto mb-10 relative z-10">
          Portions of our platform architecture, UI components, and Liquid Glass design system are available on GitHub for the community to learn from and contribute to.
        </p>

        <a 
          href="https://github.com/srminsider" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          View GitHub <ExternalLink size={18} />
        </a>
      </motion.section>

    </main>
  );
}
