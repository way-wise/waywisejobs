/* eslint-disable @next/next/no-img-element */
import React from 'react';
import FooterLogo from '@/image/way_wise_trading_logo.webp'
import Image from 'next/image';
import Logo from '@/image/Logo-2.svg'
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-[#2A37EA] mt-[100px]">
      <div className="container mx-auto">
        <div className="pt-[40px] pb-[15px] md:flex justify-between">
          <div className="flex flex-col gap-4 items-center pt-[30px]">
            <Image src={Logo} alt="logo" width={220} height={120} />
            <p className="text-[16px] text-white">
              Don’t hesitate, contact us for better help and services.
            </p>
          </div>
          <div className="text-white font-rajdhani md:pl-[60px] pt-[30px]">
            <h2 className="text-[20px] font-bold uppercase leading-[28px] mb-[20px]">
              QUICK LINKS
            </h2>
            <ul className="font-bold">
              <li className=" text-[16px] leading-[26px] pb-[12px]">
                <Link href="/" className="hover:text-white/90 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-[16px] leading-[26px] pb-[12px]">
                <Link href="/about-us" className="hover:text-white/90 transition-colors">
                  About Us
                </Link>
              </li>
              <li className="text-[16px] leading-[26px] pb-[12px]">
                <Link href="/countries-we-serve" className="hover:text-white/90 transition-colors">
                  Countries We Serve
                </Link>
              </li>
              <li className="text-[16px] leading-[26px] pb-[12px]">
                <Link href="/contact-us" className="hover:text-white/90 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white font-rajdhani md:max-w-[600px]">
            <div className="flex gap-10 mb-[15px] pt-[30px]">
              <div className="w-[50%]">
                <h2 className="text-[20px] font-bold uppercase leading-[28px] mb-[20px]">
                  CONTACT US
                </h2>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+1 (818) 516 0255"
                    className="font-bold text-[20px] leading-[28px] text-white"
                  >
                    +1 (818) 516 0255
                  </a>
                  <a
                    href="tel:+1 (818) 516 0255"
                    className="font-bold text-[20px] leading-[28px] text-white"
                  >
                    +1 (818) 516 0255
                  </a>
                </div>
              </div>
              <div className="w-[50%]">
                <h2 className="text-[20px] font-bold uppercase leading-[28px] mb-[20px]">
                  ADDRESS
                </h2>
                <p className="text-[16px] font-normal leading-[26px]">
                  Saddleback Ridge Rd, Santa Clarita, California, USA
                </p>
              </div>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-[#FF902E]"
              />
              <button
                type="submit"
                className="bg-white text-[#2A37EA] hover:bg-[#FF902E] hover:text-white font-bold px-6 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10">
          <div className="container md:py-6 py-[20px] md:flex md:justify-between justify-center items-center text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Copyright{" "}
              <span className="hover:text-[#FF902E] font-semibold">
                Way-Wise Jobs.
              </span>{" "}
              All rights reserved.
            </p>

            <div className="flex items-center gap-6 justify-center">
              <div className="flex gap-4 text-sm text-gray-400 text-center">
                <p>Developed by</p>
                <a
                  href="https://waywisetech.com"
                  target="_blank"
                  className="hover:text-[#FF902E] text-white font-bold transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF902E] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Way-Wise Tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;