"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Bookmark, Share2, ArrowLeft, Clock, CalendarDays } from "lucide-react";
import { toast } from "sonner";

import { mockPosts, Post } from "@/data/posts";
import { ProgressBar } from "@/components/ProgressBar";
import { PostCard } from "@/components/PostCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Button } from "@/components/ui/button";

export default function PostDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [post, setPost] = useState<Post | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundPost = mockPosts.find((p) => p.id === id);
      if (!foundPost) {
        router.push("/not-found");
        return;
      }
      setPost(foundPost);
      setMounted(true);
      
      localStorage.setItem("lastViewedCategory", foundPost.category);

      const bookmarks = JSON.parse(localStorage.getItem("srm_bookmarks") || "[]");
      setIsBookmarked(bookmarks.includes(foundPost.id));
    }, 600);

    return () => clearTimeout(timer);
  }, [id, router]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return mockPosts
      .filter((p) => p.category === post.category && p.id !== post.id)
      .slice(0, 3);
  }, [post]);

  const handleBookmark = () => {
    if (!post) return;
    const bookmarks = JSON.parse(localStorage.getItem("srm_bookmarks") || "[]");
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((b: string) => b !== post.id);
      localStorage.setItem("srm_bookmarks", JSON.stringify(newBookmarks));
      toast("Bookmark removed");
    } else {
      bookmarks.push(post.id);
      localStorage.setItem("srm_bookmarks", JSON.stringify(bookmarks));
      toast.success("Article bookmarked!", {
        description: "You can find it in your reading list later.",
      });
    }
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Link copied!", {
      description: "Share this story on WhatsApp or LinkedIn.",
    });
  };

  if (!mounted || !post) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-32 min-h-screen">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-[#050505] bg-[var(--bg)] transition-colors duration-500">
      <ProgressBar />
      
      <motion.article 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="container max-w-4xl mx-auto px-4 py-20 relative z-10"
      >
        <button 
          onClick={() => router.back()}
          className="flex items-center dark:text-[#A1A1AA] text-[#52525b] hover:dark:text-white hover:text-[#09090b] transition-colors text-sm mb-12 mt-4 group w-fit"
        >
          <div className="w-8 h-8 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center mr-3 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform dark:text-white text-[#09090b]" />
          </div>
          <span className="font-bold tracking-wide uppercase text-xs">Back to Feed</span>
        </button>

        {/* Hero Glass Panel */}
        <header className="mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none -z-10 dark:block hidden" />
          
          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border dark:border-white/10 border-black/10 dark:bg-[#050505]/60 bg-white/60 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-xl transition-all duration-500">
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
              <span className="px-4 py-1.5 rounded-full dark:text-indigo-300 text-indigo-600 font-bold tracking-wider uppercase text-xs border dark:border-indigo-500/30 border-indigo-500/20 dark:bg-indigo-500/10 bg-indigo-500/5 dark:shadow-[0_0_20px_rgba(99,102,241,0.15)] shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-2 dark:text-[#A1A1AA] text-[#52525b] font-bold text-xs uppercase tracking-tighter"><CalendarDays className="w-4 h-4 text-indigo-500" /> {post.date}</span>
              <span className="flex items-center gap-2 dark:text-[#A1A1AA] text-[#52525b] font-bold text-xs uppercase tracking-tighter"><Clock className="w-4 h-4 text-indigo-500" /> {post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight mb-12 dark:text-white text-[#09090b]">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t dark:border-white/10 border-black/10">
              <div className="flex items-center gap-4 group">
                <div className={`w-14 h-14 rounded-full flex flex-shrink-0 items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] border dark:border-white/10 border-white/5 active:scale-95 transition-transform ${post.author.color === 'bg-blue-500' ? 'bg-indigo-600' : post.author.color}`}>
                  {post.author.avatarInitials}
                </div>
                <div>
                  <p className="font-bold text-lg dark:text-white text-[#09090b] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{post.author.name}</p>
                  <p className="text-xs dark:text-[#A1A1AA] text-[#52525b] font-bold tracking-widest uppercase opacity-70">SRM University Student</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleBookmark}
                  className={`glass-pill w-12 h-12 flex items-center justify-center border transition-all duration-300 hover:scale-105 active:scale-95 ${isBookmarked ? 'bg-indigo-500/20 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'dark:border-white/10 border-black/10 hover:bg-white/5'}`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-indigo-400 text-indigo-500 dark:text-indigo-400' : 'dark:text-[#A1A1AA] text-[#52525b]'}`} />
                  <span className="sr-only">Bookmark</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="glass-pill w-12 h-12 flex items-center justify-center border dark:border-white/10 border-black/10 hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 dark:text-[#A1A1AA] text-[#52525b] dark:hover:text-white hover:text-[#09090b]"
                >
                  <Share2 className="w-5 h-5" />
                  <span className="sr-only">Share</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="mx-auto max-w-[680px]">
          <div className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:dark:text-white prose-headings:text-[#09090b] prose-headings:font-bold prose-headings:tracking-tighter 
            prose-p:leading-[1.8] prose-p:dark:text-[#A1A1AA] prose-p:text-[#52525b] prose-p:text-[1.125rem] prose-p:font-medium
            prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-indigo-700 dark:hover:prose-a:text-indigo-300
            prose-strong:dark:text-white prose-strong:text-[#09090b] prose-strong:font-black
          ">
            {post.content.split("\n\n").map((paragraph, idx) => (
               <p key={idx} className="mb-8">{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-16 flex flex-wrap items-center gap-3 pt-8 border-t dark:border-white/10 border-black/10">
            <span className="font-bold dark:text-white text-[#09090b] text-xs uppercase tracking-widest mr-2">Tags</span>
            {post.tags.map((tag) => (
              <span key={tag} className="glass-pill px-4 py-1.5 border dark:border-white/10 border-black/10 dark:text-[#A1A1AA] text-[#52525b] text-xs font-bold hover:dark:text-white hover:text-[#09090b] hover:dark:border-white/20 hover:border-black/20 transition-all cursor-pointer uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Recommended Section */}
      {relatedPosts.length > 0 && (
        <section className="dark:bg-[#050505] bg-white py-24 border-t dark:border-white/5 border-black/5 relative overflow-hidden transition-colors duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <div className="container max-w-[1200px] mx-auto px-4 z-10 relative">
            <h2 className="text-3xl font-black tracking-tighter mb-12 text-center dark:text-white text-[#09090b] uppercase">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((rp, i) => (
                <div key={rp.id} className="h-[400px]">
                  <PostCard post={rp} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
