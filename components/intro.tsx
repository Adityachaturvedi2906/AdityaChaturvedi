"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <div className="grid items-center gap-10 md:grid-cols-[1.12fr_.88fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/55">Fintech · Product · Operations</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">I turn complex product problems into clearer experiences.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">I work across payment integrations, merchant problems, product friction, and operations — with a technical background and a product-first way of thinking.</motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#product-notes" className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-950 transition hover:-translate-y-0.5">See product thinking <BsArrowDown className="opacity-60" /></Link>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/aditya-chaturvedi-1751641aa/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-3.5 text-white transition hover:bg-white/10"><BsLinkedin /></a>
              <a aria-label="GitHub" href="https://github.com/Adityachaturvedi2906" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-3.5 text-xl text-white transition hover:bg-white/10"><FaGithubSquare /></a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12, type: "spring", stiffness: 90 }} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2.2rem] border border-white/10" />
              <Image src="/demo2.jpg" alt="Aditya Chaturvedi" width="300" height="300" priority className="mx-auto h-60 w-60 rounded-[2rem] object-cover shadow-2xl sm:h-72 sm:w-72" />
              <motion.button type="button" onClick={() => setResumeOpen(true)} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.45 }} className="absolute -bottom-7 left-1/2 w-[calc(100%-1rem)] -translate-x-1/2 text-left sm:-left-8 sm:translate-x-0 sm:w-[22rem]">
                <span className="block rounded-2xl rounded-bl-md border border-white/10 bg-white px-4 py-3 text-gray-950 shadow-2xl transition hover:-translate-y-1">
                  <span className="flex items-center justify-between gap-3">
                    <span><span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">Message from Aditya</span><span className="mt-1 block text-sm font-medium">Hi — here’s my resume if you’d like the quick version.</span></span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white"><HiDownload /></span>
                  </span>
                </span>
                <span className="mt-2 ml-3 flex items-center gap-1.5 text-[11px] font-medium text-white/50"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> Click the message to open</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>{resumeOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false); }}><motion.div initial={{ opacity: 0, y: 24, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-black/10 px-5 py-3"><div><p className="text-sm font-semibold">Aditya Chaturvedi</p><p className="text-xs text-gray-500">Resume</p></div><div className="flex items-center gap-2"><a href="/resume.pdf" download className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium"><HiDownload /> Download</a><button aria-label="Close resume" onClick={() => setResumeOpen(false)} className="rounded-full border border-black/10 p-2"><BsX className="text-xl" /></button></div></div><iframe title="Aditya Chaturvedi resume" src="/resume.pdf" className="min-h-0 w-full flex-1" /></motion.div></motion.div>}</AnimatePresence>
    </>
  );
}
