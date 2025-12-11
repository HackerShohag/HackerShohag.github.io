"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { StaggerChildren } from "@/components/animations/RevealOnScroll";
import { modernAnimations } from "@/lib/animations";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <RevealOnScroll direction="up">
        <SectionHeading>My skills</SectionHeading>
      </RevealOnScroll>
      <ul className="flex flex-wrap justify-center gap-2 text-md sm:text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 cursor-pointer"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
              y: -5,
              scale: 1.1,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );

}
