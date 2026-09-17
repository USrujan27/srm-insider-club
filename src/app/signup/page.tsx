"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { UserCircle, Mail, Lock, AlertCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const validate = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      
      const mockUser = {
        id: "usr_2",
        email,
        name: name,
        token: "mock_jwt_token_456"
      };
      
      localStorage.setItem("srm_user_session", JSON.stringify(mockUser));
      toast.success("Account created successfully!", {
        description: "Welcome to SRM Insider.",
      });
      router.push("/feed");
    }, 1500);
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" as const }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden dark:bg-[#050505] bg-[var(--bg)] top-0 left-0 fixed w-full h-full z-[60] transition-colors duration-500">
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 group z-20">
        <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] animate-pulse" />
        <span className="font-bold text-2xl dark:text-white text-[#09090b]" style={{ letterSpacing: '0.08em' }}>
          SRM Insider
        </span>
      </Link>

      <motion.div 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="w-full max-w-[420px] z-10"
      >
        <div className="glass-card rounded-[2.5rem] p-10 md:p-12 relative border dark:border-white/10 border-black/10 dark:bg-[#050505]/60 bg-white/60 dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] shadow-xl overflow-hidden transition-all duration-500">
          
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_20px_2px_rgba(99,102,241,0.5)]" />
          <div className="absolute top-0 inset-x-0 h-[100px] bg-indigo-500/10 blur-[50px] -z-10 pointer-events-none dark:block hidden" />

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3 text-gradient inline-block uppercase">Join the Club</h2>
            <p className="dark:text-[#A1A1AA] text-[#52525b] text-sm md:text-base font-medium">Get access to premium stories and guides</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <motion.div custom={1} variants={formVariants} initial="hidden" animate="visible">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserCircle className="h-5 w-5 dark:text-[#A1A1AA] text-[#52525b] group-focus-within:text-indigo-500 transition-colors duration-300" />
                </div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  disabled={isSubmitting}
                  className={`pl-12 h-14 dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 dark:text-white text-[#09090b] placeholder:dark:text-[#A1A1AA]/50 placeholder:text-[#52525b]/50 rounded-full focus:border-indigo-500/50 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 ${
                    errors.name ? "!border-orange-500/50 focus:!ring-orange-500/20" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    className="text-xs text-orange-600 dark:text-orange-400 mt-2 flex items-center shrink-0 ml-4 font-bold uppercase tracking-wide"
                  >
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div custom={2} variants={formVariants} initial="hidden" animate="visible">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 dark:text-[#A1A1AA] text-[#52525b] group-focus-within:text-indigo-500 transition-colors duration-300" />
                </div>
                <Input
                  type="email"
                  placeholder="name@srmist.edu.in"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  disabled={isSubmitting}
                  className={`pl-12 h-14 dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 dark:text-white text-[#09090b] placeholder:dark:text-[#A1A1AA]/50 placeholder:text-[#52525b]/50 rounded-full focus:border-indigo-500/50 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 ${
                    errors.email ? "!border-orange-500/50 focus:!ring-orange-500/20" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    className="text-xs text-orange-600 dark:text-orange-400 mt-2 flex items-center shrink-0 ml-4 font-bold uppercase tracking-wide"
                  >
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div custom={3} variants={formVariants} initial="hidden" animate="visible">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 dark:text-[#A1A1AA] text-[#52525b] group-focus-within:text-indigo-500 transition-colors duration-300" />
                </div>
                <Input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  disabled={isSubmitting}
                  className={`pl-12 h-14 dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 dark:text-white text-[#09090b] placeholder:dark:text-[#A1A1AA]/50 placeholder:text-[#52525b]/50 rounded-full focus:border-indigo-500/50 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 ${
                    errors.password ? "!border-orange-500/50 focus:!ring-orange-500/20" : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.password && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -5, height: 0 }}
                    className="text-xs text-orange-600 dark:text-orange-400 mt-2 flex items-center shrink-0 ml-4 font-bold uppercase tracking-wide"
                  >
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.password}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div custom={4} variants={formVariants} initial="hidden" animate="visible" className="pt-4">
              <div className="relative group w-full">
                <div className="absolute -inset-0.5 bg-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full font-bold bg-indigo-500 text-white hover:bg-indigo-600 border-none transition-all duration-300 active:scale-95 relative"
                >
                  {isSubmitting ? (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="flex items-center"
                    >
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Creating Account...
                    </motion.div>
                  ) : (
                    <span className="flex items-center text-base">
                      Sign Up Free <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
          </form>

          <motion.div custom={5} variants={formVariants} initial="hidden" animate="visible" className="mt-8">
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t dark:border-white/10 border-black/10"></div>
              <span className="flex-shrink-0 mx-4 dark:text-[#A1A1AA] text-[#52525b] text-[10px] font-black uppercase tracking-[0.2em]">or continue with</span>
              <div className="flex-grow border-t dark:border-white/10 border-black/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="glass-pill h-12 flex items-center justify-center border dark:border-white/10 border-black/10 hover:dark:bg-white/5 hover:bg-black/5 transition-all dark:text-white text-[#09090b] text-xs font-bold uppercase tracking-widest hover:dark:border-white/20 hover:border-black/20">
                Google
              </button>
              <button className="glass-pill h-12 flex items-center justify-center border dark:border-white/10 border-black/10 hover:dark:bg-white/5 hover:bg-black/5 transition-all dark:text-white text-[#09090b] text-xs font-bold uppercase tracking-widest hover:dark:border-white/20 hover:border-black/20">
                X
              </button>
            </div>
          </motion.div>

          <motion.div custom={6} variants={formVariants} initial="hidden" animate="visible" className="text-center mt-10">
            <p className="dark:text-[#A1A1AA] text-[#52525b] text-sm font-medium">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-black hover:underline transition-colors">
                Sign In
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
