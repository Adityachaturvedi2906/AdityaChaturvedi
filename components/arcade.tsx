"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsCheck2, BsLightningCharge, BsPeople, BsSearch, BsTools } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

const cards = [
  ["Problem", "Dense integration docs turned simple onboarding questions into support calls."],
  ["What I did", "Mapped recurring merchant questions into a shorter guided API workflow and built the first version."],
  ["Validation", "Phase 1 is live internally and was validated with 5–6 merchants."],
  ["Next", "Extend the workflow from mock API calls to real sandbox API execution."],
];

export default function Arcade() {
  const { ref } = useSectionInView("Arcade", 0.25);

  return (
    <motion.section ref={ref} id="arcade" className="mx-auto mb-20 w-full max-w-6xl scroll-mt-28 sm:mb-32" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }}>
      <div className="overflow-hidden rounded-[2rem] border border-[#dfe1ea] bg-[#11162a] text-white shadow-[0_30px_90px_rgba(17,22,42,0.18)] dark:border-white/10 dark:bg-[#111218]">
        <div className="relative p-6 sm:p-9 lg:p-10">
          <div className="absolute right-[-5rem] top-[-7rem] h-64 w-64 rounded-full bg-[#6d5ce7]/20 blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a9a1ff]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">02</span> Featured product · Easebuzz</div>
              <div className="mt-4 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#11162a] shadow-lg"><BsLightningCharge className="text-xl" /></span><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Arcade</h2></div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">A guided workspace that makes payment gateway integrations easier to understand and test — built from recurring merchant friction I saw firsthand.</p>
            </div>
            <a href="https://arcade.easebuzz.in" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/15">View Arcade <BsArrowUpRight /></a>
          </div>

          <div className="relative mt-8 grid gap-3 md:grid-cols-4">
            {cards.map(([title, text], index) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">{title}</p><span className="text-[10px] text-white/30">0{index + 1}</span></div><p className="mt-3 text-sm leading-6 text-white/75">{text}</p></div>)}
          </div>

          <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
            {[[BsSearch, "Problem discovery", "Repeated questions became product signals."], [BsPeople, "Merchant feedback", "The first workflow was tested with real merchants."], [BsTools, "Product execution", "From idea → usable internal tool → next iteration."]].map(([Icon, title, text]) => { const I = Icon as typeof BsSearch; return <div key={title as string} className="flex gap-3 rounded-2xl border border-white/10 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#b9b1ff]"><I /></span><div><p className="text-sm font-semibold">{title as string}</p><p className="mt-1 text-xs leading-5 text-white/45">{text as string}</p></div><BsCheck2 className="ml-auto mt-1 text-white/25" /></div>; })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
