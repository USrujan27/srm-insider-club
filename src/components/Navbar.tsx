"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "TEAM", href: "/team" },
  { name: "STARTUPS", href: "/startups" },
  { name: "EVENTS", href: "/events" },
  { name: "CONTACT", href: "/contact" },
  { name: "JOIN NOW", href: "/join" },
  { name: "DEVELOPERS", href: "/developers" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "glass-card py-3 w-full max-w-[90%] lg:max-w-7xl" 
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <div className="flex flex-none items-center justify-start xl:flex-1">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-bold text-2xl text-white whitespace-nowrap" style={{ letterSpacing: '0.08em' }}>
                SRM Insider
              </span>
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.6)] animate-pulse" />
            </Link>
          </div>

          {/* Center Links */}
          <nav className="hidden md:flex flex-1 xl:flex-none items-center justify-center gap-4 lg:gap-6">
            {navLinks.map((link) => {
              const isSpecial = link.name === "JOIN NOW";
              const isDev = link.name === "DEVELOPERS";
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));

              return (
                <Link key={link.name} href={link.href} className="relative group flex items-center h-full">
                  <span className={`transition-all duration-300 whitespace-nowrap ${
                    isSpecial 
                      ? "text-[11px] lg:text-xs font-bold tracking-wider text-indigo-100 bg-indigo-500/20 hover:bg-indigo-500 hover:text-white px-3 py-1.5 rounded-full border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
                      : isDev 
                        ? "text-[11px] lg:text-xs font-mono text-[#A1A1AA] hover:text-indigo-400 opacity-80" 
                        : isActive 
                          ? "text-xs lg:text-sm font-medium text-white" 
                          : "text-xs lg:text-sm font-medium text-[#A1A1AA] hover:text-white"
                  }`}>
                    {link.name}
                  </span>
                  {!isSpecial && !isDev && isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex flex-none xl:flex-1 items-center justify-end gap-3 lg:gap-4 truncate">
            <ThemeToggle />
            <Link href="/login" className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-300 whitespace-nowrap">
              Sign In
            </Link>
            <Link href="/signup" className="group relative shrink-0">
              <div className="absolute -inset-0.5 bg-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative bg-[#050505] border border-white/10 text-white hover:bg-indigo-500 hover:text-white transition-all duration-300 px-4 lg:px-5 py-2 rounded-full text-sm font-medium active:scale-95 whitespace-nowrap">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-[#050505] border-l border-white/10 z-50 p-6 flex flex-col md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-white" style={{ letterSpacing: '0.08em' }}>
                    SRM Insider
                  </span>
                  <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => {
                  const isSpecial = link.name === "JOIN NOW";
                  const isDev = link.name === "DEVELOPERS";
                  
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg transition-colors ${
                        isSpecial
                          ? "w-fit text-sm font-bold tracking-wider text-indigo-100 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                          : isDev
                          ? "font-mono text-sm text-[#A1A1AA] hover:text-indigo-400"
                          : "font-medium text-[#A1A1AA] hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="h-px w-full bg-white/10 my-4" />
                
                <Link 
                  href="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#A1A1AA] hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                
                <Link 
                  href="/signup" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 mb-8"
                >
                  <div className="relative group w-full">
                    <div className="absolute -inset-0.5 bg-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                    <button className="relative w-full bg-indigo-500 border border-white/10 text-white hover:bg-indigo-400 transition-all duration-300 px-5 py-3 rounded-full text-base font-bold active:scale-95">
                      Get Started
                    </button>
                  </div>
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
