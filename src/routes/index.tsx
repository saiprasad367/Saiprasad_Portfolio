import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { LeetCode } from "@/components/portfolio/LeetCode";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Cursor } from "@/components/portfolio/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SaiPrasad Chindam — Software Engineer · GenAI · Cloud-Native" },
      {
        name: "description",
        content:
          "Portfolio of SaiPrasad Chindam — Software Engineer building scalable AI-powered systems, cloud-native architectures, and full-stack products.",
      },
      { property: "og:title", content: "SaiPrasad Chindam — Software Engineer" },
      { property: "og:description", content: "Cloud-native AI systems, GenAI workflows, full-stack engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <LeetCode />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
