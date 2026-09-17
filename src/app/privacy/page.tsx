"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  const shouldReduceMotion = useReducedMotion();

  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-indigo-500" />,
      title: "Information We Collect",
      content:
        "SRM Insider collects minimal information required to deliver high-quality campus content. This includes account credentials (name and email for registered users) and voluntary submissions such as contact messages or club recruitment applications.",
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-500" />,
      title: "How We Use Your Data",
      content:
        "Your data is used strictly for platform authentication, delivering personalized article recommendations, and processing editorial applications. We never sell, rent, or trade your personal data to third parties.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      title: "Security & Retention",
      content:
        "We implement industry-standard encryption and security measures to protect your information. Your reading history preferences are stored securely in local browser storage.",
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-500" />,
      title: "Your Rights & Contact",
      content:
        "You can request account deletion or review your submitted information at any time by contacting us through our Contact page or emailing privacy@srminsider.com.",
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
          <ShieldCheck className="w-4 h-4 text-indigo-500" />
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-widest">
            Transparency First
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 dark:text-white text-[#09090b]">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-base md:text-lg dark:text-[#A1A1AA] text-[#52525b] max-w-2xl mx-auto font-medium">
          We value your privacy and are committed to safeguarding your personal information on SRM Insider.
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
