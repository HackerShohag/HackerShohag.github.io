"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import ModernProjectCard from "@/components/animations/ModernProjectCard";
import { useSectionInView } from "@/lib/hooks";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-[52rem] mx-auto">
      <RevealOnScroll direction="up">
        <SectionHeading>My projects</SectionHeading>
      </RevealOnScroll>
      <div className="p-4 space-y-8">
        {projectsData.map((project, index) => (
          <ModernProjectCard
            key={index}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );

}
