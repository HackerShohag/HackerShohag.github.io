"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { siteConfig } from "@/config/site";

import ThemeSwitch from "@/components/theme-switch";

import { sofia } from "@/config/fonts";
import BottomMenu, { ContactMenu } from "@/components/bottomMenu";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <>
      <header className="z-[50] lg:relative lg:bottom-auto lg:left-auto fixed bottom-0 left-0 w-full">
        <motion.nav
          className="bg-white px-10 rounded-full hidden lg:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {siteConfig.navbarItems.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:text-gray-200":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
          </motion.nav>
        <nav className="flex w-full justify-between items-center bg-white shadow-2xl shadow-gray-800 dark:bg-gray-950 px-4 lg:hidden">
          <div className="flex items-center">
            <ContactMenu />
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 ${clsx(sofia.className)} text-2xl font-black text-gray-500 dark:text-gray-500 items-center`}>
            {siteConfig.keyname}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeSwitch className="flex lg:hidden" iconHeightClass="font-medium h-4 w-4" isFixed={false} />
            <BottomMenu />
          </div>
        </nav>
      </header>
    </>
  );
}
