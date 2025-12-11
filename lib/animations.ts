// Modern Animation Variants Library
// Inspired by Vercel, Linear, and modern portfolio trends

export const modernAnimations = {
  // 1. Stagger Children with Spring Physics
  staggerContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  },

  // 2. Reveal Animation (Linear-style)
  reveal: {
    hidden: { 
      opacity: 0, 
      y: 75,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
  },

  // 3. Slide with Fade
  slideInLeft: {
    hidden: { 
      x: -100, 
      opacity: 0,
      filter: "blur(5px)"
    },
    visible: { 
      x: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
  },

  slideInRight: {
    hidden: { 
      x: 100, 
      opacity: 0,
      filter: "blur(5px)"
    },
    visible: { 
      x: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
  },

  // 4. Scale with Rotation (Unique)
  scaleRotate: {
    hidden: { 
      scale: 0.5, 
      rotate: -10,
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
  },

  // 5. Bounce In (Playful)
  bounceIn: {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5
      }
    },
  },

  // 6. Glitch Effect (Futuristic)
  glitch: {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, -2, 2, -2, 2, 0],
      y: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  },

  // 7. Wave Animation (Smooth)
  wave: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // 8. Elastic Scale (Modern Hover)
  elasticScale: {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    },
  },

  // 9. Morphing Background
  morphBackground: {
    animate: {
      borderRadius: [
        "60% 40% 30% 70%/60% 30% 70% 40%",
        "30% 60% 70% 40%/50% 60% 30% 60%",
        "60% 40% 30% 70%/60% 30% 70% 40%",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // 10. Text Reveal (Character by Character)
  textReveal: {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
      },
    }),
  },

  // 11. Parallax Float
  float: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // 12. Fade Through Blur (Premium)
  fadeBlur: {
    hidden: { 
      opacity: 0, 
      filter: "blur(20px)",
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
  },

  // 13. Liquid Morph (Unique Card Effect)
  liquidMorph: {
    rest: {
      borderRadius: "20px",
    },
    hover: {
      borderRadius: "40% 60% 60% 40% / 60% 40% 40% 60%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  },

  // 14. Perspective Tilt (3D Effect)
  perspectiveTilt: {
    rest: {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    },
    hover: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },

  // 15. Magnetic Pull (Interactive)
  magneticPull: {
    rest: { x: 0, y: 0 },
    // Will be controlled by mouse position
  },

  // 16. Draw SVG Path
  drawPath: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  },

  // 17. Gradient Shift (Dynamic Background)
  gradientShift: {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // 18. Typewriter with Cursor
  typewriter: {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  },

  // 19. Shimmer Effect
  shimmer: {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },

  // 20. Spiral In (Unique Entry)
  spiralIn: {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  },
};

// Custom Easing Curves
export const customEasing = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  spring: { type: "spring", stiffness: 100, damping: 15 },
  smoothSpring: { type: "spring", stiffness: 200, damping: 20 },
  bouncySpring: { type: "spring", stiffness: 400, damping: 10 },
};

// Scroll-based Animation Configs
export const scrollAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  },

  slideInFromLeft: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },

  slideInFromRight: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
};
