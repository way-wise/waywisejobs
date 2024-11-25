/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../../public/image/Hero1 1.png'    
import Slider2 from '../../../public/image/Slider-2.jpg'    
import Slider3 from '../../../public/image/Slider-3.jpg'    

export default function MainSlider() {
  const sliderData = [Slider1, Slider2, Slider3, Slider1]

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,

  };


  return (
    <Slider {...settings}>
      {sliderData.map((item, index) => (
        <div
          className="h-[700px] w-full !flex justify-center items-end focus:outline-none relative"
          key={index}
        >
          <img
            src={item.src}
            alt=""
            className="object-cover w-full h-full border-none"
          />
          <div className="absolute top-1/2 left-[200px] -translate-y-1/2 max-w-4xl">
            <div className="text-2xl font-bold text-white bg-[#FF902E] inline-block px-4 py-2 rounded-md">
              Lorem ipsum dolor sit.
            </div>
            <h2 className="text-[40px] font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, doloribus!
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  );
}
