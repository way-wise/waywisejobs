/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import Link from "next/link";

const CountriesCard = ({country, image, tag, link}) => {
  

  return (
    <Link
      href={link}
      className="bg-[#2A37EA] hover:bg-[#222988] py-[20px] group"
    >
      <div className="md:mb-[18px]">
        <h2 className="text-[20px] md:text-[30px] font-bold text-white uppercase font-rajdhani leading-[20px] md:leading-[35px] ml-[9px] mb-[10px] ">
          {tag}
        </h2>
        <div className="overflow-hidden">
          <img
            src={image}
            alt="country"
            className="w-full h-full object-cover group-hover:scale-105  transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-[9px]">
        <div className="flex flex-wrap gap-[10px] mt-[15px]">
          {country.map((country, index) => (
            <p
              key={index}
              className="text-[16px] md:text-[20px] bg-[#FF902E] px-[10px] py-[5px] font-bold text-white uppercase font-rajdhani leading-[20px] md:leading-[28px]"
            >
              {country}
            </p>
          ))}
        </div>
        <svg
          className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 mt-[14px]"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.29984 18.3333L0.666504 16.6999L14.1998 3.16659H6.49984V0.833252H18.1665V12.4999H15.8332V4.79992L2.29984 18.3333Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
};

export default CountriesCard;
