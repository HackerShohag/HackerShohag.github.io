import shottibookingsImg from "@/public/shottibookings.png";
import ravendownloaderImg from "@/public/ravendownloader.png";
import suggestbotbnImg from "@/public/suggestbotbn.png";

export const publicationsData = [
    {
        title: "Bachelor of Science in Engineering",
        location: "Rajshahi University of Engineering & Technology",
        description:
            "I studied Computer Science and Engineering. I learned about algorithms, data structures, operating systems, and computer networks. I also developed a strong foundation in mathematics.",
        image: shottibookingsImg.src,
        date: "2022 - 2026",
        keypoints: [
            "GPA: 3.80 out of 4.00",
            "Dean's List",
            "Scholarship",
        ],
    },
    {
        title: "Front-End Developer",
        location: "Shotti Bookings",
        description:
            "I worked as a front-end developer at Shotti Bookings, a bus ticket management project. I also upskilled to the full stack.",
        image: ravendownloaderImg.src,
        date: "2024",
        keypoints: [
            "Developed the user interface of the web app",
            "Implemented responsive design",
            "Used React, Next.js, and Tailwind CSS",
        ],
    },
    {
        title: "Full-Stack Developer",
        location: "RUET Career Forum",
        description:
            "As a club member and and dev Team Lead, I developed the official website of RUET Career Forum. I also worked on various projects.",
        image: suggestbotbnImg.src,
        date: "2024",
        keypoints: [
            "Developed the official website of RUET Career Forum",
            "Worked on various projects",
            "Used React, Next.js, and Tailwind CSS",
        ],
    },
    {
        title: "Full-Stack Developer",
        location: "RUET Career Forum",
        description:
            "As a club member and and dev Team Lead, I developed the official website of RUET Career Forum. I also worked on various projects.",
        image: suggestbotbnImg.src,
        date: "2024",
        keypoints: [
            "Developed the official website of RUET Career Forum",
            "Worked on various projects",
            "Used React, Next.js, and Tailwind CSS",
        ],
    },
] as const;