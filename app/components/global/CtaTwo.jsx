/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import CtaIcn from '../../../public/image/icon.svg'

const CtaTwo = () => {
  return (
    <div className="relative">
      <div className="relative w-[80%] h-[500px] ">
        <Image
          src="/image/CtaOne.jpg"
          alt="cta-two"
          fill
          className="object-cover bg-left-bottom"
        />
      </div>
      <div className=" bg-white pl-[30px] pb-[30px] pr-[30px] pt-[20px] w-[40%] absolute -bottom-[90px] left-0  border-b-[8px] border-solid border-gray-200">
        <h2 className="text-[40px] text-black font-rajdhani font-bold uppercase mt-[15px]">
          GET YOUR <span className="text-[#2A37EA]">FREE</span> CONSULTING
        </h2>
        <p className="text-[16px] text-gray-600 font-rubik">
          {`Don’t hesitate, contact us for better help and services.`}
        </p>
        <div className="items-center gap-2  mt-[30px]">
          <div className="flex items-center gap-4">
            <i className="bi bi-telephone-fill text-[20px] text-[#2A37EA]"></i>
            <a
              href="tel:+919876543210"
              className="text-[22px] text-black font-rajdhani font-semibold"
            >
              +91 9876543210
            </a>
            <span className="text-[16px] text-black font-rubik">Or</span>
            <a
              href="tel:+919876543210"
              className="text-[24px] text-black font-rajdhani font-semibold"
            >
              +91 9876543210
            </a>
          </div>
          <a
            href="mailto:naheantarik@waywisetech.com"
            className="text-[22px] text-black font-rajdhani font-semibold flex items-center gap-4 mt-[8px]"
          >
            <i className="bi bi-envelope-at-fill text-[20px] text-[#2A37EA]"></i>
            naheantarik@waywisetech.com
          </a>
        </div>
        <div className="mt-[35px] mb-[16px]">
          <div className="font-rajdhani font-bold text-[20px] hover:text-[#2A37EA] cursor-pointer uppercase text-[#FF902E]  transition-all duration-300">
            <a href="/contact-us" className="inline-block">
              Join us Now +
            </a>
          </div>
        </div>
        <div className="absolute -top-10 -right-12">
          <img src={CtaIcn.src} alt="Icon" className="w-[105px] h-[105px]" />
        </div>
      </div>
    </div>
  );
}

export default CtaTwo;
