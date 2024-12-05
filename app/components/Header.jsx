'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {usePathname } from 'next/navigation';
import Logo from '@/image/logo-1.svg'
import Image from 'next/image';
import Flipbook from './global/Flipbook';


const Header = () => {
  const pathname  = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(pathname);
  
  return (
    <>
      <header className="bg-white/80 flex flex-wrap md:flex-nowrap justify-between items-center top-0 left-0 w-full z-[999] sticky backdrop-blur">
        <div className="flex items-center px-4 sm:px-8  md:pl-[50px] md:pr-[80px] py-[10px] md:py-[20px]">
          <Image src={Logo} alt="logo" width={300} height={90} className='w-[250px] md:w-[300px]' />
        </div>

        <nav className="hidden md:flex flex-wrap space-x-6 uppercase text-lg md:text-xl lg:text-2xl font-rajdhani font-bold">
          <Link
            href="/"
            className={`hover:text-[#FF902E] ${
              pathname === "/" ? "text-[#FF902E]" : "text-black"
            }`}
          >
            HOME
          </Link>
          <a
            href="/about-us"
            className={`hover:text-[#FF902E] ${
              pathname === "/about-us" ? "text-[#FF902E]" : "text-black"
            }`}
          >
            ABOUT US
          </a>
          <a
            href="/countries-we-serve"
            className={`hover:text-[#FF902E] ${
              pathname === "/countries-we-serve" ? "text-[#FF902E]" : "text-black"
            }`}
          >
            COUNTRIES WE SERVE
          </a>
          <a
            href="/contact-us"
            className={`hover:text-[#FF902E] ${
              pathname === "/contact-us" ? "text-[#FF902E]" : "text-black"
            }`}
          >
            CONTACT US
          </a>
        </nav>

        <div className="hidden md:flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <div className="pr-4 md:pr-[50px]">
            <Flipbook />
          </div>
          <div className="bg-[#FF902E] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center text-white p-2 md:pr-[50px] md:pl-[34px] py-[12px] md:py-[25px]">
            <i className="bi bi-telephone-fill text-[20px] md:text-[26px]"></i>
            <div className="flex flex-col">
              <a
                href="tel:+13107565533"
                className="text-[16px] md:text-[20px] text-white font-rajdhani font-bold leading-normal"
              >
                +1 (310) 756 5533
              </a>
              <a
                href="tel:+8801748771945"
                className="text-[16px] md:text-[20px] text-white font-rajdhani font-bold leading-normal"
              >
                +880 1748 771 945
              </a>
            </div>
          </div>
        </div>

        

        <div
          className="md:hidden text-black text-[50px] pr-[20px] mt-[5px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
        </div>

      </header>
        <div
          className={`fixed top-[80px] left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center space-y-4 py-6 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0 visible" : "translate-x-full invisible"
          }`}
        >
          
          <Link
            href="/"
            className={`text-lg font-bold hover:text-[#FF902E] ${
              pathname === "/" ? "text-[#FF902E]" : "text-black"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-lg font-bold hover:text-[#FF902E] ${
              pathname === "/about-us" ? "text-[#FF902E]" : "text-black"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/countries-we-serve"
            className={`text-lg font-bold hover:text-[#FF902E] ${
              pathname === "/countries-we-serve" ? "text-[#FF902E]" : "text-black"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Countries We Serve
          </Link>
          <Link
            href="/contact-us"
            className={`text-lg font-bold hover:text-[#FF902E] ${
              pathname === "/contact-us" ? "text-[#FF902E]" : "text-black"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
        
    </>
  );
};

export default Header;