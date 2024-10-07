"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { awardsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Awards() {
    const { ref, inView } = useSectionInView("Awards", 0.2);

    return (
        <section ref={ref} id="awards" className="scroll-mt-28 mb-28">
            <SectionHeading>My Awards</SectionHeading>
            <div className="flex w-full justify-center mt-20 overflow-hidden">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-full w-5/6"
                    initial={{ opacity: 0, y: -200 }}
                    animate={inView ? { opacity: [0, .25, 1], y: 0 } : {}}
                    transition={{ duration: 0.4 }}
                >
                    {awardsData.map((award, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg shadow h-full w-full content-center grid grid-rows-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex w-full justify-center items-center">
                                {award.icon}
                            </div>
                            <p className="mb-5 mx-5 text-md sm:text-lg justify-start text-justify">{award.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
