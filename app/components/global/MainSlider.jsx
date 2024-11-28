/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../../public/image/Hero1 1.png";
import Slider2 from "../../../public/image/Slider-2.jpg";
import Slider3 from "../../../public/image/Slider-3.jpg";
import Slider5 from "../../../public/image/Slider-5.jpg";

export default function MainSlider() {
  const sliderData = [Slider1, Slider2, Slider3, Slider5];

  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[150px] right-0 md:top-[350px] md:right-10 text-white bg-transparent cursor-pointer p-2 rounded-full z-10 translate-[-top[50%]"
      >
        <i className="bi bi-arrow-right text-2xl"></i>
      </div>
    );
  };

 
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[150px] md:top-[350px] md:left-10 text-white bg-transparent cursor-pointer p-2 rounded-full z-10 translate-[-top[50%]"
      >
        <i className="bi bi-arrow-left text-2xl"></i>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <CustomNextArrow />, // Assign Custom Next Arrow
    prevArrow: <CustomPrevArrow />, // Assign Custom Prev Arrow
  };

  return (
    <Slider {...settings}>
      {sliderData.map((item, index) => (
        <div
          className="md:h-[700px] h-[300px] w-full !flex justify-center items-end focus:outline-none relative"
          key={index}
        >
          <img
            src={item.src}
            alt=""
            className="object-cover w-full h-full border-none"
          />
          <div className="absolute top-[130px] md:top-1/2 md:left-[200px] md:-translate-y-1/2 md:max-w-4xl text-center md:text-left">
            <div className="text-[10px] md:text-2xl font-bold text-white  bg-[#FF902E] inline-block px-4 py-2 rounded-md">
              <p className="">Lorem ipsum dolor sit.</p>
            </div>
            <h2 className="text-[20px] md:text-[40px] font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, doloribus!
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  );
}
