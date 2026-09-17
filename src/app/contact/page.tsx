"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Mail, AtSign, Briefcase, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30 dark:bg-[#050505] bg-[var(--bg)] transition-colors duration-500">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-4 flex items-center gap-3 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-500/10 backdrop-blur-xl"
          >
            <CheckCircle2 className="text-emerald-500" />
            <span className="dark:text-white text-emerald-900 font-bold uppercase tracking-widest text-xs">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b] drop-shadow-2xl font-heading uppercase">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-lg md:text-xl dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto font-bold uppercase tracking-tight opacity-80">
          Have a story tip, partnership proposal, or just want to say hi? We&apos;d love to hear from you.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {[
            { href: "mailto:contact@srminsider.com", icon: <Mail size={20} />, label: "Email Us", value: "contact@srminsider.com", color: "indigo" },
            { href: "#", icon: <AtSign size={20} />, label: "Follow Us", value: "@srminsider", color: "pink" },
            { href: "#", icon: <Briefcase size={20} />, label: "Connect", value: "SRM Insider Network", color: "blue" }
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={item.href}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card liquid-hover p-8 flex items-center gap-5 group border dark:border-white/10 border-black/10 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                item.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white dark:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] shadow-[0_0_15px_rgba(99,102,241,0.2)]' :
                item.color === 'pink' ? 'bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white dark:group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] shadow-[0_0_15px_rgba(236,72,153,0.2)]' :
                'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white dark:group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] shadow-[0_0_15px_rgba(59,130,246,0.2)]'
              }`}>
                {item.icon}
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] dark:text-[#A1A1AA] text-[#52525b] mb-1 opacity-70">{item.label}</div>
                <div className="dark:text-white text-[#09090b] font-black group-hover:dark:text-white group-hover:text-indigo-600 transition-colors uppercase tracking-tight text-sm md:text-base">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass-card p-8 md:p-12 relative overflow-hidden border dark:border-white/10 border-black/10 transition-all duration-500 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none dark:block hidden" />
          
          <h2 className="text-3xl font-black dark:text-white text-[#09090b] mb-10 tracking-tighter uppercase font-heading">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] ml-4">Your Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl px-6 py-4 dark:text-white text-[#09090b] placeholder:dark:text-[#A1A1AA]/30 placeholder:text-[#52525b]/30 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner font-bold" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] ml-4">Email Address</label>
                <input 
                  required 
                  type="email" 
                  className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl px-6 py-4 dark:text-white text-[#09090b] placeholder:dark:text-[#A1A1AA]/30 placeholder:text-[#52525b]/30 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner font-bold" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest dark:text-[#A1A1AA] text-[#52525b] ml-4">Message</label>
              <textarea 
                required 
                rows={6}
                className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl px-6 py-4 dark:text-white text-[#09090b] placeholder:dark:text-[#A1A1AA]/30 placeholder:text-[#52525b]/30 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner resize-none font-bold" 
                placeholder="How can we help you?" 
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden rounded-2xl p-px transition-all duration-300 active:scale-95 disabled:opacity-70"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 animate-gradient-x" />
              <div className="relative flex items-center justify-center gap-3 bg-[#050505] dark:bg-[#050505] group-hover:bg-transparent transition-colors py-5 px-8 rounded-2xl">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="text-white text-base font-black uppercase tracking-widest">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="text-white text-base font-black uppercase tracking-widest">Initiate Transmission</span>
                    <Send size={20} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </form>
        </motion.div>
        
      </div>
    </div>
  );
}
