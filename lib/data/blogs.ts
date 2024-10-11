import matlabMachineLearningOnramp from '@/public/certificates/MATLAB_Machine_learning_Onramp_certificate.png';
import matlabOnramp2018 from '@/public/certificates/MATLAB_Onramp_certificate_2018.png';
import matlabOnramp from '@/public/certificates/MATLAB_Onramp_certificate.png';
import volunteer8thRCF from '@/public/certificates/volunteer certificate_8th-RCF.png';
import youthOlympiad2021 from '@/public/certificates/Youth_Olympiad_2021.png';

export const blogsData = [
    {
        imageSrc: matlabMachineLearningOnramp.src,
        title: "Mastering Space and Time",
        description: "How should the futuristic ways of transportation be? What are the ways of shortening the time of traveling? How to utilize all the space around us in the most optimum ways?",
        tags: ["spacex", "hyperloop", "elon"],
        link: "https://example.com/dummy-link"
    },
    {
        imageSrc: matlabOnramp2018.src,
        title: "IEEE Region 10",
        description: "A Region is an enclosure that is widely divided by bodily features, human impact features, and the interaction of humanity and the ecosystem.",
        tags: ["ieee", "region10", "ruetsb"],
        link: "https://example.com/dummy-link"
    },
    {
        imageSrc: matlabOnramp.src,
        title: "Easy-Breezy Clarifications of Git Commands",
        description: "Yes, yes, that's right guys! This is it, this is the perfect place to get a grasp on some of the common git commands.",
        tags: ["git", "github", "dev"],
        link: "https://example.com/dummy-link"
    },
    {
        imageSrc: volunteer8thRCF.src,
        title: "Recalling NPM Commands to Your Heart's Content",
        description: "Who doesn't love a decent package for development purposes? These packages come of so many usual and unusual...",
        tags: ["npm", "nodejs", "javascript"],
        link: "https://example.com/dummy-link"
    },
    {
        imageSrc: youthOlympiad2021.src,
        title: "Youth Olympiad 2021",
        description: "An event that brings together young minds to compete and showcase their talents in various fields.",
        tags: ["olympiad", "youth", "competition"],
        link: "https://example.com/dummy-link"
    }
] as const;