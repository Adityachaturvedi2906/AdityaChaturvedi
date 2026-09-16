"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="mx-auto mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40">
      <SectionHeading>Selected work</SectionHeading>
      <p className="mx-auto mb-10 max-w-2xl text-center leading-7 text-gray-600 dark:text-white/65">Earlier software work that shows how I approach interfaces, commerce flows, and user-facing products.</p>
      <div>{projectsData.map((project, index) => <React.Fragment key={index}><Project {...project} /></React.Fragment>)}</div>
    </section>
  );
}
