"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronRight, Zap, Target, Users } from "lucide-react";

export default function JoinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Writer");
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const benefits = [
    { icon: <Zap size={24} />, title: "Real Impact", desc: "Your work reaches thousands of students directly affecting campus culture." },
    { icon: <Target size={24} />, title: "Skill Growth", desc: "Gain hands-on experience in cutting-edge tech, design, and journalism." },
    { icon: <Users size={24} />, title: "Network", desc: "Build connections with top students, alumni, and campus leaders." },
  ];

  const roles = [
    { id: "Writer", title: "Content Writer", desc: "Report on campus events, cover stories, and interview key figures.", reqs: ["Strong writing skills", "Nose for news", "Can meet deadlines"] },
    { id: "Developer", title: "Frontend Developer", desc: "Build and maintain the core platform using Next.js and Tailwind.", reqs: ["React/Next.js experience", "Eye for design", "Problem-solver"] },
    { id: "Designer", title: "UI/UX Designer", desc: "Craft the visual language and user experience of our products.", reqs: ["Figma proficiency", "Understands layout", "Creative mindset"] },
    { id: "Campus Rep", title: "Campus Rep", desc: "Be our voice on the ground, spreading awareness and gathering feedback.", reqs: ["Highly social", "Event org skills", "Passionate about tech"] },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30 dark:bg-[#050505] bg-[var(--bg)] transition-colors duration-500">
      
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-4 flex items-center gap-3 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-500/10 backdrop-blur-xl"
          >
            <CheckCircle2 className="text-emerald-500" />
            <span className="dark:text-white text-emerald-900 font-black uppercase tracking-widest text-xs">Application submitted! We&apos;ll be in touch soon.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6 border dark:border-indigo-500/20 border-indigo-500/10 dark:bg-indigo-500/10 bg-indigo-500/5">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-black dark:text-indigo-300 text-indigo-600 tracking-widest uppercase">We&apos;re Recruiting</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b] drop-shadow-2xl font-heading uppercase">
          Join <span className="text-gradient">SRM Insider</span>
        </h1>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto mb-10 font-bold uppercase tracking-tight opacity-80 leading-relaxed">
          Be part of the team shaping the digital heartbeat of the campus. Work on products and stories that matter.
        </p>
      </motion.section>

      {/* Benefits */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card liquid-hover p-10 text-center flex flex-col items-center border dark:border-white/10 border-black/10 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 border dark:border-white/10 border-black/10 shadow-lg">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-black dark:text-white text-[#09090b] mb-4 tracking-tight uppercase">{benefit.title}</h3>
            <p className="dark:text-[#A1A1AA] text-[#52525b] text-sm leading-relaxed font-medium opacity-80">{benefit.desc}</p>
          </motion.div>
        ))}
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-24" />

      {/* Open Roles */}
      <section className="mb-24">
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black dark:text-white text-[#09090b] mb-4 tracking-tighter uppercase font-heading">
            Open Roles
          </h2>
          <p className="dark:text-[#A1A1AA] text-[#52525b] font-bold uppercase tracking-widest text-xs opacity-60">Pick your specialization and apply</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`glass-card liquid-hover p-8 md:p-10 cursor-pointer border-2 transition-all duration-500 flex flex-col h-full ${
                selectedRole === role.id 
                  ? "border-indigo-500 bg-indigo-500/5 dark:shadow-[0_0_40px_rgba(99,102,241,0.2)] shadow-[0_0_20px_rgba(99,102,241,0.1)]" 
                  : "dark:border-white/10 border-black/10"
              }`}
              onClick={() => {
                setSelectedRole(role.id);
                document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <h3 className="text-3xl font-black dark:text-white text-[#09090b] mb-3 tracking-tight uppercase font-heading">{role.title}</h3>
              <p className="dark:text-[#A1A1AA] text-[#52525b] text-sm mb-8 font-medium opacity-80 min-h-[48px]">{role.desc}</p>
              
              <div className="mb-8 flex-grow">
                <div className="text-[10px] font-black dark:text-indigo-300 text-indigo-600 uppercase tracking-widest mb-4">Requirements</div>
                <ul className="space-y-3">
                  {role.reqs.map((req, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs font-bold dark:text-[#A1A1AA] text-[#52525b] uppercase tracking-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${
                selectedRole === role.id ? 'text-indigo-500' : 'dark:text-indigo-300 text-indigo-600 opacity-60 group-hover:opacity-100'
              }`}>
                Apply for this role <ChevronRight size={16} className={`${selectedRole === role.id && 'translate-x-1'} transition-transform`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <motion.section 
        id="application-form"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto glass-card p-10 md:p-16 relative overflow-hidden border dark:border-white/10 border-black/10 shadow-2xl transition-all duration-500"
      >
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
        <h2 className="text-3xl font-black dark:text-white text-[#09090b] mb-2 tracking-tighter uppercase font-heading">Apply for <span className="text-gradient">{selectedRole}</span></h2>
        <p className="dark:text-[#A1A1AA] text-[#52525b] mb-10 font-bold uppercase tracking-widest text-[10px] opacity-60">Fill out the form and we&apos;ll be in touch</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] ml-4">Full Name</label>
            <input required type="text" className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl px-6 py-4 dark:text-white text-[#09090b] focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold placeholder:opacity-30 shadow-inner" placeholder="Enter your full name" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] ml-4">Email</label>
              <input required type="email" className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl px-6 py-4 dark:text-white text-[#09090b] focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold placeholder:opacity-30 shadow-inner" placeholder="srm@edu.in" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] ml-4">Portfolio Link</label>
              <input type="text" className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl px-6 py-4 dark:text-white text-[#09090b] focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold placeholder:opacity-30 shadow-inner" placeholder="GitHub, Behance, etc." />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] ml-4">Motivation</label>
            <textarea required rows={4} className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl px-6 py-4 dark:text-white text-[#09090b] focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold placeholder:opacity-30 shadow-inner resize-none" placeholder="Tell us why you want to join..." />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full relative group overflow-hidden py-5 rounded-2xl transition-all duration-300 disabled:opacity-70"
          >
            <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative z-10 flex items-center justify-center gap-3">
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <span className="text-sm font-black uppercase tracking-[0.2em] dark:text-white text-indigo-600 group-hover:text-white transition-colors">Submit Application</span>
              )}
            </div>
            <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-2xl group-hover:border-transparent transition-colors" />
          </button>
        </form>
      </motion.section>

    </div>
  );
}
