"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
        <Search className="h-6 w-6 text-[#A1A1AA] group-focus-within:text-indigo-400 transition-colors duration-500" />
      </div>
      <div className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-focus-within:via-indigo-500 transition-all duration-700 blur-[2px]" />
      <Input
        type="text"
        placeholder="Search by title or tags..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-14 pr-12 py-7 h-16 bg-[#050505]/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-white/10 hover:bg-[#050505]/60 focus:border-indigo-500 focus:bg-[#050505]/80 focus:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 text-lg text-white font-medium outline-none placeholder:text-[#A1A1AA]/50 relative z-0"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 pr-5 flex items-center"
        >
          <div className="bg-white/5 hover:bg-white/10 p-1.5 rounded-full transition-colors">
            <X className="h-5 w-5 text-[#A1A1AA] hover:text-white transition-colors" />
          </div>
        </button>
      )}
    </div>
  );
}
