"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

interface AwardProps {
    description: string;
    icon: React.FunctionComponentElement<any>;
}


export default function Award( { award }: { award: AwardProps }) {
    const { ref, inView } = useSectionInView("Awards", 0.2);

    return (
        <motion.div
            ref={ref}
            className="grid grid-rows-2 border shadow-md rounded-lg"
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: [0, .25, 1], y: 0 } : {} }
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex mt-5 mb-2 w-full justify-center items-center">
                {award.icon}
            </div>
            <p className="mb-5 mx-5 text-md sm:text-lg justify-start text-justify">{award.description}</p>
        </motion.div>
    );
}
