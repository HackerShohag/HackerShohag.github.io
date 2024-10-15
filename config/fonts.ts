import { Fira_Code as FontMono, Inter as FontSans, Dancing_Script, Alex_Brush, Sofia, Signika, Itim } from "next/font/google";

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

export const signika = Signika({
  subsets: ["latin"],
  variable: "--font-assistant",
  weight: "400"
});

export const itim = Itim({
  subsets: ["latin"],
  variable: "--font-itim",
  weight: "400"
});