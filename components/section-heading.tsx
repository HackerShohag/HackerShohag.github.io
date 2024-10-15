import { itim } from "@/config/fonts";
import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className={`${itim.className} text-3xl sm:text-5xl font-medium uppercase mb-8 text-center`}>
      {children}
    </h2>
  );
}
