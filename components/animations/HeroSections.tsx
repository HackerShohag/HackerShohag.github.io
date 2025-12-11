'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

/**
 * Modern Hero Section
 * Full-screen hero with parallax and gradient effects
 */
export function ModernHero({
  title,
  subtitle,
  description,
  imageUrl,
  ctaText,
  ctaHref,
}: {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaHref: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {subtitle && (
          <motion.p
            className="text-white/80 text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {description}
        </motion.p>

        <motion.a
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>

        {/* Floating image */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Feature Grid with Hover Effects
 * Modern 3-column feature showcase
 */
export function FeatureGrid({
  features,
}: {
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -10,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          }}
        >
          {/* Gradient border on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />

          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>

          {/* Arrow indicator */}
          <motion.div
            className="absolute top-8 right-8 opacity-0 group-hover:opacity-100"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Bento Grid Layout
 * Modern asymmetric grid layout
 */
export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-fr">
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className = '',
  span = 'md:col-span-2 lg:col-span-2',
}: {
  children: React.ReactNode;
  className?: string;
  span?: string;
}) {
  return (
    <motion.div
      className={`p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ${span} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stats Counter Section
 * Animated number counters
 */
export function StatsSection({
  stats,
}: {
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
  }>;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

/**
 * Testimonial Carousel
 * Horizontal scrolling testimonials
 */
export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
  }>;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-[350px] md:min-w-[450px] p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 snap-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
