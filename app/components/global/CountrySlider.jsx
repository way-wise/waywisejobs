/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../../public/image/2nd-slider-1.jpg";
import Slider2 from "../../../public/image/2nd-slider-2.jpg";
import Slider3 from "../../../public/image/2nd-slider-3.jpg";
import Link from "next/link";

export default function CountrySlider() {
  const sliderData = [Slider1, Slider2, Slider3];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <h2 className="text-center text-[30px] md:text-[48px] font-bold uppercase font-rajdhani mt-[50px] md:mt-[100px]">countries we serve</h2>
      <div className=" md:px-4 lg:px-8">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div
              href="/"
              className=" h-[300px] md:h-[520px] px-[30px] md:flex md:justify-center md:items-center focus:outline-none mt-[50px] md:mt-[90px]"
              key={index}
            >
              <img
                src={item.src}
                alt={`slider-${index}`}
                className="object-cover  w-full h-[300px] md:w-full md:h-full rounded-lg "
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
