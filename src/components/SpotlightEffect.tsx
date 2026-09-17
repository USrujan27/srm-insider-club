"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

export function SpotlightEffect() {
  const isMobile = useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () =>
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth <= 768,
    () => true
  );

  const divRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

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

    animationFrameId = requestAnimationFrame(updateSpotlight);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
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
