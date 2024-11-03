import keyboarImg from "@/public/projects/keyboard.png";
import shottibookingsImg from "@/public/projects/shottibookings.png";
import ravendownloaderImg from "@/public/projects/ravendownloader.png";
import suggestbotbnImg from "@/public/projects/suggestbotbn.png";
import assemblyLangImg from "@/public/projects/assembly-language.png";

export const projectsData = [
    {
        title: "Software Development",
        description:
            "RAVEN Downloader is a concise Ubuntu Touch application built on the Qt framework, leveraging the youtube-dl library and ffmpeg. It facilitates seamless downloading of YouTube videos and playlists directly onto Ubuntu Touch devices, offering efficient and reliable video downloading capabilities.",
        tags: ["C++", "QT5", "QML", "Linux", "UBports", "youtube-dl", "ffmpeg"],
        imageUrl: ravendownloaderImg,
        link: "https://github.com/HackerShohag/RAVEN_Downloader"
    },
    {
        title: "Web Development",
        description:
            "Shotti Bookings is a comprehensive bus ticket booking platform developed using Next.js for the frontend and Express.js with Mongoose for the backend. It offers user authentication with NextAuth, search and booking functionalities, an interactive dashboard, payment integrations, an admin panel, real-time updates, and a responsive design with NextUI.",
        tags: ["Next.js", "NextUI", "React.js", "NextAuth", "Express.js", "MongoDB", "Web Development"],
        imageUrl: shottibookingsImg,
        link: "https://github.com/HackerShohag/ShottiBookings"
    },
    {
        title: "Bot Development",
        description:
            "SuggestBotBN is a bot designed to recommend articles in need of suggestions on Bengali Wikipedia. Implemented using Python and SQL, it analyzes editing patterns of users to recommend relevant articles for improvement.",
        tags: ["Python", "SQL"],
        imageUrl: suggestbotbnImg,
        link: "https://github.com/HackerShohag/SuggestBot-bn"
    },
    {
        title: "Linux Development",
        description:
            "Developed three Bengali keyboard layouts—Avro, National, and Probhat—for Ubuntu Touch using C++ and the QT framework. The keyboards are fully functional and integrated into the UBports community, enhancing the typing experience for Bengali language users.",
        tags: ["C++", "JavaScript", "QT5", "QML", "Linux", "UBports"],
        imageUrl: keyboarImg,
        link: "https://github.com/HackerShohag/keyboard-component/tree/bengali-avro"
    },
    {
        title: "Assembly Language for Code Runner",
        description:
            "A VSCode extension that runs a bash script named 'assemble' to simplify the assembly code compilation process using NASM and GCC. It automatically detects the host platform and generates executable binaries with 'main' sections for seamless integration with C-style program entry points.",
        tags: ["Assembly Language", "NASM", "JavaScript", "VSCode Extension"],
        imageUrl: assemblyLangImg,
        link: "https://github.com/HackerShohag/assembly-language-runner"
    },
] as const;