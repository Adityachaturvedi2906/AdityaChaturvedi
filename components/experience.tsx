"use client";

import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.05);
  return (
    <section id="experience" ref={ref} className="mx-auto mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <div className="divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
        {experiencesData.filter((item) => item.company).map((item) => (
          <div key={item.company} className="grid gap-3 py-7 md:grid-cols-[180px_1fr]">
            <div className="text-sm text-gray-500">{item.date}</div>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-gray-500">{item.company} · {item.location}</p>
              <p className="mt-3 max-w-3xl leading-7 text-gray-600 dark:text-white/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
