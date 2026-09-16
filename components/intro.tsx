"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="mx-auto mb-10 max-w-6xl scroll-mt-28 pt-32 sm:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-[1.3fr_.7fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Fintech · Product · Operations</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Building better experiences around complex products.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-white/70">
            I work at the intersection of technology and business operations — helping merchants integrate payments, investigating product and process friction, and turning recurring problems into practical solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#arcade" className="group flex items-center gap-3 rounded-full bg-gray-950 px-6 py-3 font-medium text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-gray-950">
              View Arcade <BsArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <a href="/resume.pdf" download className="flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 font-medium transition hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5">
              Resume <HiDownload className="opacity-60" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aditya-chaturvedi-1751641aa/" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-3.5 dark:border-white/10"><BsLinkedin /></a>
            <a aria-label="GitHub" href="https://github.com/Adityachaturvedi2906" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-3.5 text-xl dark:border-white/10"><FaGithubSquare /></a>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <Image src="/demo2.jpg" alt="Aditya Chaturvedi" width="260" height="260" priority className="h-56 w-56 rounded-[2rem] object-cover shadow-xl sm:h-64 sm:w-64" />
        </div>
      </div>
    </section>
  );
}
