import Fair_8th from "@/public/experiences/8th_RCF_Career_Fair.jpeg";
import Fair_9th from "@/public/experiences/9th_RCF_Career_Fair.jpeg";

export const experiencesData = [
    {
        title: "9th RCF Career Fair",
        location: "RUET Career Forum",
        description: "Co-ordinator for the 9th RCF Career Fair. Responsible for overseeing the event planning, coordinating with various stakeholders, and ensuring the smooth execution of the career fair activities.",
        image: Fair_9th.src,
        date: "26th - 27th April, 2024",
        keypoints: [
            "Led a team of volunteers",
            "Coordinated with over companies",
            "Managed event budget and logistics",
        ],
    },
    {
        title: "8th RCF Career Fair",
        location: "RUET Career Forum",
        description: "Hospitality Management for the 8th RCF Career Fair. Managed the hospitality arrangements, coordinated with company HRs, and ensured a welcoming environment for all attendees.",
        image: Fair_8th.src,
        date: "15th - 16th September, 2023",
        keypoints: [
            "Organized accommodation for 10+ company representatives",
            "Ensured smooth registration process for attendees",
            "Handled on-site issues and provided support",
        ],
    },
] as const;
