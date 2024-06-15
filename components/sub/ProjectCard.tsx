import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="relative z-40 cursor-pointer overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#1E083E]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover transition-transform duration-300 ease-in-out transform"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
