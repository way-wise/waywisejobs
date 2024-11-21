import React from 'react';
import HeroImg from '../../../public/image/Slider-1.jpg'

const Hero = () => {
  return (
    <section>
      <div className="">
        <img src={HeroImg.src} alt="" className="h-[700px] w-full obj" />
      </div>
    </section>
  );
};

export default Hero;