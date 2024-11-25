/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../../public/image/Hero1 1.png";
import Slider2 from "../../../public/image/Slider-2.jpg";
import Slider3 from "../../../public/image/Slider-3.jpg";
import Link from "next/link";

export default function SliderTwo() {
  const sliderData = [Slider1, Slider2, Slider3, Slider1];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    
  };

  return (
    <div className="relative z-50 px-4 lg:px-8">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Link
            href="/"
            className="h-[520px] px-[30px] flex justify-center items-center focus:outline-none"
            key={index}
          >
            <img
              src={item.src}
              alt={`slider-${index}`}
              className="object-cover w-full h-full rounded-lg "
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
