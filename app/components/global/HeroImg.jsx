/* eslint-disable @next/next/no-img-element */
import React from 'react'


const HeroImg = ({title1, title2, image}) => {
  return (
    <div className="relative">
      <div className="lg:w-full lg:h-full">
        <img
          src={image}
          alt="hero"
          className="w-full h-[200px] md:w-full md:h-[300px] lg:w-full lg:h-full object-cover"
        />
      </div>
      <div className="absolute lg:top-[169px] md:top-[100px] top-[80px] md:left-[50%] left-[70px] md:-translate-x-[50%]  text-center">
        <h2 className="font-rajdhani font-bold text-[20px] lg:text-[80px] md:text-[30px] lg:leading-[104%] text-white uppercase ">
          {title1}
        </h2>
        <h2 className="bg-[#FF902E] py-[9px] px-[32px] font-rajdhani font-bold lg:text-[80px] md:text-[25px] lg:leading-[104%] text-white uppercase ">
          {title2}
        </h2>
      </div>

    </div>
  );
}

export default HeroImg;
