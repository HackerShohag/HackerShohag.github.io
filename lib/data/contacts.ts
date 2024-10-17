import React from "react";
import { socialLinks } from "@/lib/data";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const contactsInfo = [
    ...socialLinks,
    {
        name: "Instagram",
        url: "https://www.instagram.com/hackershohag",
        icon: React.createElement(FaInstagram),
    },
    {
        name: "Twitter",
        url: "https://x.com/AbdullahLsM",
        icon: React.createElement(FaXTwitter),
    },
    {
        name: "Email",
        url: "mailto:md.abdullahalmamun.shohag.abd@gmail.com",
        icon: React.createElement(FaEnvelope),
    },
]