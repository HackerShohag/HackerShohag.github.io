import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { LiaSchoolSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";

export const academicData = [
    {
        title: "Bachelor of Engineering - BE, Computer Science and Engineering",
        location: "Rajshahi University of Engineering & Technology",
        description:
            "Pursuing a Bachelor's degree in Computer Science and Engineering, focusing on algorithms, data structures, operating systems, and computer networks.",
        icon: React.createElement(FaUserGraduate),
        date: "December 2021 - July 2026",
    },
    {
        title: "Higher Secondary School, Science",
        location: "Police Lines School and College, Rangpur",
        description:
            "Completed Higher Secondary Certificate with a focus on Science subjects.",
        icon: React.createElement(LuGraduationCap),
        date: "June 2018 - January 2021",
    },
    {
        title: "Secondary School Certificate, Science",
        location: "Gangachara Adarsha High School, Rangpur",
        description:
            "Completed Secondary School Certificate with a focus on Science subjects.",
        icon: React.createElement(LiaSchoolSolid),
        date: "2012 - 2018",
    },
] as const;
