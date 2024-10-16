import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa6";
import { LiaSchoolSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";

export const academicData = [
    {
        title: "Bachelor of Science in Engineering",
        location: "Rajshahi University of Engineering & Technology",
        description:
            "I studied Computer Science and Engineering. I learned about algorithms, data structures, operating systems, and computer networks. I also developed a strong foundation in mathematics.",
        icon: React.createElement(FaUserGraduate), // Using a different icon for university
        date: "2022 - 2026",
    },
    {
        title: "Higher Secondary Certificate",
        location: "Police Lines School and College, Rangpur",
        description:
            "I completed my Higher Secondary Certificate (HSC) with a focus on science.",
        icon: React.createElement(LuGraduationCap), // Using a different icon for high school
        date: "2019 - 2020",
    },
    {
        title: "Secondary School Certificate",
        location: "Gangachara Adarsha High School, Rangpur",
        description:
            "I completed my Secondary School Certificate (SSC) with a focus on science.",
        icon: React.createElement(LiaSchoolSolid), // Keeping the same icon for secondary school
        date: "2017 - 2018",
    },
] as const;