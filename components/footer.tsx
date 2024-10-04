import { siteConfig } from "@/config/site";
import React from "react";

export default function Footer() {
  return (
    <footer className="pb-14 lg:pb-3 px-4 text-center text-gray-500">
      <small className="pb-2 block text-xs">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </small>
    </footer>
  );
}
