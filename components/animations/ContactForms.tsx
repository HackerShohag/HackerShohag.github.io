'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Modern Contact Form
 * Sleek contact form with micro-interactions
 */
export function ModernContactForm({
  onSubmit,
}: {
  onSubmit: (data: { name: string; email: string; message: string }) => Promise<void>;
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <FloatingLabelInput
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        isFocused={focusedField === 'name'}
        onFocus={() => setFocusedField('name')}
        onBlur={() => setFocusedField(null)}
      />

      <FloatingLabelInput
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        isFocused={focusedField === 'email'}
        onFocus={() => setFocusedField('email')}
        onBlur={() => setFocusedField(null)}
      />

      <FloatingLabelTextarea
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        isFocused={focusedField === 'message'}
        onFocus={() => setFocusedField('message')}
        onBlur={() => setFocusedField(null)}
      />

      <motion.button
        type="submit"
        className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <span className="relative z-10">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
      </motion.button>
    </motion.form>
  );
}

function FloatingLabelInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  isFocused,
  onFocus,
  onBlur,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full px-4 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none transition-colors"
        animate={{
          borderColor: isFocused ? '#3B82F6' : '#E5E7EB',
        }}
      />
      <motion.label
        className="absolute left-4 pointer-events-none text-gray-500"
        animate={{
          y: isFocused || hasValue ? -32 : 16,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? '#3B82F6' : '#6B7280',
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
    </div>
  );
}

function FloatingLabelTextarea({
  label,
  name,
  value,
  onChange,
  isFocused,
  onFocus,
  onBlur,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <motion.textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={6}
        className="w-full px-4 py-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none transition-colors resize-none"
        animate={{
          borderColor: isFocused ? '#3B82F6' : '#E5E7EB',
        }}
      />
      <motion.label
        className="absolute left-4 pointer-events-none text-gray-500"
        animate={{
          y: isFocused || hasValue ? -32 : 16,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? '#3B82F6' : '#6B7280',
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
    </div>
  );
}

/**
 * Interactive Social Links
 * Animated social media links with hover effects
 */
export function SocialLinks({
  links,
}: {
  links: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
    color: string;
  }>;
}) {
  return (
    <div className="flex gap-4 justify-center">
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-2xl"
            whileHover={{
              borderColor: link.color,
              backgroundColor: link.color,
              color: '#ffffff',
            }}
            transition={{ duration: 0.2 }}
          >
            {link.icon}
          </motion.div>

          {/* Tooltip */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
            initial={{ y: 5 }}
            whileHover={{ y: 0 }}
          >
            {link.name}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}

/**
 * Newsletter Signup
 * Inline newsletter subscription form
 */
export function NewsletterSignup({
  onSubscribe,
}: {
  onSubscribe: (email: string) => Promise<void>;
}) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubscribe(email);
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-6 py-4 pr-32 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none"
          required
        />
        <motion.button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : isSuccess ? '✓ Done!' : 'Subscribe'}
        </motion.button>
      </div>
    </motion.form>
  );
}

/**
 * Contact Info Cards
 * Display contact information with icons
 */
export function ContactInfoCards({
  contacts,
}: {
  contacts: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
  }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {contacts.map((contact, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -5,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <div className="text-4xl mb-4 flex justify-center text-blue-500">
            {contact.icon}
          </div>
          <p className="text-sm text-gray-500 mb-2">{contact.label}</p>
          {contact.href ? (
            <a
              href={contact.href}
              className="font-semibold text-lg hover:text-blue-500 transition-colors"
            >
              {contact.value}
            </a>
          ) : (
            <p className="font-semibold text-lg">{contact.value}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Animated Success Message
 * Toast-style success notification
 */
export function SuccessToast({ message, isVisible }: { message: string; isVisible: boolean }) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 px-6 py-4 bg-green-500 text-white rounded-xl shadow-2xl flex items-center gap-3"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="font-semibold">{message}</span>
    </motion.div>
  );
}
