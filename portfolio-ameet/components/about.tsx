"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
     id="about"
     
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
     
    >
      <SectionHeading>About Me</SectionHeading>
<p className="mb-3">
  ☕ Fueled by <span className="font-bold">caffeine and code</span>, I’m a <span className="font-bold">full-stack developer</span> passionate about building clean, efficient, and scalable web applications. Currently pursuing my <span className="font-bold">Bachelor’s in Computer Science</span> at Chandigarh University, I’m constantly sharpening my skills to create impactful solutions.
</p>

<p className="mb-3">
  🚀 My tech stack includes: 
  🚀 <span className="font-bold">React.js & Next.js</span> for frontend, hosted on <span className="font-bold">AWS S3</span>. 
  💻 Backend APIs built with <span className="font-bold">Node.js & Express</span> for high-traffic systems. 
  ☁️ Edge-optimized backends with <span className="font-bold">Hono</span>. 
  🛢️ Databases powered by <span className="font-bold">MongoDB</span> and <span className="font-bold">PostgreSQL</span>. 
  🐳 Containerized deployments using <span className="font-bold">Docker</span>. 
  🚦 Optimized performance with <span className="font-bold">Nginx</span> as a reverse proxy.
</p>

<p className="mb-3">
  <span className="italic font-bold">When the IDE closes</span>, I switch gears to <span className="font-bold">badminton rallies🎾 </span>, <span className="font-bold">cricket matches</span>, and binge-watching <span className="font-bold">movies & web series</span>. Staying updated with the latest in tech is second nature to me—I’m always exploring new tools and trends.
</p>

<p>
  🎯 A <span className="font-bold">routine-driven perfectionist</span> who thrives on challenges and loves solving problems. Let’s connect if you’re building something exciting or just want to chat about tech, cricket, or the latest web series! 🚀<br />
  <span className="font-bold">P.S. 😴 Sleep comes easy—but only after every commit is clean and every to-do is checked off 💻✨</span>
</p>


    </motion.section>
  );
}
