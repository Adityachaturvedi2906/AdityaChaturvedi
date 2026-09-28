"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.05);
  return (
    <section id="experience" ref={ref} className="mx-auto mb-16 w-full max-w-6xl scroll-mt-24 sm:mb-24 lg:mb-28">
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6a58d9]">02 · Career</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Experience</h2></div>
        <span className="hidden text-xs text-gray-400 sm:block">Technology → product → operations</span>
      </div>
      <div className="overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white/70 shadow-[0_20px_70px_rgba(50,55,90,0.06)] sm:rounded-[2rem] dark:border-white/10 dark:bg-white/[0.04]">
        {experiencesData.filter((item) => item.company).map((item, index) => (
          <motion.div key={item.company} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="grid gap-3 border-b border-black/[0.06] p-4 last:border-b-0 sm:gap-4 sm:p-6 md:grid-cols-[155px_1fr_auto] md:items-start lg:grid-cols-[175px_1fr_auto] dark:border-white/10">
            <div><p className="text-xs font-medium text-gray-400">{item.date}</p><p className="mt-1 text-[11px] text-gray-400">{item.location}</p></div>
            <div className="min-w-0"><h3 className="text-base font-semibold tracking-tight sm:text-lg">{item.title}</h3><p className="mt-1 text-sm font-medium text-[#6a58d9]">{item.company}</p><p className="mt-2.5 max-w-3xl text-sm leading-6 text-gray-600 dark:text-white/60">{item.description}</p></div>
            <BsArrowUpRight className="hidden text-gray-300 md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
