"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const points = [
  ["User moment", "A new user finishes signup but cannot immediately transact."],
  ["Product question", "Can the verification state be made clearer before the payment moment?"],
  ["What I would test", "Clearer expectations, status visibility, and a guided next step during verification."],
];

export default function ProductNotes() {
  const { ref } = useSectionInView("POP Teardown", 0.35);

  return (
    <motion.section
      ref={ref}
      id="product-notes"
      className="mx-auto w-full max-w-5xl scroll-mt-28 py-20 sm:py-28"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading>POP onboarding teardown</SectionHeading>
      <motion.article
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] md:p-9"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Product observation</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">A verification step can become a first-transaction problem.</h3>
          </div>
          <span className="w-fit rounded-full border border-black/10 px-3 py-1 text-xs text-gray-500 dark:border-white/10">POP · onboarding</span>
        </div>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-white/70">
          A new user can finish signup and still be unable to transact for roughly 24–48 hours while verification completes. The interesting product question is not only the wait — it is how clearly the user understands what is happening and what to do next.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {points.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.12 + index * 0.08 }}
              className="rounded-2xl bg-gray-50 p-5 dark:bg-white/[0.05]"
            >
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.article>
    </motion.section>
  );
}
