"use client";

import React from "react";
import { useRef } from "react";
import { experiencesData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

import { Image } from "@nextui-org/react";

type ExperienceProps = (typeof experiencesData)[number];

export default function ExperienceItem({
    title,
    location,
    description,
    date,
    keypoints,
    image,
}: ExperienceProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const xProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                x: xProgress,
                opacity: opacityProgress,
                transition: "0.5s",
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="sm:pr-8 relative my-20">
                <div className="flex flex-col max-w-5xl gap-32 my-5">
                    <div
                        className="grid grid-cols-2 w-full gap-36"
                    >
                        <motion.div
                            className="h-full content-center"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image shadow="md" src={image} alt={title} width={450} height={250} />
                        </motion.div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                {location}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                {date}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                {description}
                            </p>
                            <ul className="text-lg text-gray-600 dark:text-gray-300 mt-10">
                                {
                                    keypoints.map((keypoint, index) => (
                                        <li key={index} className="list-disc ml-4">
                                            {keypoint}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
