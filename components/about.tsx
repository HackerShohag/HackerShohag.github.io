"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { aboutData } from "@/lib/data";
import RandomFacts from "./randomFacts";
import { itim } from "@/config/fonts";

export default function About() {
  const { ref, inView } = useSectionInView("About", 0.2);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className={`py-20 mx-5 md:mx-32 max-w-[75rem] text-center leading-8 scroll-mt-28`}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.2 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <RandomFacts className="hidden lg:flex" />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col text-justify text-sm sm:text-lg gap-5 md:col-span-3 lg:col-span-2">
          <motion.p
            className="mb-3"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ delay: 0.3 }}
          >
            {aboutData.firstParagraph}
          </motion.p>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ delay: 0.5 }}
          >
            {aboutData.secondParagraph}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
