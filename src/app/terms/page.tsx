"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileCode, CheckCircle, AlertTriangle, Users } from "lucide-react";

export default function TermsPage() {
  const shouldReduceMotion = useReducedMotion();

  const sections = [
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Community Guidelines",
      content:
        "SRM Insider is built for SRM students, faculty, and alumni. All users agree to interact respectfully, share accurate campus insights, and avoid harassment or offensive material.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />,
      title: "Intellectual Property",
      content:
        "Content submitted by writers and contributors remains credited to their respective authors. Platform design, assets, and branding are the property of SRM Insider.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-indigo-500" />,
      title: "Disclaimer of Liability",
      content:
        "While we strive to verify placement scoops and campus guides, articles reflect student experiences and opinions. Readers should independently verify official university notices.",
    },
    {
      icon: <FileCode className="w-6 h-6 text-indigo-500" />,
      title: "Terms Updates",
      content:
        "We may update these terms periodically to reflect platform changes. Continued use of SRM Insider represents agreement to any revised terms.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-24 px-4 md:px-8 max-w-5xl mx-auto selection:bg-indigo-500/30">
      <motion.section
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6 border dark:border-indigo-500/20 border-indigo-500/10 dark:bg-indigo-500/10 bg-indigo-500/5">
          <FileCode className="w-4 h-4 text-indigo-500" />
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-widest">
            Platform Agreement
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b]">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-base md:text-lg dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto font-medium">
          Please review the terms and community rules that govern your use of SRM Insider.
        </p>
      </motion.section>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-8 md:p-10 rounded-[2rem] border dark:border-white/10 border-black/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-[#09090b]">
                {section.title}
              </h2>
            </div>
            <p className="dark:text-[#A1A1AA] text-[#52525b] leading-relaxed text-base">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
