/* eslint-disable @next/next/no-img-element */
import React from "react";
import HomeOne from '../../../public/image/HomeDetails.jpg';

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
    <div className="container mx-auto md:mt-16 mt-[10px]">
      <div className="flex gap-[30px] w-full">
        <div className="md:w-[50%]">
          <div>
            <h4 className="text-[16px] font-rajdhani uppercase font-bold leading-[29px] text-[#2A37EA]">
              Get informed -
            </h4>
            <h1 className="md:text-[54px] text-[20px] font-bold font-rajdhani uppercase leading-[64px] text-black">
              Let’s Build Something Creative together
            </h1>
          </div>

          <ul className="flex flex-col md:flex-row gap-4 flex-wrap md:mt-8 mt-4">
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
            Way-Wise Trading Limited excels as a top garment manufacturer and
            exporter. We offer high-quality, innovative fabrics and garments for
            diverse climates and markets. Our expertise ensures each product
            meets top standards of texture, feel, and durability. Discover how
            we can bring your fashion visions to life.
          </p>
        </div>
        <div className="hidden md:block md:w-[50%]">
          <img
            src={HomeOne.src}
            alt=""
            className="w-full h-[500px] object-cover rounded-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
