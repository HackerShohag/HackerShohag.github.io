import About from "@/components/about";
import Academic from "@/components/academic";
import Awards from "@/components/awards";
import Blogs from "@/components/blogs";
import Certifications from "@/components/certifications";
import CodeSnippetCard from "@/components/CodeSnippetCard";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import IntroUpdated from "@/components/intro";
import MembershipsAndAffliations from "@/components/memberships";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 gap-12">
      <IntroUpdated />
      <CodeSnippetCard />
      <About />
      <Academic />
      <Experiences />
      <Skills />
      {/* <Awards /> */}
      <Certifications />
      {/* <Publications /> */}
      {/* <MembershipsAndAffliations /> */}
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </main>
  );
}
