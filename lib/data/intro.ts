import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";

export const welcomeMessage = {
    message: "Hello! I'm",
    name: "Md. Abdullah Al Mamun",
} as const;

export interface TypeWriterString_T {
    prefix: string;
    items: readonly string[];
}

export const typeWriterStrings: readonly TypeWriterString_T[] = [
    {
        prefix: "good at",
        items: ["ReactJS", "NextJS", "C++", "Python"],
    },
    {
        prefix: "interested in",
        items: ["Quantum Mechanics", "Quantum Computing", "String Theory"],
    },
    {
        prefix: "learning",
        items: ["Machine Learning", "Deep Learning", "Quantum Machine Learning"],
    }
] as const;

export const socialLinks = [
    // {
    //     name: "Email",
    //     url: "mailto:md.abdullahalmamun.shohag.abd@gmail.com",
    //     icon: React.createElement(FaEnvelope),
    // },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hackershohag/",
        icon: React.createElement(FaLinkedinIn),
    },
    {
        name: "GitHub",
        url: "https://github.com/HackerShohag",
        icon: React.createElement(FaGithub),
    },
    {
        name: "Medium",
        url: "https://medium.com/@hackershohag",
        icon: React.createElement(FaMedium),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/HackerShohag",
        icon: React.createElement(FaFacebookF),
    }
] as const;