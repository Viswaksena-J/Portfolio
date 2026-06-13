"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row justify-center items-center w-full px-6 sm:px-12 lg:px-20 mt-32 lg:mt-40 z-[20]"
    >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[5px] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px]'>Frontend Developer @ SurveySparrow</h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-4xl sm:text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                    Hey, I&apos;m
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Viswaksena </span>
                    <br/>
                    <span className='text-3xl sm:text-4xl'>I build fast, beautiful web experiences.</span>
                </span>
            </motion.div>
            <motion.p
                variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400 my-5 max-w-[600px]'
            >
                Frontend developer shipping end-to-end web &amp; mobile products — from
                AI-powered tools to pixel-perfect, performance-obsessed pages. I learn fast,
                code beautifully simple things, and love what I do.
            </motion.p>
            <div className='flex flex-row flex-wrap gap-4'>
                <motion.a
                    variants={slideInFromLeft(1)}
                    href='#projects'
                    className='py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    View My Work
                </motion.a>
                <motion.a
                    variants={slideInFromLeft(1.1)}
                    href='/resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='py-2 px-4 text-center text-gray-200 cursor-pointer rounded-lg max-w-[200px] border border-[#7042f88b] hover:bg-[#7042f81a] transition-colors duration-300'
                >
                    Download Résumé
                </motion.a>
            </div>
        </div>
        <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center'
        >
            <Image
                src="/mainIconsdark.svg"
                alt='work icons'
                height={650}
                width={650}
            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent
