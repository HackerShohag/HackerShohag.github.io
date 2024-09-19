import React from "react";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";

export const welcomeMessage = "Hello, I'm Shohag!" as const;

export const typeWriterStrings = ["ReactJS", "NextJS", "C++", "Python"] as const;

export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hackershohag/",
        icon: React.createElement(FaLinkedin),
    },
    {
        name: "GitHub",
        url: "https://github.com/HackerShohag",
        icon: React.createElement(FaGithubSquare),
    },
    {
        name: "Medium",
        url: "https://medium.com/@hackershohag",
        icon: React.createElement(FaMedium),
    },
] as const;