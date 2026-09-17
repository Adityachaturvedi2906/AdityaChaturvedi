"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsList, BsX, BsArrowUpRight } from "react-icons/bs";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileOpen(false);
  };

  return (
    <header className="relative z-[9999]">
      <nav className="fixed left-1/2 top-3 flex w-[calc(100%-1.25rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-black/[0.07] bg-white/75 px-2 py-2 shadow-[0_10px_35px_rgba(35,38,55,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#111218]/80 dark:shadow-black/30 sm:top-5">
        <Link href="#home" onClick={() => navigate("Home")} className="flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#11162a] text-[10px] font-bold text-white dark:bg-white dark:text-[#11162a]">AC</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">Aditya Chaturvedi</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.hash}>
              <Link href={link.hash} onClick={() => navigate(link.name)} className={clsx("relative block whitespace-nowrap rounded-full px-3.5 py-2 text-[12px] font-medium transition", activeSection === link.name ? "text-[#101426] dark:text-[#101426]" : "text-gray-500 hover:text-[#101426] dark:text-white/65 dark:hover:text-white")}>
                {activeSection === link.name && <motion.span layoutId="activeSection" className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm ring-1 ring-black/[0.05] dark:bg-white" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                {link.name === "Product Teardown" ? "Teardown" : link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#contact" onClick={() => navigate("Contact")} className="hidden items-center gap-1.5 rounded-full bg-[#11162a] px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 md:flex dark:bg-white dark:text-[#11162a]">
          Let&apos;s connect <BsArrowUpRight />
        </Link>
        <button aria-label="Toggle navigation" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-2 text-2xl md:hidden dark:text-white">{mobileOpen ? <BsX /> : <BsList />}</button>
      </nav>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="fixed left-3 right-3 top-[4.5rem] z-[9998] rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111218]/95 md:hidden">
          {links.map((link) => <Link key={link.hash} href={link.hash} onClick={() => navigate(link.name)} className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/10">{link.name}</Link>)}
          <Link href="#contact" onClick={() => navigate("Contact")} className="mt-1 block rounded-xl bg-[#11162a] px-4 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-[#11162a]">Let&apos;s connect</Link>
        </motion.div>
      )}
    </header>
  );
}
