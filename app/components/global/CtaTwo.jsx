/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import CtaIcn from '@/image/icon.svg'
import CtaImg from '@/image/CtaOne.jpg'

const CtaTwo = () => {
  return (
    <div className="relative">
      <div className="relative md:w-[80%] md:h-[500px] w-full h-[400px] ">
        <Image
          src={CtaImg.src}
          alt="cta-two"
          fill
          className="object-cover bg-left-bottom"
        />
      </div>
      <div className=" bg-white pl-[30px] pb-[30px] pr-[30px] pt-[20px] md:w-[40%] w-full absolute -bottom-[150px] md:-bottom-[90px] left-0  border-b md:border-b-[8px] border-solid border-gray-200">
        <h2 className="md:text-[40px] text-[24px] text-black font-rajdhani font-bold uppercase mt-[15px]">
          GET YOUR <span className="text-[#2A37EA]">FREE</span> CONSULTING
        </h2>
        <p className="text-[16px] text-gray-600 font-rubik">
          {`Don't Wait—Transform Your Career Now!`}
        </p>
        <div className="items-center gap-2  mt-[30px]">
          <div className="flex items-center gap-4">
            <i className="bi bi-telephone-fill md:text-[20px] text-[16px] text-[#2A37EA]"></i>
            <a
              href="tel:+13107565533"
              className="md:text-[22px] text-[18px] text-black font-rajdhani font-semibold"
            >
              +1 (310) 756 5533
            </a>
            <span className="md:text-[16px] text-[12px] text-black font-rubik">
              Or
            </span>
            <a
              href="tel:+8801748771945"
              className="md:text-[24px] text-[18px] text-black font-rajdhani font-semibold"
            >
              +880 1748 771 945
            </a>
          </div>
          <a
            href="mailto:naheantarik@waywisetech.com"
            className="md:text-[22px] text-[18px] text-black font-rajdhani font-semibold flex items-center gap-4 mt-[8px]"
          >
            <i className="bi bi-envelope-at-fill md:text-[20px] text-[16px] text-[#2A37EA]"></i>
            info@waywisejobs.com
          </a>
        </div>
        <div className="mt-[35px] mb-[16px]">
          <div className="font-rajdhani font-bold md:text-[20px] text-[16px] hover:text-[#2A37EA] cursor-pointer uppercase text-[#FF902E]  transition-all duration-300">
            <a href="/contact-us" className="inline-block">
              Join us Now +
            </a>
          </div>
        </div>
        <div className="hidden md:block md:absolute md:-top-10 md:-right-12">
          <img
            src={CtaIcn.src}
            alt="Icon"
            className="md:w-[105px] md:h-[105px] w-[80px] h-[80px]"
          />
        </div>
      </div>
    </div>
  );
}

export default CtaTwo;
