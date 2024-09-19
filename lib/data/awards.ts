import React from "react";
import goldenBoy from "@/public/award_icons/golden_boy.png";
import champion from "@/public/award_icons/champion.png";
import firstRunnerUp from "@/public/award_icons/1st_runner_up.png";
import secondRunnerUp from "@/public/award_icons/2nd_runner_up.png";
import finalist from "@/public/award_icons/finalist.png";
import microsoft from "@/public/award_icons/microsoft.png";
import { Image } from "@nextui-org/react";

export const awardsData = [
    {
        // title: "Bachelor of Science in Engineering",
        // location: "Rajshahi University of Engineering & Technology",
        description: "I studied Computer Science and Engineering. I learned about algorithms, data structures, operating systems, and computer networks. I also developed a strong foundation in mathematics.",
        icon: React.createElement(Image, { src: goldenBoy.src, radius: 'sm' }),
        // date: "2022 - 2026",
    },
    {
        // title: "Front-End Developer",
        // location: "Shotti Bookings",
        description: "I worked as a front-end developer at Shotti Bookings, a bus ticket management project. I also upskilled to the full stack.",
        icon: React.createElement(Image, { src: champion.src, radius: 'sm' }),
        // date: "2024",
    },
    {
        // title: "Full-Stack Developer",
        // location: "RUET Career Forum",
        description: "As a club member and and dev Team Lead, I developed the official website of RUET Career Forum. I also worked on various projects.",
        icon: React.createElement(Image, { src: firstRunnerUp.src, radius: 'sm' }),
        // date: "2024",
    },
    {
        // title: "Bachelor of Science in Engineering",
        // location: "Rajshahi University of Engineering & Technology",
        description: "I studied Computer Science and Engineering. I learned about algorithms, data structures, operating systems, and computer networks. I also developed a strong foundation in mathematics.",
        icon: React.createElement(Image, { src: secondRunnerUp.src, radius: 'sm' }),
        date: "2022 - 2026",
    },
    {
        // title: "Front-End Developer",
        // location: "Shotti Bookings",
        description: "I worked as a front-end developer at Shotti Bookings, a bus ticket management project. I also upskilled to the full stack.",
        icon: React.createElement(Image, { src: finalist.src, radius: 'sm' }),
        // date: "2024",
    },
    {
        // title: "Full-Stack Developer",
        // location: "RUET Career Forum",
        description: "As a club member and and dev Team Lead, I developed the official website of RUET Career Forum. I also worked on various projects.",
        icon: React.createElement(Image, { src: microsoft.src, radius: 'sm' }),
        // date: "2024",
    },
] as const;