"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLightbulb, BsShieldCheck, BsPerson, BsCreditCard, BsGift, BsGraphUpArrow } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

const stages = [
  { number: "01", title: "Sign Up", sub: "Get users to try POP", icon: BsPerson, note: "Keep the first action simple and make the value proposition obvious." },
  { number: "02", title: "Verify", sub: "Identity verification", icon: BsShieldCheck, note: "Make the verification state understandable: what is happening, why, and what comes next." },
  { number: "03", title: "First Payment", sub: "Drive first transaction", icon: BsCreditCard, note: "The first successful payment is an activation moment worth measuring separately." },
  { number: "04", title: "First Reward", sub: "Create repeat behaviour", icon: BsGift, note: "Connect the reward to the next useful action instead of treating it as an isolated incentive." },
];

const observations = [
  "I reached the identity-verification step after signing up.",
  "The screen said that more details were needed to verify my identity.",
  "I was told the team would call within 24–48 hours, or I could contact support by email.",
  "At that point, there was no visible alternative verification path or option to continue into the product.",
];

const tests = [
  "Can users see a clear verification status and expected next step?",
  "Is there another verification route available for users who cannot complete this path?",
  "Can users understand what they can do while verification is pending?",
  "Can the product reduce the gap between signup intent and first meaningful action?",
];

export default function ProductNotes() {
  const { ref } = useSectionInView("Product Teardown", 0.25);
  const [activeStage, setActiveStage] = useState(1);

  return (
    <motion.section ref={ref} id="product-notes" className="mx-auto mb-20 w-full max-w-6xl scroll-mt-28 sm:mb-32" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>
      <div className="surface overflow-hidden rounded-[2rem] border p-4 shadow-[0_25px_80px_rgba(50,55,90,0.08)] backdrop-blur-xl sm:p-7 lg:p-10 dark:shadow-black/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="accent flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-soft)]">01</span> Product teardown</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">POP onboarding: a real friction point</h2>
            <p className="muted mt-3 max-w-2xl text-sm leading-6 sm:text-base">I went through POP&apos;s onboarding myself. This is the point where my journey stopped — and the product question I would investigate from there.</p>
          </div>
          <span className="surface-solid w-fit rounded-full border px-3 py-1.5 text-[11px] font-semibold muted">Observed firsthand</span>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,220px)_minmax(220px,300px)_minmax(0,1fr)]">
          <div className="order-2 space-y-2 lg:order-1">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <button key={stage.number} type="button" onClick={() => setActiveStage(index)} className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${activeStage === index ? "border-[#d9d0ff] bg-[var(--accent-soft)]" : "border-transparent hover:bg-[var(--surface-soft)]"}`}>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${activeStage === index ? "bg-[#7046e8] text-white" : "bg-[var(--surface-soft)] muted"}`}>{stage.number}</span>
                  <span><span className="block text-sm font-semibold">{stage.title}</span><span className="muted block text-[11px]">{stage.sub}</span></span>
                </button>
              );
            })}
          </div>

          <div className="order-1 flex items-center justify-center rounded-[1.7rem] border border-[var(--border)] bg-[var(--surface-soft)] p-3 sm:p-5 lg:order-2">
            <div className="relative h-[400px] w-full max-w-[300px] overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[#08090b] shadow-[0_25px_45px_rgba(20,20,30,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(113,66,42,.42),transparent_30%),linear-gradient(#17100d,#08090b_54%)]" />
              <div className="absolute left-1/2 top-12 -translate-x-1/2 text-4xl font-black tracking-[-0.12em] text-white/80">pop</div>
              <div className="absolute bottom-0 left-0 right-0 rounded-t-[1.4rem] border border-white/10 bg-[#171717]/95 p-4 text-center backdrop-blur-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6638e8] text-xl text-white">✦</div>
                <h3 className="mt-4 text-[15px] font-bold leading-5 text-white">We need more details<br />to verify your identity</h3>
                <p className="mt-3 text-[9px] leading-4 text-white/65">Our team will call within 24–48 hours.<br />You can also reach us at support@popclub.co</p>
                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-left"><span className="block text-[8px] text-white/45">Email address</span><span className="text-[10px] font-medium text-white">support@popclub.co</span></div>
                <div className="mt-3 rounded-full bg-white py-2 text-[11px] font-semibold text-black">Close app</div>
              </div>
            </div>
          </div>

          <div className="order-3 grid gap-4 sm:grid-cols-2 gap-4 sm:grid-cols-2">
            <div className="surface-soft rounded-2xl border p-5"><div className="flex items-center gap-2"><span className="accent flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent-soft)]"><BsLightbulb /></span><h3 className="font-semibold">What actually happened</h3></div><p className="muted mt-4 text-sm leading-6">I signed up, reached identity verification, and then got the message shown here. The only next steps presented to me were waiting for a call within 24–48 hours or contacting support.</p></div>
            <div className="surface-soft rounded-2xl border p-5"><div className="flex items-center gap-2"><span className="accent flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent-soft)]"><BsShieldCheck /></span><h3 className="font-semibold">The product question</h3></div><p className="muted mt-4 text-sm leading-6">There was no visible alternative verification route or way to continue into the product from this state. I would investigate whether the journey can provide another path or a clearer pending-verification experience.</p></div>
            <div className="surface-soft rounded-2xl border p-5 sm:col-span-2"><div className="flex items-center gap-2"><span className="accent flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent-soft)]"><BsGraphUpArrow /></span><h3 className="font-semibold">Why this matters</h3></div><p className="muted mt-4 text-sm leading-6">A user has already shown intent by completing signup. If the next meaningful product action is delayed, there is a gap between intent and value. The useful question is not simply &quot;is KYC slow?&quot; — it is &quot;what can the product do with a user while verification is pending?&quot;</p></div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#d9d0ff] bg-[var(--accent-soft)] p-5">
          <p className="accent text-[10px] font-bold uppercase tracking-[0.18em]">What I&apos;d test</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {tests.map((item) => <p key={item} className="muted flex gap-2 text-sm leading-6"><span className="accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7046e8]" />{item}</p>)}
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between"><div><h3 className="text-xl font-semibold tracking-tight">How I&apos;d think about the funnel</h3><p className="muted text-xs">Click a stage to see the product question.</p></div><BsArrowRight className="hidden text-gray-400 sm:block" /></div>
          <div className="mt-4 grid gap-2 grid-cols-2 md:grid-cols-4">
            {stages.map((stage, index) => { const Icon = stage.icon; return <button key={stage.number} type="button" onClick={() => setActiveStage(index)} className={`surface-solid rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 ${activeStage === index ? "ring-2 ring-[#8b78ed]/30" : ""}`}><div className="flex items-center gap-2"><span className="accent flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent-soft)]"><Icon /></span><div><p className="text-sm font-semibold">{stage.title}</p><p className="muted text-[10px]">{stage.sub}</p></div></div></button>; })}
          </div>
          <motion.div key={activeStage} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-2xl bg-[#11162a] px-5 py-4 text-sm leading-6 text-white shadow-xl dark:bg-white dark:text-[#11162a]">{stages[activeStage].note}</motion.div>
        </div>
      </div>
    </motion.section>
  );
}
