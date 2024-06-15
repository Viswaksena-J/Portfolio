import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent mt-1 text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] z-50 h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <Link href='https://www.linkedin.com/in/viswaksena-j/'>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>    
                        </p>
                    </Link>
                    <Link href='https://github.com/Viswaksena-J'>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    </Link>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] z-50 h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <Link href='https://www.linkedin.com/in/viswaksena-j/'>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </p>
                    </Link>
                </div>
                <div className="min-w-[200px] z-50 h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        {/* <span className="text-[15px] ml-[6px]">Become Sponsor</span>     */}
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">viswaksene111@gmail.com</span>    
                    </p>
                </div>
            </div>

            {/* <div className="mb-[20px] text-[15px] text-center">
                &copy; WebChain Dev 2023 Inc. All rights reserved
            </div> */}
        </div>
    </div>
  )
}

export default Footer