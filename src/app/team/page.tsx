"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, Briefcase } from "lucide-react";

export default function TeamPage() {
  const shouldReduceMotion = useReducedMotion();
  
  const team = [
    { name: "Rahul Sharma", role: "Founder", bio: "Visionary leader driving the SRM Insider ecosystem.", initials: "RS" },
    { name: "Ananya Desai", role: "Lead Developer", bio: "Architecting the technical infrastructure and UI.", initials: "AD" },
    { name: "Karan Patel", role: "Content Head", bio: "Curating stories and managing the editorial board.", initials: "KP" },
    { name: "Priya Singh", role: "Design Lead", bio: "Crafting the liquid glass aesthetic and brand identity.", initials: "PS" },
    { name: "Aditya Verma", role: "Campus Correspondent", bio: "Bringing real-time updates from across the campus.", initials: "AV" },
    { name: "Sneha Nair", role: "Marketing Head", bio: "Expanding our reach and growing the student audience.", initials: "SN" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30 dark:bg-[#050505] bg-[var(--bg)] transition-colors duration-500">
      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b] drop-shadow-2xl">
          Meet the <span className="text-gradient">Team</span>
        </h1>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto font-medium">
          The brilliant minds working behind the scenes to keep the campus informed and connected.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card liquid-hover p-8 group relative overflow-hidden border dark:border-white/10 border-black/10 transition-all duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-indigo-500/30 rounded-xl transition-colors duration-500" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-full glass border dark:border-white/10 border-black/10 shadow-lg flex items-center justify-center text-xl font-black dark:text-white text-[#09090b] tracking-wider group-hover:bg-indigo-500/20 group-hover:dark:text-indigo-300 group-hover:text-indigo-600 transition-all duration-300">
                {member.initials}
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full dark:bg-white/5 bg-black/5 hover:bg-indigo-500/20 flex items-center justify-center dark:text-[#A1A1AA] text-[#52525b] dark:hover:text-white hover:text-indigo-600 transition-all border dark:border-white/5 border-black/5 shadow-inner">
                  <GitBranch size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full dark:bg-white/5 bg-black/5 hover:bg-indigo-500/20 flex items-center justify-center dark:text-[#A1A1AA] text-[#52525b] dark:hover:text-white hover:text-indigo-600 transition-all border dark:border-white/5 border-black/5 shadow-inner">
                  <Briefcase size={16} />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-black dark:text-white text-[#09090b] mb-1 tracking-tight uppercase">{member.name}</h3>
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">{member.role}</div>
            <p className="dark:text-[#A1A1AA] text-[#52525b] leading-relaxed text-sm font-medium opacity-80">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
