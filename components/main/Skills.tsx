"use client";

import { Skill_data, SKILL_PYRAMID_ROWS } from '@/constants'
import React from 'react'
import { motion } from 'framer-motion'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

// Slice the flat, category-ordered skill list into pyramid rows (10·8·4·2).
const buildPyramid = () => {
  const rows: (typeof Skill_data)[] = [];
  let cursor = 0;
  for (const size of SKILL_PYRAMID_ROWS) {
    rows.push(Skill_data.slice(cursor, cursor + size));
    cursor += size;
  }
  // Safety net: if the data ever outgrows the row plan, append the remainder.
  if (cursor < Skill_data.length) {
    rows[rows.length - 1].push(...Skill_data.slice(cursor));
  }
  return rows;
};

const pyramidContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const Skills = () => {
  const pyramid = buildPyramid();

  return (
    <section
        id='skills'
        className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20'
        style={{transform: "scale(0.9)"}}
    >
        <SkillText/>

        <motion.div
            variants={pyramidContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className='flex flex-col items-center justify-center gap-5 sm:gap-7 mt-8'
        >
            {pyramid.map((row, rowIndex) => (
                <motion.div
                    key={rowIndex}
                    variants={rowVariants}
                    className='flex flex-row justify-center items-center gap-5 sm:gap-7 flex-wrap'
                >
                    {row.map((skill) => (
                        <div
                            key={skill.skill_name}
                            title={skill.skill_name}
                            className='group relative w-14 h-14 sm:w-[72px] sm:h-[72px] flex items-center justify-center'
                        >
                            <SkillDataProvider
                                src={skill.Image}
                                name={skill.skill_name}
                            />
                            <span className='pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] text-gray-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                                {skill.skill_name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            ))}
        </motion.div>

        <div className='w-full h-full absolute'>
            <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video
                    className='w-full h-auto'
                    preload='false'
                    playsInline
                    loop
                    muted
                    autoPlay
                    src='/cards-video.webm'
                />
            </div>
        </div>
    </section>
  )
}

export default Skills
