"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@nextui-org/react";
import clsx from "clsx";
import { signika } from "@/config/fonts";


interface MembershipProps {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly imageUrl: string;
  className?: string;
}

export default function Membership({ title, description, imageUrl, className }: MembershipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className={`group mb-3 sm:mb-8 p-5 last:mb-0 bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative h-fit hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 text-center ${className}`}
    >
      <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
      <div className="grid grid-cols-2 text-justify items-center gap-10">
        <div className="">
          <p className={`${clsx(signika.className)}text-sm sm:text-md mt-2 leading-relaxed text-gray-700 dark:text-white/70`}>
            <span className="text-2xl sm:text-3xl">{description.charAt(0)}</span>
            {description.slice(1)}
          </p>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          className="my-5"
          height={200}
          width={400}
        />
      </div>
    </motion.div>
  );
}
