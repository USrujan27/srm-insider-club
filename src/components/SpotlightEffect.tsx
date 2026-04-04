"use client";

import { useEffect, useRef, useState } from "react";

export function SpotlightEffect() {
  const [isMobile, setIsMobile] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  // Use a ref for the mouse position to avoid state updates on every frame
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if it's a touch device / mobile
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768) {
      setIsMobile(true);
      return;
    }

    let animationFrameId: number;

    const updateSpotlight = () => {
      if (divRef.current) {
        divRef.current.style.background = `radial-gradient(1500px circle at ${mousePos.current.x}px ${mousePos.current.y}px, rgba(99,102,241,0.08), transparent 70%)`;
      }
      animationFrameId = requestAnimationFrame(updateSpotlight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Initialize animation loop
    animationFrameId = requestAnimationFrame(updateSpotlight);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) {
    return null; /* Hide entirely on mobile */
  }

  return (
    <>
      {/* Background layer image the user provided */}
      <div
        className="fixed inset-0 z-[1] w-full h-full opacity-60 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/hoodie-bg.jpg')` }}
      />

      {/* Spotlight interactive radial mask overlay */}
      <div
        ref={divRef}
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{
          background: "rgba(0, 0, 0, 0.55)", // default before first tick
        }}
      />
    </>
  );
}
