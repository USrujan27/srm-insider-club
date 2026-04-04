"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-[#050505]">
      <ProgressBar />
      
      <motion.article 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container max-w-4xl mx-auto px-4 py-20 relative z-10"
      >
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[#A1A1AA] hover:text-white transition-colors text-sm mb-12 mt-4 group w-fit"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-white" />
          </div>
          <span className="font-medium tracking-wide">Back to Feed</span>
        </button>

        {/* Hero Glass Panel */}
        <header className="mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-[#050505]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
              <span className="px-4 py-1.5 rounded-full text-indigo-300 font-bold tracking-wider uppercase text-xs border border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-[#A1A1AA] font-mono"><CalendarDays className="w-4 h-4 text-indigo-400" /> {post.date}</span>
              <span className="flex items-center gap-2 text-[#A1A1AA] font-mono"><Clock className="w-4 h-4 text-indigo-400" /> {post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-12 text-white">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 group">
                <div className={`w-14 h-14 rounded-full flex flex-shrink-0 items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/10 group-hover:scale-105 transition-transform ${post.author.color === 'bg-blue-500' ? 'bg-indigo-600' : post.author.color}`}>
                  {post.author.avatarInitials}
                </div>
                <div>
                  <p className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">{post.author.name}</p>
                  <p className="text-sm text-[#A1A1AA] font-medium tracking-wide">SRM University Student</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleBookmark}
                  className={`glass-pill w-12 h-12 flex items-center justify-center border transition-all duration-300 hover:scale-105 active:scale-95 ${isBookmarked ? 'bg-indigo-500/20 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'border-white/10 hover:bg-white/5'}`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-indigo-400 text-indigo-400' : 'text-[#A1A1AA]'}`} />
                  <span className="sr-only">Bookmark</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="glass-pill w-12 h-12 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95 text-[#A1A1AA] hover:text-white"
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
          <div className="prose prose-lg prose-invert max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight 
            prose-p:leading-[1.8] prose-p:text-[#A1A1AA] prose-p:text-[1.125rem]
            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-indigo-300
            prose-strong:text-white prose-strong:font-bold
          ">
            {post.content.split("\n\n").map((paragraph, idx) => (
               <p key={idx} className="mb-8">{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-16 flex flex-wrap items-center gap-3 pt-8 border-t border-white/10">
            <span className="font-bold text-white text-sm uppercase tracking-widest mr-2">Tags</span>
            {post.tags.map((tag) => (
              <span key={tag} className="glass-pill px-4 py-1.5 border border-white/10 text-[#A1A1AA] text-sm hover:text-white hover:border-white/20 transition-all cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Recommended Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#050505] py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <div className="container max-w-[1200px] mx-auto px-4 z-10 relative">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-white">You May Also Like</h2>
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
