"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { publicationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import PublicationItem from "@/components/publication";

export default function Publications() {
    const { ref } = useSectionInView("Publications", 0.2);

    return (
        <section ref={ref} id="publications" className="scroll-mt-28 mb-28">
            <SectionHeading>My Publications</SectionHeading>
            <div className="flex flex-col overflow-hidden w-full p-5">
                {publicationsData.map((publication, index) => (
                    <React.Fragment key={index}>
                        <PublicationItem {...publication} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
