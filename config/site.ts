import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaTools, FaAward, FaCertificate, FaBook, FaUsers, FaProjectDiagram, FaBlog, FaEnvelope } from 'react-icons/fa';

export type SiteConfig = typeof siteConfig;
import logo from "@/public/vector_x256.png";
import React from 'react';

export const siteConfig = {
	name: "Md. Abdullah AL Mamun",
	nickName: "ABD",
	preferredName: "Abdullah AL Shohag",
	birthName: "Shohag",
	logo: logo.src,
	shortIntro: "Computer Science & Engineering, RUET",
	email: "info@shohag.tech",
	description: `Md. Abdullah AL Mamun, also known as Abdullah AL Shohag, is an AI specialist from Bangladesh, focused on machine learning and deep learning in public health and medical imaging. Additionally, he is a proficient full-stack developer, skilled in React, Next.js, TypeScript, and MongoDB.`,
	url: 'https://shohag.tech',
	googleVerification: "LfVzFPEr0IALyIIOvDAGXZB-jOcNdRrmHd3QdH5hYLE",
	navbarItems: [
		{
			name: "Home",
			hash: "/",
			icon: React.createElement(FaHome),
		},
		{
			name: "About",
			hash: "#about",
			icon: React.createElement(FaUser),
		},
		{
			name: "Academic",
			hash: "#academic",
			icon: React.createElement(FaGraduationCap),
		},
		// {
		// 	name: "Experience",
		// 	hash: "#experience",
		// 	icon: React.createElement(FaBriefcase),
		// },
		{
			name: "Skills",
			hash: "#skills",
			icon: React.createElement(FaTools),
		},
		// {
		// 	name: "Awards",
		// 	hash: "#awards",
		// 	icon: React.createElement(FaAward),
		// },
		{
			name: "Certifications",
			hash: "#certifications",
			icon: React.createElement(FaCertificate),
		},
		// {
		// 	name: "Publications",
		// 	hash: "#publications",
		// 	icon: React.createElement(FaBook),
		// },
		// {
		// 	name: "Memberships",
		// 	hash: "#memberships",
		// 	icon: React.createElement(FaUsers),
		// },
		{
			name: "Projects",
			hash: "#projects",
			icon: React.createElement(FaProjectDiagram),
		},
		// {
		// 	name: "Blogs",
		// 	hash: "#blogs",
		// 	icon: React.createElement(FaBlog),
		// },
		{
			name: "Contact",
			hash: "#contact",
			icon: React.createElement(FaEnvelope),
		},
	],
	// socials: {
	// 	facebook: "https://www.facebook.com/HackerShohag",
	// 	linkedin: "https://www.linkedin.com/company/HackerShohag",
	// 	instagram: "https://www.instagram.com/HackerShohag",
	// 	youtube: "https://www.youtube.com/c/HackerShohag",
	// 	github: "https://github.com/HackerShohag",
	// 	twitter: "https://x.com/AbdullahLsM",
	// },
};
