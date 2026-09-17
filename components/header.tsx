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
  const navigate = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileOpen(false);
  };
  return (
    <header className="relative z-[9999]">
      <nav className="fixed left-1/2 top-4 z-[9999] flex w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 items-center justify-between rounded-full border border-white/15 bg-gray-950/90 px-2 py-2 text-white shadow-2xl backdrop-blur-2xl sm:top-5">
        <Link href="#home" onClick={() => navigate("Home")} className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold text-gray-950">AC</span>
          <span className="hidden sm:inline">Aditya</span>
        </Link>
        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <li key={link.hash}>
              <Link href={link.hash} onClick={() => navigate(link.name)} className={clsx("relative block whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors", activeSection === link.name ? "text-gray-950" : "text-white/70 hover:text-white")}>
                {activeSection === link.name && <motion.span layoutId="activeSection" className="absolute inset-0 -z-10 rounded-full bg-white" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                {link.name === "Product Teardown" ? "Teardown" : link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button aria-label="Toggle navigation" onClick={() => setMobileOpen((open) => !open)} className="rounded-full p-2 text-2xl md:hidden">{mobileOpen ? <BsX /> : <BsList />}</button>
      </nav>
      {mobileOpen && <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="fixed left-3 right-3 top-[4.5rem] z-[9998] rounded-2xl border border-white/10 bg-gray-950/95 p-2 text-white shadow-2xl backdrop-blur-2xl md:hidden">
        {links.map((link) => <Link key={link.hash} href={link.hash} onClick={() => navigate(link.name)} className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">{link.name}</Link>)}
      </motion.div>}
    </header>
  );
}
