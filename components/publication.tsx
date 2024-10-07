"use client";

import React from "react";
import { useRef } from "react";
import { publicationsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";

type PublicationProps = (typeof publicationsData)[number];

export default function PublicationItem({
    title,
    conferenceName,
    name,
    authors,
    shortDescription,
    date,
    location,
    link
}: PublicationProps) {
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
            className="w-full"
        >
                <div className="flex flex-col max-w-2xl my-5 justify-center border shadow-md p-5 rounded-lg transition-all hover:scale-105 hover:cursor-pointer">
                    <Link href={link} passHref>
                        <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                            {title}
                        </h1>
                        <p className="text-md font-sans italic sm:text-lg text-gray-600 dark:text-gray-300">
                            {conferenceName} ({date})
                        </p>
                        <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">
                            {location}
                        </p>
                        <p className="text-md sm:text-lg italic text-gray-600 dark:text-gray-300">
                            {authors.join(", ")}
                        </p>
                        <p className="text-sm sm:text-md text-gray-600 dark:text-gray-300 text-justify">
                            {shortDescription}
                        </p>
                    </Link>
                </div>
        </motion.div>
    );
}
