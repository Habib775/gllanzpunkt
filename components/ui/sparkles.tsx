'use client';

import React, { useRef, useEffect } from 'react';

type SparklesCoreProps = {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
};

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  background = 'black',
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 1500,
  className = '',
  particleColor = '#ffffff',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    const sparkles = Array.from({ length: Math.floor(particleDensity / 100) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * (maxSize - minSize) + minSize,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random(),
      dAlpha: (Math.random() - 0.5) * 0.02,
    }));

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      sparkles.forEach((s) => {
        s.x += s.dx;
        s.y += s.dy;
        s.alpha += s.dAlpha;

        if (s.alpha <= 0 || s.alpha >= 1) {
          s.dAlpha = -s.dAlpha;
        }

        if (s.x < 0 || s.x > width) s.dx = -s.dx;
        if (s.y < 0 || s.y > height) s.dy = -s.dy;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${Math.floor(s.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [background, minSize, maxSize, particleDensity, particleColor]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" style={{ background }} />
    </div>
  );
};

