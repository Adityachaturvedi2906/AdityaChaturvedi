"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref} className="mx-auto mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Capabilities</SectionHeading>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill) => (
          <div key={skill} className="rounded-2xl border border-black/10 px-5 py-4 text-sm font-medium dark:border-white/10">{skill}</div>
        ))}
      </div>
    </section>
  );
}
