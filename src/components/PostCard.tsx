"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Heart } from "lucide-react";
import { Post } from "@/data/posts";

interface PostCardProps {
  post: Post;
  index?: number;
  compact?: boolean;
}

const categoryBadgeStyle: Record<string, string> = {
  Placements: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)] dark:shadow-[0_0_15px_rgba(234,179,8,0.4)]",
  Internships: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)] dark:shadow-[0_0_15px_rgba(99,102,241,0.4)]",
  "Campus Life": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)] dark:shadow-[0_0_15px_rgba(249,115,22,0.4)]",
};

const categoryHoverGlow: Record<string, string> = {
  Placements: "hover:shadow-[0_15px_50px_rgba(234,179,8,0.1)] dark:hover:shadow-[0_15px_50px_rgba(234,179,8,0.2)] hover:border-yellow-500/40",
  Internships: "hover:shadow-[0_15px_50px_rgba(99,102,241,0.1)] dark:hover:shadow-[0_15px_50px_rgba(99,102,241,0.2)] hover:border-indigo-500/40",
  "Campus Life": "hover:shadow-[0_15px_50px_rgba(249,115,22,0.1)] dark:hover:shadow-[0_15px_50px_rgba(249,115,22,0.2)] hover:border-orange-500/40",
};

export function PostCard({ post, index = 0, compact = false }: PostCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" as const }}
      className={`h-full group relative z-10 w-full ${compact ? "h-48" : ""}`}
    >
      <Link href={`/post/${post.id}`} className="block h-full cursor-pointer">
        <div className={`h-full glass-card liquid-hover rounded-[2rem] p-6 flex flex-col gap-4 overflow-hidden relative transition-all duration-500 z-10 border dark:border-white/8 border-black/8 ${categoryHoverGlow[post.category] || ""}`}>
          
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

          {/* Header */}
          <div className="flex justify-between items-start z-10">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase border ${categoryBadgeStyle[post.category] || "dark:bg-white/5 bg-black/5 dark:text-[#A1A1AA] text-[#52525b] border-white/10"}`}>
              {post.category}
            </span>
            <div className="flex items-center dark:text-[#A1A1AA] text-[#52525b] text-sm gap-1.5 dark:group-hover:text-white group-hover:text-[#09090b] transition-colors duration-300">
              <Heart className="w-4 h-4" />
              <span className="font-medium">{post.likes}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 z-10 flex flex-col pt-2">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 dark:text-white text-[#09090b] group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300 line-clamp-2 leading-snug">
              {post.title}
            </h3>
            
            {!compact && (
              <>
                <p className="dark:text-[#A1A1AA] text-[#52525b] text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 flex-1 opacity-90 dark:opacity-80">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs font-medium dark:text-[#A1A1AA] text-[#52525b] dark:bg-white/5 bg-black/5 px-3 py-1.5 rounded-lg border dark:border-white/5 border-black/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className={`relative z-10 ${!compact && "pt-4 border-t dark:border-white/5 border-black/5"} flex items-center justify-between`}>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg ${post.author.color === 'bg-blue-500' ? 'bg-indigo-600' : post.author.color}`}>
                {post.author.avatarInitials}
              </div>
              <div className="flex flex-col">
                 <span className="text-sm font-bold dark:text-white text-[#09090b] leading-tight">{post.author.name}</span>
                 <span className="text-xs dark:text-[#A1A1AA] text-[#52525b] font-mono tracking-tight">{post.date}</span>
              </div>
            </div>
            
            <div className="flex items-center text-xs font-mono dark:text-[#A1A1AA] text-[#52525b] gap-1.5 dark:bg-white/5 bg-black/5 px-3 py-1.5 rounded-lg border dark:border-white/5 border-black/5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Hover Snippet Slide Up */}
          {!compact && !shouldReduceMotion && (
             <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t dark:from-[#050505] dark:via-[#050505]/95 from-[#f4f4f5] via-[#f4f4f5]/98 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20 flex flex-col justify-end">
                <p className="text-sm dark:text-[#A1A1AA] text-[#52525b] line-clamp-3 italic border-l-2 border-indigo-500 pl-4 leading-relaxed dark:bg-[#050505]/40 bg-white/40 p-2 rounded-r-lg">
                  &quot;{post.content.slice(0, 120)}...&quot;
                </p>
                <div className="mt-5 text-indigo-600 dark:text-indigo-400 text-sm font-bold flex flex-row items-center gap-2 group/readBtn relative overflow-hidden py-2 inline-flex w-max">
                  <span className="relative z-10">Read Full Story</span>
                  <span className="relative z-10 group-hover/readBtn:translate-x-1 transition-transform">→</span>
                </div>
             </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
