"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { membershipsAndAffliationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Membership from "@/components/membership";

export default function MembershipsAndAffliations() {
    const { ref } = useSectionInView("Memberships", 0.2);

    return (
        <section ref={ref} id="memberships" className="scroll-mt-28 mb-28">
            <SectionHeading>Memberships & Affiliations</SectionHeading>
            <div className="p-4">
                {membershipsAndAffliationsData.map((data, index) => (
                    <React.Fragment key={index}>
                        <Membership {...data} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
