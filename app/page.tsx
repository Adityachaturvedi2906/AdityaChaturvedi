import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Arcade from "@/components/arcade";
import ProductNotes from "@/components/product-notes";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Arcade />
      <ProductNotes />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
