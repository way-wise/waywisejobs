import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center  shadow">
      <div className="flex items-center font-rubik pl-[50px] pr-[80px]">
        <span className="text-[24px] font-bold text-black ml-3">
          WAY-WISE <span className="text-[#eb4438]">TRADING</span>
        </span>
      </div>

      <nav className="hidden md:flex space-x-6 text-[18px]  font-rajdhani font-bold">
        <Link href="/" className="text-red-600 font-bold">
          HOME
        </Link>
        <a href="/about-us" className="hover:text-red-600 font-bold">
          ABOUT US
        </a>
        <a
          href="#countries-we-export"
          className="hover:text-red-600 font-bold  "
        >
          COUNTRIES WE EXPORT
        </a>
        <a href="#factories" className="hover:text-red-600 font-bold">
          FACTORIES WE WORK
        </a>
        <a href="#contact" className="hover:text-red-600 font-bold">
          CONTACT US
        </a>
      </nav>

      <div className="flex items-center">
        <div className="pr-[50px]">
          <a
            href="#quote"
            className="font-rajdhani bg-transparent border-2 py-[14px] px-[30px] rounded-[5px] border-solid border-[#0b2239] text-[#0b2239] hover:bg-[#0b2239] hover:text-white font-bold"
          >
            GET A FREE QUOTE +
          </a>
        </div>
        <div className="bg-[#ee2524] text-center text-white pr-[50px] pl-[50px]">
          <p className="text-sm font-bold">Call Us Now!</p>
          <p className="text-sm">+1 (818) 516 0255</p>
          <p className="text-sm">+1 (661) 362 9727</p>
        </div>
      </div>
    </header>
  );
};

export default Header;