'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Floating Navigation Dock
 * macOS-style floating dock navigation
 */
export function FloatingDock({ sections }: { sections: { name: string; href: string; icon?: React.ReactNode }[] }) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-end gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg px-4 py-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
        {sections.map((section, index) => (
          <Link
            key={section.name}
            href={section.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              animate={{
                y: hoveredIndex === index ? -8 : 0,
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {section.icon && (
                <span className="text-xl">{section.icon}</span>
              )}
              <span className="text-xs font-medium whitespace-nowrap">
                {section.name}
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

/**
 * Scroll Progress Bar
 * Top of page scroll indicator
 */
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}

/**
 * Back to Top Button
 * Animated scroll to top button
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
}

/**
 * Section Navigator
 * Side navigation showing current section
 */
export function SectionNavigator({ sections }: { sections: string[] }) {
  const [activeSection, setActiveSection] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200;

      sectionElements.forEach((element, index) => {
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <Link
            key={section}
            href={`#${section}`}
            className="group relative"
          >
            <motion.div
              className="w-3 h-3 rounded-full border-2 transition-colors"
              style={{
                borderColor: activeSection === index ? '#3B82F6' : '#D1D5DB',
                backgroundColor: activeSection === index ? '#3B82F6' : 'transparent',
              }}
              whileHover={{ scale: 1.5 }}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

/**
 * Command Menu Toggle
 * Quick keyboard shortcut indicator
 */
export function CommandMenuIndicator() {
  return (
    <motion.div
      className="fixed top-4 right-4 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-200/50 dark:border-gray-700/50 text-sm">
        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
          ⌘K
        </kbd>
        <span className="text-gray-600 dark:text-gray-400">Quick search</span>
      </div>
    </motion.div>
  );
}

/**
 * Loading Bar
 * Top loading progress bar (for page transitions)
 */
export function LoadingBar({ isLoading }: { isLoading: boolean }) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: isLoading ? [0, 0.3, 0.6, 0.9, 0.95] : 1,
        opacity: isLoading ? 1 : 0,
      }}
      transition={{
        duration: isLoading ? 2 : 0.3,
        ease: "easeInOut",
      }}
    />
  );
}
