'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname } from 'next/navigation';

const Header = () => {
  const pathname  = usePathname()
  console.log(pathname);
  
  return (
    <header className="bg-white flex justify-between items-center">
      <div className="flex items-center font-rubik pl-[50px] pr-[80px] py-[23px] ">
        <span className="text-[24px] font-bold text-black flex items-center h-[75px]">
          WAY-WISE <span className="text-[#FF902E]">JOBS</span>
        </span>
      </div>

      <nav className="hidden md:flex space-x-6 text-[18px] font-rajdhani font-bold">
        <Link
          href="/"
          className={` font-bold hover:text-[#FF902E] ${
            pathname === "/" ? "text-[#FF902E]" : "text-black"
          }`}
        >
          HOME
        </Link>
        <a
          href="/about-us"
          className={` font-bold hover:text-[#FF902E] ${
            pathname === "/about-us" ? "text-[#FF902E]" : "text-black"
          }`}
        >
          ABOUT US
        </a>
        <a href="#countries-we-export" className="hover:text-black font-bold  ">
          COUNTRIES WE EXPORT
        </a>
        <a href="#factories" className="hover:text-black font-bold">
          FACTORIES WE WORK
        </a>
        <a
          href="/contact-us"
          className={` font-bold hover:text-[#FF902E] ${
            pathname === "/contact-us" ? "text-[#FF902E]" : "text-black"
          }`}
        >
          CONTACT US
        </a>
      </nav>

      <div className="flex items-center">
        <div className="pr-[50px]">
          <a
            href="#quote"
            className="font-rajdhani bg-transparent border-2 py-[14px] px-[30px] rounded-[5px] border-solid border-[#2A37EA] text-[#2A37EA] hover:bg-[#2A37EA] hover:text-white font-bold"
          >
            GET A FREE QUOTE +
          </a>
        </div>
        <div className="bg-[#FF902E] text-center text-white pr-[50px] pl-[50px] py-[20px]">
          <p className="text-[14px]  font-semibold text-white leading-normal">
            Call Us Now!
          </p>
          <p className="text-[19px] text-white  font-rajdhani font-bold leading-normal pt-[4px]">
            +1 (818) 516 0255
          </p>
          <p className="text-[19px] text-white  font-rajdhani font-bold leading-normal">
            +1 (661) 362 9727
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;