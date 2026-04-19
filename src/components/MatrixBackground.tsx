"use client";

import React, { useEffect, useRef } from "react";

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[];:+=&*^%$#!";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);

    const drops: number[] = Array(columns).fill(1);

    let animationId: number;

    const draw = () => {
      // Check for theme
      const isLightMode = document.body.classList.contains("light-mode");
      
      // Fading background
      ctx.fillStyle = isLightMode ? "rgba(248, 250, 252, 0.1)" : "rgba(5, 5, 8, 0.08)";
      ctx.fillRect(0, 0, width, height);

      // Character color
      ctx.fillStyle = isLightMode ? "rgba(5, 80, 174, 0.15)" : "rgba(121, 192, 255, 0.2)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor(width / fontSize);
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -100; // Offset new drops
        }
      }
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        pointerEvents: "none",
        opacity: 0.8,
      }}
    />
  );
};

export default MatrixBackground;
