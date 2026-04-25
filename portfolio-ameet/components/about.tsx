"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
     id="about"

      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
     
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-bold">Software Engineer</span> dedicated to building clean, efficient, and scalable web applications. With a focus on performance and user experience, I specialize in architecting modern digital solutions that solve complex real-world problems.
      </p>

      <p>
        I am a <span className="font-bold">problem-solver</span> who thrives in fast-paced environments and values continuous growth. Outside of coding, I enjoy playing <span className="font-bold">badminton and cricket</span>, and I am always eager to collaborate on innovative projects and connect with fellow technology enthusiasts.
      </p>




    </motion.section>
  );
}
