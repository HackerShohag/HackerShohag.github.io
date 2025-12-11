'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/**
 * Floating Orbs Background
 * Creates ambient floating particles in the background
 */
export function FloatingOrbs({ count = 5 }: { count?: number }) {
  const orbs = Array.from({ length: count });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            background: `radial-gradient(circle, ${
              ['#60A5FA', '#A78BFA', '#F472B6', '#FBBF24'][i % 4]
            }, transparent)`,
          }}
          animate={{
            x: [
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
            ],
            y: [
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/**
 * Mesh Gradient Background
 * Animated mesh gradient background
 */
export function MeshGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 27% 37%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
            radial-gradient(at 97% 21%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
            radial-gradient(at 52% 99%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
            radial-gradient(at 10% 29%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
            radial-gradient(at 97% 96%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
            radial-gradient(at 33% 50%, rgba(251, 191, 36, 0.1) 0px, transparent 50%),
            radial-gradient(at 79% 53%, rgba(59, 130, 246, 0.1) 0px, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/**
 * Noise Texture Overlay
 * Adds subtle grain texture (premium feel)
 */
export function NoiseTexture() {
  return (
    <div 
      className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }}
    />
  );
}

/**
 * Grid Background Pattern
 * Modern grid pattern background
 */
export function GridPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-5 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/**
 * Spotlight Effect
 * Mouse-following spotlight effect
 */
export function Spotlight() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
        }}
      />
    </div>
  );
}

/**
 * Animated Dots Pattern
 * Matrix-style animated dots
 */
export function AnimatedDots() {
  const dots = Array.from({ length: 50 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Glow Cards Background
 * Floating glow card elements
 */
export function GlowCards() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-3xl opacity-10"
          style={{
            background: `linear-gradient(135deg, 
              ${['#60A5FA', '#A78BFA', '#F472B6'][i]}, 
              transparent)`,
            left: `${i * 35}%`,
            top: `${i * 20 + 10}%`,
          }}
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/**
 * Scan Lines Effect
 * Retro-futuristic scan lines
 */
export function ScanLines() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-5">
      <motion.div
        className="absolute w-full h-1 bg-blue-500"
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
