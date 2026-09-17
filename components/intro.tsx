"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDown, BsArrowUpRight, BsLinkedin, BsX } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

const stats = [
  ["3+ Years", "Product & tech experience"],
  ["Fintech", "Payments · integrations · ops"],
  ["Builder", "Arcade · product thinking"],
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResumeOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section ref={ref} id="home" className="mx-auto mb-16 w-full max-w-6xl scroll-mt-28 pt-20 sm:pt-28">
        <div className="grid min-h-[590px] items-center gap-10 md:grid-cols-[1.02fr_.98fr] md:gap-6">
          <div className="relative z-10">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-5 inline-flex rounded-full border border-[#d9d5ff] bg-white/65 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5148a8] shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-[#b9b1ff]">
              Fintech · Product · Operations
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="max-w-3xl text-balance text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0d1326] sm:text-6xl md:text-[4.65rem]">
              I turn complex product problems into <span className="bg-gradient-to-r from-[#4c72ed] via-[#7958ef] to-[#d05ad8] bg-clip-text text-transparent">clearer experiences.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="mt-6 max-w-2xl text-[15px] leading-7 text-[#56627c] sm:text-lg dark:text-white/65">
              I work at the intersection of technology and business operations — helping merchants integrate payments, investigating product friction, and turning recurring problems into practical solutions.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#product-notes" className="group flex items-center gap-2 rounded-full bg-[#11162a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#11162a]/10 transition hover:-translate-y-0.5 dark:bg-white dark:text-[#11162a]">
                See my work <BsArrowDown className="transition group-hover:translate-y-0.5" />
              </Link>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aditya-chaturvedri-1751641aa/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/75 px-4 py-3.5 text-sm font-medium text-[#25304a] shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                <BsLinkedin className="text-base" /> LinkedIn
              </a>
              <a aria-label="GitHub" href="https://github.com/Adityachaturvedi2906" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/75 px-4 py-3.5 text-sm font-medium text-[#25304a] shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                <FaGithubSquare className="text-base" /> GitHub
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={value} className="flex items-start gap-3 rounded-2xl border border-black/[0.05] bg-white/55 p-3.5 dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eeeaff] text-xs font-bold text-[#684fe5] dark:bg-[#6b5bd61c] dark:text-[#b9b1ff]">✦</span>
                  <div><p className="text-sm font-semibold text-[#182039] dark:text-white">{value}</p><p className="mt-0.5 text-[11px] leading-4 text-[#69748b] dark:text-white/50">{label}</p></div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.18, type: "spring", stiffness: 90 }} className="relative flex min-h-[430px] items-center justify-center md:justify-end">
            <div className="absolute right-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#eee8ff] via-[#f8f3ff] to-[#e6edff] blur-[2px] dark:from-[#2c2750] dark:via-[#171a2a] dark:to-[#18243e]" />
            <button type="button" onClick={() => setResumeOpen(true)} aria-label="Open resume" className="group relative h-[400px] w-[440px] max-w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6554e8]/50">
              <span className="absolute left-1/2 top-8 h-[245px] w-[295px] -translate-x-1/2 rotate-[3deg] rounded-xl border border-black/[0.06] bg-white p-6 text-left shadow-[0_25px_50px_rgba(48,50,78,0.18)] transition duration-500 group-hover:-translate-y-5 group-hover:rotate-[1deg]">
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#8b8e98]">Resume</span>
                <span className="mt-4 block text-2xl font-semibold leading-tight tracking-tight text-[#11162a]">Aditya<br />Chaturvedi</span>
                <span className="mt-3 block text-xs leading-5 text-[#6d7483]">Product · Operations · Fintech</span>
                <span className="absolute bottom-6 left-6 right-6 h-px bg-gray-200" />
                <span className="absolute bottom-2 right-6 text-[9px] text-gray-400">01</span>
              </span>
              <span className="absolute bottom-12 left-1/2 h-[225px] w-[370px] -translate-x-1/2 overflow-hidden rounded-[22px] border border-black/[0.09] bg-[#eee9df] shadow-[0_28px_55px_rgba(48,50,78,0.18)] transition duration-500 group-hover:translate-y-1">
                <span className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-black/[0.04]" />
                <span className="absolute left-0 top-0 h-0 w-0 border-l-[185px] border-r-[185px] border-t-[112px] border-l-transparent border-r-transparent border-t-white/95" />
                <span className="absolute bottom-0 left-0 h-0 w-0 border-b-[135px] border-r-[190px] border-b-white/90 border-r-transparent" />
                <span className="absolute bottom-0 right-0 h-0 w-0 border-b-[135px] border-l-[190px] border-b-white/80 border-l-transparent" />
                <span className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#11162a] px-5 py-2.5 text-[11px] font-semibold text-white shadow-xl transition group-hover:scale-105 dark:bg-white dark:text-[#11162a]">Open resume <BsArrowUpRight /></span>
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-[#858b9b] dark:text-white/45">Click the envelope to open my resume</span>
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#080a11]/75 p-3 backdrop-blur-md sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false); }}>
            <motion.div initial={{ opacity: 0, y: 35, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 sm:px-5">
                <div><p className="text-sm font-semibold text-[#11162a]">Aditya Chaturvedi</p><p className="text-xs text-gray-500">Resume</p></div>
                <div className="flex items-center gap-2"><a href="/resume.pdf" download className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[#11162a]"><HiDownload /> Download</a><button aria-label="Close resume" onClick={() => setResumeOpen(false)} className="rounded-full border border-black/10 p-2 text-[#11162a]"><BsX className="text-xl" /></button></div>
              </div>
              <iframe title="Aditya Chaturvedi resume" src="/resume.pdf" className="min-h-0 w-full flex-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
