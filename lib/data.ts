import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io";
import { SiMajorleaguehacking } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecommerce.png";
import evolveFitnessImg from "@/public/evolveFitness.png";
import googleKeepImg from "@/public/googleKeep.png";
import taxiBookingImg from "@/public/taxiBooking.jpg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Arcade", hash: "#arcade" },
  { name: "Product Notes", hash: "#product-notes" },
  { name: "Experience", hash: "#experience" },
  { name: "Work", hash: "#projects" },
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "SDE 2 · Integration Support Engineer",
    company: "Easebuzz",
    location: "Pune, India",
    description: "Work with merchants on payment integrations, investigate transaction and API issues, use SQL for transaction analysis, run API walkthroughs, and identify recurring integration friction. Built Arcade to make integration workflows easier to follow.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 – Present",
  },
  {
    title: "Front-End Developer",
    company: "Moneytor",
    location: "Pune, India",
    description: "Built and improved web interfaces for a fintech product, working across UI changes, AWS-hosted assets, CRM workflows, and basic database queries.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 – Aug 2025",
  },
  {
    title: "Front-End Developer",
    company: "Intelisync",
    location: "India",
    description: "Delivered responsive web interfaces and collaborated on product-facing frontend work across multiple client requirements.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 – Jul 2024",
  },
  {
    title: "Front-End Developer Intern",
    company: "Inferyx",
    location: "India",
    description: "Worked on responsive interfaces and frontend implementation as part of a software development internship.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 – Aug 2023",
  },
] as const;

export const projectsData = [
  { title: "E-commerce Platform", description: "A commerce experience with product discovery, cart flows, checkout, authentication, and content management.", tags: ["Next.js", "Sanity", "Stripe", "Clerk"], imageUrl: ecommerceImg },
  { title: "Evolve Fitness", description: "A MERN-based fitness platform focused on accessible product flows and a clear user experience.", tags: ["React", "Node.js", "MongoDB", "Express"], imageUrl: evolveFitnessImg },
  { title: "Taxi Booking App", description: "A booking flow covering authentication, maps, and card payments.", tags: ["Next.js", "TypeScript", "Mapbox", "Stripe"], imageUrl: taxiBookingImg },
  { title: "Google Keep Clone", description: "A lightweight notes product built around state management and interaction design.", tags: ["React", "JavaScript", "CSS"], imageUrl: googleKeepImg },
] as const;

export const skillsData = [
  "Payments & fintech", "Merchant onboarding", "API troubleshooting", "Transaction analysis", "SQL / MySQL", "Product discovery", "Requirements gathering", "Stakeholder communication", "Postman", "REST APIs", "AWS", "React", "Next.js", "TypeScript", "Git / GitHub", "Jira"
] as const;
