"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { awardsData } from "@/lib/data";
import Award from "@/components/award";


export default function Awards() {

    return (
        <section id="awards" className="scroll-mt-28 mb-28">
            <SectionHeading>My Awards</SectionHeading>
            <div className="flex w-full justify-center mt-20 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 max-w-7xl w-5/6">
                    {awardsData.map((award, index) => (
                        <Award key={index} award={award} />
                    ))}
                </div>
            </div>
        </section>
    );
}
