import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/image/WWTrading_horizontal.webp';

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center px-6 py-4 shadow">
      <div className="flex items-center pl-[50px] pr-[80px]">
        <Image
          src={logo}
          alt="Way-Wise Trading Logo"
          width={300}
          height={100}
        />
      </div>

      <nav className="hidden md:flex space-x-6 text-[16px] font-semibold">
        <a href="#home" className="text-red-600">
          HOME
        </a>
        <a href="#about-us" className="hover:text-red-600">
          ABOUT US
        </a>
        <a href="#countries-we-export" className="hover:text-red-600">
          COUNTRIES WE EXPORT
        </a>
        <a href="#factories" className="hover:text-red-600">
          FACTORIES WE WORK
        </a>
        <a href="#contact" className="hover:text-red-600">
          CONTACT US
        </a>
      </nav>

      <div className="flex items-center">
        <div className="pr-[50px]">
          <a
            href="#quote"
            className=" bg-transparent border-2 py-[14px] px-[30px] rounded-[5px] border-solid border-[#0b2239] text-[#0b2239] font-semibold hover:bg-[#0b2239] hover:text-white"
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