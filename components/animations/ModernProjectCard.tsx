'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ModernProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  link: string;
  index: number;
}

/**
 * Modern Project Card with Advanced Animations
 * Features: 3D tilt, magnetic effect, reveal animations
 */
export default function ModernProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
  index
}: ModernProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="mb-8 last:mb-0"
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <motion.div
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 
                     rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 
                     shadow-lg hover:shadow-2xl transition-shadow duration-500"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.1), transparent 40%)",
            }}
          />

          <div className="relative z-10 p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Section */}
              <motion.div
                className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                style={{ transform: "translateZ(50px)" }}
              >
                {/* Title with gradient */}
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                           dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.4 + tagIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="px-3 py-1 text-xs font-medium rounded-full 
                               bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                               text-blue-600 dark:text-blue-400
                               border border-blue-500/20
                               hover:scale-110 transition-transform"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="pt-4"
                >
                  <motion.span
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 
                             font-medium group-hover:gap-4 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                style={{ transform: "translateZ(75px)" }}
              >
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={isHovered ? {
                      background: [
                        "linear-gradient(45deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5))",
                        "linear-gradient(90deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5))",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(99, 102, 241, 0.5))",
                      ],
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ padding: "2px" }}
                  >
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900" />
                  </motion.div>

                  <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className="relative z-10 object-cover w-full h-full 
                             group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay gradient on hover */}
                  <motion.div
                    className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                             group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>

                {/* Floating particles effect */}
                {isHovered && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500 rounded-full"
                        initial={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 100 - 50,
                          opacity: 0 
                        }}
                        animate={{ 
                          x: Math.random() * 200 - 100,
                          y: Math.random() * -200,
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2 
                        }}
                        style={{
                          top: '50%',
                          left: '50%',
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
              transform: "translateX(-100%)",
            }}
            animate={isHovered ? { x: ["translateX(-100%)", "translateX(100%)"] } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
