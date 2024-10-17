import keyboarImg from "@/public/projects/keyboard.png";
import shottibookingsImg from "@/public/projects/shottibookings.png";
import ravendownloaderImg from "@/public/projects/ravendownloader.png";
import suggestbotbnImg from "@/public/projects/suggestbotbn.png";

export const projectsData = [
    {
        title: "Software Development",
        description:
            "A YouTube video downloader app for Ubuntu Touch. Users can enter the URL of a YouTube video and download it in various formats and resolutions.",
        tags: ["C++", "QT5", "QT6", "QML", "Linux", "UBports"],
        imageUrl: ravendownloaderImg,
        link: "https://github.com/HackerShohag/RAVEN_Downloader"
    },
    {
        title: "Web Development",
        description:
            "I developed a bus ticket booking system as a full-stack developer. Users can search for available buses, select seats, and make payments.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Express"],
        imageUrl: shottibookingsImg,
        link: "https://github.com/HackerShohag/ShottiBookings"
    },
    {
        title: "Bot Development",
        description:
            "A bot that suggests articles based on editing history in Bengali Wikipedia. It analyzes the editing patterns of users and recommends relevant articles.",
        tags: ["Python", "SQL"],
        imageUrl: suggestbotbnImg,
        link: "https://github.com/HackerShohag/SuggestBot-bn"
    },
    {
        title: "Linux Development",
        description:
            "I developed three keyboard layouts for Ubuntu Touch specifically for Bengali language. The layouts include Avro, National, and Probhat.",
        tags: ["C++", "JavaScript", "QT5", "QML", "Linux", "UBports"],
        imageUrl: keyboarImg,
        link: "https://github.com/HackerShohag/keyboard-component/tree/bengali-avro"
    },
] as const;