/* eslint-disable @next/next/no-img-element */
import React from "react";


const DetailCardServiceOne = ({title, description, image}) => {
  

  return (
    <div className="container md:mb-[172px] mb-[50px]">
      
        <div className="md:w-full flex flex-col md:flex-row mb-[50px]">
          <div className="w-full md:w-1/2">
            <h2 className="text-[25px] md:text-[48px] font-bold text-black uppercase font-rajdhani leading-[28px] md:leading-[61px] ">
              {title}
            </h2>
            <p className="text-[16px] md:text-[20px] font-rubik text-black leading-[24px] md:leading-[28px] pe-8 py-[20px]">
              {description}
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img
              src={image}
              alt="service"
              className="w-full relative z-30"
            />
            <div
              className="bg-[#2A37EA] w-[308px] h-[240px] absolute -bottom-[30px] -right-[50px] z-10"
            ></div>
          </div>
        </div>
    </div>
  );
};

export default DetailCardServiceOne;
