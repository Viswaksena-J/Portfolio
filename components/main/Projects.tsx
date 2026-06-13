"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../sub/ProjectCard';
import { Projects_data } from '@/constants';
import { staggerContainer } from '@/utils/motion';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20 pb-10' id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16'
      >
        My Projects
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 max-w-6xl w-full'
      >
        {Projects_data.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            accent={project.accent}
            period={project.period}
            link={(project as { link?: string }).link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
