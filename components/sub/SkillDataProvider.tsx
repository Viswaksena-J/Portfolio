"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

interface Props {
    src: string;
    name: string;
}

// Animates as a child of a stagger container (parent drives the reveal).
const skillVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const SkillDataProvider = ({ src, name }: Props) => {
    return (
        <motion.div
            variants={skillVariants}
            whileHover={{ scale: 1.18, rotate: -4 }}
            className='relative w-full h-full'
        >
            <Image
                src={src}
                alt={name}
                fill
                sizes='80px'
                className='object-contain p-1 drop-shadow-[0_0_10px_rgba(112,66,248,0.25)]'
            />
        </motion.div>
    )
}

export default SkillDataProvider
