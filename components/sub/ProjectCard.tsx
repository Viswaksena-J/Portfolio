"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/motion';

interface Props {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  period: string;
  index: number;
  link?: string;
}

const ProjectCard = ({ title, description, tags, accent, period, index, link }: Props) => {
  const className =
    "relative z-40 flex flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0a0420]/60 backdrop-blur-sm shadow-lg" +
    (link ? " cursor-pointer" : "");

  const content = (
    <>
      {/* gradient header */}
      <div className={`relative h-36 w-full bg-gradient-to-br ${accent} overflow-hidden`}>
        <div className="absolute inset-0 bg-[#030014]/20" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
        <span className="absolute top-3 right-4 text-xs font-medium text-white/90">{period}</span>
        <h1 className="absolute bottom-4 left-5 right-5 text-2xl font-bold text-white drop-shadow-md">
          {title}
        </h1>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[15px] leading-relaxed text-gray-300">{description}</p>
        <div className="mt-auto flex flex-row flex-wrap gap-2 pt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-gray-200 rounded-full border border-[#7042f861] bg-[#0300145e]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeInUp(index * 0.1)}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div variants={fadeInUp(index * 0.1)} className={className}>
      {content}
    </motion.div>
  );
};

export default ProjectCard;
