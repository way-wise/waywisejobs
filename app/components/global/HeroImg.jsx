/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeroImg = ({title1, title2, image}) => {
  return (
    <div className="relative">
      <div className="md:w-full md:h-full">
        <img
          src={image}
          alt="hero"
          className="w-full h-[200px] md:w-full md:h-full object-cover"
        />
      </div>
      <div className="absolute md:top-[169px] top-[80px] md:left-[50%] left-[70px] md:-translate-x-[50%]  text-center">
        <h2 className="font-rajdhani font-bold text-[20px] md:text-[80px] md:leading-[104%] text-white uppercase ">
          {title1}
        </h2>
        <h2 className="bg-[#FF902E] py-[9px] px-[32px] font-rajdhani font-bold md:text-[80px] text-[20px] md:leading-[104%] text-white uppercase ">
          {title2}
        </h2>
      </div>
    </div>
  );
}

export default HeroImg;
