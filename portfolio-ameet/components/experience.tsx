"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[57rem] w-full px-4"
    >
      <SectionHeading>My Experience</SectionHeading>

      <div className="relative mt-16 pb-8">
        {/* Central Vertical Line (Desktop) */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-gray-300 to-transparent dark:from-white/10 dark:via-white/20 dark:to-transparent -translate-x-1/2" />

        <div className="flex flex-col gap-16">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center justify-between w-full sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Spacer for one side (Desktop) */}
              <div className="hidden sm:block w-[46%]" />

              {/* Central Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-gray-950 border-[3px] border-gray-900 dark:border-white shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] z-10" />

              {/* Content Card */}
              <div className="w-[calc(100%-3rem)] ml-12 sm:ml-0 sm:w-[46%]">
                <div className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-md p-7 rounded-3xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <Image
                        src={item.icon}
                        alt={item.company}
                        className="w-14 h-14 object-contain rounded-2xl bg-white p-2 shadow-sm group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-2xl text-gray-900 dark:text-gray-100 leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
                        {item.company} &bull; {item.type}
                      </p>
                      <div className="flex flex-col gap-2 mt-1">
                        <span className="inline-block text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 rounded-full w-fit">
                          {item.date}
                        </span>
                        {item.location && (
                          <p className="text-sm text-gray-500 dark:text-white/50 italic">
                            {item.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

