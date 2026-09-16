import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Arcade from "@/components/arcade";
import ProductNotes from "@/components/product-notes";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <ProductNotes />
      <Arcade />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
