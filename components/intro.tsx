"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDown, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import ResumeModal from "./resume-modal";

const highlights = [
  ["Fintech", "Payments & merchant journeys"],
  ["Product", "Finding friction worth fixing"],
  ["Operations", "Turning issues into better workflows"],
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="mx-auto w-full max-w-6xl scroll-mt-28 pt-28 sm:pt-36">
      <div className="grid items-center gap-10 md:grid-cols-[1.25fr_.75fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500"
          >
            Fintech · Product · Operations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl md:text-7xl"
          >
            I turn technical problems into clearer product experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-white/70"
          >
            I work close to merchants, APIs, data, and product teams — understanding where users get stuck and turning those problems into practical improvements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link href="#product-notes" className="group inline-flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-gray-950">
              See my thinking <BsArrowDown className="transition group-hover:translate-y-0.5" />
            </Link>
            <ResumeModal />
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aditya-chaturvedi-1751641aa/" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-3.5 dark:border-white/10"><BsLinkedin /></a>
            <a aria-label="GitHub" href="https://github.com/Adityachaturvedi2906" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 p-3.5 text-xl dark:border-white/10"><FaGithubSquare /></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.18 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-violet-200/70 via-transparent to-rose-200/70 blur-2xl dark:from-violet-900/30 dark:to-rose-900/20" />
            <Image src="/demo2.jpg" alt="Aditya Chaturvedi" width="280" height="280" priority className="relative h-56 w-56 rounded-[2rem] object-cover shadow-xl sm:h-64 sm:w-64" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.34 } } }}
        className="mt-12 grid gap-3 sm:grid-cols-3"
      >
        {highlights.map(([title, text]) => (
          <motion.div
            key={title}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p className="text-sm font-semibold">{title}</p>
            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-white/55">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
