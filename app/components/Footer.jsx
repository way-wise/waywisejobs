/* eslint-disable @next/next/no-img-element */
import React from 'react';
import FooterLogo from '../../public/image/way_wise_trading_logo.webp'

const Footer = () => {
  return (
    <footer className="bg-[#2A37EA] mt-[100px]">
      <div className="container mx-[291px] max-w-[1200px]">
        <div className="pt-[40px] pb-[15px] flex justify-between">
          <div>
            {/* <img src={FooterLogo.src} alt="logo" /> */}
            <span className="text-[24px] font-bold text-white">
              WAY-WISE <span className="text-[#FF902E]">JOBS</span>
            </span>
            <p className="text-[16px] text-white">
              Don’t hesitate, contact us for better help and services.
            </p>
          </div>
          <div className="text-white font-rajdhani pl-[60px]">
            <h2 className="text-[20px] font-bold uppercase leading-[28px] mb-[20px]">
              QUICK LINKS
            </h2>
            <ul>
              <li className="font-normal text-[16px] leading-[26px] pb-[12px]">
                <a href="#" className="hover:text-[#2A37EA] transition-colors">
                  Home
                </a>
              </li>
              <li className="font-normal text-[16px] leading-[26px] pb-[12px]">
                <a
                  href="#about-us"
                  className="hover:text-[#2A37EA] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li className="font-normal text-[16px] leading-[26px] pb-[12px]">
                <a
                  href="#countries-we-export"
                  className="hover:text-[#2A37EA] transition-colors"
                >
                  Countries We Export
                </a>
              </li>
              <li className="font-normal text-[16px] leading-[26px] pb-[12px]">
                <a
                  href="#factories-we-work"
                  className="hover:text-[#2A37EA] transition-colors"
                >
                  Factories We Work
                </a>
              </li>
              <li className="font-normal text-[16px] leading-[26px] pb-[12px]">
                <a
                  href="#contact-us"
                  className="hover:text-[#2A37EA] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white font-rajdhani max-w-[600px]">
            <div className="flex gap-10 mb-[15px]">
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
          <div className="container py-6 flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Copyright Way-Wise Jobs. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm text-gray-400">
                <p>Developed by</p>
                <a href="#" className="hover:text-[#FF902E] transition-colors">
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