"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsCheck2, BsGraphUpArrow, BsArrowsFullscreen, BsX } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

const recoveryIdeas = [
  ["Retry", "If verification fails temporarily, let the user retry instead of ending the journey."],
  ["Explore", "If verification is pending, let the user see the product and understand the value."],
  ["Recover", "Show status + a clear next action instead of only asking the user to wait."],
];

const funnel = ["Download", "OTP", "Verification", "First value"];

export default function ProductNotes() {
  const { ref } = useSectionInView("Product Teardown", 0.25);
  const [showImage, setShowImage] = useState(false);

  return (
    <motion.section ref={ref} id="product-notes" className="mx-auto mb-20 w-full max-w-6xl scroll-mt-28 sm:mb-32" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5 }}>
      <div className="surface overflow-hidden rounded-[2rem] border p-4 shadow-[0_25px_80px_rgba(50,55,90,0.08)] backdrop-blur-xl sm:p-7 lg:p-9 dark:shadow-black/20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="accent text-[10px] font-bold uppercase tracking-[0.2em]">01 · Product teardown</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">POP onboarding</h2>
            <p className="muted mt-2 max-w-2xl text-sm leading-6">A real onboarding experience I went through — reduced to the problem, the product opportunity, and what I would test.</p>
          </div>
          <span className="surface-solid w-fit rounded-full border px-3 py-1.5 text-[11px] font-semibold muted">Observed firsthand</span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(320px,390px)_1fr]">
          <button
            type="button"
            onClick={() => setShowImage(true)}
            className="group relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[1.5rem] border bg-[var(--surface-soft)] p-4 text-left shadow-sm transition hover:shadow-lg sm:min-h-[620px] sm:p-5"
            aria-label="Open the POP verification screenshot at full size"
          >
            <div className="relative h-full max-h-[680px] w-full max-w-[350px] overflow-hidden rounded-[1.3rem] border border-[var(--border)] bg-black shadow-2xl">
              <img
                src="/pop-verification.jpg"
                alt="POP verification screen encountered during onboarding"
                className="h-full w-full object-contain"
              />
              <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/75 px-3 py-2 text-[11px] font-semibold text-white opacity-90 backdrop-blur transition group-hover:bg-black/90">
                <BsArrowsFullscreen />
                View full size
              </span>
            </div>
          </button>

          <div className="grid gap-3">
            <div className="surface-soft rounded-2xl border p-4 sm:p-5">
              <p className="accent text-[10px] font-bold uppercase tracking-[0.16em]">What I experienced</p>
              <p className="mt-2 text-sm font-medium leading-6">Download → mobile number → OTP → verification screen → journey stopped.</p>
              <p className="muted mt-1 text-sm leading-5">The screen asked me to wait 24–48 hours for a call or email support. There was no retry or way to continue into the app. I also did not receive the promised call in that window.</p>
            </div>

            <div className="surface-soft rounded-2xl border p-4 sm:p-5">
              <p className="accent text-[10px] font-bold uppercase tracking-[0.16em]">Product opportunity</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {recoveryIdeas.map(([title, text]) => (
                  <div key={title} className="surface-solid rounded-xl border p-3">
                    <div className="flex items-center gap-2">
                      <span className="accent flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-soft)]"><BsCheck2 /></span>
                      <p className="text-sm font-semibold">{title}</p>
                    </div>
                    <p className="muted mt-2 text-xs leading-5">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#11162a] p-4 text-white dark:bg-white dark:text-[#11162a] sm:p-5">
              <div className="flex items-center gap-2">
                <BsGraphUpArrow className="text-lg" />
                <p className="text-sm font-semibold">What I would measure</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["Verification completion", "Onboarding abandonment", "Return after pending state", "Time to first value"].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-white/80 dark:bg-black/10 dark:text-[#11162a]/75">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border bg-[var(--surface-soft)] p-4">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">My case-study lens</p>
            <BsArrowRight className="muted" />
            <p className="muted text-xs">Find the drop-off → identify the recovery → define the metric → test it.</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {funnel.map((step, index) => (
              <div key={step} className="surface-solid rounded-xl border px-3 py-2.5">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] accent">0{index + 1}</p>
                <p className="mt-1 text-xs font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="POP verification screenshot"
          onClick={() => setShowImage(false)}
        >
          <button
            type="button"
            onClick={() => setShowImage(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close screenshot"
          >
            <BsX className="text-2xl" />
          </button>
          <img
            src="/pop-verification.jpg"
            alt="POP verification screen encountered during onboarding"
            className="max-h-[92vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </motion.section>
  );
}
