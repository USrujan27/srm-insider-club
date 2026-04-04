"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full py-8 text-sm mt-auto glass-card rounded-none rounded-t-[2rem] border-x-0 border-b-0 border-t border-white/5 bg-[#050505]/80 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between"
    >
      <div className="container px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 group">
            <span className="font-bold text-lg tracking-tighter text-white">
              SRM Insider
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-pulse" />
          </div>
          <p className="text-[#A1A1AA] text-xs max-w-[200px] text-center md:text-left">
            Premium campus content platform for Placements, Internships, and Campus Life.
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-[#A1A1AA] text-xs text-center order-3 md:order-2">
          © {new Date().getFullYear()} SRM Insider. Crafted with logic & caffeine.
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          <Link href="/privacy" className="text-[#A1A1AA] hover:text-white transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[#A1A1AA] hover:text-white transition-colors duration-300">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-[#A1A1AA] hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
