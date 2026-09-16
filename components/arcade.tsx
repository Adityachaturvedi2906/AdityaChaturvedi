"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const points = [
  ["Problem", "Integration documentation was dense and often turned simple onboarding questions into support calls."],
  ["What I did", "Mapped recurring merchant questions into a shorter, guided API workflow and built the first version."],
  ["Outcome", "Phase 1 is live internally and was validated with 5–6 merchants during onboarding and troubleshooting."],
  ["Next", "Extend the workflow from mock API calls to real sandbox API execution."],
];

export default function Arcade() {
  const { ref } = useSectionInView("Arcade", 0.25);

  return (
    <motion.section
      ref={ref}
      id="arcade"
      className="mx-auto w-full max-w-6xl scroll-mt-28 py-20 sm:py-28"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      <div className="rounded-3xl border border-neutral-200 bg-neutral-950 p-7 text-white shadow-xl md:p-11">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">Featured product · Easebuzz</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Arcade</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">A guided workspace that makes payment gateway integrations easier to understand and test.</p>
          </div>
          <span className="w-fit rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">Internal product</span>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {points.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5"
            >
              <p className="text-sm font-medium text-neutral-400">{title}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-200">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {["Payments", "Merchant onboarding", "API workflows", "Problem discovery"].map((tag) => (
            <span key={tag} className="rounded-full bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300">{tag}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
