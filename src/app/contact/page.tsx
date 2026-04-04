"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, AtSign, Briefcase, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-indigo-500/30">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-4 flex items-center gap-3 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-500/10"
          >
            <CheckCircle2 className="text-emerald-400" />
            <span className="text-white font-medium">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto">
          Have a story tip, partnership proposal, or just want to say hi? We&apos;d love to hear from you.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <motion.a 
            href="mailto:contact@srminsider.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card liquid-hover p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-sm text-[#A1A1AA] mb-1">Email Us</div>
              <div className="text-white font-medium group-hover:text-indigo-300 transition-colors">contact@srminsider.com</div>
            </div>
          </motion.a>

          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card liquid-hover p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
              <AtSign size={20} />
            </div>
            <div>
              <div className="text-sm text-[#A1A1AA] mb-1">Follow Us</div>
              <div className="text-white font-medium group-hover:text-pink-300 transition-colors">@srminsider</div>
            </div>
          </motion.a>

          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card liquid-hover p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
              <Briefcase size={20} />
            </div>
            <div>
              <div className="text-sm text-[#A1A1AA] mb-1">Connect</div>
              <div className="text-white font-medium group-hover:text-blue-300 transition-colors">SRM Insider Network</div>
            </div>
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass-card p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A1A1AA]">Your Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A1A1AA]">Email Address</label>
                <input 
                  required 
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#A1A1AA]">Message</label>
              <textarea 
                required 
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner resize-none" 
                placeholder="How can we help you?" 
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
        
      </div>
    </main>
  );
}
