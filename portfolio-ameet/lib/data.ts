import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import paytm from "@/public/paytm.png"
import LMS from "@/public/LMS.jpeg"
import blogapp from "@/public/blogapp.jpeg"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Paytm Clone - Full-Stack Application",
    description:
      "Features user sign-up, log-in, balance checks, fund transfers, and transaction views. Utilizes React for the frontend and Express.js for the backend.",
    tags: ["REACT", "NODE", "MONGODB", "Express", "JWT Authentication"],
    imageUrl: paytm ,
  },
  {
    title: "My Blog Web App",
    description:
      "The Blog Web App enables users to sign up, log in, post, and view blogs with modern tech and a shared npm package for reusability..",
    tags: ["React", "TypeScript", "Hono", "Cloudflare", "Prisma"],
    imageUrl: blogapp,
  },
  {
    title: "LMS using MERN",
    description:
      "The LMS Project enables authentication, course management, subscriptions, dashboards, and admin controls with email notifications.",
    tags: ["React", "Node", "Express", "Tailwind", "Mongodb","jwt"],
    imageUrl: LMS,
  },
] as const;

export const skillsData = [
  "C/C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Websockets",
  "PostgreSQL",
  "AWS",
  "Cloudflare",
  "Hono",
  "Nginx",
  "Docker",
  "Python",
  "Framer Motion"
] as const;
