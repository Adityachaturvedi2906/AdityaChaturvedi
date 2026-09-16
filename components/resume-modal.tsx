"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiDownload, HiX } from "react-icons/hi";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 font-medium shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
      >
        View resume
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) setOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Resume"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-950"
            >
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
                <div>
                  <p className="text-sm font-semibold">Resume</p>
                  <p className="text-xs text-gray-500">Aditya Chaturvedi</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
                  >
                    <HiDownload /> Download
                  </a>
                  <button
                    type="button"
                    aria-label="Close resume"
                    onClick={() => setOpen(false)}
                    className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-950 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <HiX className="text-xl" />
                  </button>
                </div>
              </div>
              <iframe title="Aditya Chaturvedi resume" src="/resume.pdf" className="min-h-0 flex-1 w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
