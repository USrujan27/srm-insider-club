"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle, Mail, Lock, LogIn, AlertCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden bg-[#050505] top-0 left-0 fixed w-full h-full z-[60]">
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 group z-20">
        <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] animate-pulse" />
        <span className="font-bold text-xl tracking-tighter text-white">
          SRM Insider
        </span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px] z-10"
      >
        <div className="glass-card rounded-[2.5rem] p-10 md:p-12 relative border border-white/10 bg-[#050505]/60 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_20px_2px_rgba(99,102,241,0.5)]" />
          <div className="absolute top-0 inset-x-0 h-[100px] bg-indigo-500/10 blur-[50px] -z-10 pointer-events-none" />

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-gradient inline-block">Join the Club</h2>
            <p className="text-[#A1A1AA] text-sm md:text-base">Get access to premium stories and guides</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <motion.div custom={1} variants={formVariants} initial="hidden" animate="visible">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserCircle className="h-5 w-5 text-[#A1A1AA] group-focus-within:text-indigo-400 transition-colors duration-300" />
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
                  className={`pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-[#A1A1AA]/50 rounded-full focus:border-indigo-500/50 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 ${
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
                    className="text-xs text-orange-400 mt-2 flex items-center shrink-0 ml-4 font-medium"
                  >
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div custom={2} variants={formVariants} initial="hidden" animate="visible">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#A1A1AA] group-focus-within:text-indigo-400 transition-colors duration-300" />
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
                  className={`pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-[#A1A1AA]/50 rounded-full focus:border-indigo-500/50 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 ${
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
                    className="text-xs text-orange-400 mt-2 flex items-center shrink-0 ml-4 font-medium"
                  >
                    <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div custom={3} variants={formVariants} initial="hidden" animate="visible">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#A1A1AA] group-focus-within:text-indigo-400 transition-colors duration-300" />
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
                  className={`pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-[#A1A1AA]/50 rounded-full focus:border-indigo-500/50 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 ${
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
                    className="text-xs text-orange-400 mt-2 flex items-center shrink-0 ml-4 font-medium"
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
                  className="w-full h-14 rounded-full font-bold bg-indigo-500 text-white hover:bg-indigo-400 border border-indigo-400 transition-all duration-300 active:scale-95 relative"
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
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-[#A1A1AA] text-xs uppercase tracking-wider">or continue with</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="glass-pill h-12 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-all text-white text-sm font-medium hover:border-white/20">
                Google
              </button>
              <button className="glass-pill h-12 flex items-center justify-center border border-white/10 hover:bg-white/5 transition-all text-white text-sm font-medium hover:border-white/20">
                X
              </button>
            </div>
          </motion.div>

          <motion.div custom={6} variants={formVariants} initial="hidden" animate="visible" className="text-center mt-10">
            <p className="text-[#A1A1AA] text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                Sign In
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
