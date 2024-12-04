/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "@/image/Hero1 1.png";
import Slider2 from "@/image/Slider-2.jpg";
import Slider3 from "@/image/Slider-3.jpg";
import Slider5 from "@/image/Slider-5.jpg";

export default function MainSlider() {
  const sliderData = [
    {
      image: Slider1.src,
      title: "Empowering Global Careers!",
      description: "Start your international journey with Way-Wise Jobs today.",
    },
    {
      image: Slider2.src,
      title: "Your Trusted Partner",
      description:
        "We make your path to global opportunities simple and stress-free.",
    },
    {
      image: Slider3.src,
      title: "Bridge to Opportunities",
      description: "Connect with high-demand jobs worldwide effortlessly.",
    },
    {
      image: Slider5.src,
      title: "Your Career Awaits!",
      description: "Step into a brighter future with Way-Wise Jobs.",
    },
  ];


  
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
    nextArrow: <CustomNextArrow />, 
    prevArrow: <CustomPrevArrow />, 
  };

  return (
    <Slider {...settings}>
      {sliderData.map((item, index) => (
        <div
          className="md:h-[700px] h-[300px] w-full !flex justify-center items-end focus:outline-none relative"
          key={index}
        >
          <img
            src={item.image}
            alt=""
            className="object-cover w-full h-full border-none"
          />
          <div className="absolute top-[130px] md:top-1/2 md:left-[200px] md:-translate-y-1/2 md:max-w-4xl text-center md:text-left">
            <div className="text-[10px] md:text-[20px] font-bold text-white  bg-[#FF902E] uppercase inline-block px-4 py-2 ">
              <p>{item.title}</p>
            </div>
            <h2 className="text-[20px] md:text-[40px] font-bold text-white uppercase">
              {item.description}
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  );
}
