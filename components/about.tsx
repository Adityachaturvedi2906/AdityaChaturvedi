"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section ref={ref} id="about" className="mx-auto mb-28 max-w-5xl scroll-mt-28 sm:mb-40" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <SectionHeading>About</SectionHeading>
      <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr]">
        <p className="text-lg leading-8 text-gray-600 dark:text-white/70">
          My background is in software development, but my recent work has moved closer to the product itself. I spend time understanding merchant use cases, tracing payment and integration issues, working with data, and explaining technical decisions to non-technical stakeholders.
        </p>
        <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
          <p className="text-sm font-semibold">What I bring</p>
          <p className="mt-3 leading-7 text-gray-600 dark:text-white/70">Technical context without losing sight of the user, process, and business problem.</p>
        </div>
      </div>
    </motion.section>
  );
}
