"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SlideCard from "./slideCard";

export default function Certifications() {
    const { ref, inView } = useSectionInView("Certifications", 0.4);

    return (
        <section ref={ref} id="certifications" className="scroll-mt-28 mb-28">
            <SectionHeading>My Certifications</SectionHeading>
            <div className="flex max-w-[70vw] justify-center">
                <SlideCard images={certificationsData} />
            </div>
        </section>
    );
}
