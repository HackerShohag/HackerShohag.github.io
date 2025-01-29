import About from "@/components/about";
import Academic from "@/components/academic";
import Awards from "@/components/awards";
import Blogs from "@/components/blogs";
import Certifications from "@/components/certifications";
// import ChronoTimeline from "@/components/chronoTimeline";
import CodeSnippetCard from "@/components/CodeSnippetCard";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import IntroUpdated from "@/components/intro";
import MembershipsAndAffliations from "@/components/memberships";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import Skills from "@/components/skills";
import SocialMediaCard from "@/components/social-cards";

const code = `class Life:
    def __init__(self, name):
        self.name = name
        self.energy = 100

    def code(self):
        if self.energy >= 30:
            self.energy -= 30
            print(f"{self.name} is coding. Energy: {self.energy}")
        else:
            print(f"{self.name} is too tired to code. Needs to eat or sleep.")

    def sleep(self):
        self.energy = min(self.energy + 40, 100)
        print(f"{self.name} is sleeping. Energy: {self.energy}")`;

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 gap-12">
      <IntroUpdated />
      {/* <ChronoTimeline /> */}
      <About />
      <CodeSnippetCard filename="human_life.py" code={code} startLineNumber={379} />
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
      {/* <SocialMediaCard /> */}
    </main>
  );
}
