

"use client";
 
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, Building2, Coffee, Sparkles, ChevronDown } from "lucide-react";
 
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/PostCard";
import { mockPosts } from "@/data/posts";
import MaskReveal from "@/components/MaskReveal";
 
 
export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
 
  const features = [
    {
      title: "Placements",
      description: "Insider scoops on interviews, patterns, and what recruiters really want.",
      icon: <Building2 className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
    },
    {
      title: "Internships",
      description: "Direct referrals, off-campus tricks, and real stipends decoded.",
      icon: <GraduationCap className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
    },
    {
      title: "Campus Life",
      description: "The best food spots, fests, and ways to handle 85% attendance.",
      icon: <Coffee className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
    }
  ];
 
  const previewPosts = mockPosts.slice(0, 6);
 
  return (
    <div className="flex flex-col overflow-hidden relative min-h-screen bg-[var(--bg)] transition-colors duration-300">
      
      {/* ── Hero Section wrapped in MaskReveal ── */}
      <MaskReveal
        revealSrc="/reveal.jpg"
        spotlightSize={200}
        edgeSoftness={40}
        className="relative min-h-screen w-full"
      >
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full">
          
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
              className="inline-flex items-center rounded-full glass-pill px-4 py-1.5 text-sm font-medium text-indigo-300 mb-8 border border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] group"
            >
              <Sparkles className="mr-2 h-4 w-4 animate-pulse text-indigo-400" />
              <span>Designed for SRMites, by SRMites</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
              className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-tighter mb-6 text-white leading-[1.1]"
            >
              Your Campus. <br className="hidden sm:block" />
              <span className="text-gradient relative inline-block">
                <span className="relative z-10">Smarter.</span>
                <span className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 -z-10 rounded-full" />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
              className="max-w-[520px] leading-relaxed text-[#A1A1AA] sm:text-xl mb-12"
            >
              Don't just survive engineering. Master it. Access premium stories on FAANG placements, off-campus hikes, and the real campus survival guides.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link href="/feed" className="w-full sm:w-auto group relative">
                <div className="absolute -inset-1 bg-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <Button size="lg" className="relative w-full sm:w-auto h-14 px-8 text-base bg-indigo-500 text-white rounded-full hover:bg-indigo-400 transition-all active:scale-95 border border-indigo-400/50">
                  Explore Feed <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/signup" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-transparent border-white/20 text-white rounded-full hover:bg-white/5 active:scale-95 transition-all">
                  Sign Up Free
                </Button>
              </Link>
            </motion.div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A1A1AA] opacity-50"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
 
        </section>
      </MaskReveal>
      {/* ── End Hero ── */}
 
      {/* Features Section */}
      <section className="py-32 container px-4 mx-auto relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1.5 h-6 md:h-8 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase tracking-widest">
              Everything you need
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#A1A1AA]"
          >
            We decode the hidden rules of campus success so you don't have to figure it out the hard way.
          </motion.p>
        </div>
 
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
              }}
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                rotateY: -5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{ perspective: 1000 }}
              className="glass p-8 rounded-[2rem] relative overflow-hidden group border border-white/5 hover:border-indigo-500/50 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col items-start"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
 
      {/* Marquee Section */}
      <section className="py-32 relative overflow-hidden border-y border-white/5 bg-[var(--bg)]/50 backdrop-blur-md">
        <div className="container px-4 mx-auto mb-16 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-1.5 h-6 md:h-8 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-widest">
              Happening Now
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#A1A1AA]"
          >
            Catch up on the latest campus insights
          </motion.p>
        </div>
 
        <div className="relative flex w-full overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[var(--bg)] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[var(--bg)] to-transparent z-20 pointer-events-none" />
          
          <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] gap-6 px-4 shrink-0 hover-lift">
            {[...previewPosts, ...previewPosts, ...previewPosts].map((post, i) => (
              <div key={`${post.id}-${i}`} className="w-[320px] md:w-[400px] shrink-0 pointer-events-none">
                <PostCard post={post} index={0} />
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Final CTA Section */}
      <section className="py-40 relative flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="container relative z-10 max-w-4xl glass liquid-hover border border-white/10 p-12 md:p-20 rounded-[3rem] mx-auto text-center overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Ready to level up?</h2>
          <p className="text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of SRMites already using Insider to navigate their campus journey smarter.
          </p>
          
          <div className="flex justify-center group relative inline-block mx-auto">
            <div className="absolute -inset-1 bg-indigo-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <Link href="/signup">
              <Button size="lg" className="relative h-16 px-10 text-lg rounded-full shadow-[0_0_40px_rgba(99,102,241,0.4)] bg-indigo-500 text-white hover:bg-indigo-400 border border-indigo-400 transition-all duration-300 active:scale-95">
                Join SRM Insider <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
            
    </div>
  );
}