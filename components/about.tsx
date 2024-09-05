"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "@react-email/components";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a Computer Science &amp; Engineering student with a keen interest in research, I am dedicated to delving deep into the realms of technology and innovation. I am currently pursuing my undergraduate degree in <span className="font-medium">Computer Science &amp; Engineering</span>, with a strong emphasis on research methodologies and computational problem-solving. My academic journey has been marked by a relentless pursuit of knowledge and exploration.
        My passion for programming led me to engage in intensive research projects, where I apply theoretical concepts to real-world challenges. I am particularly fascinated by the intersection of <span className="font-medium">artificial intelligence</span> and <span className="font-medium">machine learning</span>, seeking to unravel the mysteries of intelligent systems and their applications in diverse domains.
      </p>
      <Link href="/about" className="mt-8">Read more</Link>

    </motion.section>
  );
}
