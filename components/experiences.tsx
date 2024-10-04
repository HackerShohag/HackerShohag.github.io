"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceItem from "@/components/experience";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>My Experience</SectionHeading>
      <div style={{ overflowX: "hidden" }}>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceItem {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
