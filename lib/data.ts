import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { IoMdTrophy } from "react-icons/io"
import { SiMajorleaguehacking } from "react-icons/si"
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/ecommerce.png";
import evolveFitnessImg from "@/public/evolveFitness.png";
import googleKeepImg from "@/public/googleKeep.png";
import taxiBookingImg from "@/public/taxiBooking.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor Of Vocational Studies in Software development",
    location: "Amarkantank, M.P.",
    description:
      "I graduated after Pursuing 3 years of Bachelor's Degree.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Hacktoberfest Contest",
    location: "Remote",
    description:
      "Participated in Hacktoberfest contest and played an active role in open-source projects. Contributed 4 successful Pull Requests on GitHub.",
    icon: React.createElement(IoMdTrophy),
    date: "2021",
  },
  {
    title: "MLH Hackathon",
    location: "Remote",
    description:
      " Participated in a coding hackathon in which contributed as a team member and made a real-life time Chat App.",
    icon: React.createElement(SiMajorleaguehacking),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Pune, M.H.",
    description:
      "I worked as a front-end developer and Delivered Responsive UI projects that enriched user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb'23 - June'23",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce",
    description:
      " E-commerce app with an intuitive UI, dynamic cart, and powerful search for a seamless shopping experience.",
    tags: ["React", "Next.js", "Tailwind", "Sanity", "Stripe", "Clerk"],
    imageUrl: ecommerceImg,
  },
  {
    title: "Evolve Fitness Gym",
    description:
      "Leveraged MERN for a unified fitness platform, enhancing user accessibility and informed decision-making.",
    tags: ["React", "MongoDB", "NodeJS", "Express"],
    imageUrl: evolveFitnessImg,
  },
  {
    title: "Taxi Booking App",
    description:
      "Developed Functional Taxi Booking App that  utilizes front-end technologies. Users can easily sign in, sign out, and pay with their card.",
    tags: ["Next.js", "React", "Tailwind", "Typescript", "Mapbox"],
    imageUrl: taxiBookingImg,
  },
  {
    title: "Google Keep Clone",
    description:
      "Emphasized strong user experience and interface design through efficient state management for notetaking.",
    tags: ["HTML", "CSS", "React"],
    imageUrl: googleKeepImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Bootstrap",
  "Tailwind",
  "SASS/LESS",
  "MongoDB",
  "Express",
  "Framer Motion",
  "D3.js",
  "Angular",
  "Node.js",
  "Git",
  "MySQL",
  "Java",
  "Mapbox",
  "NPM",
  "Firebase",
  "Vercel"
  	
] as const;