import { siteConfig, SiteConfig } from "@/config/site";

export type SectionName = (typeof siteConfig.navbarItems)[number]["name"];
