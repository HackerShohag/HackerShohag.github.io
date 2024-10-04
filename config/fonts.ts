import { Fira_Code as FontMono, Inter as FontSans, Dancing_Script, Alex_Brush, Sofia } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-handwriting",
})

export const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
})

export const sofia = Sofia({
  subsets: ["latin"],
  variable: "--font-sofia",
  weight: "400"
})