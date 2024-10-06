import React from "react";
import { socialLinks } from "@/lib/data/intro";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const contactsInfo = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/HackerShohag",
        icon: React.createElement(FaFacebook),
    },
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
    ...socialLinks,
    {
        name: "Email",
        url: "mailto:info@shohag.tech",
        icon: React.createElement(FaEnvelope),
    },
]