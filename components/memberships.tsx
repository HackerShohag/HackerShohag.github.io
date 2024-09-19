"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { membershipsAndAffliationsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function MembershipsAndAffliations() {
    const { ref } = useSectionInView("Memberships", 0.5);

    return (
        <section ref={ref} id="memberships" className="scroll-mt-28 mb-28">
            <SectionHeading>Memberships & Affiliations</SectionHeading>
            <div>
                {membershipsAndAffliationsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
