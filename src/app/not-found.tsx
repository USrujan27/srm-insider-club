"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SearchX, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center relative overflow-hidden bg-[#050505]">
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="z-10 relative flex flex-col items-center"
      >
        <div className="relative mb-8 flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none -z-10" />
          <motion.div
            animate={{ 
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <h1 className="text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none text-[#A1A1AA]/20 bg-clip-text">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-3xl glass flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] border border-white/10 md:w-32 md:h-32 bg-[#050505]/40 backdrop-blur-xl">
              <SearchX className="w-12 h-12 md:w-16 md:h-16 text-indigo-400" />
            </div>
          </motion.div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Page not found
        </h2>
        
        <p className="text-[#A1A1AA] text-lg md:text-xl mb-12 max-w-lg leading-relaxed mix-blend-plus-lighter">
          The campus insight you're looking for seems to have vanished. Let's get you back on track.
        </p>

        <Link href="/">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-indigo-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <Button size="lg" className="relative h-14 px-10 text-base rounded-full group bg-indigo-500 hover:bg-indigo-400 text-white border border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all active:scale-95">
              Return to Home <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
