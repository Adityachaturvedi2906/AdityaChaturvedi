"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLightbulb, BsShieldCheck, BsPerson, BsCreditCard, BsGift, BsGraphUpArrow } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

const stages = [
  { number: "01", title: "Sign Up", sub: "Get users to try POP", icon: BsPerson, note: "Keep the first action simple and make the value proposition obvious." },
  { number: "02", title: "Verify", sub: "Remove KYC friction", icon: BsShieldCheck, note: "Make the verification state understandable: what is happening, why, and what comes next." },
  { number: "03", title: "First Payment", sub: "Drive first transaction", icon: BsCreditCard, note: "The first successful payment is a critical activation moment worth measuring separately." },
  { number: "04", title: "First Reward", sub: "Create repeat behaviour", icon: BsGift, note: "Connect the reward to the next useful action instead of treating it as an isolated incentive." },
];

const observations = [
  "The verification step creates a 24–48 hour gap before a new user can experience the core value.",
  "A waiting period can create drop-off because the user has intent but no immediate product action.",
  "The current message explains the blocker, but gives limited visibility into progress or next steps.",
  "First-time users also have to understand several concepts — UPI, POPcoins, rewards and the broader product — early in the journey.",
];

const tests = [
  "Can users explore meaningful parts of the app before full KYC?",
  "Can verification time be reduced through available verification methods?",
  "Can the product show a clearer status, expected timeline and next action?",
  "Can reward value be made tangible earlier to strengthen activation intent?",
];

