"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
        While I have a foundational understanding of <span className="font-medium">full-stack web development</span>, my primary focus lies in leveraging cutting-edge technologies to advance the frontiers of computational science. I am proficient in <span className="font-medium">React</span>, <span className="font-medium">Next.js</span>, <span className="font-medium">Node.js</span>, and <span className="font-medium">MongoDB</span>, and I continually explore emerging frameworks and tools to enhance my expertise.
        My academic endeavors are complemented by a fervent curiosity for <span className="font-medium">history and philosophy</span>, as I believe that a holistic understanding of human thought and civilization enriches my perspective as a researcher. Furthermore, I am nurturing my musical talents by learning to play the guitar, finding solace and inspiration in the harmonies of music.
      </p>

      <p>
        <span className="italic">When I'm not immersed in research or coding</span>, I enjoy immersing myself in the vast realms of knowledge and culture. Whether delving into the intricacies of history, pondering philosophical inquiries, or engaging in spirited discussions, I relish the opportunity to broaden my horizons and challenge my intellect.
        Beyond academia, I find joy in the simple pleasures of life, indulging in video games, cinematic experiences, and the companionship of my beloved dog. These moments of leisure rejuvenate my spirit and imbue me with renewed energy for my academic pursuits.
      </p>

    </motion.section>
  );
}
