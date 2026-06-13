"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromTop, fadeInUp, staggerContainer } from '@/utils/motion';

const VITALS = [
  { label: "LCP", note: "Largest Contentful Paint" },
  { label: "CLS", note: "Cumulative Layout Shift" },
  { label: "INP", note: "Interaction to Next Paint" },
  { label: "TBT", note: "Total Blocking Time" },
];

const Encryption = () => {
  return (
    <div className='flex flex-col relative items-center justify-center min-h-screen h-full w-full py-20 overflow-hidden'>
        {/* ambient glow */}
        <div className='absolute inset-0 z-[1] flex items-center justify-center pointer-events-none'>
            <div className='h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[120px]' />
            <div className='absolute h-[260px] w-[520px] rounded-full bg-purple-600/10 blur-[120px]' />
        </div>

        {/* heading */}
        <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='z-[20] text-[40px] font-medium text-center text-gray-200'
        >
            <span>
                Performance
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>{" "}&{" "}</span>
                SEO
            </span>
        </motion.div>

        {/* lighthouse-style score + the vitals I optimized */}
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className='z-[20] mt-10 flex flex-col items-center gap-7'
        >
            <motion.div
                variants={fadeInUp(0)}
                className='flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-green-400 bg-[#030014]/70 shadow-[0_0_45px_rgba(74,222,128,0.35)]'
            >
                <span className='text-5xl font-bold text-green-400'>100</span>
                <span className='text-[11px] uppercase tracking-[0.2em] text-green-300/80'>Green</span>
            </motion.div>

            <motion.div variants={fadeInUp(0.1)} className='flex flex-row flex-wrap justify-center gap-3'>
                {VITALS.map((v) => (
                    <div
                        key={v.label}
                        title={v.note}
                        className='flex items-center gap-2 rounded-full border border-green-400/40 bg-[#0300145e] px-4 py-2 backdrop-blur-sm'
                    >
                        <span className='h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]' />
                        <span className='text-sm text-gray-200'>{v.label}</span>
                    </div>
                ))}
            </motion.div>

            <motion.div
                variants={fadeInUp(0.2)}
                className='Welcome-box px-[15px] py-[4px] border border-[#7042f88b] opacity-[0.9]'
            >
                <h1 className='Welcome-text text-[12px]'>Core Web Vitals</h1>
            </motion.div>
        </motion.div>

        {/* my real headline metric */}
        <motion.div
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='z-[20] mt-12 px-5 max-w-[720px]'
        >
            <div className='cursive text-[20px] font-medium text-center text-gray-300'>
                100% green Core Web Vitals across 1,743 indexed desktop pages &amp; all tracked mobile pages at SurveySparrow
            </div>
        </motion.div>
    </div>
  )
}

export default Encryption
