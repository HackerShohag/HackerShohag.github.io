import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const academicData = [
    {
        title: "Bachelor of Science in Engineering",
        location: "Rajshahi University of Engineering & Technology",
        description:
            "I studied Computer Science and Engineering. I learned about algorithms, data structures, operating systems, and computer networks. I also developed a strong foundation in mathematics.",
        icon: React.createElement(LuGraduationCap),
        date: "2022 - 2026",
    },
    {
        title: "Front-End Developer",
        location: "Shotti Bookings",
        description:
            "I worked as a front-end developer at Shotti Bookings, a bus ticket management project. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2024",
    },
    {
        title: "Full-Stack Developer",
        location: "RUET Career Forum",
        description:
            "As a club member and and dev Team Lead, I developed the official website of RUET Career Forum. I also worked on various projects.",
        icon: React.createElement(FaReact),
        date: "2024",
    },
] as const;