export default function ProductNotes() {
  const { ref } = useSectionInView("Product Teardown", 0.25);
  const [activeStage, setActiveStage] = useState(0);

  return (
    <motion.section ref={ref} id="product-notes" className="mx-auto mb-20 w-full max-w-6xl scroll-mt-28 sm:mb-32" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }}>
      <div className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white/75 p-5 shadow-[0_25px_80px_rgba(50,55,90,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6555d9]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eeeaff] dark:bg-white/10">01</span> Product teardown</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#101426] sm:text-4xl dark:text-white"><span className="text-[#7656df]">POP</span> onboarding teardown</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667087] sm:text-base dark:text-white/60">A quick analysis of POP&apos;s onboarding and KYC flow — what creates friction, what I&apos;d investigate, and how I&apos;d think about the path from install to first reward.</p>
          </div>
          <span className="rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-500 dark:border-white/10 dark:bg-white/5">Portfolio case study</span>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[210px_270px_1fr]">
          <div className="space-y-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return <button key={stage.number} type="button" onClick={() => setActiveStage(index)} className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${activeStage === index ? "border-[#ddd5ff] bg-[#f1edff] shadow-sm dark:border-white/10 dark:bg-white/[0.07]" : "border-transparent hover:bg-gray-50 dark:hover:bg-white/[0.04]"}`}><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${activeStage === index ? "bg-[#7046e8] text-white" : "bg-[#f0f1f5] text-gray-500 dark:bg-white/10 dark:text-white/50"}`}>{stage.number}</span><span><span className="block text-sm font-semibold text-[#1b2238] dark:text-white">{stage.title}</span><span className="block text-[11px] text-[#778096] dark:text-white/45">{stage.sub}</span></span></button>;
            })}
            <div className="mt-3 rounded-2xl border border-black/[0.05] bg-[#f8f7fc] p-4 dark:border-white/10 dark:bg-white/[0.03]"><p className="text-[11px] font-semibold uppercase tracking-wider text-[#876ce5]">My hypothesis</p><p className="mt-2 text-xs leading-5 text-[#626c82] dark:text-white/55">The faster a new user reaches meaningful product value, the more opportunities there are to build repeat behaviour.</p></div>
          </div>

          <div className="flex items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-[#f1e9e3] via-[#f6f5f6] to-[#e9ecfb] p-4 dark:from-[#1c1717] dark:via-[#15161c] dark:to-[#171c31]">
            <div className="relative h-[400px] w-[205px] overflow-hidden rounded-[2rem] border-[5px] border-[#17181c] bg-[#08090b] shadow-[0_25px_45px_rgba(20,20,30,0.25)]">
              <div className="absolute left-1/2 top-1.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(113,66,42,.42),transparent_30%),linear-gradient(#17100d,#08090b_54%)]" />
              <div className="absolute left-1/2 top-12 -translate-x-1/2 text-4xl font-black tracking-[-0.12em] text-white/80">pop</div>
              <div className="absolute left-1/2 top-[106px] -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[9px] text-white/60">9:41</div>
              <div className="absolute bottom-0 left-0 right-0 rounded-t-[1.4rem] border border-white/10 bg-[#171717]/95 p-4 text-center backdrop-blur-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6638e8] text-xl text-white shadow-[0_0_30px_rgba(113,67,230,.45)]">✦</div>
                <h3 className="mt-4 text-[15px] font-bold leading-5 text-white">We need more details<br />to verify your identity</h3>
                <p className="mt-3 text-[9px] leading-4 text-white/65">Our team will call within 24–48 hours.<br />You can also reach us at support@popclub.co</p>
                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-left"><span className="block text-[8px] text-white/45">Email address</span><span className="text-[10px] font-medium text-white">support@popclub.co</span></div>
                <div className="mt-3 rounded-full bg-white py-2 text-[11px] font-semibold text-black">Close app</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/[0.05] bg-[#fbfbfd] p-5 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#edf0ff] text-[#516de0]"><BsLightbulb /></span><h3 className="font-semibold">What I noticed</h3></div><ul className="mt-4 space-y-3">{observations.map((item, i) => <li key={item} className="flex gap-2 text-xs leading-5 text-[#667087] dark:text-white/60"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7046e8]" />{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-black/[0.05] bg-[#fbfbfd] p-5 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#fff3df] text-[#e28b22]">💡</span><h3 className="font-semibold">What I&apos;d test</h3></div><ul className="mt-4 space-y-3">{tests.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-[#667087] dark:text-white/60"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7046e8]" />{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-black/[0.05] bg-[#f7f5ff] p-5 sm:col-span-2 dark:border-white/10 dark:bg-[#6551d51a]"><div className="flex items-center gap-2"><BsGraphUpArrow className="text-[#6c4ee6]" /><h3 className="font-semibold">How I&apos;d measure success</h3></div><div className="mt-3 grid gap-2 text-xs text-[#626c82] sm:grid-cols-3 dark:text-white/60"><span>Signup → first transaction</span><span>Verification → activation</span><span>D7 / D30 repeat behaviour</span></div></div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#e1dbff] bg-[#f3efff] p-5 dark:border-white/10 dark:bg-[#6d5be01c]"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#795fe0]">Key question</p><p className="mt-2 max-w-4xl text-base font-semibold leading-6 tracking-tight text-[#5734c9] sm:text-lg dark:text-[#c4b9ff]">How might we get a new user from install → first successful transaction → first reward with less cognitive friction?</p></div>

        <div className="mt-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between"><div><h3 className="text-xl font-semibold tracking-tight">If I owned this funnel...</h3><p className="text-xs text-gray-500 dark:text-white/45">Click a stage to see how I&apos;d approach it.</p></div><BsArrowRight className="hidden text-gray-400 sm:block" /></div>
          <div className="mt-4 grid gap-2 md:grid-cols-4">
            {stages.map((stage, index) => { const Icon = stage.icon; return <button key={stage.number} type="button" onClick={() => setActiveStage(index)} className={`rounded-2xl border p-4 text-left transition ${activeStage === index ? "border-[#d9d0ff] bg-[#f4f0ff] shadow-sm dark:border-white/10 dark:bg-white/[0.07]" : "border-black/[0.06] bg-white/50 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/[0.03]"}`}><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eeeaff] text-[#7046e8] dark:bg-white/10"><Icon /></span><div><p className="text-sm font-semibold">{stage.title}</p><p className="text-[10px] text-gray-500 dark:text-white/45">{stage.sub}</p></div></div></button>; })}
          </div>
          <motion.div key={activeStage} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-2xl bg-[#11162a] px-5 py-4 text-sm leading-6 text-white/80 shadow-xl dark:bg-white dark:text-[#11162a]">{stages[activeStage].note}</motion.div>
        </div>
      </div>
    </motion.section>
  );
}
