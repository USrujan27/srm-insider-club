"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function EventsPage() {
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
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
          What&apos;s <span className="text-gradient">Happening</span> at SRM
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto">
          Don&apos;t miss out on the biggest tech, cultural, and community events on campus.
        </p>
      </motion.section>

      {/* Upcoming Events */}
      <section className="mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-3 h-8 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Upcoming Events</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card liquid-hover p-6 md:p-8 group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[50px] group-hover:bg-indigo-500/20 transition-colors duration-500 pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-snug relative z-10">{event.title}</h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 text-sm text-[#A1A1AA] relative z-10">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-indigo-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-indigo-400" />
                  <span>{event.venue}</span>
                </div>
              </div>
              
              <p className="text-[#A1A1AA] leading-relaxed text-sm flex-grow relative z-10">
                {event.desc}
              </p>

              <button className="mt-8 w-full md:w-auto py-2 px-6 bg-white/5 border border-white/10 rounded-full text-white text-sm font-semibold hover:bg-indigo-500 hover:border-indigo-400 transition-all shadow-inner hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] relative z-10">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-3 h-8 bg-white/20 rounded-full" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Past Events</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass p-5 rounded-xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity"
            >
              <h4 className="text-lg font-semibold text-white mb-3">{event.title}</h4>
              <div className="text-xs text-[#A1A1AA] space-y-1">
                <div>{event.date}</div>
                <div>{event.venue}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
