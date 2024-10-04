"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
export default function ThemeSwitch({ className = '', iconHeightClass = '', isFixed = true }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`${isFixed ? 'bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl fixed bottom-5 right-5 rounded-full border border-gray-950 dark:border-white border-opacity-40 hover:scale-[1.15] active:scale-105 transition-all' : ''} w-[3rem] h-[3rem] flex items-center justify-center dark:bg-gray-950 ${className}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon className={iconHeightClass} /> : <BsSun className={iconHeightClass} />}
    </button>
  );
}
