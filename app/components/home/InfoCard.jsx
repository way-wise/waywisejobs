/* eslint-disable @next/next/no-img-element */
import React from "react";

const InfoCard = ({ item }) => {
  return (
    <div
      // style={{ background: item.background, color: item.color }}
      className={`p-[10px] md:p-[20px] lg:px-[30px]  relative`}
    >
      {item.description !== "North America" && (
        <div className="absolute border-l-2 border-solid border-gray-200 h-20 top-4"></div>
      )}
      <div className=" flex items-center justify-center">
        <div className="flex lg:flex-row flex-col items-center gap-8">
          <i
            className={`${item.icon} lg:text-[48px] text-[30px] md:text-[40px]`}
          ></i>
          <div>
            <h2 className="lg:text-[30px] text-center text-[20px] md:text-[25px] font-bold font-rajdhani uppercase">
              {item.title}
            </h2>
            <p className="text-[16px] lg:text-[18px] md:text-[17px] uppercase font-rubik text-center">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
