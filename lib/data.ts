import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Product Teardown", hash: "#product-notes" },
  { name: "Arcade", hash: "#arcade" },
  { name: "Experience", hash: "#experience" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  { title: "SDE 2 · Integration Support Engineer", company: "Easebuzz", location: "Pune, India", description: "Work with merchants on payment integrations, investigate transaction and API issues, use SQL for transaction analysis, run API walkthroughs, and identify recurring integration friction. Built Arcade to make integration workflows easier to follow.", icon: React.createElement(CgWorkAlt), date: "Aug 2025 – Present" },
  { title: "Front-End Developer", company: "Moneytor", location: "Pune, India", description: "Built and improved web interfaces for a fintech product, working across UI changes, AWS-hosted assets, CRM workflows, and basic database queries.", icon: React.createElement(CgWorkAlt), date: "Aug 2024 – Aug 2025" },
  { title: "Front-End Developer", company: "Intelisync", location: "India", description: "Delivered responsive web interfaces and collaborated on product-facing frontend work across multiple client requirements.", icon: React.createElement(CgWorkAlt), date: "Sep 2023 – Jul 2024" },
  { title: "Front-End Developer Intern", company: "Inferyx", location: "India", description: "Worked on responsive interfaces and frontend implementation as part of a software development internship.", icon: React.createElement(CgWorkAlt), date: "Feb 2023 – Aug 2023" },
] as const;

export const skillsData = ["Payments & fintech", "Merchant onboarding", "API troubleshooting", "Transaction analysis", "SQL / MySQL", "Product discovery", "Requirements gathering", "Stakeholder communication", "Postman", "REST APIs", "AWS", "React", "Next.js", "TypeScript", "Git / GitHub", "Jira"] as const;
