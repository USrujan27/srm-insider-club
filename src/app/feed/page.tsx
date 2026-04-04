"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { PostCard } from "@/components/PostCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { SkeletonCard } from "@/components/SkeletonCard";
import { EmptyState } from "@/components/EmptyState";
import { mockPosts, Category } from "@/data/posts";

const CATEGORIES = ["All", "Placements", "Internships", "Campus Life"];

export default function FeedPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [recommendedCategory, setRecommendedCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const lastViewed = localStorage.getItem("lastViewedCategory");
      if (lastViewed && CATEGORIES.includes(lastViewed)) {
        setRecommendedCategory(lastViewed);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      const matchCategory = activeCategory === "All" || post.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        post.title.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const trendingPosts = useMemo(() => {
    return [...mockPosts].sort((a, b) => b.likes - a.likes).slice(0, 3);
  }, []);

  const recommendedPosts = useMemo(() => {
    if (recommendedCategory) {
      return mockPosts.filter((p) => p.category === recommendedCategory).slice(0, 3);
    }
    return [...mockPosts].sort((a, b) => b.likes - a.likes).slice(3, 6);
  }, [recommendedCategory]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl min-h-screen">
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="mb-14 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-pill text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-6 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
          Dashboard
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">
          What's happening at SRM
        </h1>
        <p className="text-[#A1A1AA] text-lg max-w-2xl leading-relaxed">
          Discover stories, insights, and hidden campus secrets curated for you.
        </p>
      </motion.div>

      {/* Controls */}
      <div className="sticky top-20 z-40 bg-[#050505]/80 backdrop-blur-xl pt-4 pb-6 border-b border-white/5 mb-12 -mx-4 px-4 md:mx-0 md:px-0">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="mt-8">
          <FilterBar
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>
      </div>

      {!mounted ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="space-y-20">
          
          {/* Trending & Recommended (Hide if searching/filtering hard) */}
          {!searchQuery && activeCategory === "All" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Trending Section */}
              <section>
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-1.5 h-6 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                  <h2 className="text-2xl font-bold tracking-tight text-white uppercase tracking-widest text-sm">Trending</h2>
                </motion.div>
                <div className="space-y-6">
                  {trendingPosts.map((post, i) => (
                    <div key={post.id} className="h-48 group relative">
                      <div className="absolute -inset-2 bg-orange-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                      <PostCard post={post} index={i} compact={true} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommended Section */}
              <section>
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-1.5 h-6 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                  <h2 className="text-2xl font-bold tracking-tight text-white uppercase tracking-widest text-sm">Recommended for You</h2>
                </motion.div>
                <div className="space-y-6">
                  {recommendedPosts.map((post, i) => (
                    <div key={post.id} className="h-48 group relative">
                      <div className="absolute -inset-2 bg-indigo-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                      <PostCard post={post} index={i} compact={true} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* All Posts Grid */}
          <section>
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                <h2 className="text-2xl font-bold tracking-tight text-white uppercase tracking-widest text-sm">
                  {searchQuery ? "Search Results" : "All Stories"}
                </h2>
              </div>
              <span className="text-[#A1A1AA] text-sm glass-pill px-4 py-1.5 border border-white/10 font-medium">
                {filteredPosts.length} posts
              </span>
            </motion.div>

            {filteredPosts.length === 0 ? (
              <EmptyState message={searchQuery ? `We couldn't find matches for "${searchQuery}"` : "No posts found"} />
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, i) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.5, ease: "easeOut" as const }}
                      key={post.id}
                      className="h-[400px] group relative"
                    >
                      <PostCard post={post} index={i} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
