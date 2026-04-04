"use client";
 
import { useCallback, useEffect, useRef, useState } from "react";
 
interface MaskRevealProps {
  revealSrc: string;
  revealAlt?: string;
  spotlightSize?: number;
  edgeSoftness?: number;
  children: React.ReactNode;
  className?: string;
}
 
export default function MaskReveal({
  revealSrc,
  revealAlt = "",
  spotlightSize = 800,
  edgeSoftness = 40,
  children,
  className = "",
}: MaskRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
 
  const radius = spotlightSize / 2;
  const outerRadius = radius + edgeSoftness;
 
  // We mask the COVER layer (the solid dark bg on top of the image).
  // Where the cover is visible  → image is hidden (dark bg shows).
  // Where the cover has a hole  → image shows through underneath.
  // Gradient: transparent at center (hole) → solid at edges (cover).
  const applyMask = useCallback(
    (x: number, y: number) => {
      if (!coverRef.current) return;
      const gradient = `radial-gradient(circle ${outerRadius}px at ${x}px ${y}px, transparent ${radius}px, black ${outerRadius}px)`;
      coverRef.current.style.webkitMaskImage = gradient;
      (coverRef.current.style as any).maskImage = gradient;
    },
    [radius, outerRadius]
  );
 
  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        if (!rect) return;
        applyMask(clientX - rect.left, clientY - rect.top);
      });
    },
    [applyMask]
  );
 
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e.clientY);
  const onTouchMove = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (t) handleMove(t.clientX, t.clientY);
  };
 
  // When cursor leaves, cover the whole area again
  const onMouseLeave = () => {
    if (coverRef.current) {
      coverRef.current.style.webkitMaskImage = "none";
      (coverRef.current.style as any).maskImage = "none";
    }
  };
 
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);
 
  return (
    <div
      ref={wrapperRef}
      className={`relative ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchMove={onTouchMove}
      style={{ cursor: "default" }}
    >
      {/* ── Layer 1 (bottom): Reveal image — always rendered, hidden by cover ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <img
          src={revealSrc}
          alt={revealAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            userSelect: "none",
          }}
          draggable={false}
        />
      </div>
 
      {/* ── Layer 2 (middle): Dark cover with a hole punched by the mask ── */}
      <div
        ref={coverRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          backgroundColor: "#050505",
          willChange: "mask-image",
          transition: "opacity 0.2s ease",
        }}
      />
 
      {/* ── Layer 3 (top): Children — text & buttons, always fully visible ── */}
      <div style={{ position: "relative", zIndex: 20 }}>
        {children}
      </div>
    </div>
  );
}