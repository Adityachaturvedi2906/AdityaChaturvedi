import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Arcade from "@/components/arcade";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center px-3 sm:px-5">
      <Intro />
      <Arcade />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
