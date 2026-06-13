"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Experiences } from '@/constants';
import { fadeInUp, staggerContainer } from '@/utils/motion';

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center pb-20 px-6 sm:px-10 z-[20]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16"
      >
        Experience
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-4xl flex flex-col gap-10"
      >
        {/* timeline spine */}
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent" />

        {Experiences.map((exp) => (
          <motion.div
            key={exp.company}
            variants={fadeInUp(0)}
            className="relative pl-10 sm:pl-14"
          >
            {/* node */}
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-[#030014]" />

            <div className="rounded-xl border border-[#2A0E61] bg-[#0a0420]/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#7042f861] hover:bg-[#120733]/60">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
                <span className="text-sm text-purple-300">{exp.period}</span>
              </div>
              <p className="text-cyan-300/90 font-medium mt-1">{exp.company}</p>

              <ul className="mt-4 flex flex-col gap-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-[15px] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-row flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-gray-200 rounded-full border border-[#7042f861] bg-[#0300145e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
