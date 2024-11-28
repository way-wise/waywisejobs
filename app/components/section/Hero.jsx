/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HeroImg from '../../../public/image/Hero1 1.png';
const Hero = () => {
  return (
    <section>
      <div className="">
        <img
          src={HeroImg.src}
          alt=""
          className="h-[700px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;