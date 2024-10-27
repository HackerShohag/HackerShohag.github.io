import Header from "@/components/header";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Provider from "./provider";
import { siteConfig } from "@/config/site";
import FooterSection from "@/components/footer";
import { montserrat } from "@/config/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name + "(" + siteConfig.birthName + ")" + " | " + siteConfig.shortIntro,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="google-site-verification" content={siteConfig.googleVerification} />
      </head>
      <body
        className={`${montserrat.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 no-scrollbar`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[51.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[51.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <Provider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <FooterSection />
              <Toaster position="top-right" />
              <ThemeSwitch className="hidden lg:flex" />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </Provider>
      </body>
    </html>
  );
}
