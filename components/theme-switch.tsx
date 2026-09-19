"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label={"Switch to " + (theme === "light" ? "dark" : "light") + " mode"}
      title={"Switch to " + (theme === "light" ? "dark" : "light") + " mode"}
      className="fixed bottom-4 left-4 z-[9997] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-solid)] text-[var(--page-text)] shadow-xl backdrop-blur-xl transition hover:scale-105 active:scale-95 sm:bottom-5 sm:left-5"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}