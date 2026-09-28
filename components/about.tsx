"use client";

import { motion } from "framer-motion";
import { BsDatabase, BsPeople, BsTerminal } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

const strengths = [
  [BsTerminal, "Technical context", "APIs, payments, integrations, debugging and production workflows."],
  [BsPeople, "User context", "Merchant calls, requirements, walkthroughs and translating friction into clearer flows."],
  [BsDatabase, "Data context", "Transaction analysis, SQL and using operational signals to find recurring problems."],
];

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section ref={ref} id="about" className="mx-auto mb-16 w-full max-w-6xl scroll-mt-24 sm:mb-24 lg:mb-28" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <div className="rounded-[1.5rem] bg-[#11162a] p-6 text-white shadow-[0_25px_70px_rgba(17,22,42,0.12)] sm:rounded-[2rem] sm:p-9 dark:bg-white dark:text-[#11162a]">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b6afff] dark:text-[#6a58d9]">03 · About</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] sm:text-4xl">Technical enough to dig in. Product-minded enough to ask why.</h2>
          <p className="mt-4 text-sm leading-6 text-white/60 sm:mt-5 sm:leading-7 dark:text-[#5c6477]">My background is in software development, but my recent work has moved closer to the product itself. I spend time understanding merchant use cases, tracing payment and integration issues, working with data, and explaining technical decisions to non-technical stakeholders.</p>
        </div>
        <div className="grid gap-3">
          {strengths.map(([Icon, title, text]) => { const I = Icon as typeof BsTerminal; return <div key={title as string} className="rounded-[1.25rem] border border-black/[0.06] bg-white/70 p-4 shadow-sm sm:rounded-[1.5rem] sm:p-5 dark:border-white/10 dark:bg-white/[0.04]"><div className="flex items-start gap-3 sm:gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6a58d9] dark:bg-white/10 dark:text-[#b9b1ff]"><I /></span><div className="min-w-0"><h3 className="font-semibold">{title as string}</h3><p className="mt-1.5 text-sm leading-6 text-gray-500 dark:text-white/55">{text as string}</p></div></div></div>; })}
        </div>
      </div>
    </motion.section>
  );
}
