/* eslint-disable @next/next/no-img-element */
import React from "react";


const DetailCardServiceOne = ({title, description, image}) => {

  const HighlightTitle = ({ title }) => {
    const words = title.split(" ");
    const lastWord = words.pop();
    const remainingWords = words.join(" ");

    return (
      <h2 className="text-[20px] md:text-[48px] font-bold text-black uppercase font-rajdhani leading-[28px] md:leading-[61px] ">
        {remainingWords} <span className="text-[#2A37EA]">{lastWord}</span>
      </h2>
    );
  };
  

  return (
    <div className="container md:mb-[172px] mb-[50px]">
      <div className="md:w-full flex flex-col lg:flex-row mb-[50px]">
        <div className="w-full lg:w-1/2">
        
            <HighlightTitle title={title} />
         
          <p className="text-[16px] md:text-[20px] font-rubik text-black leading-[24px] md:leading-[28px] pe-8 py-[20px]">
            {description}
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <img src={image} alt="service" className="w-full  relative z-30" />
          <div className="bg-[#2A37EA] w-[308px] h-[240px] absolute -bottom-[30px] -right-[50px] z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailCardServiceOne;
