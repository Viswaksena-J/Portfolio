"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Achievements as AchievementsData } from '@/constants';
import { fadeInUp, staggerContainer } from '@/utils/motion';

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center pt-10 pb-20 px-6 sm:px-10 z-[20]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16"
      >
        Achievements
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
      >
        {AchievementsData.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeInUp(0)}
            className="rounded-xl border border-[#2A0E61] bg-[#0a0420]/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#7042f861] hover:bg-[#120733]/60"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <span className="shrink-0 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
                {item.place}
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
