"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();
  
  const upcomingEvents = [
    { title: "Milan Tech Symposium", date: "Oct 15, 2026", venue: "Mini Auditorium", desc: "Annual technical symposium featuring guest lectures and hackathons." },
    { title: "SRM Hackathon 4.0", date: "Nov 02, 2026", venue: "Tech Park", desc: "48-hour intense coding competition designed to solve real-world problems." },
    { title: "Design Workshop", date: "Nov 18, 2026", venue: "Architecture Block", desc: "Hands-on UI/UX workshop focusing on modern web aesthetics." },
    { title: "Startup Pitch Day", date: "Dec 05, 2026", venue: "TP Ganesan Aud.", desc: "Pitch your ideas to top angel investors and venture capitalists." },
    { title: "AI/ML Summit", date: "Jan 12, 2027", venue: "Main Campus", desc: "Explore the latest trends in artificial intelligence." },
    { title: "Cultural Fest - Aarush", date: "Feb 20, 2027", venue: "SRM Grounds", desc: "The biggest cultural and technical festival of the year." },
  ];

  const pastEvents = [
    { title: "Freshers Welcome 2026", date: "Aug 10, 2026", venue: "Main Aud." },
    { title: "Web Dev Bootcamp", date: "Sep 01, 2026", venue: "Online" },
    { title: "Alumni Meet", date: "Sep 15, 2026", venue: "Tech Park" },
    { title: "Code Relay", date: "Sep 28, 2026", venue: "UB Lab" },
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
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b] drop-shadow-2xl font-heading uppercase">
          What&apos;s <span className="text-gradient">Happening</span> at SRM
        </h1>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto font-bold uppercase tracking-tight opacity-80">
          Don&apos;t miss out on the biggest tech, cultural, and community events on campus.
        </p>
      </motion.section>

      {/* Upcoming Events */}
      <section className="mb-24">
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-2.5 h-8 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
          <h2 className="text-3xl font-black dark:text-white text-[#09090b] tracking-tighter uppercase tracking-widest">Upcoming</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card liquid-hover p-6 md:p-10 group relative overflow-hidden flex flex-col h-full border dark:border-white/10 border-black/10 shadow-xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[60px] group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none dark:block hidden" />
              
              <h3 className="text-3xl font-black dark:text-white text-[#09090b] mb-6 tracking-tight relative z-10 font-heading uppercase">{event.title}</h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8 text-xs font-bold uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] relative z-10">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="dark:text-white text-[#09090b]">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="dark:text-white text-[#09090b]">{event.venue}</span>
                </div>
              </div>
              
              <p className="dark:text-[#A1A1AA] text-[#52525b] leading-relaxed text-sm flex-grow relative z-10 font-medium opacity-80">
                {event.desc}
              </p>

              <button className="mt-10 group/btn relative w-full md:w-fit py-3 px-8 rounded-full overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-indigo-500 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-xs font-black uppercase tracking-widest dark:text-white text-[#09090b] group-hover/btn:text-white transition-colors flex items-center justify-center border dark:border-white/10 border-black/10 py-3 px-8 rounded-full">
                  Explore Event
                </span>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-indigo-500/50" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-2.5 h-8 dark:bg-white/10 bg-black/10 rounded-full" />
          <h2 className="text-3xl font-black dark:text-white text-[#09090b] tracking-tighter uppercase tracking-widest opacity-60">Archive</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass p-6 rounded-2xl border dark:border-white/5 border-black/5 opacity-60 hover:opacity-100 hover:dark:border-white/20 hover:border-black/20 transition-all group cursor-default"
            >
              <h4 className="text-lg font-black dark:text-white text-[#09090b] mb-4 tracking-tight uppercase group-hover:dark:text-indigo-300 group-hover:text-indigo-600 transition-colors">{event.title}</h4>
              <div className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] space-y-1.5 opacity-70">
                <div className="flex items-center gap-2"><Calendar size={12} /> {event.date}</div>
                <div className="flex items-center gap-2"><MapPin size={12} /> {event.venue}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
