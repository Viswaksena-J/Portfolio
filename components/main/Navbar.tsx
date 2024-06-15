import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className='h-full w-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                <Image
                    src={'/NavLogo.png'}
                    alt='logo'
                    height={70}
                    width={70}
                    className='cursor-pointer hover:animate-spinslow'
                />
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    My Portfolio
                </span>
            </a>
            <div className='h-full w-[500px] flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between h-auto w-full border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='curser-pointer'>
                        About Me
                    </a>
                    <a href="#skills" className='curser-pointer'>
                        Skills
                    </a>
                    <a href="#projects" className='curser-pointer'>
                        Projects
                    </a>
                </div>
            </div>  
            <div className='flex flex-row gap-5'>
                {Socials.map((socials) => (
                    <Link href={socials.link || ''} key={socials.name}>
                        <Image
                            src={socials.src}
                            alt={socials.name}
                            key={socials.name}
                            height={24}
                            width={24}
                        />
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar