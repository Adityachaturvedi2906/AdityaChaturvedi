"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { HiMenu, HiX } from "react-icons/hi";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileOpen(false);
  };

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-3 h-14 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/85 shadow-lg shadow-black/[0.04] backdrop-blur-xl sm:top-6 sm:h-[3.5rem] sm:w-fit sm:min-w-[36rem] sm:rounded-full dark:border-white/10 dark:bg-gray-950/80"
        initial={{ y: -80, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.45 }}
      />

      <nav className="fixed left-1/2 top-3 flex h-14 w-[calc(100%-1.5rem)] -translate-x-1/2 items-center justify-between px-3 sm:top-6 sm:h-[3.5rem] sm:w-fit sm:min-w-[36rem] sm:justify-center sm:px-1">
        <Link href="#home" onClick={() => handleClick("Home")} className="px-3 text-sm font-semibold tracking-tight sm:hidden">
          AC
        </Link>

        <ul className="hidden items-center gap-1 text-[0.82rem] font-medium text-gray-500 sm:flex">
          {links.map((link, index) => (
            <motion.li key={link.hash} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.04 }} className="relative">
              <Link
                className={clsx(
                  "relative flex items-center justify-center whitespace-nowrap rounded-full px-3 py-2.5 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-100",
                  activeSection === link.name && "text-gray-950 dark:text-gray-100"
                )}
                href={link.hash}
                onClick={() => handleClick(link.name)}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span layoutId="activeSection" className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-full p-2 text-xl sm:hidden"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="fixed left-3 right-3 top-[4.5rem] z-[998] overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/95 sm:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                onClick={() => handleClick(link.name)}
                className={clsx(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition",
                  activeSection === link.name ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
