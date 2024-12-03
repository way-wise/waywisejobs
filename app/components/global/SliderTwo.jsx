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

export default function SliderTwo() {
  const sliderData = [
    {
      image: Slider1.src,
      link: "/united-states",
    },
    {
      image: Slider2.src,
      link: "/united-arab-emirates",
    },
    {
      image: Slider3.src,
      link: "/canada",
    },
  ];


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
    <div className="relative z-50 px-4 lg:px-8">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <Link
            href={item.link}
            className="md:h-[520px] h-[400px] px-[30px] flex justify-center items-center focus:outline-none md:mt-[90px] mt-[220px]"
            key={index}
          >
            <img
              src={item.image}
              alt={`slider-${index}`}
              className="object-cover w-full h-full rounded-lg "
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
