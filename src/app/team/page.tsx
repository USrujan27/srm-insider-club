"use client";

import { motion } from "framer-motion";
import { GitBranch, Briefcase } from "lucide-react";

export default function TeamPage() {
  const team = [
    { name: "Rahul Sharma", role: "Founder", bio: "Visionary leader driving the SRM Insider ecosystem.", initials: "RS" },
    { name: "Ananya Desai", role: "Lead Developer", bio: "Architecting the technical infrastructure and UI.", initials: "AD" },
    { name: "Karan Patel", role: "Content Head", bio: "Curating stories and managing the editorial board.", initials: "KP" },
    { name: "Priya Singh", role: "Design Lead", bio: "Crafting the liquid glass aesthetic and brand identity.", initials: "PS" },
    { name: "Aditya Verma", role: "Campus Correspondent", bio: "Bringing real-time updates from across the campus.", initials: "AV" },
    { name: "Sneha Nair", role: "Marketing Head", bio: "Expanding our reach and growing the student audience.", initials: "SN" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
          Meet the <span className="text-gradient">Team</span>
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto">
          The brilliant minds working behind the scenes to keep the campus informed and connected.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card liquid-hover p-8 group relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-indigo-500/30 rounded-xl transition-colors duration-500" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-full glass border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-xl font-bold text-white tracking-wider group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors duration-300">
                {member.initials}
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-indigo-500/20 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all shadow-inner">
                  <GitBranch size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-indigo-500/20 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all shadow-inner">
                  <Briefcase size={16} />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-4">{member.role}</div>
            <p className="text-[#A1A1AA] leading-relaxed text-sm">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
