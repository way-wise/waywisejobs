/* eslint-disable @next/next/no-img-element */
import React from "react";
import HomeOne from '@/image/HomeDetails.jpg';

const DetailSection = () => {
  const listData = [
    {
      title: "Strong Foundation",
    },
    {
      title: "Quality Building",
    },
  ];

  return (
    <div className="container mx-auto lg:mt-[100px] md:mt-[50px] mt-[10px]">
      <div className="lg:flex gap-[30px] w-full">
        <div className="lg:w-[50%]">
          <div>
            <h4 className="text-[16px] font-rajdhani uppercase font-bold leading-[29px] text-[#FF902E]">
              Get informed -
            </h4>
            <h1 className="md:text-[54px] text-[20px] font-bold font-rajdhani uppercase leading-[64px] text-black">
              Your Career, Beyond Borders!
            </h1>
          </div>

          <ul className="flex flex-col md:flex-row lg:flex-row md:items-center md:justify-center lg:items-start gap-2 flex-wrap lg:mt-8 mt-4">
            {listData.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-[#F8FAFB] border border-[#E5E4E2] md:p-8 p-4 rounded-[3px]"
              >
                <i
                  className="bi bi-check-circle-fill"
                  style={{ color: "#FF902E" }}
                ></i>
                <p className="font-medium font-rubik text-[16px] text-black">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

          <p className="md:text-[18px] text-[14px] font-rubik font-normal leading-[30px] text-gray-500 mt-8">
            Way-Wise Jobs connects you to global opportunities. Whether
            you dream of working in the Middle East, Africa, or beyond, we are
            here to make it happen.
          </p>
        </div>
        <div className="hidden md:block lg:w-[50%]">
          <img
            src={HomeOne.src}
            alt=""
            className="w-full lg:h-[500px] md:h-[300px] h-[200px] object-cover lg:rounded-[50px] md:rounded-[30px] rounded-[10px] mt-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
