"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import PdfViewer from "@/components/pdfViewer";
import TypeWriterEffect from "@/components/typewriter";
import { aboutData, socialLinks, TypeWriterString_T, typeWriterStrings, welcomeMessage } from "@/lib/data";
import { itim, signika, sofia } from "@/config/fonts";
import GitHubCalendar from 'react-github-calendar';

import '@/components/styles/fancy-radius.css';
import { Tooltip } from "@nextui-org/react";

export default function IntroUpdated() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col my-10 z-10 justify-center items-center h-[70vh] text-center sm:mb-0 scroll-mt-[100rem] w-full px-2 sm:px-0 gap-16 sm:gap-32"
    >
      <div className="grid grid-cols-[0.3fr,3fr] md:grid-cols-[0.2fr,5fr,2fr] max-w-[50rem] justify-between gap-5 md:gap-0">
        <div className="col-span-1 flex flex-col gap-2 h-full justify-center sm:justify-between">
          {
            socialLinks.map((socialLink) => (
              <Link
                key={socialLink.name}
                className="text-xl bg-white/30 dark:bg-white/10 p-4 text-gray-900 hover:text-blue-900 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer md:borderBlack dark:text-white/60 dark:hover:text-blue-400"
                href={socialLink.url}
                target="_blank"
              >
                {socialLink.icon}
              </Link>
            ))
          }
        </div>
        <div className="px-0 md:px-10 col-span-2 order-last md:order-none md:col-span-1 text-start items-start flex flex-col">
          <motion.div
            className="mt-4 px-4 font-medium !leading-[1.5] text-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className={`${sofia.className} text-2xl md:text-3xl font-medium`}>{welcomeMessage.message}</p>
            <h1 className={`${signika.className} text-3xl sm:text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-100`}>{welcomeMessage.name}</h1>
          </motion.div>
          <div className={`${itim.className} px-4 mb-5 text-xl flex`}>
            <TypeWriterEffect texts={typeWriterStrings as TypeWriterString_T[]} />
          </div>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm sm:text-md font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <PdfViewer />

          </motion.div>
        </div>
        <div className="md:col-span-1 md:order-2 flex justify-center items-center">
          <img
            width={250}
            src={aboutData.image}
            alt="Shohag portrait"
            className="w-52 h-52 animatedBox border-4 border-white border-opacity-40 shadow-2xl"
          />
        </div>
      </div>
      <div className={`${sofia.className} flex w-full justify-center`}>
        <GitHubCalendar
          username="HackerShohag"
          colorScheme="light"
          blockSize={12}
          blockMargin={2}
          fontSize={16}
          hideColorLegend={false}
          hideMonthLabels={false}
          hideTotalCount={false}
          theme={{
            light: ['hsl(0, 0%, 92%)', 'firebrick'],
            dark: ['#333', 'rgb(214, 16, 174)'],
          }}
          errorMessage='Error – Fetching GitHub contribution data for "Md. Abdullah Al Mamun" failed.
          Please make sure the username is correct and the user has contributions in the repository.'
          renderBlock={(block, activity) => {
            console.log(block, activity);

            return (
              <Tooltip
                content={<div className="text-center">{activity.count} contributions on {activity.date}</div>}
                key={activity.date}
              >
                <circle
                  key={activity.date}
                  cx={Number(block.props.x) + Number(block.props.width) / 2}
                  cy={Number(block.props.y) + Number(block.props.height) / 2}
                  r={Number(block.props.width) / 2}
                  fill={block.props.fill}               
                  data-count={block.props.values}
                  data-date={activity.date}
                  data-level={activity.level}
                  data-tip={activity.count}
                />
              </Tooltip>
            );
          }}
        />
      </div>
    </section>
  );
}