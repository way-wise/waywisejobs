import Image from 'next/image';
import React from 'react'

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
      <div className="bg-[#2A37EA] p-[30px] w-[40%] absolute -bottom-[50px] left-0">
        <h2 className="text-[30px] text-white font-rajdhani font-semibold uppercase mt-[15px]">
          GET YOUR <span className="text-white">FREE</span> CONSLUTING
        </h2>
        <p className="text-[16px] text-gray-300 font-rubik">
          {`Don’t hesitate, contact us for better help and services.`}
        </p>
        <div className="items-center gap-2  mt-[15px]">
          <div className="flex items-center gap-4">
            <i className="bi bi-telephone-fill text-[20px] text-white"></i>
            <a
              href="tel:+919876543210"
              className="text-[24px] text-white font-rajdhani font-bold"
            >
              +91 9876543210
            </a>
            <span className="text-[16px] text-white font-rubik">Or</span>
            <a
              href="tel:+919876543210"
              className="text-[24px] text-white font-rajdhani font-bold"
            >
              +91 9876543210
            </a>
          </div>
          <a
            href="mailto:naheantarik@waywisetech.com"
            className="text-[16px] text-white font-rubik flex items-center gap-4 mt-[15px]"
          >
            <i className="bi bi-envelope-at-fill text-[20px] text-white"></i>
            naheantarik@waywisetech.com
          </a>
        </div>
        <div className="mt-[25px]">
          <div className="font-rajdhani font-bold text-[16px] text-white cursor-pointer uppercase hover:text-[#FF902E]  transition-all duration-300">
            <a href="/contact-us" className="inline-block">
              Join us Now +
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaTwo;
