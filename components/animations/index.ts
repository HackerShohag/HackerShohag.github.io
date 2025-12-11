/**
 * Modern Animation Components Index
 * Export all animation components for easy import
 */

// Core Animation Library
export * from '@/lib/animations';

// Magnetic Interactions
export { default as MagneticButton, MagneticLink } from './MagneticButton';

// Text Animations
export { default as AnimatedText, GradientText, TypingText } from './AnimatedText';

// Scroll Effects
export { default as ParallaxSection, ParallaxImage, ScaleOnScroll, StickyScrollReveal } from './ParallaxScroll';

export {
  default as RevealOnScroll,
  StaggerChildren,
  FadeInBlur,
  AnimatedCounter,
} from './RevealOnScroll';

// Project Cards
export { default as ModernProjectCard } from './ModernProjectCard';

// Background Effects
export {
  FloatingOrbs,
  MeshGradient,
  NoiseTexture,
  GridPattern,
  Spotlight,
  AnimatedDots,
  GlowCards,
  ScanLines,
} from './BackgroundEffects';

// Navigation Components
export {
  FloatingDock,
  ScrollProgress,
  BackToTop,
  SectionNavigator,
  CommandMenuIndicator,
  LoadingBar,
} from './Navigation';

// Hero & Layout Sections
export {
  ModernHero,
  FeatureGrid,
  BentoGrid,
  BentoCard,
  StatsSection,
  TestimonialCarousel,
} from './HeroSections';

// Contact & Forms
export {
  ModernContactForm,
  SocialLinks,
  NewsletterSignup,
  ContactInfoCards,
  SuccessToast,
} from './ContactForms';
