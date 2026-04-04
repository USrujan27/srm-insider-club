"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionTemplate } from "framer-motion";

export function CursorSpotlight() {
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothX, smoothY]);

  if (isMobile) return null;

  const bgGradient = useMotionTemplate`radial-gradient(900px circle at ${smoothX}px ${smoothY}px, rgba(99,102,241,0.07), transparent 70%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 pointer-events-none"
      style={{
        background: bgGradient,
      }}
    />
  );
}
