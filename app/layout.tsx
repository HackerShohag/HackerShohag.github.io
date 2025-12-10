import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shohag.tech'),
  title: {
    default: "Md. Abdullah AL Mamun (Shohag) | AI Specialist & Full-Stack Developer",
    template: "%s | Md. Abdullah AL Mamun"
  },
  description: "Md. Abdullah AL Mamun (Shohag) - AI specialist from Bangladesh focused on machine learning, deep learning in public health and medical imaging. Proficient full-stack developer skilled in React, Next.js, TypeScript, Python, and MongoDB.",
  keywords: [
    "Md. Abdullah AL Mamun",
    "Abdullah AL Shohag",
    "Shohag",
    "AI Specialist Bangladesh",
    "Machine Learning Engineer",
    "Deep Learning",
    "Medical Imaging AI",
    "Public Health AI",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "RUET CSE",
    "Computer Science Engineering",
    "Bangladesh Developer",
    "AI Researcher"
  ],
  authors: [{ name: "Md. Abdullah AL Mamun", url: "https://shohag.tech" }],
  creator: "Md. Abdullah AL Mamun",
  publisher: "Md. Abdullah AL Mamun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shohag.tech',
    title: 'Md. Abdullah AL Mamun (Shohag) | AI Specialist & Full-Stack Developer',
    description: 'AI specialist from Bangladesh focused on machine learning, deep learning in public health and medical imaging. Proficient full-stack developer skilled in React, Next.js, TypeScript, and MongoDB.',
    siteName: 'Md. Abdullah AL Mamun Portfolio',
    images: [
      {
        url: 'https://shohag.tech/profile-pic_x256.jpg',
        width: 256,
        height: 256,
        alt: 'Md. Abdullah AL Mamun (Shohag)',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Abdullah AL Mamun (Shohag) | AI Specialist & Full-Stack Developer',
    description: 'AI specialist from Bangladesh focused on machine learning, deep learning in public health and medical imaging. Full-stack developer skilled in React, Next.js, TypeScript, and MongoDB.',
    creator: '@AbdullahLsM',
    images: ['https://shohag.tech/profile-pic_x256.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'LfVzFPEr0IALyIIOvDAGXZB-jOcNdRrmHd3QdH5hYLE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="canonical" href="https://shohag.tech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Md. Abdullah AL Mamun",
              "alternateName": ["Abdullah AL Shohag", "Shohag"],
              "url": "https://shohag.tech",
              "image": "https://shohag.tech/profile-pic_x256.jpg",
              "jobTitle": "AI Specialist & Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "RUET"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Rajshahi University of Engineering & Technology",
                "department": "Computer Science & Engineering"
              },
              "sameAs": [
                "https://github.com/HackerShohag",
                "https://www.linkedin.com/in/hackershohag",
                "https://medium.com/@hackershohag",
                "https://www.facebook.com/HackerShohag",
                "https://x.com/AbdullahLsM"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Medical Imaging",
                "Public Health",
                "Full Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "MongoDB"
              ],
              "email": "info@shohag.tech"
            })
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
