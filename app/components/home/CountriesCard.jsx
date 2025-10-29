/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import Link from "next/link";

const CountriesCard = ({country, image, tag, link, index}) => {

  return (
    <Link href={link} className={`${index === 0 ? 'col-span-full' : ''}`}>
      <div className={`${index === 0 ? 'max-w-[600px] mx-auto' : 'md:mb-[30px]'} group`} style={{boxShadow: "0 5px 5px rgb(229 231 235)"}}>
        <div
          className={` text-white h-[60px] flex  items-center font-rajdhani font-bold text-[20px] leading-[28px] md:text-[30px] md:leading-[32px] px-[10px] bg-black`}
        >
          <h2>{tag}</h2>
        </div>

        <div className="overflow-hidden">
          <img
            src={image}
            alt="country"
            className="w-full h-full object-cover group-hover:scale-105  transition-all duration-300"
          />
        </div>
        <div
          className={`flex justify-between items-center px-[10px] py-[10px]`}
        >
          <div className="flex flex-wrap gap-[10px] mt-[15px]">
            {country.map((country, index) => (
              <p
                key={index}
                className="text-[16px] md:text-[20px] bg-gray-600 px-[10px] py-[5px] font-bold text-white uppercase font-rajdhani leading-[20px] md:leading-[28px] rounded-md"
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
              fill="blue"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CountriesCard;
