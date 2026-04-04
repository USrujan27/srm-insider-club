"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full hover:bg-muted/50 transition-colors duration-300"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative flex items-center justify-center w-full h-full"
      >
        <Moon className={`absolute h-5 w-5 transition-all ${isDark ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
        <Sun className={`absolute h-5 w-5 transition-all ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
