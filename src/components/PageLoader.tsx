"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("srm_insider_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("srm_insider_loaded", "true");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
               <Sparkles className="w-8 h-8 flex-shrink-0" />
            </div>
            <motion.div 
               animate={{ width: ["0%", "100%"] }} 
               transition={{ duration: 1.5, ease: "easeInOut" }} 
               className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-48 overflow-hidden" 
             />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
