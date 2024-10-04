import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaTools, FaAward, FaCertificate, FaBook, FaUsers, FaProjectDiagram, FaBlog, FaEnvelope } from 'react-icons/fa';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Md. Abdullah AL Mamun (Shohag)",
	shortname: "Personal Portfolio",
	description: "Md. Abdullah AL Mamun, also known as Abdullah AL Shohag is a full-stack developer based in Bangladesh, specializes in React, Next.js, TypeScript, Tailwind and MongoDB.",
	url: 'https://shohag.tech',
	googleVerification: "LfVzFPEr0IALyIIOvDAGXZB-jOcNdRrmHd3QdH5hYLE",
	navbarItems: [
		{
			name: "Home",
			hash: "/",
			icon: FaHome,
		},
		{
			name: "About",
			hash: "#about",
			icon: FaUser,
		},
		{
			name: "Academic",
			hash: "#academic",
			icon: FaGraduationCap,
		},
		{
			name: "Experience",
			hash: "#experience",
			icon: FaBriefcase,
		},
		{
			name: "Skills",
			hash: "#skills",
			icon: FaTools,
		},
		{
			name: "Awards",
			hash: "#awards",
			icon: FaAward,
		},
		{
			name: "Certifications",
			hash: "#certifications",
			icon: FaCertificate,
		},
		{
			name: "Publications",
			hash: "#publications",
			icon: FaBook,
		},
		{
			name: "Memberships",
			hash: "#memberships",
			icon: FaUsers,
		},
		{
			name: "Projects",
			hash: "#projects",
			icon: FaProjectDiagram,
		},
		{
			name: "Blogs",
			hash: "#blogs",
			icon: FaBlog,
		},
		{
			name: "Contact",
			hash: "#contact",
			icon: FaEnvelope,
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
