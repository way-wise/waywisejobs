/* eslint-disable @next/next/no-img-element */
import React from 'react'

const InfoCard = ({item}) => {
  return (
    <div
      style={{ background: item.background, color: item.color }}
      className={`p-[30px] border-b border-solid border-gray-200`}
    >
      <div className="flex items-center gap-2 md:pb-[20px]">
        <i className={`${item.icon} text-[48px]`}></i>
        <div>
          <h2 className="text-[30px] font-bold font-rajdhani uppercase">
            {item.title}
          </h2>
          <p className="text-[16px] font-rubik ">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
