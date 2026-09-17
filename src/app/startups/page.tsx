"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function StartupsPage() {
  const [filter, setFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();
  
  const startups = [
    { name: "DevX", founder: "Rahul Sharma", category: "Tech", desc: "A campus-first developer community platform." },
    { name: "EcoCampus", founder: "Priya Singh", category: "Social", desc: "Tracking and reducing carbon footprints on campus." },
    { name: "MediSync", founder: "Karan Patel", category: "Health", desc: "Connecting students to medical resources quickly." },
    { name: "ByteLearn", founder: "Ananya Desai", category: "Tech", desc: "Peer-to-peer coding tutoring marketplace." },
    { name: "FoodShare", founder: "Sneha Nair", category: "Social", desc: "Redistributing excess mess food to those in need." },
    { name: "MindWell", founder: "Aditya Verma", category: "Health", desc: "Anonymous mental health support network." },
  ];

  const filteredStartups = filter === "All" ? startups : startups.filter(s => s.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30 dark:bg-[#050505] bg-[var(--bg)] transition-colors duration-500">
      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b] drop-shadow-2xl font-heading">
          Student <span className="text-gradient">Startups</span> at SRM
        </h1>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto mb-10 font-bold opacity-80 uppercase tracking-tight">
          Discover the innovative ventures founded by our talented student entrepreneurs.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {["All", "Tech", "Social", "Health"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 active:scale-95 ${
                filter === cat 
                  ? "bg-indigo-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] border border-indigo-400/50" 
                  : "glass-pill dark:text-[#A1A1AA] text-[#52525b] hover:dark:text-white hover:text-indigo-600 border dark:border-white/10 border-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.section>

      <motion.div 
        layout={!shouldReduceMotion}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredStartups.map((startup) => (
            <motion.div
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", damping: 20, stiffness: 150 }}
              key={startup.name}
              className="glass-card liquid-hover p-8 group relative overflow-hidden border dark:border-white/10 border-black/10 transition-all duration-500"
            >
              {/* Category Glow based on type */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700 pointer-events-none -z-10 ${
                startup.category === "Tech" ? "bg-indigo-500 shadow-[0_0_80px_indigo]" : 
                startup.category === "Social" ? "bg-emerald-500 shadow-[0_0_80px_emerald]" : "bg-rose-500 shadow-[0_0_80px_rose]"
              }`} />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-2xl font-black dark:text-white text-[#09090b] tracking-tight uppercase">{startup.name}</h3>
                <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full border shadow-sm ${
                  startup.category === "Tech" ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30" : 
                  startup.category === "Social" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30" : 
                  "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30"
                }`}>
                  {startup.category}
                </span>
              </div>
              
              <div className="text-sm font-bold dark:text-[#A1A1AA] text-[#52525b] mb-4 relative z-10 uppercase tracking-tighter">
                Founder: <span className="dark:text-indigo-300 text-indigo-600 font-black">{startup.founder}</span>
              </div>
              
              <p className="dark:text-[#A1A1AA] text-[#52525b] leading-relaxed text-sm font-bold opacity-80 relative z-10">
                {startup.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
