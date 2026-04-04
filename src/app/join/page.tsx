"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Zap, Target, Users } from "lucide-react";

export default function JoinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Writer");

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
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30">
      
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-4 flex items-center gap-3 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-500/10"
          >
            <CheckCircle2 className="text-emerald-400" />
            <span className="text-white font-medium">Application submitted! We&apos;ll be in touch soon.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-6 border-indigo-500/30 bg-indigo-500/10">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs font-bold text-indigo-200 tracking-wider uppercase">We&apos;re Recruiting</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
          Join <span className="text-gradient">SRM Insider</span>
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10">
          Be part of the team shaping the digital heartbeat of the campus. Work on products and stories that matter.
        </p>
      </motion.section>

      {/* Benefits */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card liquid-hover p-8 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-indigo-400 mb-6 border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{benefit.title}</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

      {/* Open Roles */}
      <section className="mb-24">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-10 text-center tracking-tighter"
        >
          Open Roles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`glass-card liquid-hover p-8 cursor-pointer transition-all duration-300 border-2 ${
                selectedRole === role.id ? "border-indigo-500 bg-indigo-500/5 shadow-[0_0_30px_rgba(99,102,241,0.15)]" : "border-transparent"
              }`}
              onClick={() => {
                setSelectedRole(role.id);
                document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
              <p className="text-[#A1A1AA] text-sm mb-6 min-h-[40px]">{role.desc}</p>
              
              <div className="mb-6">
                <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Requirements</div>
                <ul className="space-y-2">
                  {role.reqs.map((req, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="inline-flex items-center gap-1 text-indigo-400 font-bold group">
                Apply Now <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <motion.section 
        id="application-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Apply for <span className="text-indigo-400">{selectedRole}</span></h2>
        <p className="text-[#A1A1AA] mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#A1A1AA]">Full Name</label>
            <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#A1A1AA]">Email</label>
              <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#A1A1AA]">Portfolio / Links</label>
              <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" placeholder="GitHub, Behance, etc." />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#A1A1AA]">Why do you want to join us?</label>
            <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner resize-none" />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center mt-4"
          >
            {isSubmitting ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Submit Application"}
          </button>
        </form>
      </motion.section>

    </main>
  );
}
