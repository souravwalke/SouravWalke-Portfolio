import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Instructional Student Assistant",
    location: "California State University, East Bay",
    description:
      "Led tutoring sessions for students in key computer science courses, fostering a deeper understanding and practical application of programming principles.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Masters In Computer Science",
    location: "California State University, East Bay",
    description:
      "Graduated with a Master's in Computer Science, with a specialization in software engineering and advanced data structures, gaining expertise in algorithm design, system architecture, and programming methodologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Software Engineer - II",
    location: "CrimsonLogic",
    description:
      "Collaborated on Agile feature design, led batch data migration to the cloud with Spring Batch, implemented Azure DevOps pipelines, and integrated testing frameworks for better code coverage.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer - I",
    location: "CrimsonLogic India",
    description: 
      "Orchestrated application workflows for multiple government departments within St. Lucia DigiGov, enhancing user experience and increasing citizen engagement by streamlining services and integrating secure payment systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "Spring Boot",
  "Hibernate",
  "SQL",
  "Apollo",
  "AWS",
  "PostgreSQL",
  "Python",
  "REST API",
  "Framer Motion",
] as const;

