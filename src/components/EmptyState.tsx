"use client";

import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

export function EmptyState({ message = "No posts found" }: { message?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center p-12 text-center rounded-3xl border border-dashed border-border/50 bg-background/30 backdrop-blur w-full max-w-2xl mx-auto"
    >
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <SearchX className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-bold tracking-tight mb-2">It's quiet here</h3>
      <p className="text-muted-foreground text-sm max-w-sm">
        {message}. Try adjusting your search query or removing some filters to see what's trending.
      </p>
    </motion.div>
  );
}
