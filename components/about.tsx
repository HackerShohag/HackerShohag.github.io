"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Image } from "@nextui-org/react";
import { aboutData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="m-32 max-w-[75rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="grid grid-cols-3 gap-20">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                shadow="md"
                radius="full"
                width={450}
                src={aboutData.image}
                alt="Shohag portrait"
                className="object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col text-justify col-span-2 gap-5">
          <p className="mb-3">
            {aboutData.firstParagraph}
          </p>
          <p>
            {aboutData.secondParagraph}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
