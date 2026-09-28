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
      <section ref={ref} id="home" className="mx-auto mb-16 w-full max-w-6xl scroll-mt-24 pt-24 sm:mb-20 sm:pt-28 lg:mb-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.02fr_.98fr] md:gap-6 lg:gap-10">
          <div className="relative z-10 text-center md:text-left">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mx-auto mb-5 inline-flex rounded-full border border-[#d9d5ff] bg-white/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5148a8] shadow-sm sm:text-[11px] sm:tracking-[0.18em] md:mx-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#b9b1ff]">
              Fintech · Product · Operations
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="mx-auto max-w-3xl text-balance text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#0d1326] sm:text-5xl md:mx-0 md:text-[4.2rem] lg:text-[4.65rem] dark:text-white">
              I turn complex product problems into <span className="bg-gradient-to-r from-[#4c72ed] via-[#7958ef] to-[#d05ad8] bg-clip-text text-transparent">clearer experiences.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#56627c] sm:mt-6 sm:text-base sm:leading-7 md:mx-0 md:text-lg dark:text-white/70">
              I work at the intersection of technology and business operations — helping merchants integrate payments, investigating product friction, and turning recurring problems into practical solutions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center md:mx-0">
              <Link href="#arcade" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#11162a] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#11162a]/10 transition hover:-translate-y-0.5 sm:w-auto dark:bg-white dark:text-[#11162a]">
                See my work <BsArrowDown className="transition group-hover:translate-y-0.5" />
              </Link>
              <div className="flex w-full gap-2.5 sm:w-auto">
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aditya-chaturvedi2906/" target="_blank" rel="noreferrer" className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white/75 px-3 py-3.5 text-sm font-medium text-[#25304a] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:flex-none sm:px-4 dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                  <BsLinkedin className="text-base" /> LinkedIn
                </a>
                <a aria-label="GitHub" href="https://github.com/Adityachaturvedri2906" target="_blank" rel="noreferrer" className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white/75 px-3 py-3.5 text-sm font-medium text-[#25304a] shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:flex-none sm:px-4 dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                  <FaGithubSquare className="text-base" /> GitHub
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }} className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-3 md:mx-0">
              {stats.map(([value, label]) => (
                <div key={value} className="flex items-start gap-3 rounded-2xl border border-black/[0.05] bg-white/55 p-3.5 text-left dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eeeaff] text-xs font-bold text-[#684fe5] dark:bg-[#6b5bd61c] dark:text-[#b9b1ff]">✦</span>
                  <div><p className="text-sm font-semibold text-[#182039] dark:text-white">{value}</p><p className="mt-0.5 text-[11px] leading-4 text-[#69748b] dark:text-white/50">{label}</p></div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.18, type: "spring", stiffness: 90 }} className="relative flex min-h-[350px] items-center justify-center md:min-h-[430px] md:justify-end">
            <div className="absolute right-1/2 top-1/2 h-[260px] w-[260px] translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#eee8ff] via-[#f8f3ff] to-[#e6edff] blur-[2px] sm:h-[330px] sm:w-[330px] md:right-0 md:h-[350px] md:w-[350px] md:translate-x-0 dark:from-[#2c2750] dark:via-[#171a2a] dark:to-[#18243e]" />
            <button type="button" onClick={() => setResumeOpen(true)} aria-label="Open resume" className="group relative h-[330px] w-full max-w-[420px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6554e8]/50 sm:h-[380px]">
              <span className="absolute left-1/2 top-6 h-[210px] w-[min(295px,78vw)] -translate-x-1/2 rotate-[3deg] rounded-xl border border-black/[0.06] bg-white p-5 text-left shadow-[0_25px_50px_rgba(48,50,78,0.18)] transition duration-500 group-hover:-translate-y-4 group-hover:rotate-[1deg] sm:top-8 sm:h-[245px] sm:w-[295px] sm:p-6">
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#8b8e98]">Resume</span>
                <span className="mt-4 block text-2xl font-semibold leading-tight tracking-tight text-[#11162a]">Aditya<br />Chaturvedi</span>
                <span className="mt-3 block text-xs leading-5 text-[#6d7483]">Product · Operations · Fintech</span>
                <span className="absolute bottom-6 left-6 right-6 h-px bg-gray-200" />
                <span className="absolute bottom-2 right-6 text-[9px] text-gray-400">01</span>
              </span>
              <span className="absolute bottom-8 left-1/2 h-[195px] w-[min(370px,92vw)] -translate-x-1/2 overflow-hidden rounded-[22px] border border-black/[0.09] bg-[#eee9df] shadow-[0_28px_55px_rgba(48,50,78,0.18)] transition duration-500 group-hover:translate-y-1 sm:bottom-12 sm:h-[225px]">
                <span className="absolute inset-x-0 top-0 h-1/2 bg-white/85 [clip-path:polygon(0_0,50%_100%,100%_0)]" />
                <span className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-white/80 [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
                <span className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-white/70 [clip-path:polygon(0_0,100%_100%,0_100%)]" />
                <span className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#11162a] px-4 py-2.5 text-[10px] font-semibold text-white shadow-xl transition group-hover:scale-105 sm:bottom-5 sm:px-5 sm:text-[11px] dark:bg-white dark:text-[#11162a]">
                  Open resume <BsArrowUpRight />
                </span>
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-[#69748b] dark:text-white/60 sm:text-xs">Tap the resume to open it</span>
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#080a11]/75 p-2 backdrop-blur-md sm:p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false); }}>
            <motion.div initial={{ opacity: 0, y: 35, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="relative flex h-[96dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-[92vh] sm:rounded-3xl">
              <div className="flex shrink-0 items-center justify-between gap-2 border-b border-black/10 px-3 py-2.5 sm:px-5 sm:py-3">
                <div className="min-w-0"><p className="truncate text-sm font-semibold text-[#11162a]">Aditya Chaturvedi</p><p className="text-xs text-gray-500">Resume</p></div>
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                  <a href="/resume.pdf" download className="flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-2 text-xs font-medium text-[#11162a] sm:px-4 sm:text-sm"><HiDownload /> <span>Download</span></a>
                  <button aria-label="Close resume" onClick={() => setResumeOpen(false)} className="rounded-full border border-black/10 p-2 text-[#11162a]"><BsX className="text-xl" /></button>
                </div>
              </div>
              <iframe title="Aditya Chaturvedri resume" src="/resume.pdf" className="min-h-0 w-full flex-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
