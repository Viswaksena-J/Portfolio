import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20] relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full max-w-5xl flex flex-row items-start justify-around flex-wrap gap-8">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Connect</div>
            <Link href="https://github.com/Viswaksena-J" target="_blank" rel="noopener noreferrer">
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white transition-colors">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">GitHub</span>
              </p>
            </Link>
            <Link href="https://www.linkedin.com/in/viswaksena-j" target="_blank" rel="noopener noreferrer">
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white transition-colors">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Get in touch</div>
            <Link href="mailto:viswaksene111@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white transition-colors">
                <MdEmail />
                <span className="text-[15px] ml-[6px]">viswaksene111@gmail.com</span>
              </p>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white transition-colors">
                <HiDocumentText />
                <span className="text-[15px] ml-[6px]">Download Résumé</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="text-[15px] my-[15px] text-center text-gray-400 max-w-[220px]">
              Frontend Developer @ SurveySparrow. Building fast, beautiful web
              experiences from Anantapur, India.
            </p>
          </div>
        </div>

        <div className="mt-[20px] mb-[10px] text-[14px] text-center text-gray-400">
          &copy; {2026} Viswaksena J. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
