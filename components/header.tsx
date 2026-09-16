"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = (name: (typeof links)[number]["name"]) => { setActiveSection(name); setTimeOfLastClick(Date.now()); setMobileOpen(false); };
  return (
    <header className="relative z-[999]">
      <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="fixed left-1/2 top-3 h-14 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/85 shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/80 sm:top-6 sm:h-12 sm:w-fit sm:rounded-full" />
      <nav className="fixed left-1/2 top-3 z-[1000] flex w-[calc(100%-1.5rem)] -translate-x-1/2 items-center justify-between px-2 sm:top-6 sm:w-auto sm:px-1">
        <Link href="#home" onClick={() => navigate("Home")} className="px-3 text-sm font-semibold sm:hidden">AC</Link>
        <ul className="hidden items-center gap-1 text-sm font-medium text-gray-500 sm:flex">{links.map((link) => <li key={link.hash}><Link href={link.hash} onClick={() => navigate(link.name)} className={clsx("relative block rounded-full px-3.5 py-2.5 transition", activeSection === link.name ? "text-gray-950 dark:text-white" : "hover:text-gray-950 dark:hover:text-white")}>{activeSection === link.name && <motion.span layoutId="activeSection" className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}{link.name}</Link></li>)}</ul>
        <button aria-label="Toggle navigation" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-2 text-2xl sm:hidden">{mobileOpen ? <BsX /> : <BsList />}</button>
      </nav>
      {mobileOpen && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="fixed left-3 right-3 top-[4.5rem] z-[1000] rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/95 sm:hidden">{links.map((link) => <Link key={link.hash} href={link.hash} onClick={() => navigate(link.name)} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/5">{link.name}</Link>)}</motion.div>}
    </header>
  );
}
