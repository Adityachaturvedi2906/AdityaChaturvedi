import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto mb-10 w-full max-w-6xl border-t border-black/[0.06] px-2 pt-6 text-gray-400 dark:border-white/10">
      <div className="flex flex-col gap-2 text-center text-[11px] sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <small>© {new Date().getFullYear()} Aditya Chaturvedi · Built with <FaHeart className="mx-1 inline-block text-[9px]" /> Next.js</small>
        <small>Fintech · Product · Operations</small>
      </div>
    </footer>
  );
}
