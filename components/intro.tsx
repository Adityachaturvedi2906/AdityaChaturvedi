"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDown, BsLinkedin, BsX } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

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
      <section ref={ref} id="home" className="mx-auto mb-16 w-full max-w-6xl scroll-mt-28 pt-28 sm:pt-36">
        <div className="grid min-h-[570px] items-center gap-14 md:grid-cols-[1.08fr_.92fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-white/55">Fintech · Product · Operations</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-gray-950 dark:text-white sm:text-6xl md:text-7xl">I turn complex product problems into clearer experiences.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-white/70 sm:text-lg">I work across payment integrations, merchant problems, product friction, and operations — with a technical background and a product-first way of thinking.</motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#product-notes" className="flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-gray-950">See product thinking <BsArrowDown className="opacity-60" /></Link>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aditya-chaturvedri-1751641aa/" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white/60 p-3.5 text-gray-800 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"><BsLinkedin /></a>
              <a aria-label="GitHub" href="https://github.com/Adityachaturvedi2906" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white/60 p-3.5 text-xl text-gray-800 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"><FaGithubSquare /></a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.18, type: "spring", stiffness: 90 }} className="flex items-center justify-center md:justify-end">
            <button type="button" onClick={() => setResumeOpen(true)} aria-label="Open resume" className="group relative h-[380px] w-[430px] max-w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950/50 dark:focus-visible:ring-white/50">
              <span className="absolute left-1/2 top-5 h-[215px] w-[290px] -translate-x-1/2 rotate-[-4deg] rounded-lg border border-gray-200 bg-white p-6 text-left shadow-2xl transition duration-500 group-hover:-translate-y-6 group-hover:rotate-[-2deg]">
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">Resume</span>
                <span className="mt-3 block text-2xl font-semibold tracking-tight text-gray-900">Aditya<br />Chaturvedi</span>
                <span className="mt-3 block text-xs leading-5 text-gray-500">Fintech · Product · Operations</span>
                <span className="absolute bottom-5 left-6 right-6 h-px bg-gray-200" />
                <span className="absolute bottom-2 right-6 text-[9px] text-gray-400">01</span>
              </span>
              <span className="absolute bottom-12 left-1/2 h-[215px] w-[360px] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-300 bg-[#e7e7e5] shadow-2xl transition duration-500 group-hover:translate-y-1">
                <span className="absolute inset-0 bg-[linear-gradient(145deg,transparent_49%,rgba(0,0,0,.08)_50%,transparent_51%)]" />
                <span className="absolute left-0 top-0 h-0 w-0 border-l-[180px] border-r-[180px] border-t-[108px] border-l-transparent border-r-transparent border-t-white/95" />
                <span className="absolute bottom-0 left-0 h-0 w-0 border-b-[125px] border-r-[180px] border-b-white/85 border-r-transparent" />
                <span className="absolute bottom-0 right-0 h-0 w-0 border-b-[125px] border-l-[180px] border-b-white/75 border-l-transparent" />
                <span className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gray-950 px-5 py-2.5 text-[11px] font-semibold text-white shadow-lg transition group-hover:scale-105">Open resume</span>
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-400 dark:text-white/45">Click the envelope to open</span>
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>{resumeOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false); }}><motion.div initial={{ opacity: 0, y: 35, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.96 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-black/10 px-5 py-3"><div><p className="text-sm font-semibold">Aditya Chaturvedi</p><p className="text-xs text-gray-500">Resume</p></div><div className="flex items-center gap-2"><a href="/resume.pdf" download className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium"><HiDownload /> Download</a><button aria-label="Close resume" onClick={() => setResumeOpen(false)} className="rounded-full border border-black/10 p-2"><BsX className="text-xl" /></button></div></div><iframe title="Aditya Chaturvedi resume" src="/resume.pdf" className="min-h-0 w-full flex-1" /></motion.div></motion.div>}</AnimatePresence>
    </>
  );
}
