import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";

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
        items: [ "Python", "C++", "NextJS" ],
    },
    {
        prefix: "interested in",
        items: [ "Quantum Computing", "String Theory", "Astrophysics" ],
    },
    {
        prefix: "learning",
        items: ["Machine Learning", "Deep Learning", "Quantum Computing" ],
    }
] as const;

export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hackershohag",
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
        icon: React.createElement(FaFacebook),
    },
] as const;