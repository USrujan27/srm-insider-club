"use client";

import { motion } from "framer-motion";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function FilterBar({ categories, activeCategory, onSelect }: FilterBarProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-4 custom-scrollbar w-full max-w-2xl mx-auto px-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap glass-pill border border-white/5 ${
            activeCategory === category
              ? "text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
              : "text-[#A1A1AA] hover:text-white hover:border-white/10 hover:bg-white/5"
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-indigo-500 rounded-full z-[-1]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 tracking-wide">{category}</span>
        </button>
      ))}
    </div>
  );
}
