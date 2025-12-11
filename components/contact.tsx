"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { siteConfig } from "@/config/site";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [formData, setFormData] = useState({
    senderEmail: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formDataObj = new FormData();
    formDataObj.append('senderEmail', formData.senderEmail);
    formDataObj.append('message', formData.message);
    
    const { data, error } = await sendEmail(formDataObj);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Email sent successfully!");
      setFormData({ senderEmail: '', message: '' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-10 sm:py-28 w-screen text-center bg-slate-200 dark:bg-slate-800 relative"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px] sm:h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="fill-current text-gray-50 dark:text-gray-900"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center w-full px-5 mt-[100px] sm:mt-[150px]">
        <RevealOnScroll direction="up">
          <SectionHeading>Contact me</SectionHeading>
        </RevealOnScroll>

        <motion.p 
          className="text-gray-700 -mt-6 dark:text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Please contact me directly at{" "}
          <a className="underline" href="mailto:info@shohag.tech">
            {siteConfig.email}
          </a>{" "}
          or through this form.
        </motion.p>

        <motion.form
          className="flex flex-col w-full max-w-[50rem] px-5 mt-10 space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Email Input with Floating Label */}
          <div className="relative">
            <motion.input
              type="email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              maxLength={500}
              className="w-full px-4 py-4 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none transition-colors"
              animate={{
                borderColor: focusedField === 'email' ? '#3B82F6' : undefined,
              }}
            />
            <motion.label
              className="absolute left-4 pointer-events-none text-gray-500 dark:text-gray-400"
              animate={{
                y: focusedField === 'email' || formData.senderEmail ? -32 : 16,
                scale: focusedField === 'email' || formData.senderEmail ? 0.85 : 1,
                color: focusedField === 'email' ? '#3B82F6' : undefined,
              }}
              transition={{ duration: 0.2 }}
            >
              Your email
            </motion.label>
          </div>

          {/* Message Textarea with Floating Label */}
          <div className="relative">
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
              maxLength={5000}
              rows={6}
              className="w-full px-4 py-4 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none transition-colors resize-none"
              animate={{
                borderColor: focusedField === 'message' ? '#3B82F6' : undefined,
              }}
            />
            <motion.label
              className="absolute left-4 pointer-events-none text-gray-500 dark:text-gray-400"
              animate={{
                y: focusedField === 'message' || formData.message ? -32 : 16,
                scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                color: focusedField === 'message' ? '#3B82F6' : undefined,
              }}
              transition={{ duration: 0.2 }}
            >
              Your message
            </motion.label>
          </div>

          {/* Submit Button with Shimmer Effect */}
          <motion.button
            type="submit"
            className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            disabled={isSubmitting}
          >
            {/* Shimmer effect */}
            {!isSubmitting && (
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
            )}
            <span className="relative z-10">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
