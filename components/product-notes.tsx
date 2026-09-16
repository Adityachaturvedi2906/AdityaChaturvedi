"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function ProductNotes() {
  const { ref } = useSectionInView("Product Teardown", 0.25);
  return (
    <motion.section ref={ref} id="product-notes" className="mx-auto mb-20 w-full max-w-5xl scroll-mt-28 sm:mb-28" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }}>
      <SectionHeading>POP onboarding teardown</SectionHeading>
      <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] md:p-9"><div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Product note · POP</p><h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">A verification step that can interrupt the first transaction.</h3></div><span className="w-fit rounded-full border border-black/10 px-3 py-1 text-xs text-gray-500 dark:border-white/10">Teardown</span></div><p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-white/70">The onboarding flow can leave a new user waiting roughly 24–48 hours while verification is completed. That creates a gap between signup intent and the moment the user expects to transact.</p><div className="mt-7 grid gap-3 sm:grid-cols-3">{[['User moment','Signup is complete, but the user cannot immediately transact.'],['Product question','Can the verification state be clearer before the payment moment?'],['What I would test','Expectation setting, status visibility, and a guided next step.']].map(([title,text]) => <div key={title} className="rounded-2xl bg-gray-50 p-5 dark:bg-white/[0.05]"><p className="text-sm font-semibold">{title}</p><p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">{text}</p></div>)}</div></article>
    </motion.section>
  );
}
