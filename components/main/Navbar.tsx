import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
        <div className='h-full w-full flex flex-row items-center justify-between m-auto'>
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                <Image
                    src={'/logo-white.png'}
                    alt='Viswaksena Jayam logo'
                    height={58}
                    width={58}
                    className='cursor-pointer hover:animate-spinslow'
                />
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    Viswaksena J
                </span>
            </a>
            <div className='hidden md:flex h-full w-[520px] flex-row items-center justify-center'>
                <div className='flex items-center justify-between h-auto w-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 text-sm'>
                    <a href="#about-me" className='cursor-pointer hover:text-white transition-colors'>
                        About
                    </a>
                    <a href="#skills" className='cursor-pointer hover:text-white transition-colors'>
                        Skills
                    </a>
                    <a href="#experience" className='cursor-pointer hover:text-white transition-colors'>
                        Experience
                    </a>
                    <a href="#projects" className='cursor-pointer hover:text-white transition-colors'>
                        Projects
                    </a>
                    <a href="#achievements" className='cursor-pointer hover:text-white transition-colors'>
                        Awards
                    </a>
                </div>
            </div>
            <div className='flex flex-row items-center gap-5'>
                {Socials.map((social) => {
                    const Icon = social.icon;
                    return (
                        <Link
                            href={social.link}
                            key={social.name}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={social.name}
                            className='text-gray-300 hover:text-white transition-colors'
                        >
                            <Icon className='w-6 h-6' />
                        </Link>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Navbar
