"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { publicationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ExperienceItem from "@/components/experience";

export default function Publications() {
    const { ref } = useSectionInView("Publications", 0.2);

    return (
        <section ref={ref} id="publications" className="scroll-mt-28 mb-28">
            <SectionHeading>My Publications</SectionHeading>
            <div className="overflow-hidden">
                {publicationsData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <ExperienceItem {...experience} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
