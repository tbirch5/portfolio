import React, { useEffect, useRef, useState } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef(null);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    // Animate opacity periodically
    const pulse = setInterval(() => {
      setOpacity(prev => (prev < 0.35 ? 0.5 : 0.3));
    }, 5000);

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fontSize = 14;
    const symbols = "01";
    let drops = [];

    function initializeDrops() {
      const columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }

    initializeDrops();


    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");

      // Adjust background trail for light/dark modes
      ctx.fillStyle = isDark
        ? "rgba(0, 0, 0, 0.08)"     // darker fade for dark mode
        : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Symbol color
      ctx.fillStyle = isDark ? "#00ffcc" : "#6366f1";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(pulse);
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-10] pointer-events-none transition-opacity duration-1000"
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
