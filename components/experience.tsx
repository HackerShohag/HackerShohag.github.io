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
                transition: "0.5s linear",
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="sm:pr-8 relative mx-2 sm:mx-5 justify-center">
                <div className="flex flex-col max-w-5xl gap-32 my-5 justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 sm:gap-36 justify-center">
                        <motion.div
                            className="h-full flex justify-center items-center"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4, ease: "linear" }}
                        >
                            <Image
                                shadow="md"
                                src={image}
                                alt={title}
                                width={450}
                                height={250}
                                className="object-cover object-center"
                            />
                        </motion.div>
                        <div>
                            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                                {title}
                            </h1>
                            <p className="text-md font-sans italic sm:text-lg text-gray-600 dark:text-gray-300">
                                {location} ({date})
                            </p>
                            {/* <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">
                                {date}
                            </p> */}
                            <p className="text-sm sm:text-md text-gray-600 dark:text-gray-300 text-justify">
                                {description}
                            </p>
                            <ul className="text-sm sm:text-md text-gray-600 dark:text-gray-300 mt-10">
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
