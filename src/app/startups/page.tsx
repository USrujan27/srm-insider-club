"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StartupsPage() {
  const [filter, setFilter] = useState("All");
  
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
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
          Student <span className="text-gradient">Startups</span> at SRM
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10">
          Discover the innovative ventures founded by our talented student entrepreneurs.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["All", "Tech", "Social", "Health"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] border border-indigo-400" 
                  : "glass-pill text-[#A1A1AA] hover:text-white hover:border-indigo-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.section>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredStartups.map((startup, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring" }}
              key={startup.name}
              className="glass-card liquid-hover p-8 group relative overflow-hidden"
            >
              {/* Category Glow based on type */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${
                startup.category === "Tech" ? "bg-indigo-500" : 
                startup.category === "Social" ? "bg-emerald-500" : "bg-rose-500"
              }`} />
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-tight">{startup.name}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  startup.category === "Tech" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : 
                  startup.category === "Social" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : 
                  "bg-rose-500/10 text-rose-400 border-rose-500/20"
                }`}>
                  {startup.category}
                </span>
              </div>
              
              <div className="text-sm font-medium text-[#A1A1AA] mb-4 relative z-10">
                Founder: <span className="text-white">{startup.founder}</span>
              </div>
              
              <p className="text-[#A1A1AA] leading-relaxed text-sm relative z-10">
                {startup.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
