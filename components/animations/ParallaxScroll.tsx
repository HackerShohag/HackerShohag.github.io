'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

/**
 * Parallax Section Component
 * Creates depth with scroll-based parallax effect
 */
export default function ParallaxSection({ 
  children, 
  offset = 50,
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Parallax Image Component
 * Image with parallax scroll effect
 */
export function ParallaxImage({ 
  src, 
  alt, 
  className = '',
  intensity = 30
}: { 
  src: string; 
  alt: string; 
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img 
        src={src} 
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/**
 * Scale on Scroll Component
 * Scales element based on scroll position
 */
export function ScaleOnScroll({ 
  children, 
  className = '',
  scaleFrom = 0.8,
  scaleTo = 1
}: { 
  children: React.ReactNode; 
  className?: string;
  scaleFrom?: number;
  scaleTo?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleFrom, scaleTo, scaleFrom]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Sticky Scroll Reveal
 * Content reveals as you scroll past
 */
export function StickyScrollReveal({ 
  children,
  className = ''
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div ref={ref} className={`sticky top-0 ${className}`}>
      <motion.div style={{ opacity, scale }}>
        {children}
      </motion.div>
    </div>
  );
}
