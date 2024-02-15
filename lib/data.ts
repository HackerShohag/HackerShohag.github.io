import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shottibookingsImg from "@/public/shottibookings.png";
import ravendownloaderImg from "@/public/ravendownloader.png";
import suggestbotbnImg from "@/public/suggestbotbn.png";
import keyboarImg from "@/public/keyboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
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
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Software Development",
    description:
      "A YouTube video downloader app for Ubuntu Touch. Users can enter the URL of a YouTube video and download it in various formats and resolutions.",
    tags: ["C++", "QT5", "QT6", "QML", "Linux", "UBports"],
    imageUrl: ravendownloaderImg,
  },
  {
    title: "Web Development",
    description:
      "I developed a bus ticket booking system as a full-stack developer. Users can search for available buses, select seats, and make payments.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Express"],
    imageUrl: shottibookingsImg,
  },
  {
    title: "Bot Development",
    description:
      "A bot that suggests articles based on editing history in Bengali Wikipedia. It analyzes the editing patterns of users and recommends relevant articles.",
    tags: ["Python", "SQL"],
    imageUrl: suggestbotbnImg,
  },
  {
    title: "Linux Development",
    description:
      "I developed three keyboard layouts for Ubuntu Touch specifically for Bengali language. The layouts include Avro, National, and Probhat.",
    tags: ["C++", "JavaScript", "QT5", "QML", "Linux", "UBports"],
    imageUrl: keyboarImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Python",
  "TensorFlow",
  "MATLAB",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Django",
  "Framer Motion",
  "CSS",
] as const;
