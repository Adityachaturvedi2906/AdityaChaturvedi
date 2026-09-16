"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Arcade() {
  const { ref } = useSectionInView("Arcade", 0.25);
  return (
    <motion.section ref={ref} id="arcade" className="mx-auto mb-20 w-full max-w-6xl scroll-mt-28 sm:mb-28" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }}><div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 text-white shadow-xl md:p-10"><div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">Featured product · Easebuzz</p><h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">Arcade</h2><p className="mt-3 max-w-2xl text-base leading-7 text-neutral-300">A guided workspace that makes payment gateway integrations easier to understand and test.</p></div><span className="w-fit rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">Internal product</span></div><div className="mt-8 grid gap-3 md:grid-cols-4">{[['Problem','Dense integration docs turned simple onboarding questions into support calls.'],['What I did','Mapped recurring merchant questions into a shorter guided API workflow and built the first version.'],['Outcome','Phase 1 is live internally and was validated with 5–6 merchants.'],['Next','Extend the workflow from mock API calls to real sandbox API execution.']].map(([title,text]) => <div key={title} className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5"><p className="text-xs font-medium uppercase tracking-wider text-neutral-400">{title}</p><p className="mt-2 text-sm leading-6 text-neutral-200">{text}</p></div>)}</div><div className="mt-6 flex flex-wrap gap-2">{['Payments','Merchant onboarding','API workflows','Problem discovery'].map((tag) => <span key={tag} className="rounded-full bg-neutral-800 px-3 py-1.5 text-xs text-neutral-300">{tag}</span>)}</div></div></motion.section>
  );
}
